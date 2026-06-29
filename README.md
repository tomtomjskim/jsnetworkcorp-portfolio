# JSNetworkCorp Portfolio

Next.js / React portfolio scaffold for `portfolio.jsnetworkcorp.com`.

This repository is the dedicated public portfolio site repository. It is intentionally separate from `personal-wiki`.

## Content Boundary

This repository remains sanitized and public.

Detailed interview materials should be generated separately and served only through a protected private surface. Do not commit detailed internal specs, raw evidence, credentials, production endpoints, customer data, order data, admin data, private wiki exports, or raw AI transcripts to this repository.

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

## Scope

- Next.js App Router
- React + TypeScript
- project explorer with client state
- screen / wireframe gallery with client state
- AI agents / LLM workflow portfolio section
- release notes
- static export target for `portfolio.jsnetworkcorp.com`
- CI and GitHub Actions rsync deployment
- protected interview-surface deployment guidance

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

Required GitHub Actions secrets:

```text
PORTFOLIO_HOST
PORTFOLIO_USER
PORTFOLIO_SSH_KEY
PORTFOLIO_DEPLOY_PATH
```

The deploy workflow must target only the public static root. Interview materials are generated and deployed from a separate private/source-only workflow.

## Release Plan

```text
v0.1.0: IA, component skeleton, project index, screen placeholders, CI/deploy placeholder
v0.2.0: sanitized project pages, screen metadata, rsync deploy, protected interview architecture
v0.3.0: AI/Agent portfolio case studies
v0.4.0: resume variants and downloadable PDFs
v0.5.0: public beta under portfolio.jsnetworkcorp.com
v1.0.0: application-ready portfolio release
```
