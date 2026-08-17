# Canonical Case Study Schema

Status: reference
Updated: 2026-08-17

## Purpose

This schema is the SSOT contract for project narratives. Resume bullets, cover-letter paragraphs, web case studies, PDF pages, and interview material must be projections of this record rather than independently rewritten factual sources.

## Claim Status

Every material claim should use one of these states:

- `verified`: supported by a public-safe source or explicitly confirmed work history.
- `derived`: a conservative summary derived from verified facts; source chain must be known.
- `role-confirm`: technically plausible and present in project context, but personal ownership is not yet confirmed.
- `unverified`: must not appear in application outputs.
- `proposal`: architecture, redesign, or future direction; never present as completed work.

## Visibility

- `public`: safe for the public portfolio.
- `public-sanitized`: publish only after redaction/generalization.
- `protected`: interview-only/private surface.
- `private`: source/evidence pointer only; never render publicly.

## Canonical Record Template

```yaml
id: project-slug
version: PF-vNext
status: draft
visibility: public-sanitized
maturity: implemented # implemented | partial | prototype | planned | archived

identity:
  title: "Public-safe project title"
  one_liner: "One sentence describing the engineering problem and contribution."
  domain:
    - commerce
    - logistics
  period: "YYYY–YYYY or sanitized range"
  role_label: "Backend Engineer"

positioning:
  primary_capabilities:
    - backend-engineering
    - database
    - reliability
  secondary_capabilities:
    - external-integration
    - security
  target_profiles:
    - backend-commerce
    - platform-reliability

context:
  business_context: |
    What the service/system needed to accomplish.
  system_context: |
    Public-safe description of the system boundary.
  starting_state: |
    Existing condition before the work.

problem:
  statement: |
    Concrete engineering problem.
  symptoms:
    - "Observed symptom or operational friction"
  why_it_mattered:
    - "User / operator / system consequence"

constraints:
  technical:
    - "Runtime, legacy, data, compatibility, availability constraint"
  operational:
    - "Deployment, support, data migration, business-hours constraint"
  security:
    - "PII, credential, write-boundary, network constraint"
  organizational:
    - "Team/process constraint if public-safe"

responsibility:
  scope: |
    Exact personal responsibility without inflating team work into ownership.
  owned:
    - claim: "What was personally owned"
      status: verified
  contributed:
    - claim: "What was contributed to"
      status: verified
  excluded:
    - "What should not be implied as ownership"

investigation:
  signals:
    - "Logs / query plans / code path / user report / metrics"
  hypotheses:
    - "Hypothesis examined"
  findings:
    - claim: "Finding"
      status: verified
      evidence_refs:
        - public-evidence-id

decisions:
  - id: decision-id
    question: "What choice had to be made?"
    constraints:
      - "Constraint"
    alternatives:
      - option: "A"
        upside: "..."
        downside: "..."
      - option: "B"
        upside: "..."
        downside: "..."
    selected: "A"
    rationale: |
      Why the option fit the actual constraints.
    accepted_tradeoffs:
      - "Downside knowingly accepted"
    verification: |
      How the decision was validated.
    reconsider_when:
      - "Condition that would change the decision"
    status: verified

implementation:
  summary: |
    Public-safe implementation narrative.
  components:
    - name: "Component / module"
      change: "What changed"
      claim_status: verified
  technologies:
    - PHP
    - MySQL
  safety_boundaries:
    - "Idempotency / masking / fail-closed / preview-confirm etc."

verification:
  methods:
    - type: test
      description: "What was verified"
      status: verified
    - type: operational-check
      description: "How rollout/runtime behavior was checked"
      status: verified
  failure_modes_checked:
    - "Duplicate processing"
    - "Partial failure"

impact:
  qualitative:
    - claim: "Operational or engineering impact"
      status: verified
  quantitative:
    - metric: "latency_p95"
      before: null
      after: null
      unit: ms
      source: null
      status: unverified
  note: "If a metric source is unavailable, remove the number and keep only a verified qualitative outcome."

retrospective:
  worked:
    - "What held up well"
  limitations:
    - "Remaining limitation"
  learned:
    - "Engineering lesson"
  next_if_revisited:
    - "What would be reconsidered today"

evidence:
  public:
    - id: public-evidence-id
      type: github # github | diagram | screenshot | article | demo | release
      label: "Public-safe evidence label"
      url: null
      visibility: public
  protected:
    - id: protected-evidence-id
      type: internal-reference
      label: "Pointer only; details outside public repo"
      visibility: protected

visuals:
  architecture:
    - id: architecture-overview
      type: diagram
      status: planned
      purpose: "Explain system boundary and changed area"
  process:
    - id: state-flow
      type: state-diagram
      status: planned
      purpose: "Show operational state transition"
  comparison:
    - id: before-after
      type: before-after
      status: planned
      purpose: "Show verified change without invented metrics"

output_hints:
  resume:
    priority: high
    max_bullets: 2
  cover_letter:
    themes:
      - problem-solving
      - reliability
  web:
    reading_layers:
      - scan
      - review
      - deep-dive
  pdf:
    preferred_visuals:
      - architecture-overview
      - before-after

targeting:
  keywords:
    backend-commerce:
      - PHP
      - MySQL
      - external integration
      - operations
    platform-reliability:
      - reliability
      - failure modes
      - deployment safety
  exclusions:
    - "Unsupported framework/version claim"

redaction:
  forbidden:
    - credentials
    - customer-data
    - order-data
    - private-repository-url
    - production-endpoint
  replacements:
    - source: "private service name"
      public: "commerce operations platform"
```

## Minimum Viable Case

A case is not ready for portfolio promotion unless it has:

1. a concrete problem,
2. explicit personal responsibility,
3. at least one meaningful constraint,
4. an implementation or decision actually performed,
5. a verification method,
6. a supported impact statement,
7. redaction review.

Architecture diagrams and metrics improve a case, but they cannot compensate for missing responsibility or verification.

## Derived Output Rules

### Resume

Use only:

```text
problem + action + verified effect
```

Keep implementation details only when they help distinguish the engineering capability.

### Cover Letter

Use:

```text
target requirement
→ relevant context
→ engineering judgment/action
→ verified outcome
→ why it transfers to the target role
```

Do not turn the cover letter into a shortened project README.

### Website

Preserve the full reading layers and evidence links. Lead with the problem and impact, not the technology list.

### PDF

Select only 3–5 strongest cases. Prefer diagrams, decisions, and before/after flows. Keep dense implementation details for the web/protected interview surface.

## Anti-Fabrication Rules

- Never infer a personal ownership claim from repository existence alone.
- Never convert `participated` into `designed`, `led`, or `owned` without evidence.
- Never invent numerical impact to improve storytelling.
- Never invent alternatives after the fact unless the choice was genuinely considered or is clearly labeled retrospective analysis.
- Never present a proposal/prototype as production implementation.
- When evidence conflicts, choose the narrower claim and flag the conflict for review.
