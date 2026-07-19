import { Hero } from '@/components/Hero';
import { ProjectExplorer } from '@/components/ProjectExplorer';
import { CapabilityMap } from '@/components/CapabilityMap';
import { ReleaseTimeline } from '@/components/ReleaseTimeline';
import { capabilities, projects } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectExplorer projects={projects.slice(0, 3)} />
      <CapabilityMap capabilities={capabilities} />
      <ReleaseTimeline />
    </>
  );
}
