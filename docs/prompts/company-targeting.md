# Company-Targeting Prompt

Status: reference prompt
Updated: 2026-08-17

## Prompt

```text
You are adapting an existing evidence-first software-engineering portfolio to a specific job description.

You are NOT allowed to create new career facts. Your job is selection, weighting, terminology alignment, gap analysis, and output ordering.

INPUT
- job_description: {{JOB_DESCRIPTION}}
- company_context: {{PUBLIC_COMPANY_CONTEXT_OR_NONE}}
- canonical_case_records: {{CANONICAL_CASES}}
- verified_claim_ledger: {{CLAIMS}}
- current_resume_projection: {{RESUME}}
- current_portfolio_index: {{PORTFOLIO_INDEX}}

RULES
1. Never add technologies, responsibilities, metrics, scale, or outcomes not present in verified canonical data.
2. Vocabulary substitution is allowed only when terms are semantically equivalent.
3. Do not hide an important experience gap by vague wording.
4. Prefer stronger evidence over superficial keyword matching.
5. Prefer cases with explicit responsibility + decision + verification over visually attractive but weak cases.
6. Keep proposal/prototype work clearly labeled.
7. If the job asks for something unsupported, mark it as a gap.

TASK 1 — REQUIREMENT DECOMPOSITION
Split the job description into:
- must-have capability,
- preferred capability,
- domain knowledge,
- operational expectation,
- collaboration expectation,
- architecture/system-design expectation,
- AI/automation expectation,
- evidence likely to be challenged in interview.

Separate explicit requirements from inferred expectations.

TASK 2 — EVIDENCE MATCHING
For each requirement, map:
- strongest supporting case,
- supporting claim,
- evidence strength,
- personal responsibility clarity,
- gap or ambiguity.

Use High / Medium / Low rather than fake numeric precision.

TASK 3 — TARGET PROFILE
Produce:

```yaml
target_id: <company-role-date>
role: <role>
priority_capabilities:
  <capability>: high|medium|low
preferred_cases:
  - <case id>
secondary_cases:
  - <case id>
exclude_from_primary_story:
  - <case id and reason>
resume_order:
  - <capability/case>
web_home_order:
  - <case id>
pdf_case_order:
  - <case id>
keyword_aliases:
  canonical_term: <equivalent JD term>
gaps:
  - <unsupported requirement>
```

TASK 4 — RESUME ADAPTATION
Select and reorder existing verified claims.
For each changed bullet show:
- original claim,
- targeted wording,
- reason for change,
- evidence status.

Do not improve the factual scope.

TASK 5 — COVER-LETTER / APPLICATION CONTENT
Select 2–3 narratives.
Each narrative must follow:
requirement → relevant past context → action/judgment → verified outcome/lesson → relevance to target role.

Mark any sentence that depends on role-confirm evidence.

TASK 6 — PDF ADAPTATION
Recommend:
- cover subtitle,
- 2–4 cases,
- page order,
- capability map emphasis,
- diagrams that best answer this job description,
- pages that should be removed because they are low-value for this target.

TASK 7 — WEB ADAPTATION
Recommend:
- home-page case ordering,
- capability ordering,
- target-specific intro copy direction,
- deep links likely to matter to an interviewer,
- no target-specific factual forks.

TASK 8 — INTERVIEW RISK REVIEW
Act as a skeptical interviewer.
List:
- claims likely to be challenged,
- evidence needed,
- questions exposing responsibility ambiguity,
- gaps where the candidate should say 'not directly experienced' rather than overstate.

FINAL OUTPUT
1. Requirement Map
2. Evidence Match Matrix
3. Target Profile YAML
4. Resume Adaptation
5. Cover-Letter Narrative Plan
6. PDF Ordering
7. Web Ordering
8. Gaps
9. Interview Risk Questions
10. Consistency Check
```
