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

A second test was added after practical Local LLM evidence was surfaced:

> If all AI-tool names were removed, would Case 04 still demonstrate a useful automation decision?

Result: **yes**. The case still shows repeated i18n friction → Local LLM translation draft → deterministic file conversion → human validation under CPU/small-model constraints.

---

# Reviewer A — Recruiter / First Screen

Decision: **PASS**

### What works

1. The first screen identifies four distinct cases rather than repeating career history.
2. The case matrix states problem, decision and evidence type in one scan.
3. The link to the resume is explicitly labeled `facts only`, reinforcing artifact separation.
4. Case 04 now has a concrete work story instead of relying only on agent/tooling vocabulary.

### Initial concern

The first draft placed multiple diagrams inside several case summaries. That made the main page visually dense and risked recreating the “put everything in one document” failure mode.

### Applied fix

- main page reduced to **one primary diagram per case**,
- secondary state/troubleshooting/failure diagrams moved to deep dives,
- the 30-second map remains the entry visualization,
- Case 04 primary diagram changed from an abstract validation pipeline to the Local LLM i18n work flow.

### Remaining risk

The page is still a technical artifact and will be slower than a resume for non-technical recruiters. That is acceptable because the resume remains a separate surface.

Do not add model lists, prompt examples, or test-count blocks to the first screen.

---

# Reviewer B — Data / Engineering Hiring Manager

Decision: **PASS — stronger after practical AX evidence**

### What works

1. Case 01 shows an actual engineering decision and a public verification history rather than only a repository description.
2. Commerce/MES cases expose operating models without pretending that proprietary production architecture is public.
3. Evidence strength is explicitly different by case: public code/CI, sanitized historical operating model, and actual sanitized automation usage.
4. Every promoted case includes a limitation boundary.
5. Local LLM i18n demonstrates a particularly relevant AX decision: **AI for ambiguous natural-language transformation, deterministic code for structured file conversion, human review where model quality is bounded.**

### Why Local LLM i18n improves the portfolio

Without this case, the AX story can be interpreted as:

> recently created AI/agent workflow repositories.

With the practical case, the story becomes:

```text
real repetitive developer work
→ identify which step is non-deterministic
→ use Local LLM only there
→ keep structured transformations deterministic
→ retain human review because infrastructure/model quality is limited
→ actual repeated use
```

That is closer to the target role's expected `업무도구 개발 / 업무 자동화 / AI 활용 체계` than tool-name familiarity alone.

### Material concern checked

Could the Local LLM example be inflated into production AI platform ownership?

Current answer: **controlled** because the case explicitly records:

- no dedicated GPU,
- small-model limitations,
- human validation,
- no productivity/accuracy/cost metrics,
- no organization-wide adoption claim,
- private translation-server source remains undisclosed.

Could the Commerce/MES diagrams be mistaken for exact employer production architecture?

Current answer: **low risk**, because they are framed as change-impact / requirement / troubleshooting models rather than topology diagrams, and the pages explicitly state public-sanitized boundaries.

### Remaining risk

Commerce/MES cannot provide the same public-code verification level as harness-kit. Do not compensate by adding invented metrics, screenshots, or architecture claims.

---

# Reviewer C — Future Teammate / Code Reviewer

Decision: **PASS**

### What works

1. The deep dives contain inspectable decision points rather than skill claims.
2. `harness-kit` shows a failure in the first validation assumption and a changed quality gate, which is more informative than a static “36 tests pass” claim.
3. The practical AI case demonstrates responsibility separation between LLM, deterministic code and human validation.
4. The broader AI workflow still separates model output, validation and human acceptance.
5. The MES and commerce cases show how hidden dependencies are located before changing code.

### Applied readability fix

Mermaid labels on the main page use `<br/>` rather than escaped newlines to reduce GitHub rendering ambiguity.

### Remaining risk

GitHub Mermaid rendering itself is not exercised by the Next.js build. The final PR should therefore receive a GitHub-render visual check in addition to repository CI.

---

# Cross-Lens Adjudication

```text
Recruiter / first screen      PASS
Hiring manager / evidence     PASS — strengthened by Local LLM practical case
Future teammate / depth       PASS
```

## Artifact classification

```text
Resume-like chronology density     LOW
Case-study density                 HIGH
Visual explanation                 HIGH
Practical AX evidence              HIGHER than initial draft
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
- verification or bounded actual-use evidence,
- known limitation,
- deep-dive link.

## Current Decision

`PS-v1.4.0` **passes the portfolio/resume separation gate**.

The practical Local LLM workflow should remain inside Case 04 rather than becoming a fifth top-level case. Four cases keep the main scan compact, while the Local LLM work gives Case 04 a stronger real-work anchor.

Do not add more career chronology to `PORTFOLIO-AX.md`.

Future additions must enter as a new case or as evidence inside an existing case, not as generic resume bullets.

## Remaining Validation

1. repository CI on final head,
2. internal link check,
3. Mermaid visual render check where available,
4. if stable, evaluate a 6–8 page PDF projection from the same four cases.
