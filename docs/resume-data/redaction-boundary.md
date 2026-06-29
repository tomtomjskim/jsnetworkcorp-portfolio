# Resume / Portfolio Redaction Boundary

version: RB-v0.5
updated: 2026-06-29
visibility: public-sanitized

## Decision

This public portfolio repository may contain sanitized resume claims and project summaries. It must not contain private implementation evidence or protected interview materials.

## Allowed Here

- anonymized project summaries
- role-neutral or role-confirmed public claims
- public-safe architecture concepts
- generic domain terms such as MES, seller commerce, inventory, outbound, fulfillment, OMS, API integration
- release notes and version maps
- redaction status notes
- synthetic examples and mock diagrams

## Not Allowed Here

- private repository names or direct private repository URLs
- raw source evidence copied from private repositories
- raw AI transcripts
- detailed internal specs copied from private documents
- customer, order, admin, session, payment, refund, or shipment data
- production endpoints, staging endpoints, private hostnames, IP addresses
- credentials, tokens, signing keys, API secrets, SSH keys
- private screenshots unless fully redacted and approved
- logs, stack traces, database dumps, or operational incident details
- internal customer or vendor identifiers that are not already approved for public use

## Claim Safety Levels

| Level | Meaning | Public Use |
|---|---|---|
| `PUBLIC_SAFE` | sanitized and generic enough for the public site | yes |
| `ROLE_CONFIRM` | likely usable, but final role scope needs confirmation | only with careful wording |
| `PRIVATE_EVIDENCE` | evidence exists but details are private | no direct evidence here |
| `SENSITIVE` | contains private repo, customer, config, or data concerns | no |
| `DROP` | excluded from resume/portfolio use | no |

## Project Naming Rule

Use anonymized names in public content:

| Private/Internal Form | Public Form |
|---|---|
| internal project names | company commerce/logistics operations system |
| private repo URLs | omitted |
| customer/vendor names | domestic enterprise client, fulfillment provider, external platform |
| staging/prod config names | omitted |
| raw source file paths | omitted unless already public-safe and non-sensitive |

## Quantitative Claim Rule

Do not publish improvement percentages or operational rates unless all of the following are true:

1. the source log or report is retained privately,
2. the calculation method is documented,
3. the user's contribution scope is clear,
4. the number does not expose customer or operational data,
5. the claim survives redaction review.

Until then, prefer qualitative but concrete phrasing such as:

- improved maintainability through module separation
- reduced operational risk through fail-closed gates
- clarified order synchronization through read-only reconciliation
- supported safer external integration through masked payloads and idempotency

## Review Checklist

Before any resume or project page is published:

- [ ] no private repo link
- [ ] no internal project identifier unless explicitly approved
- [ ] no raw customer/order/admin/session/payment data
- [ ] no credentials, tokens, endpoints, or private hostnames
- [ ] no copied raw internal docs
- [ ] no raw AI transcript
- [ ] no unverified improvement metric
- [ ] strong verbs match confirmed role scope
- [ ] public text is understandable without private evidence
