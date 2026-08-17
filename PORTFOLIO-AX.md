# Backend / Internal Tools / AX Portfolio

> Strategy `PS-v1.3.0` · target-specific public-sanitized projection · 2026-08-17

## Backend Engineer | 업무시스템 · 내부도구 · AX/개발자동화

PHP/MySQL 기반 제조 MES와 커머스·물류 업무시스템을 개발·유지보수해 왔습니다.

기능을 수정할 때 AS-IS 코드와 DB 구조·상태값, 권한, 관리자 화면, batch/cron, 외부 API 영향을 확인한 뒤 변경 범위를 산정하는 운영형 개발 방식에 익숙합니다.

최근에는 반복되는 개발 업무와 프로젝트 설정을 내부 도구와 workflow로 구조화하고, AI-assisted 결과를 test·CI·독립 리뷰·사람 승인으로 검증하는 공개 engineering 프로젝트를 진행하고 있습니다.

이 문서는 특정 회사나 내부 추천 정보를 포함하지 않는 **Internal Tools / AX 역할용 공개 projection**입니다.

---

## 30-Second Fit

| Target signal | Evidence |
|---|---|
| Backend / business systems | PHP/MySQL, MES, commerce/logistics career cases |
| Developer internal tools | `harness-kit` |
| AI-assisted workflow / automation | `codex-workflow-skills` |
| Admin / operational surfaces | commerce/MES career cases + change-impact method |
| API / data-flow reasoning | career working method + StackForge interface contracts |
| Web breadth | workflow/admin UI와 backend/data flow를 함께 고려하는 범위 |
| Verification discipline | tests, CI, failure accounting, adversarial review |

The positioning is **backend-centered**. It does not claim ML/model-training specialization or frontend-specialist depth.

---

# Career Foundation

## 1. Business-System Change Impact

**Ready working-method evidence**

기능 변경 전 다음 경계를 함께 확인해 수정 범위를 산정합니다.

```text
AS-IS code
→ DB structure / state
→ permission
→ administrator surface
→ batch / cron
→ external API
→ affected workflow
```

이 방식은 한 화면의 증상만 고치는 대신, 운영 중인 상태와 후속 처리의 blast radius를 먼저 확인하는 데 초점을 둡니다.

Canonical support: `CL-PUB-011`.

## 2. Commerce / Logistics Operations

Public-ready evidence:

- 셀러형 커머스·물류 운영 시스템의 상품, 입고, 재고, 외부출고, 대시보드 기능 개선 참여
- 외부 주문 등록에서 upload → preview → confirm 단계를 구분하고 batch 처리 경계를 다룬 경험

Detailed architecture ownership such as canonical model, idempotency, signed API, PII/security policy, and reconciliation remains role-confirm.

Deep dive: [`content/projects/commerce-fulfillment-operations.md`](content/projects/commerce-fulfillment-operations.md)

## 3. Manufacturing MES / Business Systems

Public-ready evidence:

- PHP 기반 MES 및 업무시스템 개발·유지보수
- 제조 생산관리 도메인을 다룬 경험
- 일반적인 변경 영향 분석 방식은 ready claim으로 사용

Detailed field-requirement decomposition, legacy modularization, rollout/support chronology, customer-count, and development-lead scope remain selective/source-confirm material.

Deep dive: [`content/projects/manufacturing-mes-business-systems.md`](content/projects/manufacturing-mes-business-systems.md)

---

# Internal Tooling / AX Evidence

## 1. harness-kit — Developer Internal Tooling

Repository: https://github.com/tomtomjskim/harness-kit

### Problem

프로젝트가 늘수록 CLAUDE.md, hooks, MCP, permissions, agents, workflows 같은 개발자 설정을 직접 복사하면 중복과 configuration drift가 발생합니다.

### Approach

설정을 module/configuration-as-code 형태로 관리하고 다음 build pipeline으로 다시 생성합니다.

```text
Resolver
→ Loader
→ Validator
→ Merger
→ Renderer
→ Writer
```

### Why this matters for Internal Tools

- 반복되는 개발자 설정 문제를 도구로 전환
- typed configuration과 validation boundary
- project-specific values를 parameterized module로 분리
- abstraction이 과한 조건과 npm 미배포 상태도 README에 명시

### Current caveat

최종 제출에서 current test state를 직접 언급하려면 현재 HEAD의:

```text
npm ci
npm run lint
npm test
npm run build
```

결과를 다시 고정해야 합니다.

---

## 2. Codex Workflow Skills — AI Workflow / Development Automation

Repository: https://github.com/tomtomjskim/codex-workflow-skills

### Problem

복잡한 AI-assisted 개발 작업은 생성 능력보다 scope drift, 약한 검증, stale context, review 누락으로 실패할 수 있습니다.

### Approach

```text
Intake
→ Implementation
→ Independent Review
→ Validation
→ Session Closeout
```

작업 범위, 승인 경계, 검증 상태와 실패 receipt를 명시적인 contract로 관리합니다.

### Public Verification

- 2026-08-05 public forward-test report: 881 tests discovered / 879 pass / 2 external-environment skip
- paid/live path는 prerequisite 부재 시 `not_run`으로 유지
- reviewed HEAD의 `Validate Skills` GitHub Actions success 확인

### Why this matters for AX

AI 사용을 개인 prompt skill에 머무르게 하지 않고 반복 가능한 workflow, review와 evidence contract로 전환한 사례입니다.

---

## 3. StackForge Atlas — Engineering Guardrail

Repository: https://github.com/tomtomjskim/stackforge-atlas

### Problem

자동화와 agent가 구현 속도를 높일수록 제품 의도, interface, test와 운영 지식이 분리될 수 있습니다.

### Approach

```text
Intent
→ Interface
→ Implementation
→ Verification Evidence
→ Failure / Recovery
→ Evolution
```

### Public Verification

- runnable Node pilot
- PostgreSQL durability pilot
- operational recovery drill
- reviewed HEAD의 `Validate Atlas` GitHub Actions success
- PITR / host loss / replication / failover 등 증명하지 않은 범위를 README에서 제한

### Why this matters for AX

AI/tooling 프로젝트가 software-engineering 기본기를 대체하지 않도록 interface, DB, test와 failure path를 같은 evidence chain으로 관리합니다.

---

# AX Working Model

```text
업무 또는 개발상의 반복 문제
→ 현재 흐름과 제약 파악
→ 자동화할 범위 선택
→ 내부 도구 / workflow 구현
→ test / static check / CI
→ 독립 검토
→ 사람 승인
→ 문서화 / 재사용
```

AI는 이 pipeline의 일부이며 책임을 대신하는 주체로 취급하지 않습니다.

## Practical Guardrails

- private/customer/production data를 public evidence로 복사하지 않음
- AI output을 검증하지 않은 상태에서 fact 또는 completion으로 승격하지 않음
- 모델/도구 이름보다 실제 workflow와 failure boundary를 설명
- 미실행·차단·skip을 pass와 분리
- public R&D를 previous-employer production system으로 표현하지 않음

---

# Backend + Web Breadth

이 target에서 frontend는 별도의 전문성 경쟁이 아니라 **필요한 업무 도구를 end-to-end로 완성할 수 있는 범위**로 봅니다.

```text
operator / developer workflow
→ web/admin surface
→ API
→ business rule
→ database/state
→ background/external boundary
```

주력은 backend/data/state이고, 필요한 업무 화면과 workflow UI를 함께 이해하고 구현하는 방향입니다.

Do not infer from this section:

- advanced design-system specialization,
- high-end frontend animation expertise,
- frontend-only career positioning.

---

# Role Requirement Mapping

Detailed generic matrix: [`docs/targets/internal-tools-ax-requirement-evidence.md`](docs/targets/internal-tools-ax-requirement-evidence.md)

Highest-confidence mapping:

```text
Internal tools        → harness-kit
AI workflow           → codex-workflow-skills
Engineering quality   → stackforge-atlas
Business systems      → Commerce + MES career cases
Operational judgment  → CL-PUB-011
```

---

# Known Gaps

1. Modern frontend is useful breadth, not the primary specialization.
2. Public tooling does not prove company-wide production AX ownership.
3. No unsupported productivity/time-saving percentage is used.
4. Model training, inference serving, enterprise RAG ownership are not claimed.
5. Stronger historical architecture/leadership claims remain behind the canonical source-confirm gate.

---

# Reading Order for Interviewers

```text
1. This page
2. harness-kit README
3. Codex Workflow Skills README + forward-test report
4. StackForge Atlas README / recovery evidence
5. Career case deep dives
```

For a general backend role, use [`PORTFOLIO.md`](PORTFOLIO.md) instead; it uses a different evidence order.
