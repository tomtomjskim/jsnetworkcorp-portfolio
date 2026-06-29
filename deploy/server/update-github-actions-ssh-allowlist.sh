#!/usr/bin/env bash
set -euo pipefail

SET_NAME="${GITHUB_ACTIONS_IPSET_NAME:-github_actions_v4}"
TMP_SET="${SET_NAME}_next"
SSH_PORT="${GITHUB_ACTIONS_SSH_PORT:-22}"
RULE_COMMENT="jsnetworkcorp-github-actions-rsync-ssh"
META_FILE="$(mktemp)"

cleanup() {
  rm -f "$META_FILE"
}
trap cleanup EXIT

curl -fsSL https://api.github.com/meta > "$META_FILE"

ipset create "$TMP_SET" hash:net family inet -exist
ipset flush "$TMP_SET"

python3 - "$TMP_SET" "$META_FILE" <<'PY'
import ipaddress
import json
import subprocess
import sys

set_name = sys.argv[1]
meta_file = sys.argv[2]

with open(meta_file, encoding="utf-8") as handle:
    data = json.load(handle)

for cidr in data.get("actions", []):
    try:
        network = ipaddress.ip_network(cidr, strict=False)
    except ValueError:
        continue
    if network.version != 4:
        continue
    subprocess.run(["ipset", "add", set_name, str(network), "-exist"], check=True)
PY

ipset create "$SET_NAME" hash:net family inet -exist
ipset swap "$TMP_SET" "$SET_NAME"
ipset destroy "$TMP_SET"

if ! iptables -C INPUT -p tcp --dport "$SSH_PORT" -m set --match-set "$SET_NAME" src -m comment --comment "$RULE_COMMENT" -j ACCEPT 2>/dev/null; then
  iptables -I INPUT 5 -p tcp --dport "$SSH_PORT" -m set --match-set "$SET_NAME" src -m comment --comment "$RULE_COMMENT" -j ACCEPT
fi
