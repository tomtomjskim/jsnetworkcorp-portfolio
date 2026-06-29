# Interview Kit Pipeline

## Decision

Interview kit generation is a separate private/source-only pipeline. This public portfolio repository only documents the boundary and can link to the protected surface after access control is configured.

## Source-Only Private Structure

Recommended private repository or server-only workspace:

```text
jsnetworkcorp-interview-kit-source/
├─ README.md
├─ sources/
│  ├─ projects.yml
│  ├─ claims.yml
│  └─ evidence-manifest.yml
├─ templates/
│  ├─ briefing.md
│  ├─ qna.md
│  ├─ architecture-deep-dive.md
│  ├─ failure-tradeoff-stories.md
│  └─ redaction-checklist.md
├─ scripts/
│  ├─ generate.mjs
│  └─ validate-redaction.mjs
└─ output/
   └─ .gitkeep
```

Rules:

- `sources/` contains reviewed metadata, not raw private repositories or raw transcripts.
- `output/` is ignored by Git and treated as generated material.
- Generated kits are copied only to a protected server path or encrypted per-interview archive.
- Public portfolio data can be imported as a low-sensitivity input, but private evidence never flows back into this repository.

## Generation Flow

```text
private sources + templates
-> generate draft kit
-> validate redaction
-> human factuality review
-> deploy generated output to protected surface
-> expire or remove output after use
```

## Output Shape

```text
interview-kit/{company-or-role}-{date}/
├─ 00-briefing.md
├─ 01-project-one-pagers.md
├─ 02-architecture-deep-dive.md
├─ 03-ai-agent-workflow-qna.md
├─ 04-legacy-modernization-qna.md
├─ 05-failure-tradeoff-stories.md
├─ 06-claim-evidence-map.md
└─ 99-redaction-checklist.md
```

## Deployment Targets

Preferred:

```text
interview.jsnetworkcorp.com
└─ protected static output from private/source-only pipeline
```

Fallback:

```text
portfolio.jsnetworkcorp.com/interview/
└─ protected server-only path outside the public portfolio deploy root
```

## Required Gates

- No credentials, tokens, or private hostnames.
- No customer, order, payment, admin, or session data.
- No raw logs or raw AI transcripts.
- Every claim links to a reviewed evidence note.
- Unverified claims are marked as pending or removed.
- Access is authenticated before any generated kit is reachable.
