# PS-v1.4.0 — Portfolio Is Not a Resume

Date: 2026-08-19
Status: proposed current strategy snapshot
Parent: `PS-v1.3.0`

## Trigger

The first real target adapter produced a correct role position and evidence order, but the resulting `PORTFOLIO-AX.md` still behaved too much like an expanded text resume.

The defect was not factual accuracy. The defect was **artifact semantics**:

```text
Resume
= who / when / role / responsibilities / concise achievements

Application / self-introduction
= why this candidate fits this target

Portfolio
= inspectable case studies showing problem solving and evidence
```

PS-v1.4.0 therefore separates those outputs structurally rather than relying on wording alone.

A second refinement came from reviewing the AX evidence itself: an actual Local LLM i18n workflow is stronger target evidence than describing only abstract AI-agent workflow contracts. Practical work evidence therefore leads Case 04, while public workflow repositories remain supporting verification evidence.

---

## Core Decision

`PORTFOLIO-AX.md` becomes a **visual case-study index**, not a second resume.

Main portfolio content must prioritize:

```text
Problem
→ Constraints
→ Model / Investigation
→ Decision
→ Implementation
→ Verification
→ Limitation
→ Evidence
```

Chronology, contact information, education and exhaustive stack lists remain resume material.

For AX cases, evidence priority is:

```text
actual repeated work automation
→ bounded architecture decision
→ validation / human boundary
→ reusable public engineering evidence
```

This prevents recent public agent/tool repositories from crowding out a stronger real-work automation example.

---

## Selected Case Set

The AX/Internal Tools view uses four cases with different evidence types.

### Case 01 — harness-kit: Developer Internal Tooling

Question:

> Can repeated developer configuration friction be converted into a maintainable internal tool without over-platforming?

Evidence:

- public repository,
- validation PR,
- merged-main Node 22/24 audit/typecheck/36-tests/build/CLI-smoke evidence.

### Case 02 — Commerce / Logistics Change Impact

Question:

> How is a change bounded when the symptom crosses DB state, permissions, administrator workflows, background processing and external systems?

Evidence:

- public-sanitized career case,
- ready public claim bank,
- upload/preview/confirm batch boundary.

### Case 03 — MES Requirement Modeling

Question:

> How is an ambiguous field request converted into input, state, query, permission and reporting rules?

Evidence:

- sanitized career case,
- source-bounded requirement/troubleshooting models.

### Case 04 — Practical AI Automation: Local LLM + Verification Boundary

Question:

> Which parts of a repetitive task should use AI, deterministic code, or human validation?

Primary evidence:

- actual sanitized Local LLM i18n workflow,
- internal Python server + Ollama/Gemma 3 small model for EN/JA/ZH translation drafts,
- deterministic PHP/JSON language-pack generation,
- CPU/no-dedicated-GPU constraint,
- human validation retained,
- repeated practical use by a frontend developer.

Supporting verification evidence:

- AI-assisted Development Workflow,
- Codex Workflow Skills,
- StackForge Atlas,
- harness-kit validation discipline.

Explicitly not claimed:

- productivity percentage,
- translation-accuracy percentage,
- cost reduction,
- organization-wide platform adoption,
- model-training or GPU-serving expertise.

---

## Visual Grammar

Use GitHub-native Mermaid where it provides actual comprehension value.

Preferred diagrams:

- architecture flow,
- state transition,
- decision tree,
- sequence diagram,
- verification/failure loop.

Avoid decoration-only diagrams.

Every diagram must answer a question such as:

- where is the boundary?
- what state changes?
- what does the developer inspect first?
- which work belongs to AI versus deterministic code?
- where can failure occur?
- what evidence closes the loop?

The main index should use one primary diagram per case. Secondary diagrams belong in deep dives.

---

## Portfolio Gate

A case **fails** when it mainly contains:

- company chronology,
- role summaries,
- skill/technology enumeration,
- long prose without an inspectable model,
- links without explaining their relevance.

A case **passes** only when it includes:

1. concrete problem,
2. meaningful constraints,
3. explicit decision or trade-off,
4. visual model,
5. implementation boundary,
6. verification/evidence or bounded actual-use evidence,
7. limitation / unproven scope,
8. evidence link.

The main portfolio also fails if a reviewer cannot answer within roughly one minute:

> “What kinds of problems does this engineer solve, and which case should I open next?”

For AX-target evidence, another failure condition is:

> public AI/tooling repositories are more prominent than a stronger real-work automation case.

---

## Information Architecture

```text
PORTFOLIO-AX.md
│
├── 30-second portfolio map
├── Case 01 summary ──> developer internal tooling
├── Case 02 summary ──> commerce change impact
├── Case 03 summary ──> MES requirement modeling
├── Case 04 summary ──> practical Local LLM automation + verification boundary
├── cross-case engineering model
├── public repository evidence index
└── evidence / redaction boundaries
```

The resume and general backend portfolio remain separate surfaces.

---

## Version Preservation

Do not overwrite the previous approach without trace.

The exact PS-v1.3.0 AX portfolio is preserved as:

- `docs/portfolio-ax/versions/PS-v1.3.0-text-heavy-baseline.md`

This allows future comparison of:

```text
PS-v1.3.0
Targeted text projection

vs

PS-v1.4.0
Case-study / visual evidence projection
```

---

## PDF / Web Consequence

A future visual PDF or web surface must project the **case studies**, not the resume text.

### PDF

Expected form:

```text
cover / positioning
→ case map
→ Case 01 Internal Tooling
→ Case 04 Practical Local LLM Automation
→ Case 02 Commerce Change Impact
→ Case 03 MES Requirement Modeling
→ evidence / repository links
```

A 6–8 page PDF is a downstream visual projection, not the canonical evidence source.

### Web

Expected form:

- visual navigation,
- diagram-first case cards,
- progressive disclosure,
- repository/evidence links,
- no decorative animation requirement.

Neither PDF nor web should create a new factual narrative.

---

## Failure Conditions

PS-v1.4.0 fails if:

- Mermaid diagrams become decoration rather than explanation,
- case studies repeat the resume chronology,
- public R&D is represented as employer production work,
- sanitized career models imply unsupported architecture ownership,
- repository links replace the explanation instead of supporting it,
- verification numbers are detached from their scope and limitations,
- measured and unmeasured outcomes are mixed,
- the practical Local LLM case is inflated into model-training/platform expertise,
- the main page becomes so long that the four cases cannot be scanned quickly.

---

## Validation Plan

1. run repository content validation/build,
2. inspect GitHub Markdown/Mermaid rendering for broken links and diagram syntax,
3. review the main page through recruiter / hiring-manager / engineer lenses,
4. verify that the practical Local LLM workflow is distinguishable from public R&D repositories,
5. record whether each reviewer can identify the four cases and their evidence type without reading the resume,
6. only after the GitHub version stabilizes, consider a 6–8 page visual PDF projection.

## Main Hypothesis

A senior developer portfolio is strongest when it behaves like a **technical evidence index**:

> resume says what the candidate has done; portfolio lets the reviewer inspect how the candidate thinks, decides and verifies.

For AX roles, the strongest evidence order is additionally:

> actual useful automation first; AI tooling vocabulary second.
