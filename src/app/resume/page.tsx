export default function ResumePage() {
  return (
    <section>
      <p className="eyebrow">Resume</p>
      <h1>Role-specific resume variants</h1>
      <div className="grid">
        <article className="card"><h3>Backend / Full-stack</h3><p>API, product implementation, testing, and modernization evidence.</p></article>
        <article className="card"><h3>AI Workflow / Agent Tooling</h3><p>LLM workflow, context pack, MCP safety, and review gate evidence.</p></article>
        <article className="card"><h3>Platform / Modernization</h3><p>Legacy migration, architecture, handoff, and release discipline.</p></article>
      </div>
      <p className="muted">Downloadable PDF files are deferred until claim verification is complete.</p>
    </section>
  );
}
