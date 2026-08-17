# Portfolio Strategy Changelog

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
