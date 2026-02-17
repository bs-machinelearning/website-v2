import Link from "next/link";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Section } from "../ui/section";

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
  title = "Frequently Asked Questions",
  items = [
    {
      question: "Who can apply?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Any Bocconi student with interest in machine learning can apply. No
            prior ML experience is required — we welcome beginners who are
            curious and motivated to learn.
          </p>
        </>
      ),
    },
    {
      question: "Is prior ML experience required?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            No! We accept students at all levels. What matters most is your
            eagerness to learn and build. We'll teach you the fundamentals and
            guide you through your first projects.
          </p>
        </>
      ),
    },
    {
      question: "What is the selection process?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Our application includes a short form and a brief coding challenge.
            We evaluate problem-solving ability, curiosity, and cultural fit. We
            accept around 25% of applicants each cohort.
          </p>
        </>
      ),
    },
    {
      question: "What is the time commitment?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            We expect members to dedicate 5-10 hours per week to BSML
            activities, including project work, workshops, and meetings. It's
            designed to fit alongside your Bocconi coursework.
          </p>
        </>
      ),
    },
    {
      question: "What kind of projects are built?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Our projects range from research papers and Kaggle competitions to
            real-world ML applications and open-source tools. Members have
            worked on topics including NLP, computer vision, time series, and
            reinforcement learning.
          </p>
        </>
      ),
    },
    {
      question: "Is it research-focused or industry-focused?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Both. We balance academic research (publications, conferences) with
            practical industry applications (products, internships). You'll get
            exposure to both worlds and can tailor your experience to your
            goals.
          </p>
        </>
      ),
    },
    {
      question: "Do members get internships through BSML?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Yes. Our partner companies actively recruit from BSML for
            internships and full-time roles. Many members secure positions at
            top quant firms and tech companies through our network.
          </p>
        </>
      ),
    },
    {
      question: "Is there a fee?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            No, membership is completely free. BSML is funded through our
            partnerships and Bocconi support. All workshops, projects, and
            events are included at no cost to members.
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
        <h2 className="from-foreground to-foreground/60 bg-gradient-to-b bg-clip-text text-center text-3xl font-semibold text-transparent sm:text-5xl">
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
