"use client";
import Image from 'next/image';
import  { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  Award,
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

export default function ISOCertification() {
  const heroContent = {
    title: "ISO Certification with CapEasy",
    description:
      "CapEasy helps businesses establish trust and operational excellence through globally recognized ISO Certifications. Whether it's quality management, information security, environmental responsibility, or food safety, we guide you through every step—from documentation to audit and issuance.",
    ctaText: "Get Certified",
    ctaLink: "/contact",
    subText: "Get a Free Consultation & Compliance Checklist",
  };

  const introContent = {
    badge: "ISO Certification",
    badgeIcon: Award,
    title: "Your Partner for International Standards",
    subtitle: "Globally Recognized ISO Certification",
    description:
      "Our end-to-end support ensures your business meets international standards and improves credibility with clients, vendors, and government agencies. ISO certification is not a legal requirement but a strategic decision that enhances customer trust, regulatory compliance, and market competitiveness.",
    features: [
      "Guidance on selecting the appropriate ISO standard (e.g., ISO 9001, ISO 27001, ISO 14001, ISO 22000)",
      "Gap analysis and documentation support for compliance",
      "Coordination with accredited certification bodies",
      "Internal audit preparation and process advisory",
      "Post-certification guidance for maintaining ISO compliance",
      "Consultation By Expert",
    ],
    image1:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1080",
    image2:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Overview",
      title: "What is ISO Certification?",
      description:
        "An ISO Certificate is an internationally recognized accreditation that certifies a business's quality, efficiency, safety, and reliability. It is issued by the International Organization for Standardization (ISO), ensuring that companies meet global industry standards. Businesses across manufacturing, IT, healthcare, food, and other industries obtain ISO certification to demonstrate adherence to best practices and operational excellence.",
      features: [
        "Not a legal requirement, but a strategic decision",
        "Enhances customer trust and compliance",
        "Improves competitiveness and credibility",
        "Applicable to all industries",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 2,
      badge: "Types of ISO",
      title: "Types of ISO Certifications",
      description:
        "There are over 23,000 ISO standards published, covering a vast range of industries and sectors. These include ISO 9001 (Quality), ISO 14001 (Environmental), ISO 27001 (Information Security), ISO 45001 (OHS), ISO 22000 (Food Safety), ISO 13485 (Medical Devices), ISO 37001 (Anti-Bribery), ISO 31000 (Risk Management), ISO 22301 (Business Continuity), ISO 20000 (ITSM), ISO 21001 (Education), and more.",
      features: [
        "ISO 9001 – Quality Management",
        "ISO 14001 – Environmental Management",
        "ISO 27001 – Information Security",
        "ISO 45001 – Occupational Health & Safety",
        "ISO 22000 – Food Safety",
        "ISO 13485 – Medical Devices",
        "ISO 37001 – Anti-Bribery",
        "ISO 31000 – Risk Management",
        "ISO 22301 – Business Continuity",
        "ISO 20000 – IT Service Management",
        "ISO 21001 – Education",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left",
      hasOverlappingImages: true,
      icon: ShieldCheck,
    },
    {
      id: 3,
      badge: "IAF & Non-IAF",
      title: "IAF and Non-IAF ISO Certification",
      description:
        "IAF ISO Certificate: Global recognition, high assurance, competitive advantage, preferred by clients, suitable for international operations and regulated industries. Non-IAF ISO Certificate: Cost-effective, internal assurance, less regulated, suitable for local businesses or those with budget constraints.",
      features: [
        "IAF: Internationally recognized, high assurance",
        "IAF: Preferred for global operations",
        "Non-IAF: Cost-effective, internal focus",
        "Non-IAF: Suitable for local markets",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 4,
      badge: "Benefits",
      title: "Benefits of ISO Certification",
      description:
        "Enhanced credibility and customer trust, improved efficiency and productivity, ensures compliance with regulations, expands global market opportunities.",
      features: [
        "Credibility & customer trust",
        "Efficiency & productivity",
        "Regulatory compliance",
        "Global market access",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: ShieldCheck,
    },
    {
      id: 5,
      badge: "Process & Documents",
      title: "ISO Certification Process & Documents Required",
      description:
        "The process: application submission, documentation review, gap analysis, action plan, onsite audit, final approval, periodic surveillance. Documents: PAN, Aadhaar, company profile, visiting card, letterhead, sales/purchase invoice, business registration proof.",
      features: [
        "Application & documentation review",
        "Gap analysis & action plan",
        "Onsite audit & approval",
        "PAN, Aadhaar, company profile",
        "Business registration proof",
        "Sales/purchase invoice, letterhead",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: Building2,
    },
    {
      id: 6,
      badge: "Renewal",
      title: "ISO Certification Renewal",
      description:
        "ISO certificates are valid for three years and must be renewed through a recertification audit. Renewal ensures ongoing compliance and strengthens credibility with customers and stakeholders.",
      features: [
        "Valid for 3 years",
        "Recertification audit required",
        "Ongoing compliance",
        "Strengthens credibility",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 7,
      badge: "Why Choose Us",
      title: "Why Choose CapEasy for ISO Certification?",
      description:
        "At CapEasy, we make ISO certification simple, quick, and cost-effective for businesses of all sizes. Expert guidance, smooth documentation, fast approval, accredited certification bodies, and post-certification support.",
      features: [
        "Expert guidance",
        "Smooth documentation process",
        "Fast & quick certification approval",
        "Accredited certification bodies",
        "Post-certification support",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
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
            From assessment to certification and maintenance, we are with you at
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
