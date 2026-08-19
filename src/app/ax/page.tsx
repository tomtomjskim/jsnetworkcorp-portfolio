import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AX / Internal Tools Case Studies | JSNetworkCorp Portfolio',
  description:
    'Case-study-first web projection of developer internal tooling, practical AI automation, commerce change-impact analysis, and MES requirement modeling.'
};

const canonicalPortfolio =
  'https://github.com/tomtomjskim/jsnetworkcorp-portfolio/blob/main/PORTFOLIO-AX.md';

const caseMap = [
  {
    no: '01',
    title: 'Developer Internal Tooling',
    problem: 'Repeated configuration / drift',
    decision: '추상화가 실제 반복 비용을 줄일 때만 도구화',
    evidence: 'harness-kit + merged-main CI'
  },
  {
    no: '02',
    title: 'Commerce Change Impact',
    problem: 'State-heavy operational changes',
    decision: '증상이 아니라 변경 blast radius부터 확인',
    evidence: 'Sanitized career case'
  },
  {
    no: '03',
    title: 'MES Requirement Modeling',
    problem: 'Ambiguous field requests',
    decision: '현업 언어를 상태·조회·권한 규칙으로 번역',
    evidence: 'Sanitized career case'
  },
  {
    no: '04',
    title: 'Practical AI Automation',
    problem: 'Repeated i18n translation / code-entry work',
    decision: 'AI · deterministic code · 사람 검수를 분리',
    evidence: 'Actual Local LLM workflow'
  }
];

const repoEvidence = [
  {
    name: 'harness-kit',
    href: 'https://github.com/tomtomjskim/harness-kit',
    why: 'Developer internal tooling / typed configuration',
    verified: 'Node 22/24 · audit · typecheck · 36 tests · build · CLI smoke',
    limit: 'Production adoption / productivity claim 없음'
  },
  {
    name: 'codex-workflow-skills',
    href: 'https://github.com/tomtomjskim/codex-workflow-skills',
    why: 'Review / validation / failure-accounting contracts',
    verified: 'Public forward-test + GitHub Actions',
    limit: 'External/live path 일부 skip 또는 not_run'
  },
  {
    name: 'stackforge-atlas',
    href: 'https://github.com/tomtomjskim/stackforge-atlas',
    why: 'Intent → interface → evidence → recovery',
    verified: 'Node/PostgreSQL pilots + recovery drill + CI',
    limit: 'PITR / HA / failover 증명 아님'
  }
];

function Flow({ nodes }: { nodes: string[] }) {
  return (
    <div className="axFlow" role="img" aria-label={nodes.join(' then ')}>
      {nodes.map((node, index) => (
        <div className="axFlowStep" key={node}>
          <span className="axFlowNode">{node}</span>
          {index < nodes.length - 1 ? <span className="axFlowArrow" aria-hidden="true">→</span> : null}
        </div>
      ))}
    </div>
  );
}

export default function AxCasesPage() {
  return (
    <article className="axPortfolio">
      <section className="axHero">
        <p className="eyebrow">PS-v1.4.1 · Case-study-first web projection</p>
        <h1>문제 해결 방식을 먼저 보여주는 AX / Internal Tools 포트폴리오</h1>
        <p>
          운영형 PHP/MySQL 업무시스템에서 상태와 변경 경계를 다뤄 온 경험을 바탕으로,
          반복되는 개발 문제를 내부도구와 실용적인 자동화로 바꾸는 과정을 Case 단위로 보여줍니다.
        </p>
        <div className="actions">
          <a href={canonicalPortfolio}>Open canonical GitHub portfolio</a>
          <a className="axSecondaryAction" href="/projects/">Browse all projects</a>
        </div>
        <p className="axBoundaryLine">
          Resume는 <strong>무엇을 했는지</strong> 요약하고, 이 페이지는 <strong>어떻게 판단하고 검증하는지</strong> 보여줍니다.
        </p>
      </section>

      <section className="axSection" aria-labelledby="portfolio-map">
        <div className="axSectionHead">
          <div>
            <p className="eyebrow">30-second portfolio map</p>
            <h2 id="portfolio-map">Four cases, four different evidence types</h2>
          </div>
          <p>Case마다 증거 강도를 동일하게 포장하지 않습니다.</p>
        </div>
        <div className="axCaseMap">
          {caseMap.map((item) => (
            <article className="axCaseSummary" key={item.no}>
              <span className="axCaseNo">{item.no}</span>
              <h3>{item.title}</h3>
              <dl>
                <div><dt>Problem</dt><dd>{item.problem}</dd></div>
                <div><dt>Decision</dt><dd>{item.decision}</dd></div>
                <div><dt>Evidence</dt><dd>{item.evidence}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="axCase axCaseTooling" id="case-internal-tooling">
        <div className="axCaseIntro">
          <p className="eyebrow">Case 01 · Developer Internal Tooling</p>
          <h2>When should repeated configuration become a tool?</h2>
          <p>
            프로젝트마다 반복되는 instruction, hooks, permissions, agent/workflow 설정에서
            configuration drift가 실제 반복 비용이 되는 시점을 기준으로 도구화 범위를 결정했습니다.
          </p>
        </div>
        <div className="axCaseCanvas">
          <Flow nodes={['Repeated project config', 'Drift cost?', 'Typed modules', 'Validate + generate', 'Audit / Test / Build']} />
          <div className="axDecisionGrid">
            <article className="axNote">
              <span className="axLabel">Decision</span>
              <p>프로젝트 수가 적고 공통 변경이 드물면 직접 편집을 유지합니다. 반복 drift가 비용이 될 때만 configuration-as-code를 적용합니다.</p>
            </article>
            <article className="axNote">
              <span className="axLabel">Proof</span>
              <p>첫 functional green 이후 dependency high 이슈를 발견해 승격을 중단하고, remediation + high-severity audit gate 후 Node 22/24에서 다시 검증했습니다.</p>
            </article>
            <article className="axNote">
              <span className="axLabel">Not selected</span>
              <p>모든 프로젝트를 강제하는 중앙 플랫폼이나 LLM이 설정 충돌을 자유롭게 해결하는 구조는 선택하지 않았습니다.</p>
            </article>
          </div>
          <div className="axEvidenceActions">
            <a href="https://github.com/tomtomjskim/harness-kit">Open harness-kit</a>
            <a href="https://github.com/tomtomjskim/jsnetworkcorp-portfolio/blob/main/docs/portfolio-ax/cases/01-harness-kit-internal-tooling.md">Read deep dive</a>
          </div>
        </div>
      </section>

      <section className="axCase axCaseAi" id="case-practical-ai">
        <div className="axCaseIntro">
          <p className="eyebrow">Case 04 · Practical AI Automation</p>
          <h2>Use AI only where uncertainty actually exists</h2>
          <p>
            실제 다국어 언어팩 반복 업무에서 자연어 번역은 Local LLM, 구조화된 파일 변환은 deterministic code,
            소형 모델의 품질 판단은 사람에게 남겼습니다.
          </p>
        </div>
        <div className="axCaseCanvas">
          <Flow nodes={['Korean key / value', 'Local LLM translation draft', 'Deterministic PHP / JSON conversion', 'Human validation']} />
          <div className="axResponsibilityGrid">
            <article className="axNote">
              <span className="axLabel">AI</span>
              <p>자연어 번역처럼 규칙으로 고정하기 어려운 linguistic transformation의 초안을 생성합니다.</p>
            </article>
            <article className="axNote">
              <span className="axLabel">Code</span>
              <p>key/value 보존, PHP language-pack 생성, JSON 변환처럼 입력·출력이 명확한 부분을 담당합니다.</p>
            </article>
            <article className="axNote">
              <span className="axLabel">Human</span>
              <p>CPU-only / 소형 모델의 오역과 화면 맥락을 확인하고 최종 반영을 판단합니다.</p>
            </article>
          </div>
          <blockquote className="axPrinciple">Model response ≠ Completion evidence</blockquote>
          <div className="axEvidenceActions">
            <a href="https://github.com/tomtomjskim/jsnetworkcorp-portfolio/blob/main/content/projects/local-llm-i18n-workflow.md">Open Local LLM case</a>
            <a href="https://github.com/tomtomjskim/jsnetworkcorp-portfolio/blob/main/docs/portfolio-ax/cases/04-ai-assisted-verification.md">Read deep dive</a>
          </div>
        </div>
      </section>

      <section className="axCase" id="case-commerce">
        <div className="axCaseIntro">
          <p className="eyebrow">Case 02 · Commerce / Logistics</p>
          <h2>Bound the change before touching the symptom</h2>
          <p>
            화면의 이상 값만 수정하기보다 이번 변경에 연결된 DB state, permission, admin workflow,
            batch/cron과 external API까지 먼저 확인해 blast radius를 좁힙니다.
          </p>
        </div>
        <div className="axCaseCanvas">
          <Flow nodes={['Change request', 'AS-IS code + DB state', 'Permission / Admin / Batch / External API', 'Bounded change scope']} />
          <div className="axSplitPanel">
            <article className="axNote">
              <span className="axLabel">Questions before editing</span>
              <ul>
                <li>이 값의 source of truth는 어디인가?</li>
                <li>누가 상태를 바꾸고, 관리자와 사용자 화면은 같은 조건을 보는가?</li>
                <li>batch나 외부 응답이 뒤에서 상태를 다시 바꾸는가?</li>
              </ul>
            </article>
            <article className="axNote">
              <span className="axLabel">Batch boundary</span>
              <Flow nodes={['Upload', 'Preview', 'Confirm', 'Batch', 'Complete / Fail']} />
            </article>
          </div>
          <div className="axEvidenceActions">
            <a href="https://github.com/tomtomjskim/jsnetworkcorp-portfolio/blob/main/docs/portfolio-ax/cases/02-commerce-change-impact.md">Read Commerce case</a>
            <a href="https://github.com/tomtomjskim/jsnetworkcorp-portfolio/blob/main/content/projects/commerce-fulfillment-operations.md">Open sanitized source</a>
          </div>
        </div>
      </section>

      <section className="axCase" id="case-mes">
        <div className="axCaseIntro">
          <p className="eyebrow">Case 03 · Manufacturing MES</p>
          <h2>Translate field language into system conditions</h2>
          <p>
            “화면을 바꿔 주세요”를 UI task로만 보지 않고 실제 작업순서, 입력·조회 조건, 상태, 통계,
            권한과 DB 범위로 분해합니다.
          </p>
        </div>
        <div className="axCaseCanvas">
          <Flow nodes={['Field request', 'Real work sequence', 'Input / Query / State / Report / Permission', 'Screen + DB scope']} />
          <div className="axSplitPanel">
            <article className="axNote">
              <span className="axLabel">Operational model</span>
              <p>작업지시 → 공정 → 생산실적 → 품질/불량 → 재고 → 납기 흐름에서 실제 업무와 system state가 어긋나지 않게 봅니다.</p>
            </article>
            <article className="axNote">
              <span className="axLabel">Troubleshooting boundary</span>
              <p>Application/Data → Permission/Account → Network/Printer/Device/Operator environment 순으로 문제 계층을 분리합니다.</p>
            </article>
          </div>
          <div className="axEvidenceActions">
            <a href="https://github.com/tomtomjskim/jsnetworkcorp-portfolio/blob/main/docs/portfolio-ax/cases/03-mes-requirement-modeling.md">Read MES case</a>
            <a href="https://github.com/tomtomjskim/jsnetworkcorp-portfolio/blob/main/content/projects/manufacturing-mes-business-systems.md">Open sanitized source</a>
          </div>
        </div>
      </section>

      <section className="axSection axEngineeringModel" aria-labelledby="engineering-model">
        <div className="axSectionHead">
          <div>
            <p className="eyebrow">Engineering model</p>
            <h2 id="engineering-model">A common decision loop across all four cases</h2>
          </div>
        </div>
        <Flow nodes={['Observe workflow', 'Find boundary', 'Smallest useful change', 'Implement', 'Verify evidence', 'Human acceptance']} />
        <div className="axPillars">
          <article><h3>Boundary thinking</h3><p>증상이 아니라 상태·권한·배치·외부 경계를 먼저 찾습니다.</p></article>
          <article><h3>State / data reasoning</h3><p>화면, DB, 업무 상태와 조회·집계 조건을 같이 봅니다.</p></article>
          <article><h3>Pragmatic automation</h3><p>AI가 필요한 부분과 deterministic code가 안전한 부분을 분리합니다.</p></article>
          <article><h3>Verification discipline</h3><p>Green 결과도 새로운 리스크가 보이면 validation contract를 다시 엽니다.</p></article>
        </div>
      </section>

      <section className="axSection" aria-labelledby="evidence-index">
        <div className="axSectionHead">
          <div>
            <p className="eyebrow">Evidence index</p>
            <h2 id="evidence-index">Open the evidence, not just the claim</h2>
          </div>
          <p>Public R&amp;D와 실제 업무 사례는 같은 종류의 증거로 취급하지 않습니다.</p>
        </div>
        <div className="axRepoGrid">
          {repoEvidence.map((repo) => (
            <article className="axRepoCard" key={repo.name}>
              <div className="axRepoTitle">
                <h3>{repo.name}</h3>
                <span className="axVerified">Verified</span>
              </div>
              <p>{repo.why}</p>
              <dl>
                <div><dt>Verification</dt><dd>{repo.verified}</dd></div>
                <div><dt>Limit</dt><dd>{repo.limit}</dd></div>
              </dl>
              <a href={repo.href}>Open repository →</a>
            </article>
          ))}
        </div>
        <div className="axCanonical">
          <div>
            <span className="axLabel">Canonical source</span>
            <p>GitHub Case Study가 기술 포트폴리오의 source of truth입니다.</p>
          </div>
          <a href={canonicalPortfolio}>Open PORTFOLIO-AX.md →</a>
        </div>
      </section>
    </article>
  );
}
