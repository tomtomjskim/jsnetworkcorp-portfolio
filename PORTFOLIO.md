# Backend Engineering Portfolio

> Strategy `PS-v1.0.0` · public-sanitized draft · 2026-08-17

PHP 기반 제조 MES와 셀러형 이커머스/물류 운영 시스템 경험을 가진 백엔드 개발자입니다.

PHP/Laravel/MySQL 기반 업무시스템에서 제조 MES, 커머스 운영, 외부 주문, 입고·재고, 출고 및 Fulfillment 연동 도메인을 다뤄 왔습니다. 최근에는 LLM/agent를 단순 코드 생성 도구가 아니라 **명시적 제약 → 구현/분석 → 검증 → 적대적 리뷰 → 지식화** 파이프라인으로 다루는 개발 도구와 가이드를 공개 프로젝트로 실험하고 있습니다.

이 문서는 공개 가능한 경력 사례와 공개 GitHub 연구/도구를 분리해 보여줍니다. 실제 운영 시스템의 private repository, 고객/주문 데이터, production endpoint, 내부 로그 및 민감한 증빙은 공개하지 않습니다.

---

## Career Case Studies

### Commerce & Fulfillment Operations

**문제 영역**  
상품·입고·재고·외부 주문·출고·Fulfillment가 여러 흐름으로 나뉘는 운영 시스템에서는 중복 처리, 불명확한 상태, 외부 연동 실패가 운영 리스크로 이어집니다.

**다룬 관점**

- 파일 기반 주문 흐름의 preview / confirm 분리
- batch 처리에서 all-or-nothing semantics
- canonical order model과 중복 처리 안정성
- signed API, masked payload, fail-closed boundary
- 내부 dispatch log와 외부 projection의 read-only verification

**Case study**  
[`content/projects/commerce-fulfillment-operations.md`](content/projects/commerce-fulfillment-operations.md)

### Manufacturing MES & Business Systems

제조·업무 시스템에서 PHP/MySQL 기반 기능 개발·유지보수와 운영 지원 경험을 공개 가능한 범위에서 구조화합니다.

**Case study**  
[`content/projects/manufacturing-mes-business-systems.md`](content/projects/manufacturing-mes-business-systems.md)

### AI-Assisted Development Workflow

AI 사용 자체보다 작업 범위, 검증, 리뷰, 증거와 지식 보존을 어떻게 통제하는지를 포트폴리오 신호로 사용합니다.

**Case study**  
[`content/projects/ai-assisted-development-workflow.md`](content/projects/ai-assisted-development-workflow.md)

---

# Selected Public Engineering Repositories

아래 프로젝트는 **공개 R&D / engineering artifact**입니다. 위의 production career experience와 동일한 것으로 표현하지 않습니다.

## 1. StackForge Atlas — intent에서 recovery evidence까지 연결하는 software engineering field guide

**Problem**  
LLM agent가 화면, API, migration, test를 빠르게 생성할수록 제품 의도와 구현·검증·운영 지식 사이의 연결이 끊기기 쉽습니다.

**Approach**  
문제와 outcome에서 user flow, screen/backend contract, implementation, verification evidence, recovery/maintenance knowledge까지 하나의 추적 가능한 slice로 연결합니다.

**Why open this repository**

- `intent → interface → evidence → evolution`을 명시적인 engineering chain으로 모델링
- 주문 취소 PostgreSQL pilot과 operational recovery drill을 통해 happy path보다 failure/recovery를 검증 대상으로 둠
- 검증된 범위와 아직 증명하지 않은 PITR/host loss/failover 등을 README에서 명시적으로 분리

**Repository**  
https://github.com/tomtomjskim/stackforge-atlas

---

## 2. harness-kit — Claude Code configuration as code

**Problem**  
여러 프로젝트에서 CLAUDE.md, hooks, MCP, permissions, agents, workflow 설정을 직접 복사하면 규칙 중복과 configuration drift가 발생합니다.

**Approach**  
instruction뿐 아니라 hooks, MCP, permissions, agents, workflows, skills를 module로 관리하고 설정에서 다시 빌드하도록 구성합니다.

**Why open this repository**

- LLM instruction 파일만이 아니라 실제 programmable agent configuration 전체를 모듈화
- resolver → loader → validator → merger → renderer → atomic writer 형태의 build pipeline 제공
- 프로젝트 수가 적을 때의 과잉설계 가능성, 학습비용, npm 미배포 등 한계를 README에 함께 명시

**Repository**  
https://github.com/tomtomjskim/harness-kit

---

## 3. Agent Orchestra Monitor — read-only multi-agent observability

**Problem**  
여러 Claude Code agent가 동시에 실행될 때 작업 상태와 세션 관계를 터미널만으로 파악하기 어렵습니다.

**Approach**  
agent task output을 외부에서 읽는 passive observer로 두고 SSE dashboard, session filtering, workflow DAG, activity/history view를 구성합니다.

**Why open this repository**

- agent 실행기를 수정하지 않는 read-only observation boundary
- File Watcher / Express API / SSE / React dashboard 역할을 분리한 구조
- README가 MCP/orchestrator와 monitor의 책임 차이를 명확히 설명

**Repository**  
https://github.com/tomtomjskim/agent-orchestra-monitor

---

## 4. Codex Workflow Skills — bounded agent workflow and adversarial review

**Problem**  
복잡한 agent 작업은 코딩 능력보다 scope drift, 약한 검증, stale context, review 누락 때문에 실패할 수 있습니다.

**Approach**  
intake, bounded council, adversarial review, session knowledge closeout, resume multi-review를 독립 skill로 분리하고 검증/승인 경계를 명시합니다.

**Why open this repository**

- 구현 전에 scope와 artifact/validation policy를 결정하는 intake
- 독립 reviewer와 finding disposition을 사용하는 adversarial review loop
- 완료된 세션에서 검증된 지식만 남기도록 하는 closeout pipeline

**Repository**  
https://github.com/tomtomjskim/codex-workflow-skills

---

## Repository Candidates Under Review

다음 저장소는 공개되어 있지만 현재 대표 포트폴리오로 바로 사용하지 않습니다.

| Repository | Status | 이유 |
|---|---|---|
| `db-mcp` | claim audit 필요 | 안전 경계 자체는 유효하지만 README의 enterprise/high-performance/failover 등 표현을 실제 구현 증거와 재검증할 필요가 있음 |
| `aiwright` | implementation/metric audit 필요 | 문제 정의와 architecture는 좋지만 scoring/adaptation 관련 claim과 metric 검증 필요 |
| `StoreShoppingMall-PHP` | README 재구성 필요 | PHP/MySQL 경력 방향과 맞지만 현재 README만으로 문제 해결 과정과 구현 깊이를 평가하기 어려움 |

Repository selection review: [`docs/github-portfolio/repository-candidate-matrix.md`](docs/github-portfolio/repository-candidate-matrix.md)

---

# Engineering Capability Map

| Capability | Career case | Public engineering artifact |
|---|---|---|
| Backend / domain engineering | Commerce & Fulfillment, MES | StackForge Atlas pilots |
| Database / data boundary | order normalization, sync verification | StackForge Atlas, `db-mcp` after audit |
| Reliability / operations | batch semantics, fail-closed/read-only verification | StackForge recovery drill, Agent Orchestra Monitor |
| Security / safety boundary | masked payload, signed integration, PII boundary | harness-kit safety modules, workflow review gates |
| External integration | commerce / fulfillment integrations | StackForge interface contracts |
| AI-assisted engineering | AI-assisted workflow case | harness-kit, Codex Workflow Skills, Agent Orchestra Monitor |

이 표는 숙련도 점수가 아니라 **어떤 주장을 어디에서 더 확인할 수 있는지**를 보여주는 인덱스입니다.

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

목표는 AI 사용량을 보여주는 것이 아니라 **빠른 생성 속도에서도 검증 가능성과 책임 경계를 유지하는 방법**을 보여주는 것입니다.

---

# Portfolio Architecture

현재 포트폴리오 전략은 다음 우선순위를 사용합니다.

```text
1. 자소서 / 지원 텍스트
2. GitHub portfolio
3. Web portfolio
4. PDF visual supplement
5. Protected interview deep dive
```

전략 버전과 변경 이력:

- [`docs/portfolio-strategy/README.md`](docs/portfolio-strategy/README.md)
- [`docs/portfolio-strategy/CHANGELOG.md`](docs/portfolio-strategy/CHANGELOG.md)

웹사이트는 GitHub보다 많은 내용을 만드는 별도 포트폴리오가 아니라, 동일한 evidence를 더 빠르게 탐색하도록 시각화하는 후속 surface로 둡니다.
