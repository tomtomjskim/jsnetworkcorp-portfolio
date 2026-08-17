# PS-v1.2 Career Case Adversarial Review

Date: 2026-08-17
Target: `PORTFOLIO.md`, Commerce/Fulfillment case, Manufacturing MES case, P0 claim-block v2 candidate
Strategy: `PS-v1.2.0`
Result: **provisional pass with source-confirm gate**

## Review Goal

Challenge the portfolio from three hiring risks:

1. **recruiter risk** — the first reading layer is too technical or AI-heavy,
2. **hiring-manager risk** — career cases are generic claims without a concrete problem-solving model,
3. **evidence risk** — generated/protected source details are accidentally promoted into public-ready historical claims.

## Sources Used for Review

Public-side authority:

- `docs/resume-data/public-claim-bank.md`
- existing sanitized project pages
- public repository/CI evidence

Protected supporting source:

- protected resume master candidate and project-orientation notes in the private Personal Wiki

Important authority limitation:

The protected resume master is currently a **generated candidate with `needs-human-source-check`**, not reviewed submission authority. It may guide draft structure, but it cannot by itself promote a public claim.

---

# Findings

## F1 — HIGH — Ready and selective MES claims were mixed

### Finding

The first PS-v1.2 rewrite placed legacy PHP module/readability improvement under `Public-Ready Scope` even though the public claim bank classifies the legacy-improvement statement as selective rather than default-ready.

### Risk

A reader could treat selective evidence as submission-safe fact.

### Resolution

Fixed.

The MES case now separates:

```text
Ready
- PHP MES/business-system development and maintenance
- manufacturing domain experience

Selective / source-confirm
- legacy structure improvement
- detailed rollout/support chronology
- leadership/customer-count scope
```

`PORTFOLIO.md` uses the same separation.

Disposition: **resolved**

---

## F2 — HIGH — Detailed career problem-solving patterns come from a non-reviewed protected synthesis

### Finding

Concrete patterns such as:

- tracing DB/admin/display/batch/external boundaries for a state mismatch,
- decomposing field requests into input/query/state/statistics/permission rules,
- separating application defects from PC/network/printer/account issues,

are materially stronger than the existing public-ready claim bank.

The protected source supports these narratives, but that source is still generated and requires human/source confirmation.

### Risk

Publishing them as definitive historical fact would bypass the claim promotion process.

### Resolution

The detailed patterns are retained because they create useful interview-oriented structure, but they are now explicitly labeled:

- `draft/source-confirm candidate`,
- not a canonical claim-bank promotion,
- not submission-safe until protected source/role confirmation.

The first public-ready bullet set remains conservative.

Disposition: **mitigated; residual source-confirm gate remains**

---

## F3 — MEDIUM — AI/public tooling could distort the core career identity

### Finding

The strongest recent public repositories are AI/agent/tooling-heavy.

### Risk

A reviewer could infer that recent agent tooling is the candidate's main or longest-running engineering identity.

### Resolution

The new `PORTFOLIO.md` reading order is:

```text
PHP/MySQL backend positioning
→ Commerce career case
→ MES career case
→ supporting AI-assisted work method
→ selected public engineering repositories
```

StackForge Atlas leads the public repository section because it has the broadest backend/system/failure evidence.

Codex Workflow Skills remains target-dependent.

Disposition: **resolved structurally**

---

## F4 — MEDIUM — Proposed PHP reference repository had weak ROI

### Finding

`PS-v1.1.0` treated a new `php-commerce-ops-reference` as the next major evidence project.

### Risk

- maintenance cost,
- job-search sample-project appearance,
- false impression that new reference code proves historical production work,
- opportunity cost versus improving actual career evidence.

### Resolution

Deferred under `PS-v1.2.0`.

Issue #13 is closed as `not_planned`. The design is preserved only as an optional response to a real target-role/public-code gap.

Disposition: **resolved**

---

## F5 — MEDIUM — Portfolio can become too long for the first hiring pass

### Finding

The full repository contains deep architecture, output-contract, prompt, strategy, and review documents.

### Risk

A recruiter or hiring manager should not have to understand the portfolio system itself before understanding the candidate.

### Resolution

`PORTFOLIO.md` is treated as the hiring index. Strategy/prompt/schema documents remain authoring infrastructure and should not be required reading.

P0 text is separately compressed in `claim-blocks-v2-candidate.md`.

Residual recommendation:

When an actual job description is supplied, generate a target-specific submission projection rather than sending every strategy document.

Disposition: **mitigated**

---

# Privacy / Redaction Check

The PS-v1.2 career rewrites do not intentionally copy:

- private repository URLs,
- customer/factory names,
- real customer/order/payment/shipping/production records,
- credentials,
- internal hosts/endpoints,
- raw logs/screenshots,
- protected contact/personnel data.

The case studies use generalized business-domain terms.

Disposition: **pass at static review level**

A final human redaction check is still required before broad public submission.

---

# Quantitative Claim Check

Career case studies add no new percentages, scale, revenue, traffic, latency, availability, or productivity claims.

Public repository validation counts/statuses are kept separate from career evidence and must remain traceable to public reports/CI.

Disposition: **pass**

---

# Recruiter Reading Check

Within the first section, the reader can identify:

- backend/business-system role,
- PHP/MySQL base,
- MES + commerce/logistics domain experience,
- operational/state impact-analysis positioning.

AI appears after the core career identity.

Disposition: **pass**

---

# Hiring-Manager Reading Check

The two career cases now provide distinct interview hooks:

### Commerce

```text
state mismatch
→ data/admin/batch/external impact analysis
```

### MES

```text
field request
→ system conditions
→ rollout/environment feedback
```

These are stronger than a stack or feature list, while the ready/source-confirm boundary remains visible.

Disposition: **provisional pass**

---

# Residual Risks

1. The authoritative protected resume is not yet reviewed; detailed case narratives cannot be marked submission-ready.
2. `harness-kit` still needs a fresh current-HEAD lint/test/build reproduction before its verification caveat is removed.
3. A generic portfolio cannot prove target-company fit; job-specific case/repository ordering is still required.
4. Public strategy docs are useful for authoring/research but should not distract from the hiring-facing index.

---

# Decision

`PS-v1.2.0` is accepted as the current **strategy**, but the rewritten career cases remain `draft` until human/source confirmation.

Next best validation is not another generic portfolio project. It is:

```text
real target job description
→ select P0 blocks
→ select 2 career cases
→ select 1–3 public repositories
→ run multi-lens hiring review
→ produce submission-safe projection
```

No website or PDF work should preempt that test.
