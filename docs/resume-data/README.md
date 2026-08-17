# Resume Data System

version: `RB-v0.5 / CL-v0.7 / PF-v1.0.2`
updated: 2026-08-17
visibility: public-sanitized
strategy: `PS-v1.3.0`

## Purpose

This directory tracks the public-safe resume and portfolio content model used by `jsnetworkcorp-portfolio`.

It is not the private evidence store. It contains sanitized claims, release/version notes, redaction rules, and target-adapter metadata that can safely live in this public repository.

## Current State

| Area | Status | Notes |
|---|---|---|
| Raw resume / authoritative chronology | external/private | Do not reconstruct from public drafts. |
| Public claim bank | `CL-v0.7` current draft | Ready claims separated from selective/role-confirm detail. |
| General hiring portfolio | active | `PORTFOLIO.md` |
| Internal Tools / AX target projection | `PF-v1.0.2` release-candidate | `PORTFOLIO-AX.md` + `ax-internal-tools-ko` |
| Career case studies | active / sanitized | Commerce/Fulfillment and MES pages |
| Public engineering evidence | active / target-ranked | StackForge Atlas, harness-kit, Codex Workflow Skills |
| Private evidence map | out of scope | Keep in protected/private source. |
| Sensitive materials | forbidden | Credentials, endpoints, customer/order/admin/session/payment data, raw logs, private repo links, raw AI transcripts, confidential recruiting messages. |

## Current Content Flow

```text
private/protected evidence
→ public claim bank
→ generic application blocks / career cases
→ target adapter
→ GitHub portfolio projection
→ optional web/PDF
```

Target adaptation may reorder evidence and change a headline. It must not upgrade factual scope.

## Current Target Adapter

Internal Tools / AX role family:

```text
Headline
Backend Engineer | 업무시스템 · 내부도구 · AX/개발자동화

Resume
content/resume/variants/ax-internal-tools-ko.md

GitHub projection
PORTFOLIO-AX.md

Strategy
PS-v1.3.0
```

The exact company/referral context stays private.

## Claim Policy

### Default submission layer

Use `ready` claims only.

### Extension layer

Use `selective`, `source-confirm`, or `role-confirm` claims only after the canonical source is promoted.

A target adapter must never convert:

```text
participated / handled / reviewed
```

into:

```text
owned / led / designed / implemented
```

without evidence.

## Public Repository Rule

This repository may describe what kinds of systems were worked on and what engineering patterns are currently demonstrated publicly.

It must not expose:

- private implementation evidence,
- private repository links,
- customer/order/production data,
- production configuration or credentials,
- operational logs,
- unredacted internal screenshots,
- confidential recruiting messages.

Recent public R&D/tooling demonstrates current engineering capability. It does not prove that the same repository or exact architecture existed in previous employers.

## Validation

Current public branch validation includes:

```text
npm ci
npm run typecheck
npm run validate:content
npm run build
npm run smoke:static
```

`PF-v1.0.2` is included in the content-version allow-list.
