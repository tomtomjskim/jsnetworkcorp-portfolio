# Protected Interview Bridge

version: PF-v0.9.0
updated: 2026-06-29
visibility: public-sanitized
status: draft

## Purpose

Define how public portfolio content hands off to protected interview materials without committing private evidence into this public repository.

## Boundary

This public repository may contain:

- public-safe project summaries
- public-safe resume variants
- sanitized claim banks
- protected interview kit templates
- redaction checklists
- handoff instructions

This public repository must not contain:

- private claim-to-evidence maps
- private repository links
- raw implementation evidence
- raw screenshots requiring redaction
- customer, order, admin, session, payment, shipment, or log data
- credentials, endpoints, private hostnames, or environment names
- raw AI transcripts

## Handoff Model

```text
public portfolio content
-> target-role selection
-> private source/evidence review
-> generated interview kit draft
-> redaction review
-> protected publication or encrypted per-interview archive
```

## Protected Output Shape

```text
interview-kit/{target-role}-{date}/
├─ 00-briefing.md
├─ 01-project-one-pagers.md
├─ 02-architecture-deep-dive.md
├─ 03-role-specific-qna.md
├─ 04-failure-tradeoff-stories.md
├─ 05-claim-evidence-map.md
└─ 99-redaction-checklist.md
```

## Public-to-Protected Map

| Public Input | Protected Output | Rule |
|---|---|---|
| project page | project one-pager | protected output may add private evidence notes only after review |
| resume variant | target-role briefing | keep final wording aligned with public claim bank |
| public claim bank | claim-evidence map | evidence links remain protected |
| redaction boundary | redaction checklist | checklist must pass before sharing |
| architecture direction page | deep-dive Q&A | mark unimplemented/future directions clearly |

## Required Review Gates

- [ ] target role selected
- [ ] public resume variant selected
- [ ] claims checked against role scope
- [ ] private evidence reviewed outside this public repo
- [ ] sensitive data removed or summarized
- [ ] unverified metrics removed
- [ ] protected delivery mechanism confirmed
- [ ] expiration/removal plan recorded when applicable

## Delivery Options

Preferred:

- protected subdomain with server-side authentication
- private repository with controlled access
- encrypted archive shared per interview

Not acceptable:

- hidden URL in public static bundle
- client-side password prompt in public JavaScript
- committing private kit output into this repository
