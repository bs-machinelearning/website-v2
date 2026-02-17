import {
  BatteryCharging,
  GitPullRequest,
  Layers,
  RadioTower,
  SquareKanban,
  WandSparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface Feature {
  heading: string;
  description: string;
  icon: React.ReactNode;
}

interface Feature43Props {
  title?: string;
  description?: string;
  features?: Feature[];
  className?: string;
}

const Feature43 = ({
  title = "Why Join BSML",
  description = "Launch your ML career with real projects, mentorship, and a network that opens doors.",
  features = [
    {
      heading: "Real Projects",
      description:
        "Build portfolio-worthy ML projects from concept to deployment. Work on problems that matter and ship solutions that make an impact.",
      icon: <GitPullRequest className="size-6" />,
    },
    {
      heading: "Mentorship",
      description:
        "Get guidance from experienced researchers and industry professionals. Learn directly from those who've been where you want to go.",
      icon: <SquareKanban className="size-6" />,
    },
    {
      heading: "Publications",
      description:
        "Opportunities to co-author papers and contribute to cutting-edge research. Get your work published in peer-reviewed venues.",
      icon: <RadioTower className="size-6" />,
    },
    {
      heading: "Career Outcomes",
      description:
        "Land roles at top quant firms, tech giants, and research labs. Our alumni work at Google, Jane Street, Citadel, and more.",
      icon: <WandSparkles className="size-6" />,
    },
    {
      heading: "Network",
      description:
        "Connect with like-minded peers, Bocconi alumni, and industry professionals. Build relationships that last beyond graduation.",
      icon: <Layers className="size-6" />,
    },
    {
      heading: "Skill Growth",
      description:
        "Master ML fundamentals, advanced techniques, and production engineering. Go from beginner to interview-ready in months.",
      icon: <BatteryCharging className="size-6" />,
    },
  ],
  className,
}: Feature43Props) => {
  return (
    <section className={cn("py-24", className)}>
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="from-foreground to-foreground/60 mb-4 bg-gradient-to-b bg-clip-text text-3xl font-bold tracking-tight text-transparent lg:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg">{description}</p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col">
              <div className="bg-primary/10 text-primary mb-4 flex size-14 items-center justify-center rounded-full">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.heading}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature43 };
