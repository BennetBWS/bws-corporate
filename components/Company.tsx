import FadeIn from "./FadeIn";
import { COMPANY } from "@/lib/constants";

export default function Company() {
  return (
    <section id="company" className="bg-white">
      <div className="mx-auto max-w-container px-6 py-16 md:py-24">
        <FadeIn>
          <p className="mb-3 font-mono text-sm font-medium gradient-text-develop">
            {COMPANY.eyebrow}
          </p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {COMPANY.title}
          </h2>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="mt-10 overflow-hidden rounded-xl border border-line">
            <table className="w-full border-collapse text-sm">
              <tbody>
                {COMPANY.rows.map((row) => (
                  <tr key={row.label} className="border-b border-line last:border-b-0">
                    <th className="w-32 bg-surface px-5 py-4 text-left align-top font-medium text-muted sm:w-44">
                      {row.label}
                    </th>
                    <td className="px-5 py-4 align-top leading-relaxed">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
