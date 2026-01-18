"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { 
  Check, ArrowRight, AlertCircle, FileText, Scale, CheckCircle,
  Search, BookOpen, Users, FileCheck, Clock, Gavel
} from "lucide-react";

import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";

import Avatar1 from '@/assets/images/avatar-1.webp';
import Avatar2 from '@/assets/images/avatar-2.webp';
import Avatar3 from '@/assets/images/avatar-3.webp';
import Avatar4 from '@/assets/images/avatar-4.webp';

// Custom hook for scroll animation
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
};

const TrademarkObjection = () => {
  const heroContent = {
    title: "Trademark Objection Handling",
    description: "Trademark objections form a key checkpoint in the registration process. These may arise due to similarity with existing marks, incorrect classification, incomplete details, or insufficient distinctiveness. We provide strategic support to overcome objections and safeguard your brand's registration journey.",
    ctaText: "Get Expert Help",
    ctaLink: "/contact",
    subText: "Free Case Assessment & Strategy Consultation"
  };

  const introContent = {
    badge: "Trademark Objection",
    title: "Overview of Trademark Objection",
    subtitle: "Understanding the Objection Process",
    description: "A trademark objection is a preliminary hurdle in the registration process where the Registrar raises concerns about a trademark's registrability. This could be due to similarity with existing marks, lack of distinctiveness, or violation of provisions under the Trademarks Act, 1999. It is not a denial, but a chance for the applicant to clarify, justify, or amend the application. A timely and well-drafted response can help overcome the objection and move the application forward.",
    features: [
      "Expert drafting of robust replies to examination reports",
      "Experienced handling across industries and trademark classes",
      "Legal review in accordance with the Trademarks Act",
      "Timely submission to avoid application abandonment",
      "Full documentation support and end-to-end filing"
    ],
    image1: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080"
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Understanding Objections",
      title: "Understanding Trademark Objection",
      description: "Trademark objections may be raised by trademark examiners during the examination stage, or by the general public/third parties after journal publication. Objections usually occur in the early stages of the registration process and require the applicant to respond with appropriate documentation and legal justification.",
      features: [
        "Objection Upon Publication in Trademark Journal",
        "90-day opposition window for public scrutiny",
        "Objection for Prior Use of Mark Before Registration",
        "Third parties can object on grounds of conflict"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Search,
    },
    {
      id: 2,
      badge: "Response Process",
      title: "Responding to Trademark Objections",
      description: "When a trademark is objected to, the Registry issues an Examination Report detailing the grounds of objection. The applicant is required to submit a comprehensive reply within 30 days, addressing each point raised. The response must be precise, legally sound, and supported with documents such as prior use proof, advertisements, sales invoices, or any other relevant evidence.",
      features: [
        "Submit reply within 30 days of notice",
        "Include prior use proof and advertisements",
        "Attach sales invoices as evidence",
        "Show Cause Hearing if reply is unsatisfactory"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: FileText,
    },
    {
      id: 3,
      badge: "Common Reasons",
      title: "Common Reasons for Trademark Objections",
      description: "Trademark objections can arise due to various reasons including incorrect form submission, applicant name mismatch, use of deceptive words, offensive terms, insufficient description of goods/services, or similarity with existing registered marks. Understanding these reasons helps in preparing a stronger application.",
      features: [
        "Similarity with existing registered marks",
        "Lack of distinctiveness or generic terms",
        "Incorrect form or applicant details",
        "Deceptive, offensive or inappropriate terms"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: AlertCircle,
    },
    {
      id: 4,
      badge: "More Objection Reasons",
      title: "Additional Grounds for Objection",
      description: "Beyond basic issues, objections may arise due to impact on religious sentiments, arbitrary specification of goods/services, non-adherence to NICE classification, incomplete descriptions, wrong trademark class selection, or phonetic and visual similarity with existing marks.",
      features: [
        "Impact on religious sentiments",
        "Non-adherence to NICE Classification",
        "Wrong trademark class (out of 45)",
        "Phonetic or visual similarity to existing marks"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: BookOpen,
    },
    {
      id: 5,
      badge: "Absolute Grounds",
      title: "Absolute Grounds for Rejection",
      description: "Certain absolute grounds under Section 9 of the Trademarks Act can result in outright rejection regardless of any supporting evidence. These include lack of distinctiveness, prohibition under Emblems and Names Act 1950, customary language usage, deceptive nature, harm to religious sentiments, scandalous matter, or excessively descriptive characteristics.",
      features: [
        "Lack of Distinctiveness (generic/descriptive)",
        "Prohibited under Emblems and Names Act, 1950",
        "Scandalous, obscene or morally offensive",
        "Excessively descriptive characteristics"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Scale,
    },
    {
      id: 6,
      badge: "Types of Objections",
      title: "Types of Trademark Objections",
      description: "Objections can be categorized based on specific sections or procedural errors. Section 11 objection is raised if the proposed mark is identical or similar to an existing trademark. Section 9 objection arises when the trademark lacks inherent distinctiveness. Other issues include TM-1 application errors, class description issues, POA discrepancies, and applicant details inaccuracy.",
      features: [
        "Section 11 - Similar to existing trademark",
        "Section 9 - Lacks distinctiveness",
        "TM-1 Application Errors",
        "Power of Attorney Discrepancy"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Gavel,
    },
    {
      id: 7,
      badge: "Documents Required",
      title: "Documents for Objection Response",
      description: "To support a response to an objection, various documents may be submitted including advertisement copies showing prior usage, product images demonstrating mark usage, sales invoices proving commercial use, domain registration proof, and website screenshots showing market visibility.",
      features: [
        "Advertisement Copies (media promotions)",
        "Product Images (mark on goods/packaging)",
        "Sales Invoices (commercial use proof)",
        "Domain Registration & Website Screenshots"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1568234928966-359c35dd8327?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FileCheck,
    },
    {
      id: 8,
      badge: "Response Procedure",
      title: "Procedure for Responding to Objection",
      description: "The procedure involves receiving the objection notice (Examination Report), drafting a detailed response with evidence within 30 days, attending a hearing if scheduled, publication in Trademark Journal upon acceptance, filing a Review Petition if refused, and finally receiving registration if no opposition is raised.",
      features: [
        "Receipt of Examination Report",
        "Draft response with affidavits & evidence",
        "Hearing before Trademark Officer (if needed)",
        "Publication in Journal & Final Registration"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Clock,
    },
    {
      id: 9,
      badge: "Objected Status",
      title: "Addressing 'Application Objected' Status",
      description: "When your trademark application shows 'Objected' status, consult a trademark expert to assess the case, carefully review the Examination Report, respond within 30 days to avoid abandonment, and provide clear legal reasoning explaining why the trademark is unique and not in conflict with others.",
      features: [
        "Consult a Trademark Expert",
        "Review Examination Report carefully",
        "Respond within 30 days deadline",
        "Provide clear legal reasoning with documents"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Users,
    },
    {
      id: 10,
      badge: "Next Steps",
      title: "Next Steps After Filing Response",
      description: "After filing the objection response, await the Registrar's evaluation. If accepted, the process continues to publication. If a hearing is scheduled, prepare a strong case with professional representation. Engaging trademark professionals with domain expertise improves your chances of successfully overcoming the objection.",
      features: [
        "Await Registrar's Evaluation",
        "Prepare for Hearing (if scheduled)",
        "Engage Trademark Professionals",
        "Proceed to Publication upon acceptance"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: CheckCircle,
    }
  ];

  // Animated Section Component
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

  // Feature List Component
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

  // Service Section Component
  const ServiceSection: React.FC<{ section: typeof scrollSections[0]; index: number }> = ({
    section,
    index,
  }) => {
    const { ref, isVisible } = useScrollAnimation();
    const Icon = section.icon;
    const isEven = section.imagePosition === "left";

    return (
      <section ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Content */}
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
              <span className="text-slate-700 font-medium text-sm sm:text-base">{section.badge}</span>
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
                  className="flex items-center gap-3 transition-all duration-500"
                  style={{
                    transitionDelay: `${idx * 100 + 300}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                  }}
                >
                  <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-slate-700 text-sm lg:text-base">{feature}</p>
                </div>
              ))}
            </div>

            <button className="mt-4 sm:mt-6 group px-5 sm:px-7 py-3 sm:py-3.5 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center gap-2 w-fit hover:shadow-lg active:scale-95 text-sm sm:text-base">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image */}
          <div
            className={`${isEven ? "md:order-1" : ""} transition-all duration-700 ease-out`}
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
                  <div className="text-slate-900 font-bold text-lg sm:text-xl">{String(index + 1).padStart(2, '0')}</div>
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
                    {String(index + 1).padStart(2, '0')}
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

  return (
    <>
      {/* Hero Section */}
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

            <Typography color="#fff" noDarkMode size={18} className="md:w-[80%]">
              {heroContent.description}
            </Typography>
            <Link href={heroContent.ctaLink}>
              <Button variant="primary" className="mt-[32px] hover:scale-105 transition-transform duration-300">
                {heroContent.ctaText}
              </Button>
            </Link>
            <p className="text-lg sm:text-xl text-center text-black">{heroContent.subText}</p>
          </div>
        </div>
      </HeroBackground>
      {/* Gradient Transition */}
      <div className="w-full h-32 bg-gradient-to-b from-transparent to-white -mt-32 relative z-10 pointer-events-none" />
      {/* Intro Section */}
      <div className="min-h-screen bg-white relative z-20">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content Section */}
            <AnimatedSection className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors duration-300">
                <AlertCircle className="w-4 sm:w-5 h-4 sm:h-5 text-slate-700" />
                <span className="text-slate-700 font-medium text-sm sm:text-base">{introContent.badge}</span>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold">
                  {introContent.title}
                </h1>

                {introContent.subtitle && (
                  <h2 className="text-xl sm:text-2xl text-slate-600">{introContent.subtitle}</h2>
                )}
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{introContent.description}</p>

              <FeatureList features={introContent.features} />

              <Link href={heroContent.ctaLink}>
                <button className="mt-6 sm:mt-8 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-slate-900 text-white text-sm sm:text-base font-semibold shadow-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:scale-105 active:scale-95">
                  Get Started
                </button>
              </Link>
            </AnimatedSection>

            {/* Right Visual Section */}
            <AnimatedSection delay={200} className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full">
              <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-orange-400 to-red-400 rounded-3xl opacity-20 blur-3xl animate-pulse" />

              {/* Back Image */}
              <div className="absolute top-0 right-0 w-[75%] sm:w-[80%] lg:w-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10">
                <ImageWithFallback
                  src={introContent.image1}
                  alt="Intro visual 1"
                  className="w-full h-64 sm:h-80 lg:h-[450px] object-cover"
                />
              </div>

              {/* Front Image */}
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
      {/* Scroll Sections */}
      <div className="bg-white min-h-screen">
        <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 pb-6 sm:pb-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-2 sm:mb-3">
            Our Objection Handling Process
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">
            Strategic approach to overcome trademark objections and secure your brand
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

export default TrademarkObjection;
