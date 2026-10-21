import type { Metadata } from 'next';
import InfoPage from '@/components/InfoPage';
import { aboutPage } from '@/data/havilla-copy';
export const metadata: Metadata = {
  title: 'About Havillah Recruitment Agency | Mission and Values',
  description: 'Our people-centred approach to recruitment and our commitment to professional communication and responsible employment connections.',
};
export default function Page() {
  return <InfoPage eyebrow={aboutPage.eyebrow.toUpperCase()} title={aboutPage.title} intro={aboutPage.intro} sections={aboutPage.sections} />;
}
