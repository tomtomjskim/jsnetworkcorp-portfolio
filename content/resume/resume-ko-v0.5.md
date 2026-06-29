# 이력서 초안 v0.5

version: PF-v0.5.0
updated: 2026-06-29
visibility: public-sanitized
status: draft

> 이 문서는 공개 포트폴리오 저장소에 둘 수 있는 sanitized 이력서 초안입니다. 상세 근거, private repo, 고객/주문/운영 데이터, 내부 구현 세부사항은 별도 private wiki 또는 protected interview kit에서 관리합니다.

## Headline

PHP 기반 제조 MES와 셀러형 이커머스/물류 운영 시스템 경험을 가진 백엔드/풀스택 개발자

## Summary

PHP 기반 업무시스템에서 제조 생산관리, 커머스 운영, 외부 주문, 입고·재고, 출고 및 Fulfillment 연동 도메인을 다뤄 왔습니다. legacy PHP 환경에서 기능 고도화, 도메인 모듈화, 외부 API 연동, 주문/출고 데이터 정규화, 운영 안정성 개선을 중심으로 백엔드/풀스택 업무를 수행했습니다.

AI-assisted workflow를 활용해 설계 문서화, 테스트 기준 정리, 변경 이력 관리, 리팩터링 검토를 병행하는 방식으로 개발 프로세스를 개선해 왔습니다.

## Core Skills

| Category | Skills |
|---|---|
| Language | PHP, JavaScript |
| Backend | legacy PHP, Laravel, DDD, PSR-4, application service, repository pattern |
| Database | MySQL |
| Domain | MES, manufacturing systems, seller commerce, inbound, inventory, external outbound, fulfillment, OMS |
| Integration | signed API, service-to-service integration, idempotency key, API client |
| Reliability | fail-closed, dry-run, all-or-nothing batch, sync verification, status drift review |
| Privacy/Security | masked payload, PII guard, public/private content boundary |
| Workflow | AI-assisted documentation, refactoring review, test planning, release/version notes |

## Experience Themes

### Manufacturing / MES Business Systems

- PHP/Laravel/MySQL 기반 제조 생산관리 및 업무시스템 개발·유지보수 경험
- 다수 제조 고객사의 운영 이슈, 기능 개선, 오류 수정, 데이터 처리 요청 대응 경험
- legacy PHP 시스템의 구조 개선, 모듈 정리, 가독성 개선을 위한 리팩터링 경험
- On-Premise 환경 및 JSON 데이터 처리 기반 업무시스템 개발 경험

### Seller Commerce / Logistics Operations System

- PHP 기반 셀러형 커머스/물류 운영 시스템에서 상품, 입고, 재고, 외부출고, 대시보드 관련 기능 개선에 참여
- 외부 주문 등록 흐름에서 파일 업로드, preview token, confirm 기반 all-or-nothing batch 처리 구조를 다룸
- 주문 데이터를 channel, region, status 기준의 canonical model로 정규화하는 구조를 검토
- natural key와 idempotency key를 활용한 재전송/중복 처리 안정성 관점을 다룸
- service-to-service signed API, dry-run/fail-closed gate, masked payload, PII guard 등 외부 시스템 연동의 운영 리스크 제어 요소를 다룸
- 전송 로그와 외부 시스템 projection을 기준으로 누락, 외부 유입, 상태 차이를 식별하는 read-only sync verification 구조를 다룸

### Portfolio / Architecture Direction

- live-commerce를 신규 판매 채널로 보고, 기존 커머스/fulfillment 운영 구조와 연결 가능한 아키텍처 방향성 검토
- 플러그인형/모듈형 커머스 구조로 확장 가능한 방향을 포트폴리오 주제로 관리
- 단, 공개 이력서에서는 완료된 SaaS나 live-commerce 통합 claim으로 표현하지 않음

### AI-assisted Workflow

- AI-assisted workflow를 활용해 코드 변경 방향 검토, 설계 문서화, 테스트 기준 정리, 변경 이력 관리를 병행
- 내부 도구명보다 기능 중심으로 표현: 개발 보조 자동화, 리팩터링 검토, PR/변경 요약, 운영 브리핑 구조

## Claim Policy

사용하지 않는 claim:

- 검증 어려운 개선율 또는 처리율
- 산식이 불명확한 정량 성과
- private repo 링크
- 내부 프로젝트명 또는 고객사 실명
- raw customer/order/admin/session/payment data
- staging/prod config, credentials, endpoints
- SaaS 구현 완료 또는 live-commerce 통합 완료처럼 과장될 수 있는 표현

## Next Role-Scope Review

강한 표현으로 바꾸기 전에 아래 범위를 확인해야 합니다.

| 확인 항목 | 목적 |
|---|---|
| 직접 구현 파일/모듈 | `참여`를 `구현`으로 높일 수 있는지 판단 |
| 설계 주도 여부 | `검토`를 `설계`로 높일 수 있는지 판단 |
| 테스트 작성 범위 | 품질/검증 claim 사용 가능성 판단 |
| 운영 검증 참여 여부 | sync/reconcile/장애 대응 claim 강도 판단 |
| public disclosure 가능 범위 | 프로젝트명, 고객명, 화면, 코드 링크 공개 가능 여부 판단 |
