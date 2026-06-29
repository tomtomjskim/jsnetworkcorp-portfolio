# DB MCP Safety Boundary

version: PF-v0.7.0
updated: 2026-06-29
visibility: public-sanitized
status: draft

## Summary

A public-safe infrastructure/workflow case for agent-assisted database analysis. The goal is to show safety thinking around read-only access, schema visibility, query validation, and human review without exposing real database configuration or data.

## Problem

Agent-assisted database work can be valuable for schema understanding and query analysis, but unsafe access can expose credentials, private schemas, customer data, logs, or destructive operations. A public portfolio page should explain the safety model without revealing any private infrastructure.

## Safety Themes

| Theme | Public-Safe Description |
|---|---|
| Connection registry | Redacted connection metadata and explicit safety modes. |
| Read-only posture | Default to non-mutating analysis unless separately approved. |
| Query validation | Block unsafe operations before execution. |
| Human review | Keep high-impact data access behind review and approval. |
| Secret hygiene | Do not expose URLs, credentials, private hostnames, schemas, or logs. |

## Public Resume Claims Supported

- MCP/agent 기반 DB 분석 workflow에서 read-only, query validation, secret hygiene 등 안전 경계를 고려
- AI-assisted workflow와 database access 사이의 human review gate를 설계 관점에서 다룸
- public portfolio와 private infrastructure evidence를 분리 관리

## Redaction Notes

- No database URLs
- No credentials
- No private hostnames
- No real table names or schemas
- No query logs
- No customer data
- No production incidents

## Next Evidence Work

- Synthetic schema browser screen
- Query validation state diagram
- Private evidence checklist, outside this repository
