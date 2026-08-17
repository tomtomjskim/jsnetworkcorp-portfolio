# Resume / Portfolio Version Map

updated: 2026-08-17

## Version Families

| Prefix | Meaning | Storage |
|---|---|---|
| `RB` | Resume Raw Data Bank | private source first; public-safe summaries may be mirrored here |
| `CL` | Claim Bank | public-safe claims in this repo; detailed evidence links private |
| `PF` | Portfolio Content | public portfolio repo |
| `IK` | Interview Kit | private/protected only |

## Current Versions

| Version | Scope | Status | Public Repo Handling |
|---|---|---|---|
| `RB-v0.1` | Initial raw resume data collection | superseded | summarized in changelog only |
| `RB-v0.2` | Filtering policy: remove weak metrics and unfinished projects | superseded | summarized in changelog only |
| `RB-v0.3` | Commerce project evidence inspection | superseded | private details excluded |
| `RB-v0.4` | Commerce/fulfillment project promoted to core resume axis | active private source baseline | public-safe themes only |
| `RB-v0.5` | Public repo application layer | active | stored in `docs/resume-data/` and `content/` |
| `CL-v0.5` | Initial public-safe claim bank | superseded | retained in history |
| `CL-v0.6` | Evidence-backed AI claim bank | superseded candidate | AI evidence boundaries established |
| `CL-v0.7` | Claim-boundary hardening + ready change-impact method | current draft | default ready claims separated from role-confirm/selective extensions |
| `PF-v0.5.0` | Portfolio content packet | merged | sanitized project/resume content |
| `PF-v0.5.1` | Planning and governance | merged | goal, roadmap, workflow |
| `PF-v0.6.0` | Content model integration | merged | `content/projects/index.json`, `content/resume/index.json`, site data model |
| `PF-v0.7.0` | Public-safe project pages | merged | expanded project markdown pages |
| `PF-v0.8.0` | Resume variants | merged | role-specific public resume variants |
| `PF-v0.9.0` | Protected interview bridge | merged | public boundary docs and templates only |
| `PF-v1.0.0` | Application-ready portfolio release | active baseline | final release checklist and public site content |
| `PF-v1.0.1` | Evidence-backed AI resume content | superseded release-candidate | bounded AI evidence/limitations |
| `PF-v1.0.2` | First Internal Tools / AX target adapter | current release-candidate | target header, resume variant, GitHub target projection, multi-lens review |
| `IK-v0.1` | Protected interview material plan | next-private | must not be committed here |

## Strategy Relationship

Portfolio strategy uses an independent `PS-*` namespace.

Current strategy:

```text
PS-v1.3.0
= first real target adapter on top of career-first / GitHub-native model
```

`PF-v1.0.2` records the public content variant; `PS-v1.3.0` records the targeting/review strategy that produced it.

## Branching Rule

Use topic branches for each resume/portfolio content pass:

```text
resume-data-v0.5
resume-data-v0.6
portfolio-project-pages-v0.7
resume-variants-v0.8
interview-bridge-v0.9
portfolio-v1-final
agent/portfolio-evidence-architecture
```

Each branch should include:

- changelog entry,
- version map update,
- public claim bank update when claims change,
- project/resume content update,
- redaction boundary review,
- validation/build status note.

## Public/Private Split

| Item | Public Repo | Private Wiki / Interview Kit |
|---|---:|---:|
| sanitized one-page project summary | yes | yes |
| role-specific resume draft | yes, if sanitized | yes |
| target adapter without confidential recruiting context | yes | yes |
| internal referral/company-private recruiting message | no | yes |
| direct private repo links | no | yes, if access-controlled |
| claim-to-evidence map | no, except redacted status | yes |
| raw implementation notes | no | yes |
| customer/order/admin/session/payment data | no | no, unless legally approved and redacted |
| credentials, tokens, endpoints | no | no |
| raw AI transcripts | no | no; summarize instead |
