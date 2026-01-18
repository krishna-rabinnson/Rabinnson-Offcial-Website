"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  Scale,
  FileText,
  Shield,
  AlertTriangle,
  Server,
  Clock,
  Users,

  Settings,
  Target,
  ClipboardCheck,
  Handshake,
  BookOpen,
  Activity,
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import Avatar1 from "@/assets/images/avatar-1.webp";
import Avatar2 from "@/assets/images/avatar-2.webp";
import Avatar3 from "@/assets/images/avatar-3.webp";
import Avatar4 from "@/assets/images/avatar-4.webp";

const FairUsePolicy = () => {
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
    title: "Fair Use Policy Services",
    description:
      "A Fair Use Policy (FUP) is a legally enforceable document that outlines the acceptable and reasonable use of a product or service—especially in subscription-based digital platforms, telecom, SaaS, and cloud computing services. It sets usage limits, prevents misuse, and ensures equitable access for all users without compromising service quality.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    subText: "Professionally Drafted Fair Use Policies for Digital Businesses",
  };

  const introContent = {
    badge: "Fair Use Policy Overview",
    badgeIcon: Scale,
    title: "Overview of a Fair Use Policy",
    subtitle: "Governing Acceptable Use of Digital Services",
    description:
      "A Fair Use Policy governs the acceptable extent of use by a user of services that are otherwise marketed as 'unlimited' or 'shared.' It helps prevent a small group of users from monopolising resources to the detriment of others. This policy is widely adopted in cloud storage services, internet service providers (ISPs), subscription-based SaaS platforms, streaming services, and digital communications and hosting services.",
    features: [
      "Customised drafting of Fair Use Policies based on service type (SaaS, ISP, cloud, platform-based)",
      "Legal framing of data usage limits, service caps, throttling conditions, and user obligations",
      "Integration with Terms of Use and Privacy Policies",
      "Inclusion of clauses for abuse prevention, automated usage, and violation penalties",
      "Compliance with telecom, IT, and digital commerce regulations",
      "Review and revision services based on evolving usage trends or legal updates",
    ],
    image1:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1080",
    image2:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1080",
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Resource Management",
      title: "Why a Fair Use Policy is Important",
      description:
        "Resource Management prevents overuse or misuse of shared digital infrastructure. Service Quality Preservation ensures that no individual user degrades the experience for others. A well-drafted Fair Use Policy is essential for sustainable digital service delivery.",
      features: [
        "Prevents overuse or misuse of shared infrastructure",
        "Ensures no individual degrades experience for others",
        "Enables restriction, suspension, or termination for excessive use",
        "Clearly informs users of acceptable limits and consequences",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Server,
    },
    {
      id: 2,
      badge: "Legal Protection",
      title: "Transparency, Accountability & Legal Protection",
      description:
        "A Fair Use Policy enables businesses to restrict, suspend, or terminate users for excessive or unauthorised use. It clearly informs users of acceptable use limits and consequences. A published policy strengthens your position in case of legal disputes or user grievances.",
      features: [
        "Legal Protection for enforcement actions",
        "Transparency and Accountability for users",
        "Support for Enforcement in disputes",
        "Clear communication of usage boundaries",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Shield,
    },
    {
      id: 3,
      badge: "Scope & Definition",
      title: "Scope of Policy & Definition of Fair Use",
      description:
        "The Scope of the Policy identifies the product or service to which the policy applies. Definition of Fair Use explains what constitutes acceptable or intended use, setting clear expectations for all users.",
      features: [
        "Identifies products or services covered",
        "Explains acceptable or intended use",
        "Sets clear user expectations",
        "Defines boundaries of service usage",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Target,
    },
    {
      id: 4,
      badge: "Usage Thresholds",
      title: "Usage Thresholds & Monitoring",
      description:
        "Usage Thresholds establish limits on bandwidth, storage, API calls, device access, etc. Monitoring and Compliance informs users that activity may be monitored to ensure policy compliance.",
      features: [
        "Bandwidth and storage limits",
        "API call restrictions",
        "Device access limitations",
        "Activity monitoring for compliance",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Activity,
    },
    {
      id: 5,
      badge: "Enforcement",
      title: "Restriction & Enforcement Measures",
      description:
        "Describes actions taken if usage exceeds limits such as throttling or suspension. Lists prohibited activities including scraping, automated scripts, or resource hogging to protect service integrity.",
      features: [
        "Throttling for excessive usage",
        "Account suspension procedures",
        "Prohibited activities list (scraping, scripts)",
        "Resource hogging prevention measures",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: AlertTriangle,
    },
    {
      id: 6,
      badge: "Policy Rights",
      title: "Right to Amend & Reporting Abuse",
      description:
        "Reserves the provider's right to modify the policy as needed. Outlines how users can report misuse or suspicious activity. Defines applicable legal framework and dispute resolution process.",
      features: [
        "Provider's right to modify policy",
        "User abuse reporting procedures",
        "Governing Law and Jurisdiction",
        "Dispute resolution process definition",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Settings,
    },
    {
      id: 7,
      badge: "When Needed",
      title: "When is a Fair Use Policy Needed?",
      description:
        "A Fair Use Policy is essential if your service is marketed as unlimited but has backend constraints, if your infrastructure is shared among multiple users, when certain users consume excessive resources, or if you offer API access, content streaming, or hosted services.",
      features: [
        "Services marketed as unlimited with backend constraints",
        "Shared infrastructure among multiple users or tenants",
        "Excessive resource consumption by certain users",
        "API access, content streaming, or hosted services",
        "Managing robotic or unauthorised integrations",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1568234928966-359c35dd8327?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Users,
    },
    {
      id: 8,
      badge: "Documents Required",
      title: "Documents Required for Drafting",
      description:
        "To draft a comprehensive Fair Use Policy, we require product or service overview with usage data points, analytics on current user behaviour or usage thresholds, business model details, and infrastructure limitations.",
      features: [
        "Product or service overview with usage data",
        "Analytics on user behaviour or usage thresholds",
        "Business model (freemium, tiered, enterprise)",
        "Infrastructure limitations (bandwidth, hosting caps)",
        "Terms of Use or user license agreement if available",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: ClipboardCheck,
    },
    {
      id: 9,
      badge: "Step 1",
      title: "Service Analysis",
      description:
        "Understanding your platform, its usage model, and infrastructure setup. We analyze your service to identify key usage patterns and potential areas requiring fair use limitations.",
      features: [
        "Platform understanding and analysis",
        "Usage model evaluation",
        "Infrastructure setup review",
        "Usage pattern identification",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 10,
      badge: "Step 2",
      title: "Policy Structuring",
      description:
        "Identifying thresholds, triggers, and reasonable use limits per user segment. We structure the policy to address specific needs of different user categories and service tiers.",
      features: [
        "Threshold identification",
        "Trigger point definition",
        "Reasonable use limits per segment",
        "User category structuring",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: BookOpen,
    },
    {
      id: 11,
      badge: "Step 3",
      title: "Drafting and Alignment",
      description:
        "Preparation of a legally sound and user-friendly Fair Use Policy document. Incorporation of internal or technical team feedback for accuracy ensures the policy reflects actual service capabilities.",
      features: [
        "Legally sound document preparation",
        "User-friendly language and structure",
        "Technical team feedback incorporation",
        "Service capability alignment",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Shield,
    },
    {
      id: 12,
      badge: "Step 4",
      title: "Finalisation and Delivery",
      description:
        "Final draft delivered in a format ready to upload or integrate with other policies. Timeline: 2–4 working days depending on business complexity.",
      features: [
        "Final draft in ready-to-upload format",
        "Integration with other policies",
        "Completed within 2–4 working days",
        "Multiple format delivery options",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Clock,
    },
    {
      id: 13,
      badge: "Legal Validity",
      title: "Legal Validity in India",
      description:
        "A Fair Use Policy is supported under the Indian Contract Act, 1872, as part of the contractual agreement between a service provider and a user. It also aligns with the Information Technology Act, 2000, Consumer Protection (E-Commerce) Rules, 2020, and TRAI Guidelines where applicable.",
      features: [
        "Indian Contract Act, 1872 compliance",
        "Information Technology Act, 2000 alignment",
        "Consumer Protection (E-Commerce) Rules, 2020",
        "TRAI Guidelines compliance where applicable",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Scale,
    },
    {
      id: 14,
      badge: "Why Choose Us",
      title: "Why Choose Us for Fair Use Policy Drafting?",
      description:
        "We help you protect your digital assets, manage service delivery, and maintain fairness—ensuring your business remains scalable, transparent, and compliant. Our policies are legally and technically aligned with SaaS, cloud, internet, and digital services.",
      features: [
        "Legal and technical alignment with digital services",
        "Balanced policy language that protects without discouraging users",
        "Integration-ready documents for websites, apps, and portals",
        "Ongoing update support as your business evolves",
        "Experts familiar with telecom, hosting, and IT law",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Handshake,
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
              <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-lime-400 to-green-500 rounded-3xl opacity-20 blur-3xl animate-pulse" />
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
            Our Fair Use Policy Services
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">
            Comprehensive approach to usage governance - Typically completed within 2–4 working days
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

export default FairUsePolicy;
