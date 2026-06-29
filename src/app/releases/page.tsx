import { ReleaseTimeline } from '@/components/ReleaseTimeline';

export default function ReleasesPage() {
  return (
    <section>
      <p className="eyebrow">Releases</p>
      <h1>Portfolio release history</h1>
      <ReleaseTimeline />
    </section>
  );
}
