# Interview Materials Architecture

## Goal

Keep `portfolio.jsnetworkcorp.com` sanitized and public, while producing detailed interview materials that support concrete technical Q&A.

## Recommended Architecture

```text
Public static portfolio
portfolio.jsnetworkcorp.com
└─ built from this public repo
   ├─ sanitized project pages
   ├─ wireframes
   ├─ public-safe architecture diagrams
   └─ release notes

Restricted interview kit
interview.jsnetworkcorp.com or protected server path
└─ built from a private source or server-only generated files
   ├─ detailed project specs
   ├─ interview Q&A scripts
   ├─ claim-to-evidence map
   ├─ architecture decision notes
   ├─ failure and tradeoff stories
   └─ source checklists
```

## Static Export Constraint

This Next.js repository is configured for static export. Static export does not provide server-side authorization.

If detailed interview material is included in the public build output, it should be considered public. Therefore, detailed interview material should not live in this repository while it remains public.

## Accepted Access Models

### Option A: Separate Protected Subdomain

Recommended.

```text
portfolio.jsnetworkcorp.com  -> public static export from this repo
interview.jsnetworkcorp.com  -> protected interview kit from private source
```

Protection can be provided by:

- Nginx HTTP Basic Auth
- SSO or OAuth gateway
- VPN or Tailscale access
- IP allowlist
- short-lived per-interview link with server-side verification

### Option B: Server-Only Protected Path

Acceptable if managed carefully.

```text
/var/www/portfolio/out/        -> public static site
/var/www/interview-kit/        -> protected static or generated material
```

The protected directory must be outside the public build output.

### Option C: Private Generated Artifacts

Good for controlled preparation.

```text
private workspace
└─ interview-kit/YYYY-MM-DD-target-role/
   ├─ briefing.md
   ├─ qna.md
   ├─ architecture-deep-dive.md
   ├─ evidence-map.md
   └─ redaction-checklist.md
```

## Not Acceptable

- relying on URL obscurity alone
- placing private material in this public repository
- putting private material into the static public bundle
- storing passwords in frontend JavaScript
- exposing production logs, endpoints, customer data, or admin data

## Interview Kit Template

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

## Generation Flow

```text
source repos / reviewed notes / selected evidence
-> generate interview kit draft
-> redaction and factuality review
-> protected deployment or per-interview archive
-> remove or expire after use when appropriate
```

## Human Review Required

Before any interview material is made accessible:

- verify every claim
- remove private values
- remove customer/order/admin data
- remove production hostnames and logs
- mark uncertain items as uncertain
- keep public and private surfaces clearly separated
