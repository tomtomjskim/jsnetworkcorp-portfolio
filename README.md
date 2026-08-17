# JSNetworkCorp Portfolio

Public-safe career portfolio, GitHub-native technical portfolio, and downstream Next.js visual surface.

## Start Here — Hiring Portfolio

For a hiring-oriented overview, read:

> **[`PORTFOLIO.md`](PORTFOLIO.md)**

It is the primary public index for:

- backend positioning,
- sanitized career case studies,
- selected public engineering repositories,
- evidence/claim boundaries.

The website is a later visual projection of the same evidence. It must not become a separate factual source.

## Current Delivery Priority

Strategy: `PS-v1.2.0`

```text
P0    application / self-introduction text
P1    career case studies + GitHub portfolio
P1.5  public repository quality / verification
P2    web visual projection
P3    optional PDF supplement
P4    protected interview deep dive
```

A new PHP/MySQL reference repository is currently **optional/deferred**, not a prerequisite for the portfolio.

## Content Boundary

This repository remains sanitized and public.

Detailed interview materials should be generated separately and served only through a protected private surface. Do not commit detailed internal specs, raw evidence, private deployment values, production endpoints, customer data, order data, admin/session/payment data, private wiki exports, private repository URLs, or raw AI transcripts to this repository.

Recommended split:

```text
GitHub / PORTFOLIO.md
└─ primary public hiring/technical portfolio

portfolio.jsnetworkcorp.com
└─ restrained visual projection of public-safe evidence

protected interview surface
└─ deeper evidence generated from authorized private sources
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

See:

- `docs/portfolio-strategy/README.md`
- `docs/portfolio-strategy/CHANGELOG.md`
- `docs/portfolio-strategy/versions/PS-v1.2.0.md`

Prior snapshots are preserved so strategy changes can be compared rather than silently overwritten.

## Evidence Model

The portfolio separates evidence by what it can actually prove.

### Career Case Studies

Sanitized historical work/problem-solving evidence:

- `content/projects/commerce-fulfillment-operations.md`
- `content/projects/manufacturing-mes-business-systems.md`

Detailed problem-solving narratives remain draft/source-confirm candidates until protected source authority is complete.

### Public Engineering Artifacts

Current public implementation/verification evidence, selected by target role:

- `stackforge-atlas` — primary current engineering artifact
- `harness-kit` — featured with current-HEAD verification caveat
- `codex-workflow-skills` — target-dependent featured/supporting

Do not imply that recent public R&D/tooling is proprietary employer production work.

### Application Text

- current candidate: `docs/application-text/claim-blocks-v2-candidate.md`
- previous baseline: `docs/application-text/claim-blocks-v1.md`
- canonical factual authority: `docs/resume-data/public-claim-bank.md`

## Evidence-First Authoring Architecture

Application text, GitHub portfolio, web, PDF, and protected interview material derive from one canonical case-study model.

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
- `docs/reviews/ps-v1.2-career-case-adversarial-review.md`

Core principle:

```text
Evidence > Problem Solving > Impact > Architecture > Readability > Design > Animation
```

Target-company adaptation may change selection, ordering, and vocabulary. It must not change role scope, metrics, maturity, career-vs-R&D classification, or evidence status.

## Scope

- public-safe resume/application content management
- GitHub-native `PORTFOLIO.md`
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

Private claim-to-evidence maps, internal project identifiers, raw evidence, deployment values, production endpoints, and sensitive records remain outside the public surface.

Key files:

- `docs/resume-data/README.md`
- `docs/resume-data/changelog.md`
- `docs/resume-data/version-map.md`
- `docs/resume-data/public-claim-bank.md`
- `docs/resume-data/redaction-boundary.md`
- `docs/resume-data/protected-interview-bridge.md`

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

Target evidence-first IA additionally introduces logical `engineering`, `decisions`, and `writing` surfaces. Web implementation stays lower priority than application text, career-case confirmation, and GitHub portfolio targeting.

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
1. source-confirm detailed career case narratives
2. test P0/P1 against a real target job description
3. run recruiter / hiring-manager / engineer multi-lens review
4. verify current HEAD of any repository selected for submission
5. produce a target-specific submission projection
6. implement web/PDF only when they add clear value
```
