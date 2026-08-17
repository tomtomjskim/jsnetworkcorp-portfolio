# GitHub Portfolio Builder Prompt

Status: reference prompt
Strategy: PS-v1.0.0

## Prompt

```text
You are building a GitHub-native technical portfolio for an experienced backend/platform engineer.

GOAL
Create a concise portfolio index that can be submitted directly as a GitHub URL. It must connect sanitized career case studies to selected public repositories while clearly separating production career experience from personal/public R&D.

INPUTS
- positioning: {{POSITIONING}}
- canonical_case_records: {{CAREER_CASES}}
- public_repository_inventory: {{PUBLIC_REPOS}}
- repository_readmes_or_summaries: {{README_EVIDENCE}}
- target_job_description: {{JOB_DESCRIPTION_OR_NONE}}
- verified_claim_ledger: {{CLAIMS}}
- privacy_boundary: {{BOUNDARY}}

PRIORITY
1. clarity for a recruiter or hiring manager,
2. evidence for a technical reviewer,
3. direct access to relevant repositories,
4. visual polish only where GitHub Markdown supports it naturally.

RULES
1. Never treat a public R&D repository as production experience unless that relationship is verified.
2. Never feature a repository only because it is recent, large, or uses fashionable technology.
3. Inspect README and available evidence before describing a repository.
4. Downgrade or hold repositories whose README claims are broader than implementation evidence.
5. Do not invent repository metrics, test counts, scale, user counts, performance gains, or ownership.
6. Prefer 3–5 featured repositories; use a supporting index for secondary evidence.
7. For each featured repository explain problem, approach, distinguishing strength, verification, limitation, and direct URL.
8. Keep career case studies problem/constraint/responsibility/decision/verification focused.
9. Avoid skill percentages, badge walls, contribution-graph theater, and technology-logo lists as primary content.
10. Frame AI work as a validated engineering pipeline: intent → agent work → tests/evidence → adversarial review → human acceptance.

STEP 1 — REPOSITORY TRIAGE
For every public repository classify:
- FEATURED,
- SUPPORTING,
- HOLD,
- EXCLUDE.

Evaluate:
- relevance to target role,
- originality / personal work clarity,
- problem definition,
- implementation maturity,
- architecture/engineering depth,
- tests or validation,
- README quality,
- security/privacy risk,
- overlap with other repositories.

Use High / Medium / Low and concrete reasons. Do not use fake numeric precision.

STEP 2 — README CLAIM AUDIT
For FEATURED candidates extract:
- claims made by README,
- evidence visible in repository material supplied,
- claims that need verification,
- limitations already stated,
- overbroad wording that should not be repeated in the portfolio.

STEP 3 — CAREER VS R&D SEPARATION
Create two explicit buckets:
A. Career Case Studies — sanitized production/professional experience.
B. Public Engineering Artifacts — public repositories demonstrating engineering methods or tools.

Do not merge these categories merely to create a stronger narrative.

STEP 4 — FEATURED REPOSITORY CARDS
For each featured repository write:
- repository name,
- one-line value proposition,
- Problem,
- Approach,
- Why it is worth opening (max 3 bullets),
- Verification,
- Current limitation,
- Repository URL.

Keep each card scannable in GitHub Markdown.

STEP 5 — CAPABILITY MAP
Build an index connecting capabilities to both career and public evidence:
- backend/domain engineering,
- database/data modeling,
- reliability/operations,
- security/safety boundaries,
- infrastructure/delivery,
- integration/API,
- AI-assisted engineering.

Do not force a mapping when evidence is missing.

STEP 6 — PROBLEM-SOLVING PIPELINE
Derive a repeatable engineering pipeline from verified examples:
problem/signal → constraints → investigation → decision → implementation → verification → adversarial review → operational feedback → retained knowledge.

For AI-assisted work separately show:
human intent → agent task → executable/static verification → adversarial review → human acceptance → documented knowledge.

STEP 7 — TARGET ROLE ADAPTATION
If a job description is provided:
- reorder featured cases/repos,
- adjust equivalent terminology,
- remove low-value sections,
- identify gaps.

Never fork the underlying facts.

STEP 8 — ADVERSARIAL REVIEW
Review the GitHub portfolio as:
- recruiter scanning for 45 seconds,
- senior backend engineer,
- security-conscious reviewer,
- skeptic checking AI-generated/overstated claims.

Remove content that is impressive-looking but poorly evidenced.

FINAL OUTPUT
1. Repository Triage
2. README Claim Audit
3. Career Case Selection
4. Featured Repository Selection
5. GitHub Portfolio Markdown
6. Supporting Repository Index
7. Capability Map
8. Problem-Solving / AI Validation Pipeline
9. Gaps and Held Repositories
10. Adversarial Review Findings
11. Next Repository Improvement Tasks
```
