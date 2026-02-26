import Team from "@/components/sections/team";

import { Button } from "@/components/ui/button";
import Glow from "@/components/ui/glow";
import { siteConfig } from "@/config/site";

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

const values = [
  {
    title: "Innovation",
    description:
      "We foster creative thinking and push boundaries in machine learning applications.",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of working together to achieve greater results.",
  },
  {
    title: "Excellence",
    description:
      "We strive for the highest quality in all our projects and initiatives.",
  },
  {
    title: "Integrity",
    description:
      "We conduct our work with honesty, transparency, and ethical standards.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero */}
      <section className="border-b border-gray-200 px-6 py-24 md:py-32 dark:border-gray-800">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl dark:text-white">
            About BSML
          </h1>
          <p className="text-muted-foreground text-lg">
            Bocconi Students for Machine Learning — connecting minds, not just
            layers.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-gray-200 px-6 py-24 dark:border-gray-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
            Our Mission
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            To create a community where Bocconi students can learn, collaborate,
            and publish machine learning projects. We bridge the gap between
            academic theory and real-world applications in finance and
            technology.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted/30 border-t border-gray-200 px-6 py-24 dark:border-gray-800">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            <div className="text-center">
              <div className="text-5xl font-bold dark:text-white">50+</div>
              <div className="text-muted-foreground mt-2 text-lg">
                Active Members
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold dark:text-white">20+</div>
              <div className="text-muted-foreground mt-2 text-lg">
                Events Hosted
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold dark:text-white">15+</div>
              <div className="text-muted-foreground mt-2 text-lg">
                Partner Companies
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold dark:text-white">1000+</div>
              <div className="text-muted-foreground mt-2 text-lg">
                Campus Reach
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="border-t border-gray-200 px-6 py-24 dark:border-gray-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 p-8 dark:border-gray-800"
              >
                <h3 className="mb-3 text-xl font-semibold dark:text-white">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <Team teamMembers={leadership} />

      {/* CTA */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-gray-200 px-6 py-24 dark:border-gray-800"
      >
        <Glow variant="bottom" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="from-foreground to-foreground/60 mb-4 bg-gradient-to-b bg-clip-text text-3xl font-bold tracking-tight text-transparent lg:text-4xl dark:text-white">
            Interested in partnering with us?
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            We are always looking for sponsorship opportunities and industry
            connections.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Partner With Us</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
