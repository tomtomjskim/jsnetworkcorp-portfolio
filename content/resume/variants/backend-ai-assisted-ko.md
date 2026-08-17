# AI-assisted Backend Resume Variant — KO

version: PF-v1.1.0
updated: 2026-08-17
visibility: public-sanitized
status: draft
variant: backend-ai-assisted-ko

## Headline

PHP/MySQL 운영 시스템을 이해하고 검증하는 과정에 LLM을 실무적으로 활용하는 백엔드 개발자

## Summary

PHP 기반 커머스·물류·MES 업무시스템을 개발해 왔습니다. LLM은 코드를 대신 작성하는 도구보다 AS-IS 코드와 DB 구조, 외부 API 문서를 빠르게 파악하고 변경 영향과 누락 가능성을 점검하는 보조 수단으로 사용합니다. 최종 설계와 운영 영향은 직접 판단하고, 코드 리뷰·테스트·사람 검수를 통과한 결과만 반영합니다.

## Cover Letter Module

운영 중인 PHP 프로젝트에서는 LLM을 코드 생성보다 기존 구조와 변경 영향을 확인하는 보조 수단으로 사용하고 있습니다. Burst Express의 AS-IS 코드·DB 구조와 외부 API 문서를 분석하고, 보안상 누락과 반복 오류, 공통화 대상을 점검해 프로젝트 소스맵과 기능 문서, 개발 규칙으로 정리했습니다. 이 기준은 백엔드·프론트 2인 개발 환경의 PR 리뷰와 커밋, 기능 검수에 실제로 사용하고 있습니다.

기능은 요구사항 정리부터 설계, 구현, 코드 검수, 디버깅, Playwright E2E까지 단계별로 진행합니다. 자동화 결과가 테스트 실행과 성공을 항상 보장하지 않는다는 점을 확인한 뒤 시나리오와 결과를 Markdown으로 남기고 실제 실행 결과를 확인하도록 보완했습니다. 다국어 언어팩에는 Ollama와 Gemma 3 기반 로컬 번역 도구를 적용해 반복 번역과 파일 변환 작업을 줄였으며, 최종 코드와 업무 정책, 화면 흐름은 직접 검수했습니다.

## What This Variant Emphasizes

- 레거시 PHP 코드와 DB 영향 분석
- 외부 API 문서·필드 파악과 연동 모듈화
- PR 리뷰·커밋·기능 검수의 공통 기준
- Playwright E2E 결과의 직접 확인
- 로컬 LLM을 실제 반복 업무에 적용한 경험
- AI 제안과 최종 사람 판단의 분리

## Public Evidence

Primary:

- [`codex-workflow-skills`](https://github.com/tomtomjskim/codex-workflow-skills)
- [`claude-code-guide`](https://github.com/tomtomjskim/claude-code-guide)
- Burst Express의 공개 가능한 문제·결정·검증 설명
- Ollama·Gemma 3 언어팩 작업의 일반화된 구조와 결과물

Supporting:

- [`stackforge-atlas`](https://github.com/tomtomjskim/stackforge-atlas)
- [`db-mcp`](https://github.com/tomtomjskim/db-mcp) — 강한 README 표현 정리 후
- [`harness-kit`](https://github.com/tomtomjskim/harness-kit)
- Personal Wiki의 지식 승격 구조 — 원문 비공개

## Boundaries

- 2인 개발 환경의 공통 규칙과 검수 기준까지만 주장
- 신규 인력 온보딩이나 전사 AX 도입 성과를 주장하지 않음
- 측정하지 않은 생산성·정확도 개선율을 사용하지 않음
- private 저장소·경로·업무 데이터는 공개하지 않음
- `aiwright`와 `image-translator`는 이 variant의 대표 근거로 사용하지 않음
