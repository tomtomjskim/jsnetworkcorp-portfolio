# Remote Deploy Runbook

## Scope

Prepare the server for the public sanitized portfolio first. Detailed interview materials are a separate protected surface and should not be served from the public static build output.

## Public Portfolio Deploy

Required GitHub secrets:

```text
PORTFOLIO_SSH_KEY
PORTFOLIO_HOST
PORTFOLIO_USER
PORTFOLIO_DEPLOY_PATH
```

Expected flow:

```text
GitHub Actions -> npm run build -> out/ -> rsync -> nginx/static host -> portfolio.jsnetworkcorp.com
```

Recommended server path:

```text
/var/www/jsnetworkcorp-portfolio/public/
```

The public site should serve only the `out/` contents produced by this repository.

## Interview Materials Surface

Detailed interview materials should be generated outside this public repository and deployed separately.

Recommended server path:

```text
/var/www/jsnetworkcorp-portfolio/interview-kit/
```

This path should not be populated by the public portfolio GitHub Actions workflow.

Access control should be configured at the web server or gateway layer. Acceptable options include HTTP Basic Auth, SSO, VPN/Tailscale, or IP allowlist.

## Server Preparation Checklist

1. Create public static directory.
2. Configure deploy user and SSH key.
3. Configure nginx static host for `portfolio.jsnetworkcorp.com`.
4. Configure TLS certificate.
5. Add GitHub Actions secrets.
6. Run `Deploy Static Portfolio` workflow manually.
7. Verify public pages and static assets.
8. Create separate protected interview directory if needed.
9. Configure authentication for the protected interview surface.
10. Confirm protected material is not inside the public `out/` directory.

## Safety Checks

Before deployment:

- run `npm run validate:content`
- verify there are no credentials or private endpoints
- verify screen data is sanitized
- verify interview material is not included in this repository or public build output
- verify deploy target path is correct
