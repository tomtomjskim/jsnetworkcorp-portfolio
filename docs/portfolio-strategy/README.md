# Portfolio Strategy Versioning

This directory versions portfolio strategy separately from public content/site milestones.

## Namespace

```text
PF-*  = public portfolio content / implementation milestone
PS-*  = portfolio strategy, information model, output priority, review policy
```

Old strategy snapshots are never rewritten when the strategy changes.

## Version Rules

- **MAJOR** — output priority, core architecture, or hiring-positioning model changes materially.
- **MINOR** — adds or materially changes a review gate, targeting method, evidence policy, or artifact semantics.
- **PATCH** — wording, examples, links, or clarifications only.

---

# Current Strategy — `PS-v1.4.0`

Base delivery priority remains:

```text
P0    Application / self-introduction text
P1    GitHub case-study portfolio + sanitized career/work cases
P1.5  Public repository quality / verification
P2    Web visual projection
P3    Optional visual PDF projection
P4    Protected interview deep dive

OPTIONAL
New PHP/MySQL reference implementation only after a real gap trigger
```

## Artifact Semantics

```text
Resume
= what / when / role / concise responsibility and result

Application / Self-introduction
= why the verified experience fits this target

Portfolio
= how the engineer identifies, models, decides, implements and verifies
```

A portfolio that becomes chronology/skill-list heavy fails the current strategy even when every sentence is factually correct.

---

# Portfolio Gate

Every promoted portfolio case requires:

1. **Problem**
2. **Context / Constraints**
3. **Investigation / Model**
4. **Decision / Trade-off**
5. **Visual Model**
6. **Implementation Boundary**
7. **Verification / Actual-use Evidence**
8. **Limitation / Unproven Scope**
9. **Evidence Link**

The main portfolio page must allow a reviewer to answer quickly:

> What kinds of problems does this engineer solve, and which case should I inspect next?

For an AX target, another gate applies:

> If stronger actual-work automation evidence exists, do not let AI-tool/repository vocabulary outrank it.

## Visual Rule

Use GitHub Mermaid only where a diagram explains a real boundary:

- architecture flow,
- state transition,
- decision tree,
- failure loop,
- verification sequence.

The main page uses one primary diagram per case; secondary diagrams belong in deep dives.

---

# Evidence Separation

```text
sanitized career/work case
= historical or actual-work problem-solving evidence

public R&D/tooling repository
= current engineering/verification evidence

new reference implementation
= optional current-code evidence when a target explicitly needs it

target adapter
= selection/order/vocabulary layer over existing evidence
```

These evidence types may support the same capability narrative but must never be presented as equivalent historical proof.

---

# Current AX / Internal Tools Case Set

```text
Case 01  harness-kit
         Developer Internal Tooling

Case 02  Commerce / Logistics
         State-heavy Change Impact

Case 03  Manufacturing MES
         Field Request → System Rules

Case 04  Practical AI Automation
         Local LLM + Deterministic Code + Human Validation
```

Case 04 is anchored by the sanitized Local LLM i18n workflow rather than only abstract agent workflow contracts.

```text
repetitive translation/copy/code-entry work
→ Local LLM for linguistic draft
→ deterministic PHP/JSON conversion
→ human validation under CPU/small-model constraints
→ repeated actual use
```

No productivity, translation-accuracy, cost-saving, or organization-wide adoption metric is inferred from that usage.

Entry:

- `PORTFOLIO-AX.md`

Deep dives:

- `docs/portfolio-ax/cases/01-harness-kit-internal-tooling.md`
- `docs/portfolio-ax/cases/02-commerce-change-impact.md`
- `docs/portfolio-ax/cases/03-mes-requirement-modeling.md`
- `docs/portfolio-ax/cases/04-ai-assisted-verification.md`

Previous text-heavy target projection is preserved as:

- `docs/portfolio-ax/versions/PS-v1.3.0-text-heavy-baseline.md`

---

# Target Adaptation Rules

Target adaptation may change:

```text
headline
summary emphasis
case selection/order
public repository order
semantically equivalent vocabulary
```

It must not change:

```text
historical facts
responsibility
claim status
metrics
implementation maturity
career/work-vs-R&D classification
public/private boundary
```

For the Internal Tools / AX family the role position remains:

> **Backend Engineer | 업무시스템 · 내부도구 · AX/개발자동화**

The exact company/referral source remains private.

---

# Current Core Artifacts

## P0 — Application / Resume Projection

- generic application candidate: `docs/application-text/claim-blocks-v2-candidate.md`
- AX resume variant: `content/resume/variants/ax-internal-tools-ko.md`
- claim authority: `docs/resume-data/public-claim-bank.md`

## P1 — Technical Portfolio

- general backend: `PORTFOLIO.md`
- Internal Tools / AX: `PORTFOLIO-AX.md`
- AX case index: `docs/portfolio-ax/README.md`

Career/work sources:

- `content/projects/commerce-fulfillment-operations.md`
- `content/projects/manufacturing-mes-business-systems.md`
- `content/projects/local-llm-i18n-workflow.md`
- `content/projects/ai-assisted-development-workflow.md`

Public repository evidence:

- `harness-kit`
- `codex-workflow-skills`
- `stackforge-atlas`

Repository review:

- `docs/github-portfolio/repository-candidate-matrix.md`
- `docs/github-portfolio/featured-repo-audit-2026-08-17.md`

Review artifacts:

- `docs/reviews/ax-internal-tools-multi-lens-review-2026-08-17.md`
- `docs/reviews/ps-v1.4-ax-portfolio-case-study-review.md`

Deferred option:

- `docs/github-portfolio/backend-evidence-gap-plan.md`
- Issue #13 remains closed/not-planned until a concrete trigger appears

---

# PDF / Web Rule

Future PDF and web outputs project the **case-study model**, not resume text.

```text
GitHub case
→ visual architecture/state/decision model
→ verification / bounded actual-use evidence
→ repository links
→ restrained PDF/Web projection
```

A resume exported as a designed PDF is still a resume, not a portfolio.

---

# Research Workflow

When proposing a new strategy version:

1. preserve the prior version/surface,
2. record the trigger,
3. state what was wrong with the previous assumption,
4. define new pass/fail gates,
5. migrate only the affected artifacts,
6. run adversarial review,
7. validate links/build/rendering,
8. record actual application/interview feedback when available.

## Version History

- `PS-v0.9.0` — initial multi-output evidence-first proposal
- `PS-v1.0.0` — application-first / GitHub-first
- `PS-v1.1.0` — evidence-ranked repository promotion
- `PS-v1.2.0` — career-case-first; PHP reference deferred
- `PS-v1.3.0` — first real Internal Tools / AX target adapter
- `PS-v1.4.0` — resume/application/portfolio boundary + visual case studies + practical AX evidence priority

See `CHANGELOG.md` and `versions/` for preserved snapshots.
