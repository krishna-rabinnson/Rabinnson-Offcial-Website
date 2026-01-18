"use client";
import Image from 'next/image';
import  { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  Flag,
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

export default function MakeInIndia() {
  const heroContent = {
    title: "Make in India (MII) Certificate for GeM",
    description:
      "CapEasy enables Indian manufacturers to access government procurement platforms by obtaining the Make in India (MII) Certificate, a critical document for vendor registration and product listing on the Government e-Marketplace (GeM). This certification helps businesses establish domestic manufacturing credentials and gain purchase preference in public tenders.",
    ctaText: "Apply Now",
    ctaLink: "/contact",
    subText: "Get a Free Consultation & Compliance Checklist",
  };

  const introContent = {
    badge: "Make in India",
    badgeIcon: Flag,
    title: "CapEasy's MII Certification Services",
    subtitle: "End-to-End Support for GeM Vendor Registration",
    description:
      "We simplify eligibility assessment, documentation, and submission under the DPIIT-approved MII framework. Our Make in India Certification Services Include:",
    features: [
      "Eligibility check under DPIIT's Public Procurement (Preference to Make in India) order",
      "Assistance in calculating and validating domestic value addition percentage",
      "Certificate issuance from recognized authority (e.g., QCI, MSME Tech Centers)",
      "GeM portal linkage and vendor onboarding support",
      "Advisory on tender participation and benefit utilization",
    ],
    image1:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1080",
    image2:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080",
  };

  const scrollSections = [
    {
      id: 1,
      badge: "What is the MII Certificate?",
      title: "Government-Backed Certification for Local Manufacturing",
      description:
        "The Make in India (MII) Certificate for GeM is a government-backed certification designed to promote domestic manufacturing in India by giving priority to locally manufactured goods and services in government procurement. Launched in 2014, the Make in India initiative aims to position India as a global manufacturing hub by attracting investments and supporting local industries. In 2016, the Government e-Marketplace (GeM) was introduced as a centralized procurement platform for government departments and PSUs. The MII Certificate for GeM is issued to OEMs and service providers that meet the eligibility criteria for domestic production. This certification allows businesses to label their products as 'Made in India', giving them a competitive advantage in government tenders.",
      features: [
        "Issued to OEMs and service providers meeting domestic production criteria",
        "Enables 'Made in India' product labeling",
        "Competitive advantage in government tenders",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 2,
      badge: "Why Do MSMEs Need MII Certification?",
      title: "Mandatory for Government Procurement & OEMs",
      description:
        "As per Government Order P-45021/2/2017-PP (BE-II), only Class-I and Class-II local suppliers can participate in government procurement for purchases valued at less than ₹200 crores. Mandatory for OEMs – All OEMs must submit an MII certification while bidding for tenders on platforms like GeM and NICSI. Boosts Domestic Manufacturing – Ensures that local manufacturers and service providers get priority over foreign suppliers. Government Procurement Preference – Businesses with an MII certificate receive priority in public procurement contracts, helping MSMEs grow.",
      features: [
        "Mandatory for OEMs on GeM/NICSI",
        "Priority in public procurement",
        "Boosts domestic manufacturing",
        "Preference for MSMEs in tenders",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left",
      hasOverlappingImages: true,
      icon: ShieldCheck,
    },
    {
      id: 3,
      badge: "Supplier Classification",
      title: "Class-I, Class-II & Non-Local Suppliers",
      description:
        "The Department for Promotion of Industry and Internal Trade (DPIIT) classifies local suppliers into three categories based on the percentage of Indian content in their products. Class-I: 50% or more Indian content (highest priority). Class-II: 20%-50% Indian content (next preference). Non-Local: Less than 20% Indian content (not eligible for preference).",
      features: [
        "Class-I: ≥50% Indian content",
        "Class-II: 20%-50% Indian content",
        "Non-Local: <20% Indian content",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: Building2,
    },
    {
      id: 4,
      badge: "Documents Required",
      title: "Checklist for MII Certificate Application",
      description:
        "Purchase Bills – Bills for machinery, tools, and critical equipment used in the manufacturing process. Company Letterhead – Official company letterhead for documentation and communication purposes. Component Details – List of materials and components used in the product. Manufacturing Capacity Report – Details of monthly production capacity. GSTIN Certificate – Proof of business registration and GST compliance. GeM OEM Certificate – Required if the applicant is an OEM. Supplier Purchase Bills – Bills for materials and components sourced from suppliers. Manufacturing Floor Diagram – Layout of manufacturing facility and equipment.",
      features: [
        "Purchase Bills",
        "Company Letterhead",
        "Component Details",
        "Manufacturing Capacity Report",
        "GSTIN Certificate",
        "GeM OEM Certificate (if OEM)",
        "Supplier Purchase Bills",
        "Manufacturing Floor Diagram",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left",
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 5,
      badge: "Certification Procedure",
      title: "Step-by-Step MII Certification Process",
      description:
        "The certification process involves technical evaluation and verification by authorized professionals. Step 1: Product Documentation & Evaluation – Provide product details, specifications, and technical documentation. Submit a breakdown of raw materials used in manufacturing. Step 2: Local Content Verification – Calculate the percentage of Indian and overseas components. Certification is verified and approved by a Chartered Accountant (CA). Step 3: Certification Issuance – Once verified, the Make in India Certificate is issued, allowing businesses to participate in government tenders on GeM.",
      features: [
        "Step 1: Product Documentation & Evaluation",
        "Step 2: Local Content Verification",
        "Step 3: Certification Issuance",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: ShieldCheck,
    },
    {
      id: 6,
      badge: "Benefits of MII Certification",
      title: "Why Get Certified for GeM?",
      description:
        "Priority in Government Procurement – GeM gives preference to MII-certified businesses in public-sector tenders. Access to More Business Opportunities – MSMEs can bid on high-value government contracts without restrictions. Enhanced Market Credibility – Improves brand reputation as a recognized Indian manufacturer. Eligibility for Subsidies & Incentives – Certified businesses may receive financial support, tax benefits, and industrial subsidies. Exemption from Earnest Money Deposit (EMD) – Reduces financial burden in tender applications.",
      features: [
        "Priority in Government Procurement",
        "Access to more business opportunities",
        "Enhanced market credibility",
        "Eligibility for subsidies & incentives",
        "Exemption from Earnest Money Deposit (EMD)",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left",
      hasOverlappingImages: false,
      icon: Building2,
    },
    {
      id: 7,
      badge: "Why Choose CapEasy?",
      title: "CapEasy Makes MII Certification Simple",
      description:
        "At CapEasy, we simplify the Make in India (MII) Certification process, ensuring a smooth and efficient experience. Expert Guidance – We assess your eligibility and help with documentation. Simplified Process – Our team manages the verification and certification steps for you. Fast Processing – Get your MII Certificate without unnecessary delays. Regulatory Compliance – We ensure your certification meets all government requirements.",
      features: [
        "Expert Guidance",
        "Simplified Process",
        "Fast Processing",
        "Regulatory Compliance",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
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
            From eligibility assessment to GeM registration, we are with you at
            every step.
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
