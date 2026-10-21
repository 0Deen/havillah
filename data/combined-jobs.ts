import { jobs as havillahJobs } from "@/data/jobs";
import { jobs as overseasSourceJobs } from "@/data/overseas/jobs";
import { jobs as careerSourceJobs } from "@/data/career/jobs";
import { jobs as trainingSourceJobs } from "@/data/training";

export type CombinedJob = {
  slug: string; title: string; country: string; location: string; category: string;
  salary: string; experience: string; description: string; requirements: string[];
  image: string; source: string; canonicalDetail: boolean;
};
const fullCountry = (value: string) => ({ UAE: "United Arab Emirates", KSA: "Saudi Arabia", UK: "United Kingdom" } as Record<string,string>)[value] || value;
const fallbackImage = (category: string) => {
  const s = category.toLowerCase();
  if (/driver|driv|logistic|warehouse|rider/.test(s)) return "/images/driver.webp";
  if (/health|care|nurs|medical/.test(s)) return "/images/healthcare.webp";
  if (/security/.test(s)) return "/images/security.webp";
  if (/construct|engineer|electric|welder|plumb|mason/.test(s)) return "/images/construction.webp";
  if (/clean|domestic|house|maid/.test(s)) return "/images/cleaning.webp";
  return "/images/hospitality.webp";
};
const canonical: CombinedJob[] = havillahJobs.map((j) => ({ slug:j.slug,title:j.title,country:j.country,location:j.city ? `${j.city}, ${j.country}` : j.country,category:j.category,salary:j.salary,experience:j.experience,description:j.description,requirements:j.requirements,image:j.image,source:"Havillah catalogue",canonicalDetail:true }));
const overseas: CombinedJob[] = overseasSourceJobs.map((j) => ({ slug:j.slug,title:j.title,country:j.country,location:j.country,category:j.category,salary:j.salary || "Contact Havillah for verified details",experience:j.experience || "Confirm role requirements",description:`${j.title} is included in the consolidated career catalogue for ${j.country}. This source entry is not proof of a live vacancy; contact Havillah to verify availability, employer identity and written terms.`,requirements:j.requirements || [],image:j.image || fallbackImage(j.category),source:"Combined recruitment catalogue",canonicalDetail:false }));
const career: CombinedJob[] = careerSourceJobs.map((j) => ({ slug:j.slug,title:j.title,country:fullCountry(j.country),location:j.city ? `${j.city}, ${fullCountry(j.country)}` : fullCountry(j.country),category:j.category,salary:j.salary || "Contact Havillah for verified details",experience:j.experience || "Confirm role requirements",description:`${j.description || `${j.title} is included in the consolidated career catalogue.`} Availability, employer identity, salary and contract terms must be verified directly with Havillah before applying.`,requirements:j.requirements || [],image:(j.image && typeof j.image === "object" && "src" in j.image ? j.image.src : undefined) || fallbackImage(j.category),source:"Combined recruitment catalogue",canonicalDetail:false }));
const training: CombinedJob[] = trainingSourceJobs.map((j) => ({ slug:`${j.title}-${j.country}`.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),title:j.title,country:fullCountry(j.country),location:fullCountry(j.country),category:j.category,salary:j.salary || "Contact Havillah for verified details",experience:j.experience || "Confirm role requirements",description:`${j.title} appears in the imported recruitment catalogue for ${fullCountry(j.country)}. This is an unverified source entry, not confirmation of an active vacancy. Ask Havillah for the current vacancy notice and written terms.`,requirements:[],image:fallbackImage(j.category),source:"Combined recruitment catalogue",canonicalDetail:false }));

// Keep Havillah's canonical entry when multiple projects repeat the same title and destination.
const seen = new Set<string>();
export const combinedJobs: CombinedJob[] = [...canonical,...overseas,...career,...training].filter((job) => {
  const key = `${job.title.toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}|${job.country.toLowerCase()}`;
  if (seen.has(key)) return false;
  seen.add(key); return true;
});
