import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { StatusBadge } from '@/components/StatusBadge';

type ResumeEntry = {
  id: string;
  title: string;
  language: string;
  targetRole: string;
  status: string;
  contentPath: string;
  claimBank: string;
  redactionLevel: string;
};

type ResumeIndex = {
  version: string;
  updated: string;
  resumes: ResumeEntry[];
};

function readResumeIndex(): ResumeIndex {
  return JSON.parse(readFileSync(join(process.cwd(), 'content', 'resume', 'index.json'), 'utf8')) as ResumeIndex;
}

function readMarkdown(path: string) {
  const resumePath = path.replace(/^content\/resume\//, '');
  return readFileSync(join(process.cwd(), 'content', 'resume', resumePath), 'utf8');
}

function section(markdown: string, heading: string) {
  const match = markdown.match(new RegExp(`## ${heading}\\n+([\\s\\S]*?)(?=\\n## |\\n# |$)`));
  return match?.[1]?.trim() ?? '';
}

function firstListItems(markdown: string, limit = 4) {
  return markdown
    .split('\n')
    .filter((line) => line.startsWith('- '))
    .slice(0, limit)
    .map((line) => line.replace(/^- /, '').trim());
}

function plainPreview(markdown: string, maxLength = 220) {
  const text = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^#+\s+/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/\|/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return text.length > maxLength ? `${text.slice(0, maxLength - 1).trim()}...` : text;
}

function resumePreview(entry: ResumeEntry) {
  const markdown = readMarkdown(entry.contentPath);
  const headline = section(markdown, 'Headline') || entry.title;
  const summary = section(markdown, 'Summary');
  const claims = firstListItems(markdown);

  return {
    ...entry,
    headline: plainPreview(headline, 120),
    summary: plainPreview(summary || markdown, 260),
    claims
  };
}

export default function ResumePage() {
  const index = readResumeIndex();
  const resumes = index.resumes.map(resumePreview);

  return (
    <section>
      <p className="eyebrow">Resume</p>
      <h1>Role-specific resume variants</h1>
      <p className="muted">
        Public-safe resume variants generated from the sanitized claim bank. Private evidence, raw logs,
        customer data, endpoints, and credentials remain outside this repository.
      </p>
      <div className="grid">
        {resumes.map((resume) => (
          <article className="card" key={resume.id}>
            <div className="cardMeta">
              <StatusBadge>{resume.id}</StatusBadge>
              <StatusBadge>{resume.language}</StatusBadge>
              <StatusBadge>{resume.status}</StatusBadge>
            </div>
            <h3>{resume.title}</h3>
            <p><strong>{resume.headline}</strong></p>
            <p>{resume.summary}</p>
            {resume.claims.length > 0 ? (
              <ul>
                {resume.claims.map((claim) => <li key={claim}>{claim}</li>)}
              </ul>
            ) : null}
            <p className="muted">Target: {resume.targetRole}</p>
            <p className="muted">Boundary: {resume.redactionLevel} · Source: {resume.contentPath}</p>
          </article>
        ))}
      </div>
      <section className="card">
        <h2>Application use</h2>
        <p>
          Use the backend, full-stack, commerce, manufacturing, AI workflow, or English backend variant
          according to the target role. Downloadable PDF/DOCX artifacts remain deferred until final
          document review, but the web resume content is visible for application screening.
        </p>
        <p className="muted">Index version: {index.version} · Updated: {index.updated}</p>
      </section>
    </section>
  );
}
