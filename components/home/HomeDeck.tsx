import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { approach, journey, safety, resources, finalCta } from "@/data/havilla-copy";

function Wave({ flip = false, tone }: { flip?: boolean; tone: "paper" | "navy" | "mint" }) {
  return (
    <svg className={`hv-wave hv-wave-${tone}${flip ? " hv-flip" : ""}`} viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d="M0 40C180 90 360 90 560 55S980 -10 1180 25 1360 60 1440 40V90H0Z" />
    </svg>
  );
}

export default function HomeDeck() {
  return (
    <>
      <section className="hv-approach" aria-labelledby="hv-approach-title">
        <div className="hv-wrap">
          <div className="hv-head">
            <p className="kicker">{approach.eyebrow}</p>
            <h2 id="hv-approach-title">{approach.title}</h2>
            <p>{approach.lead}</p>
          </div>
          <ul className="hv-glass-grid">
            {approach.items.map((it) => (
              <li className="hv-glass" key={it.title}>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </li>
            ))}
          </ul>
          <Link className="text-link" href={approach.cta.href}>{approach.cta.label}</Link>
        </div>
      </section>

      <Wave tone="paper" />
      <section className="hv-journey" aria-labelledby="hv-journey-title">
        <div className="hv-wrap hv-journey-grid">
          <div className="hv-head hv-sticky">
            <p className="kicker">{journey.eyebrow}</p>
            <h2 id="hv-journey-title">{journey.title}</h2>
            <p>{journey.lead}</p>
            <p className="hv-closing">{journey.closing}</p>
            <Link className="button button-primary" href={journey.cta.href}>{journey.cta.label}</Link>
          </div>
          <ol className="hv-steps">
            {journey.steps.map((s, i) => (
              <li key={s.title}>
                <span className="hv-step-n" aria-hidden="true">{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="hv-safety" aria-labelledby="hv-safety-title">
        <Wave tone="navy" flip />
        <div className="hv-wrap hv-safety-grid">
          <div>
            <span className="hv-safety-icon"><ShieldCheck size={26} aria-hidden="true" /></span>
            <p className="kicker">{safety.eyebrow}</p>
            <h2 id="hv-safety-title">{safety.title}</h2>
            <p>{safety.lead}</p>
            <p className="hv-note">{safety.note}</p>
            <Link className="button button-light" href={safety.cta.href}>{safety.cta.label}</Link>
          </div>
          <div className="hv-glass hv-glass-dark">
            <h3>{safety.checklistTitle}</h3>
            <ul className="hv-checks">
              {safety.checklist.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="hv-resources" aria-labelledby="hv-res-title">
        <div className="hv-wrap">
          <div className="hv-head">
            <p className="kicker">{resources.eyebrow}</p>
            <h2 id="hv-res-title">{resources.title}</h2>
            <p>{resources.lead}</p>
          </div>
          <div className="hv-res-grid">
            {resources.items.map((r) => (
              <Link className="hv-res-card" href={r.href} key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
                <span>{r.cta}</span>
              </Link>
            ))}
          </div>
          <Link className="text-link" href={resources.more.href}>{resources.more.label}</Link>
        </div>
      </section>

      <section className="hv-final" aria-labelledby="hv-final-title">
        <div className="hv-wrap hv-final-inner">
          <h2 id="hv-final-title">{finalCta.title}</h2>
          <p>{finalCta.text}</p>
          <div className="hv-final-actions">
            <Link className="button button-primary" href={finalCta.primary.href}>{finalCta.primary.label}</Link>
            <Link className="button button-light" href={finalCta.secondary.href}>{finalCta.secondary.label}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
