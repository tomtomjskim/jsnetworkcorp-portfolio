# AX / Internal Tools Target Multi-Lens Review

Date: 2026-08-17
Strategy: `PS-v1.3.0`
Target: backend-centered Internal Tools / AX / development-automation role family
Review basis:

- `content/resume/variants/ax-internal-tools-ko.md`
- `PORTFOLIO-AX.md`
- `docs/targets/internal-tools-ax-requirement-evidence.md`
- `docs/resume-data/public-claim-bank.md`

Method: independent recruiter / hiring-manager / future-teammate lenses following the public `resume-multi-review` contract.

## Source Audit

Status: `source_gap`

Reason:

The target adapter and public-safe portfolio are concrete review sources, but the latest fully authoritative protected resume with complete chronology and personal fields is not available in this public repository. Therefore this review can validate **target positioning and patch sections**, not claim a complete final submitted resume.

The company/internal-referral source remains private and is not copied here.

---

# First-Pass Independent Reviews

## Reviewer A — Recruiter

Decision: **reject** as a standalone submission document.

Reasons:

1. The headline is relevant, but the second summary paragraph originally packed internal tools, workflow, AI verification, CI, review, and approval into one dense sentence.
2. This target variant is not a complete resume and does not contain chronology, employer/title continuity, or required application fields.
3. The mixed backend/frontend target asks for web breadth, but the original first screen did not make the practical admin/workflow UI range visible enough.

### One-Line Fix

Source line:

> 최근에는 반복되는 개발 업무와 프로젝트 설정을 내부 도구와 workflow로 구조화하고, AI 결과를 테스트·CI·독립 리뷰·사람 승인으로 검증하는 공개 engineering 프로젝트를 진행하고 있습니다.

Replacement:

> 최근에는 프로젝트마다 반복되는 AI 개발 설정과 검수 절차를 내부 도구와 workflow로 구조화하는 공개 프로젝트를 진행하고 있습니다.

Decision impact:

- moves the repeated-work problem before the AI/process terminology,
- reduces first-screen jargon density,
- makes the internal-tool connection easier to scan.

Evidence basis:

- public `harness-kit`,
- public `codex-workflow-skills`,
- existing AI-assisted workflow claims.

Remaining risk:

The variant must be merged into an authoritative full resume before actual submission.

---

## Reviewer B — Hiring Manager / Data-Team Lead

Decision: **interview**.

Reasons:

1. The candidate's stable backend/business-system identity is preserved instead of being replaced by an AI-specialist title.
2. `harness-kit` and Codex Workflow Skills provide direct public evidence for internal tooling, repeated-work automation, workflow contracts, and verification discipline.
3. `CL-PUB-011` connects recent tooling work to a credible operational habit: inspect code, DB state, permissions, admin surfaces, batch/cron, and external boundaries before choosing the modification scope.

### One-Line Fix

Source line:

> 백엔드 중심이지만 업무 화면, API, 데이터 흐름을 함께 이해하고 필요한 도구를 직접 설계·구현하는 역할을 지향합니다.

Replacement:

> 백엔드 중심이지만 업무·관리자 화면과 API·데이터 흐름을 함께 이해해 필요한 도구를 한 흐름으로 완성하는 역할을 지향합니다.

Decision impact:

- expresses the requested backend+web breadth without rebranding the candidate as a frontend specialist,
- maps more directly to internal/admin tool delivery.

Evidence basis:

- commerce/MES business-system career cases,
- public full-stack draft boundaries,
- `CL-PUB-011`.

Remaining risk:

Public tooling proves current engineering capability, not previous-employer company-wide production AX ownership.

---

## Reviewer C — Future Teammate

Decision: **interview**.

Reasons:

1. The portfolio emphasizes impact-scope analysis and explicit limitations rather than implying that AI output is automatically correct.
2. Missing execution, skip states, and unverified areas are separated from successful verification, which lowers handoff and review risk.
3. Public R&D, historical career evidence, and role-confirm claims are kept separate, reducing the chance that teammates inherit inflated assumptions.

### One-Line Fix

Source line:

> AI 결과를 테스트·CI·독립 리뷰·사람 승인으로 검증하는 공개 engineering 프로젝트를 진행하고 있습니다.

Replacement:

> AI 결과는 테스트·CI·독립 리뷰로 검증하고, 실행하지 못한 범위와 한계도 성공과 분리해 기록합니다.

Decision impact:

- explains day-to-day reviewability and failure accounting,
- reduces process-brand terminology,
- makes the collaboration value clearer.

Evidence basis:

- Codex Workflow Skills forward-test evidence,
- StackForge evidence-boundary approach,
- public AI-assisted workflow case.

Remaining risk:

The final interview should test whether the tools solve real user/team friction rather than only demonstrating process design.

---

# Adjudication

## Shared Strengths

1. Backend/business-system identity remains the first signal.
2. Internal tooling and AI workflow have public, inspectable artifacts.
3. Claim boundaries and known limitations are unusually explicit.

## Shared Risks

1. A target adapter is not a complete authoritative resume.
2. `harness-kit` still needs a fresh current-HEAD lint/test/build result before citing current validation status.
3. Frontend is useful delivery breadth, not the candidate's primary specialization.

## Prioritized Risks

| Severity | Risk | Editing direction |
|---|---|---|
| `fatal` for standalone submission | missing authoritative full-resume chronology/personal fields | merge target adapter into protected master; do not submit this variant alone |
| `material` | AI/process jargon can obscure the actual internal-tool problem | state repeated friction/problem first, then tool/workflow |
| `material` | public R&D may be mistaken for production AX ownership | retain explicit public-R&D boundary |
| `material` | frontend expectation can be overstated or understated | present admin/workflow UI breadth without frontend-specialist title |
| `limited` | mixed Korean/English technical terms | keep only terms that add precision; explain through work context |

Final decision on **target adapter direction**: **interview**.

Final reasons:

1. The role-to-evidence match is strong for internal tools and development automation.
2. The candidate's backend/operations experience prevents the AX story from becoming an AI-hobby narrative.
3. Remaining risks are mainly source-completion and evidence-reproduction gates, not a fundamental target mismatch.

---

# Patch Applied

A full resume rewrite is **not** performed because the authoritative protected resume is still source-gapped.

Applied target-section patches:

- retained headline: `Backend Engineer | 업무시스템 · 내부도구 · AX/개발자동화`,
- shortened the internal-tool summary sentence,
- separated AI verification/failure accounting into its own sentence,
- changed frontend wording from generic breadth to concrete `업무·관리자 화면 + API + 데이터 흐름`,
- kept `AI Engineer`, company-wide AX ownership, production RAG/inference, and frontend-specialist claims excluded.

---

# Re-Review After Patch

## Recruiter

Decision: **interview** for the target adapter content.

Original risk status:

- dense AI/process sentence: `resolved`,
- frontend breadth visibility: `resolved`,
- complete resume chronology: `unresolved` outside this public adapter.

Remaining risk:

Do not submit the public target adapter as a standalone resume.

## Hiring Manager

Decision: **interview**.

Original risk status:

- backend identity: `resolved / preserved`,
- internal-tool evidence mapping: `resolved`,
- production AX ownership ambiguity: `partially_resolved` by explicit boundary.

Remaining risk:

Probe adoption, user friction, maintenance cost, and current validation state in interview.

## Future Teammate

Decision: **interview**.

Original risk status:

- verification/failure accounting: `resolved`,
- R&D/career boundary: `resolved`,
- practical user/team utility: `partially_resolved`; interview evidence still useful.

Remaining risk:

Avoid turning the interview into a list of AI tool names; explain the problem each tool removed.

---

# Loop Summary

Iterations run: `1`

Stop reason:

- all three lenses accept the revised **target adapter direction**,
- no unsupported claim was added,
- remaining fatal source gap belongs to the full protected resume, not this public adapter,
- the next meaningful work is target-specific full-resume integration and repository validation, not more headline polishing.

Unsupported claims added: `false`
