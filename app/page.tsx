import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import { Feature166 } from "../components/sections/features/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Navbar from "../components/sections/navbar/default";
import { Feature43 } from "../components/sections/students/default";
import { LayoutLines } from "../components/ui/layout-lines";
import LogoMarquee from "../components/ui/logo-marquee";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <Hero />
      <div className="mt-16">
        <LogoMarquee />
      </div>
      <Feature166 />
      <Feature43 />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
