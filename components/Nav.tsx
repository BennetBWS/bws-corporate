"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY, IMAGES, NAV_LINKS } from "@/lib/constants";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="nav">
      <div className="container">
        <Link className="brand" href="/" aria-label="Bennet BWS home">
          <Image
            src={IMAGES.logo}
            alt={COMPANY.nameEn}
            width={186}
            height={32}
            priority
          />
        </Link>

        <nav className="nav-links">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === "/" && pathname === "/";
            return (
              <Link
                key={link.label}
                href={link.href}
                className={isActive ? "active" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="btn btn-dark nav-cta">
          お問い合わせ
        </Link>
      </div>
    </header>
  );
}
