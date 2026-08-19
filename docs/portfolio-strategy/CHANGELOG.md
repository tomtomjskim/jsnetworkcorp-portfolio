# Portfolio Strategy Changelog

## PS-v1.4.1 — 2026-08-19

### Changed

- Ran representative visual QA on the `PS-v1.4.0` main-page Mermaid models after the case-study redesign was merged.
- Detected that several 7–8-node horizontal flows would be too wide for a normal GitHub Markdown content column and risk shrinking labels excessively.
- Kept the four-case information architecture and evidence semantics unchanged.
- Compressed the hiring-facing diagrams to roughly 3–5 decision-level nodes while leaving detailed state, troubleshooting and validation flows in the deep dives.
- Simplified the 30-second portfolio map by removing a redundant second signal row already represented by the case table.
- Recorded the visual-layout rationale in `versions/PS-v1.4.1.md`.

### Rationale

The main portfolio should help a reviewer decide **which case to open next**. It should not reproduce every technical step already available in a deep dive.

```text
main portfolio
→ compact decision model

deep dive
→ full technical model
```

This is a readability/layout patch, not a new evidence or positioning strategy.

## PS-v1.4.0 — 2026-08-19

### Changed

- Corrected an artifact-boundary defect: the AX portfolio had become too similar to an expanded text resume even though the target positioning itself was valid.
- Redefined `PORTFOLIO-AX.md` as a **case-study-first visual evidence index**.
- Added four dedicated deep dives: developer internal tooling, commerce change-impact analysis, MES requirement modeling, and practical AI automation/verification.
- Promoted the existing sanitized **Local LLM i18n workflow** as Case 04's primary practical AX evidence instead of letting abstract agent/workflow projects lead the AI story.
- Case 04 demonstrates explicit responsibility separation: Local LLM for natural-language translation drafts, deterministic code for PHP/JSON conversion, and human validation under CPU/small-model constraints.
- Kept `codex-workflow-skills`, `stackforge-atlas`, and `harness-kit` as supporting public engineering/verification evidence rather than pretending those R&D repositories are employer production AX work.
- Added GitHub-native Mermaid architecture/state/decision/verification diagrams where they explain actual system boundaries.
- Added a formal portfolio gate requiring `Problem → Constraints → Decision → Visual Model → Implementation Boundary → Verification/Actual Use → Limitation → Evidence`.
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

For AX targets:

```text
actual useful automation
> AI tool-name familiarity
```

The Local LLM i18n case is therefore shown before abstract workflow tooling. It records repeated real use but deliberately does not invent productivity, translation-accuracy, cost-saving, or organization-adoption metrics.

## PS-v1.3.0 — 2026-08-17

### Changed

- Added the first real target-role adapter for a backend-centered Internal Tools / AX / development-automation role family.
- Kept the recommended header as `Backend Engineer | 업무시스템 · 내부도구 · AX/개발자동화` after independent recruiter, hiring-manager, and future-teammate review.
- Added `content/resume/variants/ax-internal-tools-ko.md` and registered it as a public-safe target resume variant.
- Added `PORTFOLIO-AX.md` as a target-specific GitHub portfolio projection without exposing company/internal-referral details.
- Added a requirement-to-evidence matrix for internal tools, backoffice, API, web breadth, AI workflow, and development/operations automation.
- Changed public repository order for this target to `harness-kit → codex-workflow-skills → stackforge-atlas` while keeping general-backend ordering unchanged.
- Tightened the target summary after adversarial review: repeated friction/problem now appears before AI/process terminology; frontend is framed as admin/workflow UI breadth rather than specialist positioning.

### Rationale

The first real application target confirmed the value of the company-targeted portfolio model: stronger matching comes from **selecting and reordering existing evidence**, not from inventing company-specific experience.

## PS-v1.2.0 — 2026-08-17

### Changed

- Deferred the proposed `php-commerce-ops-reference` repository from required work to an optional response to a demonstrated target-role gap.
- Shifted investment from creating a new sample project to strengthening actual Commerce/Fulfillment and MES career case studies.
- Defined a clearer evidence split: sanitized career cases answer historical experience questions; public repositories answer current engineering/verification questions.

## PS-v1.1.0 — 2026-08-17

### Changed

- Added recruiter-first P0 claim blocks with ready/conditional separation.
- Re-ran the public repository shortlist through an evidence-oriented adversarial review.
- Promoted `stackforge-atlas` to primary public engineering artifact.
- Kept `harness-kit` featured with a clean build/test verification gate.
- Made `codex-workflow-skills` target-dependent.
- Demoted weak/unverified repository candidates.

## PS-v1.0.0 — 2026-08-17

### Changed

- Reordered delivery priority to application text → GitHub portfolio → web → optional PDF → protected interview material.
- Promoted GitHub Markdown and public repositories to the primary technical portfolio surface.
- Defined repository cards around problem, constraints, decision, verification, limitations, and URL.

## PS-v0.9.0 — 2026-08-17

### Initial proposal

- Evidence-first canonical case-study model.
- Five portfolio views and roughly parallel resume/cover-letter/PDF/web/interview projections.
- Strong emphasis on web information architecture before the primary submission surface had stabilized.
