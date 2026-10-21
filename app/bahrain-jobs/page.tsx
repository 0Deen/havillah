import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import SeoLandingPage from "@/components/overseas/SeoLanding";
import { SEO_LANDINGS } from "@/data/overseas/seo";

const page = SEO_LANDINGS["bahrain-jobs"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.description,
  alternates: { canonical: "/bahrain-jobs" },
  openGraph: {
    title: page.metaTitle,
    description: page.description,
    url: `${siteConfig.url}/bahrain-jobs`,
    siteName: "Havillah Recruitment Agency",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <SeoLandingPage slug="bahrain-jobs" />;
}
