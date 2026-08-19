# Public Claim Bank

version: CL-v0.8
updated: 2026-08-17
visibility: public-sanitized

This file contains public-safe claim candidates after redaction and evidence-status review. A `ready` public claim is safe for the public portfolio layer, but final company submission still requires target-context and chronology checks. `selective`, `role-confirm`, `private-evidence`, `supporting`, `hold`, and `needs verification` claims must not be silently promoted by downstream text generators.

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
| `CL-AI-001` | 모호하거나 고위험인 Codex 작업을 intake → 구현 → 독립 검토 → session closeout으로 분리한 공개 skill 6종을 설계하고 검증 계약으로 고정 | ready | [public repository](https://github.com/tomtomjskim/codex-workflow-skills), [forward-test report](https://github.com/tomtomjskim/codex-workflow-skills/blob/main/docs/forward-test-report.md) | 테스트 통과는 live/paid model 품질, 생산성 향상률, 조직 채택을 증명하지 않음 |
| `CL-AI-002` | TypeScript 기반 AI usage intelligence 도구에서 prompt profile·diagnosis·adaptation·drift·LLM-as-Judge를 구조화하고 기능 기준을 테스트로 검증 | hold | [public repository](https://github.com/tomtomjskim/aiwright) | 목적·실사용·면접 설명 가능성을 다시 확인하기 전 대표 사례로 사용하지 않음 |
| `CL-AI-003` | 개인 제품 개발에서 AI를 기획·구현·리뷰 보조로 사용하고 E2E·시나리오·smoke 결과로 검증 | private-evidence | protected evidence only | 배포 전이며 일부 외부 기능은 mock; 이번 자기소개서의 대표 근거로 사용하지 않음 |
| `CL-AI-004` | AI 대화·산출물을 `inbox → generated → reviewed → canonical` 신뢰 계층으로 분리하고, 출처·민감도·사람 승격 규칙으로 지식화를 통제 | supporting | protected source; public에는 구조만 사용 | 분류 규칙과 CI가 문서 사실성을 자동 증명하지 않음 |
| `CL-AI-005` | 백엔드·프론트 2인 개발 환경에서 프로젝트 Skill·규칙, 소스맵, PR 리뷰, 커밋, 기능 검수 기준을 공통으로 사용 | private-evidence | protected commerce project source; public에는 sanitized case만 사용 | 신규 인력 온보딩, 대규모 팀 확산, 전사 AX 근거는 없음 |
| `CL-AI-006` | 요구사항 정리, 설계 검수, 구현, 코드 검수, 디버깅, Playwright E2E, 사람 승인을 단계별 Workflow로 운용 | private-evidence | protected project rules and E2E artifacts | 모든 단계가 CI에서 자동 강제된다는 의미가 아님 |
| `CL-AI-007` | Agent의 test skip·fail·미실행 보고 누락을 경험한 뒤 시나리오·결과 Markdown과 실제 산출물 확인을 완료 조건에 추가 | private-evidence | protected result docs and user interview | 세부 상태·내부 경로는 공개하지 않음 |
| `CL-AI-008` | Ollama·Gemma 3 기반 로컬 번역 도구를 내부 PC에 구성해 한·영·일·중 언어팩 생성과 PHP/JSON 반영 업무에 적용 | private-evidence | public에는 i18n 결과 구조와 synthetic diagram만 사용 | GPU 없는 소형 모델의 속도·품질 한계, 사람 검수 필요, 정량 시간·정확도 없음 |
| `CL-AI-009` | Skill, Hook, Handoff, Failure Recovery를 포함한 Claude Code 프로젝트 Workflow와 적용 가이드를 공개 저장소로 관리 | selective | [public repository](https://github.com/tomtomjskim/claude-code-guide) | 저장소 전체 기능을 모든 회사 프로젝트에 적용했다고 주장하지 않음 |
| `CL-AI-010` | 프로젝트별 instruction, Hook, MCP, permission, Agent, Workflow를 모듈로 관리하는 개발자 도구를 구현 | supporting | [public repository](https://github.com/tomtomjskim/harness-kit) | npm 미배포, 팀 외부 채택 미확인 |
| `CL-AI-011` | 요구사항–인터페이스–검증–유지보수 근거를 하나의 feature slice로 연결하는 가이드·하네스를 구성 | supporting | [public repository](https://github.com/tomtomjskim/stackforge-atlas) | 제한된 pilot 근거를 일반적인 운영 성과로 확대하지 않음 |
| `CL-AI-012` | AI와 데이터베이스 사이의 읽기 권한·쿼리 검증·연결 경계를 다루는 MCP 도구를 개발 | supporting-hold | [public repository](https://github.com/tomtomjskim/db-mcp) | README의 강한 표현과 실제 검증 범위를 정리한 뒤 사용 |

## Evidence Tiers

### Tier A — Primary

- `codex-workflow-skills`
- `claude-code-guide`에서 실제 사용 범위
- 운영 커머스 플랫폼의 sanitized 실무 사례
- Ollama·Gemma 3 i18n 실무 사례

### Tier B — Supporting

- `stackforge-atlas`
- `db-mcp` — 공개 표현 재검수 후
- `harness-kit`
- Personal Wiki trust layer — 구조만 공개
- `codex-project-guide` — private 링크 없이 운영 경험만 설명

### Tier C — Hold / Excluded

| Evidence | Decision | Reason |
|---|---|---|
| `aiwright` | hold | 목적·실사용·설명 가능성 재검증 전 대표 사례 사용 금지 |
| `image-translator` | excluded | 이번 이력서·AX 포트폴리오 근거에서 제외 |
| `team-orchestrator-mcp` | hold | prototype 범위와 실제 채택·배포 근거 부족 |
| `openclaw-secure-deploy` | hold | `production-ready` 표현과 실제 운영 근거 재검증 필요 |
| `im-not-ai` | hold | 소유·기여·upstream 관계 확인 필요 |
| `claude-code-team-system` | hold | `claude-code-guide`에 통합된 과거 원천 |
| `awesome-codex-subagents` | hold | 직접 구현과 reference/curation 범위 구분 필요 |

## Verb Strength Guide

| Use When Confirmed | Safer Default | Avoid Unless Proven |
|---|---|---|
| 설계·구현·적용 | 참여·정리·검토·고도화·다룸 | 총괄·전면 혁신·완전 자동화 |
| 공통 기준으로 사용 | 개인 또는 프로젝트 단위로 사용 | 전사 표준화·조직 확산 |
| 실제 업무에 사용 | 시험 적용·prototype | 외부 adoption·상용 서비스 |
| 테스트로 확인 | 확인 절차를 운영 | 생산성·정확도·품질 수치 개선 |

## Excluded Claims

Do not use these in public resume/portfolio content:

- unverifiable productivity, time, cost, quality, or accuracy improvement percentages,
- two-person project experience rewritten as enterprise-wide AX or organization-wide standardization,
- onboarding or large-team rollout that has not actually occurred,
- AI completing all tests, UI/UX review, or deployment without human verification,
- local LLM translation quality guarantees or complete translation automation,
- hard-to-prove maintenance rate claims,
- unfinished/non-commercial app work as a primary career project,
- direct private repository names or URLs,
- private customer/project identifiers,
- internal staging configuration or secrets,
- production endpoints or private hostnames,
- raw customer, order, admin, session, payment, shipment, production, or log data,
- completed SaaS/platform claims unless a released product can be shown safely,
- completed live-commerce integration claims unless separately verified and sanitized,
- selective or role-confirm claims rewritten as default ownership statements,
- PR·CI·test pass rewritten as release, deployment, production adoption, or external usage.

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

### AI-assisted Workflow Candidates

```markdown
- 요구사항 정리, 설계 검수, 구현, 코드 검수, 디버깅, Playwright E2E, 사람 승인을 단계별 Workflow로 운영
- Agent의 test skip·fail·미실행 보고 누락을 겪은 뒤 시나리오·결과 문서와 실제 산출물 확인을 완료 조건에 추가
- 프로젝트 소스맵·기능 문서·Skill·개발 규칙을 2인 개발 환경의 PR 리뷰·커밋·기능 검수 기준으로 사용
- Ollama·Gemma 3 기반 로컬 번역 도구를 내부 환경에 구성해 한·영·일·중 언어팩 생성과 PHP/JSON 반영 업무에 실제 사용
```

Apply the status in the AI claim table before using any of these. `selective`, `private-evidence`, `supporting`, and `hold` lines are not default public submission claims.

## Downstream Rule

Every downstream artifact must preserve this ordering of authority:

```text
claim bank status
→ application text
→ GitHub portfolio
→ web/PDF projection
```

A polished downstream sentence never promotes its own evidence status. A public repository is evidence only for the behavior it actually contains; repository size or test count alone does not make it a primary resume case.
