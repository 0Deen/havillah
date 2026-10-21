import Image from "next/image";
import Link from "next/link";
import { siteImages } from "@/data/images";

export const metadata = { title: "Career & Destination Gallery", description: "Explore career sectors, overseas destinations, people and recruitment resources from Havillah." };
const headings = [
  { id: "hero", title: "Havillah campaign visuals", intro: "Official Havillah recruitment campaign artwork and social sharing assets." },
  { id: "jobs", title: "Explore job sectors", intro: "Browse career areas and the work environments candidates may encounter." },
  { id: "countries", title: "Overseas destinations", intro: "Explore destination imagery for Gulf and international opportunities." },
  { id: "team", title: "People and success", intro: "Recruitment is about people, preparation and safe, informed decisions." },
  { id: "gallery", title: "More from Havillah", intro: "Training, services, events and other recruitment resources." },
];
export default function GalleryPage() { return <main className="site-gallery"><section className="gallery-intro"><p className="kicker">HAVILLAH CAREER GALLERY</p><h1>Real opportunities begin with informed choices.</h1><p>Explore career sectors, destinations and recruitment imagery. Images illustrate areas of work and are not a claim that a specific vacancy is currently open.</p><Link className="button button-primary" href="/jobs">Browse job listings</Link></section>{headings.map(section => { const items=siteImages.filter(image=>image.category===section.id); if(!items.length)return null; return <section className="gallery-section" key={section.id} id={section.id}><div className="gallery-heading"><div><p className="kicker">EXPLORE</p><h2>{section.title}</h2><p>{section.intro}</p></div></div><div className="gallery-grid">{items.map((image,index)=><article className="gallery-card" key={image.src}><div className="gallery-image"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw" priority={section.id==='jobs' && index<2}/></div><div className="gallery-card-copy"><h3>{image.alt}</h3><Link href={section.id==='countries'?'/destinations':section.id==='jobs'?'/job-categories':'/about'}>Explore more <span aria-hidden="true">↗</span></Link></div></article>)}</div></section>})}<section className="gallery-cta"><h2>Ready to take your next step?</h2><p>Speak with Havillah about role requirements, destination information and the application process.</p><Link href="/apply" className="button button-primary">Start an enquiry</Link></section></main> }
