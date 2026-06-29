import Link from 'next/link';
import type { Project } from '@/lib/types';
import { StatusBadge } from './StatusBadge';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <div className="cardMeta">
        <StatusBadge>{project.family}</StatusBadge>
        <StatusBadge>{project.publicStatus}</StatusBadge>
      </div>
      <h3><Link href={`/projects/${project.slug}/`}>{project.name}</Link></h3>
      <p>{project.summary}</p>
      <p className="muted">{project.stack.join(' · ')}</p>
    </article>
  );
}
