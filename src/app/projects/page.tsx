import { ProjectExplorer } from '@/components/ProjectExplorer';
import { projects } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <section>
      <p className="eyebrow">Projects</p>
      <h1>Project evidence map</h1>
      <p className="muted">Filter by hiring signal, stack, and portfolio family.</p>
      <ProjectExplorer projects={projects} />
    </section>
  );
}
