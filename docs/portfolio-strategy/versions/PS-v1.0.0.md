# PS-v1.0.0 — Application-First, GitHub-First Portfolio Strategy

Date: 2026-08-17
Status: current

## Thesis

The first hiring artifact should be concise application text. The first technical portfolio surface should be GitHub. A custom website is a visual projection built only after the narrative and repository evidence are strong.

## Delivery Priority

```text
P0  Application / self-introduction text
P1  GitHub portfolio
P2  Web portfolio
P3  PDF visual supplement
P4  Protected interview deep dive
```

This is delivery priority, not evidence priority. Every surface still derives from the same canonical claim/evidence data.

## P0 — Application / Self-Introduction Text

Primary objective: make relevant experience understandable quickly.

Rules:

- concise paragraphs and bullets,
- one idea per paragraph,
- lead with problem and responsibility rather than technology names,
- connect each example to the target role,
- keep role verbs conservative,
- exclude unverified metrics,
- link to GitHub only where the repository genuinely strengthens the claim.

Recommended narrative unit:

```text
target requirement
→ relevant problem/context
→ personal action or engineering judgment
→ verified effect/lesson
→ relevance to target role
```

## P1 — GitHub Portfolio

GitHub is the default technical portfolio because it can combine readable Markdown with direct evidence.

### Portfolio index

A top-level GitHub portfolio document should contain:

```text
Positioning
→ Career case studies
→ Selected public repositories
→ Engineering capability map
→ Problem-solving / verification pipeline
→ AI-assisted engineering workflow
→ Repository URLs / evidence links
→ Resume / contact links
```

### Public repository card

Every featured repository should answer:

1. What problem exists?
2. Why is the problem non-trivial?
3. What did this repository propose or implement?
4. What engineering decisions or boundaries matter?
5. How is it tested or verified?
6. What is the strongest characteristic of this repository?
7. What limitation remains?
8. Why should a hiring reviewer open it?
9. What is the repository URL?

Do not describe a public R&D repository as production career experience unless that relationship is separately verified.

### README quality gate

Before a repository is featured:

- the problem is clear before feature lists,
- claims match actual implementation,
- maturity is explicit,
- architecture is understandable,
- validation commands exist where appropriate,
- limitations are visible,
- secrets/private data are absent,
- screenshots/diagrams are useful rather than decorative,
- the repository can be understood without private context.

## P2 — Web Portfolio

The website should not invent a second narrative. It visually renders the strongest GitHub/case-study data.

Direction:

- restrained editorial design,
- fast scanning,
- architecture/state/sequence visuals over decorative animation,
- direct links to featured GitHub repositories,
- no skill percentage bars,
- no technology-logo wall as primary evidence,
- no elaborate 3D unless a role specifically benefits from it.

The website is successful if it makes the same evidence easier to navigate, not if it looks more complex than the underlying work.

## P3 — PDF

PDF is optional and target-dependent. Use it when a recruiter or application form benefits from a compact visual attachment.

Keep it short and selective. It should summarize cases already supported by the canonical data and GitHub evidence.

## P4 — Protected Interview Deep Dive

Keep confidential evidence, detailed troubleshooting chronology, and sensitive architecture outside the public repository. Use this layer only when it can be safely discussed in interview.

## Canonical Flow

```text
Verified career/project data
        │
        ▼
Canonical claim + case records
        │
        ├─ P0 application text
        │      │
        │      └─ links to relevant GitHub evidence
        │
        ├─ P1 GitHub portfolio
        │      ├─ career case summaries
        │      └─ public repository evidence
        │
        ├─ P2 web visual projection
        ├─ P3 PDF supplement
        └─ P4 protected interview material
```

## Research Questions for PS-vNext

Future revisions should evaluate:

- which public repositories actually lead interviewers into meaningful technical discussion,
- whether repository README depth or a separate portfolio index produces better scanability,
- how much target-company customization improves relevance before it causes maintenance cost,
- whether PDF is still valuable when GitHub and application text are strong,
- which case-study diagrams materially improve interviewer comprehension,
- whether AI-assisted engineering should be a dedicated section or evidence embedded into each case.

## Success Criteria

The strategy is working when a reviewer can quickly identify:

- the candidate's core backend/platform positioning,
- 2–3 relevant career problems solved,
- 3–5 public repositories worth opening,
- explicit engineering decisions and constraints,
- evidence of verification rather than generic AI/tool usage,
- clear separation between production career experience and public R&D artifacts.
