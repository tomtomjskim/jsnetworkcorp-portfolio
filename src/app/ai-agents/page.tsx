import { CapabilityMap } from '@/components/CapabilityMap';
import { ProjectCard } from '@/components/ProjectCard';
import { capabilities, projects } from '@/lib/data';

export default function AiAgentsPage() {
  const aiProjects = projects.filter((project) => project.family === 'ai-workflow-agent-tooling' || project.family === 'infra-mcp-safety');

  return (
    <section>
      <p className="eyebrow">AI Agents / LLM Portfolio</p>
      <h1>AI ability as operating discipline.</h1>
      <p className="muted">
        This section frames AI work as context packaging, workflow design, human review gates,
        MCP safety, verification, and release governance.
      </p>
      <CapabilityMap capabilities={capabilities} />
      <h2>Case studies</h2>
      <div className="grid">{aiProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
    </section>
  );
}
