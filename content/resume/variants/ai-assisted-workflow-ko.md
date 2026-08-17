# AI-assisted Workflow Resume Variant — KO

version: PF-v1.0.2
updated: 2026-08-17
visibility: public-sanitized
status: draft
variant: ai-assisted-workflow-ko

## Headline

운영 시스템 경험을 바탕으로 LLM·Agent의 작업 절차와 검증 책임을 설계하는 백엔드 개발자

## Summary

PHP 기반 커머스·물류·MES 업무시스템을 개발하면서 LLM과 Agent를 요구사항 정리, 코드베이스 분석, 구현, 리뷰, 테스트, 문서화에 사용해 왔습니다. 반복되는 절차는 일회성 프롬프트에 두지 않고 프로젝트 규칙, Skill, Wiki, 체크리스트로 관리합니다. AI가 제안하거나 완료했다고 보고한 결과도 실제 코드·DB·테스트 산출물을 확인하고 사람이 최종 판단합니다.

## Cover Letter Module

LLM 활용 방식도 프로젝트가 커지면서 바뀌었습니다. 초기에는 코드 초안과 오류 탐색에 주로 사용했지만, 운영 중인 커머스 플랫폼의 기능과 외부 연동이 늘어난 뒤에는 AS-IS 코드와 DB 구조, 도메인 지식, 외부 API 계약을 먼저 정리하고 Agent가 참고할 수 있는 프로젝트 규칙과 소스맵으로 남겼습니다. 백엔드·프론트 2인 개발 환경에서 같은 Skill과 규칙을 사용했고, PR 리뷰와 커밋, 기능 검수 기준도 함께 맞췄습니다.

개발 과정은 요구사항 정리, 설계 검수, 구현, 코드 검수, 디버깅, Playwright E2E, 사람 승인으로 나눴습니다. Agent가 테스트를 건너뛰거나 실패·미실행 항목을 충분히 보고하지 않는 문제를 겪은 뒤에는 시나리오와 실행 결과를 Markdown으로 기록하고, 체크리스트와 실제 산출물을 확인해야 완료로 판단하도록 바꿨습니다. 반복되는 절차는 Skill, Wiki, 프로젝트 규칙으로 버전 관리했으며, 자동화로 판단하기 어려운 UI/UX와 운영 영향은 사람이 최종 확인했습니다.

실제 반복 업무에도 로컬 LLM을 적용했습니다. GPU가 없는 내부 PC에 Ollama와 Gemma 3 기반 Python 서버를 구성하고, 한국어 key/value를 영어·일본어·중국어로 번역한 뒤 별도 프로그램에서 PHP와 JSON 언어팩으로 변환했습니다. 소형 모델의 속도와 품질 한계를 전제로 사람이 결과를 확인했지만, 언어별 번역과 코드 입력을 반복하던 작업을 병렬로 처리할 수 있었고 프론트 개발자가 실제 업무에 사용했습니다. AI 도입은 도구 수를 늘리는 일이 아니라 반복 업무를 다시 설계하고 검증 책임을 분명하게 만드는 일이라고 보고 있습니다.

## Workflow

```text
요구사항과 제약 확인
→ AS-IS 코드·DB·외부 계약 분석
→ 설계와 검수 기준 작성
→ 구현
→ 독립 코드 검수
→ 디버깅
→ Playwright E2E
→ 결과 문서 확인
→ 사람 승인
```

## Public Evidence

### Primary

- [`codex-workflow-skills`](https://github.com/tomtomjskim/codex-workflow-skills): 작업 intake, 독립 검토, adversarial review, 검증 기반 closeout
- [`claude-code-guide`](https://github.com/tomtomjskim/claude-code-guide): Skill, Hook, Handoff, Failure Recovery, 프로젝트 Workflow
- 운영 커머스 플랫폼의 sanitized case: 프로젝트 규칙, 소스맵, PR·커밋·검수 기준, E2E
- Ollama·Gemma 3 i18n case: 로컬 번역과 PHP/JSON 언어팩 반영 흐름

### Supporting

- [`stackforge-atlas`](https://github.com/tomtomjskim/stackforge-atlas)
- [`db-mcp`](https://github.com/tomtomjskim/db-mcp) — 공개 전 표현 정리 필요
- [`harness-kit`](https://github.com/tomtomjskim/harness-kit)
- Personal Wiki trust layer — 구조만 공개
- `codex-project-guide` — private 링크 없이 운영 경험만 설명

## Evidence Boundaries

- 공개 저장소 수나 테스트 수치를 자기소개서 성과로 나열하지 않음
- PR·CI 통과와 release·deployment·외부 adoption을 구분
- 2인 개발 환경의 공통 적용 범위 이상으로 확대하지 않음
- 측정하지 않은 생산성·시간·비용·정확도 개선율을 사용하지 않음
- private 코드·문서·데이터는 synthetic diagram과 sanitized 설명으로 대체
- `aiwright`, `image-translator`, Tier C 저장소는 대표 근거에서 제외

## Use This Variant For

- AI-assisted development
- AX·업무 자동화
- Agent Workflow
- Developer Experience
- AI Tooling·Platform
- 테스트·평가·지식관리·거버넌스
