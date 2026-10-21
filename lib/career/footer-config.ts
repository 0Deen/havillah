import { siteContent } from "@/data/site-content";
export const footerNav = {
  explore: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Find Jobs", href: "/jobs" },
    { label: "Gallery", href: "/gallery" },
    { label: "Destinations", href: "/destinations" },
    { label: "For Employers", href: "/for-employers" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Careers", href: "/careers" },
  ],
  resources: [
    { label: "Resources", href: "/resources" },
    { label: "FAQs", href: "/faqs" },
    { label: "Safety Center", href: "/safety" },
    { label: "Verify an Opportunity", href: "/safety#verify" },
    { label: "Report a Scam", href: "/safety#report" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Recruitment Terms", href: "/recruitment-terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Candidate & Employer Responsibilities", href: "/responsibilities" },
  ],
};

//  Havillah Recruitment Agency social channels (taken from the  Havillah Recruitment Agency project). WhatsApp is the live, verified line;
// the other platform links point to the platform home pages until  Havillah Recruitment Agency supplies exact handles.
export const footerSocials: { label: string; href: string }[] = [
  { label: "WhatsApp", href: `https://wa.me/${siteContent.whatsappDigits}` },
];
