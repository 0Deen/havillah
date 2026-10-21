import type { Metadata } from 'next';
import Link from 'next/link';
import InfoPage from '@/components/InfoPage';
import { resourcesPage, resources } from '@/data/havilla-copy';
export const metadata: Metadata = {
  title: 'Career Advice, CV and Interview Guides',
  description: 'Practical guidance on CV preparation, interviews, job applications, overseas employment and responsible recruitment.',
};
export default function Page() {
  return (
    <InfoPage eyebrow={resourcesPage.eyebrow} title={resourcesPage.title} intro={resourcesPage.intro} sections={[]}>
      <section className="hv-wrap" aria-label="Career resources" style={{ paddingBottom: '3rem' }}>
        <div className="hv-res-grid">
          {resources.items.map(r => (
            <Link className="hv-res-card" href={r.href} key={r.title}>
              <h3>{r.title}</h3><p>{r.text}</p><span>{r.cta}</span>
            </Link>
          ))}
        </div>
      </section>
    </InfoPage>
  );
}
