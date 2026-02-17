import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import Glow from "../ui/glow";
import { Section } from "../ui/section";

interface CTAProps {
  title?: string;
  className?: string;
}

export default function CTA({
  title = "Ready to Get Started?",
  className,
}: CTAProps) {
  return (
    <Section className={cn("relative overflow-hidden py-24", className)}>
      <Glow variant="bottom" />
      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="from-foreground to-foreground/60 mb-4 bg-gradient-to-b bg-clip-text text-3xl font-bold tracking-tight text-transparent lg:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Whether you want to build ML projects or hire top talent — BSML has
            you covered.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href={siteConfig.getStartedUrl}>Apply as a Student</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={siteConfig.links.linkedin}>Partner With Us</a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
