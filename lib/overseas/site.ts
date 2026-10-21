import { siteContent } from "@/data/site-content";
import { siteConfig } from "@/lib/site";
// Single source of truth for company identity + contact details.
// Only details Havillah Recruitment Agency has supplied live here. Do not add numbers,
// addresses or social accounts that have not been confirmed by the company.

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;

export const COMPANY = {
  name: "Havillah Recruitment Agency",
  legalDescriptor: "Private Overseas Recruitment Agency in Kenya",
  tagline: "Connecting Kenyan Talent to Global Opportunities.",
  swahili: "Njoo, Tusafiri Ughaibuni.",
  phoneDisplay: siteContent.phoneDisplay,
  phoneHref: siteContent.phoneHref,
  whatsappNumber: siteContent.whatsappDigits,
  primaryEmail: siteContent.email,
  secondaryEmail: siteContent.email,
  website: siteContent.siteUrl,
  address: siteContent.location,
  addressShort: siteContent.location,
  country: "Kenya",
} as const;

export const NAV_PRIMARY = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/jobs", label: "Jobs", icon: "briefcase" },
  { href: "/destinations", label: "Destinations", icon: "globe" },
  { href: "/apply", label: "Apply", icon: "send" },
  { href: "/contact", label: "Contact", icon: "phone" },
] as const;

export const NAV_MORE = [
  { href: "/assistant", label: "AI Assistant", icon: "sparkles", hint: "Ask anything about working abroad" },
  { href: "/how-it-works", label: "How It Works", icon: "route", hint: "From application to deployment" },
  { href: "/about", label: "About Havillah Recruitment Agency", icon: "building", hint: "Who we are and what we do" },
  { href: "/resources", label: "Resources", icon: "book", hint: "Guides for candidates" },
  { href: "/faq", label: "FAQ", icon: "help", hint: "Quick answers" },
  { href: "/recruitment-safety", label: "Recruitment Safety", icon: "shield", hint: "Protect yourself from scams" },
  { href: "/for-employers", label: "For Employers", icon: "users", hint: "Request recruitment support" },
] as const;
