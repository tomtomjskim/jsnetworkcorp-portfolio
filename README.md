# JSNetworkCorp Portfolio

Next.js / React portfolio scaffold for `portfolio.jsnetworkcorp.com`.

This repository is the dedicated public portfolio site repository. It is intentionally separate from `personal-wiki`.

## Content Boundary

This repository remains sanitized and public.

Detailed interview materials should be generated separately and served only through a protected private surface. Do not commit detailed internal specs, raw evidence, private deployment values, production endpoints, customer data, order data, admin data, private wiki exports, or raw AI transcripts to this repository.

Recommended split:

```text
portfolio.jsnetworkcorp.com
└─ public sanitized static portfolio from this repo

interview.jsnetworkcorp.com or protected server path
└─ detailed interview kit from private source or server-only generated artifacts
```

See:

- `docs/content-boundary.md`
- `docs/interview-materials-architecture.md`
- `docs/interview-kit-pipeline.md`
- `docs/remote-deploy-runbook.md`
- `deploy/README.md`
- `docs/resume-data/application-ready-checklist.md`
- `docs/resume-data/final-handoff.md`

## Scope

- Next.js App Router
- React + TypeScript
- project explorer with client state
- screen / wireframe gallery with client state
- AI agents / LLM workflow portfolio section
- release notes
- static export target for `portfolio.jsnetworkcorp.com`
- CI and static deployment guidance
- protected interview-surface deployment guidance
- public-safe resume/project content management

## Resume Data Versioning

Public-safe resume and portfolio content is tracked under:

```text
docs/resume-data/
content/projects/
content/resume/
content/releases/
```

The current public portfolio content milestone is `PF-v1.0.0`. It keeps only sanitized claims in this public repository. Private claim-to-evidence maps, internal project identifiers, private repository links, raw evidence, private deployment values, production endpoints, customer/order/admin/session/payment data, and raw AI transcripts remain outside this repository.

Key files:

- `docs/resume-data/README.md`
- `docs/resume-data/changelog.md`
- `docs/resume-data/version-map.md`
- `docs/resume-data/public-claim-bank.md`
- `docs/resume-data/redaction-boundary.md`
- `docs/resume-data/protected-interview-bridge.md`
- `docs/resume-data/application-ready-checklist.md`
- `docs/resume-data/final-handoff.md`
- `content/projects/index.json`
- `content/resume/index.json`
- `content/releases/pf-v1.0.0.md`

## Routes

```text
/
/projects
/projects/[slug]
/ai-agents
/screens
/resume
/releases
```

## Commands

```bash
npm install
npm run typecheck
npm run validate:content
npm run build
```

## Deployment

Public deployment is a static export:

```text
GitHub Actions -> npm ci -> npm run build -> out/ -> rsync -> nginx static root
```

The deploy workflow must target only the public static root. Interview materials are generated and deployed from a separate private/source-only workflow.

## Release Plan

```text
PF-v0.5.0: public-safe resume data layer
PF-v0.5.1: goal, roadmap, workflow, governance gates
PF-v0.6.0: site-facing content model integration
PF-v0.7.0: public-safe project pages
PF-v0.8.0: role-specific resume variants
PF-v0.9.0: protected interview bridge
PF-v1.0.0: application-ready public portfolio/resume content architecture
```
