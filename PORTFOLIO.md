# Backend Engineering Portfolio

> Strategy `PS-v1.2.0` · public-sanitized draft · 2026-08-17

PHP/MySQL 기반의 제조 MES와 커머스·물류 업무시스템을 개발·유지보수해 온 백엔드 개발자입니다.

새 기능을 빠르게 추가하는 것보다 **기존 데이터 상태, 관리자 처리, 권한, batch/cron, 외부 API와 운영 흐름이 변경으로 어떻게 영향을 받는지 파악한 뒤 수정 범위를 정하는 방식**을 중요하게 봅니다.

최근 공개 프로젝트에서는 같은 원칙을 architecture contract, failure path, tests, CI, adversarial review 형태로 더 명시적으로 실험하고 있습니다.

이 포트폴리오는 두 종류의 evidence를 분리합니다.

```text
Career Case Study
= 실제 경력에서 다룬 문제와 업무 방식

Public Engineering Repository
= 현재 공개적으로 확인 가능한 설계·구현·검증 방식
```

공개 GitHub 프로젝트를 이전 회사의 proprietary production source처럼 표현하지 않습니다.

---

## 30-Second Profile

- **Backend / Business Systems:** PHP, MySQL 기반 운영 시스템의 기능 개선과 유지보수
- **Domains:** 제조 MES, 커머스, 물류·배송, 외부 시스템 연동
- **Problem Solving:** 상태·데이터 흐름과 변경 영향 범위를 먼저 추적
- **Operations:** 관리자 화면, 권한, batch/cron, 외부 API 실패까지 함께 검토
- **Current Engineering Evidence:** failure/recovery, tests, CI, agent-assisted review를 공개 repository로 검증

자소서·지원서용 짧은 문장은 별도 P0 layer에서 관리합니다.

- current candidate: [`docs/application-text/claim-blocks-v2-candidate.md`](docs/application-text/claim-blocks-v2-candidate.md)
- previous baseline: [`docs/application-text/claim-blocks-v1.md`](docs/application-text/claim-blocks-v1.md)

---

# Career Case Studies

## 1. Commerce & Fulfillment Operations

### Problem

커머스·물류 운영 시스템에서는 주문, 배송, 정산 또는 처리 상태가 DB·관리자·사용자 화면에서 다르게 보이거나 외부 연동 실패가 내부 흐름에 영향을 줄 수 있습니다.

### How I Approach It

```text
현상
→ 관련 DB 상태
→ 관리자 처리 경로
→ 사용자 표시 조건
→ batch / cron
→ 외부 API 상태
→ 변경 시 downstream 영향
```

한 화면의 값을 바로 수정하기보다 **상태가 어디에서 갈라졌는지**를 먼저 찾고, 관련 처리에 미치는 영향을 확인하는 방식으로 접근합니다.

기능 변경 후에도 정상 경로만 보지 않고 권한, 실패 응답, 반복 실행, 상태 전이와 관련 관리자 기능을 함께 검토하는 편입니다.

### Public-Ready Scope

- PHP 기반 셀러형 커머스/물류 운영 시스템의 상품, 입고, 재고, 외부출고, 대시보드 기능 개선 참여
- 파일 기반 외부 주문 흐름에서 upload / preview / confirm 단계와 batch 처리 경계를 다룬 경험

canonical model, idempotency, signed API, reconciliation 등의 구체적 설계 ownership은 role-confirm 상태이므로 현재 제출 문구로 승격하지 않습니다.

**Deep dive:** [`content/projects/commerce-fulfillment-operations.md`](content/projects/commerce-fulfillment-operations.md)

---

## 2. Manufacturing MES & Business Systems

### Problem

제조 현장의 요구는 단순히 “화면 하나 변경”으로 끝나지 않습니다. 실제 작업 순서, 조회 기준, 상태, 통계 기준, 권한과 현장 환경을 시스템 조건으로 바꿔야 합니다.

### How I Approach It

```text
현장 요청
→ 실제 업무 순서
→ 입력 순서
→ 조회 조건
→ 상태 변경
→ 통계/집계 기준
→ 권한
→ 화면 + DB 변경
```

도입 후 문제가 발생하면 애플리케이션과 데이터만 보지 않고 PC, 네트워크, 프린터·라벨, 계정/권한 등 어느 계층에서 문제가 발생했는지 분리합니다.

장기간 운영되는 PHP 업무시스템은 전면 재작성보다 기존 동작과 데이터 관계를 파악한 뒤 변경 범위를 작게 가져가고 구조를 점진적으로 정리하는 쪽을 선호합니다.

### Public-Ready Scope

- PHP 기반 MES 및 업무시스템 개발·유지보수
- 생산관리 도메인의 기능 변경, 오류 수정, 데이터 처리 요청
- legacy PHP 구조의 점진적 모듈/가독성 개선

고객사 수, 개발 리드 범위와 구체적 프로젝트 chronology는 protected source 확인 전 공개 headline으로 사용하지 않습니다.

**Deep dive:** [`content/projects/manufacturing-mes-business-systems.md`](content/projects/manufacturing-mes-business-systems.md)

---

## Supporting Career Signal — AI-Assisted Engineering

AI 사용량 자체를 경력의 중심으로 두지 않습니다.

요구사항 정리, 코드/SQL 검토, 테스트 시나리오와 문서화에 LLM을 사용하되 실제 코드, 데이터 구조, 권한, 공식 문서, 테스트 결과를 기준으로 다시 검증하는 방식을 사용합니다.

**Case:** [`content/projects/ai-assisted-development-workflow.md`](content/projects/ai-assisted-development-workflow.md)

---

# Selected Public Engineering Repositories

아래는 회사 경력과 별개의 **공개 engineering artifacts**입니다.

Repository promotion is evidence-ranked, not technology-name-ranked.

Detailed audit: [`docs/github-portfolio/featured-repo-audit-2026-08-17.md`](docs/github-portfolio/featured-repo-audit-2026-08-17.md)

## 1. StackForge Atlas — PRIMARY

**Problem**  
자동화와 LLM agent가 구현 속도를 높일수록 제품 의도, interface, failure handling, verification과 운영 지식의 연결이 끊기기 쉽습니다.

**Evidence**

- intent → interface → evidence → evolution chain
- runnable Node pilot
- PostgreSQL durability pilot
- operational recovery drill
- reviewed HEAD의 `Validate Atlas` GitHub Actions success
- PITR, host loss, replication, failover 등 아직 증명하지 않은 범위를 README에서 명시

**Why it matters**  
현재 공개 repository 중 backend/system engineering 사고와 failure-path 검증을 가장 균형 있게 보여줍니다.

**Repository:** https://github.com/tomtomjskim/stackforge-atlas

---

## 2. harness-kit — FEATURED, verification caveat

**Problem**  
여러 프로젝트의 agent configuration을 수동 복제하면 설정 중복과 drift가 발생합니다.

**Evidence**

- typed module/config structure
- resolver → loader → validator → merger → renderer → writer pipeline
- Zod validation
- Vitest unit-test structure
- abstraction이 불필요한 조건과 npm 미배포 상태까지 README에서 명시

**Current gate**  
최종 제출 전 현재 HEAD의 `npm ci → lint → test → build`를 재현해 검증 상태를 고정해야 합니다. 과거 coverage 수치는 재검증 전 사용하지 않습니다.

**Repository:** https://github.com/tomtomjskim/harness-kit

---

## 3. Codex Workflow Skills — TARGET-DEPENDENT

**Problem**  
복잡한 agent 작업은 scope drift, 약한 검증, stale context, review 누락으로 실패할 수 있습니다.

**Evidence**

- intake / bounded council / adversarial review / session closeout을 분리한 workflow contracts
- 공개 forward-test report에서 failure와 `not_run`을 pass로 승격하지 않는 검증 규칙
- reviewed HEAD의 `Validate Skills` GitHub Actions success

**Portfolio use**

- AI-native backend / platform: FEATURED
- 일반 backend: SUPPORTING

**Repository:** https://github.com/tomtomjskim/codex-workflow-skills

---

# Hold / Exclude

| Repository | Decision | Reason |
|---|---|---|
| `agent-orchestra-monitor` | HOLD | architecture는 명확하지만 root test contract가 약하고 docs `1.8.0` / package `1.0.0` version drift가 있음 |
| `db-mcp` | HOLD | enterprise/high-performance/failover 표현을 구현 증거와 다시 대조해야 함 |
| `aiwright` | HOLD | scoring/adaptation 및 metric claim을 현재 구현과 재검증해야 함 |
| `StoreShoppingMall-PHP` | EXCLUDE | 현재 공개 내용이 소수 utility snippet이라 backend flagship narrative를 뒷받침하지 못함 |

Matrix: [`docs/github-portfolio/repository-candidate-matrix.md`](docs/github-portfolio/repository-candidate-matrix.md)

---

# Evidence Map

| Capability | Historical career evidence | Current public engineering evidence |
|---|---|---|
| Backend / domain reasoning | Commerce, MES | StackForge Atlas |
| State / data-flow analysis | commerce state investigation, MES workflow conditions | StackForge pilots |
| Reliability / failure thinking | batch/operational impact analysis | StackForge recovery drill |
| Legacy change safety | PHP business-system impact analysis | harness-kit configuration pipeline |
| External integration | commerce/logistics operations | contract/failure patterns in public references |
| AI-assisted engineering | supporting work method | Codex Workflow Skills, harness-kit |

이 표는 숙련도 점수가 아니라 **어떤 종류의 evidence가 어떤 질문에 답하는지**를 보여줍니다.

---

# Working Principles

```text
상태를 바꾸기 전에 영향 범위를 본다.
실패 경로를 정상 경로와 같이 본다.
운영 문제와 환경 문제를 분리한다.
기존 시스템은 rewrite보다 안전한 변화가 먼저일 수 있다.
AI가 만든 결과도 검증되지 않으면 evidence가 아니다.
```

---

# Public / Private Boundary

공개하지 않는 정보:

- private repository와 production source,
- 고객·주문·결제·배송·생산 데이터,
- internal endpoint / hostname / credential,
- raw production log와 screenshot,
- 공개 권한이 없는 내부 기술자료,
- source-confirm이 끝나지 않은 강한 ownership/metric claim.

공개 Case Study는 실제 문제를 **일반화한 설명**이며 production architecture dump가 아닙니다.

---

# Portfolio Strategy

현재 우선순위:

```text
P0    자소서 / 지원 텍스트
P1    Career Case Study + GitHub portfolio
P1.5  Public repo verification
P2    Web visual projection
P3    optional PDF
P4    Protected interview evidence
```

새 PHP/MySQL reference repository는 필수 작업이 아니라, 실제 채용공고나 피드백에서 public-code gap이 확인될 때만 다시 검토합니다.

- [`docs/portfolio-strategy/versions/PS-v1.2.0.md`](docs/portfolio-strategy/versions/PS-v1.2.0.md)
- [`docs/portfolio-strategy/CHANGELOG.md`](docs/portfolio-strategy/CHANGELOG.md)

웹사이트는 새로운 사실을 만드는 별도 포트폴리오가 아니라, 이 evidence를 더 빠르게 탐색하도록 시각화하는 후속 surface입니다.
