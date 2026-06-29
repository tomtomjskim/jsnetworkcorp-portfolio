# JSNetworkCorp Portfolio

Next.js / React portfolio scaffold for `portfolio.jsnetworkcorp.com`.

This repository is the dedicated portfolio site repository. It is intentionally separate from `personal-wiki`.

## Scope

- Next.js App Router
- React + TypeScript
- project explorer with client state
- screen / wireframe gallery with client state
- AI agents / LLM workflow portfolio section
- release notes
- static export target
- CI and remote deploy placeholder

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

## Release Plan

```text
v0.1.0: IA, component skeleton, project index, screen placeholders, CI/deploy placeholder
v0.2.0: project pages and refined wireframes
v0.3.0: AI/Agent portfolio case studies
v0.4.0: resume variants and downloadable PDFs
v0.5.0: public beta under portfolio.jsnetworkcorp.com
v1.0.0: application-ready portfolio release
```
