# Portfolio Reference Architecture

Status: reference
Strategy: PS-v1.0.0
Updated: 2026-08-17
Audience: portfolio authoring, review, and rendering agents

## Goal

Treat the portfolio as an evidence index for engineering capability, not as a gallery of technologies or screenshots.

Evidence priority:

```text
Evidence > Problem Solving > Impact > Architecture > Readability > Design > Animation
```

Delivery priority:

```text
P0  Application / self-introduction text
P1  GitHub portfolio
P2  Web portfolio
P3  PDF visual supplement
P4  Protected interview deep dive
```

Strategy revisions are versioned separately under `docs/portfolio-strategy/` so later research can compare approaches without rewriting old decisions.

## Canonical Evidence Model

All outputs derive from the same verified case/claim data.

```text
Source material
  │
  ├─ sanitized career notes
  ├─ verified resume claims
  ├─ public repository evidence
  └─ private evidence pointers outside public repo
  │
  ▼
Canonical Case Study Record
  ├─ problem / context
  ├─ constraints
  ├─ responsibility
  ├─ investigation
  ├─ decisions / trade-offs
  ├─ implementation
  ├─ verification
  ├─ impact
  ├─ evidence metadata
  ├─ maturity
  └─ redaction policy
  │
  ├─ P0 application text
  ├─ P1 GitHub portfolio
  ├─ P2 web visual projection
  ├─ P3 PDF supplement
  └─ P4 protected interview material
```

Facts, role scope, metrics, technology claims, and maturity must remain consistent across outputs.

## P0 — Application / Self-Introduction Text

The first artifact must be readable quickly without opening external material.

Recommended narrative unit:

```text
target requirement
→ relevant problem/context
→ personal action or judgment
→ verified effect / lesson
→ relevance to target role
```

Use concise paragraphs and bullets. Technology names support the story; they are not the story.

## P1 — GitHub Portfolio

GitHub is the primary technical portfolio surface.

A GitHub-native portfolio should contain:

```text
Positioning
→ Career Case Studies
→ Selected Public Engineering Repositories
→ Engineering Capability Map
→ Problem-Solving / Verification Pipeline
→ AI-Assisted Engineering Validation
→ Repository URLs / Evidence Links
→ Resume / optional Web links
```

### Career vs Public R&D Boundary

Keep two categories explicit:

- **Career Case Studies**: sanitized descriptions of professional/production experience.
- **Public Engineering Artifacts**: public repositories demonstrating engineering approaches, tooling, experiments, or reusable frameworks.

A public R&D repository must not be described as production career experience unless that relationship is independently verified.

### Featured Repository Card

Each featured repository should answer:

1. What problem motivated it?
2. Which constraints or failure modes make the problem non-trivial?
3. What does the repository implement or propose?
4. Which engineering decision/boundary is distinctive?
5. How is it verified?
6. What limitation remains?
7. Why should a reviewer open it?
8. What is the direct repository URL?

Feature 3–5 repositories. Secondary repositories belong in a compact supporting index or are omitted.

See:

- `PORTFOLIO.md`
- `docs/templates/github-portfolio-template.md`
- `docs/prompts/github-portfolio-builder.md`
- `docs/github-portfolio/repository-candidate-matrix.md`

## P2 — Web Portfolio

The website is a restrained visual projection of the same evidence, not a second factual source.

Target public IA:

```text
/
├─ Home
│  ├─ Positioning
│  ├─ Selected Impact
│  ├─ Experience Snapshot
│  └─ Selected Cases / Repositories
├─ Projects
│  └─ Projects/[slug]
├─ Engineering
│  ├─ Architecture
│  ├─ Database
│  ├─ Performance
│  ├─ Reliability / Operations
│  ├─ Security / Safety Boundaries
│  ├─ Infrastructure / Delivery
│  ├─ External Integration
│  └─ AI-assisted Engineering
├─ Decisions
│  └─ Decisions/[slug]
├─ AI Agents / LLM
├─ Screens & Wireframes
├─ Writing
├─ Resume
└─ Releases
```

The site should make GitHub/case evidence easier to navigate using architecture diagrams, state/sequence flows, before/after processes, and safe wireframes. Avoid visual complexity that does not improve comprehension.

## P3 — PDF Portfolio

PDF is optional and target-dependent. It is a concise visual briefing attachment, not a website screenshot or independent source of claims.

Prefer 2–4 strongest cases and diagrams already supported by canonical evidence.

## P4 — Protected Interview Deep Dive

Protected material may contain deeper troubleshooting chronology, claim-to-evidence maps, or sensitive technical discussion that should not be committed to the public repository.

## Five Complementary Portfolio Views

The original five-view model remains valid as an indexing system.

### 1. Evidence-First Backend Portfolio

```text
Positioning
→ Selected Impact
→ Experience
→ Selected Case Studies
→ Engineering
→ Decisions
→ Public Evidence
→ Resume
```

### 2. System Engineering Dossier

Re-index canonical cases by:

- Architecture
- Database / Data Modeling
- Performance
- Reliability / Operations
- Security / Safety Boundaries
- Infrastructure / Delivery
- External API / Integration
- AI-assisted Engineering

### 3. Resume + Deep Dive Hybrid

Use concise application/resume content as the entry point and link only the strongest GitHub/case evidence for deeper review.

### 4. Case Study + Engineering Wiki

Keep reusable collections without duplicating factual claims:

```text
projects/
decisions/
engineering/
writing/
resume/
targets/
```

### 5. Company-Targeted Portfolio

Change selection, ordering, and semantically equivalent vocabulary only.

Example target profiles:

```text
backend-commerce
  PHP / MySQL / commerce domain / integration / operations

platform-reliability
  architecture / reliability / AWS / delivery / incident response

ai-native-backend
  backend fundamentals / data boundaries / agent workflow / verification
```

A target profile may reorder application bullets, featured repositories, web cards, and PDF pages. It must never create unsupported experience.

## Case Study Reading Layers

### 15-second scan

- one-line problem
- role / responsibility
- maturity
- 2–4 capabilities
- strongest verified effect

### 2-minute review

- context
- constraints
- approach
- architecture/process visual
- key decision
- verification
- impact

### Technical deep dive

- investigation
- alternatives / trade-offs
- implementation
- failure modes
- operational boundaries
- retrospective
- evidence

## Decision Records

A useful decision record answers:

1. What decision was required?
2. Which constraints mattered?
3. Which alternatives were genuinely considered?
4. Why was one option selected?
5. Which downside was accepted?
6. How was it verified?
7. What would cause reconsideration?

A decision without a real trade-off is not useful portfolio evidence.

## Visual Evidence Rules

Prefer:

- sanitized architecture diagrams
- sequence/state diagrams
- before/after flow diagrams
- verified performance charts
- safe wireframes
- direct public repository links

Avoid:

- raw production screenshots
- private/customer/order/admin data
- invented charts or metrics
- technology-logo walls
- skill percentage bars
- animation that delays reading

## Quality Gates

Before any claim enters an application or portfolio surface:

- factual scope is verified,
- personal responsibility is explicit,
- metric has a source or is removed,
- implementation/prototype/proposal maturity is labeled,
- private information is redacted,
- alternatives are not invented retrospectively,
- AI wording does not upgrade participation into ownership,
- company targeting changes emphasis rather than facts.

## Implementation Phases

### Phase 1 — Strategy/reference architecture

- version strategy snapshots,
- define canonical schema/output contracts,
- establish P0–P4 priorities,
- create GitHub portfolio template and prompts.

### Phase 2 — P0 application text normalization

- normalize strongest career cases,
- produce concise reusable claim/narrative blocks,
- run recruiter/hiring-manager/adversarial review.

### Phase 3 — P1 GitHub portfolio

- audit public repositories,
- select 3–5 featured repositories,
- improve README/problem/evidence/limitations,
- build submission-ready `PORTFOLIO.md`,
- balance recent AI R&D with backend career depth.

### Phase 4 — P2 web projection

- implement only the visual/navigation components that improve comprehension,
- reuse canonical and GitHub portfolio data,
- link directly to evidence.

### Phase 5 — P3/P4 optional outputs

- create target-specific PDF when useful,
- maintain protected interview deep dives outside the public deployment boundary.

## Current Strategy Reference

- `docs/portfolio-strategy/versions/PS-v1.0.0.md`
- prior snapshot: `docs/portfolio-strategy/versions/PS-v0.9.0.md`
