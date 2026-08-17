# JSNetworkCorp Portfolio

Public-safe career portfolio, GitHub-native technical portfolio, and Next.js visual portfolio scaffold.

## Current Delivery Priority

Strategy: `PS-v1.0.0`

```text
1. Application / self-introduction text
2. GitHub portfolio
3. Web portfolio
4. PDF visual supplement
5. Protected interview deep dive
```

Start with the GitHub-native portfolio:

- [`PORTFOLIO.md`](PORTFOLIO.md)

The website is a later visual projection of the same evidence. It must not become a separate factual source.

## Content Boundary

This repository remains sanitized and public.

Detailed interview materials should be generated separately and served only through a protected private surface. Do not commit detailed internal specs, raw evidence, private deployment values, production endpoints, customer data, order data, admin/session/payment data, private wiki exports, private repository URLs, or raw AI transcripts to this repository.

Recommended split:

```text
GitHub / PORTFOLIO.md
└─ primary public technical portfolio and direct repository evidence

portfolio.jsnetworkcorp.com
└─ restrained visual projection of public-safe portfolio data

interview.jsnetworkcorp.com or protected server path
└─ detailed interview kit from private source or server-only generated artifacts
```

## Separately Versioned Strategy

Portfolio strategy is versioned independently from the `PF-*` content/site milestones.

```text
PF-* = public portfolio content / implementation milestone
PS-* = portfolio strategy / output priority / review policy
```

See:

- `docs/portfolio-strategy/README.md`
- `docs/portfolio-strategy/CHANGELOG.md`
- `docs/portfolio-strategy/versions/PS-v0.9.0.md`
- `docs/portfolio-strategy/versions/PS-v1.0.0.md`

Prior strategy snapshots are preserved so future changes can be compared rather than silently overwritten.

## Evidence-First Authoring Architecture

Application text, GitHub portfolio, web, PDF, and protected interview material derive from one canonical case-study model.

Reference set:

- `docs/portfolio-reference-architecture.md` — priority model, five portfolio views, canonical flow
- `docs/content-system/case-study-schema.md` — project/claim/evidence SSOT schema
- `docs/content-system/output-contracts.md` — P0–P4 output contracts
- `docs/templates/project-case-study-template.md` — reusable case-study template
- `docs/templates/decision-record-template.md` — engineering decision template
- `docs/templates/github-portfolio-template.md` — GitHub-native portfolio template
- `docs/prompts/portfolio-master-orchestrator.md` — source-to-portfolio master prompt
- `docs/prompts/github-portfolio-builder.md` — public repository triage and GitHub portfolio prompt
- `docs/prompts/company-targeting.md` — job-description targeting prompt
- `docs/prompts/multichannel-renderer.md` — application/GitHub/web/PDF renderer prompt
- `docs/github-portfolio/repository-candidate-matrix.md` — reviewed public repository candidates

Core principle:

```text
Evidence > Problem Solving > Impact > Architecture > Readability > Design > Animation
```

The same verified facts may be reordered or summarized for a target company, but role scope, metrics, implementation maturity, career-vs-R&D classification, and evidence status must not change between outputs.

## Career / Public R&D Boundary

The GitHub portfolio keeps these separate:

- **Career Case Studies** — sanitized professional/production experience.
- **Public Engineering Artifacts** — public repositories that demonstrate tools, experiments, engineering practices, or reusable systems.

Do not imply that a recent public AI/tooling repository is a production career project unless that relationship is verified.

## Scope

- public-safe resume/application content management
- GitHub-native `PORTFOLIO.md`
- public repository evidence/review matrix
- evidence-first case studies and engineering decision records
- target-role content projection
- Next.js App Router / React + TypeScript visual surface
- project explorer and screen/wireframe gallery
- AI agents / LLM workflow portfolio section
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

The current repository already keeps private claim-to-evidence maps, internal project identifiers, raw evidence, deployment values, production endpoints, and sensitive data outside the public surface.

Key files:

- `docs/resume-data/README.md`
- `docs/resume-data/changelog.md`
- `docs/resume-data/version-map.md`
- `docs/resume-data/public-claim-bank.md`
- `docs/resume-data/redaction-boundary.md`
- `docs/resume-data/protected-interview-bridge.md`
- `content/projects/index.json`
- `content/resume/index.json`

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

Target evidence-first IA additionally introduces logical `engineering`, `decisions`, and `writing` surfaces. Web implementation is lower priority than application text and GitHub portfolio normalization.

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

The deploy workflow must target only the public static root. Protected interview materials remain separate.

## Next Implementation Order

```text
1. normalize application/self-introduction claim blocks
2. audit and strengthen public repository READMEs
3. finalize submission-ready PORTFOLIO.md
4. add target-company repository/case ordering
5. render restrained web UI from the same canonical data
6. produce PDF only when an application benefits from it
```
