'use client';

import { useMemo, useState } from 'react';
import type { ScreenSpec, ScreenStatus } from '@/lib/types';
import { StatusBadge } from './StatusBadge';

const statuses: Array<ScreenStatus | 'all'> = ['all', 'implemented', 'prototype', 'planned', 'sanitized', 'archived'];

export function ScreenGallery({ screens }: { screens: ScreenSpec[] }) {
  const [status, setStatus] = useState<ScreenStatus | 'all'>('all');
  const visible = useMemo(() => status === 'all' ? screens : screens.filter((screen) => screen.status === status), [screens, status]);

  return (
    <section>
      <div className="toolbar">
        <select value={status} onChange={(event) => setStatus(event.target.value as ScreenStatus | 'all')}>
          {statuses.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </div>
      <div className="grid">
        {visible.map((screen) => (
          <article className="card" key={screen.id}>
            <div className="wireframeBox">{screen.id}</div>
            <div className="cardMeta"><StatusBadge>{screen.status}</StatusBadge><StatusBadge>{screen.project}</StatusBadge></div>
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
