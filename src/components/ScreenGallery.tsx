'use client';

import { useMemo, useState } from 'react';
import type { ScreenSpec, ScreenStatus } from '@/lib/types';
import { familyLabels, screenStatusLabels } from '@/lib/labels';
import { projects } from '@/lib/data';
import { ScreenEvidence } from './ScreenEvidence';
import { StatusBadge } from './StatusBadge';

const statuses: Array<ScreenStatus | 'all'> = ['all', 'implemented', 'prototype', 'planned', 'sanitized', 'archived'];

export function ScreenGallery({ screens }: { screens: ScreenSpec[] }) {
  const [status, setStatus] = useState<ScreenStatus | 'all'>('all');
  const visible = useMemo(() => status === 'all' ? screens : screens.filter((screen) => screen.status === status), [screens, status]);
  const projectFamilyBySlug = useMemo(() => new Map(projects.map((project) => [project.slug, project.family])), []);

  return (
    <section>
      <div className="toolbar">
        <label>
          <span className="visuallyHidden">Filter by screen status</span>
          <select value={status} onChange={(event) => setStatus(event.target.value as ScreenStatus | 'all')}>
            {statuses.map((item) => (
              <option key={item} value={item}>{item === 'all' ? 'All statuses' : screenStatusLabels[item]}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid">
        {visible.map((screen) => (
          <article className="card" key={screen.id}>
            <ScreenEvidence screen={screen} />
            <div className="cardMeta">
              <StatusBadge>{screenStatusLabels[screen.status]}</StatusBadge>
              <StatusBadge>{familyLabels[projectFamilyBySlug.get(screen.project) ?? 'product-engineering']}</StatusBadge>
            </div>
            <h3>{screen.title}</h3>
            <p>{screen.purpose}</p>
            <p className="muted">Signal: {screen.engineeringSignal}</p>
            <p className="muted">Target: {screen.targetUser}</p>
            <p className="muted">States: {screen.states.join(', ')}</p>
            <p className="muted">Components: {screen.components.join(', ')}</p>
            <p className="muted">Boundary: {screen.dataBoundary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
