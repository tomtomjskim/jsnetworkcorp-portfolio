# Public Claim Bank

version: CL-v0.5
updated: 2026-06-29
visibility: public-sanitized

This file contains only claims that can be used in the public portfolio repository after redaction. Stronger wording still requires final role-scope confirmation before being used in a submitted resume.

## Positioning

### Korean

PHP 기반 제조 MES와 셀러형 이커머스/물류 운영 시스템 경험을 바탕으로, 도메인 모델링, 외부 API 연동, 주문/출고 데이터 정규화, 운영 안정성 개선을 다뤄 온 백엔드/풀스택 개발자.

### English

Backend / full-stack engineer with experience in PHP-based manufacturing systems and seller commerce/logistics operations, focusing on domain modeling, external API integration, order/fulfillment data normalization, and operational reliability.

## Public-Safe Claims

| ID | Claim | Status | Usage |
|---|---|---|---|
| `CL-PUB-001` | PHP 기반 MES 및 업무시스템 개발·유지보수 경험 보유 | ready | resume summary |
| `CL-PUB-002` | 제조 생산관리, 커머스 운영, 물류/출고 등 업무 도메인을 다룸 | ready | resume summary |
| `CL-PUB-003` | 셀러형 커머스 운영 시스템에서 상품, 입고, 재고, 외부출고, 대시보드 관련 기능 개선에 참여 | ready | work experience |
| `CL-PUB-004` | 외부 주문 등록 흐름에서 파일 업로드, preview, confirm, all-or-nothing batch semantics를 다룸 | ready | project bullet |
| `CL-PUB-005` | 주문 데이터를 channel, region, status 기준의 canonical model로 정규화하는 구조를 다룸 | role-confirm | project bullet |
| `CL-PUB-006` | natural key와 idempotency key를 활용한 재전송/중복 처리 안정성 관점을 다룸 | role-confirm | backend reliability |
| `CL-PUB-007` | service-to-service signed API, dry-run/fail-closed gate, masked payload, PII guard 등 외부 연동 리스크 제어 요소를 다룸 | role-confirm | backend reliability / security |
| `CL-PUB-008` | dispatch log와 external system projection을 대사하여 누락, 외부 유입, 상태 차이를 식별하는 sync verification 구조를 다룸 | role-confirm | backend reliability |
| `CL-PUB-009` | legacy PHP 환경에서 도메인 모듈화, application service, repository, 기존 class 구조의 점진적 분리 경험 보유 | selective | architecture section |
| `CL-PUB-010` | AI-assisted workflow를 활용해 설계 문서화, 테스트 기준 정리, 변경 이력 관리를 병행 | selective | process differentiator |

## Verb Strength Guide

| Use When Confirmed | Safer Default | Avoid Unless Proven |
|---|---|---|
| 설계·구현 | 참여·고도화·다룸 | 총괄·완료·상용화·전면 개선 |
| 적용 | 검토·반영 | 주도·소유 |
| 운영 | 운영 관점 검토 | SLA 달성, 수치 개선 |

## Excluded Claims

Do not use these in public resume/portfolio content:

- unverifiable improvement percentages
- hard-to-prove maintenance rate claims
- unfinished/non-commercial app work as a primary project
- direct private repository names or URLs
- private customer/project identifiers
- internal staging configuration or secrets
- production endpoints or private hostnames
- raw customer, order, admin, session, payment, or log data
- completed SaaS/platform claims unless a released product can be shown safely
- completed live-commerce integration claims unless separately verified and sanitized

## Public Resume Bullet Candidates

```markdown
- PHP 기반 셀러형 커머스/물류 운영 시스템에서 상품, 입고, 재고, 외부출고, 대시보드 관련 기능 개선에 참여
- 외부 주문 등록 흐름에서 파일 업로드, preview token, confirm 기반 all-or-nothing batch 처리 구조를 다룸
- 주문 데이터를 channel/region/status 기준의 canonical model로 정규화하고, 재전송·중복 처리 안정성을 고려한 연동 구조를 검토
- service-to-service signed API, dry-run/fail-closed gate, masked payload, PII guard 등 외부 시스템 연동의 운영 리스크 제어 요소를 다룸
- 전송 로그와 외부 시스템 projection을 기준으로 누락, 외부 유입, 상태 차이를 식별하는 read-only sync verification 구조를 다룸
```
