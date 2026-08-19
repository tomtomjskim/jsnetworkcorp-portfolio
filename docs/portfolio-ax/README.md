# AX / Internal Tools Portfolio — Case Study Index

> Strategy: `PS-v1.4.1`  
> Surface: GitHub-first case-study portfolio  
> Status: current candidate on `agent/portfolio-ax-visual-qa-v141`

## Why this directory exists

`PORTFOLIO-AX.md` is a **portfolio**, not an expanded resume.

The portfolio must answer:

```text
What problem existed?
→ What constraints mattered?
→ How was the problem decomposed?
→ What decision was made?
→ How was it implemented?
→ How was it verified?
→ What remains unproven?
→ Where can a reviewer inspect evidence?
```

Chronology, contact information, education, and exhaustive technology lists belong in the resume. They are intentionally secondary here.

## Portfolio Gate

A case fails the portfolio gate when most of its content is:

- company chronology,
- role/technology enumeration,
- generic capability claims,
- long prose without an inspectable model,
- repository links without explaining why they matter.

A case passes when it contains all of the following:

1. **Problem** — a concrete engineering or operational friction.
2. **Context / Constraints** — why the obvious solution is not enough.
3. **Decision** — what was selected and what was intentionally not selected.
4. **Visual Model** — architecture, state, sequence, or decision diagram.
5. **Implementation Boundary** — what is actually demonstrated.
6. **Verification** — test, CI, failure accounting, rollout feedback, or source-bounded evidence.
7. **Limitation** — what the evidence does not prove.
8. **Evidence Link** — public repository or sanitized case source.

## Selected Cases

| Case | Main question it answers | Evidence type |
|---|---|---|
| [01. harness-kit](cases/01-harness-kit-internal-tooling.md) | Can repeated developer friction be turned into a maintainable internal tool? | public repository + merged-main CI |
| [02. Commerce / Logistics](cases/02-commerce-change-impact.md) | How are changes made safely in a state-heavy operational system? | sanitized career case + ready claim bank |
| [03. Manufacturing MES](cases/03-mes-requirement-modeling.md) | How is an ambiguous field request converted into explicit system rules? | sanitized career case + source-bounded model |
| [04. Practical AI Automation](cases/04-ai-assisted-verification.md) | Which part should use AI, which part deterministic code, and where does human validation stay? | actual Local LLM work case + public workflow verification |

## Case Grammar

Every deep dive uses the same reading order.

```mermaid
flowchart LR
    P[Problem] --> C[Constraints]
    C --> I[Investigation / Model]
    I --> D[Decision]
    D --> M[Implementation]
    M --> V[Verification]
    V --> L[Limits]
    L --> E[Evidence]
```

This common grammar is intentional: interviewers should not have to relearn how to read each project.

## Main vs Deep Dive Visual Rule

`PS-v1.4.1` adds a visual-layout rule after representative rendering showed that long horizontal diagrams become too small inside the GitHub content column.

```text
PORTFOLIO-AX.md
→ compact 3–5-node decision model

deep dive
→ full technical model
```

This directory keeps the detailed state, troubleshooting, architecture and validation flows that were intentionally removed from the main scan page.

## Versioning

The previous AX portfolio is preserved under [`versions/PS-v1.3.0-text-heavy-baseline.md`](versions/PS-v1.3.0-text-heavy-baseline.md).

### `PS-v1.3.0`

- correct target positioning,
- correct evidence ordering,
- but too much resume-like prose and capability enumeration.

### `PS-v1.4.0`

- case-study-first,
- diagrams before long explanation,
- verification and limitation attached to every promoted case,
- actual Local LLM automation promoted as practical AX evidence.

### `PS-v1.4.1`

- same evidence and case structure,
- compact hiring-facing diagrams after visual QA,
- full detail preserved in these deep dives.

## Canonical Entry

The hiring-facing entry remains:

- [`/PORTFOLIO-AX.md`](../../PORTFOLIO-AX.md)
