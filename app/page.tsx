import CTA from "../components/sections/cta";
import FAQ from "../components/sections/faq";
import { Feature166 } from "../components/sections/features";
import Footer from "../components/sections/footer";
import Hero from "../components/sections/hero";
import Navbar from "../components/sections/navbar";
import { Feature43 } from "../components/sections/students";
import { LayoutLines } from "../components/ui/layout-lines";
import LogoMarquee from "../components/ui/logo-marquee";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Hero />
      <div className="mt-16">
        <LogoMarquee />
      </div>
      <Feature166 />
      <Feature43 />
      <FAQ />
      <CTA />
    </main>
  );
}
