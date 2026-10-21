import { siteContent } from "@/data/site-content";
import { combinedJobs } from "@/data/combined-jobs";
export type JobCategoryCard = { name: string; image: string; count: string };
const categoryDetails: Record<string, { image: string; match: RegExp }> = {
  "Domestic Work": { image: "/images/cleaning.webp", match: /domestic|housekeep|housekeeper|maid|caregiver/i },
  "Security": { image: "/images/security.webp", match: /security|guard/i },
  "Driving & Logistics": { image: "/images/driver.webp", match: /driv|logistic|transport|warehouse|loader/i },
  "Hospitality": { image: "/images/hospitality.webp", match: /hospitality|hotel|chef|cook|waiter|restaurant|housekeeping/i },
  "Construction & Engineering": { image: "/images/engineering.webp", match: /construction|engineer|electric|welder|plumb|mason|technician/i },
  "Healthcare & Care": { image: "/images/healthcare.webp", match: /health|care|nurs|medical|caregiver/i },
  "Cleaning & Facilities": { image: "/images/cleaning.webp", match: /clean|facility|janitor|housekeep|maid/i },
  "Warehouse & General Labour": { image: "/images/driver.webp", match: /warehouse|labour|labor|helper|loader|packer|general worker/i },
};
export const jobCategories: JobCategoryCard[] = siteContent.jobCategories.map((name) => {
  const detail = categoryDetails[name] || { image: "/images/hospitality.webp", match: new RegExp(name, "i") };
  const count = combinedJobs.filter((job) => detail.match.test(`${job.title} ${job.category}`)).length;
  return { name, image: detail.image, count: count ? `${count} role types` : "Explore roles" };
});
