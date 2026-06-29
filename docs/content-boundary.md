# Content Boundary

## Decision

This repository remains the sanitized public portfolio surface.

Detailed interview materials must not be committed here while the repository is public. Interview-specific internal specs should be generated and stored in a separate protected location.

## Content Layers

| Layer | Location | Visibility | Content |
|---|---|---|---|
| Public Portfolio | `jsnetworkcorp-portfolio` | public | sanitized project summaries, wireframes, screen specs, architecture diagrams, release notes |
| Interview Kit | private repo or server-only directory | restricted | detailed internal specs, deeper implementation notes, interview Q&A, evidence mapping |
| Source Evidence | private repos / local evidence / reviewed notes | private | raw code context, non-public docs, screenshots requiring redaction, verification logs |

## Public Repository Rules

Allowed:

- sanitized project summaries
- synthetic/demo data
- wireframe placeholders
- non-sensitive architecture diagrams
- redacted evidence status
- public-safe release notes

Not allowed:

- credentials or tokens
- production endpoints or private hostnames
- customer, order, admin, session, or payment data
- raw server logs
- raw AI transcripts
- private wiki exports
- detailed implementation notes that reveal internal operations

## Interview Materials Rule

Interview material can be more specific, but it must be protected outside this public repository.

Recommended outputs:

- role-specific interview briefing
- project deep-dive script
- architecture decision explanations
- failure and tradeoff notes
- sensitive-source checklist
- claim-to-evidence map

## Access Rule

Do not use a hidden or undocumented access path. Use normal authentication and access control.

Acceptable options:

- separate private repository
- server-only directory protected by HTTP Basic Auth
- protected subdomain with Basic Auth, SSO, VPN, or IP allowlist
- encrypted archive shared per interview when needed

Client-side password prompts in a public static bundle are not considered protection.
