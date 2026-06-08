import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { CONTACT } from "@/lib/constants";
import { ICONS } from "@/components/Icons";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: CONTACT.lead,
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow grad">{CONTACT.eyebrow}</span>
            <h1>
              {CONTACT.title}
              <span style={{ color: "#007cf0" }}>.</span>
            </h1>
            <p>{CONTACT.lead}</p>
          </div>
        </section>

        <section className="contact-wrap">
          <div className="container">
            <div className="contact-grid">
              <Reveal className="contact-info">
                <h3>{CONTACT.infoHeading}</h3>
                <p style={{ color: "var(--muted)", fontSize: "14.5px" }}>
                  {CONTACT.infoNote}
                </p>
                <ul className="info-list">
                  {CONTACT.info.map((item) => {
                    const Icon = ICONS[item.icon as keyof typeof ICONS];
                    return (
                      <li key={item.label}>
                        <span className="ico">
                          <Icon />
                        </span>
                        <div>
                          <div className="lbl">{item.label}</div>
                          <div className="val">{item.value}</div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
