# Deployment Templates

These files are public-safe deployment templates. They do not contain private keys, passwords, or generated interview material.

## Files

- `nginx/portfolio.jsnetworkcorp.com.conf`: public static portfolio host with optional protected `/interview/` path.
- `nginx/interview.jsnetworkcorp.com.conf`: protected interview subdomain host.
- `server/update-github-actions-ssh-allowlist.sh`: refreshes the GitHub Actions IPv4 allowlist for SSH rsync deploys.
- `systemd/jsnetworkcorp-github-actions-ssh-allowlist.*`: service/timer templates for periodic allowlist refresh.

## Server Paths

```text
/var/www/jsnetworkcorp-portfolio/public/        # rsync target for this public repo
/var/www/jsnetworkcorp-portfolio/interview-kit/ # protected output from private pipeline
/etc/nginx/.htpasswd-jsnetworkcorp-interview   # Basic Auth users
```

## Firewall

If SSH is restricted by iptables, install `ipset` and run the GitHub Actions allowlist script before triggering deployment:

```bash
sudo install -m 755 deploy/server/update-github-actions-ssh-allowlist.sh /usr/local/sbin/update-github-actions-ssh-allowlist
sudo cp deploy/systemd/jsnetworkcorp-github-actions-ssh-allowlist.service /etc/systemd/system/
sudo cp deploy/systemd/jsnetworkcorp-github-actions-ssh-allowlist.timer /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now jsnetworkcorp-github-actions-ssh-allowlist.timer
sudo systemctl start jsnetworkcorp-github-actions-ssh-allowlist.service
```

## TLS

Install the nginx templates first, point DNS at the server, then run:

```bash
sudo certbot --nginx -d portfolio.jsnetworkcorp.com
sudo certbot --nginx -d interview.jsnetworkcorp.com
```

If using only the protected path model, the second command is not required.
