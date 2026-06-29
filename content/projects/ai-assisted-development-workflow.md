# AI-assisted Development Workflow

version: PF-v0.7.0
updated: 2026-06-29
visibility: public-sanitized
status: draft

## Summary

A public-safe workflow case for using AI-assisted development without turning private evidence, raw transcripts, or internal notes into public portfolio content. The focus is documentation, review, test planning, release/version management, and public/private knowledge boundaries.

## Problem

AI-assisted work can produce useful drafts, summaries, refactoring plans, and test ideas, but the outputs need trust levels, redaction checks, and version management before they are used in resumes or public portfolio pages.

## Workflow Model

```text
private raw evidence
-> reviewed private notes
-> public-safe claim candidates
-> role-scope confirmation
-> resume bullets / project pages
-> protected interview kit when needed
```

## Architecture Themes

| Theme | Public-Safe Description |
|---|---|
| Claim lifecycle | Raw evidence becomes a reviewed claim before public use. |
| Redaction gate | Private identifiers, credentials, customer/order data, logs, and transcripts are blocked. |
| Versioning | Resume raw data, claim bank, portfolio packet, and interview kit use separate version families. |
| Role-scope control | Strong verbs require evidence and contribution-scope confirmation. |
| Protected interview kit | Detailed Q&A and evidence maps are generated outside the static public portfolio. |

## Public Resume Claims Supported

- AI-assisted workflow를 활용해 설계 문서화, 테스트 기준 정리, 변경 이력 관리를 병행
- private evidence와 public portfolio content를 분리하는 redaction/release workflow 운영
- 이력서 claim을 raw data, claim bank, target resume, protected interview material로 분리 관리

## Redaction Notes

- No raw AI transcripts
- No private wiki exports
- No private file paths
- No credentials or endpoints
- No customer/order/admin/session/payment data
- No private source snippets

## Next Evidence Work

- Public-safe workflow diagram
- Claim status dashboard concept
- Protected interview kit template kept outside public repo
