# /goal — Resume / Portfolio Management

version: GOAL-v0.5.1
updated: 2026-06-29
visibility: public-sanitized
status: active

## Goal

Build a sustainable resume and portfolio management architecture that turns reviewed career data into public-safe portfolio content, role-specific resume drafts, and protected interview materials without leaking private implementation evidence.

## Operating Principle

```text
private raw evidence
-> reviewed private claim bank
-> sanitized public claim bank
-> public portfolio content
-> role-specific resume / protected interview kit
```

This public repository owns only the sanitized public layers. Private evidence, detailed role-scope notes, internal project identifiers, private repository links, raw screenshots, raw logs, customer/order/admin/session/payment data, and raw AI transcripts stay outside this repository.

## Success Criteria

| Area | Target |
|---|---|
| Public portfolio | Clear, sanitized project pages that communicate domain and engineering judgment without private evidence leakage |
| Resume system | Versioned claim bank and resume drafts that can be adjusted per target role |
| Project positioning | Manufacturing/MES and seller commerce/fulfillment become the two strongest experience axes |
| Evidence discipline | Every strong claim has a private evidence note, but public files only show sanitized summaries |
| Release discipline | Each content pass has a version, changelog entry, redaction review, and PR |
| Interview readiness | Detailed Q&A and evidence maps are generated only into a protected/private surface |

## Primary Positioning

```text
Backend / full-stack engineer with experience in PHP-based manufacturing systems and seller commerce/logistics operations, focusing on domain modeling, external API integration, order/fulfillment data normalization, and operational reliability.
```

Korean resume headline:

```text
PHP 기반 제조 MES와 셀러형 이커머스/물류 운영 시스템 경험을 가진 백엔드/풀스택 개발자
```

## Active Experience Axes

| Axis | Public-Safe Description | Output |
|---|---|---|
| Manufacturing / MES | PHP/Laravel/MySQL-based manufacturing and business system development | resume summary, work experience |
| Seller commerce / fulfillment | Seller operations, inbound, inventory, external order, outbound, fulfillment integration | project page, work experience |
| Legacy modernization | Legacy PHP module separation, domain/application/repository structure, maintainability improvement | architecture section |
| Reliability / integration | idempotency, signed API, fail-closed, dry-run, masked payload, sync verification | backend reliability section |
| AI-assisted workflow | documentation, review, test planning, release/version management | process differentiator |
| Live-commerce direction | commerce-channel expansion theme, not a completed integration claim | portfolio-adjacent architecture discussion |

## Non-Goals

- Do not turn this public repository into a personal-wiki mirror.
- Do not expose raw private source evidence.
- Do not publish direct private repository links.
- Do not publish customer/order/admin/session/payment data.
- Do not publish credentials, endpoints, staging/prod config, or private hostnames.
- Do not use unverifiable improvement percentages.
- Do not claim completed SaaS/live-commerce integration without separate proof and redaction review.
- Do not use unfinished/non-commercial projects as primary resume proof.

## Current Milestone

`PF-v0.5.0` establishes the sanitized resume data layer.

Next milestone: `PF-v0.6.0` connects the content model to public site surfaces without expanding the sensitive data boundary.
