import { releases } from '@/lib/data';

export function ReleaseTimeline() {
  return (
    <section>
      <h2>Release notes</h2>
      <div className="timeline">
        {releases.map((release) => (
          <article className="card" key={release.version}>
            <p className="eyebrow">{release.date}</p>
            <h3>{release.version}</h3>
            <p>{release.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
