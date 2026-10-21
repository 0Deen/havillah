import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import SeoLandingPage from "@/components/overseas/SeoLanding";
import { SEO_LANDINGS } from "@/data/overseas/seo";

const page = SEO_LANDINGS["saudi-arabia-jobs"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.description,
  alternates: { canonical: "/saudi-arabia-jobs" },
  openGraph: {
    title: page.metaTitle,
    description: page.description,
    url: `${siteConfig.url}/saudi-arabia-jobs`,
    siteName: "Havillah Recruitment Agency",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <SeoLandingPage slug="saudi-arabia-jobs" />;
}
