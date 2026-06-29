'use client';

import { useMemo, useState } from 'react';
import type { Project, ProjectFamily } from '@/lib/types';
import { familyLabels } from '@/lib/labels';
import { ProjectCard } from './ProjectCard';

const families: Array<ProjectFamily | 'all'> = [
  'all',
  'manufacturing-systems',
  'commerce-fulfillment',
  'product-engineering',
  'architecture-direction',
  'ai-workflow-agent-tooling',
  'infra-mcp-safety',
  'legacy-modernization'
];

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState('');
  const [family, setFamily] = useState<ProjectFamily | 'all'>('all');

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesFamily = family === 'all' || project.family === family;
      const searchable = [
        project.name,
        project.family,
        project.summary,
        project.stack.join(' '),
        project.status,
        project.publicEvidence.join(' ')
      ].join(' ').toLowerCase();
      const matchesQuery = !q || searchable.includes(q);
      return matchesFamily && matchesQuery;
    });
  }, [family, projects, query]);

  return (
    <section>
      <div className="toolbar">
        <label>
          <span className="visuallyHidden">Search projects</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects, stack, evidence..." />
        </label>
        <label>
          <span className="visuallyHidden">Filter by portfolio family</span>
          <select value={family} onChange={(event) => setFamily(event.target.value as ProjectFamily | 'all')}>
            {families.map((item) => (
              <option key={item} value={item}>{item === 'all' ? 'All families' : familyLabels[item]}</option>
            ))}
          </select>
        </label>
      </div>
      {visible.length === 0 ? (
        <p className="muted">No project matched the current filter.</p>
      ) : (
        <div className="grid">{visible.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      )}
    </section>
  );
}
