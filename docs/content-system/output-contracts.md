# Portfolio Multi-Output Contracts

Status: reference
Updated: 2026-08-17

## Objective

Generate resume text, cover-letter text, a visual PDF portfolio, a web portfolio, and protected interview material from the same canonical case-study records.

The outputs may differ in selection, length, vocabulary, and visual density. They must not diverge on factual scope, personal responsibility, metrics, implementation maturity, or verification status.

## Output Matrix

| Output | Primary reader | Read time | Primary job | Detail level |
|---|---|---:|---|---|
| Resume | recruiter / hiring manager | 30–90 sec | establish fit | compressed |
| Cover letter / application text | recruiter / manager | 1–3 min | connect experience to role | narrative |
| PDF portfolio | hiring manager / interviewer | 3–8 min | create visual technical overview | selective |
| Web portfolio | engineer / interviewer | variable | provide evidence and deep dive | layered |
| Protected interview kit | interviewer / candidate | 10+ min | support technical verification | deep |

## 1. Resume Projection

### Structure

```text
Positioning
Experience
Selected impact bullets
Selected projects
Core engineering capabilities
Public links
```

### Bullet Contract

Each bullet should contain as much of this chain as can be supported without becoming unreadable:

```text
problem/context → personal action/judgment → verified effect
```

Rules:

- prefer 1–2 strong bullets per major case,
- avoid technology-name padding,
- retain domain terms when they demonstrate relevant experience,
- do not repeat the same achievement in three sections,
- metrics require a verified source,
- use conservative role verbs when ownership is not confirmed.

## 2. Cover-Letter / Application Text Projection

This output is prose, not a technical specification.

Recommended paragraph unit:

```text
Target-company requirement
→ directly relevant past problem
→ decision/action taken
→ result or lesson
→ transfer to target role
```

Selection rules:

- choose 2–3 experiences that cover the job's highest-value requirements,
- explain why the experience matters rather than listing the full stack,
- use exact evidence-backed responsibility language,
- mention trade-offs only when they demonstrate judgment relevant to the target role,
- exclude weak cases merely because their technology keywords match.

## 3. PDF Portfolio Projection

The PDF is a visual briefing document. It should not be a screenshot of the website or a long-form README exported to PDF.

### Recommended 8–12 Page Blueprint

```text
01 Cover
02 Positioning + engineering profile
03 Career / domain map
04 Selected impact and capability map
05–06 Case Study A
07–08 Case Study B
09 Case Study C or cross-project engineering dossier
10 Decision / reliability / architecture highlights
11 AI-assisted engineering and validation workflow (when relevant)
12 Links / contact / evidence index
```

For a shorter version, compress to 6–8 pages and use only 2–3 cases.

### Case Spread

A two-page case spread may use:

```text
Left page
- problem
- context / constraints
- responsibility
- architecture or flow diagram

Right page
- decision / implementation
- verification
- impact
- evidence links / QR
```

### Visual Priority

Prefer:

1. system boundary diagram,
2. state / sequence flow,
3. before-after process comparison,
4. verified performance chart,
5. sanitized screen/wireframe,
6. compact decision matrix.

Avoid:

- decorative charts without data,
- excessive technology logos,
- tiny code screenshots,
- full-page screenshots with unreadable UI,
- confidential production captures.

### PDF Design System

Use a restrained visual system:

- strong typographic hierarchy,
- generous whitespace,
- one consistent grid,
- compact labels for status / role / technology,
- diagrams with readable captions,
- minimal animation-dependent concepts,
- print-safe contrast,
- no critical information conveyed only by color.

## 4. Web Portfolio Projection

### Public Route Contract

```text
/
/projects
/projects/[slug]
/engineering
/engineering/[capability]
/decisions
/decisions/[slug]
/ai-agents
/screens
/writing
/resume
/releases
```

### Home Page Contract

The home page should answer, without opening another page:

1. What kind of engineer is this?
2. Which domains and systems have they worked on?
3. What are the strongest engineering signals?
4. Which 3–5 cases should I open?
5. Where can I verify public work?

Recommended sections:

```text
Hero / Positioning
Selected Impact
Experience Snapshot
Selected Case Studies
Engineering Capability Map
Public Work / GitHub
Resume CTA
```

### Case Page Contract

#### 15-second scan

- title
- one-line problem
- role
- maturity
- capability tags
- strongest verified impact

#### 2-minute review

- context
- constraints
- approach
- architecture visual
- key decision
- verification
- impact

#### deep dive

- investigation
- alternatives
- implementation details
- operational boundaries
- failure modes
- retrospective
- public evidence

## 5. Engineering Dossier Projection

Instead of duplicating project text, aggregate canonical fields across cases.

Example `Database` page:

```text
Positioning statement
Relevant cases
Schema/data-model decisions
Query/performance investigations
Consistency / idempotency patterns
Operational lessons
Evidence links
```

Example `Reliability` page:

```text
Failure modes encountered
Retry / idempotency / batch semantics
Observability / verification
Deployment safety
Incident learning
Relevant decisions and cases
```

## 6. Company-Targeted Projection

A target profile is a selection/weighting layer.

Example:

```yaml
target_id: company-role-2026
role: Backend Engineer
priorities:
  backend-engineering: 5
  database: 5
  reliability: 4
  cloud: 3
  ai-assisted-engineering: 2
preferred_cases:
  - commerce-operations
  - database-performance
resume_order:
  - database
  - commerce
  - reliability
web_home_order:
  - commerce-operations
  - database-performance
  - ai-assisted-workflow
pdf_case_limit: 3
```

Allowed transformations:

- reorder cases,
- select relevant bullets,
- use job-description vocabulary when semantically equivalent,
- shorten or expand explanation,
- emphasize a verified capability.

Forbidden transformations:

- add a technology that was not used,
- upgrade responsibility,
- invent metrics,
- imply production use for a prototype,
- hide a material limitation that changes the meaning of a claim.

## 7. Protected Interview Projection

The protected layer may contain deeper evidence unavailable publicly, subject to confidentiality and security rules.

Potential content:

- sanitized-but-detailed architecture discussion,
- claim-to-evidence mapping,
- deeper technical Q&A,
- design trade-offs,
- troubleshooting chronology,
- code excerpts that are safe and authorized,
- private evidence references where permitted.

This layer is not generated into the public static export.

## Cross-Output Consistency Gate

Before publishing or submitting a bundle, compare all active outputs on:

| Check | Required |
|---|---|
| project dates/scopes agree | yes |
| role verbs agree | yes |
| technology claims agree | yes |
| metrics agree with verified source | yes |
| prototype/implemented status agrees | yes |
| public/private boundary respected | yes |
| target adaptation changed emphasis only | yes |

A mismatch is treated as a content defect, not a cosmetic issue.
