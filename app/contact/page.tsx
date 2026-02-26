"use client";

import { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import Glow from "@/components/ui/glow";
import { useForm, ValidationError } from "@formspree/react";

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="border-border text-muted-foreground dark:text-muted-foreground flex size-10 items-center justify-center rounded-full border bg-white/20 backdrop-blur-sm transition-all hover:border-[#6600cc] hover:bg-[#6600cc]/40 hover:text-white dark:border-[#6600cc]/30 dark:bg-white/5 dark:hover:border-[#6600cc] dark:hover:bg-[#6600cc]/40 dark:hover:text-white"
    >
      {children}
    </a>
  );
}

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mykdnebv");

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Glow variant="bottom" />
      <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Side */}
          <div className="flex flex-col justify-center">
            <h2 className="from-foreground to-foreground/60 bg-gradient-to-b bg-clip-text text-3xl font-bold tracking-tight text-transparent lg:text-5xl">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Have a question or want to collaborate? We'd love to hear from
              you.
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <h3 className="text-muted-foreground text-sm font-medium">
                  Email
                </h3>
                <a
                  href="mailto:contact@bsml.it"
                  className="text-foreground hover:text-primary mt-1 block text-lg font-medium transition-colors"
                >
                  contact@bsml.it
                </a>
              </div>

              <div>
                <h3 className="text-muted-foreground text-sm font-medium">
                  Location
                </h3>
                <p className="text-foreground mt-1 text-lg font-medium">
                  Bocconi University
                </p>
                <p className="text-muted-foreground">Milan, Italy</p>
              </div>

              <div>
                <h3 className="text-muted-foreground text-sm font-medium">
                  Follow us
                </h3>
                <div className="mt-3 flex gap-4">
                  <SocialLink href="https://linkedin.com" label="LinkedIn">
                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </SocialLink>
                  <SocialLink href="https://instagram.com" label="Instagram">
                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </SocialLink>
                  <SocialLink href="https://github.com" label="GitHub">
                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </SocialLink>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="border-border bg-card/50 dark:bg-card/10 rounded-2xl border p-8 transition-all hover:border-[#6600cc]/60 hover:bg-[#6600cc]/5 dark:hover:border-[#6600cc]/60 dark:hover:bg-[#6600cc]/10">
            {state.succeeded ? (
              <div className="flex h-full flex-col items-center justify-center space-y-4 py-12 text-center">
                <svg
                  className="h-16 w-16 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-lg font-medium">Thanks for reaching out!</p>
                <p className="text-muted-foreground">
                  We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium"
                    >
                      First Name
                    </label>
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="border-input focus:border-primary focus:ring-primary mt-2 block w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm transition-all hover:border-[#6600cc]/90 hover:bg-[#6600cc]/10 focus:ring-1 focus:outline-none"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium"
                    >
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="border-input focus:border-primary focus:ring-primary mt-2 block w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm transition-all hover:border-[#6600cc]/90 hover:bg-[#6600cc]/10 focus:ring-1 focus:outline-none"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="work-email"
                    className="border-input focus:border-primary focus:ring-primary mt-2 block w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm transition-all hover:border-[#6600cc]/90 hover:bg-[#6600cc]/10 focus:ring-1 focus:outline-none"
                    placeholder="you@company.com"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium"
                  >
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="border-input focus:border-primary focus:ring-primary mt-2 block w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm transition-all hover:border-[#6600cc]/90 hover:bg-[#6600cc]/10 focus:ring-1 focus:outline-none"
                    placeholder="Acme Inc."
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="border-input focus:border-primary focus:ring-primary mt-2 block w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm transition-all hover:border-[#6600cc]/90 hover:bg-[#6600cc]/10 focus:ring-1 focus:outline-none"
                    placeholder="Tell us what's on your mind..."
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full"
                  type="submit"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
