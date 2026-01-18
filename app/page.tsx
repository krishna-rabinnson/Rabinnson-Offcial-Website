import Home from "./home/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rabinnson Private Limited - Business Solutions & Services",
  description:
    "Rabinnson Private Limited offers comprehensive business services including company registration, compliance, legal documentation, tax filing, licensing, and digital platforms across all industries in India.",
  metadataBase: new URL("https://www.rabinnson.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    // Core Business Services
    "business registration India",
    "company incorporation",
    "LLP registration",
    "sole proprietorship",
    "startup registration",
    // Legal & Compliance
    "legal documentation",
    "business compliance",
    "contract drafting",
    "employment agreements",
    "privacy policy drafting",
    // Tax Services
    "GST registration",
    "tax filing India",
    "PAN TAN application",
    "income tax filing",
    // Licensing
    "FSSAI license",
    "import export license",
    "trademark registration",
    "MSME registration",
    // Platforms
    "payment gateway integration",
    "business management platform",
    "invoicing software",
    // Industries
    "financial services consulting",
    "healthcare IT solutions",
    "EdTech solutions India",
    // Brand
    "Rabinnson Private Limited",
    "business solutions India",
  ],
  openGraph: {
    title: "Rabinnson Private Limited - Business Solutions & Services",
    description:
      "Complete business services: Company registration, compliance, legal documentation, tax filing, licensing & digital platforms. Trusted by businesses across India.",
    url: "https://www.rabinnson.com",
    siteName: "Rabinnson Private Limited",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Rabinnson Private Limited - Business Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabinnson Private Limited - Business Solutions",
    description:
      "Complete business services: Registration, compliance, legal, tax & digital platforms. Trusted by businesses across India.",
    site: "@rabinnson",
    creator: "@rabinnson",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "Business Services",
  authors: [{ name: "Rabinnson Private Limited" }],
  creator: "Rabinnson Private Limited",
  publisher: "Rabinnson Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
  },
};

export default function HomePage() {
  return (
    <main>
      <Home />
    </main>
  );
}
