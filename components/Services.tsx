import Image from "next/image";
import Link from "next/link";
import { SERVICES, IMAGES } from "@/lib/constants";
import Reveal from "./Reveal";
import { ICONS } from "./Icons";

const gradientClass: Record<string, string> = {
  develop: "ic-develop",
  preview: "ic-preview",
  ship: "ic-ship",
};

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{SERVICES.eyebrow}</span>
          <div className="h-bar">
            <span className="bar" />
            <h2>
              {SERVICES.title}
              <span style={{ color: "#007cf0" }}>.</span>
            </h2>
          </div>
        </Reveal>
      </div>

      <div className="svc-photo">
        <Image
          src={IMAGES.servicesBg}
          alt="オフィス"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="container">
        <Reveal className="svc-cards">
          {SERVICES.items.map((item) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            const Arrow = ICONS[item.arrow as keyof typeof ICONS];
            const inner = (
              <>
                <div className={`icon-tile ${gradientClass[item.gradient]}`}>
                  <Icon />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <span className="go">
                  <Arrow />
                </span>
              </>
            );
            return item.external ? (
              <a
                className="card"
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {inner}
              </a>
            ) : (
              <Link className="card" key={item.title} href={item.href}>
                {inner}
              </Link>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
