import Image from "next/image";
import Link from "next/link";
import { HERO, IMAGES, STATS } from "@/lib/constants";
import Reveal from "./Reveal";
import CountUpNum from "./CountUpNum";

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <Reveal className="hero-left">
            <span className="eyebrow grad">{HERO.eyebrow}</span>
            <h1>
              {HERO.titleLines[0]}
              <br />
              {HERO.titleLines[1]}
              <span style={{ color: "#007cf0" }}>.</span>
            </h1>
            <p className="lead">{HERO.lead}</p>
            <div className="hero-cta">
              <Link href={HERO.primaryCta.href} className="btn btn-dark">
                {HERO.primaryCta.label}
              </Link>
              <Link href={HERO.secondaryCta.href} className="btn btn-ghost">
                {HERO.secondaryCta.label}
              </Link>
            </div>
          </Reveal>

          <div className="hero-media">
            <div className="frame">
              <Image
                src={IMAGES.hero}
                alt="オフィスで働くチーム"
                fill
                sizes="(max-width: 920px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="stats">
      <Reveal className="container">
        {STATS.map((s) => (
          <div className="stat" key={s.cap}>
            <div className="num">
              <CountUpNum value={s.num} />
            </div>
            <div className="cap">{s.cap}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
