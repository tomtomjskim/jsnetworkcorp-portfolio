# AX / Internal Tools Resume Variant — KO

version: PF-v1.0.2
updated: 2026-08-17
visibility: public-sanitized
status: draft
variant: ax-internal-tools-ko
strategy: PS-v1.3.0

## Headline

**Backend Engineer | 업무시스템 · 내부도구 · AX/개발자동화**

## Summary

PHP/MySQL 기반 제조 MES와 커머스·물류 업무시스템을 개발·유지보수해 왔습니다. 기능을 수정할 때 AS-IS 코드와 DB 구조·상태값, 권한, 관리자 화면, batch/cron, 외부 API 영향을 확인한 뒤 변경 범위를 산정하는 운영형 개발 방식에 익숙합니다.

최근에는 프로젝트마다 반복되는 AI 개발 설정과 검수 절차를 내부 도구와 workflow로 구조화하는 공개 프로젝트를 진행하고 있습니다. AI 결과는 테스트·CI·독립 리뷰로 검증하고, 실행하지 못한 범위와 한계도 성공과 분리해 기록합니다. 백엔드 중심이지만 업무·관리자 화면과 API·데이터 흐름을 함께 이해해 필요한 도구를 한 흐름으로 완성하는 역할을 지향합니다.

## Target Fit

### 1. Business Systems / Backoffice

- PHP 기반 MES 및 업무시스템 개발·유지보수 경험
- 셀러형 커머스·물류 운영 시스템의 상품, 입고, 재고, 외부출고, 대시보드 기능 개선 참여
- 운영 변경 전 DB 상태, 권한, 관리자 화면, batch/cron과 외부 API 영향을 함께 확인하는 변경 범위 분석 방식

### 2. Internal Tools / Development Automation

최근 공개 프로젝트에서는 반복되는 개발 설정과 작업 절차를 사람이 기억해야 하는 문서가 아니라 재사용 가능한 도구와 검증 계약으로 옮기는 실험을 진행하고 있습니다.

- `harness-kit`: 여러 프로젝트의 Claude Code instruction, hooks, MCP, permissions, agents, workflow 설정을 module/configuration-as-code 방식으로 관리
- `codex-workflow-skills`: intake → implementation → independent review → session closeout을 분리해 복잡한 AI-assisted 작업의 scope와 검증 경계를 구조화
- `stackforge-atlas`: intent → interface → implementation → evidence → recovery까지 연결하는 software-engineering reference

이 프로젝트들은 이전 회사의 production source가 아니라 현재의 engineering capability를 보여주는 공개 R&D / reference evidence입니다.

### 3. AI / AX Working Method

AI 도구를 단순 코드 생성기로 사용하기보다 다음 흐름으로 제한하고 검증합니다.

```text
문제 / 반복 업무
→ 명시적 범위와 제약
→ AI-assisted 분석·구현
→ test / static check / CI
→ independent review
→ human acceptance
→ 문서화 / 재사용
```

공개 `codex-workflow-skills`의 2026-08-05 forward-test report는 repository-owned validation에서 881 tests 중 879 pass와 외부 환경 의존 2 skip을 기록하고, 실행하지 않은 paid/live path는 별도로 `not_run`으로 유지합니다.

### 4. Backend + Web Surface

주력은 backend와 업무 데이터 흐름입니다. 다만 업무시스템에서는 API만 분리해 보지 않고 사용자/관리자 화면과 데이터 상태가 어떻게 연결되는지 함께 확인해 왔습니다.

이 target variant에서 의미하는 frontend 역량은 다음 범위입니다.

- 업무·관리자 UI와 backend/data flow를 함께 이해
- 필요한 운영 화면과 workflow UI를 backend 기능과 연결
- frontend 전문 직군 수준의 디자인 시스템/고급 interaction 전문성을 주장하지 않음

## Selected Public Evidence

### harness-kit — Internal Tooling

Repository: https://github.com/tomtomjskim/harness-kit

Strong signal:

- repeated developer configuration을 module로 전환
- typed configuration + validation + deterministic rendering pipeline
- tool이 불필요한 조건과 npm 미배포 상태를 함께 문서화

Current caveat:

- 최종 제출 전에 현재 HEAD의 `npm ci → lint → test → build`를 다시 재현해 검증 상태를 고정해야 함

### Codex Workflow Skills — AI Workflow / Automation

Repository: https://github.com/tomtomjskim/codex-workflow-skills

Strong signal:

- intake / bounded review / adversarial review / knowledge closeout contracts
- missing execution과 failure를 pass로 승격하지 않는 evidence discipline
- reviewed HEAD의 GitHub Actions validation success

### StackForge Atlas — Engineering Quality Guardrail

Repository: https://github.com/tomtomjskim/stackforge-atlas

Strong signal:

- product intent에서 interface와 verification evidence까지 추적
- runnable pilot과 PostgreSQL durability/recovery work
- reviewed HEAD의 GitHub Actions validation success
- PITR/HA/failover 등 증명하지 않은 범위를 명시적으로 제한

## Target-Specific Ordering

```text
1. Backend / business-system career
2. Internal tooling
3. AI-assisted workflow and automation
4. API / admin / web integration breadth
5. Public engineering verification
```

For this target family, public repository ordering is:

```text
1. harness-kit
2. codex-workflow-skills
3. stackforge-atlas
```

This differs from the general-backend portfolio because developer internal tooling is a primary target requirement.

## Guardrails

Do not claim:

- ML/model-training specialist experience
- company-wide AX platform ownership
- production RAG/inference infrastructure unless separately verified
- frontend-specialist depth
- productivity/time-saving percentages without a measured baseline
- canonical model, idempotency, signed API, PII/security-policy, or reconciliation ownership while those claims remain role-confirm
- public R&D projects as previous-employer production systems

## Interview Positioning

Core message:

> AI를 많이 사용한다는 점보다, 실제 업무 문제와 반복되는 개발 과정을 이해하고 필요한 내부 도구를 직접 만들며 그 결과를 테스트와 리뷰로 검증할 수 있다는 점을 보여준다.
