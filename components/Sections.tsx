import { BUSINESS, HISTORY, COMPANY_TABLE } from "@/lib/constants";
import Reveal from "./Reveal";
import { ICONS } from "./Icons";

export function Business() {
  return (
    <section className="section" id="business">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{BUSINESS.eyebrow}</span>
          <div className="h-bar">
            <span className="bar" />
            <h2>
              {BUSINESS.title}
              <span style={{ color: "#007cf0" }}>.</span>
            </h2>
          </div>
        </Reveal>
        <Reveal className="biz-grid justify-items-center">
          {BUSINESS.items.map((item) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            return (
              <div className="biz-card" key={item.label}>
                <span className="glyph">
                  <Icon />
                </span>
                <span>{item.label}</span>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

export function History() {
  return (
    <section className="section soft" id="history">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{HISTORY.eyebrow}</span>
          <div className="h-bar">
            <span className="bar" />
            <h2>
              {HISTORY.title}
              <span style={{ color: "#007cf0" }}>.</span>
            </h2>
          </div>
        </Reveal>
        <Reveal className="timeline">
          {HISTORY.items.map((item, i) => (
            <div className="tl-row" key={i}>
              <span className="date">{item.date}</span>
              <span className="dot" />
              <span className="txt">{item.text}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Company() {
  return (
    <section className="section" id="company">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{COMPANY_TABLE.eyebrow}</span>
          <div className="h-bar">
            <span className="bar" />
            <h2>
              {COMPANY_TABLE.title}
              <span style={{ color: "#007cf0" }}>.</span>
            </h2>
          </div>
        </Reveal>
        <Reveal className="table">
          {COMPANY_TABLE.rows.map((row) => (
            <div className="row" key={row.k}>
              <div className="k">{row.k}</div>
              <div className="v">{row.v}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
