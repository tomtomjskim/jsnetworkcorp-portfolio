# Information Architecture

The portfolio is an evidence-first engineering surface. Screens and wireframes support the story, but the primary navigation is organized around experience, case studies, engineering capabilities, and decisions.

## Public Route Tree

```text
/
├─ Home
│  ├─ Positioning
│  ├─ Selected Impact
│  ├─ Experience Snapshot
│  └─ Selected Case Studies
├─ Projects
│  └─ Projects/[slug]
├─ Engineering
│  ├─ Architecture
│  ├─ Database
│  ├─ Performance
│  ├─ Reliability / Operations
│  ├─ Security / Safety Boundaries
│  ├─ Infrastructure / Delivery
│  ├─ External Integration
│  └─ AI-assisted Engineering
├─ Decisions
│  └─ Decisions/[slug]
├─ AI Agents / LLM Portfolio
├─ Screens & Wireframes
├─ Writing
├─ Resume
└─ Release Notes
```

## Reading Model

### Home

The recruiter/hiring-manager scan should answer within the first page:

1. what kind of engineer this is,
2. which domains/systems they have worked on,
3. the strongest verified engineering signals,
4. which 3–5 cases deserve deeper review,
5. where public work can be verified.

### Project Pages

Each project uses three reading layers:

```text
15-second scan
→ problem / role / maturity / capabilities / strongest verified effect

2-minute review
→ context / constraints / approach / architecture / key decision / verification / impact

deep dive
→ investigation / alternatives / implementation / failure modes / operational boundaries / retrospective / evidence
```

### Engineering Dossier

Engineering pages do not duplicate project prose. They re-index canonical case-study fields by capability so that an interviewer can review, for example, database or reliability evidence across several projects.

### Decisions

Decision records show constraints, alternatives, rationale, accepted trade-offs, verification, and reconsideration triggers. Only genuine or clearly labeled retrospective decisions belong here.

## Five Complementary Views

The public and application surfaces are derived from the same canonical project data:

1. Evidence-First Backend Portfolio
2. System Engineering Dossier
3. Resume + Deep Dive Hybrid
4. Case Study + Engineering Wiki
5. Company-Targeted Portfolio

See `docs/portfolio-reference-architecture.md` for the complete reference model.

## Multi-Output Model

```text
Canonical Case Study Record
├─ Resume projection
├─ Cover-letter / application projection
├─ PDF portfolio projection
├─ Web portfolio projection
└─ Protected interview projection
```

Facts, responsibility, metrics, and implementation maturity must remain consistent across all outputs. Target-company adaptation changes selection, ordering, and wording emphasis only.

See:

- `docs/content-system/case-study-schema.md`
- `docs/content-system/output-contracts.md`
- `docs/templates/project-case-study-template.md`
- `docs/templates/decision-record-template.md`
- `docs/prompts/portfolio-master-orchestrator.md`
- `docs/prompts/company-targeting.md`
- `docs/prompts/multichannel-renderer.md`

## Public Boundary

Protected interview material is not part of the public route tree. It belongs on `interview.jsnetworkcorp.com` or an authenticated server path outside the public static deploy root.

Do not publish private wiki contents, production logs, credentials, internal hostnames, customer data, order data, admin/session/payment data, private repository URLs, production endpoints, or raw AI session transcripts.
