# AI-assisted Workflow Resume Variant — KO

version: PF-v1.0.1
updated: 2026-08-13
visibility: public-sanitized
status: draft
variant: ai-assisted-workflow-ko

## Headline

업무시스템 개발 경험에 AI 작업 계약·독립 검토·테스트·지식 승격을 결합하는 백엔드/풀스택 개발자

## Summary

PHP 기반 MES 및 커머스 운영 시스템 경험을 바탕으로 ChatGPT·Claude·Codex를 요구사항 정형화, 구현 후보 생성, 독립 검토, 테스트, 문서화에 활용합니다. 반복 작업은 skill·harness·CI로 고정하고 AI 결과는 실제 코드·DB·권한·상태 전이·결정론적 검사·사람 승인으로 검증합니다. 미실행·차단·가설은 성과와 분리해 기록합니다.

## AI Workflow Claims

- Codex 작업을 intake → 구현 → 독립 검토 → session closeout으로 분리한 공개 skill 6종을 설계하고, 2026-08-05 forward-test report에서 881 tests 중 879 pass·외부 환경 의존 2 skip을 기록
- TypeScript 기반 AI usage intelligence 도구에서 prompt profile·diagnosis·adaptation·drift·LLM-as-Judge를 구조화하고 54 test files·795 tests로 기능 기준을 검증
- 개인 제품 개발에서 AI 공동작업 결과를 E2E 88/88·시나리오 36/36·Flutter smoke 1/1로 검증하고, 배포 전·외부 API 일부 mock 상태를 한계로 분리
- AI 대화·산출물을 `inbox → generated → reviewed → canonical` 신뢰 계층으로 분리하고 출처·민감도·사람 승격 규칙을 적용
- 이력서 raw data, public claim, protected evidence를 분리하고 강한 문구는 근거·역할·한계를 확인한 뒤 승격

## Evidence Notes

- 공개 검증 링크는 `codex-workflow-skills`와 `aiwright`만 사용합니다.
- 개인 제품과 지식 체계는 비공개 근거이므로 공개 문구에 저장소명·경로·민감 데이터를 넣지 않습니다.
- 795 tests는 기능 회귀 기준이며 생산성 향상률이나 live-model 품질을 증명하지 않습니다.
- `aiwright`의 dependency·distribution 보강은 draft PR #1과 CI run #1까지 공개됐지만 merge·release 전이므로 배포 완료 claim에 사용하지 않습니다.

## Emphasis

Use this variant for roles or teams that value:

- AI-assisted development process
- documentation discipline
- release/version management
- knowledge management
- redaction and content-boundary governance
- legacy/project modernization with structured notes

## Exclusions

- raw AI transcripts
- private wiki exports
- private evidence maps in public repo
- internal tool names without explanation
- unsupported productivity metrics
