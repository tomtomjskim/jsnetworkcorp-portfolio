# Portfolio Strategy — PS-v1.2.0

Date: 2026-08-17
Status: current strategy snapshot

## Trigger

`PS-v1.1.0` proposed building a new public PHP/MySQL commerce-operations reference repository to fill the gap between long-term backend career experience and the current public GitHub set.

A follow-up priority review found that this repository is **not required now**.

The main concern is evidence quality:

```text
real production career experience
> newly created portfolio-specific sample
```

A new reference implementation can demonstrate current coding skill, but it does not strengthen the historical career claim itself. If promoted too aggressively, it can look like a job-search sample project and dilute stronger evidence already available from sanitized career cases and verified public engineering repositories.

## Decision

Defer the standalone PHP reference repository.

Current priority becomes:

```text
P0  concise application / self-introduction text
P1  sanitized career case studies + GitHub-native portfolio
P1.5 public repository quality / verification
P2  restrained web projection
P3  optional PDF supplement
P4  protected interview deep dive

OPTIONAL
new PHP/MySQL reference implementation
```

The new repository should be reconsidered only when a target role or application feedback creates a concrete need for recent public PHP/Laravel/MySQL code evidence.

## Core Portfolio Model

Use different evidence types for different questions.

### Historical career evidence

Answers:

- What business domains did the candidate actually work in?
- What types of operational problems did the candidate handle?
- How did the candidate reason about state, data, permissions, external systems, and maintenance risk?

Primary surface:

- sanitized Commerce/Fulfillment case study
- sanitized Manufacturing MES case study
- verified application claim blocks

### Current public engineering evidence

Answers:

- How does the candidate currently design and validate software?
- Are architecture, failure handling, tests, CI, limitations, and review discipline visible?

Primary surface:

- `stackforge-atlas`
- target-dependent `harness-kit`
- target-dependent `codex-workflow-skills`

These repositories support engineering capability. They do not replace career chronology or proprietary production evidence.

## Career Case Study Upgrade

The public career cases should no longer be generic domain summaries.

They should emphasize repeatable problem-solving patterns that are supported by existing protected sources while remaining sanitized.

### Commerce / fulfillment

Primary narrative:

```text
state inconsistency or operational change request
→ inspect code/data/admin rendering/batch/external boundaries
→ trace affected state transitions
→ limit change scope
→ verify normal + permission + failure + duplicate/state paths
```

Public-safe themes:

- order/shipping/settlement state mismatch investigation,
- impact analysis across DB, admin UI, batch/cron, and external API boundaries,
- logistics flow from intake to outbound/status/CS,
- external request/response and failure-state inspection,
- privacy boundary for customer/order/payment/shipping data.

Do not upgrade role-confirm items such as canonical-model ownership, idempotency design, signed-API ownership, or security-policy ownership.

### Manufacturing MES

Primary narrative:

```text
field request or operational issue
→ translate into input order/query condition/state/statistics/permission
→ implement screen + DB changes
→ rollout / training / support feedback
→ distinguish system defect from local environment issue
```

Public-safe themes:

- production/process/quality/inventory workflow support,
- requirement decomposition into system conditions,
- gradual legacy PHP/data-relationship improvement,
- on-premise/customer-environment constraints,
- rollout, user education, and remote support as part of the engineering feedback loop.

Do not publish customer/factory identifiers, production records, internal tickets, or unsupported metrics.

## Why This Is Better Than Building a New Sample Now

### Advantages

- strengthens the authenticity of the portfolio,
- spends effort on evidence already tied to actual career history,
- reduces portfolio-maintenance cost,
- avoids creating a generic PHP sample merely to satisfy a technology keyword,
- keeps public GitHub focused on repositories with real implementation/verification depth.

### Remaining weakness

There is still no flagship public PHP production-like source repository.

This is accepted for now because proprietary production code should not be reconstructed merely for display, and current engineering capability is already visible through public repositories with stronger validation surfaces.

## Reopen Conditions for the PHP Reference Repository

Reopen the deferred plan only when at least one condition is true:

1. a target company explicitly requests or heavily values a recent PHP/Laravel/MySQL code sample,
2. multiple application reviews identify missing backend implementation evidence as a material weakness,
3. the role requires public code review before interview,
4. the existing public repositories no longer provide sufficient backend/system-design signal,
5. a small reference implementation can be built from a concrete target-role gap rather than as a generic portfolio project.

If reopened, preserve the original contract-first design in `docs/github-portfolio/backend-evidence-gap-plan.md`.

## Submission Reading Order

```text
Recruiter
→ concise P0 text

Hiring manager
→ PORTFOLIO.md career cases

Engineer
→ detailed case study + selected public repository

Interview
→ protected evidence / deeper technical chronology
```

The portfolio should not require the reader to visit a custom website to understand the candidate.

## Review Gate

Before a public case becomes submission-ready:

- every strong verb must have role-scope support,
- no generated private synthesis may be treated as reviewed authority by itself,
- confidential identifiers must remain generalized,
- metrics without evidence are removed,
- actual historical experience and new public R&D are visually separated,
- the first 30 seconds of reading must communicate backend/business-system identity before AI tooling.

## Migration from PS-v1.1.0

- close Issue #13 as `not_planned / deferred`,
- mark the backend reference plan optional rather than required,
- upgrade Commerce/Fulfillment and MES case-study narratives,
- remove future PHP reference dependencies from the primary `PORTFOLIO.md` capability map,
- retain StackForge Atlas as the primary public engineering artifact,
- keep web/PDF downstream.

## Research Questions for the Next Revision

- Do recruiters understand the career positioning within 30 seconds?
- Do engineers get enough concrete problem-solving detail without proprietary code?
- Does separating `career evidence` and `public engineering evidence` improve credibility?
- Does a target-company application ever reveal a real need for a new PHP reference repository?
- Which two career cases generate the highest-quality interview questions?
