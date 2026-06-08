import Image from "next/image";
import { CEO, IMAGES } from "@/lib/constants";
import Reveal from "./Reveal";

export function CeoSection() {
  return (
    <section className="ceo">
      <div className="bg">
        <Image
          src={IMAGES.ceoBg}
          alt="東京の夜景"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="container">
        <div className="ceo-grid">
          {CEO.blocks.map((block, i) => (
            <Reveal key={i}>
              <span className="eyebrow on-dark">{block.eyebrow}</span>
              <h2>
                {block.titleLines[0]}
                <br />
                {block.titleLines[1]}
                <span style={{ color: block.accent }}>.</span>
              </h2>
              {block.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
