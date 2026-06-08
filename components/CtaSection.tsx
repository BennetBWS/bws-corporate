import Image from "next/image";
import Link from "next/link";
import { CTA, IMAGES } from "@/lib/constants";
import Reveal from "./Reveal";

export function CtaSection() {
  return (
    <section className="cta">
      <div className="bg">
        <Image
          src={IMAGES.ceoBg}
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <Reveal className="container">
        <h2>
          {CTA.title}
          <span style={{ color: "#00dfd8" }}>.</span>
        </h2>
        <p>{CTA.body}</p>
        <Link href={CTA.button.href} className="btn btn-grad">
          {CTA.button.label}
        </Link>
      </Reveal>
    </section>
  );
}
