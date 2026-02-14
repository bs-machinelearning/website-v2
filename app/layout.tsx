import "@/app/globals.css";

import type { Metadata } from "next";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { inter } from "@/lib/fonts";

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: {
    default: "BSML | Bocconi Students for Machine Learning",
    template: `%s - BSML | Bocconi Students for Machine Learning`,
  },
  metadataBase: new URL(siteConfig.getStartedUrl),
  description:
    "Connecting minds, not only layers. Bocconi’s first Machine Learning project-incubator: a community for publishing projects, building skills, and finding collaborators.",
  keywords: [
    "Bocconi",
    "Machine Learning",
    "BSML",
    "Student organization",
    "Project incubator",
    "AI",
    "Deep Learning",
    "Data Science",
    "Research",
    "Workshops",
    "Hackathons",
    "Open Source",
    "Milano",
    "Italy",
  ],
  authors: [
    {
      name: "BSML | Bocconi Students for Machine Learning",
      url: "https://www.linkedin.com/company/bocconi-students-for-machine-learning/?originalSubdomain=it",
    },
  ],
  creator: "BSML | Bocconi Students for Machine Learning",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.getStartedUrl,
    title: "BSML | Bocconi Students for Machine Learning",
    description:
      "Connecting minds, not only layers. Bocconi’s first Machine Learning project-incubator: publish projects, grow skills, and collaborate.",
    siteName: "BSML | Bocconi Students for Machine Learning",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "BSML | Bocconi Students for Machine Learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BSML | Bocconi Students for Machine Learning",
    description: "Connecting minds, not only layers. Bocconi’s first Machine Learning project-incubator: publish projects, grow skills, and collaborate.",
    images: [siteConfig.ogImage],
    creator: "@bs-machinelearning",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }} className="dark">
      <body className={`${inter.className} bg-background antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
