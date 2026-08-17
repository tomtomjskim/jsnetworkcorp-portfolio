# Featured Repository Audit — 2026-08-17

Strategy: `PS-v1.3.0`
Status: GitHub evidence review with current public CI checks

## Scope

This review decides whether public repositories are strong enough to appear in hiring-facing portfolio projections.

Promotion is adversarial. A polished README is insufficient. Review considers:

- problem clarity,
- non-trivial implementation,
- reproducible verification,
- dependency/security state where relevant,
- explicit limitations,
- target-role relevance,
- separation from historical employer experience.

A GitHub Actions success proves the committed workflow passed for the stated SHA. It does **not** prove production scale, external adoption, business impact, or historical employer ownership.

## Decision Legend

| Decision | Meaning |
|---|---|
| `PRIMARY` | can lead a target portfolio |
| `FEATURED` | suitable for the main 3-repository set |
| `SUPPORTING` | useful but should not lead |
| `HOLD` | material evidence/documentation defect remains |
| `EXCLUDE` | current portfolio value is too low or risk too high |

---

# 1. StackForge Atlas

Repository: https://github.com/tomtomjskim/stackforge-atlas

Decision: **PRIMARY for general backend / system engineering**

## Evidence

- intent → interface → implementation → evidence → evolution structure
- runnable Node pilot
- PostgreSQL durability pilot
- operational recovery drill
- explicit distinction between demonstrated recovery and unproven PITR/host loss/replication/failover

Reviewed CI evidence:

```text
HEAD: eece97ee59dac79d3e36f8f6c1b59e8155bf2dd8
workflow: Validate Atlas
run: #29
conclusion: success
```

## Portfolio value

```text
problem framing
→ contract
→ implementation
→ database durability
→ failure / recovery
→ validation evidence
→ limitations
```

## Risks / limits

- recent reference work; not long-running adoption
- controlled pilots; not production-scale evidence
- recovery drill is not HA/PITR/failover proof

Safe wording:

> 제품 의도에서 interface, 구현, 검증과 recovery evidence까지 연결하고 failure path를 공개 CI로 검증하는 software-engineering reference.

---

# 2. harness-kit

Repository: https://github.com/tomtomjskim/harness-kit

Decision: **FEATURED; PRIMARY for Internal Tools / AX target**

## Problem / Implementation

Repeated Claude/agent configuration across projects is modeled as configuration-as-code rather than manually copied project files.

Implementation evidence includes:

- TypeScript CLI/package structure
- resolver → loader → validator → merger → renderer → writer pipeline
- Zod validation
- dedicated merger / renderer / type tests
- explicit trade-offs and documentation of when the abstraction is unnecessary

## Adversarial Validation History

The first validation attempt passed lint/tests/build but **was not accepted** because dependency inspection still reported high-severity findings.

A hard audit gate was added. The locked dependency graph was remediated within the repository's declared dependency ranges, including updated locked versions for affected YAML/brace expansion paths. The temporary remediation workflow was then removed.

Merged validation commit:

```text
c35136f562723f9c9af3945536ce3123c6f9bfc2
ci: add security-gated current-head validation
```

Merged `main` workflow:

```text
Node.js 22 and 24
npm ci
npm audit --audit-level=high
npm run lint
npm test        # 36 tests
npm run build
node dist/cli.js --help
```

All steps passed on both Node versions.

## Portfolio value

```text
repeated developer configuration
→ configuration-as-code
→ typed module contracts
→ deterministic merge/render
→ security-gated CI
```

This directly supports Internal Tools / Developer Productivity / AX roles.

## Residual limits

- package version remains early-stage and npm adoption is not claimed
- a low-severity dev-tool advisory may still be reported; it is below the high gate and remains a known limitation
- CI is current implementation evidence, not proof of production adoption or productivity percentage
- do not cite the historical coverage percentage unless separately reproduced

---

# 3. Codex Workflow Skills

Repository: https://github.com/tomtomjskim/codex-workflow-skills

Decision: **FEATURED for AI-native/platform; SUPPORTING for general backend**

## Evidence

Public forward-test evidence reports:

- 881 repository tests discovered
- 879 passed
- 2 external-environment audits skipped
- unavailable or unexecuted paths represented as `skip`, `not_run`, `static_only`, or `incomplete` rather than converted to pass

Reviewed CI:

```text
HEAD: 9f4499e38368417a88c9d6aeaad7dca6268538f4
workflow: Validate Skills
run: #20
conclusion: success
```

## Portfolio value

- workflow contracts
- review / approval boundaries
- adversarial review
- deterministic validation
- failure accounting
- reusable skill packaging

## Risks / limits

- agent-workflow concepts are role-specific
- repository-owned/synthetic validation is not production adoption
- overuse in a normal backend portfolio can distort candidate identity

---

# 4. Agent Orchestra Monitor

Repository: https://github.com/tomtomjskim/agent-orchestra-monitor

Decision: **HOLD as featured; SUPPORTING conceptually**

Strength:

```text
agent task output
→ read-only observer
→ Express/API + SSE
→ React dashboard
→ SQLite history / workflow visualization
```

Material defects:

- no obvious root reproducible test contract in inspected package entry points
- release surfaces disagree: docs/changelog `1.8.0` vs root package `1.0.0`

Promotion conditions:

1. align release version source,
2. add root verification command,
3. add critical parser/history/API tests,
4. expose CI,
5. verify screenshots/features against current build.

---

# 5. StoreShoppingMall-PHP

Repository: https://github.com/tomtomjskim/StoreShoppingMall-PHP

Decision: **EXCLUDE in current form**

Current public contents are a minimal README and small utility collection. They do not expose enough project-level evidence for business problem, DB model, request/response flow, tests, migration or reproducible setup.

README expansion alone would overstate the evidence.

A standalone PHP sample repository is **not required** under the current strategy. Historical PHP depth is better represented through sanitized career cases unless a future target explicitly requires recent public PHP code.

---

# Target Rankings

## General backend

```text
1. StackForge Atlas        PRIMARY / CI VERIFIED
2. harness-kit             FEATURED / SECURITY-GATED CI VERIFIED
3. Codex Workflow Skills   SUPPORTING / CI VERIFIED
```

## Internal Tools / AX

```text
1. harness-kit             PRIMARY FOR TARGET / SECURITY-GATED CI VERIFIED
2. Codex Workflow Skills   FEATURED / CI VERIFIED
3. StackForge Atlas        ENGINEERING GUARDRAIL / CI VERIFIED
```

## AI-native backend / platform

```text
1. StackForge Atlas or Codex Workflow Skills based on JD
2. Codex Workflow Skills or StackForge Atlas
3. harness-kit
```

Agent Orchestra Monitor remains HOLD until its own promotion conditions are resolved.

---

# Portfolio Boundary

The public engineering repositories answer:

> How does the candidate currently design, implement, validate and document engineering work?

They do not replace the historical career record.

The long-term PHP/MySQL/MES/commerce experience remains represented by sanitized career cases and the claim bank.

Do not:

- call public R&D previous-employer production source,
- claim production adoption from CI,
- claim productivity percentages without baseline evidence,
- use recent repository activity to hide chronology.

## Review Conclusion

The current public set is now strong enough to support three distinct questions:

```text
Backend/system engineering  → StackForge Atlas
Internal tooling            → harness-kit
AI workflow / review        → Codex Workflow Skills
```

Target applications should select and reorder these; they should not display the entire GitHub inventory.
