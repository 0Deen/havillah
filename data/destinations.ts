import { siteContent } from "@/data/site-content";
export type DestinationCard = { name: string; short: string; image: string; desc: string };
const destinationDetails: Record<string, Omit<DestinationCard, "name">> = {
  "Saudi Arabia": { short: "KSA", image: "/images/saudiarabia.webp", desc: "Review destination guidance and ask Havillah to confirm current role requirements." },
  "United Arab Emirates": { short: "UAE", image: "/images/dubai.webp", desc: "Explore destination information for the Emirates and verify any current vacancy." },
  Qatar: { short: "Qatar", image: "/images/qatar.webp", desc: "Explore role categories and candidate preparation guidance for Qatar." },
  Kuwait: { short: "Kuwait", image: "/images/thekuwait.webp", desc: "Review destination guidance and confirm all job details before applying." },
  Oman: { short: "Oman", image: "/images/muscatoman.webp", desc: "Explore destination information and preparation guidance for Oman." },
  Bahrain: { short: "Bahrain", image: "/images/bahrain.webp", desc: "Learn about destination requirements and ask about verified opportunities." },
};
export const destinations: DestinationCard[] = siteContent.destinations.map((name) => ({ name, ...(destinationDetails[name] || { short: name, image: "/images/dubai.webp", desc: "Contact Havillah for destination guidance." }) }));
