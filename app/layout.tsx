import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/lib/site';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileAppNav from '@/components/MobileAppNav';
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: 'Havillah Recruitment Agency | Connecting Dreams to New Opportunities', template: '%s | Havillah Recruitment Agency' },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: { title: siteConfig.name, description: siteConfig.description, type: 'website', locale: 'en_KE', siteName: siteConfig.name, images: [{ url: '/images/hero/havillah-social-share.png', width: 1200, height: 630, alt: 'Havillah Recruitment Agency — Connecting Dreams to New Opportunities' }] },
  twitter: { card: 'summary_large_image', title: siteConfig.name, description: siteConfig.description, images: ['/images/hero/havillah-social-share.png'] },
  robots: { index: true, follow: true },
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en-KE"><body>{children}<MobileAppNav /><FloatingWhatsApp /></body></html>; }
