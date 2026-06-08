import FadeIn from "./FadeIn";
import { HISTORY } from "@/lib/constants";

export default function History() {
  return (
    <section id="history" className="bg-surface">
      <div className="mx-auto max-w-container px-6 py-16 md:py-24">
        <FadeIn>
          <p className="mb-3 font-mono text-sm font-medium gradient-text-develop">
            {HISTORY.eyebrow}
          </p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {HISTORY.title}
          </h2>
        </FadeIn>

        <div className="mt-10">
          <ol className="relative">
            {HISTORY.items.map((item, i) => (
              <FadeIn key={`${item.date}-${item.label}`} delay={i * 80}>
                <li className="grid grid-cols-[88px_24px_1fr] items-start gap-4 sm:grid-cols-[120px_24px_1fr]">
                  <span className="pt-0.5 text-sm font-medium text-muted">
                    {item.date}
                  </span>
                  <span className="relative flex justify-center">
                    <span className="z-10 mt-1 block h-3 w-3 rounded-full bg-[#007cf0] ring-4 ring-surface" />
                    {i !== HISTORY.items.length - 1 && (
                      <span className="absolute top-1 h-full w-px bg-line" />
                    )}
                  </span>
                  <span className="pb-8 text-sm">{item.label}</span>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
