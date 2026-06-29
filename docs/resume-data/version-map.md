# Resume / Portfolio Version Map

updated: 2026-06-29

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
| `CL-v0.5` | Public-safe claim bank | active | `docs/resume-data/public-claim-bank.md` |
| `PF-v0.5.0` | Portfolio content packet | merged | sanitized project/resume content |
| `PF-v0.5.1` | Planning and governance | merged | goal, roadmap, workflow |
| `PF-v0.6.0` | Content model integration | merged | `content/projects/index.json`, `content/resume/index.json`, site data model |
| `PF-v0.7.0` | Public-safe project pages | merged | expanded project markdown pages |
| `PF-v0.8.0` | Resume variants | merged | role-specific public resume variants |
| `PF-v0.9.0` | Protected interview bridge | merged | public boundary docs and templates only |
| `PF-v1.0.0` | Application-ready portfolio release | active | final release checklist and public site content |
| `IK-v0.1` | Protected interview material plan | next-private | must not be committed here |

## Branching Rule

Use topic branches for each resume/portfolio content pass:

```text
resume-data-v0.5
resume-data-v0.6
portfolio-project-pages-v0.7
resume-variants-v0.8
interview-bridge-v0.9
portfolio-v1-final
```

Each branch should include:

- changelog entry
- version map update
- public claim bank update when claims change
- project/resume content update
- redaction boundary review
- validation/build status note

## Public/Private Split

| Item | Public Repo | Private Wiki / Interview Kit |
|---|---:|---:|
| sanitized one-page project summary | yes | yes |
| role-specific resume draft | yes, if sanitized | yes |
| direct private repo links | no | yes, if access-controlled |
| claim-to-evidence map | no, except redacted status | yes |
| raw implementation notes | no | yes |
| customer/order/admin/session/payment data | no | no, unless legally approved and redacted |
| credentials, tokens, endpoints | no | no |
| raw AI transcripts | no | no; summarize instead |
