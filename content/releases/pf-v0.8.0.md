# PF-v0.8.0 — Resume Variants

updated: 2026-06-29
visibility: public-sanitized
status: draft

## Goal

Create public-safe role-specific resume variants from the approved claim bank and project pages.

## Added

- `content/resume/variants/backend-ko.md`
- `content/resume/variants/fullstack-ko.md`
- `content/resume/variants/commerce-backend-ko.md`
- `content/resume/variants/manufacturing-systems-ko.md`
- `content/resume/variants/ai-assisted-workflow-ko.md`
- `content/resume/variants/backend-en.md`

## Changed

- `content/resume/index.json` now links all resume variants.
- Strong commerce-backend claims remain marked as role-confirm.
- Validation accepts PF-v0.8.0 resume indexes and checks duplicate resume IDs.

## Handoff to PF-v0.9.0

### Keep

- Public-safe resume variants
- Role-confirm flags for stronger claims
- Clear public/private split

### Revisit

- Protected interview kit bridge and private source handoff
- Claim-to-evidence map must remain outside the public repository

### First Next Action

Add public boundary docs and templates for protected interview material handoff.
