"use client";
import Image from 'next/image';
import  { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  Store,
  FileText,
  ShieldCheck,
  Building2,
} from "lucide-react";

import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";

import Avatar1 from "@/assets/images/avatar-1.webp";
import Avatar2 from "@/assets/images/avatar-2.webp";
import Avatar3 from "@/assets/images/avatar-3.webp";
import Avatar4 from "@/assets/images/avatar-4.webp";

export default function TradeLicenses() {
  const heroContent = {
    title: "Trade License Registration with CapEasy",
    description:
      "CapEasy helps businesses operate legally and locally with ease through Trade License Registration. Issued by municipal corporations, a trade license is mandatory for commercial establishments such as shops, restaurants, clinics, warehouses, and service providers. Our team simplifies the application process and ensures your business complies with local civic regulations, allowing you to focus on growth without facing legal roadblocks.",
    ctaText: "Apply Now",
    ctaLink: "/contact",
    subText: "Get a Free Consultation & Compliance Checklist",
  };

  const introContent = {
    badge: "Trade License",
    badgeIcon: Store,
    title: "CapEasy's Trade License Services",
    subtitle: "End-to-End Municipal Registration Support",
    description:
      "Our Trade License Services Include:",
    features: [
      "Consultation to determine the applicable category based on business activity",
      "Documentation support and application filing with local municipal body",
      "Coordination for inspections, if required",
      "Timely renewal tracking and compliance updates",
      "Advisory on shop & establishment registrations where applicable",
    ],
    image1:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080",
    image2:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1080",
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Overview of Trade License",
      title: "What is a Trade License?",
      description:
        "A Trade License is an official certificate issued by the Municipal Corporation, permitting businesses to operate in a designated area while ensuring compliance with safety and regulatory norms. This license is mandatory for all businesses operating within the jurisdiction of a State Municipal Corporation Act and aims to regulate business activities to safeguard public health and maintain law and order.",
      features: [
        "Official certificate issued by Municipal Corporation",
        "Mandatory for businesses within municipal limits",
        "Ensures compliance with safety and regulatory norms",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 2,
      badge: "Who Needs a Trade License?",
      title: "Business Categories Requiring Trade License",
      description:
        "Any business entity operating within municipal limits must obtain a Trade License before starting operations. Categories include: Shops & Retail Stores, Restaurants & Food Businesses, Manufacturing & Industrial Units, Commercial Establishments, Warehousing & Logistics, Healthcare Businesses.",
      features: [
        "Shops & Retail Stores",
        "Restaurants & Food Businesses",
        "Manufacturing & Industrial Units",
        "Commercial Establishments",
        "Warehousing & Logistics",
        "Healthcare Businesses",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left",
      hasOverlappingImages: true,
      icon: ShieldCheck,
    },
    {
      id: 3,
      badge: "Types of Trade Licenses",
      title: "Industrial, Commercial & Food/Health Licenses",
      description:
        "The Trade License classification varies based on the nature of the business: Industrial Trade License (manufacturing/industrial), Commercial Trade License (trading/retail/service), Food & Health Trade License (food production/sale).",
      features: [
        "Industrial Trade License",
        "Commercial Trade License",
        "Food & Health Trade License",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: Building2,
    },
    {
      id: 4,
      badge: "Why is a Trade License Important?",
      title: "Legal, Safety & Credibility Benefits",
      description:
        "Legal Compliance, Ensures Public Safety, Zoning & Land Use Compliance, Prevents Unethical Practices, Enhances Business Credibility, Government Revenue Contribution.",
      features: [
        "Legal Compliance",
        "Ensures Public Safety",
        "Zoning & Land Use Compliance",
        "Prevents Unethical Practices",
        "Enhances Business Credibility",
        "Government Revenue Contribution",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left",
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 5,
      badge: "Documents Required",
      title: "Checklist for Trade License Application",
      description:
        "Electricity bill, Rent Agreement, or Property Tax receipt. Aadhaar Card, PAN Card, Voter ID, or Passport. GST Certificate, Certificate of Incorporation, or Partnership Deed. Memorandum of Association (MoA). NOC from property owner (if rented). Layout plan of business premises.",
      features: [
        "Electricity bill/Rent Agreement/Property Tax receipt",
        "Aadhaar Card/PAN Card/Voter ID/Passport",
        "GST Certificate/Certificate of Incorporation/Partnership Deed",
        "Memorandum of Association (MoA)",
        "NOC from property owner (if rented)",
        "Layout plan of business premises",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: ShieldCheck,
    },
    {
      id: 6,
      badge: "Registration Process",
      title: "How to Apply for Trade License",
      description:
        "Step 1: Visit Municipal Corporation Website. Step 2: Sign Up & Fill Application Form. Step 3: Upload Documents. Step 4: Fee Payment. Step 5: Verification & Inspection. Step 6: License Issuance.",
      features: [
        "Online application via municipal portal",
        "Sign up & fill form",
        "Upload documents",
        "Pay fee online",
        "Verification & inspection",
        "License issuance",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left",
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 7,
      badge: "Validity & Renewal",
      title: "Annual Renewal & Fee Structure",
      description:
        "Trade Licenses are valid for one year and must be renewed annually. Renewal applications must be submitted 30 days before expiry. Fees vary by business type, location, and size: Small Shops ₹500–₹5,000, Restaurants ₹5,000–₹50,000, Industrial Units ₹10,000–₹1,00,000.",
      features: [
        "Annual renewal required",
        "Renew 30 days before expiry",
        "Fee varies by business type",
        "Small Shops: ₹500–₹5,000",
        "Restaurants: ₹5,000–₹50,000",
        "Industrial Units: ₹10,000–₹1,00,000",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: Building2,
    },
    {
      id: 8,
      badge: "Why Choose CapEasy?",
      title: "CapEasy Makes Trade License Simple",
      description:
        "At CapEasy, we streamline the Trade License registration process by eliminating bureaucratic delays and ensuring error-free documentation experience. Our team understands the state-specific municipal regulations and handles the entire application process, from document preparation to approval, so you don't have to deal with complex legalities. We provide customized solutions to expedite approvals and prevent rejections, assist in site inspections, resolve objections, and ensure full compliance. CapEasy ensures you get your Trade License without unnecessary delays and supports renewals, modifications, and compliance at every step.",
      features: [
        "Streamlined registration process",
        "Error-free documentation",
        "State-specific municipal expertise",
        "Customized solutions for approvals",
        "Compliance & renewal support",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left",
      hasOverlappingImages: false,
      icon: ShieldCheck,
    },
  ];

  const [ ,setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(
              entry.target as HTMLElement
            );
            if (index !== -1) setActiveSection(index);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });
    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const IntroIcon = introContent.badgeIcon;

  return (
    <>
      <HeroBackground>
        <div className="w-full lg:w-[60%] lg:mx-auto flex flex-col items-start lg:items-center lg:text-center justify-center gap-18 lg:gap-40">
          <div className="w-full flex flex-col items-start lg:items-center gap-6">
            <div className="flex flex-col items-start gap-3 pt-6">
              <div className="flex items-center">
                <Image src={Avatar1} alt="Avatar1" className="w-8"  />
                <Image src={Avatar2} alt="Avatar2" className="w-8 -ml-2"  />
                <Image src={Avatar3} alt="Avatar3" className="w-8 -ml-2"  />
                <Image src={Avatar4} alt="Avatar4" className="w-8 -ml-2"  />
              </div>
              <Typography color="#fff" noDarkMode className="md:hidden">
                Trusted by Founders
              </Typography>
            </div>
            <Typography
              as="div"
              color="#fff"
              size={72}
              sizeTablet={52}
              sizeMobile={40}
              weight={600}
              lineHeight={85}
              lineHeightTablet={64}
              lineHeightMobile={52}
              letterSpacing={-2.16}
              letterSpacingMobile={-1.2}
              noDarkMode
            >
              {heroContent.title}
            </Typography>
            <Typography
              color="#fff"
              noDarkMode
              size={18}
              className="md:w-[80%]"
            >
              {heroContent.description}
            </Typography>
            <Link href={heroContent.ctaLink}>
              <Button variant="primary" className="mt-8">
                {heroContent.ctaText}
              </Button>
            </Link>
            <p className="text-xl text-center text-black">
              {heroContent.subText}
            </p>
          </div>
        </div>
      </HeroBackground>
      <div className="w-full h-32 bg-linear-to-b from-transparent to-white -mt-32 relative z-10 pointer-events-none" />
      <div className="min-h-screen bg-white relative z-20">
        <div className="container mx-auto px-6 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
                <IntroIcon className="w-5 h-5 text-slate-700" />
                <span className="text-slate-700 font-medium">
                  {introContent.badge}
                </span>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl text-slate-900 font-semibold">
                  {introContent.title}
                </h1>
                {introContent.subtitle && (
                  <h2 className="text-2xl text-slate-600">
                    {introContent.subtitle}
                  </h2>
                )}
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                {introContent.description}
              </p>
              <div className="space-y-3">
                {introContent.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>
              <button className="mt-8 inline-flex items-center justify-center px-8 py-4 rounded-lg bg-slate-900 text-white text-base font-semibold shadow-lg transition hover:bg-slate-800 hover:shadow-xl">
                Get Started
              </button>
            </div>
            <div className="relative h-125 lg:h-175 w-full">
              <div className="absolute top-10 right-10 w-64 h-64 lg:w-72 lg:h-72 bg-linear-to-br from-blue-400 to-indigo-400 rounded-3xl opacity-20 blur-3xl" />
              <div className="absolute top-0 right-0 w-[80%] lg:w-96 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
                <ImageWithFallback
                  src={introContent.image1}
                  alt="Intro visual 1"
                  className="w-full h-80 lg:h-112.5 object-cover"
                />
              </div>
              <div className="absolute bottom-10 lg:bottom-20 left-0 w-[80%] lg:w-96 rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white z-20">
                <ImageWithFallback
                  src={introContent.image2}
                  alt="Intro visual 2"
                  className="w-full h-80 lg:h-112.5 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 pb-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-3">
            How We Help You
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">
            From application to compliance and renewal, we are with you at every
            step.
          </p>
        </div>
        <div className="relative">
          {scrollSections.map((section, index) => {
            const Icon = section.icon;
            const isEven = section.imagePosition === "left";
            return (
              <section
                key={section.id}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className="sticky top-0 h-screen flex items-center bg-white overflow-hidden"
              >
                <div className="max-w-9xl mx-auto px-6 lg:px-12 w-full h-full">
                  <div className="grid md:grid-cols-2 gap-10 lg:gap-16 h-full items-center">
                    <div
                      className={`flex flex-col justify-center space-y-6 ${
                        isEven ? "md:order-2" : ""
                      }`}
                    >
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full w-fit">
                        <Icon className="w-4 h-4 text-slate-700" />
                        <span className="text-slate-700 font-medium">
                          {section.badge}
                        </span>
                      </div>
                      <h2 className="text-3xl lg:text-4xl text-slate-900 font-semibold">
                        {section.title}
                      </h2>
                      <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                        {section.description}
                      </p>
                      <div className="space-y-3 pt-2">
                        {section.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <p className="text-slate-700 text-sm lg:text-base">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                      <button className="mt-6 group px-7 py-3.5 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-colors flex items-center gap-2 w-fit">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                    <div className={`${isEven ? "md:order-1" : ""}`}>
                      {section.hasOverlappingImages ? (
                        <div className="relative h-105 md:h-120 lg:h-135">
                          <div className="absolute top-0 right-12 w-[65%] h-[60%] rounded-2xl overflow-hidden shadow-xl z-10">
                            <ImageWithFallback
                              src={section.imageUrl1}
                              alt={`${section.badge} 1`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute bottom-0 left-0 w-[70%] h-[65%] rounded-2xl overflow-hidden shadow-2xl z-20">
                            <ImageWithFallback
                              src={section.imageUrl2!}
                              alt={`${section.badge} 2`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-4 right-8 bg-white rounded-xl shadow-lg px-6 py-4 z-30">
                            <div className="text-slate-900 font-bold text-xl">
                              0{index + 1}
                            </div>
                            <div className="text-slate-500 text-sm">Step</div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative h-80 md:h-105 lg:h-130">
                          <div className="rounded-2xl overflow-hidden shadow-2xl w-full h-full">
                            <ImageWithFallback
                              src={section.imageUrl1}
                              alt={section.badge}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-6 py-4">
                            <div className="text-3xl lg:text-4xl font-bold text-slate-900">
                              0{index + 1}
                            </div>
                            <div className="text-xs lg:text-sm text-slate-500">
                              Step
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
