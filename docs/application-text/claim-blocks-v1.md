# Application Text Claim Blocks v1

Strategy: `PS-v1.1.0`
Updated: 2026-08-17
Status: public-sanitized reference
Priority: P0

## Purpose

This file is the concise text layer used before GitHub, web, or PDF portfolio rendering.

It does not replace the canonical claim bank. It projects only claims that are currently safe enough to use, while keeping conditional claims outside submitted text until role scope is confirmed.

Source of truth:

- `docs/resume-data/public-claim-bank.md`
- `content/projects/commerce-fulfillment-operations.md`
- `content/projects/manufacturing-mes-business-systems.md`
- verified public repository evidence where explicitly cited

## Writing Contract

Application text should be easy to scan.

Default order:

```text
role fit
→ relevant problem/domain
→ personal action or participation
→ verification/result when supported
→ why it transfers to the target role
```

Rules:

- one paragraph should make one point,
- prefer concrete domain/problem terms over technology lists,
- do not add metrics without a verified source,
- do not turn `participated / handled / reviewed` into `owned / led / designed`,
- do not explain architecture in full; GitHub is the next reading layer,
- use 2–3 strongest experiences rather than listing every project,
- AI usage is secondary unless the target role explicitly values AI-native engineering.

---

# 1. Positioning Blocks

## P0-POS-01 — General backend

> PHP 기반 제조 MES와 셀러형 이커머스·물류 운영 시스템 경험을 바탕으로, 업무 도메인의 상태와 데이터 흐름을 이해하고 기능 개선과 운영 안정성을 함께 다뤄 온 백엔드 개발자입니다.

Use for:

- general backend roles
- business-system backend roles
- PHP backend roles

Evidence status: `ready`

## P0-POS-02 — Commerce backend

> 셀러형 커머스·물류 운영 시스템에서 상품, 입고, 재고, 외부출고와 대시보드 기능 개선에 참여하며 주문·출고 흐름과 외부 연동의 운영 리스크를 다뤄 왔습니다.

Evidence status: `ready`

## P0-POS-03 — AI-native backend

> 운영형 백엔드 경험을 기반으로 최근에는 AI 도구를 단순 코드 생성기가 아니라 작업 범위 설정, 구현, 검증, 독립 리뷰와 지식화까지 연결하는 개발 워크플로로 실험하고 있습니다.

Evidence status: mixed

- backend framing: `ready`
- detailed AI workflow claims: use only with the verified public repository block below

---

# 2. Experience Blocks

## P0-EXP-01 — Commerce operations

### Short

> 셀러형 커머스·물류 운영 시스템에서 상품, 입고, 재고, 외부출고와 대시보드 관련 기능 개선에 참여했습니다. 기능 단위 구현보다 주문과 출고가 운영 상태로 어떻게 이어지는지를 함께 확인하는 방식으로 업무를 진행했습니다.

Supported by:

- `CL-PUB-003`

### With batch-flow detail

> 외부 주문 등록 흐름에서는 파일 업로드 이후 바로 반영하지 않고 preview와 confirm 단계를 구분하고, batch 처리의 성공·실패 경계를 명확히 하는 구조를 다뤘습니다. 운영자가 처리 결과를 예측할 수 있는 흐름을 만드는 것을 중요하게 봤습니다.

Supported by:

- `CL-PUB-004`

### Do not append yet

Do not currently state as completed personal ownership:

- canonical order model 설계·구현
- idempotency key 설계·적용
- signed API 직접 구현
- PII guard 설계
- sync verification 화면/기능 소유

These remain `role-confirm`.

---

## P0-EXP-02 — Manufacturing MES

### Short

> PHP 기반 제조 MES와 업무시스템의 개발·유지보수를 경험하며 생산관리 도메인의 기능 변경, 오류 수정과 데이터 처리 요청을 다뤘습니다. 운영 중인 업무시스템에서는 새 기능뿐 아니라 기존 흐름을 깨지 않는 변경과 유지보수 가능성을 중요하게 봤습니다.

Supported by:

- `CL-PUB-001`
- `CL-PUB-002`
- `content/projects/manufacturing-mes-business-systems.md`

### Legacy emphasis

> 기존 PHP 업무시스템을 유지하면서 기능 요구를 반영하고, 필요한 범위에서 구조와 모듈 경계를 점진적으로 정리해 왔습니다. 전면 재작성보다 운영 영향과 변경 범위를 통제하는 방식에 익숙합니다.

Usage: selective

Do not upgrade `legacy improvement` into broad architecture ownership without role confirmation.

---

## P0-EXP-03 — Verified AI workflow

### Short

> 최근에는 Codex 작업을 intake, 구현, 독립 검토, session closeout 단계로 분리한 공개 workflow skill을 설계하고 검증 계약으로 관리했습니다. 공개 forward-test 기준 881개 테스트 중 879개가 통과했고 외부 환경 의존 2개는 skip으로 분리해, 검증하지 않은 범위를 성공으로 처리하지 않았습니다.

Supported by:

- `CL-AI-001`
- `https://github.com/tomtomjskim/codex-workflow-skills`
- public forward-test report dated 2026-08-05

Known limitation:

- deterministic / repository-owned validation evidence
- not proof of production adoption or paid live-model quality

Use for:

- AI-native backend
- developer productivity
- platform/tooling
- agent engineering

For ordinary PHP/backend roles, keep this to one supporting sentence or omit it.

---

# 3. Problem-Solving Blocks

## P0-PS-01 — Operational boundary

> 운영 시스템에서는 기능이 동작하는지만 확인하기보다 실패했을 때 어떤 상태가 남는지, 다시 실행해도 문제가 없는지, 운영자가 결과를 확인할 수 있는지를 함께 봅니다.

Status: positioning principle

Do not attach specific idempotency or recovery implementation claims unless the selected case supports them.

## P0-PS-02 — Incremental change

> 장기간 운영되는 업무시스템은 이상적인 구조로 한 번에 교체하기 어렵기 때문에, 기존 동작과 배포 영향을 확인하면서 변경 범위를 작게 가져가는 방식을 선호합니다.

Status: general experience framing

## P0-PS-03 — AI verification

> AI를 활용한 작업에서도 생성 결과를 그대로 채택하지 않고 테스트, 정적 검토, 독립 리뷰와 명시적인 승인 단계를 두는 방향으로 사용하고 있습니다.

Status: supported by public AI workflow evidence

---

# 4. Target Combination Recipes

## Backend general

Recommended composition:

```text
P0-POS-01
→ P0-EXP-02
→ P0-EXP-01 Short
→ P0-PS-01 or P0-PS-02
```

Target length:

- summary: 2–3 sentences
- application answer: 450–700 Korean characters when no explicit limit exists

AI content: optional one sentence maximum.

## Commerce backend

Recommended composition:

```text
P0-POS-02
→ P0-EXP-01 Short
→ P0-EXP-01 With batch-flow detail
→ selected MES sentence if needed
```

Conditional claims such as canonical model, idempotency, signed API, and reconciliation remain excluded until role scope is confirmed.

## AI-native backend / platform

Recommended composition:

```text
P0-POS-01 or P0-POS-03
→ strongest backend career block
→ P0-EXP-03
→ P0-PS-03
```

Do not let public AI tooling replace the long-term backend career narrative.

---

# 5. Readability Rules

Prefer:

```text
업무 도메인
→ 실제 문제
→ 내가 다룬 범위
→ 검증 가능한 결과
```

Avoid:

```text
PHP, MySQL, AWS, Docker, Git, AI, LLM, MCP ...
```

as a paragraph by itself.

Avoid sentence chains longer than three clauses. Split technical detail into the GitHub portfolio when the sentence requires multiple parentheses, abbreviations, or implementation terms to understand.

## Technical-term budget

For recruiter-facing Korean text:

- use domain terms freely when they clarify experience,
- use at most 1–2 implementation terms per sentence,
- explain `preview / confirm` in context,
- avoid using `canonical model`, `idempotency`, `projection`, `fail-closed` together in one paragraph.

Those terms belong in GitHub deep dives.

---

# 6. Promotion Gate

Before moving any conditional claim into a submitted application:

1. confirm personal role,
2. identify private or public evidence,
3. confirm implementation maturity,
4. confirm whether the wording describes design, implementation, operation, or review,
5. redact organization/customer/system identifiers,
6. update the canonical claim bank first,
7. only then update these P0 blocks.

A target-company rewrite may change ordering and vocabulary. It must not strengthen factual scope.
