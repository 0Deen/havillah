import type { Metadata } from 'next';
import InfoPage from '@/components/InfoPage';
import { faqGroups } from '@/data/havilla-copy';
export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers about applying, working abroad, recruitment costs, employer enquiries and what to do if you have a concern.',
};
export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqGroups.flatMap(g => g.items).map(i => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  };
  return (
    <InfoPage eyebrow="QUESTIONS AND ANSWERS" title="Clear answers before you decide." intro="If your question is not here, contact us and we will point you to the right next step." sections={[]}>
      <section className="info-content" aria-label="Frequently asked questions">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {faqGroups.map(g => (
          <div className="hv-faq-group" key={g.group}>
            <h2>{g.group}</h2>
            {g.items.map(i => (
              <details key={i.q}><summary>{i.q}</summary><p>{i.a}</p></details>
            ))}
          </div>
        ))}
      </section>
    </InfoPage>
  );
}
