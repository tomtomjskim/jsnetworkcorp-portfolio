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
- **MINOR**: adds a new output surface, review gate, schema capability, or targeting method without invalidating the core model.
- **PATCH**: wording, examples, links, or clarifications that do not change the strategy.

## Current Strategy

`PS-v1.1.0`

Priority remains:

```text
1. Application / self-introduction text
2. GitHub portfolio
3. Web portfolio
4. PDF visual supplement
5. Protected interview deep dive
```

`PS-v1.1.0` adds evidence-ranked repository promotion and a separate public backend-reference plan. It distinguishes:

```text
verified career case
!= public R&D/tooling repository
!= new sanitized reference implementation
```

The three may support the same capability narrative, but they do not prove the same historical facts.

## Current Core Artifacts

P0 application text:

- `docs/application-text/claim-blocks-v1.md`

P1 GitHub portfolio:

- `PORTFOLIO.md`
- `docs/github-portfolio/repository-candidate-matrix.md`
- `docs/github-portfolio/featured-repo-audit-2026-08-17.md`
- `docs/github-portfolio/backend-evidence-gap-plan.md`

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
- `versions/PS-v1.1.0.md` — evidence-ranked repo promotion + backend public-evidence gap plan

Future versions should be added rather than replacing these snapshots.
