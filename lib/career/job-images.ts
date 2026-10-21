/*
|--------------------------------------------------------------------------
| CENTRAL IMAGE MAP
|--------------------------------------------------------------------------
| Filenames match the folders in  public/images/{jobs,design,uradi}
| EXACTLY (case-sensitive on Linux / Vercel). `fallback` is an image that
| already existed in the project, used only if the primary file is absent.
|--------------------------------------------------------------------------
*/

export type Pic = { src: string; fallback: string };

const pic = (src: string, fallback: string): Pic => ({ src, fallback });

/** Ready-made recruitment flyers  ->  public/images/jobs */
export const flyers = {
  airportLoadersSaudi: pic("/images/countries/femaledriversaudi.jpeg", "/images/jobs/warehosue.webp"),
  femaleDriversSaudi: pic("/images/countries/femaledriversaudi.jpeg", "/images/jobs/hospitality.webp"),
  houseManagerQatar: pic("/images/countries/housemanagerqatar.jpeg", "/images/jobs/cleaner.webp"),
  houseToHouseQatar: pic("/images/countries/housetohouseqatar.jpeg", "/images/jobs/hospitality.webp"),
  nailTechQatar: pic("/images/countries/naitechqatar.jpeg", "/images/jobs/hospitality.webp"),
} as const;

/** Category photography  ->  public/images/uradi */
export const uradi = {
  agriculture: pic("/images/gallery/agriculture.webp", "/images/jobs/men.webp"),
  beauty: pic("/images/gallery/beauty.jpg", "/images/jobs/hospitality.webp"),
  caregiver: pic("/images/jobs/caregiver.jpg", "/images/jobs/caregiver.webp"),
  cleaning: pic("/images/jobs/cleaning.webp", "/images/jobs/mencleaners.webp"),
  construction: pic("/images/jobs/construction.webp", "/images/jobs/men.webp"),
  domesticWorker: pic("/images/team/domesticworker.webp", "/images/jobs/cleaner.webp"),
  driver: pic("/images/jobs/driver.webp", "/images/jobs/drivers.webp"),
  electrician: pic("/images/jobs/electrician.webp", "/images/jobs/men.webp"),
  engineering: pic("/images/jobs/engineering.webp", "/images/jobs/men.webp"),
  factories: pic("/images/gallery/factories.webp", "/images/jobs/warehosue.webp"),
  hospitality: pic("/images/jobs/hospitality.webp", "/images/jobs/cheef.webp"),
  // NB: "manufaturing.png" is spelled exactly like the file in your folder.
  manufacturing: pic("/images/gallery/manufaturing.png", "/images/jobs/warehosue.webp"),
} as const;

/** Travel / brand artwork  ->  public/images/design */
export const design = {
  coolPlane: pic("/images/gallery/coolplane.webp", "/images/gallery/plane.webp"),
  dubaiPlane: pic("/images/countries/dubaiplane.webp", "/images/jobs/hospitality.webp"),
  qatarPassport: pic("/images/countries/qatarpassport.webp", "/images/jobs/hospitality.webp"),
  uaePlane: pic("/images/countries/uaeplane.webp", "/images/gallery/image2.webp"),
  plane: pic("/images/gallery/plane.webp", "/images/jobs/hospitality.webp"),
  image1: pic("/images/jobs/hospitality.webp", "/images/gallery/plane.webp"),
  image2: pic("/images/gallery/image2.webp", "/images/gallery/plane.webp"),
  image3: pic("/images/jobs/hospitality.webp", "/images/gallery/plane.webp"),
  image4: pic("/images/gallery/image4.webp", "/images/gallery/plane.webp"),
  image5: pic("/images/jobs/hospitality.webp", "/images/gallery/plane.webp"),
} as const;

export const GENERIC_FALLBACK = "/images/jobs/men.webp";
