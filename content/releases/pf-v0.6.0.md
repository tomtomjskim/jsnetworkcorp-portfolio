# PF-v0.6.0 — Content Model Integration

updated: 2026-06-29
visibility: public-sanitized
status: draft

## Goal

Connect sanitized resume and project content to the public site-facing content model while preserving the public/private boundary.

## Added

- `content/projects/index.json`
- `content/resume/index.json`
- `content/releases/pf-v0.6.0.md`

## Changed

- Replaced site-facing private project naming with public-safe project names.
- Added manufacturing/MES and commerce/fulfillment as first-class project families.
- Reframed live-commerce as an architecture direction, not a completed integration claim.
- Removed unfinished/non-commercial app work from the primary site project model.
- Updated release data to include `PF-v0.6.0`, `PF-v0.5.1`, and `PF-v0.5.0`.

## Validation Scope

- Content metadata must stay public-safe.
- Project slugs must match site-facing project data.
- Resume index entries must point to existing sanitized resume drafts.
- Forbidden private identifiers and sensitive patterns must not appear in public content.

## Handoff to PF-v0.7.0

### Keep

- Public-safe content model
- Redaction boundary
- Anonymized commerce/fulfillment case
- Manufacturing/MES and AI workflow as strong axes

### Revisit

- Add full project pages for each major axis
- Add structured page sections: problem, role, architecture, reliability, redaction boundary

### Risks

- Strong verbs still require role-scope confirmation
- Live-commerce must remain direction/prototype until verified
- Private evidence must not flow into public markdown

### First Next Action

Create public-safe project pages for the four major portfolio axes.
