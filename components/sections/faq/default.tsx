import Link from "next/link";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Questions and Answers",
  items = [
    {
      question: "What is BSML?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            BSML (Business Machine Learning) provides components and tools for
            building intelligent applications with machine learning
            capabilities.
          </p>
        </>
      ),
    },
    {
      question: "What technologies does BSML use?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            BSML is built with modern technologies including React, Tailwind
            CSS, and integrates with popular ML frameworks.
          </p>
        </>
      ),
    },
    {
      question: "Is BSML open source?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Yes! BSML is open source and free to use under the MIT license.
          </p>
        </>
      ),
    },
    {
      question: "How do I get started?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Check out our documentation to get started with installing and using
            BSML components in your project.
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
