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

`PS-v1.2.0`

Priority:

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

The main v1.2 decision is to **defer the portfolio-specific PHP reference repository** and invest first in stronger narratives around actual career evidence.

Current evidence separation:

```text
sanitized career case
= historical work/problem-solving evidence

public R&D/tooling repository
= current engineering/verification evidence

new reference implementation
= optional current-code evidence only when a real target-role gap justifies it
```

These surfaces may support the same capability narrative but do not prove the same historical facts.

## Current Core Artifacts

P0 application text:

- `docs/application-text/claim-blocks-v1.md`

P1 hiring-facing portfolio:

- `PORTFOLIO.md`
- `content/projects/commerce-fulfillment-operations.md`
- `content/projects/manufacturing-mes-business-systems.md`
- `docs/github-portfolio/repository-candidate-matrix.md`
- `docs/github-portfolio/featured-repo-audit-2026-08-17.md`

Deferred option:

- `docs/github-portfolio/backend-evidence-gap-plan.md`
- Issue #13, closed as `not_planned` until a concrete trigger appears

Canonical data/review contracts:

- `docs/content-system/case-study-schema.md`
- `docs/content-system/output-contracts.md`
- `docs/resume-data/public-claim-bank.md`

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

Future versions should be added rather than replacing these snapshots.
