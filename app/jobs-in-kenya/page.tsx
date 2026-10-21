import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import SeoLandingPage from "@/components/overseas/SeoLanding";
import { SEO_LANDINGS } from "@/data/overseas/seo";

const page = SEO_LANDINGS["jobs-in-kenya"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.description,
  alternates: { canonical: "/jobs-in-kenya" },
  openGraph: {
    title: page.metaTitle,
    description: page.description,
    url: `${siteConfig.url}/jobs-in-kenya`,
    siteName: "Havillah Recruitment Agency",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <SeoLandingPage slug="jobs-in-kenya" />;
}
