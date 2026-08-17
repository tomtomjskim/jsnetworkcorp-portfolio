# Backend Engineering Portfolio

> Strategy `PS-v1.2.0` · public-sanitized draft · 2026-08-17

PHP/MySQL 기반의 제조 MES와 커머스·물류 업무시스템을 개발·유지보수해 온 백엔드 개발자입니다.

기능 변경 전 **AS-IS 코드와 DB 구조, 상태값, 권한, 관리자 화면, batch/cron, 외부 API의 영향을 확인해 변경 범위를 산정하는 운영형 개발 방식**을 사용합니다.

최근 공개 프로젝트에서는 같은 방향을 architecture contract, failure path, tests, CI, adversarial review 형태로 더 명시적으로 실험하고 있습니다.

이 포트폴리오는 두 종류의 evidence를 분리합니다.

```text
Career Case Study
= 실제 경력에서 확인된 도메인·업무 방식

Public Engineering Repository
= 현재 공개적으로 확인 가능한 설계·구현·검증 방식
```

공개 GitHub 프로젝트를 이전 회사의 proprietary production source처럼 표현하지 않습니다.

---

## 30-Second Profile

- **Backend / Business Systems:** PHP, MySQL 기반 운영 시스템의 기능 개선과 유지보수
- **Domains:** 제조 MES, 커머스, 물류·배송, 외부 시스템 연동
- **Ready Problem-Solving Signal:** AS-IS 코드·DB 상태·권한·관리자·batch/cron·외부 API를 포함한 변경 영향 분석
- **Current Engineering Evidence:** failure/recovery, tests, CI, agent-assisted review를 공개 repository로 검증

자소서·지원서용 문장:

- current candidate: [`docs/application-text/claim-blocks-v2-candidate.md`](docs/application-text/claim-blocks-v2-candidate.md)
- previous baseline: [`docs/application-text/claim-blocks-v1.md`](docs/application-text/claim-blocks-v1.md)
- claim authority: [`docs/resume-data/public-claim-bank.md`](docs/resume-data/public-claim-bank.md)

---

# Career Case Studies

Career cases use two layers:

```text
READY
= current public claim bank permits submission-safe use

DEEP-DIVE CANDIDATE
= protected supporting evidence exists, but exact historical example/role still needs source-confirm
```

## 1. Commerce & Fulfillment Operations

### Ready Evidence

- PHP 기반 셀러형 커머스/물류 운영 시스템에서 상품, 입고, 재고, 외부출고, 대시보드 관련 기능 개선에 참여
- 외부 주문 등록 흐름에서 upload / preview / confirm 단계와 batch 처리 경계를 다룬 경험
- 기능 변경 전 AS-IS 코드, DB 구조/상태, 권한, 관리자 화면, batch/cron, 외부 API 영향을 확인해 변경 범위를 산정

### Ready Working Model

```text
change request
→ existing code
→ database structure / state
→ permission
→ administrator surface
→ batch / cron
→ external API
→ modification scope
```

이 방식 자체는 `CL-PUB-011 ready`입니다. 특정 프로젝트에서 모든 경계를 직접 소유했다는 의미는 아닙니다.

### Deep-Dive Candidate

Protected supporting material includes a more specific state-mismatch investigation narrative:

```text
symptom
→ related state
→ administrator processing
→ display condition
→ batch / external boundary
→ downstream effect
```

이 구체 사례는 source-confirm 전까지 제출용 역사 사실로 승격하지 않습니다.

canonical model, idempotency, signed API, PII/security policy, reconciliation ownership도 현재 role-confirm입니다.

**Deep dive:** [`content/projects/commerce-fulfillment-operations.md`](content/projects/commerce-fulfillment-operations.md)

---

## 2. Manufacturing MES & Business Systems

### Ready Evidence

- PHP 기반 MES 및 업무시스템 개발·유지보수
- 제조 생산관리 도메인을 다룬 경험
- 확인된 변경 영향 분석 방식(`CL-PUB-011`)을 업무시스템 변경에 적용하는 포지셔닝

### Deep-Dive Candidate

Protected supporting material includes a more detailed requirement-decomposition model:

```text
field request
→ actual work sequence
→ input order
→ query condition
→ state
→ statistics / reporting
→ permission
→ screen + DB scope
```

또한 애플리케이션/데이터 문제와 PC·네트워크·프린터·계정/권한 등 환경 계층을 구분하는 지원 경험이 후보 evidence로 남아 있습니다.

### Selective / Source-Confirm

- legacy PHP 구조의 점진적 모듈/가독성 개선
- 상세 현장 요구사항 분해 사례
- 도입·교육·원격지원 chronology
- 고객사 수와 개발 리드 범위

이 항목들은 claim/source가 승격되기 전까지 제출 headline으로 사용하지 않습니다.

**Deep dive:** [`content/projects/manufacturing-mes-business-systems.md`](content/projects/manufacturing-mes-business-systems.md)

---

## Supporting Career Signal — AI-Assisted Engineering

AI 사용량 자체를 경력의 중심으로 두지 않습니다.

요구사항 정리, 코드/SQL 검토, 테스트와 문서화 보조에 LLM을 활용하되 실제 코드, 데이터 구조와 검증 결과를 기준으로 다시 판단하는 방식으로 사용합니다.

**Case:** [`content/projects/ai-assisted-development-workflow.md`](content/projects/ai-assisted-development-workflow.md)

---

# Selected Public Engineering Repositories

아래는 회사 경력과 별개의 **공개 engineering artifacts**입니다. Repository promotion is evidence-ranked, not technology-name-ranked.

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
- PITR, host loss, replication, failover 등 아직 증명하지 않은 범위를 명시

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
- abstraction이 불필요한 조건과 npm 미배포 상태를 README에 명시

**Current gate**  
최종 제출 전 현재 HEAD의 `npm ci → lint → test → build`를 재현해 상태를 고정해야 합니다. 과거 coverage 수치는 재검증 전 사용하지 않습니다.

**Repository:** https://github.com/tomtomjskim/harness-kit

---

## 3. Codex Workflow Skills — TARGET-DEPENDENT

**Problem**  
복잡한 agent 작업은 scope drift, 약한 검증, stale context와 review 누락으로 실패할 수 있습니다.

**Evidence**

- intake / bounded council / adversarial review / session closeout workflow contracts
- 공개 forward-test report가 failure와 `not_run`을 pass로 승격하지 않음
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
| Change-impact analysis | `CL-PUB-011 ready` | StackForge contract/evidence model |
| State / data-flow deep dive | specific historical examples source-confirm | StackForge pilots |
| Reliability / failure thinking | batch boundary ready; deeper historical cases gated | StackForge recovery drill |
| Legacy change safety | MES legacy improvement selective | harness-kit configuration pipeline |
| External integration | commerce/logistics domain experience | public reference contracts/failure patterns |
| AI-assisted engineering | supporting work method | Codex Workflow Skills, harness-kit |

이 표는 숙련도 점수가 아니라 **어떤 evidence가 어떤 질문에 답하는지**를 보여줍니다.

---

# Working Principles

Ready career positioning:

```text
변경하기 전에 기존 코드와 데이터/운영 영향 범위를 확인한다.
```

Broader principles such as explicit failure-path review, environment-layer troubleshooting, and incremental legacy improvement are kept in the relevant evidence status rather than generalized into universal historical claims.

Public engineering repositories can separately demonstrate stronger current validation practices such as tests, CI, recovery drills, and adversarial review.

---

# Public / Private Boundary

공개하지 않는 정보:

- private repository와 production source,
- 고객·주문·결제·배송·생산 데이터,
- internal endpoint / hostname / credential,
- raw production log와 screenshot,
- 공개 권한이 없는 내부 기술자료,
- source-confirm이 끝나지 않은 강한 ownership/metric claim.

공개 Case Study는 실제 문제를 일반화한 설명이며 production architecture dump가 아닙니다.

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
- [`docs/reviews/ps-v1.2-career-case-adversarial-review.md`](docs/reviews/ps-v1.2-career-case-adversarial-review.md)

웹사이트는 새로운 사실을 만드는 별도 포트폴리오가 아니라, 이 evidence를 더 빠르게 탐색하도록 시각화하는 후속 surface입니다.
