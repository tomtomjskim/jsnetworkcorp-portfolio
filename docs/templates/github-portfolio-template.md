# GitHub Portfolio Template

Status: reusable template
Strategy: PS-v1.0.0

Use this for a GitHub-native portfolio document such as `PORTFOLIO.md` or a profile/portfolio README.

## 1. Positioning

```text
<role positioning in one line>

<2–3 lines describing the kinds of systems/problems handled and the engineering values that differentiate the candidate.>
```

Keep this readable without opening another link.

## 2. Career Case Studies

Career cases may describe private production systems only in sanitized form. Do not imply that a public R&D repository is the production system unless verified.

### <Case title>

**Problem**  
<one or two sentences>

**Constraints**  
<legacy, data, availability, security, operational constraints>

**My role**  
<exact responsibility>

**Engineering approach**  
<decision / implementation / trade-off>

**Verification / impact**  
<verified qualitative or quantitative result>

**Deep dive**  
<link to sanitized case-study document>

## 3. Selected Public Repositories

Feature only 3–5 repositories in the primary list.

### `<owner/repository>` — <one-line value proposition>

**Problem**  
<what engineering problem motivated the repository>

**Approach**  
<what is implemented or proposed>

**Why it is worth opening**

- <distinctive engineering characteristic>
- <architecture / reliability / safety / data / testing characteristic>
- <documentation / validation / reproducibility characteristic>

**Verification**  
<tests, executable drill, CI, validation scripts, demo, or honest no-evidence note>

**Current limitation**  
<one meaningful limitation or maturity boundary>

**Repository**  
`https://github.com/<owner>/<repository>`

## 4. Supporting Repository Index

Use a compact table for secondary repositories.

| Repository | What it demonstrates | Status | URL |
|---|---|---|---|
| repo | capability | supporting / experimental / archived | URL |

Do not put every public repository here. Omit repositories that dilute positioning.

## 5. Engineering Capability Map

| Capability | Career evidence | Public evidence |
|---|---|---|
| Backend / domain logic | <case> | <repo if relevant> |
| Database / data | <case> | <repo> |
| Reliability / operations | <case> | <repo> |
| Security / safety boundaries | <case> | <repo> |
| External integration | <case> | <repo> |
| AI-assisted engineering | <workflow/case> | <repo> |

The table is an index, not a skills scorecard. Do not use percentages.

## 6. Problem-Solving Pipeline

Show the repeatable engineering workflow rather than claiming generic problem-solving skill.

```text
Problem / signal
→ constraints
→ investigation
→ alternatives / decision
→ implementation
→ verification
→ adversarial review
→ operational feedback
→ retained knowledge
```

For AI-assisted work:

```text
human intent / constraints
→ agent implementation or analysis
→ tests / static checks / evidence
→ adversarial review
→ human acceptance
→ documented decision / learning
```

## 7. Public Evidence Rules

A repository should not be featured merely because it is public.

Feature when:

- it demonstrates a relevant engineering capability,
- the README makes the problem and maturity understandable,
- implementation can be inspected,
- validation exists or limitations are explicit,
- it does not expose sensitive information.

Hold when:

- README claims are broader than implementation evidence,
- it is a fork/reference collection without meaningful original work,
- it is too small or unfinished to demonstrate the intended skill,
- its relationship to career experience is ambiguous,
- publication creates security/privacy risk.

## 8. Resume / Application Links

- Resume: <link>
- Portfolio strategy / case studies: <link if public-safe>
- GitHub profile: <link>
- Website: <optional; lower priority than GitHub>

## Final Review Gate

- [ ] first screen explains positioning
- [ ] career experience and personal R&D are clearly separated
- [ ] 3–5 featured repositories are genuinely relevant
- [ ] every featured repository has a problem and reason-to-open
- [ ] repository URLs are direct and valid
- [ ] limitations/maturity are not hidden
- [ ] no unsupported metrics or ownership claims
- [ ] no secret/private data
- [ ] AI tooling is framed through verification and workflow, not tool-name quantity
- [ ] document is readable as plain GitHub Markdown
