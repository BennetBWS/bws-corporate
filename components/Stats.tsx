import FadeIn from "./FadeIn";
import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <FadeIn as="section" className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-container grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-bold tracking-tight sm:text-4xl">
              {stat.value}
            </div>
            <div className="mt-2 text-xs text-muted sm:text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
