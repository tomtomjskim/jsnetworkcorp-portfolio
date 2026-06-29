# Versioned Work Cycle

version: WF-v0.5.1
updated: 2026-06-29
visibility: public-sanitized
status: active

## Purpose

Define how resume/portfolio content work continues across versions without mixing public portfolio content with private evidence storage.

## Version Intake Template

Use this template at the start of each version pass:

```markdown
# /goal {version}

## Objective

## In Scope

## Out of Scope

## Deliverables

## Redaction Risks

## Acceptance Gates

## Next Version Handoff
```

## Required Files per Version

| File | Required? | Purpose |
|---|---:|---|
| `docs/resume-data/changelog.md` | yes | record version-level changes |
| `docs/resume-data/version-map.md` | yes | keep version family state accurate |
| `docs/resume-data/public-claim-bank.md` | when claims change | public-safe claim lifecycle |
| `docs/resume-data/redaction-boundary.md` | when boundary changes | public/private separation |
| `content/projects/*.md` | when project pages change | sanitized project content |
| `content/resume/*.md` | when resume draft changes | public-safe resume variants |
| `content/releases/*.md` | recommended | public release note or content packet note |

## Status Values

| Status | Meaning |
|---|---|
| `draft` | usable for planning, not final |
| `public-safe` | safe for public use after normal review |
| `role-confirm` | likely usable, but strong verbs need role-scope confirmation |
| `private-evidence` | evidence exists outside public repo; do not expose here |
| `sensitive` | do not publish in public repo |
| `drop` | excluded |

## Claim Lifecycle

```text
raw data
-> private reviewed note
-> public-safe claim candidate
-> role-scope confirmation
-> resume bullet
-> project page summary
-> target-role variant
```

## Redaction Review

Each PR must pass this review before merge:

- [ ] no credentials, tokens, keys, endpoints, private hostnames
- [ ] no private repository link
- [ ] no internal project/customer/vendor identifier unless approved
- [ ] no customer/order/admin/session/payment/shipment data
- [ ] no raw logs or stack traces
- [ ] no raw AI transcript
- [ ] no private wiki export
- [ ] no unverified numeric improvement claim
- [ ] no completed SaaS/live-commerce claim without separate evidence
- [ ] strong verbs match confirmed contribution scope
- [ ] public text is coherent without private evidence

## PR Policy

Default to draft PRs for content versions.

A PR can move out of draft only when:

1. content boundary review is complete,
2. claim strength review is complete,
3. validation/build status is recorded,
4. version-map and changelog are current,
5. next-version handoff is written.

## Personal-Wiki Relationship

The public repo is not the SSOT for raw evidence.

Recommended split:

```text
personal-wiki/private workspace
└─ raw evidence, role scope, claim-to-evidence map, interview kit source

jsnetworkcorp-portfolio
└─ sanitized public content, public claim bank, roadmap, release/version notes
```

## Next Handoff Format

At the end of each version, add a handoff note:

```markdown
## Handoff to {next-version}

### Keep

### Revisit

### Drop

### Risks

### First next action
```
