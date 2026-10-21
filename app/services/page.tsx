import type { Metadata } from 'next';
import InfoPage from '@/components/InfoPage';
import { servicesPage } from '@/data/havilla-copy';
export const metadata: Metadata = {
  title: 'Recruitment Services',
  description: 'Recruitment support for candidates and employers: vacancy discovery, candidate preparation, overseas employment guidance and employer support.',
};
export default function Page() {
  return <InfoPage eyebrow={servicesPage.eyebrow.toUpperCase()} title={servicesPage.title} intro={servicesPage.intro} sections={servicesPage.sections} />;
}
