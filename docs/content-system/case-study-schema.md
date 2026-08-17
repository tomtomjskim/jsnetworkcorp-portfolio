# Canonical Case Study Schema

Status: reference
Strategy: PS-v1.0.0
Updated: 2026-08-17

## Purpose

This is the SSOT contract for career/project narratives. Application text, GitHub portfolio, web, PDF, and protected interview material must be projections of these records rather than independent factual sources.

## Claim Status

- `verified`: supported by a public-safe source or explicitly confirmed work history.
- `derived`: conservative summary derived from verified facts; source chain is known.
- `role-confirm`: project/system context is plausible but personal ownership is not yet confirmed.
- `unverified`: must not appear in application outputs.
- `proposal`: redesign/future direction; never present as completed work.

## Visibility

- `public`: safe to publish.
- `public-sanitized`: publish after generalization/redaction.
- `protected`: interview/private surface only.
- `private`: evidence/source pointer only; never render publicly.

## Work Classification

Every case or repository connection must declare one:

- `career`: professional/production experience.
- `public-rnd`: public personal research/tooling/experiment.
- `portfolio-meta`: portfolio/governance artifact.

Do not infer that `public-rnd` is `career` evidence.

## Canonical Record Template

```yaml
id: project-slug
version: PF-vNext
status: draft
visibility: public-sanitized
classification: career
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
    Public-safe system boundary.
  starting_state: |
    Existing condition before the work.

problem:
  statement: |
    Concrete engineering problem.
  symptoms:
    - "Observed symptom or operational friction"
  why_it_mattered:
    - "User/operator/system consequence"

constraints:
  technical:
    - "Runtime, legacy, data, compatibility, availability constraint"
  operational:
    - "Deployment, support, migration, business-hours constraint"
  security:
    - "PII, credential, write-boundary, network constraint"
  organizational:
    - "Team/process constraint if public-safe"

responsibility:
  scope: |
    Exact personal responsibility without inflating team work.
  owned:
    - claim: "Personally owned work"
      status: verified
  contributed:
    - claim: "Contributed work"
      status: verified
  excluded:
    - "What must not be implied as ownership"

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
        consideration: actual # actual | retrospective
      - option: "B"
        upside: "..."
        downside: "..."
        consideration: actual
    selected: "A"
    rationale: |
      Why this option fit the constraints.
    accepted_tradeoffs:
      - "Downside knowingly accepted"
    verification: |
      How the choice was validated.
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
      description: "How runtime/rollout behavior was checked"
      status: verified
  failure_modes_checked:
    - "Duplicate processing"
    - "Partial failure"

impact:
  qualitative:
    - claim: "Operational or engineering effect"
      status: verified
  quantitative:
    - metric: "latency_p95"
      before: null
      after: null
      unit: ms
      source: null
      status: unverified
  note: "No source => no number in final output."

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

public_repositories:
  - repository: "owner/repo"
    relationship: supporting-rnd # direct-career-evidence | supporting-rnd | methodology | unrelated
    url: "https://github.com/owner/repo"
    feature_status: supporting # featured | supporting | hold | exclude
    reason_to_open: |
      Why this repository strengthens the portfolio.
    verified_strengths:
      - "Observable repository strength"
    claim_risks:
      - "README/implementation claim needing review"

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
  application:
    priority: high
    max_bullets: 2
    narrative_themes:
      - problem-solving
      - reliability
  github:
    career_case_priority: high
    repository_links:
      - "owner/repo"
    public_rnd_separation_required: true
  web:
    priority: medium
    reading_layers:
      - scan
      - review
      - deep-dive
  pdf:
    priority: optional
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
  repository_priority:
    backend-commerce:
      - owner/backend-repo
    ai-native-backend:
      - owner/agent-tooling
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

## Minimum Viable Career Case

A career case is not ready for P0/P1 promotion unless it has:

1. a concrete problem,
2. explicit personal responsibility,
3. at least one meaningful constraint,
4. an implementation/decision actually performed,
5. a verification method,
6. supported impact wording,
7. redaction review.

## Public Repository Promotion

A public repository is not promoted to FEATURED by this schema alone.

Require:

- clear problem statement,
- observable implementation matching description,
- maturity/limitation disclosure,
- validation/build/test path when appropriate,
- no sensitive exposure,
- relevance to the candidate's target positioning.

README marketing language that exceeds evidence must be narrowed before portfolio reuse.

## Derived Output Rules

### P0 Application Text

Use concise `problem + action/judgment + verified effect`. Optimize for reading speed.

### P1 GitHub

Use career cases plus 3–5 selected public repositories. Keep professional experience and public R&D explicitly separated. Include direct repository URLs and a reason to open each one.

### P2 Web

Preserve layered depth and visually render the same canonical facts. Link back to direct GitHub evidence.

### P3 PDF

Generate only when useful for the target application. Keep 2–4 strongest cases and evidence-backed visuals.

### P4 Interview

Use deeper protected evidence and unresolved role-confirm items outside public GitHub/static deployment.

## Anti-Fabrication Rules

- Never infer personal ownership from repository existence.
- Never convert `participated` into `designed`, `led`, or `owned` without evidence.
- Never invent numerical impact.
- Never invent historical alternatives; label retrospective comparison explicitly.
- Never present proposal/prototype/R&D as production implementation.
- Never treat a public AI/tool repository as career production evidence without verification.
- When evidence conflicts, choose the narrower claim and flag the conflict.
