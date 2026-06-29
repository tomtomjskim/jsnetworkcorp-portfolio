# Resume / Portfolio Roadmap v0.6 → v1.0

updated: 2026-06-29
visibility: public-sanitized
status: active

## Version Strategy

| Version | Theme | Goal | Merge Target |
|---|---|---|---|
| `PF-v0.5.0` | public-safe resume data layer | establish claim bank, redaction boundary, sanitized project/resume drafts | current PR |
| `PF-v0.5.1` | planning and governance | add `/goal`, roadmap, workflow, validation gates | current PR |
| `PF-v0.6.0` | content model integration | connect sanitized resume/project content to site data loaders or static content index | next PR |
| `PF-v0.7.0` | project pages | produce public-safe project pages for MES, commerce/fulfillment, live-commerce architecture direction, AI-assisted workflow | next PR |
| `PF-v0.8.0` | resume variants | add role-specific public-safe resume variants and downloadable output plan | next PR |
| `PF-v0.9.0` | protected interview bridge | document and scaffold private/protected interview kit handoff without leaking private evidence | next PR |
| `PF-v1.0.0` | application-ready release | finalize public portfolio IA, resume routes, release notes, validation gates, and deployment checklist | release PR |

## PF-v0.5.1 — Planning and Governance

### Goal

Convert the current resume-data work into a repeatable versioned operating system.

### Deliverables

- `/goal` document
- v0.6→v1.0 roadmap
- version workflow and acceptance gates
- PR body updated with planning scope

### Acceptance Gates

- No sensitive data added
- Roadmap is actionable by branch/PR
- Future work has explicit redaction gates

## PF-v0.6.0 — Content Model Integration

### Goal

Make the sanitized content usable by the portfolio site without changing the public/private boundary.

### Candidate Deliverables

- `content/index` or equivalent metadata files for projects/resume content
- project metadata schema for sanitized project cards
- resume content metadata schema
- validation rules for required fields and forbidden patterns
- release note for content model introduction

### Acceptance Gates

- `npm run validate:content` passes after schema/script update
- no private identifiers or private repo links
- content can drive `/projects`, `/resume`, and `/releases` without manual duplication

## PF-v0.7.0 — Project Pages

### Goal

Turn major experience axes into public-safe project pages.

### Candidate Pages

| Slug | Public Title | Scope |
|---|---|---|
| `manufacturing-mes-business-systems` | Manufacturing MES Business Systems | PHP/Laravel/MySQL, manufacturing operations, maintenance, legacy improvement |
| `commerce-fulfillment-operations` | Seller Commerce & Fulfillment Operations | seller operations, inbound/inventory/outbound, external order, fulfillment integration |
| `live-commerce-architecture-direction` | Live-Commerce Architecture Direction | channel expansion, WebRTC/SFU/LiveKit direction, not a completed production claim |
| `ai-assisted-development-workflow` | AI-assisted Development Workflow | documentation, review, test planning, version management |

### Acceptance Gates

- Each page has public-safe problem, role, architecture themes, boundaries, and redaction notes
- No private repo or private customer references
- Strong verbs match confirmed role scope

## PF-v0.8.0 — Resume Variants

### Goal

Create role-specific resume views and output planning.

### Candidate Variants

| Variant | Target |
|---|---|
| `backend-ko` | Korean backend resume |
| `fullstack-ko` | Korean full-stack resume |
| `commerce-backend-ko` | commerce/logistics backend roles |
| `manufacturing-systems-ko` | MES/manufacturing business system roles |
| `ai-assisted-workflow-ko` | roles valuing AI workflow/process automation |
| `backend-en` | English backend resume, if needed |

### Acceptance Gates

- Each variant only uses approved public claims
- sensitive/project-private items remain anonymized
- final output format plan exists before PDF/DOCX generation

## PF-v0.9.0 — Protected Interview Bridge

### Goal

Create a clean handoff from public portfolio to protected interview materials.

### Candidate Deliverables

- protected interview kit source structure note
- generated kit template list
- public-to-private handoff map
- redaction checklist for target-role deep dives
- no private evidence committed to this public repo

### Acceptance Gates

- public repo includes only boundary docs and templates
- private evidence remains in protected/private storage
- every interview kit output has a redaction checklist

## PF-v1.0.0 — Application-Ready Portfolio Release

### Goal

Finalize the portfolio as an application-ready public site.

### Candidate Deliverables

- final public project index
- final resume route content
- release notes
- deployment checklist
- content validation checklist
- redaction review checklist
- optional PDF/DOCX generation plan or links if public-safe

### Acceptance Gates

- build and content validation pass
- public routes are coherent and complete
- no sensitive data exposure
- resume content can be targeted to backend/full-stack/commerce roles
- public portfolio and private interview kit responsibilities are separated

## Branch Naming

```text
resume-data-v0.5
resume-data-v0.6
portfolio-project-pages-v0.7
resume-variants-v0.8
interview-bridge-v0.9
portfolio-release-v1.0
```

## Default Work Cycle

```text
1. set /goal for the version
2. update version map and changelog
3. add or update content
4. run redaction review
5. run validation/build when available
6. open draft PR
7. review wording strength and role-scope risk
8. merge only after boundary review
```
