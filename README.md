# JSNetworkCorp Portfolio

Public-safe career portfolio, GitHub-native technical portfolio, and downstream Next.js visual surface.

## Start Here — Hiring Portfolio

General backend / business-system roles:

> **[`PORTFOLIO.md`](PORTFOLIO.md)**

Internal Tools / AX / development-automation roles:

> **[`PORTFOLIO-AX.md`](PORTFOLIO-AX.md)**

The target-specific projection changes evidence selection and ordering. It does not create new factual experience.

The website is a later visual projection of the same evidence and must not become a separate factual source.

## Current Delivery Priority

Strategy: `PS-v1.3.0`

```text
P0    application / self-introduction text
P1    career case studies + GitHub portfolio
P1.5  public repository quality / verification
P2    web visual projection
P3    optional PDF supplement
P4    protected interview deep dive
```

A new PHP/MySQL reference repository remains **optional/deferred**, not a prerequisite for the portfolio.

## First Real Target Adapter

The current target experiment is a public-safe Internal Tools / AX role family adapter.

Recommended resume header:

> **Backend Engineer | 업무시스템 · 내부도구 · AX/개발자동화**

Artifacts:

- `content/resume/variants/ax-internal-tools-ko.md`
- `PORTFOLIO-AX.md`
- `docs/targets/internal-tools-ax-requirement-evidence.md`
- `docs/reviews/ax-internal-tools-multi-lens-review-2026-08-17.md`
- `docs/portfolio-strategy/versions/PS-v1.3.0.md`

The exact company/referral message that triggered this adapter stays in the private source layer and is not copied to this public repository.

## Content Boundary

This repository remains sanitized and public.

Detailed interview materials should be generated separately and served only through a protected private surface. Do not commit detailed internal specs, raw evidence, private deployment values, production endpoints, customer data, order data, admin/session/payment data, private wiki exports, private repository URLs, raw AI transcripts, or confidential recruiting messages to this repository.

Recommended split:

```text
GitHub / PORTFOLIO*.md
└─ primary public hiring/technical portfolio

portfolio.jsnetworkcorp.com
└─ restrained visual projection of public-safe evidence

protected/private source
└─ authoritative resume, internal recruiting context, deeper interview evidence
```

## Separately Versioned Strategy

Portfolio strategy is versioned independently from the `PF-*` content/site milestones.

```text
PF-* = public portfolio content / implementation milestone
PS-* = portfolio strategy / output priority / review policy
```

Current history:

- `PS-v0.9.0` — parallel multi-output evidence-first proposal
- `PS-v1.0.0` — application-first / GitHub-first
- `PS-v1.1.0` — evidence-ranked repository promotion + proposed PHP reference
- `PS-v1.2.0` — career-case-first refinement; PHP reference deferred
- `PS-v1.3.0` — first real target adapter for Internal Tools / AX

See:

- `docs/portfolio-strategy/README.md`
- `docs/portfolio-strategy/CHANGELOG.md`
- `docs/portfolio-strategy/versions/PS-v1.3.0.md`

Prior snapshots are preserved so strategy changes can be compared rather than silently overwritten.

## Evidence Model

The portfolio separates evidence by what it can actually prove.

### Career Case Studies

Sanitized historical work/problem-solving evidence:

- `content/projects/commerce-fulfillment-operations.md`
- `content/projects/manufacturing-mes-business-systems.md`

Submission-safe facts are kept separate from selective/source-confirm/role-confirm deep-dive candidates.

### Public Engineering Artifacts

Current public implementation/verification evidence, selected and ordered by target role:

- `stackforge-atlas`
- `harness-kit`
- `codex-workflow-skills`

General backend and Internal Tools / AX roles intentionally use different ordering.

Do not imply that recent public R&D/tooling is proprietary employer production work.

### Application Text / Resume Variants

- generic P0 candidate: `docs/application-text/claim-blocks-v2-candidate.md`
- AX/Internal Tools target variant: `content/resume/variants/ax-internal-tools-ko.md`
- canonical factual authority: `docs/resume-data/public-claim-bank.md`

## Evidence-First Authoring Architecture

Application text, GitHub portfolio, web, PDF, and protected interview material derive from one canonical evidence model.

Reference set:

- `docs/portfolio-reference-architecture.md`
- `docs/content-system/case-study-schema.md`
- `docs/content-system/output-contracts.md`
- `docs/templates/project-case-study-template.md`
- `docs/templates/decision-record-template.md`
- `docs/templates/github-portfolio-template.md`
- `docs/prompts/portfolio-master-orchestrator.md`
- `docs/prompts/github-portfolio-builder.md`
- `docs/prompts/company-targeting.md`
- `docs/prompts/multichannel-renderer.md`
- `docs/github-portfolio/repository-candidate-matrix.md`
- `docs/reviews/source-confirmation-triage-2026-08-17.md`

Core principle:

```text
Evidence > Problem Solving > Impact > Architecture > Readability > Design > Animation
```

Target adaptation may change selection, ordering, headline, and equivalent vocabulary. It must not change role scope, metrics, maturity, career-vs-R&D classification, or evidence status.

## Scope

- public-safe resume/application content management
- GitHub-native general and target-specific portfolio projections
- career case-study authoring
- public repository evidence/review matrix
- target-role content projection
- Next.js App Router / React + TypeScript visual surface
- project explorer and screen/wireframe gallery
- static export target for `portfolio.jsnetworkcorp.com`
- protected interview-surface guidance

## Resume Data Versioning

Public-safe resume and portfolio content is tracked under:

```text
docs/resume-data/
content/projects/
content/resume/
content/releases/
```

Current public target content:

```text
CL-v0.7
PF-v1.0.2
PS-v1.3.0
```

Private claim-to-evidence maps, internal project identifiers, raw evidence, deployment values, production endpoints, confidential recruiting context, and sensitive records remain outside the public surface.

## Web Routes

Current implemented routes:

```text
/
/projects
/projects/[slug]
/ai-agents
/screens
/resume
/releases
```

Web implementation stays lower priority than application text, source confirmation, target-specific GitHub portfolio work, and selected-repository validation.

See `docs/information-architecture.md`.

## Commands

```bash
npm install
npm run typecheck
npm run validate:content
npm run build
```

## Deployment

Public web deployment remains a static export:

```text
GitHub Actions -> npm ci -> npm run build -> out/ -> rsync -> nginx static root
```

Protected interview materials remain separate.

## Next Validation Order

```text
1. merge the target adapter into an authoritative protected full resume
2. reproduce current validation for repositories actually selected for the target
3. prepare private referral/introduction text and interview responses
4. use application/interview outcome to evaluate PS-v1.3 targeting quality
5. implement web/PDF only when the target process shows clear value
```
