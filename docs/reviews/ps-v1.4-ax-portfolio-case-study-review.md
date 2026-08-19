# PS-v1.4.0 AX Portfolio — Adversarial Review

Date: 2026-08-19
Scope: `PORTFOLIO-AX.md` + `docs/portfolio-ax/cases/*`

## Review Question

This review does **not** ask whether the content is a good resume.

It asks:

> Does this artifact behave like a technical portfolio that lets a reviewer inspect problem solving, decisions and evidence?

## Portfolio-Only Test

A useful adversarial test is:

> If company names, employment dates, contact details and education are removed, does the artifact still make sense and remain valuable?

PS-v1.4.0 result: **yes**.

The main page is understandable through four engineering cases and their evidence without relying on chronology.

---

# Reviewer A — Recruiter / First Screen

Decision: **PASS**

### What works

1. The first screen identifies four distinct cases rather than repeating career history.
2. The case matrix states problem, decision and evidence type in one scan.
3. The link to the resume is explicitly labeled `facts only`, reinforcing artifact separation.

### Initial concern

The first draft placed multiple diagrams inside several case summaries. That made the main page visually dense and risked recreating the “put everything in one document” failure mode.

### Applied fix

- main page reduced to **one primary diagram per case**,
- secondary state/troubleshooting/failure diagrams moved to deep dives,
- the 30-second map remains the entry visualization.

### Remaining risk

The page is still a technical artifact and will be slower than a resume for non-technical recruiters. That is acceptable because the resume remains a separate surface.

---

# Reviewer B — Data / Engineering Hiring Manager

Decision: **PASS**

### What works

1. Case 01 shows an actual engineering decision and a public verification history rather than only a repository description.
2. Commerce/MES cases expose operating models without pretending that proprietary production architecture is public.
3. Evidence strength is explicitly different by case: public code/CI versus sanitized career evidence.
4. Every promoted case includes a limitation boundary.

### Material concern checked

Could the diagrams for Commerce/MES be mistaken for exact employer production architecture?

Current answer: **low risk**, because they are framed as change-impact / requirement / troubleshooting models rather than topology diagrams, and the pages explicitly state public-sanitized boundaries.

### Remaining risk

Commerce/MES cannot provide the same public-code verification level as harness-kit. Do not compensate by adding invented metrics, screenshots, or architecture claims.

---

# Reviewer C — Future Teammate / Code Reviewer

Decision: **PASS**

### What works

1. The deep dives contain inspectable decision points rather than skill claims.
2. `harness-kit` shows a failure in the first validation assumption and a changed quality gate, which is more informative than a static “36 tests pass” claim.
3. The AI case separates deterministic automation, model output, validation and human acceptance.
4. The MES and commerce cases show how hidden dependencies are located before changing code.

### Applied readability fix

Mermaid labels on the main page use `<br/>` rather than escaped newlines to reduce GitHub rendering ambiguity.

### Remaining risk

GitHub Mermaid rendering itself is not exercised by the Next.js build. The final PR must therefore receive a GitHub-render visual check in addition to repository CI.

---

# Cross-Lens Adjudication

```text
Recruiter / first screen      PASS
Hiring manager / evidence     PASS
Future teammate / depth       PASS
```

## Artifact classification

```text
Resume-like chronology density     LOW
Case-study density                 HIGH
Visual explanation                 HIGH
Public/private evidence boundary   CLEAR
Repository-link usefulness         HIGH
Unsupported metric pressure        CONTROLLED
```

## Required characteristics now present

- concrete problem per case,
- constraints / trade-offs,
- explicit decision,
- architecture/state/decision visualization,
- implementation boundary,
- verification/evidence,
- known limitation,
- deep-dive link.

## Current Decision

`PS-v1.4.0` **passes the portfolio/resume separation gate**.

Do not add more career chronology to `PORTFOLIO-AX.md`.

Future additions must enter as a new case or as evidence inside an existing case, not as generic resume bullets.

## Remaining Validation

1. repository CI,
2. internal link check through GitHub rendering,
3. Mermaid visual render check after PR creation,
4. if stable, evaluate a 6–8 page PDF projection from the same four cases.
