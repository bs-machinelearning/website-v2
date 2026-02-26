"use client";

import Link from "next/link";
import * as React from "react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import BSML from "../logos/bsml";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

interface ComponentItem {
  title: string;
  href: string;
  description: string;
}

interface MenuItem {
  title: string;
  href?: string;
  isLink?: boolean;
  content?: ReactNode;
}

interface NavigationProps {
  menuItems?: MenuItem[];
  components?: ComponentItem[];
  logo?: ReactNode;
  logoTitle?: string;
  logoDescription?: string;
  logoHref?: string;
  introItems?: {
    title: string;
    href: string;
    description: string;
  }[];
}

export default function Navigation({
  menuItems = [
    {
      title: "Organisation",
      content: (
        <div className="w-[400px] p-4 md:w-[600px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="border-border/30 border-r pr-6">
              <Link href="/" className="flex items-center gap-2">
                <BSML />
                <span className="font-bold">BSML</span>
              </Link>
              <p className="text-muted-foreground mt-2 text-sm">
                We are Bocconi Students for Machine Learning — connecting minds,
                not just layers. Our mission is to create a community where
                students can learn, collaborate, and publish ML projects.
              </p>
            </div>
            <div className="pl-2">
              <ul className="grid gap-1">
                <ListItem href="/about" title="About Us">
                  Learn about our mission and team
                </ListItem>
                <ListItem href="/contact" title="Contact">
                  Get in touch with us
                </ListItem>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Resources",
      content: (
        <div className="w-[400px] p-4 md:w-[600px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="border-border/30 border-r pr-6">
              <Link href="/" className="flex items-center gap-2">
                <BSML />
                <span className="font-bold">BSML</span>
              </Link>
              <p className="text-muted-foreground mt-2 text-sm">
                Explore our research papers, case studies, and insights. We
                publish our work to share knowledge and contribute to the ML
                community.
              </p>
            </div>
            <div className="pl-2">
              <ul className="grid gap-1">
                <ListItem href="/case-studies" title="Case Studies">
                  See our real-world impact
                </ListItem>
                <ListItem href="/research" title="Research">
                  Explore our research papers
                </ListItem>
                <ListItem href="/insights" title="Insights">
                  Read our latest articles
                </ListItem>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Social",
      content: (
        <div className="w-[400px] p-4 md:w-[600px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="border-border/30 border-r pr-6">
              <Link href="/" className="flex items-center gap-2">
                <BSML />
                <span className="font-bold">BSML</span>
              </Link>
              <p className="text-muted-foreground mt-2 text-sm">
                Join our growing community of ML enthusiasts. Follow us on
                social media to stay updated with our latest projects, events,
                and opportunities.
              </p>
            </div>
            <div className="pl-2">
              <ul className="grid gap-1">
                <ListItem
                  href="https://linkedin.com"
                  title="LinkedIn"
                  rel="noopener noreferrer"
                >
                  Follow us on LinkedIn
                </ListItem>
                <ListItem
                  href="https://instagram.com"
                  title="Instagram"
                  rel="noopener noreferrer"
                >
                  Follow us on Instagram
                </ListItem>
                <ListItem
                  href="https://github.com"
                  title="GitHub"
                  rel="noopener noreferrer"
                >
                  Check our GitHub
                </ListItem>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ],
  components = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ],
  logo = <BSML />,
  logoTitle = "BSML",
  logoDescription = "Machine learning components and tools for building intelligent applications.",
  logoHref = siteConfig.url,
  introItems = [
    {
      title: "Introduction",
      href: siteConfig.url,
      description:
        "Re-usable components built using Radix UI and Tailwind CSS.",
    },
    {
      title: "Installation",
      href: siteConfig.url,
      description: "How to install dependencies and structure your app.",
    },
    {
      title: "Typography",
      href: siteConfig.url,
      description: "Styles for headings, paragraphs, lists...etc",
    },
  ],
}: NavigationProps) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.isLink ? (
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link href={item.href || ""}>{item.title}</Link>
              </NavigationMenuLink>
            ) : (
              <>
                <NavigationMenuTrigger className="hover:text-primary data-[state=open]:text-primary text-sm font-medium">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>{item.content}</NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  className,
  title,
  children,
  ...props
}: React.ComponentProps<"a"> & { title: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          data-slot="list-item"
          className={cn(
            "hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
