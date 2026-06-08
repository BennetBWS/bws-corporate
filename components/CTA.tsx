import Link from "next/link";
import FadeIn from "./FadeIn";
import { CTA } from "@/lib/constants";

export default function CtaBanner() {
  return (
    <section className="bg-ink text-white">
      <FadeIn>
        <div className="mx-auto max-w-container px-6 py-16 text-center md:py-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {CTA.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            {CTA.description}
          </p>
          <Link
            href={CTA.button.href}
            className="mt-8 inline-block rounded-full px-8 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 gradient-develop"
          >
            {CTA.button.label}
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
