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
| `RB-v0.4` | Commerce/fulfillment project promoted to core resume axis | active source baseline | public-safe themes only |
| `RB-v0.5` | Public repo application layer | active | stored in `docs/resume-data/` and `content/` |
| `CL-v0.5` | Public-safe claim bank | active | `docs/resume-data/public-claim-bank.md` |
| `PF-v0.5.0` | Portfolio content packet | active | sanitized project/resume content |
| `IK-v0.1` | Protected interview material plan | planned | must not be committed here |

## Branching Rule

Use topic branches for each resume/portfolio content pass:

```text
resume-data-v0.5
resume-data-v0.6
portfolio-release-v0.5.0
```

Each branch should include:

- changelog entry
- version map update
- public claim bank update
- project/resume content update
- redaction boundary review

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
