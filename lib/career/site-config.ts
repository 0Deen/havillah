import { siteContent } from "@/data/site-content";

export const siteConfig = {
  name: siteContent.name,
  shortName: "Havillah",
  tagline: siteContent.tagline,
  whatsapp: siteContent.whatsappDigits,
  whatsappLink: `https://wa.me/${siteContent.whatsappDigits}?text=Hello%20Havillah%20Recruitment%20Agency%2C%20I%27d%20like%20to%20ask%20about%20international%20job%20opportunities.`,
  whatsappEmployerLink: `https://wa.me/${siteContent.whatsappDigits}?text=Hello%20Havillah%20Recruitment%20Agency%2C%20I%27m%20an%20employer%20looking%20for%20recruitment%20support.`,
  email: siteContent.email,
  address: "Nairobi, Kenya",
  contactPerson: "Havillah Recruitment Team",
  mapEmbed: "https://www.google.com/maps?q=Nairobi%2C+Kenya&output=embed",
  destinations: [...siteContent.destinations],
} as const;
