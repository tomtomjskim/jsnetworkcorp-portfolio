# Public Repository Candidate Matrix

Strategy: PS-v1.0.0
Updated: 2026-08-17
Status: initial review; inclusion must be rechecked before submission

This inventory separates public R&D/tooling evidence from sanitized career case studies. A public repository is not automatically career evidence.

## Initial Featured Candidates

| Repository | Current recommendation | Strongest signal | Main risk / follow-up |
|---|---|---|---|
| `stackforge-atlas` | FEATURED | evidence-backed software lifecycle, explicit contracts, failure/recovery drills, clearly bounded claims | verify pilot checks remain reproducible before citing results |
| `harness-kit` | FEATURED | modular Claude Code configuration as code; hooks/MCP/agents/permissions/workflows; unusually clear limitations | verify current build/test state and avoid implying broad adoption |
| `agent-orchestra-monitor` | FEATURED | read-only observer architecture, SSE monitoring, SQLite history, workflow visualization, explicit boundary of what the tool is not | verify current version/docs alignment and demo/build health |
| `codex-workflow-skills` | FEATURED/SUPPORTING | bounded intake, council, adversarial review, session knowledge closeout, resume multi-review; strong process/validation story | can be too AI-process-heavy; use only if target role values agent engineering |

## Hold / Supporting Candidates

| Repository | Recommendation | Reason |
|---|---|---|
| `db-mcp` | HOLD pending claim audit | README contains broad terms such as enterprise-ready, high-performance, failover, and broad cloud/MSA claims. The underlying safety boundaries may be useful, but portfolio wording should be narrower than unverified README marketing. |
| `aiwright` | HOLD pending implementation/metric audit | strong problem framing and architecture, but intelligence/scoring/adaptation claims and README metrics should be checked against current implementation/tests before portfolio promotion. |
| `StoreShoppingMall-PHP` | HOLD until README rebuild | directly relevant PHP/MySQL/non-framework signal, but current README is too thin to show problem-solving or engineering depth. A reconstructed public-safe case README could make this useful. |
| `jsnetworkcorp-portfolio` | SUPPORTING / meta | demonstrates portfolio content governance, public/private boundary, and evidence-first authoring; should not displace stronger engineering repositories. |

## Security-Sensitive Public Repositories

Repositories containing server configuration, deployment details, historical infrastructure, or environment-oriented material should not be featured until a dedicated secret/configuration exposure review passes. Public visibility is not sufficient evidence that the repository is safe to advertise.

Example review target:

- `jsnwcorp-server-config` — do not feature until a fresh security/redaction audit confirms that public exposure is intentional and safe.

## Featured Repository URL Set

Current direct candidates:

- https://github.com/tomtomjskim/stackforge-atlas
- https://github.com/tomtomjskim/harness-kit
- https://github.com/tomtomjskim/agent-orchestra-monitor
- https://github.com/tomtomjskim/codex-workflow-skills

Review/hold:

- https://github.com/tomtomjskim/db-mcp
- https://github.com/tomtomjskim/aiwright
- https://github.com/tomtomjskim/StoreShoppingMall-PHP

## Selection Principle

The final primary list should balance the candidate's core backend/platform positioning. If all featured repositories are AI-agent tooling, the portfolio may incorrectly imply that recent AI tooling is the candidate's entire engineering identity.

Therefore the next review should try to promote at least one strong, public-safe PHP/MySQL/backend artifact or create a sanitized reproducible backend case repository if existing production code cannot be published.

## Next Review Tasks

1. run build/test/validation checks for the four featured candidates,
2. audit README claims against actual implementation,
3. identify one public backend/database project that represents long-term career depth,
4. rebuild `StoreShoppingMall-PHP` documentation only if the code is still worth exposing,
5. run a security review on any infrastructure/config repository before linking it,
6. limit the final featured set to 3–5 repositories for each target role.
