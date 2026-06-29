# Deployment Templates

These files are public-safe deployment templates. They do not contain private keys, passwords, or generated interview material.

## Files

- `nginx/portfolio.jsnetworkcorp.com.conf`: public static portfolio host with optional protected `/interview/` path.
- `nginx/interview.jsnetworkcorp.com.conf`: protected interview subdomain host.

## Server Paths

```text
/var/www/jsnetworkcorp-portfolio/public/        # rsync target for this public repo
/var/www/jsnetworkcorp-portfolio/interview-kit/ # protected output from private pipeline
/etc/nginx/.htpasswd-jsnetworkcorp-interview   # Basic Auth users
```

## TLS

Install the nginx templates first, point DNS at the server, then run:

```bash
sudo certbot --nginx -d portfolio.jsnetworkcorp.com
sudo certbot --nginx -d interview.jsnetworkcorp.com
```

If using only the protected path model, the second command is not required.
