# Public Claim Bank

version: CL-v0.7
updated: 2026-08-17
visibility: public-sanitized

This file contains only claims that may be projected into the public portfolio after redaction. A public-safe claim is not automatically suitable for every submitted resume. Role fit, evidence strength, and interview defensibility still apply.

## Positioning

### Korean

PHP 기반 제조 MES와 커머스·물류 운영 시스템 경험을 바탕으로, 도메인 흐름, 외부 API 연동, 레거시 개선, 운영 검증을 다뤄 온 백엔드/풀스택 개발자.

### English

Backend / full-stack engineer with experience in PHP-based manufacturing systems and commerce/logistics operations, focusing on domain workflows, external API integration, legacy improvement, and operational verification.

## Public-Safe Claims

| ID | Claim | Status | Usage |
|---|---|---|---|
| `CL-PUB-001` | PHP 기반 MES 및 업무시스템 개발·유지보수 경험 보유 | ready | resume summary |
| `CL-PUB-002` | 제조 생산관리, 커머스 운영, 물류/출고 등 업무 도메인을 다룸 | ready | resume summary |
| `CL-PUB-003` | 셀러형 커머스 운영 시스템에서 상품, 주문, 재고, 입고·출고, 정산 관련 기능을 개발·고도화 | ready | work experience |
| `CL-PUB-004` | 외부 주문 등록 흐름에서 파일 업로드, preview, confirm, all-or-nothing batch semantics를 다룸 | ready | project bullet |
| `CL-PUB-005` | 주문 데이터를 channel, region, status 기준의 canonical model로 정규화하는 구조를 다룸 | role-confirm | project bullet |
| `CL-PUB-006` | natural key와 idempotency key를 활용한 재전송·중복 처리 안정성 관점을 다룸 | role-confirm | backend reliability |
| `CL-PUB-007` | signed API, dry-run/fail-closed gate, masked payload, PII guard 등 외부 연동 리스크 제어 요소를 다룸 | role-confirm | backend reliability / security |
| `CL-PUB-008` | 전송 로그와 외부 시스템 projection을 대사해 누락·외부 유입·상태 차이를 확인하는 구조를 다룸 | role-confirm | backend reliability |
| `CL-PUB-009` | 레거시 PHP 환경에서 application service와 도메인 계층을 점진적으로 분리한 경험 보유 | selective | architecture |
| `CL-PUB-010` | AS-IS 코드·DB 구조·외부 API 문서를 확인한 뒤 변경 범위와 검증 기준을 정리하는 방식으로 개발 | ready | work style |

## Evidence-Backed AI Claims

| ID | Public-safe claim | Status | Evidence boundary | Known limitation |
|---|---|---|---|---|
| `CL-AI-001` | 모호하거나 고위험인 작업을 intake, 구현, 독립 검토, 검증 기반 closeout으로 분리한 공개 Codex Skill을 설계·버전 관리 | ready | [`codex-workflow-skills`](https://github.com/tomtomjskim/codex-workflow-skills) | 테스트 통과는 live model 품질·생산성 향상률·조직 채택을 증명하지 않음 |
| `CL-AI-002` | Skill, Hook, Handoff, Failure Recovery를 포함한 Claude Code 프로젝트 Workflow와 적용 가이드를 공개 저장소로 관리 | selective | [`claude-code-guide`](https://github.com/tomtomjskim/claude-code-guide) | 저장소 전체 기능을 모든 회사 프로젝트에 적용했다고 주장하지 않음 |
| `CL-AI-003` | 2인 개발 환경에서 프로젝트 규칙·소스맵·PR 리뷰·커밋·기능 검수 기준을 공통으로 사용 | private-evidence | protected commerce project source; public에는 sanitized case만 사용 | 신규 인력 온보딩·대규모 팀 확산·전사 AX 근거는 없음 |
| `CL-AI-004` | 요구사항 정리, 설계, 구현, 코드 검수, 디버깅, Playwright E2E, 사람 승인을 단계별 Workflow로 운용 | private-evidence | protected project rules and E2E artifacts | 실행 상태 상세와 private 경로는 공개하지 않음 |
| `CL-AI-005` | Agent의 test skip·fail·미실행 보고 누락을 경험한 뒤 시나리오·결과 문서와 사람 확인을 완료 조건에 추가 | private-evidence | protected Markdown result docs and user interview | 전체 CI 강제 또는 모든 Agent 실행을 보장한다는 의미가 아님 |
| `CL-AI-006` | Ollama·Gemma 3 기반 로컬 번역 도구를 내부 PC에 구성해 한·영·일·중 언어팩 생성과 PHP/JSON 반영 업무에 적용 | private-evidence | public에는 i18n 결과 구조와 synthetic diagram만 사용 | GPU 없는 3B 환경의 속도·품질 한계, 사람 검수 필요, 정량 시간·정확도 없음 |
| `CL-AI-007` | AI 대화·산출물을 `inbox → generated → reviewed → canonical` 계층으로 분리하고 사람 승격 규칙을 적용 | supporting | Personal Wiki structure only | CI와 분류 규칙이 문서 사실성을 자동 증명하지 않음 |
| `CL-AI-008` | 프로젝트별 instruction, Hook, MCP, permission, Agent, Workflow를 모듈로 관리하는 도구를 구현 | supporting | [`harness-kit`](https://github.com/tomtomjskim/harness-kit) | npm 미배포, 팀 외부 채택 미확인 |
| `CL-AI-009` | 요구사항–인터페이스–검증–유지보수 근거를 하나의 feature slice로 연결하는 가이드·하네스를 구성 | supporting | [`stackforge-atlas`](https://github.com/tomtomjskim/stackforge-atlas) | 제한된 pilot 근거를 일반적인 운영 성과로 확대하지 않음 |
| `CL-AI-010` | AI와 데이터베이스 사이의 읽기 권한·쿼리 검증·연결 경계를 다루는 MCP 도구를 개발 | supporting-hold | [`db-mcp`](https://github.com/tomtomjskim/db-mcp) | README의 강한 표현과 실제 검증 범위를 정리한 뒤 사용 |

## Hold / Excluded Evidence

| Evidence | Decision | Reason |
|---|---|---|
| `aiwright` | hold | 목적·실사용·설명 가능성 재검증 전 대표 사례 사용 금지 |
| `image-translator` | excluded | 이번 이력서·AX 포트폴리오 근거에서 제외 |
| `team-orchestrator-mcp` | hold | prototype 범위와 실제 채택·배포 근거 부족 |
| `openclaw-secure-deploy` | hold | `production-ready` 표현과 실제 운영 근거 재검증 필요 |
| `im-not-ai` | hold | 소유·기여·upstream 관계 확인 필요 |
| `claude-code-team-system` | hold | `claude-code-guide`에 통합된 과거 원천 |
| `awesome-codex-subagents` | hold | 직접 구현과 reference/curation 범위 구분 필요 |

## Verb Strength Guide

| Use When Confirmed | Safer Default | Avoid Unless Proven |
|---|---|---|
| 설계·구현·적용 | 정리·검토·고도화·다룸 | 총괄·전면 혁신·완전 자동화 |
| 공통 기준으로 사용 | 개인 또는 프로젝트 단위로 사용 | 전사 표준화·조직 확산 |
| 실제 업무에 사용 | 시험 적용·prototype | 외부 adoption·상용 서비스 |
| 테스트로 확인 | 확인 절차를 운영 | 생산성·정확도·품질 수치 개선 |

## Excluded Claims

Do not use these in public resume or portfolio content:

- 측정되지 않은 생산성·시간·비용·정확도 개선율
- 2인 프로젝트 경험을 전사 AX 또는 조직 전체 표준화로 확대하는 표현
- 신규 인력 온보딩을 실제 운영했다는 표현
- AI가 모든 테스트와 UI/UX 검수를 자동 완료한다는 표현
- local LLM 번역 품질 보장 또는 완전 자동 번역
- private repository names, paths, transcripts, customer data, order/payment/settlement data
- production endpoints, hostnames, credentials, private config
- PR·CI 통과를 release·deployment·외부 adoption으로 확대하는 표현
- 완료되지 않은 Live Commerce나 AI prototype을 상용 성과로 표현

## Public Resume Bullet Candidates

```markdown
- PHP 기반 커머스·물류 운영 시스템에서 상품, 주문, 재고, 입고·출고, 정산 관련 기능을 개발·고도화
- AS-IS 코드·DB 구조와 외부 API 문서를 확인한 뒤 변경 범위와 검증 기준을 정리하고, 외부 연동 코드를 책임별 모듈로 분리
- 프로젝트 소스맵·기능 문서·개발 규칙을 정리해 2인 개발 환경의 PR 리뷰·커밋·기능 검수 기준으로 사용
```

### AI-assisted Workflow Candidates

```markdown
- 요구사항 정리, 설계 검수, 구현, 코드 검수, 디버깅, Playwright E2E, 사람 승인을 단계별 Workflow로 운영
- Agent의 test skip·fail·미실행 보고 누락을 겪은 뒤 시나리오·결과 문서와 실제 산출물 확인을 완료 조건에 추가
- 반복 절차를 일회성 프롬프트가 아닌 Skill·Wiki·프로젝트 규칙으로 버전 관리
- Ollama·Gemma 3 기반 로컬 번역 도구를 내부 환경에 구성해 한·영·일·중 언어팩 생성과 PHP/JSON 반영 업무에 실제 사용
```

## Projection Rule

```text
protected source
→ role and fact confirmation
→ public-safe wording
→ evidence link or sanitized diagram
→ adversarial review
→ portfolio publication
```

A public repository is evidence only for the behavior it actually contains. Repository size, test count, or implementation volume alone does not make it a primary resume case.
