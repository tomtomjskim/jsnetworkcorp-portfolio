# Portfolio Strategy PS-v1.1.0

Date: 2026-08-17
Status: current reference strategy
Previous: `PS-v1.0.0`

## Thesis

Application text and GitHub remain the primary surfaces, but GitHub repository selection must be evidence-ranked rather than based on presentation quality or technology relevance alone.

The portfolio therefore uses three distinct proof layers:

```text
P0 — concise verified career text
P1-A — sanitized career case studies
P1-B — independently reviewable public repositories
```

A public reference implementation may demonstrate current engineering capability without being presented as the source code of a production career project.

## Priority

```text
P0  Application / self-introduction text
P1  GitHub-native portfolio
P2  Restrained web projection
P3  Optional PDF supplement
P4  Protected interview deep dive
```

No change from `PS-v1.0.0` in channel priority.

The change is inside P0/P1 quality control.

---

# Changes from PS-v1.0.0

## 1. Added recruiter-first claim blocks

P0 now has explicit reusable text blocks with:

- ready vs conditional claim separation,
- short positioning blocks,
- experience blocks,
- target-combination recipes,
- technical-term budget,
- promotion gate.

Reference:

- `docs/application-text/claim-blocks-v1.md`

## 2. Re-ranked public repositories after adversarial review

Previous initial set treated four repositories as likely featured candidates.

PS-v1.1.0 changes the ranking:

```text
StackForge Atlas
  → PRIMARY

Codex Workflow Skills
  → FEATURED for AI-native/platform
  → SUPPORTING for general backend

harness-kit
  → FEATURED with verification caveat

Agent Orchestra Monitor
  → HOLD as featured
  → version and verification contract repair required

StoreShoppingMall-PHP
  → EXCLUDE in current form
```

Reference:

- `docs/github-portfolio/featured-repo-audit-2026-08-17.md`

## 3. Rejected README-only reconstruction of weak PHP repo

`StoreShoppingMall-PHP` is relevant by stack name but its current public contents do not expose enough of a backend system to support a strong engineering case.

PS-v1.1.0 explicitly rejects upgrading it into a flagship project through narrative alone.

## 4. Added public backend reference plan

The portfolio has a genuine evidence gap: long-term PHP/business-system experience is stronger than current public GitHub evidence suggests.

Resolution:

- create a new sanitized PHP/commerce operations reference implementation,
- implement real transaction/state/failure/test contracts,
- label it as a reference implementation rather than proprietary production source,
- use it to demonstrate current engineering capability without upgrading historical role claims.

Reference:

- `docs/github-portfolio/backend-evidence-gap-plan.md`

---

# Evidence Ranking Model

Repository promotion now considers five dimensions.

| Dimension | Question |
|---|---|
| Problem clarity | Is the engineering problem understandable without reading the codebase first? |
| Implementation depth | Is there non-trivial implementation rather than only diagrams/prompts/docs? |
| Verification | Can a reviewer identify tests, CI, executable checks, or committed validation evidence? |
| Limits | Does the repository state what is not proven? |
| Career relevance | Does it strengthen the target engineering position rather than distract from it? |

A visually polished README cannot compensate for missing implementation/verification.

A technically strong repository can still be supporting-only if it distorts the target-role narrative.

---

# Current Portfolio Narrative

## Career identity

```text
Backend / business-system engineer
├─ manufacturing MES
├─ commerce / logistics operations
├─ PHP-based operational systems
├─ data and integration boundaries
└─ incremental maintenance / reliability mindset
```

## Recent public engineering work

```text
Engineering methodology / tooling
├─ StackForge Atlas
├─ Codex Workflow Skills
├─ harness-kit
└─ other repositories after audit
```

The second group supplements the first. It does not replace career history.

---

# GitHub Reading Path

Recommended reviewer path:

```text
PORTFOLIO.md
  │
  ├─ career case study
  │    └─ sanitized problem / responsibility / boundary
  │
  └─ selected public repository
       ├─ README
       ├─ architecture / decisions
       ├─ verification
       └─ source / history
```

For backend roles, a future PHP reference repository should sit between the career case and AI/tooling repositories.

---

# Web / PDF Policy

No implementation priority increase.

Web and PDF remain downstream projections only after:

1. P0 claim blocks are strong,
2. P1 repository set passes audit,
3. backend evidence gap is addressed or explicitly disclosed.

Web design remains restrained:

```text
typography
+ whitespace
+ architecture/state diagrams
+ evidence links
```

Do not invest in animation or visual novelty to compensate for an evidence gap.

---

# Hypotheses to Test Before PS-v1.2.0

1. Can a new PHP/commerce reference implementation produce a stronger backend interview signal than refurbishing old snippets?
2. Does StackForge Atlas remain understandable to a backend interviewer when AI-agent context is removed from the introduction?
3. Can `harness-kit` pass clean install, static check, unit tests, and build from one documented validation path?
4. After version/test repair, is Agent Orchestra Monitor worth returning to the featured set?
5. For a general backend application, should the public set stop at three repositories to reduce AI-tooling bias?
6. Which P0 blocks survive recruiter-style compression without losing evidence precision?

## Exit Criteria

Advance to `PS-v1.2.0` only after at least one of these produces new evidence rather than opinion:

- backend reference repo reaches a runnable validation gate,
- featured repository validation is executed and recorded,
- a real target job description is used to generate and compare a submission bundle,
- recruiter/hiring-manager review produces actionable differences.
