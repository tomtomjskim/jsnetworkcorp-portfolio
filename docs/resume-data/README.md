# Resume Data System

version: RB-v0.5 / PF-v0.5.0
updated: 2026-06-29
visibility: public-sanitized

## Purpose

This directory tracks the public-safe resume and portfolio content model used by `jsnetworkcorp-portfolio`.

It is not the private evidence store. It contains only sanitized summaries, public claim candidates, release/version notes, and redaction rules that can safely live in this public portfolio repository.

## Current State

| Area | Status | Notes |
|---|---|---|
| Raw resume analysis | external/private | Maintained outside this public repo. Do not paste raw chat transcripts or private source evidence here. |
| Public claim bank | active | Public-safe claims are tracked in `public-claim-bank.md`. |
| Portfolio project summary | active | Sanitized project one-pagers may live under `content/projects/`. |
| Resume draft | active | Public-safe resume drafts may live under `content/resume/`. |
| Private evidence map | out of scope | Keep detailed claim-to-evidence maps in a private wiki, protected interview kit, or source-only workspace. |
| Sensitive materials | forbidden | Credentials, endpoints, customer/order/admin/session/payment data, raw logs, private repo links, and raw AI transcripts are not allowed. |

## Content Layers

```text
Public portfolio repo
└─ sanitized project summaries, public resume drafts, release/version notes

Private personal-wiki or interview-kit source
└─ raw evidence, detailed role scope, private source notes, claim-to-evidence maps

Protected interview output
└─ generated role-specific briefing, Q&A, architecture deep dives, redaction-reviewed evidence notes
```

## v0.5 Focus

The v0.5 content pass introduces a sanitized resume/portfolio versioning layer around:

- PHP-based manufacturing/MES business systems
- seller commerce and logistics operations systems
- external order, inbound, inventory, outbound, dashboard, and fulfillment integration domains
- backend reliability concepts such as idempotency, fail-closed behavior, dry-run gates, masked payloads, and sync verification
- AI-assisted workflow as a development-process differentiator

## Public Repository Rule

This repository may describe what kinds of systems were worked on and what engineering patterns were used. It must not expose private implementation evidence, private repository links, customer/order data, production configuration, staging credentials, operational logs, or unredacted internal screenshots.
