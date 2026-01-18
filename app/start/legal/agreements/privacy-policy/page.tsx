"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  Lock,
  FileText,
  Shield,
  Award,
  Globe,
  Users,
  Scale,
  ClipboardList,
  BookOpen,
  CheckCircle,

} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import Avatar1 from "@/assets/images/avatar-1.webp";
import Avatar2 from "@/assets/images/avatar-2.webp";
import Avatar3 from "@/assets/images/avatar-3.webp";
import Avatar4 from "@/assets/images/avatar-4.webp";

const PrivacyPolicy = () => {
  const useScrollAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setIsVisible(true);
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );
      if (ref.current) observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, []);
    return { ref, isVisible };
  };

  const heroContent = {
    title: "Privacy Policy Agreement Services",
    description:
      "A Privacy Policy is a legally mandated document that informs users how their personal data is collected, used, stored, and shared by a business or digital platform. It is essential for building user trust and ensuring compliance with applicable data protection laws, including India's Information Technology Act, 2000 and global standards such as GDPR and CCPA.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    subText: "GDPR & Data Protection Compliant",
  };

  const introContent = {
    badge: "Privacy Policy Overview",
    badgeIcon: Lock,
    title: "Overview of a Privacy Policy",
    subtitle: "Essential for Data Protection & Compliance",
    description:
      "A Privacy Policy is a public-facing document that outlines how an organisation collects, manages, and protects personal information. We provide tailored Privacy Policy drafting services that align with your industry, business model, and digital data flow—ensuring legal compliance and transparency with users. A well-drafted Privacy Policy is not only a legal necessity but also a key element of ethical data management.",
    features: [
      "Custom drafting of Privacy Policies based on your website, app, or business platform",
      "Legal compliance with IT Act, GDPR, CCPA, and other relevant data protection frameworks",
      "Integration of clauses on cookies, third-party tools, and analytics",
      "Advisory on consent, user rights, and data storage practices",
      "Regular reviews and updates based on changes in laws or business operations",
      "Support for integration with Terms of Use, EULA, and Cookie Policy",
    ],
    image1:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1080",
    image2:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1080",
  };

  const scrollSections = [
    {
      id: 1,
      badge: "What It Covers",
      title: "Key Elements of a Privacy Policy",
      description:
        "A comprehensive Privacy Policy covers all aspects of how your organization handles personal data, from collection to disclosure. These elements ensure users understand their rights and your obligations.",
      features: [
        "Types of data collected — Name, email, IP address, device info, and more",
        "Purpose of collection — Marketing, analytics, account creation, service delivery",
        "Use of cookies and third-party tracking tools",
        "Data retention periods and storage mechanisms",
        "User rights and consent mechanisms",
        "How users can access, correct, or delete their data",
        "Disclosures to third parties, affiliates, or law enforcement",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 2,
      badge: "Why It Matters",
      title: "Why a Privacy Policy is Important",
      description:
        "A Privacy Policy is essential for legal compliance, user trust, and business operations. It protects your organization from legal risks while enabling global expansion and platform approvals.",
      features: [
        "Mandatory by Law — Required under India's IT Act and various international data protection regulations",
        "Protects Against Legal Risk — Reduces exposure to penalties or lawsuits for improper handling of user data",
        "Builds User Trust — Transparent data practices enhance credibility and encourage responsible usage",
        "Enables Global Expansion — Required to operate in markets governed by GDPR (EU), CCPA (California)",
        "Required for Platforms — Necessary to get approval for publishing apps on Google Play Store or Apple App Store",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Shield,
    },
    {
      id: 3,
      badge: "Key Clauses",
      title: "Key Clauses in a Privacy Policy",
      description:
        "Every Privacy Policy should include essential clauses that inform users about data handling practices. These clauses ensure transparency and legal compliance across all jurisdictions.",
      features: [
        "Information Collection — Specifies what personal and non-personal data is collected from users",
        "Use of Information — Explains how collected data is used (communication, analytics, service delivery)",
        "Cookies and Tracking Technologies — Details the use of cookies, pixel tags, and similar tools",
        "Third-Party Sharing — States whether data is shared with advertisers, payment processors, affiliates",
        "User Rights — Allows users to access, modify, or delete their data as per law",
        "Data Security — Describes measures taken to protect data from unauthorised access or breaches",
        "Data Retention — Outlines how long data is stored and under what conditions it is deleted",
        "Children's Privacy — Addresses data collection rules for minors, if applicable",
        "Changes to the Policy — Mentions how and when users will be informed of changes",
        "Contact Details — Provides a way for users to raise privacy concerns or request data access",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: BookOpen,
    },
    {
      id: 4,
      badge: "Who Needs It",
      title: "Who Needs a Privacy Policy?",
      description:
        "Any business or platform that collects personally identifiable information (PII) from users requires a Privacy Policy. This includes websites, apps, e-commerce platforms, and any digital service handling user data.",
      features: [
        "Websites collecting user data — Forms, sign-ups, newsletters, contact forms",
        "E-commerce stores, apps, and SaaS platforms",
        "Platforms using analytics, cookies, or ad tracking tools",
        "Businesses collecting data via payment gateways or CRM systems",
        "Mobile apps collecting geolocation, contacts, or device data",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Users,
    },
    {
      id: 5,
      badge: "Requirements",
      title: "Documents Required for Drafting a Privacy Policy",
      description:
        "To draft a comprehensive and accurate Privacy Policy, we need certain information about your business operations, data flows, and technical integrations. These documents help us create a tailored policy.",
      features: [
        "Description of website/app functionality and data flows",
        "List of third-party integrations — Google Analytics, Razorpay, Mailchimp, etc.",
        "Types of data collected — Voluntary and automatic data collection methods",
        "Data storage location and security measures (if known)",
        "User consent mechanism — Opt-in/opt-out system details",
        "Applicable geographic locations or jurisdictions served",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: ClipboardList,
    },
    {
      id: 6,
      badge: "Step 1-2",
      title: "Procedure: Business Understanding & Legal Review",
      description:
        "We begin by analysing your digital platform, data collection points, and user flow. Our experts then map your operations against Indian and international privacy requirements to ensure comprehensive coverage.",
      features: [
        "Business Understanding — Analyse your digital platform, data collection points, and user flow",
        "Legal Review — Map operations against Indian and international privacy requirements",
        "Identify Data Touch Points — Document all instances where user data is collected or processed",
        "Assess Regulatory Requirements — Determine applicable laws based on your business model and geography",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Scale,
    },
    {
      id: 7,
      badge: "Step 3-4",
      title: "Procedure: Drafting & Client Feedback",
      description:
        "We prepare a clear, comprehensive, and legally compliant policy tailored to your business. The draft is then reviewed by your team, and we incorporate changes as needed to ensure accuracy.",
      features: [
        "Drafting the Policy — Prepare clear, comprehensive, and legally compliant policy",
        "Tailored to Business — Customise clauses based on your specific operations and data practices",
        "Client Feedback — Share draft for review with your team",
        "Incorporate Changes — Make necessary modifications based on your input and requirements",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1568234928966-359c35dd8327?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 8,
      badge: "Step 5",
      title: "Procedure: Delivery & Implementation",
      description:
        "Final policy delivered in editable format, ready to upload to your website or app. Timeline: Typically completed within 3–4 working days.",
      features: [
        "Final Delivery — Policy delivered in editable format ready for upload",
        "Website/App Integration — Ready to implement on your digital platform",
        "Quick Turnaround — Typically completed within 3–4 working days",
        "Ongoing Support — Regular reviews and updates as laws or operations change",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: CheckCircle,
    },
    {
      id: 9,
      badge: "Legal Framework",
      title: "Legal Framework for Privacy Policies in India",
      description:
        "Privacy Policies in India are governed by specific legislation and must align with global standards if serving international users. Understanding these frameworks ensures your policy meets all legal requirements.",
      features: [
        "Information Technology Act, 2000 — Section 43A and Rule 4 of the SPDI Rules, 2011 mandate privacy policies for businesses handling sensitive personal data",
        "Proposed Digital Personal Data Protection Act, 2023 — Will introduce stricter consent, usage, and security obligations once enacted",
        "GDPR (EU) — General Data Protection Regulation for European users",
        "CCPA (California, USA) — California Consumer Privacy Act requirements",
        "PIPEDA (Canada) — Personal Information Protection compliance",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Globe,
    },
    {
      id: 10,
      badge: "Why Choose Us",
      title: "Why Choose Our Privacy Policy Services?",
      description:
        "We help your business stay compliant, transparent, and secure—protecting both your users and your reputation. Our expertise spans multiple industries and digital platforms.",
      features: [
        "Tailored legal documents based on your digital model and user geography",
        "Ensures compliance with Indian IT Act and global privacy standards",
        "Easy-to-understand language while maintaining full legal enforceability",
        "Expert knowledge in SaaS, e-commerce, mobile apps, and digital platforms",
        "Quick turnaround, audit-ready documents, and integration support with Terms of Use",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Award,
    },
  ];

  const AnimatedSection: React.FC<{
    children: React.ReactNode;
    delay?: number;
    className?: string;
  }> = ({ children, delay = 0, className = "" }) => {
    const { ref, isVisible } = useScrollAnimation();
    return (
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${className}`}
        style={{
          transitionDelay: `${delay}ms`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
        }}
      >
        {children}
      </div>
    );
  };
  const FeatureList: React.FC<{ features: string[] }> = ({ features }) => {
    const { ref, isVisible } = useScrollAnimation();
    return (
      <div ref={ref} className="space-y-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3 transition-all duration-500 ease-out"
            style={{
              transitionDelay: `${index * 100}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-20px)",
            }}
          >
            <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
              <Check className="w-3 h-3 text-white" />
            </div>
            <p className="text-slate-700 text-sm sm:text-base">{feature}</p>
          </div>
        ))}
      </div>
    );
  };
  const ServiceSection: React.FC<{
    section: (typeof scrollSections)[0];
    index: number;
  }> = ({ section, index }) => {
    const { ref, isVisible } = useScrollAnimation();
    const Icon = section.icon;
    const isEven = section.imagePosition === "left";
    return (
      <section
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          <div
            className={`flex flex-col justify-center space-y-4 sm:space-y-6 transition-all duration-700 ease-out ${
              isEven ? "md:order-2" : ""
            }`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateX(0)"
                : `translateX(${isEven ? "40px" : "-40px"})`,
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-100 rounded-full w-fit hover:bg-slate-200 transition-colors duration-300">
              <Icon className="w-4 h-4 text-slate-700" />
              <span className="text-slate-700 font-medium text-sm sm:text-base">
                {section.badge}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-semibold">
              {section.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
              {section.description}
            </p>
            <div className="space-y-2 sm:space-y-3 pt-2">
              {section.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 transition-all duration-500"
                  style={{
                    transitionDelay: `${idx * 100 + 300}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateX(0)"
                      : "translateX(-20px)",
                  }}
                >
                  <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-slate-700 text-sm lg:text-base">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/start-generating-your-idea" className="w-fit">
              <button className="mt-4 sm:mt-6 group px-5 sm:px-7 py-3 sm:py-3.5 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center gap-2 w-fit hover:shadow-lg active:scale-95 text-sm sm:text-base">
                Learn More{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
          <div
            className={`${
              isEven ? "md:order-1" : ""
            } transition-all duration-700 ease-out`}
            style={{
              transitionDelay: "200ms",
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateX(0)"
                : `translateX(${isEven ? "-40px" : "40px"})`,
            }}
          >
            {section.hasOverlappingImages ? (
              <div className="relative h-[320px] sm:h-[420px] md:h-[480px] lg:h-[540px]">
                <div className="absolute top-0 right-4 sm:right-12 w-[60%] sm:w-[65%] h-[55%] sm:h-[60%] rounded-2xl overflow-hidden shadow-xl z-10 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                  <ImageWithFallback
                    src={section.imageUrl1}
                    alt={`${section.badge} 1`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-[65%] sm:w-[70%] h-[60%] sm:h-[65%] rounded-2xl overflow-hidden shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                  <ImageWithFallback
                    src={section.imageUrl2!}
                    alt={`${section.badge} 2`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 right-4 sm:right-8 bg-white rounded-xl shadow-lg px-4 sm:px-6 py-3 sm:py-4 z-30 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-slate-900 font-bold text-lg sm:text-xl">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-slate-500 text-xs sm:text-sm">Step</div>
                </div>
              </div>
            ) : (
              <div className="relative h-[280px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
                <div className="rounded-2xl overflow-hidden shadow-2xl w-full h-full hover:scale-[1.02] transition-all duration-500">
                  <ImageWithFallback
                    src={section.imageUrl1}
                    alt={section.badge}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white rounded-xl shadow-lg px-4 sm:px-6 py-3 sm:py-4 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-xs lg:text-sm text-slate-500">Step</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  };

  const IntroIcon = introContent.badgeIcon;

  return (
    <>
      <HeroBackground>
        <div className="w-full lg:w-[60%] lg:mx-auto flex flex-col items-start lg:items-center lg:text-center justify-center gap-[72px] lg:gap-[160px]">
          <div className="w-full flex flex-col items-start lg:items-center gap-[24px]">
            <div className="flex flex-col items-start gap-[12px] pt-[24px]">
              <div className="flex items-center">
                <Image src={Avatar1} alt="Avatar1" className="w-[32px]"  />
                <Image src={Avatar2} alt="Avatar2" className="w-[32px] ml-[-8px]"  />
                <Image src={Avatar3} alt="Avatar3" className="w-[32px] ml-[-8px]"  />
                <Image src={Avatar4} alt="Avatar4" className="w-[32px] ml-[-8px]"  />
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
              <Button
                variant="primary"
                className="mt-[32px] hover:scale-105 transition-transform duration-300"
              >
                {heroContent.ctaText}
              </Button>
            </Link>
            <p className="text-lg sm:text-xl text-center text-black">
              {heroContent.subText}
            </p>
          </div>
        </div>
      </HeroBackground>
      <div className="w-full h-32 bg-gradient-to-b from-transparent to-white -mt-32 relative z-10 pointer-events-none" />
      <div className="min-h-screen bg-white relative z-20">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <AnimatedSection className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors duration-300">
                <IntroIcon className="w-4 sm:w-5 h-4 sm:h-5 text-slate-700" />
                <span className="text-slate-700 font-medium text-sm sm:text-base">
                  {introContent.badge}
                </span>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold">
                  {introContent.title}
                </h1>
                {introContent.subtitle && (
                  <h2 className="text-xl sm:text-2xl text-slate-600">
                    {introContent.subtitle}
                  </h2>
                )}
              </div>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {introContent.description}
              </p>
              <FeatureList features={introContent.features} />
              <Link href={heroContent.ctaLink}>
                <button className="mt-6 sm:mt-8 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-slate-900 text-white text-sm sm:text-base font-semibold shadow-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:scale-105 active:scale-95">
                  Get Started
                </button>
              </Link>
            </AnimatedSection>
            <AnimatedSection
              delay={200}
              className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full"
            >
              <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-red-400 to-rose-500 rounded-3xl opacity-20 blur-3xl animate-pulse" />
              <div className="absolute top-0 right-0 w-[75%] sm:w-[80%] lg:w-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10">
                <ImageWithFallback
                  src={introContent.image1}
                  alt="Intro visual 1"
                  className="w-full h-64 sm:h-80 lg:h-[450px] object-cover"
                />
              </div>
              <div className="absolute bottom-8 sm:bottom-10 lg:bottom-20 left-0 w-[75%] sm:w-[80%] lg:w-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 border-4 sm:border-8 border-white z-20">
                <ImageWithFallback
                  src={introContent.image2}
                  alt="Intro visual 2"
                  className="w-full h-64 sm:h-80 lg:h-[450px] object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-screen">
        <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 pb-6 sm:pb-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-2 sm:mb-3">
            Our Privacy Policy Services
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">
            Comprehensive data protection compliance and privacy policy drafting
          </p>
        </AnimatedSection>
        <div className="space-y-16 sm:space-y-24 lg:space-y-32 pb-12 sm:pb-20">
          {scrollSections.map((section, index) => (
            <ServiceSection key={section.id} section={section} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
