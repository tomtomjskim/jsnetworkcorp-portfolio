# Featured Repository Audit — 2026-08-17

Strategy: `PS-v1.1.0`
Status: GitHub evidence review with current public CI checks where available

## Scope

This review checks whether current public repositories are strong enough to appear in a hiring-facing GitHub portfolio.

The review is adversarial by default. A good README is not sufficient. Promotion requires some combination of:

- clear problem definition,
- non-trivial implementation,
- verification surface,
- explicit limitations,
- coherent version/release state,
- relevance to target engineering roles.

This pass inspected repository contents, committed validation contracts, and GitHub Actions state where a repository exposed a suitable workflow. It did not run an independent local checkout/build. A GitHub Actions success proves the committed workflow passed for the stated SHA; it does not prove production scale or external adoption.

## Decision Legend

| Decision | Meaning |
|---|---|
| `PRIMARY` | safe to lead the public engineering section after final link check |
| `FEATURED` | strong enough for the main 3–5 repository set |
| `SUPPORTING` | useful evidence, but should not lead the portfolio |
| `HOLD` | material evidence/documentation defect must be fixed first |
| `EXCLUDE` | low portfolio value or unacceptable risk |

---

# 1. StackForge Atlas

Repository: https://github.com/tomtomjskim/stackforge-atlas

Decision: **PRIMARY**

## Strong evidence

The repository does more than describe an architecture pattern. Its committed GitHub Actions workflow validates:

- structured Atlas artifacts,
- pilot metadata and regressions,
- runnable Node pilot type-check/tests,
- PostgreSQL durability pilot with a PostgreSQL service,
- an operational recovery drill,
- recovery evidence artifact creation.

The current README also explicitly distinguishes what its recovery work demonstrates from what remains unproven, including host-level loss, PITR, replication, failover, and provider-specific production recovery.

## Current CI evidence

Reviewed HEAD:

```text
eece97ee59dac79d3e36f8f6c1b59e8155bf2dd8
feat: add PostgreSQL operational recovery drill
```

GitHub Actions recorded:

```text
workflow: Validate Atlas
run: #29
trigger: push
status: completed
conclusion: success
```

This is current public CI evidence for the reviewed HEAD, not merely a README claim.

## Portfolio value

Strong signals:

```text
product/problem framing
→ interface contract
→ implementation
→ database durability
→ failure/recovery
→ validation evidence
→ stated limitations
```

This is the closest current public repository to a general software/backend engineering case rather than an AI-tool-only artifact.

## Risks

- very recent repository history; do not imply long-running adoption,
- pilots are controlled reference implementations, not proof of production scale,
- operational recovery evidence must not be described as HA/PITR/failover proof.

## Portfolio wording

Safe:

> 제품 의도에서 인터페이스 계약, 구현, 검증과 복구 지식까지 추적 가능한 구조를 실험하고, PostgreSQL 기반 durability/recovery pilot과 공개 CI로 failure path를 검증한 engineering reference입니다.

Avoid:

- production-grade recovery platform,
- high availability proven,
- enterprise scale,
- production failover implementation.

---

# 2. Codex Workflow Skills

Repository: https://github.com/tomtomjskim/codex-workflow-skills

Decision: **FEATURED for AI-native/platform roles; SUPPORTING for general backend roles**

## Strong evidence

The public forward-test report records repeatable validation and known limitations. The 2026-08-05 quality-hardening snapshot reports:

- 881 repository tests discovered,
- 879 passed,
- 2 external shared-agent audits skipped because the external root was not configured,
- paid/live runner path not executed when its API-key prerequisite was unavailable.

The report also records failure cases such as reviewer stalls and differentiates `static_only`, `not_run`, `incomplete`, and completed evidence rather than converting missing execution into a pass.

## Current CI evidence

Reviewed HEAD:

```text
9f4499e38368417a88c9d6aeaad7dca6268538f4
feat(skills): Council·Session Wiki 품질 계약 강화
```

GitHub Actions recorded a repository validation run for that SHA:

```text
workflow: Validate Skills
run: #20
trigger: push
status: completed
conclusion: success
```

The same SHA also has successful Dependabot dynamic checks, but these are not used as primary portfolio validation evidence.

## Portfolio value

This repository is strong evidence for:

- workflow contracts,
- safety/approval boundaries,
- adversarial review,
- deterministic validation,
- failure accounting,
- plugin/skill packaging.

## Risks

- tightly coupled to Codex/agent workflow concepts,
- synthetic and repository-owned validation is not production adoption,
- too much emphasis can distort the candidate profile from backend engineer to AI tooling specialist.

## Portfolio rule

For a normal backend application, include this after a backend-oriented artifact.

For an AI-native backend/platform role, it can move into the top 3.

---

# 3. harness-kit

Repository: https://github.com/tomtomjskim/harness-kit

Decision: **FEATURED with verification caveat**

## Strong evidence

The repository has:

- a TypeScript CLI/package structure,
- resolver/loader/validator/merger/renderer/writer pipeline,
- Zod schema validation,
- Vitest unit-test structure,
- explicit test and TypeScript-check scripts,
- clear documentation of trade-offs and when the abstraction is unnecessary.

The committed unit-test directory currently includes dedicated merger, renderer, and type tests.

## Evidence weakness

No GitHub Actions workflow was visible at repository root during this review.

The changelog states 36 tests and an average coverage figure, but this audit does not independently reproduce those numbers. Do not surface the coverage percentage in the portfolio until a reproducible coverage command or CI artifact confirms it.

The package version remains `0.1.0`, and the README correctly notes that npm publication is not yet complete.

## Portfolio value

Strong design signal:

```text
duplicated per-project AI configuration
→ configuration-as-code model
→ typed module contracts
→ deterministic merge/render pipeline
→ atomic output
```

This is a useful systems/tooling case because the abstraction has explicit boundaries and acknowledges when direct editing is simpler.

## Required next check

Before final submission:

```text
npm ci
npm run lint
npm test
npm run build
```

Record the exact current result rather than relying on README/changelog history.

---

# 4. Agent Orchestra Monitor

Repository: https://github.com/tomtomjskim/agent-orchestra-monitor

Decision: **HOLD as featured; SUPPORTING conceptually**

## Strong evidence

The architecture is easy to understand:

```text
Claude task output
→ read-only file observer
→ Express/API + SSE
→ React dashboard
→ SQLite history / workflow visualization
```

The README also does a good job distinguishing the tool from an MCP server or orchestrator. That is a useful responsibility-boundary signal.

## Material defects

### A. No visible test contract

The root package exposes development/build/start scripts but no test or lint script. The inspected server workspace also exposes build/dev/start only.

That does not prove the repository has no tests anywhere, but the current entry points do not give a reviewer an obvious reproducible verification path.

### B. Version drift

Current public surfaces disagree:

- README/changelog communicate release `1.8.0`,
- root package version is `1.0.0`.

This reduces confidence in release hygiene.

### C. Portfolio consequence

Do not currently describe this as a verified reliability/observability implementation. It is better presented as a supporting full-stack/tooling prototype until version and verification contracts are repaired.

## Promotion conditions

1. align version source of truth,
2. add root verification command,
3. add at least critical parser/history/API tests,
4. add CI or another publicly reproducible validation surface,
5. verify README screenshots/current feature list against the current build.

---

# 5. StoreShoppingMall-PHP

Repository: https://github.com/tomtomjskim/StoreShoppingMall-PHP

Decision: **EXCLUDE from featured portfolio in current form**

## Findings

The public repository currently contains a minimal README and a small `util/` collection rather than a reviewable application or backend case.

Observed contents include utility PHP/JS snippets such as directory/file helpers and category-related utilities. There is no public project-level contract showing:

- business problem,
- database model,
- request/response flow,
- test strategy,
- migration path,
- reproducible setup,
- representative backend architecture.

## Decision

README expansion alone would risk turning a few historical snippets into a stronger project story than the code supports.

Do not promote this repository merely because `PHP/MySQL` matches the career positioning.

A new sanitized reference case is preferable.

---

# Final Ranking

## General backend target

```text
1. StackForge Atlas        PRIMARY / CI VERIFIED AT REVIEWED HEAD
2. harness-kit             FEATURED / current validation pending
3. Codex Workflow Skills   SUPPORTING / CI VERIFIED AT REVIEWED HEAD
4. Agent Orchestra Monitor HOLD
```

This set still lacks a strong public artifact that directly represents long-term PHP/MySQL business-system experience.

## AI-native backend/platform target

```text
1. StackForge Atlas        PRIMARY / CI VERIFIED
2. Codex Workflow Skills   FEATURED / CI VERIFIED
3. harness-kit             FEATURED / validation pending
4. Agent Orchestra Monitor after promotion fixes
```

---

# Main Portfolio Gap

The strongest public repositories currently demonstrate recent engineering methodology and AI/tooling work better than the candidate's long-term PHP/MySQL career depth.

This is a portfolio representation problem, not a reason to inflate old repositories.

Resolution is defined in:

- `docs/github-portfolio/backend-evidence-gap-plan.md`

## Review conclusion

Current public portfolio should lead with:

1. sanitized career cases,
2. StackForge Atlas as the strongest public engineering proof,
3. target-dependent tooling repositories,
4. explicit limitations.

Do not let repository recency replace career chronology or domain experience.
