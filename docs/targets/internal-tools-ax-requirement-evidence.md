# Internal Tools / AX Requirement-Evidence Matrix

Strategy: `PS-v1.3.0`
Updated: 2026-08-17
Visibility: public-sanitized
Status: target-adapter reference

## Boundary

This document generalizes a real target-role pattern without naming the company, referral source, internal compensation discussion, or private recruiting context.

It is a **selection and ordering layer**, not a new factual source.

## Target Role Model

The target is interpreted as a backend-centered engineer who can build internal tools, admin/operations surfaces, APIs, workflow automation, and practical AI-assisted systems across backend and web boundaries.

It is **not** interpreted as an ML research/model-training position.

## Requirements

| ID | Target requirement | Priority |
|---|---|---:|
| `AX-R01` | AI/AX 기반 업무도구 개발 | 5 |
| `AX-R02` | 개발자용 내부도구·운영도구 개발 | 5 |
| `AX-R03` | 관리자/백오피스 개발 | 4 |
| `AX-R04` | API backend 개발 | 5 |
| `AX-R05` | 필요한 web frontend 구현 | 3 |
| `AX-R06` | 제품·업무지식의 AI 활용 체계 | 4 |
| `AX-R07` | 반복 개발·운영 업무 자동화 | 5 |
| `AX-R08` | 특정 framework보다 문제에 맞는 도구를 직접 설계·구현 | 5 |
| `AX-R09` | 새로운 기술과 AI coding tools를 빠르게 실제 업무에 적용 | 4 |

## Evidence Matrix

| Requirement | Career / ready evidence | Public engineering evidence | Assessment | Guardrail |
|---|---|---|---|---|
| `AX-R01` AI/AX 업무도구 | backend/business-system context + CL-PUB-011 working method | Codex Workflow Skills, harness-kit | strong | AI 사용량 대신 문제→도구화→검증으로 설명 |
| `AX-R02` internal tools | 반복 업무·프로젝트 경계 구조화 경험 | harness-kit | strong | current HEAD validation caveat 유지 |
| `AX-R03` backoffice | commerce/MES 업무시스템, 관리자 surface 영향 분석 | career cases | strong | private admin screenshot/data 공개 금지 |
| `AX-R04` API backend | PHP/MySQL, external API impact analysis | StackForge interface contracts | strong | signed API/idempotency ownership은 role-confirm |
| `AX-R05` web frontend | dashboard/업무 화면과 backend 흐름 경험 | public full-stack draft, StackForge UI pilot | medium | frontend specialist로 포지셔닝하지 않음 |
| `AX-R06` AI knowledge system | requirements/review/test/document workflow | Codex workflow + public AI-assisted case | strong | private wiki/source structure 원문 공개 금지 |
| `AX-R07` automation | batch/cron 영향 분석 + repeated-work structure | harness-kit, Codex workflow | strong | productivity % claim 금지 |
| `AX-R08` direct tool building | business-system development + public tooling | all three selected repos | strong | public R&D를 historical production으로 표현 금지 |
| `AX-R09` rapid adoption | recent public engineering references | StackForge, agent tooling | medium-strong | 기술명 나열보다 적용 문제·검증을 설명 |

## Strongest Fit Signals

### Signal A — Business-system context before automation

The candidate has a long-running backend/business-system identity. AX is presented as an extension of operational software experience, not a replacement for it.

### Signal B — Internal tooling as a concrete artifact

`harness-kit` directly addresses repeated developer-configuration drift and converts it into a reusable module/configuration system.

### Signal C — AI workflow with explicit verification

`codex-workflow-skills` provides public evidence that AI-assisted work can be bounded by intake, independent review, validation state, and knowledge closeout.

### Signal D — Software engineering guardrail

`stackforge-atlas` prevents the portfolio from becoming an AI-tool-only narrative by showing interfaces, tests, database durability, failure/recovery, and explicit evidence limits.

## Material Gaps

### Gap 1 — Modern frontend depth

The target asks for web frontend breadth, but frontend is not the candidate's primary specialization.

Response:

- position as backend-centered,
- show capability to connect operational UI/API/data flow,
- do not claim advanced frontend specialization.

### Gap 2 — Production AX ownership

Public tooling demonstrates current engineering capability, but it does not prove company-wide production AX ownership.

Response:

- use `실험`, `구조화`, `공개 프로젝트`, `개발 워크플로` language,
- do not claim enterprise AI platform deployment.

### Gap 3 — Target-specific adoption outcomes

There is no verified target-company adoption evidence yet.

Response:

- discuss design, verification, and limitations,
- avoid unsupported productivity/time-saving metrics.

## Target Resume Header

Recommended:

> **Backend Engineer | 업무시스템 · 내부도구 · AX/개발자동화**

Why not `AI Engineer`:

- it can imply ML/model/inference specialization that the current evidence does not support,
- the actual differentiator is business-system context + tool building + automation + verification.

Why not `Full-Stack Engineer` as the primary title:

- backend remains the strongest and most defensible career identity,
- required frontend breadth can be demonstrated in the body without changing the primary identity.

## Target Repository Order

```text
1. harness-kit            internal tooling
2. codex-workflow-skills  AI workflow / automation
3. stackforge-atlas       software engineering / verification
```

This order is target-specific. General backend applications should continue to lead with StackForge Atlas or the strongest career case.

## Submission Gate

Before using this target adapter:

- use only ready career claims in the first reading layer,
- keep detailed source-confirm narratives out of the headline/summary,
- reproduce current validation for any repository whose test state is cited,
- retain all known limitations,
- do not expose target-company/internal-referral details in the public repository.
