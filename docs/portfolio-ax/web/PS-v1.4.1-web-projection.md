# PS-v1.4.1 — Web Projection Contract

Date: 2026-08-19
Route: `/ax/`
Canonical source: `PORTFOLIO-AX.md`
Status: implementation candidate

## Purpose

The web page is a **visual projection of the stabilized GitHub case-study portfolio**.

It is not:

- another resume,
- a second factual source,
- a decorative showcase detached from evidence,
- an AI demo gallery.

The canonical technical source remains:

- `PORTFOLIO-AX.md`
- `docs/portfolio-ax/cases/*`

## Projection Order

The page keeps the same four cases but orders actual/practical evidence prominently:

```text
Hero / artifact boundary
→ 30-second four-case map
→ Case 01 Developer Internal Tooling
→ Case 04 Practical AI Automation
→ Case 02 Commerce Change Impact
→ Case 03 MES Requirement Modeling
→ Cross-case engineering model
→ Public repository evidence index
```

The web ordering does not change case meaning or evidence strength.

## Visual Rule

The page uses restrained CSS composition rather than 3D, scroll animation, or decorative motion.

Primary visual devices:

- case map,
- compact decision flows,
- responsibility split,
- problem/decision/proof cards,
- verification/evidence index,
- progressive links to GitHub deep dives.

The page deliberately does not repeat:

- company chronology,
- education/contact information,
- exhaustive technology lists,
- resume bullets.

## Desktop QA

A representative static render at desktop width was reviewed for:

- hero hierarchy,
- four-case first scan,
- Case 01 / Case 04 priority,
- flow readability,
- evidence links,
- excessive empty space or decorative density.

Result: `PASS`.

The design remains text/diagram first and uses spacing/background hierarchy rather than visual effects.

## Mobile Rule

Horizontal process models can become difficult to read on narrow screens. For <= 620px the `/ax/` route adds a scoped responsive override:

```text
horizontal flow
→ vertical flow

buttons
→ full-width tap targets

multi-column decision cards
→ one column
```

Detailed flows remain available in GitHub deep dives rather than expanding the mobile page indefinitely.

## Evidence Boundary

### Actual / sanitized work cases

- Commerce / Logistics
- Manufacturing MES
- Local LLM i18n workflow

These can demonstrate actual problem-solving patterns but do not expose production code/data.

### Public engineering repositories

- harness-kit
- codex-workflow-skills
- stackforge-atlas

These demonstrate current implementation/verification discipline but are not represented as prior-employer production work.

## Failure Conditions

The web projection fails if:

- the page becomes a designed resume,
- public R&D is presented as company production work,
- animation competes with case comprehension,
- mobile requires horizontal page scrolling,
- evidence links become harder to find than capability prose,
- unsupported productivity/accuracy/adoption metrics are added,
- the web page introduces facts absent from the GitHub canonical source.

## Implementation Files

- `src/app/ax/page.tsx`
- `src/app/ax/layout.tsx`
- `src/app/ax/ax-overrides.css`
- `src/app/globals.css` (`ax*` scoped presentation rules)

## Validation

Required before merge:

```text
npm ci
npm run typecheck
npm run validate:content
npm run build
npm run smoke:static
```

The first full implementation pass completed all of these checks successfully. Responsive overrides must receive the same CI contract.

## Downstream Rule

PDF and web are sibling projections of the GitHub case model.

```text
GitHub Case Study (canonical)
├── Visual PDF
└── Web /ax/
```

Neither downstream surface is allowed to silently become the new factual authority.
