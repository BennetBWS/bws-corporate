import Image from "next/image";
import FadeIn from "./FadeIn";
import { MESSAGE, IMAGES } from "@/lib/constants";

export default function Message() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Image
        src={IMAGES.ceoBg}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />

      <div className="relative mx-auto grid max-w-container gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <FadeIn>
          <p className="mb-4 font-mono text-sm font-medium text-white/60">
            {MESSAGE.ceo.eyebrow}
          </p>
          <h2 className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
            {MESSAGE.ceo.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/75">
            {MESSAGE.ceo.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <p className="mb-4 font-mono text-sm font-medium text-white/60">
            {MESSAGE.motto.eyebrow}
          </p>
          <h2 className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
            {MESSAGE.motto.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/75">
            {MESSAGE.motto.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
