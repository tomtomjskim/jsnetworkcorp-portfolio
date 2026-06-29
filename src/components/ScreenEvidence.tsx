import type { ScreenSpec } from '@/lib/types';
import { screenStatusLabels } from '@/lib/labels';
import { StatusBadge } from './StatusBadge';

export function ScreenEvidence({ screen }: { screen: ScreenSpec }) {
  const primaryComponents = screen.components.slice(0, 4);
  const primaryStates = screen.states.slice(0, 4);

  return (
    <div className="screenEvidence" aria-label={`${screen.title} public-safe screen evidence`}>
      <div className="screenEvidenceHeader">
        <span>{screen.id}</span>
        <StatusBadge>{screenStatusLabels[screen.status]}</StatusBadge>
      </div>
      <div className="screenEvidenceFlow">
        {primaryComponents.map((component) => (
          <span key={component}>{component}</span>
        ))}
      </div>
      <div className="screenEvidenceStates">
        {primaryStates.map((state) => (
          <span key={state}>{state}</span>
        ))}
      </div>
      <p>{screen.engineeringSignal}</p>
    </div>
  );
}
