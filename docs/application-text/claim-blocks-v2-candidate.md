# Application Text Claim Blocks v2 — Candidate

Strategy: `PS-v1.2.0`
Updated: 2026-08-17
Status: public-sanitized candidate
Priority: P0
Previous: `claim-blocks-v1.md`
Canonical authority: `docs/resume-data/public-claim-bank.md` (`CL-v0.7`)

## Purpose

This revision keeps the first reading layer concrete while enforcing a strict rule:

```text
DEFAULT submission block
= ready claims only

EXTENSION block
= selective / source-confirm / role-confirm only after its gate passes
```

Main change from v1:

```text
v1
role/domain summary → experience statement

v2
role/domain summary
→ verified problem-solving habit
→ relevant experience
→ target-role transfer
```

A downstream application sentence cannot promote its own evidence status.

---

# A. Positioning

## A1 — General Backend — READY

> PHP/MySQL 기반 제조 MES와 커머스·물류 업무시스템을 개발·유지보수해 왔습니다. 기능 변경 전 AS-IS 코드와 DB 구조, 상태값, 권한, 관리자 화면, batch/cron, 외부 API의 영향을 확인해 변경 범위를 산정하는 운영형 개발 방식에 익숙합니다.

Canonical support:

- `CL-PUB-001`
- `CL-PUB-002`
- `CL-PUB-011`

Use for:

- general backend
- PHP backend
- business-system backend
- internal platform / operations system

Boundary:

`CL-PUB-011` describes a confirmed change-impact working method. It does not mean every project contained every subsystem or that the candidate owned all listed boundaries.

## A2 — Commerce / Logistics Backend — READY

> 커머스·물류 운영 시스템에서 상품, 입고, 재고, 외부출고와 대시보드 관련 기능 개선에 참여했습니다. 운영 기능을 변경할 때 관련 데이터 상태와 관리자 처리, batch/cron, 외부 연동의 영향을 함께 확인하는 방식을 사용합니다.

Canonical support:

- `CL-PUB-003`
- `CL-PUB-011`

Use for:

- commerce backend
- logistics / fulfillment
- order platform

## A3 — Manufacturing / MES — READY

> PHP 기반 MES·업무시스템의 개발·유지보수 경험이 있으며 제조 생산관리 도메인을 다뤘습니다. 운영 중인 업무시스템의 변경에서는 기존 코드와 데이터 상태, 권한과 관련 처리 영향을 확인한 뒤 범위를 정하는 방식을 사용합니다.

Canonical support:

- `CL-PUB-001`
- `CL-PUB-002`
- `CL-PUB-011`

Use for:

- MES
- manufacturing IT
- internal business systems

### A3-X — MES requirement decomposition — SOURCE-CONFIRM EXTENSION

> 제조 현장의 요구를 입력 순서, 조회 조건, 상태, 통계 기준, 권한과 데이터 처리 조건으로 나눠 개발 범위를 정리했습니다.

Do not use by default. This narrative has protected supporting evidence but remains source-confirm material until the historical example/role scope is promoted.

---

# B. Experience Paragraphs

## B1 — Commerce, concise — READY

> 셀러형 커머스·물류 운영 시스템에서 상품, 입고, 재고, 외부출고, 대시보드 관련 기능 개선에 참여했습니다. 외부 주문 등록에서는 파일 업로드 이후 preview와 confirm 단계를 구분하고 batch 처리의 성공·실패 경계를 다룬 경험이 있습니다. 기능 변경 전에는 관련 코드와 데이터 상태, 관리자 처리, batch/cron, 외부 API 영향을 함께 확인해 변경 범위를 산정합니다.

Canonical support:

- `CL-PUB-003`
- `CL-PUB-004`
- `CL-PUB-011`

Do not append without role confirmation:

- canonical model ownership
- idempotency design ownership
- signed API ownership
- PII/security-policy design
- reconciliation feature ownership

## B2 — MES, concise — READY

> PHP 기반 제조 MES와 업무시스템을 개발·유지보수하며 제조 생산관리 도메인을 다뤘습니다. 장기간 운영되는 업무시스템의 변경에서는 기존 코드와 DB 구조, 상태값, 권한과 관련 처리 영향을 확인해 수정 범위를 정하는 방식으로 접근합니다.

Canonical support:

- `CL-PUB-001`
- `CL-PUB-002`
- `CL-PUB-011`

### B2-X — Legacy improvement — SELECTIVE EXTENSION

> 기존 PHP 업무시스템을 유지하면서 필요한 범위에서 구조와 모듈 경계를 점진적으로 정리해 왔습니다. 전면 재작성보다 운영 영향을 통제하는 개선을 우선했습니다.

Use only after the selected target and evidence review justify `CL-PUB-009`.

Do not make this the default MES paragraph while the claim remains `selective`.

## B3 — Combined Backend — READY CORE

> PHP/MySQL 기반 업무시스템에서 제조 MES와 커머스·물류 도메인을 경험했습니다. 기능 변경 전 AS-IS 코드와 DB 구조, 상태값, 권한, 관리자 화면, batch/cron, 외부 API 영향을 확인해 변경 범위를 산정하는 운영형 개발 방식을 사용합니다.

Canonical support:

- `CL-PUB-001`
- `CL-PUB-002`
- `CL-PUB-011`

### B3-X — Current public engineering work — OPTIONAL

> 최근에는 같은 변경·검증 원칙을 tests, CI, failure path와 review contract로 구조화하는 공개 engineering 프로젝트를 진행하고 있습니다.

Use only when the target benefits from current public engineering evidence. Link the relevant repository rather than implying employer production use.

---

# C. Problem-Solving Sentences

## C1 — Change-impact analysis — READY

> 운영 시스템에서는 화면의 증상만 수정하기보다 AS-IS 코드와 데이터 상태, 권한, 관리자 처리, batch/cron, 외부 연동의 영향 범위를 확인한 뒤 변경합니다.

Canonical support: `CL-PUB-011`

## C2 — Legacy incremental change — SELECTIVE

> 장기간 운영되는 PHP 시스템은 기존 동작과 데이터 관계를 파악하고 변경 범위를 통제하는 점진적 개선을 우선했습니다.

Use only with `CL-PUB-009` after target-specific evidence review.

## C3 — Field requirement translation — SOURCE-CONFIRM

> 현업 요구를 입력 순서, 조회 조건, 상태, 권한과 데이터 처리 기준으로 나눠 개발 범위를 정리했습니다.

Protected supporting sources exist, but this is not a default public-ready claim yet.

## C4 — Failure / repeated-execution awareness — SOURCE-CONFIRM

> 외부 연동이나 운영 상태가 포함된 기능은 정상 응답뿐 아니라 실패·반복 실행·후속 상태에 남는 영향도 함께 확인했습니다.

Do not use by default or convert this into a specific retry/idempotency implementation claim without promotion.

---

# D. Optional AI Sentence

## D1 — General backend support sentence

> LLM은 요구사항 정리와 코드·SQL 검토, 테스트·문서화 보조에 활용하되 실제 코드, 데이터 구조와 테스트 결과를 기준으로 다시 검증합니다.

For ordinary backend roles, use at most one AI sentence and keep it below the core career experience.

For AI-native/platform roles, link deeper public evidence instead of turning the application paragraph into an AI-tool list:

- `stackforge-atlas`
- `codex-workflow-skills`
- `harness-kit`

---

# E. Target Recipes

## General Backend — DEFAULT READY

```text
A1
→ B2 or B3
→ C1
```

Recommended emphasis:

```text
backend identity
> real business-system experience
> confirmed change-impact discipline
> optional public engineering work
```

## Commerce / Logistics Backend — DEFAULT READY

```text
A2
→ B1
→ C1
```

Architecture jargon such as canonical model / idempotency / reconciliation stays in gated technical material until its claim status changes.

## Manufacturing / MES — DEFAULT READY

```text
A3
→ B2
→ C1
```

After source-confirm, selectively add:

```text
A3-X or C3
B2-X when legacy-improvement evidence is useful
```

Do not add field rollout, customer count, leadership, device-support chronology, or exact company chronology from a generated protected candidate without the relevant source/publication gate.

## AI-Native Backend / Platform

```text
A1 or B3
→ strongest ready career paragraph
→ D1
→ selected verified public repository
```

Do not start with AI tooling unless the target role is explicitly AI-first/agent/platform oriented.

---

# F. Readability Gate

For recruiter-facing Korean application text:

- first two sentences identify role + relevant domain,
- one sentence contains one main claim,
- avoid a comma-separated technology wall,
- prefer domain/operational terms over unexplained architecture jargon,
- move canonical model / idempotency / reconciliation details into gated GitHub technical content,
- remove metrics without an evidence source,
- do not combine a READY block with an EXTENSION block without checking its status.

Target density when no character limit is supplied:

```text
short summary       2–3 sentences
experience answer   400–650 Korean characters
motivation/fit      450–700 Korean characters
```

These are authoring targets, not mandatory limits.

---

# G. Promotion Gate

Before any selective/source-confirm/role-confirm claim enters the DEFAULT recipe:

1. verify personal responsibility,
2. verify chronology/source authority,
3. classify design vs implementation vs operation vs review,
4. verify any metric,
5. sanitize company/customer/system identifiers,
6. promote the canonical claim bank first,
7. regenerate this P0 layer afterward,
8. run target-specific hiring review.

A company-specific rewrite may change selection, order, and vocabulary only. It must not increase factual scope.
