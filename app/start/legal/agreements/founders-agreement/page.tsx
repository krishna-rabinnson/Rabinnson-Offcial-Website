    "use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  Users,

  Award,


  ClipboardCheck,
  BookOpen,
  Handshake,
  Briefcase,
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import Avatar1 from "@/assets/images/avatar-1.webp";
import Avatar2 from "@/assets/images/avatar-2.webp";
import Avatar3 from "@/assets/images/avatar-3.webp";
import Avatar4 from "@/assets/images/avatar-4.webp";

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

const FoundersAgreement = () => {
  const heroContent = {
    title: "Founders' Agreement Services",
    description:
      "A Founders' Agreement is a legally binding document signed by all co-founders of a company. It outlines the roles, responsibilities, equity split, and decision-making processes—acting as a clear blueprint for long-term collaboration and conflict resolution.",
    ctaText: "Draft Agreement",
    ctaLink: "/contact",
    subText: "Protect Your Startup Partnership",
  };
  const introContent = {
    badge: "Founders Agreement",
    badgeIcon: Users,
    title: "Overview of Founder's Agreement",
    subtitle: "Blueprint for Startup Collaboration",
    description:
      "A Founder's Agreement is a foundational legal document that defines the roles, responsibilities, ownership structure, and operational expectations among co-founders of a startup or business venture. It serves as a blueprint for collaboration and helps prevent future misunderstandings or disputes.",
    features: [
      "Drafting tailored and comprehensive Founders' Agreements based on your business stage and founder structure",
      "In-depth review and refinement of existing Founders' Agreements to ensure completeness and legal soundness",
      "Expert guidance on key clauses such as equity distribution, vesting schedules, IP ownership, exit provisions, and dispute resolution",
      "Legal consultation to ensure full compliance with corporate laws, startup regulations, and founders' obligations",
      "Periodic monitoring and updates to keep agreements aligned with evolving business needs and legal changes",
    ],
    image1:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
    image2:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080",
  };
  const scrollSections = [
    {
      id: 1,
      badge: "Benefits",
      title: "Benefits of a Founder's Agreement",
      description:
        "A well-structured founder's agreement is crucial for aligning goals, protecting individual and collective interests, and ensuring the business grows on a stable and transparent foundation.",
      features: [
        "Efficient Business Management – Predefined roles for effective management",
        "Ownership Security – Secure equity distribution, reducing disputes",
        "Clear Role Definition – Duties and responsibilities outlined",
        "Conflict Reduction – Minimises potential conflicts",
        "Goal Alignment – Shared business vision and objectives",
        "Mitigation of Risks – Early risk identification and strategies",
        "Intellectual Property Protection – Secures ownership of innovations",
        "Exit Strategies – Defines founder exit rules",
        "Decision-Making Framework – Clarity on key decisions",
        "Investor Confidence – Builds trust with investors",
        "Dispute Resolution Mechanisms – Efficient internal dispute resolution",
        "Confidentiality and Non-Disclosure – Protects sensitive information",
        "Succession Planning – Ensures continuity if a founder leaves",
        "Recruitment and Hiring – Guidelines for onboarding key talent",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Award,
    },
    {
      id: 2,
      badge: "Documents Required",
      title: "Documents Required for Drafting",
      description:
        "To ensure a legally sound and comprehensive Founders' Agreement, the following documents are essential.",
      features: [
        "Company Registration Certificate – Proof of legal incorporation",
        "Intellectual Property Documents – Patents, trademarks, copyrights",
        "Identity and Address Proof of Founders – PAN, Aadhaar, Passport, etc.",
        "Equity Shareholding Details – Percentage of shares and vesting schedules",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: ClipboardCheck,
    },
    {
      id: 3,
      badge: "Key Clauses",
      title: "Essential Clauses of a Founder's Agreement",
      description:
        "A well-structured Founders' Agreement should include key clauses to ensure clarity, protection, and operational harmony.",
      features: [
        "Equity Distribution – Ownership split among founders",
        "Roles and Responsibilities – Duties and accountability",
        "Intellectual Property (IP) – IP ownership and prior rights",
        "Decision Making – Voting procedures and approval thresholds",
        "Capital Contributions – Funding commitments",
        "Founder Exit – Rules for exits, buybacks, non-compete",
        "Dispute Resolution – Mediation or arbitration mechanisms",
        "Confidentiality and NDA – Protects business information",
        "Non-Compete & Non-Solicitation – Prevents rival ventures",
        "Termination Clause – Conditions for termination",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: BookOpen,
    },
    {
      id: 4,
      badge: "Process",
      title: "Procedure to Obtain a Founders' Agreement",
      description:
        "The process for obtaining a legally valid Founders' Agreement involves several key steps.",
      features: [
        "Discussion with Co-Founders – Clarify roles, equity, exit terms",
        "Consultation with a Legal Professional – Guide on legal requirements",
        "Drafting the Agreement – Preliminary agreement based on objectives",
        "Review and Feedback – Collect feedback and revise",
        "Signing the Agreement – Legal standing upon signature",
        "Timeline – Typically 3–4 working days",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1568234928966-359c35dd8327?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Handshake,
    },
    {
      id: 5,
      badge: "Our Services",
      title: "Services Offered for Founder's Agreement",
      description:
        "We offer end-to-end support for drafting, reviewing, and maintaining legally compliant Founder's Agreements. Our services ensure clarity in co-founder relationships, protect intellectual property, and reduce future disputes.",
      features: [
        "Custom Drafting tailored to your startup's structure and vision",
        "Review and Audit to identify gaps and legal risks",
        "Clause-Level Advisory for ownership, IP, equity, exit terms",
        "Legal Compliance Assurance with Indian Contract Law",
        "Continuous Monitoring and Updates for legal changes",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Briefcase,
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
            <p className="text-slate-700">{feature}</p>
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
              <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl opacity-20 blur-3xl animate-pulse" />
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
            Our Founders Agreement Process
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">
            Building strong startup foundations
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

export default FoundersAgreement;