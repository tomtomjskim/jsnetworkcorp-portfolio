# Remote Deploy Runbook

## Scope

Prepare the server for the public sanitized portfolio first. Detailed interview materials are a separate protected surface and must not be served from the public static build output.

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

The public site should serve only the `out/` contents produced by this repository. The deploy user should have write access only to this directory.

Recommended GitHub Actions values:

```text
PORTFOLIO_HOST=<server-ip-or-hostname>
PORTFOLIO_USER=portfolio-deploy
PORTFOLIO_DEPLOY_PATH=/var/www/jsnetworkcorp-portfolio/public
```

The workflow in `.github/workflows/deploy-static.yml` runs on `main` pushes and manual dispatch. It validates content before syncing.

## Interview Materials Surface

Detailed interview materials should be generated outside this public repository and deployed separately.

Recommended server path:

```text
/var/www/jsnetworkcorp-portfolio/interview-kit/
```

This path should not be populated by the public portfolio GitHub Actions workflow.

Access control should be configured at the web server or gateway layer. Acceptable options include HTTP Basic Auth, SSO, VPN/Tailscale, or IP allowlist. Static-export client-side password prompts are not protection.

## Server Preparation Checklist

1. Create public static directory.
2. Configure deploy user and SSH key.
3. Configure nginx static host for `portfolio.jsnetworkcorp.com`.
4. Configure TLS certificate.
5. Add GitHub Actions secrets.
6. Allow GitHub Actions SSH access through the server firewall.
7. Run `Deploy Static Portfolio` workflow manually.
8. Verify public pages and static assets.
9. Create separate protected interview directory if needed.
10. Configure authentication for the protected interview surface.
11. Confirm protected material is not inside the public `out/` directory.

## Firewall Notes

If the server restricts SSH with iptables, allow GitHub-hosted runner source ranges with the `deploy/server/update-github-actions-ssh-allowlist.sh` script and the matching systemd timer templates. The script builds an `ipset` from GitHub's published Actions metadata and inserts an allow rule for SSH before the final reject rule.

## TLS Notes

Let's Encrypt HTTP validation requires DNS to resolve to the server before certificate issuance:

```bash
sudo certbot --nginx -d portfolio.jsnetworkcorp.com
sudo certbot --nginx -d interview.jsnetworkcorp.com
```

If using a protected path instead of a separate interview subdomain, only the public portfolio certificate is required.

## Protected Path Model

If `interview.jsnetworkcorp.com` DNS is not ready, use a protected path first:

```text
https://portfolio.jsnetworkcorp.com/interview/
```

The nginx location must point outside the public static deploy path and must require authentication.

## Safety Checks

Before deployment:

- run `npm run validate:content`
- verify there are no credentials or private endpoints
- verify screen data is sanitized
- verify interview material is not included in this repository or public build output
- verify deploy target path is correct
- verify GitHub Actions does not upload private interview output
