# Public Repository Candidate Matrix

Strategy: `PS-v1.3.0`
Updated: 2026-08-17
Status: evidence-ranked review; target-specific ordering required

This inventory separates public R&D/tooling evidence from sanitized career case studies. A public repository is not automatically career evidence.

Detailed audit:

- `docs/github-portfolio/featured-repo-audit-2026-08-17.md`

## Current Primary / Featured Set

| Repository | Recommendation | Strongest signal | Current evidence risk |
|---|---|---|---|
| `stackforge-atlas` | **PRIMARY for general backend/system engineering** | runnable Node/PostgreSQL pilots, durability/recovery contracts, GitHub Actions validation, explicit unproven boundaries | recent reference work; do not imply production scale/HA/PITR |
| `harness-kit` | **FEATURED / PRIMARY for Internal Tools·AX target** | configuration-as-code pipeline, typed module contracts, 36 tests, merged Node 22/24 security-gated CI | npm publication/adoption not proven; low-severity dev-tool advisory remains a known limitation |
| `codex-workflow-skills` | **FEATURED for AI-native / SUPPORTING for general backend** | strong validation/failure-accounting story, public forward-test evidence, GitHub Actions validation | can over-rotate candidate identity toward AI workflow tooling |

## Current Target Ordering

### General backend

```text
1. stackforge-atlas
2. harness-kit
3. codex-workflow-skills when relevant
```

### Internal Tools / AX

```text
1. harness-kit
2. codex-workflow-skills
3. stackforge-atlas
```

### AI-native backend / platform

```text
1. stackforge-atlas or codex-workflow-skills depending on JD
2. codex-workflow-skills or stackforge-atlas
3. harness-kit
```

Ordering is relevance-based. It does not change the historical career evidence hierarchy.

## harness-kit Validation Snapshot

Merged main commit:

```text
c35136f562723f9c9af3945536ce3123c6f9bfc2
```

Validation contract on Node.js 22 and 24:

```text
npm ci
npm audit --audit-level=high
npm run lint
npm test        # 36 tests
npm run build
node dist/cli.js --help
```

All steps passed on merged `main`.

Adversarial note:

- the first lint/test/build pass was deliberately not accepted because dependency audit still exposed high-severity locked packages,
- lockfile remediation was applied within declared dependency ranges,
- the final workflow gates high-or-critical findings across all dependencies,
- a low-severity dev-tool advisory is retained as known limitation rather than hidden,
- CI does not prove production adoption or productivity gain.

## Hold / Supporting Candidates

| Repository | Recommendation | Reason |
|---|---|---|
| `agent-orchestra-monitor` | **HOLD as featured / SUPPORTING conceptually** | architecture is clear, but root/server entry points expose no obvious test contract and public release surfaces disagree (`1.8.0` docs/changelog vs `1.0.0` root package) |
| `db-mcp` | HOLD pending claim audit | README contains broad enterprise/high-performance/failover claims that need implementation evidence review |
| `aiwright` | HOLD pending implementation/metric audit | strong problem framing, but intelligence/scoring/adaptation claims and README metrics need current implementation/test verification before portfolio promotion |
| `jsnetworkcorp-portfolio` | SUPPORTING / meta | demonstrates portfolio governance and evidence boundaries; should not displace stronger engineering repositories |

## Excluded in Current Form

| Repository | Recommendation | Reason |
|---|---|---|
| `StoreShoppingMall-PHP` | **EXCLUDE from featured set** | minimal README and small utility collection; insufficient project/database/test context for a flagship backend narrative |

README expansion alone is not enough to promote `StoreShoppingMall-PHP`.

## Deferred Optional Reference

The previously proposed standalone PHP/commerce reference repository is **not current required work**.

Design is preserved only as an optional response to a demonstrated target-role gap:

- `docs/github-portfolio/backend-evidence-gap-plan.md`
- Issue #13 is closed `not_planned / deferred`

Reopen only when a target job explicitly requires recent PHP/Laravel/MySQL public code, a code-review sample, or repeated hiring feedback identifies a material public backend-code gap.

## Security-Sensitive Public Repositories

Repositories containing server configuration, deployment details, historical infrastructure, or environment material should not be featured until a dedicated secret/configuration exposure review passes.

Example:

- `jsnwcorp-server-config` — do not feature until a fresh security/redaction audit confirms public exposure is intentional and safe.

## Selection Principle

Final submission should use **3 or fewer primary public repositories when possible**.

```text
historical capability
→ sanitized career case

current implementation / verification
→ selected public repository
```

Do not relabel recent public tooling as employer production experience.

## Current Representation Strategy

The long-term PHP/business-system career is represented by sanitized Commerce/MES career cases and ready claim-bank entries.

Public repositories answer a different question:

> How does the candidate currently design, implement, verify, and document engineering work?

This avoids creating a job-search sample solely to make the technology name `PHP` appear in GitHub.

## Next Review Tasks

1. keep `harness-kit` merged-main CI green and recheck only when dependencies or implementation change materially,
2. repair or continue holding `agent-orchestra-monitor`,
3. audit `aiwright` only if a target role would benefit from it,
4. source-confirm high-value Commerce/MES deep-dive claims selectively,
5. limit featured repositories by target role rather than displaying the entire GitHub inventory.
