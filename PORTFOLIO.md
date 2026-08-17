# Backend Engineering Portfolio

> Strategy `PS-v1.1.0` · public-sanitized draft · 2026-08-17

PHP 기반 제조 MES와 셀러형 이커머스·물류 운영 시스템 경험을 가진 백엔드 개발자입니다.

업무시스템에서 제조 생산관리, 커머스 운영, 외부 주문, 입고·재고와 출고 흐름을 다뤄 왔습니다. 최근에는 LLM/agent를 단순 코드 생성 도구가 아니라 **명시적 제약 → 구현/분석 → 검증 → 적대적 리뷰 → 지식화** 파이프라인으로 다루는 개발 도구와 가이드를 공개 프로젝트로 실험하고 있습니다.

이 문서는 공개 가능한 **경력 사례**와 **공개 GitHub engineering artifact**를 분리해 보여줍니다. 공개 reference repository는 현재 engineering capability를 보여주는 증거일 수 있지만, 이전 회사의 proprietary production source로 표현하지 않습니다.

실제 운영 시스템의 private repository, 고객/주문 데이터, production endpoint, 내부 로그 및 민감한 증빙은 공개하지 않습니다.

---

## Fast Reading Path

```text
1. Career Case Studies
   → 어떤 업무 문제를 다뤘는가

2. Selected Public Engineering Repositories
   → 현재 어떤 방식으로 설계·구현·검증하는가

3. Individual Repository
   → architecture / tests / source / limitations
```

Recruiter-facing application text is maintained separately as concise P0 claim blocks:

- [`docs/application-text/claim-blocks-v1.md`](docs/application-text/claim-blocks-v1.md)

---

# Career Case Studies

## Commerce & Fulfillment Operations

**문제 영역**  
상품·입고·재고·외부 주문·출고·Fulfillment가 여러 흐름으로 나뉘는 운영 시스템에서는 중복 처리, 불명확한 상태, 외부 연동 실패가 운영 리스크로 이어집니다.

**현재 public-ready 범위**

- 상품, 입고, 재고, 외부출고, 대시보드 관련 기능 개선 참여
- 파일 기반 외부 주문 흐름에서 upload / preview / confirm 단계 구분
- batch 처리에서 all-or-nothing semantics를 다룬 경험

canonical model, idempotency, signed API, reconciliation 등의 더 강한 개인 역할 표현은 현재 claim bank의 role-confirm gate를 통과하기 전까지 제출 문구로 승격하지 않습니다.

**Case study**  
[`content/projects/commerce-fulfillment-operations.md`](content/projects/commerce-fulfillment-operations.md)

---

## Manufacturing MES & Business Systems

PHP 기반 제조 MES 및 업무시스템에서 개발·유지보수와 생산관리 도메인의 기능 변경, 오류 수정, 데이터 처리 요청을 다룬 경험을 공개 가능한 범위에서 구조화합니다.

운영 중인 업무시스템에서는 새 기능만큼 기존 흐름을 깨지 않는 변경, 영향 범위 확인과 점진적 구조 개선을 중요하게 봅니다.

**Case study**  
[`content/projects/manufacturing-mes-business-systems.md`](content/projects/manufacturing-mes-business-systems.md)

---

## AI-Assisted Development Workflow

AI 사용량 자체보다 작업 범위, 검증, 리뷰, 증거와 지식 보존을 어떻게 통제하는지를 포트폴리오 신호로 사용합니다.

**Case study**  
[`content/projects/ai-assisted-development-workflow.md`](content/projects/ai-assisted-development-workflow.md)

---

# Selected Public Engineering Repositories

아래 프로젝트는 **공개 R&D / engineering artifact**입니다. 위 production career experience와 동일한 것으로 표현하지 않습니다.

Repository selection is evidence-ranked. Detailed audit:

- [`docs/github-portfolio/featured-repo-audit-2026-08-17.md`](docs/github-portfolio/featured-repo-audit-2026-08-17.md)

## 1. StackForge Atlas — PRIMARY

**Problem**  
LLM agent와 자동화가 화면, API, migration과 test를 빠르게 생성할수록 제품 의도와 구현·검증·운영 지식 사이의 연결이 끊기기 쉽습니다.

**Approach**  
문제와 outcome에서 user flow, interface contract, implementation, verification evidence와 recovery/maintenance knowledge까지 하나의 추적 가능한 slice로 연결합니다.

**Why open this repository**

- `intent → interface → evidence → evolution`을 engineering chain으로 모델링
- runnable Node pilot과 PostgreSQL durability pilot
- operational recovery drill과 GitHub Actions validation
- 검증된 범위와 아직 증명하지 않은 PITR/host loss/failover 범위를 명시적으로 분리

**Limitation**  
Reference/pilot evidence이며 production scale, HA, PITR, provider failover를 증명하는 프로젝트로 표현하지 않습니다.

**Repository**  
https://github.com/tomtomjskim/stackforge-atlas

---

## 2. harness-kit — FEATURED, validation pending

**Problem**  
여러 프로젝트에서 CLAUDE.md, hooks, MCP, permissions, agents와 workflow 설정을 직접 복사하면 규칙 중복과 configuration drift가 발생합니다.

**Approach**  
instruction뿐 아니라 programmable agent configuration을 module로 관리하고 resolver → loader → validator → merger → renderer → writer pipeline으로 다시 빌드합니다.

**Why open this repository**

- typed configuration/module boundary
- Zod validation과 deterministic rendering/merge structure
- Vitest unit-test structure
- 프로젝트 수가 적을 때의 과잉설계 가능성과 npm 미배포 등 한계를 README에 명시

**Current limitation**  
최종 제출 전 현재 HEAD에서 lint/test/build를 재실행해 결과를 고정해야 합니다. 과거 changelog의 coverage 수치는 재현 전까지 포트폴리오 claim으로 사용하지 않습니다.

**Repository**  
https://github.com/tomtomjskim/harness-kit

---

## 3. Codex Workflow Skills — target-dependent FEATURED

**Problem**  
복잡한 agent 작업은 코딩 능력보다 scope drift, 약한 검증, stale context와 review 누락 때문에 실패할 수 있습니다.

**Approach**  
intake, bounded council, adversarial review, session knowledge closeout와 resume multi-review를 독립 skill로 분리하고 검증/승인 경계를 명시합니다.

**Verification**  
공개 2026-08-05 forward-test report는 repository-owned validation에서 881 tests 중 879 pass와 외부 환경 의존 2 skip을 기록하고, paid/live model path는 실행되지 않았음을 별도로 명시합니다.

**Portfolio use**

- AI-native backend / platform: FEATURED
- 일반 backend: SUPPORTING

최근 AI tooling이 장기 backend career identity를 덮지 않도록 target role에 따라 순서를 조정합니다.

**Repository**  
https://github.com/tomtomjskim/codex-workflow-skills

---

# Repositories Under Review / Hold

| Repository | Status | 이유 |
|---|---|---|
| `agent-orchestra-monitor` | HOLD as featured | read-only observer architecture는 좋지만 명확한 test entry point가 부족하고 docs/changelog `1.8.0`과 root package `1.0.0` 버전 정합성 문제가 있음 |
| `db-mcp` | HOLD | enterprise/high-performance/failover 등의 README 표현을 실제 구현 증거와 다시 검증할 필요가 있음 |
| `aiwright` | HOLD | problem/architecture는 좋지만 scoring/adaptation 및 metric claim을 현재 구현과 재검증해야 함 |
| `StoreShoppingMall-PHP` | EXCLUDE in current form | PHP 방향은 맞지만 현재 공개 내용이 소수 utility snippet 수준이라 flagship backend project narrative를 지원하지 못함 |

Repository matrix:

- [`docs/github-portfolio/repository-candidate-matrix.md`](docs/github-portfolio/repository-candidate-matrix.md)

---

# Backend Public-Evidence Gap

현재 공개 GitHub는 최근 engineering methodology/AI tooling을 장기 PHP/business-system 경력보다 더 잘 보여줍니다.

이 공백을 낡은 snippet repository에 과도한 설명을 붙여 해결하지 않습니다.

대신 다음 public-safe reference implementation을 설계합니다.

```text
php-commerce-ops-reference

batch order intake
upload → parse → preview → confirm → transactional persist

external dispatch
ready → request → accepted/rejected/unknown → reconcile
```

목표는 generic shopping-mall CRUD가 아니라 transaction boundary, state transition, duplicate effect prevention, external failure와 reconciliation을 코드·테스트·CI로 보여주는 것입니다.

이 reference implementation은 proprietary production source가 아니며 과거 production ownership을 증명하는 자료로 사용하지 않습니다.

Design:

- [`docs/github-portfolio/backend-evidence-gap-plan.md`](docs/github-portfolio/backend-evidence-gap-plan.md)

---

# Engineering Capability Map

| Capability | Career evidence | Public engineering artifact |
|---|---|---|
| Backend / domain engineering | Commerce & Fulfillment, MES | StackForge Atlas; future PHP reference |
| Database / state boundary | order/batch operational cases | StackForge PostgreSQL pilots; future PHP reference |
| Reliability / operations | batch semantics, operational maintenance | StackForge recovery drill |
| Security / safety boundary | public-safe integration/PII boundary | harness-kit safety modules, workflow review gates |
| External integration | commerce / fulfillment experience | future PHP reference fake gateway/contract |
| AI-assisted engineering | AI-assisted workflow case | Codex Workflow Skills, harness-kit |

이 표는 숙련도 점수가 아니라 **어떤 주장을 어디에서 더 확인할 수 있는지**를 보여주는 evidence index입니다.

---

# Problem-Solving & Verification Pipeline

```text
Problem / Signal
→ Constraints
→ Investigation
→ Alternatives / Decision
→ Implementation
→ Test / Verification Evidence
→ Adversarial Review
→ Operational Feedback
→ Retained Knowledge
```

AI-assisted work도 별도의 면책 수단으로 취급하지 않습니다.

```text
Human intent + constraints
→ agent analysis / implementation
→ test · static check · evidence
→ adversarial review
→ human acceptance
→ documented decision / learning
```

목표는 AI 사용량이 아니라 **빠른 생성 속도에서도 검증 가능성과 책임 경계를 유지하는 방법**을 보여주는 것입니다.

---

# Portfolio Architecture

현재 포트폴리오 우선순위:

```text
P0  자소서 / 지원 텍스트
P1  GitHub portfolio
P2  Web portfolio
P3  optional PDF
P4  Protected interview deep dive
```

전략 버전과 변경 이력:

- [`docs/portfolio-strategy/README.md`](docs/portfolio-strategy/README.md)
- [`docs/portfolio-strategy/CHANGELOG.md`](docs/portfolio-strategy/CHANGELOG.md)
- [`docs/portfolio-strategy/versions/PS-v1.1.0.md`](docs/portfolio-strategy/versions/PS-v1.1.0.md)

웹사이트는 GitHub보다 많은 사실을 만드는 별도 포트폴리오가 아니라, 동일 evidence를 더 빠르게 탐색하도록 시각화하는 후속 surface로 둡니다.
