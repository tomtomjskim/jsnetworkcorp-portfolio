import { ScreenGallery } from '@/components/ScreenGallery';
import { screens } from '@/lib/data';

export default function ScreensPage() {
  return (
    <section>
      <p className="eyebrow">Screens & Wireframes</p>
      <h1>Screen-first portfolio evidence</h1>
      <p className="muted">Screens are marked as prototype, planned, implemented, sanitized, or archived to avoid overstating maturity.</p>
      <ScreenGallery screens={screens} />
    </section>
  );
}
