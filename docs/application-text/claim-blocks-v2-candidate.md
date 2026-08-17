# Application Text Claim Blocks v2 — Candidate

Strategy: `PS-v1.2.0`
Updated: 2026-08-17
Status: public-sanitized candidate
Priority: P0
Previous: `claim-blocks-v1.md`

## Purpose

This revision keeps the facts from the public claim bank conservative while making the first reading layer more concrete and easier to scan.

Main change from v1:

```text
v1
role/domain summary → experience statement

v2
role/domain summary
→ concrete problem-solving habit
→ relevant experience
→ target-role transfer
```

This file does not promote role-confirm claims. The canonical claim bank remains the factual authority.

---

# A. Positioning

## A1 — General Backend

> PHP/MySQL 기반 제조 MES와 커머스·물류 업무시스템을 개발·유지보수해 왔습니다. 기능을 수정할 때 화면 하나만 보지 않고 DB 상태, 관리자 처리, 권한, batch/cron과 외부 연동까지 영향 범위를 확인한 뒤 변경하는 운영형 백엔드 개발을 지향합니다.

Use for:

- general backend
- PHP backend
- business-system backend
- internal platform / operations system

Evidence boundary:

- first sentence: public-safe career positioning
- second sentence: problem-solving/work-style framing; do not convert into unverified specific ownership

## A2 — Commerce / Logistics Backend

> 커머스·물류 운영 시스템에서 상품, 입고, 재고, 외부출고와 관리자 기능 개선에 참여했습니다. 주문·배송과 같은 상태가 여러 화면과 처리 단계에 걸쳐 연결되는 만큼, 변경 전에 관련 데이터와 후속 처리 영향을 확인하는 방식을 중요하게 봅니다.

Use for:

- commerce backend
- logistics / fulfillment
- order platform

## A3 — Manufacturing / MES

> PHP 기반 MES·업무시스템의 개발·유지보수 경험이 있습니다. 제조 현장의 요구를 단순 화면 요청으로 보지 않고 입력 순서, 조회 조건, 상태와 데이터 처리 기준으로 나눠 시스템에 반영하는 업무를 경험했습니다.

Use for:

- MES
- manufacturing IT
- internal business systems

Detailed field/customer/leadership scope remains source-confirm material.

---

# B. Experience Paragraphs

## B1 — Commerce, concise

> 셀러형 커머스·물류 운영 시스템에서 상품, 입고, 재고, 외부출고, 대시보드 관련 기능 개선에 참여했습니다. 외부 주문 등록에서는 파일 업로드 후 바로 반영하는 대신 preview와 confirm 단계를 구분하고 batch 처리의 성공·실패 경계를 다룬 경험이 있습니다. 운영 중인 시스템에서는 한 기능의 변경이 주문·배송 등 다른 상태에 미치는 영향을 함께 확인하는 것을 중요하게 생각합니다.

Canonical support:

- `CL-PUB-003`
- `CL-PUB-004`

Do not append without role confirmation:

- canonical model ownership
- idempotency design ownership
- signed API ownership
- PII/security-policy design
- reconciliation feature ownership

## B2 — MES, concise

> PHP 기반 제조 MES와 업무시스템을 개발·유지보수하며 생산관리 도메인의 기능 변경, 오류 수정과 데이터 처리 요청을 다뤘습니다. 장기간 운영되는 업무시스템은 새 기능을 만드는 것만큼 기존 동작을 깨지 않는 변경이 중요해, 기존 코드와 데이터 관계를 확인하고 필요한 범위에서 구조와 가독성을 점진적으로 정리하는 방식으로 접근했습니다.

Canonical support:

- `CL-PUB-001`
- `CL-PUB-002`
- selective legacy-improvement claim

## B3 — Combined Backend

> PHP/MySQL 기반 업무시스템에서 제조 MES와 커머스·물류 도메인을 경험했습니다. 현업 요구를 상태와 데이터 흐름으로 나누고, 기존 PHP 구조와 관리자 기능, 배치·외부 연동의 영향을 확인하면서 기능을 수정·확장해 왔습니다. 최근에는 같은 작업 방식을 테스트, CI, 명시적 failure path와 리뷰 계약으로 더 구조화하는 공개 engineering 프로젝트를 진행하고 있습니다.

Use when:

- the application allows a short professional summary,
- backend fundamentals should lead and recent public work should appear as a supporting signal.

The last sentence does not imply that public R&D repositories were production employer systems.

---

# C. Problem-Solving Sentences

These are compact principles for application forms. They should not be mistaken for claims that every listed technique was implemented in every employer system.

## C1 — State / impact analysis

> 운영 시스템에서는 화면의 증상만 수정하기보다 관련 데이터 상태와 관리자 처리, 배치·외부 연동까지 영향 범위를 확인한 뒤 변경하려고 합니다.

## C2 — Legacy change

> 장기간 운영되는 PHP 시스템은 전면 재작성보다 기존 동작과 데이터 관계를 파악하고 변경 범위를 통제하는 점진적 개선이 더 안전할 수 있다고 봅니다.

## C3 — Field requirement translation

> 현업 요구는 기능명 그대로 구현하기보다 입력 순서, 조회 조건, 상태, 권한과 데이터 처리 기준으로 나눠 개발 범위를 정리합니다.

## C4 — Failure awareness

> 외부 연동이나 운영 상태가 포함된 기능은 정상 응답뿐 아니라 실패·반복 실행·후속 상태에 어떤 영향이 남는지도 함께 확인합니다.

Do not use C4 to claim a specific retry/idempotency implementation unless supported by the selected case.

---

# D. Optional AI Sentence

For ordinary backend roles, use at most one sentence.

> LLM은 요구사항 정리와 코드·SQL 검토, 테스트·문서화 보조에 활용하되 실제 코드, 데이터 구조와 테스트 결과를 기준으로 다시 검증합니다.

For AI-native/platform roles, link the deeper public evidence instead of expanding this paragraph:

- `stackforge-atlas`
- `codex-workflow-skills`
- `harness-kit`

---

# E. Target Recipes

## General Backend

```text
A1
→ B2 or B3
→ C1 or C2
```

Recommended emphasis:

```text
backend identity
> real business-system experience
> operational change discipline
> AI/tooling
```

## Commerce / Logistics Backend

```text
A2
→ B1
→ C1 or C4
```

Keep architecture vocabulary in GitHub deep dives unless the job description explicitly asks for it.

## Manufacturing / MES

```text
A3
→ B2
→ C3
```

Field rollout, customer count, leadership, device support, and exact chronology should be added only from the protected authoritative resume after source confirmation.

## AI-Native Backend / Platform

```text
A1 or B3
→ strongest real career paragraph
→ D
→ public repository link
```

Do not start with AI tooling unless the target role is explicitly AI-first/agent/platform oriented.

---

# F. Readability Gate

For recruiter-facing Korean application text:

- first two sentences should identify role + relevant domain,
- one sentence should contain one main claim,
- avoid stacks as a comma-separated wall,
- prefer `상태`, `주문`, `생산관리`, `외부 연동`, `운영` over unexplained architecture jargon,
- move canonical model / idempotency / reconciliation details into GitHub technical content,
- remove metrics without an evidence source.

Target density when no character limit is supplied:

```text
short summary       2–3 sentences
experience answer   400–650 Korean characters
motivation/fit      450–700 Korean characters
```

These are authoring targets, not mandatory limits.

---

# G. Promotion Gate

Before any stronger claim is added:

1. verify personal responsibility,
2. verify chronology/source authority,
3. classify design vs implementation vs operation vs review,
4. verify any metric,
5. sanitize company/customer/system identifiers,
6. promote the canonical claim bank first,
7. regenerate this text layer afterward.

A company-specific rewrite may change ordering and vocabulary only. It must not increase factual scope.
