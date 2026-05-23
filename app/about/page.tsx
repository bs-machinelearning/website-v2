import {
  GraduationCap,
  Lightbulb,
  Target,
} from "lucide-react";

import Team from "@/components/sections/team";
import { Button } from "@/components/ui/button";

const leadership = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dries Vincent",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Courtney Henry",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Tom Cook",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const highlights = [
  {
    icon: GraduationCap,
    title: "Learn",
    description: "Workshops and hands-on projects to master ML fundamentals.",
  },
  {
    icon: Lightbulb,
    title: "Build",
    description:
      "Collaborate on real-world ML projects with industry applications.",
  },
  {
    icon: Target,
    title: "Publish",
    description: "Share your research and contributions with the community.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero */}
      <section className="border-border border-b px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-3 text-4xl font-semibold tracking-tight md:text-5xl">
            About BSML
          </h1>
          <p className="text-muted-foreground text-lg">
            Connecting minds, not just layers.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-border bg-muted/20 border-t px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="border-border bg-card rounded-xl border p-6"
              >
                <item.icon className="text-primary mb-3 size-6" />
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-border border-t px-6 py-12">
        <div className="mx-auto flex max-w-3xl justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-primary text-3xl font-bold">50+</div>
            <div className="text-muted-foreground text-sm">Members</div>
          </div>
          <div className="text-center">
            <div className="text-primary text-3xl font-bold">20+</div>
            <div className="text-muted-foreground text-sm">Events</div>
          </div>
          <div className="text-center">
            <div className="text-primary text-3xl font-bold">15+</div>
            <div className="text-muted-foreground text-sm">Partners</div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-border bg-muted/20 border-t px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-2xl font-bold">Our Team</h2>
          <Team teamMembers={leadership} />
        </div>
      </section>

      {/* CTA */}
      <section className="border-border border-t px-6 py-12">
        <div className="mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            Interested in partnering with us?
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Partner With Us</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
