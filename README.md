# JSNetworkCorp Portfolio

**Career facts, technical case studies, and public engineering evidence — kept separate on purpose.**

이 repository는 경력 내용을 한 문서에 길게 쌓는 곳이 아니라, 채용 과정의 서로 다른 질문에 서로 다른 surface로 답하기 위한 public-safe portfolio입니다.

## Start Here

### General Backend / Business Systems

> **[`PORTFOLIO.md`](PORTFOLIO.md)**

### Internal Tools / AX / Development Automation

> **[`PORTFOLIO-AX.md`](PORTFOLIO-AX.md)**

`PORTFOLIO-AX.md`는 `PS-v1.4.0`부터 **visual case-study index**로 동작합니다.

---

## Resume ≠ Application ≠ Portfolio

| Artifact | 답해야 하는 질문 | 이 repository에서의 역할 |
|---|---|---|
| **Resume** | 언제, 어디서, 어떤 역할과 기술로 일했는가? | 짧은 사실·경력 projection |
| **Application / Self-introduction** | 왜 이 포지션과 맞는가? | target requirement와 evidence 연결 |
| **Portfolio** | 실제 문제를 어떻게 분석·판단·구현·검증하는가? | Case Study + diagram + evidence |

포트폴리오가 chronology와 기술목록 중심으로 변하면 실패로 판단합니다.

---

# Current Portfolio Strategy — `PS-v1.4.0`

AX/Internal Tools portfolio는 네 Case를 중심으로 구성합니다.

```text
Case 01  harness-kit
         Developer Internal Tooling

Case 02  Commerce / Logistics
         State-heavy Change Impact

Case 03  Manufacturing MES
         Field Request → System Rules

Case 04  Practical AI Automation
         Local LLM + Deterministic Code + Human Validation
```

Case 04는 추상적인 `AI를 잘 활용한다`는 설명보다 실제 반복 업무를 먼저 보여줍니다.

```text
다국어 번역·복사·코드입력 반복
→ Local LLM이 자연어 번역 초안 담당
→ 일반 프로그램이 PHP/JSON 변환 담당
→ 사람이 소형 모델 결과를 검수
→ 실제 frontend 언어팩 작업에서 반복 사용
```

생산성 %, 번역 정확도 %, 비용 절감률은 측정하지 않았으므로 주장하지 않습니다.

Deep dives:

- [`docs/portfolio-ax/cases/01-harness-kit-internal-tooling.md`](docs/portfolio-ax/cases/01-harness-kit-internal-tooling.md)
- [`docs/portfolio-ax/cases/02-commerce-change-impact.md`](docs/portfolio-ax/cases/02-commerce-change-impact.md)
- [`docs/portfolio-ax/cases/03-mes-requirement-modeling.md`](docs/portfolio-ax/cases/03-mes-requirement-modeling.md)
- [`docs/portfolio-ax/cases/04-ai-assisted-verification.md`](docs/portfolio-ax/cases/04-ai-assisted-verification.md)

Each case follows:

```text
Problem
→ Constraints
→ Investigation / Model
→ Decision
→ Implementation
→ Verification
→ Limitation
→ Evidence
```

GitHub-native Mermaid diagrams are used for architecture, state, decision and verification flows where they improve comprehension.

---

# Evidence Model

## 1. Sanitized Career / Work Cases

실제 장기 경력 또는 실제 업무에서 확인된 문제·해결 방식입니다.

- [`content/projects/commerce-fulfillment-operations.md`](content/projects/commerce-fulfillment-operations.md)
- [`content/projects/manufacturing-mes-business-systems.md`](content/projects/manufacturing-mes-business-systems.md)
- [`content/projects/local-llm-i18n-workflow.md`](content/projects/local-llm-i18n-workflow.md)
- [`content/projects/ai-assisted-development-workflow.md`](content/projects/ai-assisted-development-workflow.md)

실제 production code/data를 공개하지 않고 문제·제약·판단 모델만 비식별화합니다.

## 2. Public Engineering Repositories

현재 engineering capability와 verification discipline을 직접 검토할 수 있는 공개 artifact입니다.

- [`harness-kit`](https://github.com/tomtomjskim/harness-kit)
- [`codex-workflow-skills`](https://github.com/tomtomjskim/codex-workflow-skills)
- [`stackforge-atlas`](https://github.com/tomtomjskim/stackforge-atlas)

Public R&D를 이전 회사 production work로 표현하지 않습니다.

### Target-specific ordering

General backend:

```text
Career cases
→ StackForge Atlas
→ target-dependent tooling
```

Internal Tools / AX:

```text
harness-kit
→ Local LLM practical automation
→ Commerce / MES operating judgment
→ Codex Workflow Skills / StackForge as verification evidence
```

순서는 기술 우열이 아니라 채용 포지션에서 어떤 질문에 먼저 답해야 하는지에 따라 달라집니다.

---

# Strategy Versioning

전략은 기존 문서를 덮어쓰지 않고 별도 version line으로 남깁니다.

```text
PS-v0.9.0  multi-output evidence-first proposal
PS-v1.0.0  application-first / GitHub-first
PS-v1.1.0  evidence-ranked repositories
PS-v1.2.0  career-case-first; PHP sample deferred
PS-v1.3.0  first real AX target adapter
PS-v1.4.0  portfolio/resume boundary + visual case studies
```

Current strategy:

- [`docs/portfolio-strategy/versions/PS-v1.4.0.md`](docs/portfolio-strategy/versions/PS-v1.4.0.md)
- [`docs/portfolio-strategy/CHANGELOG.md`](docs/portfolio-strategy/CHANGELOG.md)

Previous AX portfolio is preserved for direct comparison:

- [`docs/portfolio-ax/versions/PS-v1.3.0-text-heavy-baseline.md`](docs/portfolio-ax/versions/PS-v1.3.0-text-heavy-baseline.md)

---

# Public / Private Boundary

이 repository에는 다음을 넣지 않습니다.

- private repository/evidence paths
- customer/order/payment/shipping/production data
- internal translation-server source/address
- credentials, internal hosts/endpoints
- raw production logs/screenshots
- confidential recruiting messages
- raw AI transcripts containing private context
- unsupported metrics or ownership claims

Protected resume/interview material은 private source layer에서 별도 관리합니다.

---

# Web / PDF

GitHub portfolio가 canonical technical surface입니다.

향후 Web/PDF는 다음을 재시각화합니다.

```text
Case Study
→ architecture/state/decision diagrams
→ verification evidence
→ repository links
```

Resume text를 다시 배치한 PDF는 portfolio로 취급하지 않습니다.

---

# Development

The optional visual site is a Next.js / TypeScript static-export surface.

```bash
npm install
npm run typecheck
npm run validate:content
npm run build
```

Deployment remains:

```text
GitHub Actions
→ build / validation
→ static export
→ nginx static root
```

Web implementation stays downstream from the GitHub case-study portfolio.
