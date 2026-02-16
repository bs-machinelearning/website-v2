import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Feature166Props {
  title?: string;
  description?: string;
  feature1?: Feature;
  feature2?: Feature;
  feature3?: Feature;
  feature4?: Feature;
  stats?: Stat[];
  className?: string;
}

const Feature166 = ({
  title = "Why Partner With BSML",
  description = "Connect with Bocconi's brightest ML talent and shape the future of quantitative research.",
  feature1 = {
    title: "Access Top ML Talent",
    description:
      "Connect with selective Bocconi students focused on ML, quant, and research careers. Our members go on to work at leading tech and finance companies.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  feature2 = {
    title: "Recruitment Pipeline",
    description:
      "Get early access to technically vetted candidates through our structured recruitment channels. Hire pre-screened talent with proven ML skills.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  feature3 = {
    title: "Research Collaboration",
    description:
      "Co-develop ML projects or sponsor research tracks with motivated students. Turn real business challenges into academic projects.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  },
  feature4 = {
    title: "Brand Visibility",
    description:
      "Gain exposure through on-campus events, workshops, and direct engagement with top students. Build relationships before graduation.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
  },
  stats = [
    { value: "50+", label: "Active Members" },
    { value: "25%", label: "Acceptance Rate" },
    { value: "85%", label: "Quant/Tech Placement" },
    { value: "3.8", label: "Average GPA" },
  ],
  className,
}: Feature166Props) => {
  return (
    <section className={cn("py-24", className)}>
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center gap-6 text-center">
          <h1 className="from-foreground to-foreground/60 bg-gradient-to-b bg-clip-text text-3xl font-bold tracking-tight text-transparent lg:max-w-3xl lg:text-5xl">
            {title}
          </h1>
          <p className="text-muted-foreground text-center text-lg font-medium md:max-w-4xl lg:text-xl">
            {description}
          </p>
        </div>
        <div className="mx-auto mb-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:max-w-4xl">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <span className="from-foreground to-foreground/60 bg-gradient-to-b bg-clip-text text-4xl font-bold text-transparent lg:text-5xl">
                {stat.value}
              </span>
              <span className="text-muted-foreground text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="bg-card/50 relative flex w-full max-w-7xl flex-col rounded-2xl border">
            <div className="relative flex flex-col lg:flex-row">
              <div className="border-border flex flex-col justify-between border-b p-8 lg:w-3/5 lg:border-r lg:border-b-0">
                <div>
                  <h2 className="text-xl font-semibold">{feature1.title}</h2>
                  <p className="text-muted-foreground mt-2">
                    {feature1.description}
                  </p>
                </div>
                <img
                  src={feature1.image}
                  alt={feature1.title}
                  className="mt-6 aspect-[1.5] h-full w-full rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-8 lg:w-2/5">
                <div>
                  <h2 className="text-xl font-semibold">{feature2.title}</h2>
                  <p className="text-muted-foreground mt-2">
                    {feature2.description}
                  </p>
                </div>
                <img
                  src={feature2.image}
                  alt={feature2.title}
                  className="mt-6 aspect-[1.45] h-full w-full rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="border-border relative flex flex-col border-t lg:flex-row">
              <div className="border-border flex flex-col justify-between border-b p-8 lg:w-2/5 lg:border-r lg:border-b-0">
                <div>
                  <h2 className="text-xl font-semibold">{feature3.title}</h2>
                  <p className="text-muted-foreground mt-2">
                    {feature3.description}
                  </p>
                </div>
                <img
                  src={feature3.image}
                  alt={feature3.title}
                  className="mt-6 aspect-[1.45] h-full w-full rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-8 lg:w-3/5">
                <div>
                  <h2 className="text-xl font-semibold">{feature4.title}</h2>
                  <p className="text-muted-foreground mt-2">
                    {feature4.description}
                  </p>
                </div>
                <img
                  src={feature4.image}
                  alt={feature4.title}
                  className="mt-6 aspect-[1.5] h-full w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature166 };
