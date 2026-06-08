import FadeIn from "./FadeIn";
import { BusinessIcon } from "./Icons";
import { BUSINESS } from "@/lib/constants";

export default function Business() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-container px-6 py-16 md:py-24">
        <FadeIn>
          <p className="mb-3 font-mono text-sm font-medium gradient-text-develop">
            {BUSINESS.eyebrow}
          </p>
          <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight sm:text-3xl">
            <span className="block h-7 w-1 rounded gradient-develop" />
            {BUSINESS.title}
          </h2>
        </FadeIn>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {BUSINESS.items.map((item, i) => (
            <FadeIn key={item.label} delay={(i % 4) * 80}>
              <div className="flex h-full flex-col items-center justify-center gap-4 rounded-xl border border-line bg-white p-8 text-center transition-colors hover:bg-surface">
                <BusinessIcon name={item.icon} className="h-8 w-8 text-ink" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
