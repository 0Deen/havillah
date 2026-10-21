import Link from "next/link";
import { intro } from "@/data/havilla-copy";

export default function HomeIntro() {
  return (
    <section className="hv-intro" aria-labelledby="hv-intro-title">
      <div className="hv-wrap hv-intro-grid">
        <div>
          <p className="kicker">{intro.eyebrow}</p>
          <h2 id="hv-intro-title">{intro.title}</h2>
        </div>
        <div className="hv-intro-copy">
          {intro.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <Link className="button button-primary" href={intro.cta.href}>
            {intro.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
