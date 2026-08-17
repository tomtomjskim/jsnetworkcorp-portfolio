# Public Claim Bank

version: CL-v0.7
updated: 2026-08-17
visibility: public-sanitized

This file contains public-safe claim candidates after redaction and evidence-status review. A `ready` public claim is safe for the public portfolio layer, but final company submission still requires target-context and chronology checks. `selective`, `role-confirm`, `private-evidence`, and `needs verification` claims must not be silently promoted by downstream text generators.

## Positioning

### Korean — default public-safe

PHP/MySQL 기반 제조 MES와 커머스·물류 업무시스템 경험을 가진 백엔드 개발자. 운영 중인 기능을 변경할 때 AS-IS 코드와 DB 구조, 상태값, 권한, 관리자 화면, batch/cron, 외부 API 영향을 확인해 변경 범위를 산정하는 방식에 익숙합니다.

### English — default public-safe

Backend engineer with experience in PHP/MySQL-based manufacturing, commerce, and logistics business systems, with an operations-oriented approach to change impact across existing code, database state, permissions, administrator workflows, scheduled jobs, and external APIs.

This default positioning deliberately avoids canonical-model, idempotency, security-policy, or broad architecture-ownership language while those claims remain gated.

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
| `CL-PUB-010` | AI-assisted workflow를 활용해 설계 문서화, 테스트 기준 정리, 변경 이력 관리를 병행 | superseded | replaced by evidence-backed AI claims below |
| `CL-PUB-011` | 기능 변경 전 AS-IS 코드와 DB 구조, 상태값, 권한, 관리자 화면, batch/cron, 외부 API의 영향을 확인해 변경 범위를 산정하는 운영형 개발 방식을 사용 | ready | positioning / problem-solving |

### CL-PUB-011 Promotion Note

`CL-PUB-011` is promoted as a public-safe working-method claim because the protected source registry classifies this operating pattern among cross-source confirmed facts. The claim describes the candidate's change-impact approach; it does **not** assert ownership of every listed subsystem or that every project used every boundary identically.

Detailed incident/state-mismatch examples remain draft/source-confirm until their exact historical source and role scope are confirmed.

## Evidence-Backed AI Claims

| ID | Public-safe claim | Status | Evidence boundary | Known limitation |
|---|---|---|---|---|
| `CL-AI-001` | 모호하거나 고위험인 Codex 작업을 intake → 구현 → 독립 검토 → session closeout으로 분리한 공개 skill 6종을 설계하고 검증 계약으로 고정 | ready | [public repository](https://github.com/tomtomjskim/codex-workflow-skills), [forward-test report](https://github.com/tomtomjskim/codex-workflow-skills/blob/main/docs/forward-test-report.md) | 2026-08-05 report 기준 881 tests 중 879 pass, 외부 환경 의존 2 skip. live/paid model 품질 증거가 아님 |
| `CL-AI-002` | TypeScript 기반 AI usage intelligence 도구에서 prompt profile·diagnosis·adaptation·drift·LLM-as-Judge를 구조화하고 54 test files, 795 tests로 기능 기준을 검증 | selective | [public repository](https://github.com/tomtomjskim/aiwright), [merged PR #1](https://github.com/tomtomjskim/aiwright/pull/1) | CI run #1 검증 후 `main`에 squash merge됐지만 package release·외부 사용 지표는 없으므로 기능 검증 claim에만 사용 |
| `CL-AI-003` | 개인 제품 개발에서 AI를 기획·구현·리뷰 보조로 사용하고 E2E 88/88, 시나리오 36/36, Flutter smoke 1/1로 결과를 검증 | private-evidence | protected evidence only; public에는 제품명·비공개 저장소 링크를 싣지 않음 | 배포 전이며 외부 인증·OCR·공공 API 일부는 mock |
| `CL-AI-004` | AI 대화·산출물을 `inbox → generated → reviewed → canonical` 신뢰 계층으로 분리하고, 출처·민감도·사람 승격 규칙으로 지식화를 통제 | private-evidence | protected evidence only; 공개 문구는 구조와 통제 원칙만 사용 | 분류는 휴리스틱이며 CI가 문서 사실성을 증명하지 않음 |

## Verb Strength Guide

| Use When Confirmed | Safer Default | Avoid Unless Proven |
|---|---|---|
| 설계·구현 | 참여·고도화·다룸 | 총괄·완료·상용화·전면 개선 |
| 적용 | 검토·반영 | 주도·소유 |
| 운영 | 운영 관점 검토 | SLA 달성, 수치 개선 |

## Excluded Claims

Do not use these in public resume/portfolio content:

- unverifiable improvement percentages,
- hard-to-prove maintenance rate claims,
- unfinished/non-commercial app work as a primary career project,
- direct private repository names or URLs,
- private customer/project identifiers,
- internal staging configuration or secrets,
- production endpoints or private hostnames,
- raw customer, order, admin, session, payment, shipment, production, or log data,
- completed SaaS/platform claims unless a released product can be shown safely,
- completed live-commerce integration claims unless separately verified and sanitized,
- selective or role-confirm claims rewritten as default ownership statements.

## Public Resume Bullet Candidates

### Ready

```markdown
- PHP/MySQL 기반 제조 MES와 커머스·물류 업무시스템을 개발·유지보수하며 생산관리, 상품·입고·재고·출고 등 운영 도메인을 다룸
- PHP 기반 셀러형 커머스/물류 운영 시스템에서 상품, 입고, 재고, 외부출고, 대시보드 관련 기능 개선에 참여
- 외부 주문 등록 흐름에서 파일 업로드, preview, confirm 기반의 batch 처리 경계를 다룸
- 기능 변경 전 AS-IS 코드와 DB 구조, 상태값, 권한, 관리자 화면, batch/cron, 외부 API 영향을 확인해 변경 범위를 산정
```

### Conditional — do not submit as ownership until promoted

```markdown
- 주문 데이터를 channel/region/status 기준의 canonical model로 정규화하는 구조를 다룸
- natural/idempotency key를 활용한 재전송·중복 처리 안정성 관점을 다룸
- service-to-service signed API, dry-run/fail-closed gate, masked payload, PII guard 등 외부 연동 리스크 제어 요소를 다룸
- 전송 로그와 external projection을 대사하여 상태 차이를 식별하는 sync verification 구조를 다룸
- legacy PHP 구조를 application service/repository/domain boundary로 점진적으로 분리
```

These conditional lines are authoring candidates only. Their presence in this file does not make them submission-ready.

### AI Workflow Candidates

```markdown
- Codex 작업을 intake → 구현 → 독립 검토 → session closeout으로 분리한 공개 skill 6종을 설계하고, forward test에서 881 tests 중 879 pass·외부 환경 의존 2 skip을 기록
- TypeScript 기반 AI usage intelligence 도구에서 prompt profile·diagnosis·adaptation·drift·LLM-as-Judge를 구조화하고 54 test files·795 tests로 기능 기준을 검증
- 개인 제품 개발에서 AI 공동작업 결과를 E2E 88/88·시나리오 36/36·Flutter smoke 1/1로 검증하되, 배포 전·외부 API 일부 mock 상태를 함께 명시
- AI 대화·산출물을 inbox → generated → reviewed → canonical로 분리하고, 출처·민감도·사람 승격 규칙을 적용한 Git/Markdown 지식 체계를 운영
```

Apply the status in the AI claim table before using any of these. `selective` and `private-evidence` lines are not default public submission claims.

## Downstream Rule

Every downstream artifact must preserve this ordering of authority:

```text
claim bank status
→ application text
→ GitHub portfolio
→ web/PDF projection
```

A polished downstream sentence never promotes its own evidence status.
