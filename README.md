# Havillah Recruitment Agency — Single Integrated Next.js Project

This is one Havillah-branded Next.js 14 / React 18 / TypeScript application. Content and working page code from the three supplied source archives has been integrated into the main `app/`, `components/`, `lib/`, `data/`, and `public/` trees. There is no `integrations/reference-projects/` folder and no second app nested inside this project.

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
cp .env.example .env.local
# Edit .env.local before testing external integrations.
npm run dev
```

Open `http://localhost:3000`.

## Integrated features

- Havillah's existing brand, logo, homepage, main services, destinations, contact flows and original route implementations remain the canonical starting point.
- `/jobs` is a combined, deduplicated catalogue drawing from Havillah and all three supplied source catalogues. Imported listings are marked unverified and do not claim that a vacancy is currently open. Canonical Havillah job detail routes remain available where they exist; other entries open an enquiry with the role and destination prefilled.
- `/gallery` displays the consolidated image catalogue: 138 usable, deduplicated source images plus the Havillah Open Graph banner. Images are organized under `public/images/jobs/`, `countries/`, `hero/`, `team/`, and `gallery/`, with a central manifest in `data/images.ts`. Category and destination content are centralized in `data/job-categories.ts` and `data/destinations.ts`.
- `/explore` is an index of integrated job, destination, training, medical-screening, candidate-support, employer and policy pages.
- Pre-departure training and medical-screening previews are integrated into the homepage. Unique pages from the source archives are real routes under `app/`, not reference folders.
- Mobile-first fixed bottom navigation offers Home, Jobs, Places, Gallery and Contact. The image gallery adapts to phone, tablet and desktop screens.
- Shared Havillah brand, contact email, primary and alternate phone, WhatsApp number, destinations, location and known social links are centralized in `data/site-content.ts`.
- API route handlers for applications, leads, employer enquiries, chat, contact, alerts, reports, newsletter, search and inbound messages are integrated under `app/api/`.
- SEO metadata, Open Graph/social image, robots, sitemap and a complete explore directory are included.

## Image and branding rules applied

- Imported usable `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg` and `.avif` images were deduplicated by file hash and moved into the main `public/images/` library; large PNGs were converted to optimized WebP where that reduced size without losing transparency support.
- `.jfif` files and references were excluded. Tiny, unreadable and obvious source-company logo/letterhead assets were skipped. Only the Havillah logo is used as the site's company logo.
- The `/gallery` page renders the catalogue with `next/image`, alt text, responsive sizes and priority loading for the first visible images. Other pages use the matching images for jobs, countries, training, services and career categories.

## Environment and external integrations

Copy `.env.example` to `.env.local` and set values as appropriate:

- `NEXT_PUBLIC_SITE_URL`: Havillah's verified canonical production domain; the fallback is `https://example.com` and is only a placeholder.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: official WhatsApp number in international digits without `+`, spaces or dashes.
- `HAVILLAH_NOTIFICATION_EMAIL`: destination for application and lead notifications.
- `RESEND_API_KEY` and `RESEND_FROM_EMAIL`: email notifications require a valid API key and a sender/domain verified with Resend.
- `MONGODB_URI`: required only for the API features that use MongoDB.
- `OPENAI_API_KEY`: required for OpenAI-backed assistant functionality.
- `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_WHATSAPP_FROM`: optional WhatsApp Business API notifications; a normal `wa.me` link only opens a user-initiated chat.

No secret keys are included in the project. APIs that need external credentials or a database must be configured and tested before they can be considered live. A form or API route existing in the code does not mean a notification was sent or an application was stored successfully.

## Vacancy, testimonial and legal safeguards

- All imported job listings must be checked for current availability, employer identity, pay, contract terms, requirements and fees before being promoted as live vacancies.
- Testimonials are not presented as real unless the candidate has given permission and the details are verified. Placeholder story content is labelled as such.
- Privacy, terms and legal pages are starter content and require review against Havillah's actual data practices and applicable Kenyan requirements.
- Confirm the official phone number, email, social links and exact office location before launch; the map is only a general Nairobi reference.

## Audit and verification

See `INTEGRATION_REPORT.md` for the source-by-source route audit and merge decisions. Static checks performed in the authoring environment found no unresolved local imports, no broken literal image paths, no `.jfif` references, and no nested reference-project folders.

A production build could not be verified here: npm package downloads were unavailable and the local cache was empty, so `npm run build` and `npm run dev` stopped with `next: not found`. After running `npm install` in a network-enabled environment, run `npm run build`, `npm run dev`, and `npm run audit:assets` and address any environment-specific TypeScript/build errors before deployment.
