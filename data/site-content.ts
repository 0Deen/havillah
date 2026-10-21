/** Canonical Havillah brand, contact and navigation content. */
export const siteContent = {
  name: "Havillah Recruitment Agency",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  location: "Nairobi, Kenya",
  socialLinks: ["https://linktr.ee/havilarecruitmentagency", "https://www.instagram.com/anthony.havi.5", "https://www.threads.com/@anthony.havi.5"],
  tagline: "Connecting Dreams to New Opportunities",
  email: "havillahagency@gmail.com",
  phoneDisplay: "+254 754 426678",
  phoneHref: "tel:+254754426678",
  alternatePhoneDisplay: "+254 745 729774",
  alternatePhoneHref: "tel:+254745729774",
  whatsappDigits: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254754426678",
  logo: "/havillah-logo.png",
  jobCategories: ["Domestic Work", "Security", "Driving & Logistics", "Hospitality", "Construction & Engineering", "Healthcare & Care", "Cleaning & Facilities", "Warehouse & General Labour"],
  destinations: ["Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait", "Oman", "Bahrain"],
} as const;
