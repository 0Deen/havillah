# Integration Report — Havillah Recruitment Agency

## Integration approach

Havillah remains the only Next.js application and the canonical brand. Source-project pages with unique routes were copied into the real `app/` route tree; source components, utilities, and data were absorbed under namespaced folders in Havillah `components/`, `lib/`, and `data/`. Duplicate route implementations were skipped in favour of Havillah pages. No `integrations/reference-projects/` directory remains. Imported company logos and all `.jfif` files were excluded; the Havillah logo is retained as the single brand logo.

## Source project audit and actions

### ajira

- Components, libraries, and data: imported into `components/overseas/`, `lib/overseas/`, and `data/overseas/` with project aliases rewritten.
- Unique app routes: copied to the main `app/` tree and use the root Next.js application.
- Duplicate routes: kept Havillah’s existing route as canonical to avoid conflicting Next.js route patterns.
- Images: usable, non-logo images moved into `public/images/{jobs,countries,hero,team,gallery}/`, deduplicated by SHA-256 and catalogued in `data/images.ts`.

### mkconnections

- Components, libraries, and data: imported into `components/career/`, `lib/career/`, and `data/career/` with project aliases rewritten.
- Unique app routes: copied to the main `app/` tree and use the root Next.js application.
- Duplicate routes: kept Havillah’s existing route as canonical to avoid conflicting Next.js route patterns.
- Images: usable, non-logo images moved into `public/images/{jobs,countries,hero,team,gallery}/`, deduplicated by SHA-256 and catalogued in `data/images.ts`.

### nicks

- Components, libraries, and data: imported into `components/training/`, `lib/training/`, and `data/training.ts` with project aliases rewritten.
- Unique app routes: copied to the main `app/` tree and use the root Next.js application.
- Duplicate routes: kept Havillah’s existing route as canonical to avoid conflicting Next.js route patterns.
- Images: usable, non-logo images moved into `public/images/{jobs,countries,hero,team,gallery}/`, deduplicated by SHA-256 and catalogued in `data/images.ts`.

## Source-by-source feature inventory

### Ajira Majuu source archive (202 files audited)

- **Pages integrated:** Gulf/country job guides, overseas recruitment agency pages, recruitment-safety content, the AI assistant, employer information and dynamic destination detail content. The full per-route decision list follows below.
- **API and workflow code:** application, lead, employer and chat API handlers are integrated under `app/api/`; mail and WhatsApp helpers live under `lib/overseas/` and use the canonical Havillah contact data.
- **Data and assets:** role catalogue and editorial content are under `data/overseas/`; reusable components and utilities are under `components/overseas/` and `lib/overseas/`. Source category data is merged into the central `data/job-categories.ts` model used by the Havillah homepage.
- **Merged/skipped:** duplicate home, jobs, apply, FAQ, resources, contact, destinations, terms and other common pages were not mounted twice. Unique job data was merged into `data/combined-jobs.ts`.

### MK Connections source archive (235 files audited)

- **Pages integrated:** job-by-country details, success-story information, responsibilities, careers, privacy/cookie/recruitment terms and FAQ pages. The original gallery page was replaced by the unified Havillah image gallery.
- **API and workflow code:** contact, reports, alerts, newsletter and applications API handlers are under `app/api/`; database helpers are under `lib/career/` and require `MONGODB_URI` before database-backed behavior is live.
- **Data and assets:** job/country data and image mapping are under `data/career/` and `lib/career/`; the usable country and job images are included in the central image library.
- **Merged/skipped:** duplicate jobs, job detail, apply, safety, contact, employer, destinations, resources, about, terms and chat pages were deduplicated against Havillah or the selected API implementation. Duplicate category/job data was consolidated into the unified job catalogue.

### Nicks Recruitment Agency source archive (189 files audited)

- **Pages integrated:** training school, courses and equipment, medical-laboratory information and booking, training booking, career guidance, application tracking, countries, service details, videos, downloads, blog/news/events, accessibility, legal and related resource pages.
- **API and workflow code:** inbound email, chatbot and search API handlers are under `app/api/`; supporting utilities and SEO data are under `lib/training/` and `data/training.ts`.
- **Data and assets:** course, training, service and country-experience data are consolidated into the Havillah data tree; the training and medical-service preview sections are rendered on the main homepage.
- **Merged/skipped:** duplicate home, jobs, employers, about, resources, FAQ, gallery, terms, privacy, contact, success-story and apply routes were deduplicated. Unused source-only homepage components and compiled JavaScript duplicates were removed rather than left as dead code. Placeholder testimonials are not shown as real candidate stories.

### Shared styles and image handling

- Tailwind tokens from the three source projects were reconciled into one utility theme mapped to Havillah navy/green, and the Tailwind/PostCSS build configuration was merged with the main app.
- Duplicate assets were identified by SHA-256. 138 usable source images remain after excluding duplicates, tiny/broken files, JFIF, source-company logos/letterheads and obvious branded office/signage photos. The central catalogue has 139 entries including the generated Havillah social-share banner. Large raster images were optimized to WebP when the result was smaller; the image library is now about 26.4 MB.
- The fixed mobile bottom navigation, responsive `/gallery` and `/explore` directory make the integrated pages reachable from the main site.

## New/absorbed user-facing pages

- **/apply** (ajira): merged/skipped duplicate; Havillah route retained — conflicts with /apply.
- **/private-employment-agency-kenya** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/recruitment-safety** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/jobs/[slug]** (ajira): merged/skipped duplicate; Havillah route retained — conflicts with /jobs/[slug].
- **/jobs** (ajira): duplicate source page skipped; all unique role data is merged into the single Havillah `/jobs` catalogue.
- **/bahrain-jobs** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/oman-jobs** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/faq** (ajira): merged/skipped duplicate; Havillah route retained — conflicts with /faq.
- **/resources/[slug]** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/resources** (ajira): merged/skipped duplicate; Havillah route retained — conflicts with /resources.
- **/recruitment-agencies-kenya** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/api/apply** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/api/leads** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/api/employers** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/api/chat** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/kuwait-jobs** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/qatar-jobs** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/privacy-policy** (ajira): merged/skipped duplicate; Havillah route retained — conflicts with /privacy-policy.
- **/destinations/[slug]** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/destinations** (ajira): merged/skipped duplicate; Havillah route retained — conflicts with /destinations.
- **/ajira-kazi-kenya** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/uae-jobs** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/terms** (ajira): merged/skipped duplicate; Havillah route retained — conflicts with /terms.
- **/gulf-recruitment-agency** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/assistant** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/overseas-recruitment-agency-kenya** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/job-categories/[slug]** (ajira): merged/skipped duplicate; Havillah route retained — conflicts with /job-categories/[slug].
- **/how-it-works** (ajira): merged/skipped duplicate; Havillah route retained — conflicts with /how-it-works.
- **/about** (ajira): merged/skipped duplicate; Havillah route retained — conflicts with /about.
- **/saudi-arabia-jobs** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/overseas-jobs** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/jobs-for-kenyans-abroad** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/jobs-in-kenya** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/for-employers** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/recruitment-agency-kenya** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/gulf-jobs** (ajira): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/contact** (ajira): merged/skipped duplicate; Havillah route retained — conflicts with /contact.
- **/jobs/[slug]** (mkconnections): merged/skipped duplicate; Havillah route retained — conflicts with /jobs/[slug].
- **/jobs** (mkconnections): duplicate source page skipped; all unique role data is merged into the single Havillah `/jobs` catalogue.
- **/jobs/country/[country]** (mkconnections): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/success-stories** (mkconnections): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/responsibilities** (mkconnections): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/api/chat** (mkconnections): merged/skipped duplicate; Havillah route retained — conflicts with /api/chat.
- **/api/leads** (mkconnections): merged/skipped duplicate; Havillah route retained — conflicts with /api/leads.
- **/api/contact** (mkconnections): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/api/reports** (mkconnections): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/api/alerts** (mkconnections): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/api/newsletter** (mkconnections): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/api/applications** (mkconnections): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/apply** (mkconnections): merged/skipped duplicate; Havillah route retained — conflicts with /apply.
- **/safety** (mkconnections): merged/skipped duplicate; Havillah route retained — conflicts with /safety.
- **/cookie-policy** (mkconnections): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/careers** (mkconnections): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/gallery** (mkconnections): merged into the unified Havillah `/gallery` image catalogue; source logo/letterhead entries were excluded and all usable source imagery is rendered from `data/images.ts`.
- **/for-employers** (mkconnections): merged/skipped duplicate; Havillah route retained — conflicts with /for-employers.
- **/contact** (mkconnections): merged/skipped duplicate; Havillah route retained — conflicts with /contact.
- **/terms** (mkconnections): merged/skipped duplicate; Havillah route retained — conflicts with /terms.
- **/destinations** (mkconnections): merged/skipped duplicate; Havillah route retained — conflicts with /destinations.
- **/destinations/[country]** (mkconnections): merged/skipped duplicate; Havillah route retained — conflicts with /destinations/[slug].
- **/resources** (mkconnections): merged/skipped duplicate; Havillah route retained — conflicts with /resources.
- **/recruitment-terms** (mkconnections): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/privacy** (mkconnections): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/how-it-works** (mkconnections): merged/skipped duplicate; Havillah route retained — conflicts with /how-it-works.
- **/about** (mkconnections): merged/skipped duplicate; Havillah route retained — conflicts with /about.
- **/faqs** (mkconnections): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/employers/[slug]** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/employers** (nicks): merged/skipped duplicate; Havillah route retained — conflicts with /employers.
- **/career-guidance** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/jobs/[id]** (nicks): merged/skipped duplicate; Havillah route retained — conflicts with /jobs/[slug].
- **/jobs** (nicks): duplicate source page skipped; all unique role data is merged into the single Havillah `/jobs` catalogue.
- **/training-school** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/training-school/courses/[slug]** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/training-school/courses** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/training-school/equipment** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/videos** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/services/[slug]** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/services** (nicks): merged/skipped duplicate; Havillah route retained — conflicts with /services.
- **/downloads** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/success-stories** (nicks): merged/skipped duplicate; Havillah route retained — conflicts with /success-stories.
- **/job-categories/[slug]** (nicks): merged/skipped duplicate; Havillah route retained — conflicts with /job-categories/[slug].
- **/job-categories** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/blog** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/book-medical** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/terms-of-service** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/book-training** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/search** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/api/search** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/api/apply** (nicks): merged/skipped duplicate; Havillah route retained — conflicts with /api/apply.
- **/api/inbound** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/api/chatbot** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/apply-now** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/accessibility-statement** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/testimonials** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/cookie-policy** (nicks): merged/skipped duplicate; Havillah route retained — conflicts with /cookie-policy.
- **/events** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/privacy-policy** (nicks): merged/skipped duplicate; Havillah route retained — conflicts with /privacy-policy.
- **/gallery** (nicks): merged/skipped duplicate; Havillah route retained — conflicts with /gallery.
- **/news** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/contact** (nicks): merged/skipped duplicate; Havillah route retained — conflicts with /contact.
- **/medical-laboratory/[slug]** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/medical-laboratory** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/resources/[slug]** (nicks): merged/skipped duplicate; Havillah route retained — conflicts with /resources/[slug].
- **/resources** (nicks): merged/skipped duplicate; Havillah route retained — conflicts with /resources.
- **/track-application** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/countries/[slug]** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/countries** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/about/[slug]** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.
- **/about** (nicks): merged/skipped duplicate; Havillah route retained — conflicts with /about.
- **/faqs** (nicks): merged/skipped duplicate; Havillah route retained — conflicts with /faqs.
- **/security** (nicks): integrated as native Havillah route — unique route; imported page and colocated files copied into app/.

## Assets

- Imported usable source images: 138; total central catalogue entries: 139, including the Havillah Open Graph banner.
- File formats accepted: JPG, JPEG, PNG, WEBP, SVG, AVIF. JFIF files were not copied or referenced.
- Images under 140px wide or 100px tall, unreadable raster files, and obvious company-logo assets were skipped.
- Central mapping: `data/images.ts`; visual gallery route: `/gallery`. Shared Havillah contact/brand values are defined in `data/site-content.ts` and referenced by `lib/site.ts`.
- All imported image paths are normalized under `public/images/{jobs,countries,hero,team,gallery}/`; `/gallery` renders the full central image catalogue with `next/image`, descriptive alt text, responsive `sizes`, and priority loading for the first visible cards. Only `public/havillah-logo.png` is used as the brand logo.

## Job catalogue consolidation

- The `/jobs` route now reads from `data/combined-jobs.ts`, which merges the canonical Havillah catalogue with unique entries from the three supplied source catalogues, deduplicating repeated title/destination combinations. Imported entries are explicitly labelled as unverified and link to an enquiry rather than claiming live vacancy status.
- Brand name, contact email, phone, WhatsApp number, destinations, location and social links are consolidated in `data/site-content.ts`; source-derived configs reference that data. Unverified legacy office addresses, old company social accounts and old company contact emails were removed.

## Mobile-first improvements

- Added fixed bottom navigation for Home, Jobs, Places, Gallery, and Contact on mobile screens.
- Added responsive image gallery with adaptive grid and safe-area padding.
- Kept Havillah’s existing navy/green brand system and logo.


## Audit totals and final structure

- Audited all files in the three uploaded source archives: Ajira Majuu (202 files), MK Connections (235 files), and Nicks Recruitment Agency (189 files), including app routes, components, libraries, data, configuration and public assets.
- Route audit: 110 source route entries reviewed; 69 non-conflicting source route entries were integrated before final consolidation, while 41 duplicate route entries were skipped in favour of the canonical Havillah route. The `/jobs` and `/gallery` pages were then consolidated into single Havillah implementations. Conflicting job listings and gallery content were merged into the single `/jobs` and `/gallery` routes rather than keeping duplicate pages.
- The final app contains 79 Next.js page routes and 12 API route handlers. `/explore` is a new route directory linking all user-facing page groups.
- Source feature code now lives in feature-oriented `components/overseas`, `components/career`, `components/training`, `lib/overseas`, `lib/career`, `lib/training`, `data/overseas`, `data/career`, and `data/training.ts`, `data/job-categories.ts`, and `data/destinations.ts`. No source-project folders or `integrations/reference-projects/` folder remain.
- Static audit: 0 unresolved local imports, 0 broken literal image paths, 0 JFIF files/references, and 0 imported source-company logos in the public image library. The image catalogue has 139 entries and every referenced file exists.
- Testimonial placeholders are explicitly labelled as placeholders; the testimonials page now refuses to present invented names or quotes as genuine candidate experiences.

## Dependencies and verification

- Merged non-conflicting runtime dependencies into Havillah `package.json`; Next.js/React remain at Havillah’s versions.
- Added a merged Tailwind/PostCSS theme mapped to Havillah navy/green branding. The main homepage renders canonical centralized job-category and destination cards plus integrated training and medical-screening sections; unused duplicate homepage components and compiled JS duplicates were removed.
- Static import-path scan completed with no unresolved local imports. JSX syntax errors found in an imported source header were repaired. The `npm install` attempts could not fetch packages from the npm registry and the local cache was empty. Consequently `npm run build` and `npm run dev` both stop with `next: not found`; they must be rerun after dependencies are installed in a network-enabled environment. No successful production build is claimed. External integrations that require API keys or database configuration must be configured before they can operate.

## Addendum: copy-deck and design upgrade

- Added `data/havilla-copy.ts` (approved copy deck) and `components/home/HomeIntro.tsx` / `HomeDeck.tsx`, wired into the existing homepage: introduction, approach, 7-step journey, candidate-safety checklist, career resources and a closing call to action.
- `/about`, `/services`, `/faq` were redirects to homepage anchors; they are now real pages (all were already linked from the navigation, footer and sitemap). `/resources` is now a real page too. `/candidate-safety` gained warning signs; `/how-it-works` gained the remaining journey steps. Existing text on those pages is unchanged.
- Design ideas taken from the supplied screenshots: organic wave dividers and blob shapes (Curvejump, Pipedrive), frosted-glass cards (fintech UIs), clear step cards, dark safety band. All styles are appended to `app/globals.css` with the `hv-` prefix.
- Not verified: no `npm install` / `next build` possible in this environment (no network). Only a syntax transpile check and an `@/` import-resolution check were run.
