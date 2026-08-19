# Backend / Internal Tools / AX Portfolio

> `PS-v1.4.0` · **Case-study-first GitHub Portfolio** · 2026-08-19

## Backend Engineer | 업무시스템 · 내부도구 · AX/개발자동화

운영형 PHP/MySQL 업무시스템에서 **상태·권한·관리자·배치·외부 연동의 변경 영향**을 다뤄 왔고, 최근에는 반복되는 개발 문제를 **내부도구와 검증 가능한 AI-assisted workflow**로 구조화하고 있습니다.

이 페이지는 경력 연표를 다시 쓰는 이력서가 아닙니다. 아래 Case가 각각 **문제 → 판단 → 구현 → 검증 → 한계**를 보여줍니다.

[Case Study Index](docs/portfolio-ax/README.md) · [General Backend Portfolio](PORTFOLIO.md) · [Resume — facts only](content/resume/variants/ax-internal-tools-ko.md)

---

# 30-Second Portfolio Map

```mermaid
flowchart TD
    ME[Backend-centered Engineer] --> C1[Case 01<br/>Developer Internal Tooling]
    ME --> C2[Case 02<br/>Commerce Change Impact]
    ME --> C3[Case 03<br/>MES Requirement Modeling]
    ME --> C4[Case 04<br/>Practical AI Automation]

    C1 --> S1[Configuration-as-Code<br/>Validation / CI]
    C2 --> S2[State / Data Flow<br/>Blast Radius]
    C3 --> S3[Business Rules<br/>Operational Troubleshooting]
    C4 --> S4[Local LLM + Deterministic Code<br/>Human Validation]
```

| Case | 문제 | 핵심 판단 | 확인 가능한 증거 |
|---|---|---|---|
| **01. harness-kit** | 프로젝트별 AI 개발 설정의 중복과 drift | 모든 설정을 플랫폼화하지 않고 반복되는 경계만 typed module로 공통화 | public code + Node 22/24 security-gated CI |
| **02. Commerce / Logistics** | 화면 증상이 DB·관리자·batch·외부 API까지 연결 | 코드 수정 전 변경 blast radius부터 탐색 | sanitized career case + ready claim bank |
| **03. Manufacturing MES** | 모호한 현장 요구가 상태·조회·통계·권한 규칙을 숨김 | 요청 문구를 실제 업무순서와 system condition으로 분해 | sanitized career case + requirement model |
| **04. Practical AI Automation** | 다국어 번역·복사·코드입력 반복과 AI 품질 한계 | 자연어 번역만 local LLM, 파일 변환은 deterministic code, 최종 판단은 사람 | 실제 반복 사용된 local LLM i18n + public verification workflow |

---

# Case 01 — Developer Internal Tooling

## 반복 설정을 언제 도구로 바꿀 것인가?

```mermaid
flowchart LR
    B[복사되는 프로젝트 설정] --> D[중복 / Drift]
    D --> DEC{반복 변경이<br/>실제 비용인가?}
    DEC -->|No| DIRECT[직접 편집 유지]
    DEC -->|Yes| MOD[Typed Modules]
    MOD --> VAL[Validation]
    VAL --> GEN[Deterministic Generation]
    GEN --> CI[Audit / Test / Build / Smoke]
```

**Decision**  
프로젝트 수가 적고 변경이 드물면 직접 편집이 더 단순합니다. 공통 규칙 변경과 drift가 반복될 때만 module/configuration-as-code를 사용합니다.

**Proof**  
첫 functional CI가 green이었지만 dependency high-severity 항목을 발견해 포트폴리오 승격을 중지했습니다. remediation 후 `npm audit --audit-level=high`를 hard gate로 추가하고 Node.js 22/24에서 **audit → typecheck → 36 tests → build → CLI smoke**를 merged `main`에서 다시 통과시켰습니다.

**Evidence**  
[harness-kit](https://github.com/tomtomjskim/harness-kit) · [Validation PR](https://github.com/tomtomjskim/harness-kit/pull/1) · [Case Deep Dive](docs/portfolio-ax/cases/01-harness-kit-internal-tooling.md)

---

# Case 02 — Commerce / Logistics Change Impact

## 한 화면의 변경은 정말 한 화면에서 끝나는가?

```mermaid
flowchart LR
    R[Change Request] --> C[AS-IS Code]
    C --> DB[DB State]
    DB --> P[Permission]
    P --> A[Admin]
    A --> B[Batch / Cron]
    B --> X[External API]
    X --> S[Bounded Change Scope]
```

**Decision**  
증상이 보이는 UI부터 수정하지 않고, 이번 변경에 연결된 상태와 후속 처리의 범위를 먼저 찾습니다.

**Representative signal**  
외부 주문 등록에서 `upload → preview → confirm → batch completion/failure` 경계를 다룬 경험을 포함합니다. 세부 state model과 조사 흐름은 deep dive로 분리했습니다.

**Evidence**  
[Case Deep Dive](docs/portfolio-ax/cases/02-commerce-change-impact.md) · [Sanitized Career Source](content/projects/commerce-fulfillment-operations.md)

---

# Case 03 — MES Requirement Modeling

## “화면을 바꿔 주세요”를 무엇으로 번역할 것인가?

```mermaid
flowchart LR
    F[현장 요구] --> W[실제 작업순서]
    W --> I[입력 순서]
    I --> Q[조회 조건]
    Q --> S[상태 규칙]
    S --> R[통계 / Report]
    R --> P[권한]
    P --> B[Screen + DB Scope]
```

**Decision**  
화면 요청을 UI task로만 보지 않고, 실제 작업순서와 상태·조회·권한·집계 규칙으로 분해합니다.

**Representative signal**  
application/data 문제와 permission·network·printer/device·operator environment 문제를 분리하는 troubleshooting도 같은 Case에 포함합니다. 상세 triage model은 deep dive에서 확인할 수 있습니다.

**Evidence**  
[Case Deep Dive](docs/portfolio-ax/cases/03-mes-requirement-modeling.md) · [Sanitized Career Source](content/projects/manufacturing-mes-business-systems.md)

---

# Case 04 — Practical AI Automation

## AI를 쓸 수 있다고 전부 AI에 맡겨야 하는가?

```mermaid
flowchart LR
    K[한국어 key/value] --> PY[Internal Python Server]
    PY --> L[Ollama / Gemma 3]
    L --> TR[EN / JA / ZH Draft]
    TR --> CV[Deterministic Converter]
    CV --> PHP[PHP / JSON Language Pack]
    PHP --> H[Human Validation]
```

**Decision**  
자연어 번역처럼 규칙만으로 처리하기 어려운 구간만 local LLM에 맡기고, key/value 구조·PHP 파일 생성·JSON 변환처럼 입력과 출력이 명확한 부분은 일반 프로그램으로 분리했습니다. GPU가 없는 내부 PC와 소형 모델의 품질 한계를 전제로 최종 검수는 사람이 유지했습니다.

**Practical result**  
프론트 개발자가 실제 언어팩 업무에 반복 사용했고, 언어별 번역기를 열어 결과를 복사하고 코드에 다시 입력하는 작업을 줄였습니다. 다만 생산성 향상률·번역 정확도·비용 절감률은 측정하지 않았으므로 수치 성과로 주장하지 않습니다.

**Verification principle**

```text
Model response != Completion evidence
```

같은 원칙을 coding Agent에도 적용해 pass, failure, skip, `not_run`을 분리하고 static/test/CI/review/human acceptance를 완료 판단 근거로 둡니다.

**Evidence**  
[Case Deep Dive](docs/portfolio-ax/cases/04-ai-assisted-verification.md) · [Local LLM i18n](content/projects/local-llm-i18n-workflow.md) · [Codex Workflow Skills](https://github.com/tomtomjskim/codex-workflow-skills) · [StackForge Atlas](https://github.com/tomtomjskim/stackforge-atlas)

---

# What Connects the Four Cases

```mermaid
flowchart LR
    O[Observe real workflow] --> B[Find boundary]
    B --> D[Choose smallest useful change]
    D --> I[Implement]
    I --> V[Verify evidence]
    V --> F{Failure / Limit?}
    F -->|Yes| R[Revise contract / scope]
    R --> I
    F -->|No| H[Human acceptance / operational use]
```

공통적으로 보여주는 역량은 특정 framework 이름보다 다음입니다.

- **업무와 상태를 먼저 이해**하고,
- 변경 경계를 명확히 만들고,
- 과한 abstraction은 피하며,
- AI와 일반 코드를 문제 특성에 맞게 분리하고,
- 실제 실행 증거로 검증하며,
- 증명하지 못한 범위는 한계로 남기는 것.

---

# Public Repository Index

| Repository | 열어볼 이유 | Verification | 명시적 한계 |
|---|---|---|---|
| [harness-kit](https://github.com/tomtomjskim/harness-kit) | developer internal tooling, typed config, deterministic generation | Node 22/24 audit + typecheck + 36 tests + build + CLI smoke | production adoption / productivity claim 없음 |
| [codex-workflow-skills](https://github.com/tomtomjskim/codex-workflow-skills) | intake/review/validation/failure accounting contract | public forward-test + GitHub Actions | external/live path 일부 `not_run`/skip |
| [stackforge-atlas](https://github.com/tomtomjskim/stackforge-atlas) | intent→interface→evidence→recovery 연결 | Node/PostgreSQL pilots + recovery drill + CI | PITR/HA/failover proof 아님 |

Repository는 기술 로고를 보여주기 위한 링크가 아니라 **각 Case의 판단·구현·검증을 직접 확인하는 Evidence**입니다.

---

# Evidence Boundary

이 포트폴리오는 다음을 의도적으로 주장하지 않습니다.

- `AI Engineer / ML Engineer` 경력
- company-wide AX platform ownership
- production RAG / inference serving
- frontend-specialist depth
- 측정하지 않은 생산성·매출·성능 개선률
- 공개할 수 없는 고객·주문·생산·결제 데이터 또는 production architecture

Public career cases는 비식별화한 문제 해결 모델이고, 공개 R&D repository는 현재 engineering capability의 증거입니다. 두 종류를 서로 바꿔 말하지 않습니다.

---

# Read Next

1. **Internal Tools:** 이 페이지 → [Case 01](docs/portfolio-ax/cases/01-harness-kit-internal-tooling.md)
2. **Practical AX / AI Automation:** [Case 04](docs/portfolio-ax/cases/04-ai-assisted-verification.md) → [Local LLM i18n](content/projects/local-llm-i18n-workflow.md)
3. **Backend / Operations:** [General Backend Portfolio](PORTFOLIO.md) → [Case 02](docs/portfolio-ax/cases/02-commerce-change-impact.md) → [Case 03](docs/portfolio-ax/cases/03-mes-requirement-modeling.md)
4. **Version comparison:** [PS-v1.3.0 text-heavy baseline](docs/portfolio-ax/versions/PS-v1.3.0-text-heavy-baseline.md) → current `PS-v1.4.0`

**Resume는 경력과 사실을 요약하고, 이 포트폴리오는 그 사실 뒤의 문제 해결 방식을 증명합니다.**
