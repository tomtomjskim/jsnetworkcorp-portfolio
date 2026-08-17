# Portfolio Multi-Output Contracts

Status: reference
Strategy: PS-v1.0.0
Updated: 2026-08-17

## Objective

Generate multiple hiring artifacts from the same canonical case-study records without creating factual forks.

Delivery priority:

```text
P0  Application / self-introduction text
P1  GitHub portfolio
P2  Web portfolio
P3  PDF visual supplement
P4  Protected interview material
```

Outputs may differ in selection, length, vocabulary, and visual density. They must not diverge on factual scope, personal responsibility, metrics, technologies, implementation maturity, or verification status.

## Output Matrix

| Priority | Output | Primary reader | Primary job | Detail |
|---|---|---|---|---|
| P0 | application / self-introduction text | recruiter / hiring manager | establish fit quickly | concise |
| P1 | GitHub portfolio | hiring manager / engineer | show technical evidence and public work | layered Markdown + repositories |
| P2 | web portfolio | engineer / interviewer | improve navigation and visual comprehension | visual/layered |
| P3 | PDF supplement | recruiter / interviewer | optional compact visual briefing | selective |
| P4 | protected interview kit | interviewer / candidate | support deep verification | deep/private |

## P0 — Application / Self-Introduction Text

This is the first artifact to optimize.

### Resume / application bullet

```text
problem or context → personal action/judgment → verified effect
```

Rules:

- 1–2 strong claims per major case,
- one core idea per bullet/paragraph,
- avoid technology-name padding,
- retain domain terms when relevant to the role,
- use conservative verbs when ownership is not confirmed,
- numerical claims require a traceable source,
- do not repeat the same achievement across several sections.

### Cover-letter / self-introduction paragraph

```text
target requirement
→ relevant past problem
→ action / engineering judgment
→ verified result or lesson
→ relevance to target role
```

Selection rules:

- use 2–3 experiences that cover the job's highest-value requirements,
- explain why the experience matters,
- mention trade-offs only when they demonstrate relevant judgment,
- link to GitHub evidence only when the repository strengthens the claim,
- do not turn the text into a shortened README.

## P1 — GitHub Portfolio

GitHub is the default technical portfolio surface.

### Portfolio Index Contract

A submission-ready `PORTFOLIO.md` or profile portfolio README should contain:

```text
Positioning
Career Case Studies
Selected Public Engineering Repositories
Engineering Capability Map
Problem-Solving / Verification Pipeline
AI-Assisted Engineering Validation
Supporting Repository Index
Resume / optional Web links
```

### Featured Repository Contract

Feature 3–5 repositories. Each card contains:

```text
repository + one-line value proposition
Problem
Approach
Why it is worth opening (max 3 points)
Verification
Current limitation / maturity
Direct repository URL
```

### Career / R&D Separation

- sanitized production/professional experience belongs under Career Case Studies,
- public personal tooling/research belongs under Public Engineering Artifacts,
- do not imply the latter is production career experience unless verified.

### Repository Promotion Gate

A repository can be featured only when:

- problem definition is clear,
- README claims match observable implementation/evidence,
- architecture or core mechanism is understandable,
- maturity and limitations are explicit,
- validation/test/build path is available where appropriate,
- repository is safe to advertise publicly,
- it materially supports target positioning.

A public repository that fails this gate is SUPPORTING, HOLD, or EXCLUDE.

## P2 — Web Portfolio

The website is a visual/navigation renderer for existing evidence, not a new factual narrative.

### Home Page

Must answer:

1. what kind of engineer,
2. which domains/systems,
3. strongest career engineering signals,
4. which cases/repositories to open,
5. where public evidence can be inspected.

Recommended sections:

```text
Positioning
Selected Impact
Experience Snapshot
Selected Cases
Featured GitHub Repositories
Engineering Capability Map
Resume CTA
```

### Case Page Layers

#### 15-second scan

- title,
- one-line problem,
- role,
- maturity,
- capabilities,
- strongest verified effect.

#### 2-minute review

- context,
- constraints,
- approach,
- architecture/process visual,
- key decision,
- verification,
- impact.

#### deep dive

- investigation,
- alternatives/trade-offs,
- implementation,
- operational boundaries/failure modes,
- retrospective,
- evidence links.

### Design Direction

Prefer restrained editorial design, typography, whitespace, architecture/state/sequence diagrams, and direct repository links.

Avoid skill bars, logo walls, decorative metrics, and expensive motion/3D that does not increase technical comprehension.

## P3 — PDF Visual Supplement

PDF is optional and target-dependent. It is not required before P0/P1 are strong.

Recommended 6–10 pages:

```text
01 Cover / positioning
02 Career/domain map
03 Capability + selected impact
04–05 Case A
06–07 Case B
08 Public GitHub engineering artifacts
09 Decision / reliability highlight
10 Links / evidence index
```

Use only visuals with a communication purpose:

1. system boundary,
2. state/sequence flow,
3. before/after process,
4. verified metric chart,
5. decision matrix,
6. sanitized wireframe.

If underlying numeric data is unavailable, do not create a chart.

## P4 — Protected Interview Material

Potential private/protected content:

- deeper claim-to-evidence mapping,
- authorized code excerpts,
- detailed troubleshooting chronology,
- sanitized internal architecture discussion,
- technical Q&A,
- unresolved role-confirm items.

This layer is not part of the public static export or GitHub portfolio.

## Engineering Dossier Projection

Do not duplicate project prose. Re-index canonical case fields by capability.

Example capability axes:

- backend/domain engineering,
- database/data modeling,
- performance,
- reliability/operations,
- security/safety boundaries,
- infrastructure/delivery,
- external integration,
- AI-assisted engineering.

## Company-Targeted Projection

A target profile changes selection/weighting only.

Example:

```yaml
target_id: company-role-2026
role: Backend Engineer
priority_capabilities:
  backend-engineering: high
  database: high
  reliability: high
  cloud: medium
  ai-assisted-engineering: low
application_case_order:
  - commerce-operations
  - manufacturing-systems
github_featured_repositories:
  - stackforge-atlas
  - harness-kit
web_home_order:
  - commerce-operations
  - stackforge-atlas
pdf_case_limit: 2
```

Allowed:

- reorder cases/repositories,
- select relevant claims,
- use semantically equivalent job-description terms,
- shorten/expand explanation.

Forbidden:

- add unused technology,
- upgrade responsibility,
- invent metrics/scale,
- imply production use for prototypes/R&D,
- hide a limitation that materially changes a claim.

## Cross-Output Consistency Gate

| Check | Required |
|---|---|
| dates/scopes agree | yes |
| role verbs agree | yes |
| technology claims agree | yes |
| metrics have verified sources | yes |
| implementation/prototype status agrees | yes |
| career vs R&D classification agrees | yes |
| public/private boundary respected | yes |
| target adaptation changes emphasis only | yes |

A mismatch is a content defect, not a cosmetic issue.
