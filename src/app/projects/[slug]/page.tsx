import { notFound } from 'next/navigation';
import { projects, screens } from '@/lib/data';
import { familyLabels, publicStatusLabels } from '@/lib/labels';
import { ScreenEvidence } from '@/components/ScreenEvidence';
import { StatusBadge } from '@/components/StatusBadge';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const projectScreens = screens.filter((screen) => project.screens.includes(screen.id));

  return (
    <article className="detail">
      <p className="eyebrow">Case study</p>
      <h1>{project.name}</h1>
      <div className="cardMeta">
        <StatusBadge>{familyLabels[project.family]}</StatusBadge>
        <StatusBadge>{publicStatusLabels[project.publicStatus]}</StatusBadge>
        <StatusBadge>{project.status}</StatusBadge>
      </div>
      <p>{project.summary}</p>

      <section className="card"><h2>Problem</h2><p>{project.problem}</p></section>
      <section className="card"><h2>Approach</h2><p>{project.approach}</p></section>
      <div className="split">
        <section className="card">
          <h2>Public Evidence</h2>
          <ul>{project.publicEvidence.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section className="card">
          <h2>Redaction Boundary</h2>
          <ul>{project.redactionNotes.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      </div>
      <section className="card">
        <h2>Verification</h2>
        <ul>{project.verification.map((item) => <li key={item}>{item}</li>)}</ul>
        <p className="muted">Evidence focus: {project.nextMilestone}</p>
      </section>

      <section>
        <h2>Screens</h2>
        <div className="grid">
          {projectScreens.map((screen) => (
            <div className="card" key={screen.id}>
              <ScreenEvidence screen={screen} />
              <h3>{screen.title}</h3>
              <p>{screen.purpose}</p>
              <dl className="screenMeta">
                <div><dt>Target</dt><dd>{screen.targetUser}</dd></div>
                <div><dt>Entry</dt><dd>{screen.entryPoint}</dd></div>
                <div><dt>Signal</dt><dd>{screen.engineeringSignal}</dd></div>
                <div><dt>Boundary</dt><dd>{screen.dataBoundary}</dd></div>
              </dl>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
