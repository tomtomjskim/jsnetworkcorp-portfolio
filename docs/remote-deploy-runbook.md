# Remote Deploy Runbook

Deferred until server and DNS are ready.

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
