# Portfolio Reference Architecture

Status: reference
Updated: 2026-08-17
Audience: portfolio authoring, review, and rendering agents

## Goal

Treat the portfolio as an evidence index for engineering capability, not as a gallery of technologies or screenshots.

Priority order:

```text
Evidence > Problem Solving > Impact > Architecture > Readability > Design > Animation
```

The public site remains sanitized. Private claim-to-evidence maps, raw logs, production identifiers, customer/order/admin data, private repositories, and raw AI transcripts stay outside this repository.

## Five Portfolio Views

The same canonical content may be rendered through five complementary views. These are not five independent sources of truth.

### 1. Evidence-First Backend Portfolio

Primary hiring-manager view.

```text
/
├─ Positioning
├─ Selected Impact
├─ Experience
├─ Selected Case Studies
├─ Engineering
├─ Decisions
├─ Writing
├─ Public Evidence
└─ Resume
```

Each case follows:

```text
Context
→ Problem
→ Constraints
→ Responsibility
→ Investigation
→ Alternatives
→ Decision
→ Implementation
→ Verification
→ Impact
→ Retrospective
→ Public Evidence
```

### 2. System Engineering Dossier

Re-index cases by capability rather than project name.

Recommended capability axes:

- Architecture
- Database / Data Modeling
- Performance
- Reliability / Operations
- Security / Safety Boundaries
- Infrastructure / Delivery
- External API / Integration
- Automation / AI-assisted Engineering

One case may appear under multiple axes. The underlying claim must remain identical.

### 3. Resume + Deep Dive Hybrid

The landing page acts like a fast-scanning resume and sends technical readers into case-study depth.

```text
Profile
→ Experience
→ Selected Impact
→ Selected Projects
→ Core Engineering Capabilities
→ GitHub / Public Work
→ Deep Dive links
```

The recruiter should understand positioning and scope without opening a project page.

### 4. Case Study + Engineering Wiki

Use structured content to accumulate reusable engineering knowledge.

Recommended logical collections:

```text
projects/
decisions/
engineering/
writing/
resume/
targets/
```

Projects explain what happened. Decisions explain why a choice was made. Engineering pages aggregate patterns across projects.

### 5. Company-Targeted Portfolio

Do not rewrite factual claims for each company. Change ordering, emphasis, and selection only.

Example target profiles:

```text
backend-commerce
  PHP / MySQL / commerce domain / external integration / operations

platform-reliability
  architecture / reliability / AWS / CI-CD / incident response

ai-native-backend
  backend fundamentals / data boundaries / agent workflow / validation
```

A target profile may define:

- priority capabilities
- preferred case studies
- excluded or low-priority cases
- vocabulary aliases matching the job description
- resume bullet ordering
- web landing-page ordering
- PDF page ordering

It must never create unsupported experience.

## Canonical Content Flow

```text
Source material
  │
  ├─ public repository evidence
  ├─ sanitized project notes
  ├─ verified resume claims
  └─ private evidence pointers (outside public repo)
  │
  ▼
Canonical Case Study Record
  │
  ├─ claims
  ├─ decisions
  ├─ evidence metadata
  ├─ verification status
  ├─ impact
  ├─ capability tags
  └─ redaction policy
  │
  ├───────────────┬────────────────┬────────────────┐
  ▼               ▼                ▼                ▼
Resume         Cover Letter      Web Case        PDF Portfolio
bullets        narrative         Study           visual narrative
  │               │                │                │
  └───────────────┴───────────────┬┴────────────────┘
                                  ▼
                           Interview Deep Dive
                           (protected surface)
```

## Public Information Architecture

Target IA after migration:

```text
/
├─ Home
│  ├─ Positioning
│  ├─ Selected Impact
│  ├─ Experience Snapshot
│  └─ Selected Cases
├─ Projects
│  └─ Projects/[slug]
├─ Engineering
│  ├─ Architecture
│  ├─ Database
│  ├─ Reliability
│  ├─ Security
│  ├─ Infrastructure
│  └─ AI-assisted Engineering
├─ Decisions
│  └─ Decisions/[slug]
├─ AI Agents / LLM
├─ Screens & Wireframes
├─ Writing
├─ Resume
└─ Releases
```

The existing `Screens & Wireframes` route is supporting evidence, not the portfolio's primary navigation model.

## Case Study Reading Layers

A case study should support three reading depths.

### Layer A — 15-second scan

- one-line problem
- role / responsibility
- 2–4 capability tags
- strongest verified impact
- status / maturity

### Layer B — 2-minute review

- context
- constraints
- approach
- architecture visual
- key decision
- verification
- impact

### Layer C — technical deep dive

- investigation
- alternatives rejected
- trade-offs
- failure modes
- operational boundaries
- tests / verification
- retrospective
- evidence pointers

## Decision Records

A decision record should answer:

1. What decision was required?
2. Which constraints mattered?
3. Which alternatives were considered?
4. Why was one option selected?
5. Which downside was accepted?
6. How was the decision verified?
7. What would cause reconsideration?

Do not create an ADR simply to display architecture vocabulary. A decision without a real trade-off is not useful evidence.

## Visual Evidence Rules

Prefer:

- sanitized architecture diagrams
- sequence diagrams
- state-transition diagrams
- before/after flow diagrams
- performance charts with verified source data
- safe wireframes
- public GitHub links

Avoid:

- raw production screenshots
- dashboards containing customer/order/admin data
- decorative charts with invented numbers
- technology-logo walls
- skill percentage bars
- animation that delays reading

## Multi-Output Principle

Do not maintain separate factual narratives for resume, cover letter, PDF, and website.

Maintain one canonical case record and derive output-specific projections:

```text
Canonical fact
→ concise resume claim
→ contextual cover-letter narrative
→ visual PDF story
→ web deep dive
→ interview evidence package
```

Only length, ordering, vocabulary, and visual density may change. Facts, responsibility, metrics, and verification status must remain consistent.

## Quality Gates

Before a claim is allowed into an application output:

- factual scope is verified
- personal responsibility is explicit
- metric has a source or is removed
- private information is redacted
- implementation versus proposal is labeled
- alternatives are not invented retrospectively
- AI-generated wording does not upgrade participation into ownership
- target-company adaptation changes emphasis, not facts

## Implementation Phases

### Phase 1 — Reference architecture

- add this architecture
- add canonical case-study schema
- add output contracts
- add prompt pack

### Phase 2 — Normalize existing cases

- map existing project documents into the canonical schema
- identify missing evidence and responsibility fields
- create decision records only where supported

### Phase 3 — Renderers

- web case-study components
- target-profile filtering
- printable/PDF layout
- resume/cover-letter text projection

### Phase 4 — Adversarial review

Review every application bundle for:

- unsupported claims
- vague impact
- technology-name padding
- duplicated narratives
- confidential information
- missing trade-offs
- visual noise

### Phase 5 — Company-specific build

Generate a target profile from a job description, select the strongest supported cases, and produce resume, cover-letter, PDF, web-ordering, and interview-prep views from the same canonical data.
