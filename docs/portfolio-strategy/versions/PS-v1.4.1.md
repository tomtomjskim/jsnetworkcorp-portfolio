# PS-v1.4.1 — GitHub Visual QA Patch

Date: 2026-08-19
Status: proposed patch
Parent: `PS-v1.4.0`

## Trigger

`PS-v1.4.0` correctly separated the portfolio from the resume and introduced four visual case studies. After representative rendering of the main-page diagrams, several horizontal flows were wider than the expected GitHub content column and would likely be scaled down enough to reduce scan readability.

The information architecture was correct. The visual encoding needed a patch.

## Decision

Keep full detail in the deep dives, but compress the hiring-facing main page.

```text
PORTFOLIO-AX.md
→ 30-second case map
→ one compact model per case
→ 3–5 nodes where possible

case deep dive
→ detailed state / troubleshooting / validation flow
```

## Changed Visual Models

### Portfolio Map

Removed the second signal row. The case table already explains each signal, so duplicate nodes added width without adding information.

### Case 01

Reduced the main diagram to:

```text
Repeated Config
→ Drift Cost Decision
├─ Direct Edit
└─ Typed Modules
   → Validate + Generate
   → CI
```

The full resolver/loader/validator/merger/renderer/writer pipeline remains in the deep dive.

### Case 02

Compressed:

```text
Change Request
→ AS-IS + DB State
→ Permission / Admin / Batch / External API
→ Bounded Scope
```

The detailed state and batch flow remain in the deep dive.

### Case 03

Compressed:

```text
Field Request
→ Real Work Sequence
→ Input / Query / State / Report / Permission
→ Screen + DB Scope
```

Detailed troubleshooting remains in the deep dive.

### Case 04

Compressed:

```text
Korean key/value
→ Local LLM Translation Draft
→ Deterministic PHP / JSON Conversion
→ Human Validation
```

The internal Python/Ollama/Gemma 3 details and workflow validation models remain in the deep dive.

### Cross-case model

Reduced to a single feedback loop from verification back to the smallest useful change.

## What Did Not Change

- case selection,
- target positioning,
- historical facts,
- public/private boundary,
- evidence strength,
- Local LLM actual-use claim,
- repository ranking,
- portfolio gate.

This is a layout/readability patch, so the version changes from `1.4.0` to `1.4.1`, not `1.5.0`.

## QA Result

Representative render of the original main-page flows showed several diagrams exceeding roughly 1.6–2.2k px at the same rendering scale, especially the linear Commerce, MES, Local LLM and cross-case flows. The compact models substantially reduce horizontal span while preserving the decision each diagram is supposed to explain.

GitHub-native source remains standard Mermaid syntax.

## Next Step

1. run repository CI,
2. merge the visual QA patch,
3. use the stabilized `PS-v1.4.1` cases as the canonical source for the visual PDF portfolio.
