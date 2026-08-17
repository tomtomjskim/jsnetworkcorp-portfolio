# Portfolio Strategy Versioning

This directory versions portfolio strategy separately from the application/site release version in `VERSION` and the `PF-*` content milestones.

## Namespace

Use `PS-vMAJOR.MINOR.PATCH` for portfolio strategy revisions.

```text
PF-*  = public portfolio content / implementation milestone
PS-*  = portfolio strategy, information model, output priority, review policy
```

A strategy version is a research snapshot. Do not rewrite old version notes when the strategy changes.

## Version Rules

- **MAJOR**: output priority, core architecture, or hiring-positioning model changes materially.
- **MINOR**: adds or materially changes a review gate, targeting method, evidence policy, or execution priority without invalidating the core model.
- **PATCH**: wording, examples, links, or clarifications that do not change the strategy.

## Current Strategy

`PS-v1.3.0`

Base priority remains:

```text
P0    Application / self-introduction text
P1    Sanitized career case studies + GitHub portfolio
P1.5  Public repository quality / verification
P2    Web portfolio
P3    PDF visual supplement
P4    Protected interview deep dive

OPTIONAL
New PHP/MySQL reference implementation
```

`PS-v1.3.0` adds the first real target-role adapter on top of the career-first model.

Target adaptation may change:

```text
headline
summary emphasis
case selection/order
public repository order
vocabulary where semantically equivalent
```

It must not change:

```text
historical facts
responsibility
claim status
metrics
implementation maturity
public/private boundary
```

## Current Evidence Separation

```text
sanitized career case
= historical work/problem-solving evidence

public R&D/tooling repository
= current engineering/verification evidence

new reference implementation
= optional current-code evidence only when a real target-role gap justifies it

target adapter
= selection/order layer over the same verified evidence
```

These surfaces may support the same capability narrative but do not prove the same historical facts.

## Current Core Artifacts

### P0 application text

- current generic candidate: `docs/application-text/claim-blocks-v2-candidate.md`
- previous baseline: `docs/application-text/claim-blocks-v1.md`
- Internal Tools / AX resume adapter: `content/resume/variants/ax-internal-tools-ko.md`

### P1 hiring-facing portfolio

General backend:

- `PORTFOLIO.md`

Internal Tools / AX target projection:

- `PORTFOLIO-AX.md`
- `docs/targets/internal-tools-ax-requirement-evidence.md`

Career cases:

- `content/projects/commerce-fulfillment-operations.md`
- `content/projects/manufacturing-mes-business-systems.md`

Public repo review:

- `docs/github-portfolio/repository-candidate-matrix.md`
- `docs/github-portfolio/featured-repo-audit-2026-08-17.md`

### Review artifacts

- `docs/reviews/ps-v1.2-career-case-adversarial-review.md`
- `docs/reviews/source-confirmation-triage-2026-08-17.md`
- `docs/reviews/ax-internal-tools-multi-lens-review-2026-08-17.md`

Deferred option:

- `docs/github-portfolio/backend-evidence-gap-plan.md`
- Issue #13, closed as `not_planned` until a concrete trigger appears

Canonical data/review contracts:

- `docs/content-system/case-study-schema.md`
- `docs/content-system/output-contracts.md`
- `docs/resume-data/public-claim-bank.md`

## First Target Adapter

Recommended header:

> **Backend Engineer | 업무시스템 · 내부도구 · AX/개발자동화**

Target public repository order:

```text
1. harness-kit
2. codex-workflow-skills
3. stackforge-atlas
```

This differs from general-backend ordering because developer internal tooling and AI-assisted workflow automation are primary requirements in this role family.

The detailed company/referral source is private and is intentionally not copied into this public repository.

## Research Workflow

When proposing a new strategy version:

1. preserve the prior version file,
2. record the trigger for the change,
3. list assumptions that changed,
4. compare strengths and weaknesses against the previous version,
5. identify measurable or reviewable outcomes,
6. record which artifacts must migrate,
7. run adversarial review before marking the version current.

## Files

- `CHANGELOG.md` — concise version differences
- `versions/PS-v0.9.0.md` — initial multi-output evidence-first proposal
- `versions/PS-v1.0.0.md` — application-first, GitHub-first strategy
- `versions/PS-v1.1.0.md` — evidence-ranked repo promotion + proposed backend reference
- `versions/PS-v1.2.0.md` — career-case-first refinement; PHP reference deferred to optional
- `versions/PS-v1.3.0.md` — first real target adapter for Internal Tools / AX

Future versions should be added rather than replacing these snapshots.
