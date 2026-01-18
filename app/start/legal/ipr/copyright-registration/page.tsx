"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { 
  Check, ArrowRight, BookOpen, FileText, Shield, Award,
  Users, FileCheck, Clock, Scale, AlertCircle, Building2,
  Eye, Globe
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

const CopyrightRegistration = () => {
  const heroContent = {
    title: "Copyright Registration",
    description: "We provide comprehensive support for copyright registration in India, helping creators secure their rights efficiently and effectively. Whether you're an artist, author, filmmaker, or business owner, we ensure your creative work receives the legal protection it deserves.",
    ctaText: "Register Your Work",
    ctaLink: "/contact",
    subText: "Free Consultation & Copyright Assessment"
  };

  const introContent = {
    badge: "Copyright Registration",
    title: "Overview of Copyright Registration",
    subtitle: "Legal Protection Under The Copyright Act, 1957",
    description: "Copyright is a form of legal protection granted under The Copyright Act, 1957 to individuals who create original artistic, literary, musical, or dramatic works. This law safeguards the creator's exclusive rights and encourages innovation by providing statutory ownership over their intellectual property. Copyright registration serves as a formal mechanism for protecting the unique expression of ideas once they are transformed into tangible creative works.",
    features: [
      "Professional copyright registration in compliance with Indian law",
      "Simplified application process guided by experts",
      "Expert assistance with renewal and follow-ups",
      "Documentation and form filing support",
      "Resolution support for objections and disputes"
    ],
    image1: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80&w=1080"
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Purpose & Importance",
      title: "Why Copyright Registration Matters",
      description: "While copyright protection arises automatically upon creation, formal registration offers significant legal and strategic benefits. It acts as proof of ownership and strengthens your position in infringement disputes. Copyright establishes the creator as the rightful owner and gives them control over how their work is used, distributed, and monetised.",
      features: [
        "Prevents unauthorised reproduction or use",
        "Encourages authors and creators to innovate",
        "Establishes legal ownership in disputes",
        "Provides prima facie evidence of authorship"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Shield,
    },
    {
      id: 2,
      badge: "Types of Works",
      title: "Works Protected Under Copyright in India",
      description: "Copyright protection extends to various types of creative works including Literary Works (novels, poems, articles), Artistic Works (paintings, sculptures, designs), Musical Works (melodies, compositions), Cinematographic Works (films, documentaries), Architectural Works, Software, Databases, Choreographical Works, and Performing Arts.",
      features: [
        "Literary & Artistic Works",
        "Musical & Cinematographic Works",
        "Software & Databases",
        "Choreographical & Performing Arts"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: BookOpen,
    },
    {
      id: 3,
      badge: "Benefits",
      title: "Benefits of Copyright Registration",
      description: "Registration grants monopoly over creative work with exclusive rights to reproduce, distribute, and publicly display original content. It establishes legal acclamation and protection, provides sense of security under the Copyright Act, 1957, and enables public display of ownership through official Copyright Office records.",
      features: [
        "Monopoly & Exclusive Rights",
        "Legal Acclamation & Protection",
        "Public Display of Ownership",
        "Freedom to Work & License"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Award,
    },
    {
      id: 4,
      badge: "More Benefits",
      title: "Additional Advantages of Registration",
      description: "Copyright registration enables transfer of rights - selling, assigning, or licensing while retaining protection. It enhances reputation by clearly attributing authorship, strengthens legal standing in disputes, restricts unauthorised use through legal notices, and serves as a pre-emptive measure deterring infringement.",
      features: [
        "Transfer of Rights & Licensing",
        "Reputation Enhancement",
        "Restriction of Unauthorised Use",
        "Pre-Emptive Deterrent Measure"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Globe,
    },
    {
      id: 5,
      badge: "Copyright Symbol",
      title: "The Copyright Symbol (©)",
      description: "Once a creator registers their work under the Copyright Act, 1957, they are entitled to use the copyright symbol (©) as an official indication of legal protection. This symbol serves as public notice of protection and acts as a legal warning deterrent against unauthorised copying, distribution, or reproduction.",
      features: [
        "Public Notice of Legal Protection",
        "Deterrent Against Infringement",
        "Reinforces Legal Ownership",
        "Simplifies Enforcement"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Eye,
    },
    {
      id: 6,
      badge: "Legal Rights",
      title: "Legal Rights of Copyright Owner",
      description: "Under the Copyright Act, 1957, the copyright owner enjoys exclusive rights including: Right to Reproduce, Right to Distribute, Right to Create Derivative Works, Right to Publicly Perform, Right to Display Publicly, Right to Assign or License, Moral Rights of the Author, and Right to Enforce Copyright.",
      features: [
        "Reproduce, Distribute & Display Rights",
        "Create Derivative Works & Adaptations",
        "Assign, License & Transfer Rights",
        "Moral Rights & Right to Enforce"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Scale,
    },
    {
      id: 7,
      badge: "Duration",
      title: "Duration of Copyright Protection",
      description: "In India, copyright protection lasts for the author's lifetime plus 60 years after their death. This ensures long-term legal and economic benefits for the creator's heirs or assignees. For films, sound recordings, and anonymous works, protection extends 60 years from the date of publication.",
      features: [
        "Lifetime + 60 Years for Authors",
        "60 Years from Publication for Films",
        "Long-term Economic Benefits",
        "Protection for Heirs & Assignees"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1568234928966-359c35dd8327?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Clock,
    },
    {
      id: 8,
      badge: "Eligibility & Formats",
      title: "Eligibility for Filing Copyright Application",
      description: "Different work types require specific formats: Artistic Works (PDF/JPG), Sound Recording (MP3), Literary/Dramatic/Music/Software (PDF under 10 MB). For Software, submit PDF of complete source code or first and last 10 pages if ≤20 pages, unredacted.",
      features: [
        "Artistic Works - PDF/JPG format",
        "Sound Recording - MP3 format",
        "Literary/Software - PDF format",
        "Software - Source code documentation"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: FileCheck,
    },
    {
      id: 9,
      badge: "Documents Required",
      title: "Documents for Copyright Registration",
      description: "Required documents include: 2 copies of work, DD/IPO of applicable fees, NOC from author if applicant is different, NOC from publisher if published, Search Certificate from Trade Mark Office (TM-60) if used on goods, NOC from person in photographs, Power of Attorney if filed through attorney.",
      features: [
        "2 Copies of Work & Applicable Fees",
        "NOC from Author/Publisher (if different)",
        "Trade Mark Search Certificate (TM-60)",
        "Power of Attorney (if through agent)"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 10,
      badge: "Registration Steps",
      title: "Steps for Copyright Registration in India",
      description: "The registration process involves: Step 1 - Access Official Website, Step 2 - Submission of Application, Step 3 - Diary Number Issuance, Step 4 - Copyright Objection Handling, Step 5 - Objection Resolution, Step 6 - Application Scrutiny, Step 7 - Get Copyright Registration Certificate.",
      features: [
        "Access Portal & Submit Application",
        "Receive Diary Number",
        "Handle Objections (if any)",
        "Scrutiny & Certificate Issuance"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Users,
    },
    {
      id: 11,
      badge: "Application Status",
      title: "Checking & Understanding Application Status",
      description: "Check status via Copyright Office website using Diary/Acknowledgement Number. Different statuses include: Waiting (under initial review), Documents Missing, Abandoned (due to non-submission), Under Review (being examined), Re-Review (second examination), and Hearing (scheduled for dispute resolution).",
      features: [
        "Waiting - Under initial mandatory review",
        "Under Review - Being examined",
        "Re-Review - Second examination initiated",
        "Hearing - Scheduled for dispute resolution"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Eye,
    },
    {
      id: 12,
      badge: "Penalties",
      title: "Penalties for Copyright Infringement",
      description: "Copyright infringement carries serious penalties in India. First Conviction: Minimum 6 months imprisonment and ₹50,000 fine. Second and Subsequent Convictions: Minimum 1 year imprisonment and ₹1,00,000 fine. These penalties underscore the importance of proper copyright protection.",
      features: [
        "First Conviction - 6 months & ₹50,000",
        "Subsequent - 1 year & ₹1,00,000",
        "Civil Remedies Available",
        "Criminal Complaints Possible"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: AlertCircle,
    },
    {
      id: 13,
      badge: "Why Choose Us",
      title: "Expert Copyright Registration Services",
      description: "We specialize in offering complete copyright registration services. We assist you at every stage—from initial consultation to ensuring that you meet all regulatory requirements and successfully complete your registration. Our professional team ensures your creative work is registered smoothly and efficiently, providing you with legal security and peace of mind.",
      features: [
        "End-to-End Registration Support",
        "Professional Expert Guidance",
        "Full Regulatory Compliance",
        "Legal Security & Peace of Mind"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1080",
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
                <BookOpen className="w-4 sm:w-5 h-4 sm:h-5 text-slate-700" />
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
              <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl opacity-20 blur-3xl animate-pulse" />

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
            Our Copyright Registration Process
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">
            Comprehensive protection for your creative works under The Copyright Act, 1957
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

export default CopyrightRegistration;
