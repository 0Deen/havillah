import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { countryMeta, countryBySlug, getJobsForCountry } from "@/data/career/country-jobs";
import { CountryPageClient } from "@/components/career/jobs-by-country/CountryPageClient";

export function generateStaticParams() {
  return countryMeta.map((c) => ({ country: c.slug }));
}

export function generateMetadata({ params }: { params: { country: string } }): Metadata {
  const country = countryBySlug(params.country);
  if (!country) return { title: "Jobs abroad | Havillah Recruitment Agency" };

  const jobCount = getJobsForCountry(country.name).length;
  const title = `${jobCount} jobs in ${country.name} | Havillah Recruitment Agency`;
  const description = `Browse verified ${country.name} job openings and salaries in ${country.currency}, then apply in a few taps. ${country.tagline}`;

  return {
    title,
    description,
    openGraph: { title, description, images: [country.heroImage] },
  };
}

export default function CountryJobsPage({ params }: { params: { country: string } }) {
  const country = countryBySlug(params.country);
  if (!country) notFound();
  return <CountryPageClient country={country} />;
}
