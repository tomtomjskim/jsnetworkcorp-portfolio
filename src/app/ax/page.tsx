import Link from 'next/link';

const localLlmFlow = [
  '한국어 key/value',
  'Python + Ollama / Gemma 3',
  'EN / JA / ZH 번역 초안',
  'PHP 언어팩 생성',
  'JSON 변환',
  'Human validation'
];

const verificationFlow = [
  'Problem / Scope',
  'AI-assisted work',
  'Static / Test / CI',
  'Independent review',
  'Human acceptance'
];

export default function AxCasesPage() {
  return (
    <article className="detail">
      <section className="hero">
        <p className="eyebrow">AX / Internal Tools</p>
        <h1>AI를 쓰는 것보다 어디까지 맡길지를 설계합니다.</h1>
        <p>
          실제 반복 업무에는 AI가 필요한 구간만 적용하고, 입력과 출력이 명확한 작업은 일반 코드로 유지합니다.
          생성 결과는 테스트와 실행 근거로 확인하고, 업무 정책과 최종 반영은 사람이 판단합니다.
        </p>
        <div className="actions">
          <a href="https://github.com/tomtomjskim/jsnetworkcorp-portfolio/blob/main/PORTFOLIO-AX.md">GitHub AX Portfolio</a>
          <Link href="/projects/">All Projects</Link>
        </div>
      </section>

      <section>
        <p className="eyebrow">Featured cases</p>
        <div className="grid">
          <article className="card">
            <div className="cardMeta">
              <span className="badge">Actual work automation</span>
              <span className="badge">Local LLM</span>
              <span className="badge">Human validation</span>
            </div>
            <h2>01. Local LLM i18n Workflow</h2>
            <p>
              언어별 번역기를 실행하고 결과를 복사해 코드에 입력하던 반복 작업을 내부망 로컬 LLM과 별도 변환 프로그램으로 나눴습니다.
              자연어 번역은 LLM이 맡고, PHP 언어팩 생성과 JSON 변환은 입력·출력이 명확한 별도 프로그램이 처리하도록 책임을 분리했습니다.
            </p>
            <div className="screenEvidence" aria-label="Local LLM i18n workflow">
              <div className="screenEvidenceHeader">
                <span>Practical automation</span>
                <span className="badge">CPU-only environment</span>
              </div>
              <div className="screenEvidenceFlow">
                {localLlmFlow.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="screenEvidenceStates">
                <span>draft</span>
                <span>converted</span>
                <span>reviewed</span>
                <span>applied</span>
              </div>
              <p>소형 모델의 처리 속도·번역 품질 한계를 인정하고 최종 검수는 사람이 유지합니다.</p>
            </div>
            <ul>
              <li>전용 GPU 없이 내부 개발 PC에서 실제 사용</li>
              <li>프론트 개발자의 반복적인 언어팩 업무에 적용</li>
              <li>생산성 향상률·번역 정확도·비용 절감률은 측정하지 않아 주장하지 않음</li>
            </ul>
            <a href="https://github.com/tomtomjskim/jsnetworkcorp-portfolio/blob/main/content/projects/local-llm-i18n-workflow.md">Read sanitized case →</a>
          </article>

          <article className="card">
            <div className="cardMeta">
              <span className="badge">AI-assisted engineering</span>
              <span className="badge">Evidence boundary</span>
              <span className="badge">Playwright E2E</span>
            </div>
            <h2>02. Model Output Is Not Completion Evidence</h2>
            <p>
              Agent가 테스트를 skip하거나 실패·미실행 상태를 충분히 보고하지 않는 사례를 경험한 뒤,
              응답이 아니라 실제 실행 결과와 체크리스트를 완료 판단 기준으로 사용하도록 작업 흐름을 보완했습니다.
            </p>
            <div className="screenEvidence" aria-label="AI-assisted verification workflow">
              <div className="screenEvidenceHeader">
                <span>Verification boundary</span>
                <span className="badge">Model response ≠ done</span>
              </div>
              <div className="screenEvidenceFlow">
                {verificationFlow.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="screenEvidenceStates">
                <span>passed</span>
                <span>failed</span>
                <span>skipped</span>
                <span>not_run</span>
              </div>
              <p>자동화가 판단하기 어려운 UI/UX·사용자 동선·운영 영향은 배포 전에 사람이 직접 확인합니다.</p>
            </div>
            <ul>
              <li>프로젝트 규칙·소스맵·기능 문서·리뷰 기준을 반복 가능한 컨텍스트로 관리</li>
              <li>Playwright E2E와 Markdown 실행 결과를 실제 완료 근거로 사용</li>
              <li>최종 설계·업무 정책·배포 판단은 코드·DB·테스트를 확인한 뒤 결정</li>
            </ul>
            <a href="https://github.com/tomtomjskim/jsnetworkcorp-portfolio/blob/main/docs/portfolio-ax/cases/04-ai-assisted-verification.md">Read verification deep dive →</a>
          </article>
        </div>
      </section>

      <section className="split">
        <article className="card">
          <p className="eyebrow">Decision rule</p>
          <h2>AI가 필요한 일과 일반 코드가 더 나은 일을 분리합니다.</h2>
          <ul>
            <li>동일 입력에서 명확한 동일 출력이 필요한 작업은 deterministic code를 우선합니다.</li>
            <li>자연어·분류·요약처럼 규칙으로 고정하기 어려운 부분은 AI candidate로 다룹니다.</li>
            <li>결과를 검증하기 어렵거나 production write 위험이 큰 작업은 AI 직접 실행 범위를 줄입니다.</li>
          </ul>
        </article>
        <article className="card">
          <p className="eyebrow">Evidence rule</p>
          <h2>잘 된 결과만 보여주지 않습니다.</h2>
          <ul>
            <li>pass와 skip·failure·not_run을 구분합니다.</li>
            <li>공개 R&amp;D 저장소를 회사 production 경험으로 바꿔 말하지 않습니다.</li>
            <li>측정하지 않은 생산성·정확도·비용·조직 확산 수치는 사용하지 않습니다.</li>
          </ul>
        </article>
      </section>

      <section className="card">
        <p className="eyebrow">Public engineering evidence</p>
        <h2>구현과 검증 방식은 공개 저장소로 연결합니다.</h2>
        <div className="grid compact">
          <a className="card small" href="https://github.com/tomtomjskim/codex-workflow-skills">codex-workflow-skills</a>
          <a className="card small" href="https://github.com/tomtomjskim/harness-kit">harness-kit</a>
          <a className="card small" href="https://github.com/tomtomjskim/stackforge-atlas">stackforge-atlas</a>
        </div>
        <p className="muted">
          공개 저장소는 현재 engineering capability와 verification discipline의 증거이며, 실제 회사 업무 사례와는 구분해 제시합니다.
        </p>
      </section>
    </article>
  );
}
