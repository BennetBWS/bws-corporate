import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Hero, Stats } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CeoSection } from "@/components/CeoSection";
import { Business, History, Company } from "@/components/Sections";
import { CtaSection } from "@/components/CtaSection";
import PageTransition from "@/components/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Services />
        <CeoSection />
        <Business />
        <History />
        <Company />
        <CtaSection />
      </main>
      <Footer />
    </PageTransition>
  );
}
