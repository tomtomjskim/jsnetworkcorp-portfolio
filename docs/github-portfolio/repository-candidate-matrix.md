# Public Repository Candidate Matrix

Strategy: PS-v1.1.0
Updated: 2026-08-17
Status: evidence-ranked review; inclusion must be rechecked before submission

This inventory separates public R&D/tooling evidence from sanitized career case studies. A public repository is not automatically career evidence.

Detailed audit:

- `docs/github-portfolio/featured-repo-audit-2026-08-17.md`

## Current Primary / Featured Set

| Repository | Recommendation | Strongest signal | Current evidence risk |
|---|---|---|---|
| `stackforge-atlas` | **PRIMARY** | runnable Node/PostgreSQL pilots, durability/recovery contracts, GitHub Actions validation, explicit unproven boundaries | recent reference work; do not imply production scale/HA/PITR |
| `harness-kit` | **FEATURED with verification caveat** | configuration-as-code pipeline, typed module contracts, unit-test structure, explicit trade-offs | no visible root GitHub Actions workflow; reproduce lint/test/build before final use |
| `codex-workflow-skills` | **FEATURED for AI-native / SUPPORTING for general backend** | strong validation/failure-accounting story, 2026-08-05 public forward-test evidence | can over-rotate the candidate identity toward AI workflow tooling |

## Hold / Supporting Candidates

| Repository | Recommendation | Reason |
|---|---|---|
| `agent-orchestra-monitor` | **HOLD as featured / SUPPORTING conceptually** | architecture is clear, but root/server entry points expose no obvious test contract and public release surfaces disagree (`1.8.0` docs/changelog vs `1.0.0` root package) |
| `db-mcp` | HOLD pending claim audit | README contains broad terms such as enterprise-ready, high-performance, failover, and broad cloud/MSA claims. Underlying safety boundaries may still be useful after evidence review. |
| `aiwright` | HOLD pending implementation/metric audit | strong problem framing and architecture, but intelligence/scoring/adaptation claims and README metrics require current implementation/test verification. |
| `jsnetworkcorp-portfolio` | SUPPORTING / meta | demonstrates portfolio governance and evidence boundaries; should not displace stronger engineering repositories. |

## Excluded in Current Form

| Repository | Recommendation | Reason |
|---|---|---|
| `StoreShoppingMall-PHP` | **EXCLUDE from featured set** | currently a minimal README plus small utility collection; insufficient project/database/test context to support a flagship backend narrative |

README expansion alone is not enough to promote `StoreShoppingMall-PHP`. A new sanitized backend reference implementation is preferred:

- `docs/github-portfolio/backend-evidence-gap-plan.md`

## Security-Sensitive Public Repositories

Repositories containing server configuration, deployment details, historical infrastructure, or environment-oriented material should not be featured until a dedicated secret/configuration exposure review passes. Public visibility is not sufficient evidence that the repository is safe to advertise.

Example review target:

- `jsnwcorp-server-config` — do not feature until a fresh security/redaction audit confirms that public exposure is intentional and safe.

## Current Direct URL Set

Primary / target-dependent featured:

- https://github.com/tomtomjskim/stackforge-atlas
- https://github.com/tomtomjskim/harness-kit
- https://github.com/tomtomjskim/codex-workflow-skills

Hold / follow-up:

- https://github.com/tomtomjskim/agent-orchestra-monitor
- https://github.com/tomtomjskim/db-mcp
- https://github.com/tomtomjskim/aiwright

Excluded in current form:

- https://github.com/tomtomjskim/StoreShoppingMall-PHP

## Selection Principle

The final primary list should balance the candidate's core backend/platform positioning.

For a general backend role, prefer a smaller set:

```text
1. future PHP/commerce reference implementation when promoted
2. StackForge Atlas
3. harness-kit or Codex Workflow Skills depending on role
```

For an AI-native backend/platform role:

```text
1. StackForge Atlas
2. Codex Workflow Skills
3. harness-kit
4. Agent Orchestra Monitor only after promotion fixes
```

## Current Representation Gap

Current public repositories demonstrate recent engineering methodology and agent/tooling work better than the candidate's long-term PHP/business-system experience.

Do not solve this by relabeling tooling projects as career projects or by expanding weak historical snippets into unsupported narratives.

Create a clean public-safe PHP/commerce operations reference implementation with real state, transaction, failure, test, and CI evidence.

## Next Review Tasks

1. execute clean validation for `stackforge-atlas`, `harness-kit`, and `codex-workflow-skills` where practical,
2. repair or continue holding `agent-orchestra-monitor`,
3. begin the PHP/commerce backend reference repository from the approved evidence-gap design,
4. adversarially review that new repository for proprietary-data leakage and historical-ownership confusion,
5. promote only after CI/reproducibility gates pass,
6. limit the final featured set to 3–5 repositories per target role.
