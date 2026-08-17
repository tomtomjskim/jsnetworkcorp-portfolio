# Backend Evidence Gap Plan

Strategy: `PS-v1.1.0`
Updated: 2026-08-17
Status: proposed implementation plan

## Problem

The candidate's long-term career positioning is backend/business-system engineering around PHP, manufacturing MES, commerce, logistics, data flow, and operational maintenance.

The strongest current public repositories instead emphasize recent AI-agent/tooling and engineering-process experiments.

This creates a representation mismatch:

```text
actual career depth
PHP / business systems / operations / commerce / maintenance

public GitHub signal
AI tooling / agent workflow / engineering methodology
```

The solution is **not** to exaggerate a weak historical public repository.

`StoreShoppingMall-PHP` currently exposes only a small utility collection and cannot support a full backend-project narrative without inventing context.

## Decision

Create a new, explicitly sanitized **reference implementation** that demonstrates backend problem-solving patterns relevant to the candidate's experience without copying proprietary source code or claiming that the reference repository is production code.

Recommended working repository name:

```text
php-commerce-ops-reference
```

Alternative names:

```text
commerce-ops-reference
php-backend-operations-lab
backend-ops-casebook
```

Use the direct descriptive name unless a broader multi-language lab is intentionally desired later.

---

# Positioning Boundary

The repository must say clearly:

> This is a public reference implementation built from generalized backend and commerce-operation patterns. It is not a copy of proprietary production code and does not expose private customer, order, infrastructure, or company data.

It may prove:

- current engineering capability,
- ability to model operational state,
- database/transaction reasoning,
- testing discipline,
- documentation quality,
- safe external-integration boundaries.

It may **not** prove by itself:

- that the exact architecture existed in a previous employer system,
- that the candidate personally owned all analogous production components,
- production scale,
- production SLA,
- historical performance improvements.

Career claims remain governed by the canonical claim bank.

---

# Recommended Case

Build one compact commerce operations backend around two related workflows rather than a generic CRUD shopping mall.

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

Questions the implementation should answer:

- What can fail before confirmation?
- How is a preview tied to the confirmed payload?
- Is confirmation all-or-nothing or partial?
- How are duplicates detected?
- What remains after a failed transaction?
- Which fields are safe to log?

## Flow B — External dispatch and reconciliation

```text
order ready
→ dispatch request
→ external result
   ├─ accepted
   ├─ rejected
   └─ unknown
→ local status
→ read-only reconciliation
→ operator decision when required
```

Questions:

- What happens when the external result is unknown?
- How are retries bounded?
- What key prevents duplicate effects?
- How are local and external states compared without unsafe writes?
- Which mismatches require manual resolution?

These flows expose more backend judgment than catalog/product CRUD.

---

# Minimum Architecture

```text
src/
├─ Domain/
│  ├─ Order/
│  └─ Dispatch/
├─ Application/
│  ├─ PreviewOrderBatch
│  ├─ ConfirmOrderBatch
│  ├─ DispatchOrder
│  └─ ReconcileDispatch
├─ Infrastructure/
│  ├─ Persistence/
│  ├─ ExternalGateway/
│  └─ Logging/
└─ Http/

migrations/
tests/
docs/
├─ problem.md
├─ architecture.md
├─ state-machine.md
├─ failure-matrix.md
├─ security-boundary.md
├─ verification.md
└─ decisions/
```

Exact framework choice is secondary. The portfolio signal should come from the domain/transaction/failure contracts rather than framework ceremony.

---

# Data Model Scope

Keep the model intentionally small.

Candidate entities:

```text
order_batches
orders
dispatch_attempts
external_receipts
reconciliation_findings
```

Recommended invariants:

- stable batch/request identity,
- explicit batch lifecycle,
- unique business/idempotency boundary where justified,
- append-only or traceable dispatch attempts,
- explicit `unknown` external outcome,
- reconciliation does not silently mutate external state,
- sample data contains no real PII.

Do not add coupon, payment, product recommendation, membership, review, or admin CMS features merely to make the repository look larger.

---

# Required Engineering Evidence

## 1. State model

Provide a state diagram for batch intake and dispatch.

Example conceptual states:

```text
BATCH
parsed → previewed → confirmed
                  ↘ rejected

DISPATCH
ready → sending → accepted
                ↘ rejected
                ↘ unknown → reconciled/manual-review
```

The actual state names should follow implementation contracts.

## 2. Failure matrix

At minimum cover:

- invalid row,
- duplicate request,
- database failure,
- external timeout,
- external rejection,
- retry after unknown response,
- reconciliation mismatch.

## 3. Tests

Required test categories:

```text
unit
- state transitions
- parser/validator
- idempotency rule

integration
- transaction rollback
- unique constraint behavior
- repository queries

contract/fake gateway
- accepted
- rejected
- timeout/unknown

workflow
- preview does not persist final orders
- confirm persists once
- duplicate confirmation does not create duplicate effect
- reconcile reports mismatches without unsafe external mutation
```

## 4. Static/quality checks

Provide one root command that runs the repository's relevant checks.

Conceptually:

```text
install
→ static analysis
→ tests
→ migration check
```

## 5. CI

A reviewer should be able to see the same checks run in GitHub Actions.

Do not rely only on manually written `tests passed` text in README.

---

# README Contract

Recommended first-screen structure:

```text
Project title
One-sentence problem
Why this exists
What this reference proves / does not prove
Architecture diagram
Two workflow summaries
Verification command
Current limitations
```

Then:

```text
Problem
Constraints
Domain/state model
Architecture
Decision records
Failure handling
Verification
Security/redaction boundary
Trade-offs
Run locally
Repository map
```

The README should be shorter than the documentation set. Link deep details rather than duplicating them.

---

# Decision Records to Include

Only create ADRs for real choices in the reference implementation.

Candidate decisions:

1. all-or-nothing vs partial batch confirmation,
2. preview token/payload binding strategy,
3. idempotency boundary,
4. handling external `unknown` outcomes,
5. reconciliation as read-only detection vs automatic mutation,
6. PII/sample-data logging boundary.

Each decision must include rejected alternatives and accepted downside.

---

# Portfolio Integration

When complete, use the repository differently from production career cases.

## Career text

```text
I handled commerce/operations workflows in production systems.
```

Only canonical verified career claims may be used.

## GitHub reference

```text
Here is a public reference implementation showing how I currently model a similar class of batch/integration failure problems without exposing proprietary source.
```

This distinction increases credibility.

---

# Promotion Gate

The new repository becomes `FEATURED` only when all are true:

- public/private boundary is explicit,
- clean setup is reproducible,
- tests pass from a root command,
- CI is green,
- failure cases are implemented, not just documented,
- README includes limitations,
- no copied proprietary schema/source/data is present,
- repository does not imply historical production ownership.

Until then it remains `BUILDING` and should not be linked in submitted materials.

---

# Implementation Sequence

```text
B0. create clean public repository
B1. write problem + non-goals + redaction boundary
B2. define state model and failure matrix
B3. define schema/migrations
B4. implement batch preview/confirm
B5. add transaction/idempotency tests
B6. implement fake external dispatch gateway
B7. implement unknown outcome + reconciliation
B8. add integration/workflow tests
B9. add static checks + GitHub Actions
B10. write concise evidence-first README
B11. adversarial security/claim review
B12. promote into PORTFOLIO.md
```

Do not start with UI. A minimal HTTP surface or CLI fixture is enough until backend contracts are stable.

## Success criterion

The repository should make a backend interviewer able to ask concrete questions about:

- transaction boundaries,
- uniqueness/idempotency,
- external failure,
- state transitions,
- reconciliation,
- tests,
- operational trade-offs.

If the repository mainly demonstrates page rendering or generic CRUD, it has failed its portfolio purpose.
