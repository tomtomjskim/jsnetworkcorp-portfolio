# Backend Evidence Gap Plan — Deferred Option

Strategy: `PS-v1.2.0`
Updated: 2026-08-17
Status: **deferred / optional**
Tracking: Issue #13 closed as `not_planned`

## Current Decision

Do **not** build a new PHP/MySQL portfolio repository now.

The original problem is real: the candidate's long-term career is strongly associated with PHP/MySQL business systems, commerce/logistics operations, MES, and maintenance, while the strongest current public GitHub repositories emphasize newer engineering methodology and AI/tooling work.

However, a newly created sample repository is not the highest-value fix.

```text
historical career evidence
should be strengthened by
actual career case studies

current engineering capability
can be shown by
verified public repositories
```

A new PHP reference implementation remains useful only if a concrete target role exposes a missing-code-evidence problem.

## Preferred Resolution Now

1. strengthen `content/projects/commerce-fulfillment-operations.md`,
2. strengthen `content/projects/manufacturing-mes-business-systems.md`,
3. keep application text concise and role-safe,
4. keep `stackforge-atlas` as the primary current engineering artifact,
5. use other public tooling repositories only when relevant to the target role,
6. keep web/PDF downstream.

## Why the Reference Repository Was Deferred

### Weak return on historical evidence

A 2026 reference implementation can demonstrate current coding judgment. It cannot by itself prove what happened in proprietary production systems years earlier.

### Risk of portfolio dilution

A deliberately built job-search sample may receive more visual attention than the real career cases and make a senior/experienced profile look more junior or tutorial-oriented.

### Existing current-engineering evidence

The public repository set already contains implementation, tests, CI, failure handling, explicit limitations, and architecture evidence. The bigger portfolio weakness is the generic wording of real career experience.

### Maintenance cost

A separate repository needs code, tests, CI, dependencies, updates, security review, and README maintenance. That cost is justified only when the hiring funnel actually needs it.

---

# Reopen Conditions

Reopen this plan when at least one condition is true:

- a target PHP/Laravel/MySQL role explicitly requests recent code samples,
- public GitHub code is a major screening criterion,
- repeated application/review feedback identifies missing backend implementation evidence,
- an interviewer needs a public codebase for discussion before a technical interview,
- the implementation can target a specific role gap rather than exist as generic portfolio filler.

If none applies, keep this plan deferred.

---

# Preserved Optional Reference Design

If reopened later, the repository should remain a **new generalized reference implementation**, never a reconstruction of proprietary source.

Recommended working name:

```text
php-commerce-ops-reference
```

## Positioning Boundary

The repository must say clearly:

> This is a public reference implementation built from generalized backend and commerce-operation patterns. It is not a copy of proprietary production code and does not expose private customer, order, infrastructure, or company data.

It may demonstrate:

- current PHP/MySQL engineering capability,
- state and transaction reasoning,
- testing discipline,
- external-integration failure handling,
- documentation and CI quality.

It must not be used to claim:

- that the exact architecture existed in a previous employer system,
- historical ownership of analogous production components,
- production scale or SLA,
- unsupported historical performance improvements.

Career claims remain governed by the canonical claim bank.

---

# Optional Case Scope

Build one compact operations backend around two workflows rather than generic shopping-mall CRUD.

## Flow A — Batch order intake

```text
upload
→ parse
→ validate
→ preview
→ confirm
→ transactional persist
→ result
```

The implementation should answer:

- what can fail before confirmation,
- how preview binds to confirmed data,
- whether confirmation is all-or-nothing,
- how duplicates are handled,
- what remains after rollback,
- which fields are safe to log.

## Flow B — External dispatch and reconciliation

```text
order ready
→ dispatch request
→ external result
   ├─ accepted
   ├─ rejected
   └─ unknown
→ local state
→ read-only reconciliation
→ manual decision when required
```

The implementation should answer:

- how unknown outcomes are represented,
- how retries are bounded,
- what prevents duplicate effects,
- how internal/external states are compared safely,
- which mismatches require manual review.

---

# Optional Minimum Evidence

A future implementation is worth featuring only if it includes all of the following.

### State model

Explicit batch and dispatch states with invalid transitions tested.

### Failure matrix

At minimum:

- invalid input,
- duplicate request,
- database failure,
- external timeout,
- external rejection,
- retry after unknown response,
- reconciliation mismatch.

### Database evidence

Small MySQL schema/migrations, transaction rollback behavior, uniqueness boundaries, and safe sample data.

### Tests

```text
unit
- state transitions
- parsing/validation
- duplicate/idempotency rule

integration
- transaction rollback
- unique constraint behavior
- repository queries

fake gateway
- accepted
- rejected
- timeout/unknown

workflow
- preview does not final-persist
- confirm persists once
- duplicate confirm creates no duplicate effect
- reconciliation reports rather than silently mutates
```

### Public verification

One root validation command and GitHub Actions CI. README text such as “tests pass” is insufficient without a reproducible surface.

### Explicit limitations

No production-scale, HA, SLA, or historical-ownership implication.

---

# Preserved Implementation Sequence

If the plan is reopened:

```text
B0. create clean public repository
B1. write problem + non-goals + redaction boundary
B2. define state model and failure matrix
B3. define schema/migrations
B4. implement batch preview/confirm
B5. add transaction/duplicate tests
B6. implement fake external gateway
B7. implement unknown outcome + reconciliation
B8. add integration/workflow tests
B9. add static checks + GitHub Actions
B10. write concise evidence-first README
B11. adversarial security/claim review
B12. promote only after evidence gates pass
```

Do not start with UI.

## Promotion Gate

Even after reopening, do not feature the repository until:

- setup is reproducible,
- CI is green,
- failure paths are executable and tested,
- privacy/redaction review passes,
- README states the reference/production distinction,
- target-role value is higher than the maintenance cost.

## Current Outcome

For `PS-v1.2.0`, this document is retained as a **research option**, not an active implementation task.
