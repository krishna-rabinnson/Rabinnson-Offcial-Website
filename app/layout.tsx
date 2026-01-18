import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/layouts/Footer";
import LayoutWithoutFooter from "@/layouts/LayoutWithoutFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rabinnson Private Limited",
  description: "Rabinnson Private Limited is a leading provider of business solutions.",
  icons: {
    icon: "/a.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutWithoutFooter />
        {children}
        <Footer />


      </body>
    </html>
  );
}
