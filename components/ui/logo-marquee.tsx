"use client";

const companies1 = [
  "Amazon",
  "Bending Spoons",
  "Citi",
  "Goldman Sachs",
  "Google",
  "Revolut",
];

const companies2 = [
  "Balyasny Asset Management",
  "CFM",
  "Five Rings",
  "Flow Traders",
  "Jane Street",
  "Point72",
];

const universities = [
  "Columbia University",
  "EPFL",
  "ETH Zürich",
  "MIT",
  "University of Oxford",
  "University of Chicago",
];

function LogoItem({ name }: { name: string }) {
  return (
    <div className="mx-8 flex-shrink-0 px-6 py-3">
      <span className="text-base font-semibold whitespace-nowrap md:text-lg">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration = 30,
}: {
  items: string[];
  reverse?: boolean;
  duration?: number;
}) {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden py-3">
      <div
        className={`flex ${reverse ? "reverse" : ""}`}
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <LogoItem key={`${item}-${idx}`} name={item} />
        ))}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="from-foreground to-foreground/60 bg-gradient-to-b bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
        Where Our Members Shine
      </h2>
      <div className="mx-auto w-full max-w-5xl">
        <div className="space-y-1">
          <MarqueeRow items={companies1} duration={25} />
          <MarqueeRow items={companies2} reverse duration={30} />
          <MarqueeRow items={universities} duration={35} />
        </div>
      </div>
    </div>
  );
}
