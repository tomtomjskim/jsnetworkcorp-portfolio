# Portfolio Strategy Changelog

## PS-v1.4.0 — 2026-08-19

### Changed

- Corrected an artifact-boundary defect: the AX portfolio had become too similar to an expanded text resume even though the target positioning itself was valid.
- Redefined `PORTFOLIO-AX.md` as a **case-study-first visual evidence index**.
- Added four dedicated deep dives: developer internal tooling, commerce change-impact analysis, MES requirement modeling, and AI-assisted verification.
- Added GitHub-native Mermaid architecture/state/decision/verification diagrams where they explain actual system boundaries.
- Added a formal portfolio gate requiring `Problem → Constraints → Decision → Visual Model → Implementation Boundary → Verification → Limitation → Evidence`.
- Removed chronology and exhaustive technology enumeration from the main AX portfolio narrative.
- Preserved the exact PS-v1.3.0 AX portfolio as a text-heavy baseline for future comparison.
- Defined future PDF/web outputs as projections of case studies rather than re-rendered resume text.

### Rationale

The resume, application text, and portfolio answer different hiring questions:

```text
resume       → what / when / role
application  → why this target
portfolio    → how the engineer thinks, decides, implements and verifies
```

PS-v1.3.0 solved target relevance but did not enforce that distinction strongly enough. PS-v1.4.0 treats the portfolio as a technical evidence index and uses progressive disclosure: the main page can be scanned quickly, while each case has its own inspectable deep dive.

## PS-v1.3.0 — 2026-08-17

### Changed

- Added the first real target-role adapter for a backend-centered Internal Tools / AX / development-automation role family.
- Kept the recommended header as `Backend Engineer | 업무시스템 · 내부도구 · AX/개발자동화` after independent recruiter, hiring-manager, and future-teammate review.
- Added `content/resume/variants/ax-internal-tools-ko.md` and registered it as a public-safe target resume variant.
- Added `PORTFOLIO-AX.md` as a target-specific GitHub portfolio projection without exposing company/internal-referral details.
- Added a requirement-to-evidence matrix for internal tools, backoffice, API, web breadth, AI workflow, and development/operations automation.
- Changed public repository order for this target to `harness-kit → codex-workflow-skills → stackforge-atlas` while keeping general-backend ordering unchanged.
- Tightened the target summary after adversarial review: repeated friction/problem now appears before AI/process terminology; frontend is framed as admin/workflow UI breadth rather than specialist positioning.
- Preserved a source-gap gate: the public target adapter is not a standalone final resume until merged into an authoritative protected chronology.

### Rationale

The first real application target confirms the value of the company-targeted portfolio model proposed earlier: stronger matching comes from **selecting and reordering existing evidence**, not from inventing company-specific experience.

For this target family, Internal Tools and AX are primary requirements, so recent public tooling should become easier to discover without replacing the candidate's long-term PHP/MySQL business-system identity.

The target adapter therefore uses this reading order:

```text
backend/business-system career
→ internal tooling
→ AI-assisted workflow / automation
→ API/admin/web breadth
→ public engineering verification
```

The exact referral and company context stay private; only generalized role requirements enter the public repository.

## PS-v1.2.0 — 2026-08-17

### Changed

- Deferred the proposed `php-commerce-ops-reference` repository from required work to an optional response to a demonstrated target-role gap.
- Closed Issue #13 as `not_planned / deferred` while preserving the design for later reuse.
- Shifted the next investment from creating a new sample project to strengthening actual Commerce/Fulfillment and MES career case studies.
- Defined a clearer evidence split: sanitized career cases answer historical experience questions; public repositories answer current engineering/verification questions.
- Removed the future PHP reference repository from the primary capability narrative.
- Kept StackForge Atlas as the primary public engineering artifact and retained target-dependent supporting repositories.

### Rationale

A newly created PHP reference can prove current coding skill but cannot strengthen historical production experience by itself. Building it now would add maintenance cost and may look like a job-search sample project. The portfolio already has stronger current engineering evidence; the larger weakness is that real career problem-solving is still described too generically.

The v1.2 strategy therefore prioritizes authenticity and reading efficiency:

```text
real career case → concise application claim → GitHub case study
current engineering method → verified public repository
```

Reopen the PHP reference plan only when an actual job description, code-review requirement, or repeated application feedback makes the missing public PHP implementation a material risk.

## PS-v1.1.0 — 2026-08-17

### Changed

- Added recruiter-first P0 claim blocks with ready/conditional separation and concise target-role recipes.
- Re-ran the public repository shortlist through an evidence-oriented adversarial review rather than treating README quality as sufficient.
- Promoted `stackforge-atlas` to the primary public engineering artifact.
- Kept `harness-kit` as featured but added a clean build/test verification gate.
- Made `codex-workflow-skills` target-dependent: featured for AI-native/platform roles, supporting for ordinary backend roles.
- Demoted `agent-orchestra-monitor` from featured to hold/supporting until test entry points and version alignment are repaired.
- Rejected `StoreShoppingMall-PHP` as a flagship candidate in its current small-snippet form.
- Added a plan for a new sanitized PHP/commerce operations reference implementation to address the mismatch between long-term backend career depth and current public GitHub evidence.

### Rationale

A repository should be promoted by problem clarity, implementation depth, verification, explicit limitations, and target-role relevance. Technology-name relevance or a polished README cannot compensate for weak evidence.

PS-v1.1.0 also separates two things that were previously easy to blur: a sanitized production-career case describes verified historical experience, while a newly built public reference repository demonstrates current engineering capability without pretending to be proprietary production source.

## PS-v1.0.0 — 2026-08-17

### Changed

- Reordered delivery priority to:
  1. application/self-introduction text,
  2. GitHub portfolio,
  3. web portfolio,
  4. PDF supplement,
  5. protected interview material.
- Promoted GitHub Markdown and public repositories from supporting evidence to the primary technical portfolio surface.
- Defined GitHub repository cards around problem, constraints, engineering decision, verification, repository strengths, limitations, and URL.
- Kept the website as a restrained visual projection of the same evidence rather than the primary source.
- Added a separate `PS-*` strategy version line so future research can compare approaches without overwriting earlier thinking.

### Rationale

A GitHub-first technical portfolio is cheaper to maintain, directly exposes public engineering artifacts, and allows reviewers to move from a concise narrative to repository evidence without depending on a custom visual site. The web surface remains useful for presentation but should not duplicate or outrank the evidence source.

## PS-v0.9.0 — 2026-08-17

### Initial proposal

- Evidence-first canonical case-study model.
- Five portfolio views: evidence-first backend, engineering dossier, resume/deep-dive hybrid, case-study/wiki, and company-targeted view.
- Resume, cover letter, PDF, web, and interview outputs treated as roughly parallel projections.
- Strong emphasis on web case-study information architecture and visual PDF blueprint.

### Limitation discovered

The model did not clearly prioritize the cheapest and strongest submission surface. It risked spending disproportionate effort on website/PDF rendering before application text and public repository narratives were strong enough.
