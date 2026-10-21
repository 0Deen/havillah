import { siteContent } from "@/data/site-content";
export const siteConfig = {
  name: siteContent.name,
  url: siteContent.siteUrl,
  description: "Explore recruitment services, overseas employment guidance, job categories and candidate support with Havillah Recruitment Agency.",
  phone: siteContent.phoneDisplay,
  phoneHref: siteContent.phoneHref,
  alternatePhone: siteContent.alternatePhoneDisplay,
  whatsapp: siteContent.whatsappDigits,
  email: siteContent.email,
} as const;
