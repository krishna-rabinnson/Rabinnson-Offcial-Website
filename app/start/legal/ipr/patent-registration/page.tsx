"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { 
  Check, ArrowRight, Lightbulb, Search, FileText, Award,
  ShieldCheck, Users, FileCheck, Clock, BookOpen,
  Ban, Building2, Globe
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

const PatentRegistration = () => {
  const heroContent = {
    title: "Patent Registration",
    description: "Our expert professionals offer complete support for seamless and compliant patent registration in India. From patentability searches to final grant, we ensure your invention is protected with precision and compliance.",
    ctaText: "Protect Your Invention",
    ctaLink: "/contact",
    subText: "Free Patentability Assessment & Consultation"
  };

  const introContent = {
    badge: "Patent Registration",
    title: "Overview of Patent Registration",
    subtitle: "Protect Your Innovation Legally",
    description: "Patent registration is a legal right granted by the Government that allows an individual or a company to exclusively manufacture, use, sell, or import an invention for a specified period. It prevents others from exploiting the patented product or process without the consent of the patent holder. While the registration process in India can be detailed and time-consuming, we offer expert guidance to simplify and streamline each step, ensuring a smoother and hassle-free experience.",
    features: [
      "End-to-end assistance in patent registration process",
      "Comprehensive patentability searches for novelty check",
      "Precise drafting to meet technical and legal standards",
      "Support during examination and objection responses",
      "Timely patent renewals throughout validity period"
    ],
    image1: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1080"
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Benefits",
      title: "Benefits of Patent Registration in India",
      description: "Patent registration provides legal protection and commercial advantages to inventors and businesses, fostering innovation and enabling long-term value creation. It legally recognizes the applicant as the sole owner, offering exclusive rights and formal acknowledgment of the innovation.",
      features: [
        "Ownership & Exclusive Rights for up to 20 years",
        "Protection Against Copying & Unauthorized Use",
        "Monetisation through Licensing or Sale",
        "Enhanced Brand Reputation & Premium Pricing"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Award,
    },
    {
      id: 2,
      badge: "More Benefits",
      title: "Additional Advantages of Patents",
      description: "Beyond protection, patents offer transfer of ownership flexibility, allowing holders to assign or restructure their IP portfolio. Through government schemes, particularly for MSMEs, patent applicants can seek support and reimbursement for international patent filings under the PCT or Paris Convention routes.",
      features: [
        "Transfer of Ownership & IP Portfolio Flexibility",
        "International Protection via PCT/Paris Convention",
        "Government Support for MSME Filings",
        "Competitive Market Advantage"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Globe,
    },
    {
      id: 3,
      badge: "Application Types",
      title: "Types of Patent Applications in India",
      description: "India offers various patent application types: Provisional Application for inventions under development, Ordinary (Non-Provisional) for complete formal applications, Convention Application for claiming priority from convention countries, and PCT applications for international protection.",
      features: [
        "Provisional Application - Early priority date",
        "Ordinary/Complete Specification Application",
        "Convention Application - Within 12 months priority",
        "PCT International & National Phase Applications"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 4,
      badge: "More Application Types",
      title: "Specialized Patent Filings",
      description: "Direct Filing involves submitting complete specification without prior provisional application. Subsequent Filing is a complete specification filed after provisional, claiming its priority date. Divisional Application is filed when a patent contains multiple inventions, allowing separation while retaining original priority.",
      features: [
        "Direct Filing - Complete specification directly",
        "Subsequent Filing - After provisional application",
        "Divisional Application - Multiple inventions split",
        "Retains Original Priority Date"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: BookOpen,
    },
    {
      id: 5,
      badge: "Patentability Criteria",
      title: "What Can Be Patented in India?",
      description: "To qualify for patent protection under the Indian Patents Act, 1970, an invention must meet three essential criteria: Novelty (entirely new, not disclosed anywhere), Inventive Step (non-obvious technical advancement), and Industrial Applicability (capable of being manufactured or used in industry).",
      features: [
        "Novelty - Not published or disclosed before",
        "Inventive Step - Non-obvious to skilled person",
        "Industrial Applicability - Practical utility",
        "Technical Advancement or Economic Significance"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Lightbulb,
    },
    {
      id: 6,
      badge: "Non-Patentable",
      title: "What Cannot Be Patented in India?",
      description: "Certain inventions are excluded under Sections 3 and 4 of the Indian Patents Act: inventions contrary to natural laws, harmful to life/environment, scientific principles, discovery of natural substances, computer programs per se, mathematical methods, artistic works, and methods of playing games.",
      features: [
        "Inventions contrary to natural laws",
        "Computer programs per se & algorithms",
        "Scientific principles & abstract theories",
        "Agricultural/horticultural methods"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Ban,
    },
    {
      id: 7,
      badge: "Required Forms",
      title: "Forms Required for Patent Application",
      description: "Patent registration involves multiple statutory forms: Form 1 (Application), Form 2 (Specification), Form 3 (Statement & Undertaking), Form 5 (Declaration of Inventorship), Form 9 (Early Publication), Form 18 (Request for Examination), Form 26 (Agent Authorization), and Form 28 (Small Entity Status).",
      features: [
        "Form 1 & 2 - Application & Specification",
        "Form 3 & 5 - Undertaking & Inventorship",
        "Form 18 - Request for Examination (within 48 months)",
        "Form 26 & 28 - Agent Authorization & Small Entity"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1568234928966-359c35dd8327?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FileCheck,
    },
    {
      id: 8,
      badge: "Eligibility",
      title: "Who Can Apply for Patent in India?",
      description: "Under Section 6 of the Indian Patents Act, 1970, eligible applicants include: True and First Inventor, Assignee of the inventor, Legal representative of deceased inventor, Natural persons, Companies, Startups/MSMEs, Government bodies, Partnership firms, and Assignees with valid assignment rights.",
      features: [
        "True & First Inventor or Assignee",
        "Companies, Startups & MSMEs",
        "Partnership Firms & Proprietorships",
        "Government Bodies & R&D Institutions"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Users,
    },
    {
      id: 9,
      badge: "Documents Required",
      title: "Documents for Patent Registration",
      description: "Essential documents include: Form-1 (Application), Proof of right to apply, Provisional/Complete Specification (Form-2), Statement and Undertaking (Form-3), Declaration of Inventorship (Form-5), Power of Authority (Form-26), Priority Document for convention applications, and Permission from National Biodiversity Authority if biological material is involved.",
      features: [
        "Patent Application Form-1 & Specification Form-2",
        "Statement Form-3 & Inventorship Form-5",
        "Power of Authority Form-26",
        "Priority Document & Biodiversity Permission"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 10,
      badge: "Patentability Search",
      title: "Comprehensive Patentability Assessment",
      description: "Before filing, we conduct comprehensive patentability searches to check novelty and eligibility of your invention. This includes prior art search across global databases, assessment of inventive step, and evaluation of industrial applicability to determine the best filing strategy.",
      features: [
        "Prior Art Search across Global Databases",
        "Novelty & Inventive Step Assessment",
        "Industrial Applicability Evaluation",
        "Strategic Filing Recommendations"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Search,
    },
    {
      id: 11,
      badge: "Application Process",
      title: "Patent Application Process in India",
      description: "The process includes: Engaging a professional, Patentability search, Drafting the application, Filing with Patent Office, Publication of application, Examination request, Responding to examiner objections, Office action response, and finally Grant of Patent Registration.",
      features: [
        "Professional Engagement & Patentability Search",
        "Drafting & Filing Patent Application",
        "Publication & Examination Request",
        "Objection Response & Patent Grant"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Clock,
    },
    {
      id: 12,
      badge: "Examination & Grant",
      title: "Patent Examination & Grant Process",
      description: "After filing, the application is published in the Patent Journal. Request for Examination (Form 18) must be filed within 48 months. The examiner reviews for compliance with Patents Act. Any objections must be addressed through office action responses. Upon satisfaction, the patent is granted with 20-year protection.",
      features: [
        "Publication in Official Patent Journal",
        "Request for Examination within 48 months",
        "Examiner Review & Objection Response",
        "Patent Grant with 20-Year Protection"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: ShieldCheck,
    },
    {
      id: 13,
      badge: "Why Choose Us",
      title: "Expert Patent Registration Services",
      description: "A patentable invention must demonstrate novelty, non-obviousness, and industrial applicability. Accurate filing requires completion of key forms with essential technical and legal details. We offer end-to-end patent registration services designed to simplify this process, ensuring full compliance with regulatory standards.",
      features: [
        "End-to-End Patent Registration Support",
        "Technical & Legal Expertise",
        "Full Compliance with Patent Office Standards",
        "Smooth & Hassle-Free Experience"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Building2,
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
                <Lightbulb className="w-4 sm:w-5 h-4 sm:h-5 text-slate-700" />
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
              <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl opacity-20 blur-3xl animate-pulse" />

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
            Our Patent Registration Process
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">
            From concept to patent grant - complete protection for your invention
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

export default PatentRegistration;
