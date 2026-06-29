import { Hero } from '@/components/Hero';
import { ProjectExplorer } from '@/components/ProjectExplorer';
import { CapabilityMap } from '@/components/CapabilityMap';
import { ReleaseTimeline } from '@/components/ReleaseTimeline';
import { capabilities, projects } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectExplorer projects={projects} />
      <CapabilityMap capabilities={capabilities} />
      <ReleaseTimeline />
    </>
  );
}
