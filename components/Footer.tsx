import Image from "next/image";
import Link from "next/link";
import { COMPANY, FOOTER, IMAGES } from "@/lib/constants";
import { IconMail, IconTel } from "./Icons";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="container">
        <div className="foot-grid">
          <div>
            <Link className="brand" href="/">
              <Image
                src={IMAGES.logo}
                alt={COMPANY.nameEn}
                width={186}
                height={32}
                style={{ width: "120px", height: "auto" }}
              />
            </Link>
            <address>
              {COMPANY.addressLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < COMPANY.addressLines.length - 1 && <br />}
                </span>
              ))}
            </address>
          </div>

          {FOOTER.columns.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    {"external" in l && l.external ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href}>{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4>{FOOTER.contactHeading}</h4>
            <div className="ct">
              <IconMail />{" "}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </div>
            <div className="ct">
              <IconTel />{" "}
              <a href={`tel:${COMPANY.tel.replace(/[^0-9]/g, "")}`}>
                {COMPANY.tel}
              </a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">{COMPANY.copyright}</div>
      </div>
    </footer>
  );
}
