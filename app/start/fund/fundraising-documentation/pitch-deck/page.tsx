"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { 
  Check, ArrowRight, Presentation, Target, TrendingUp, Users, Award, Rocket, FileText, CheckCircle,
  Layers, FolderOpen,
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import Avatar1 from '@/assets/images/avatar-1.webp';
import Avatar2 from '@/assets/images/avatar-2.webp';
import Avatar3 from '@/assets/images/avatar-3.webp';
import Avatar4 from '@/assets/images/avatar-4.webp';

const PitchDeck = () => {
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
    title: "Pitch Deck for Investors",
    description: "An effective pitch deck is crucial for any entrepreneur looking to raise funds for their business. We offer expert services to help you create a compelling pitch deck that grabs the attention of investors and positions your business for successful fundraising.",
    ctaText: "Create Your Pitch Deck",
    ctaLink: "/contact",
    subText: "Investor-Ready Pitch Decks in 5-7 Days"
  };
  
  const introContent = {
    badge: "Pitch Deck Services",
    badgeIcon: Presentation,
    title: "Expert Pitch Deck Creation",
    subtitle: "Compelling presentations that win investor confidence",
    description: "A pitch deck is a succinct presentation, usually comprising 15-25 slides, that provides investors with a snapshot of your company. It's designed to highlight the key elements of your business idea, including the problem you're solving, your solution, the market opportunity, your business model, and your team.",
    features: [
      "Tailored Solutions for Local Challenges - Pitch decks addressing unique challenges relevant to your target market",
      "Visually Engaging Presentations - Informative and visually compelling designs for better understanding",
      "Market-Driven Approach - Aligned with market trends and investor preferences",
      "Growth Strategy Presentation - Confidently present growth strategies showing potential returns",
      "Industry-Specific Expertise - Expert guidance for tech, healthcare, education, and other sectors",
    ],
    image1: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=1080"
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Overview",
      title: "Understanding Pitch Decks for Investors",
      description: "When startups are looking to raise funds, approaching the right investors is crucial. Whether pitching to Angel Investors, Venture Capitalists, or others, creating an outstanding Pitch Deck is essential for securing investment.",
      features: [
        "Succinct presentation of 15-25 slides",
        "Snapshot of your company for investors",
        "Highlights problem, solution, and market opportunity",
        "Presents business model and team credentials",
        "Captures investor interest leading to funding opportunities",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Target
    },
    {
      id: 2,
      badge: "Benefits",
      title: "Benefits of a Professional Pitch Deck",
      description: "A well-crafted pitch deck provides multiple advantages for entrepreneurs seeking investment in the Indian market.",
      features: [
        "Structured Business Plan - Organised framework for concise and compelling business presentation",
        "Customisation as per Need - Adaptable to different funding needs and investor requirements",
        "Marketing Strategy - Roadmap showing market positioning and growth plans",
        "Executive Summary - Quick but comprehensive snapshot for potential investors",
        "Enhanced Clarity - Clear vision, product, target market, and financial projections",
        "Investor Preferences - Tailored to resonate with the right investors",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: TrendingUp
    },
    {
      id: 3,
      badge: "Checklist",
      title: "Essential Pitch Deck Checklist",
      description: "Ensure you have these critical elements prepared before creating your investor pitch deck.",
      features: [
        "Target List - Identify potential customers for focused engagement",
        "Strategic Planning - Develop a clear strategic plan for your business",
        "Business Plan - Comprehensive outline of your vision",
        "Financial Model - Detailed financial projection model",
        "Milestones - Define achievable milestones to showcase growth",
        "Problem Identification - Summarise solvable problems your business addresses",
        "Elevator Pitch - Brief pitch for quick communication",
        "Executive Summary - Concise summary of your business",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: CheckCircle
    },
    {
      id: 4,
      badge: "Documents Required",
      title: "Documents Required for Pitch Deck",
      description: "Gather these essential documents to create a comprehensive and compelling pitch deck for investors.",
      features: [
        "Business Plan - Comprehensive summary of your business's future plans and strategies",
        "Technical Documents - Documents related to technology (if tech or medical-based)",
        "Financial Forecasts - Detailed financial projections for upcoming years",
        "Recruitment and Expense Plans - Plans for employees, R&D, manufacturing, and marketing",
        "Sales and Profit Forecasts - Detailed sales, profit, and loss projections",
        "Target Market Details - Relevant data about the target market for investor queries",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: FolderOpen
    },
    {
      id: 5,
      badge: "Key Slides - Part 1",
      title: "Essential Pitch Deck Slides",
      description: "These core slides form the foundation of an effective investor pitch deck.",
      features: [
        "Business Model - Overview of how company creates, delivers, and captures value",
        "Vision and Mission - Company objectives, value proposition, and management structure",
        "Product - Showcase with visual representations highlighting unique features",
        "Market Size - Data on market dimensions for growth and ROI assessment",
        "Problem - Highlights market gap and existing challenges the business addresses",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Layers
    },
    {
      id: 6,
      badge: "Key Slides - Part 2",
      title: "Additional Critical Slides",
      description: "Complete your pitch deck with these important slides that investors expect to see.",
      features: [
        "Solution - Company's proposed solution to the identified problem",
        "Competition - Market competitor analysis with rival funding and strategies",
        "Team Support - Leadership team introduction with qualifications and achievements",
        "Milestones and Financial Projections - Growth roadmap with financial forecasts",
        "Use of Funds - Planned allocation of raised capital and expense estimates",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: FileText
    },
    {
      id: 7,
      badge: "Team & Traction",
      title: "Showcasing Your Team & Traction",
      description: "Investors invest in people. We help you showcase your team's expertise and your business achievements effectively.",
      features: [
        "Founder Backgrounds and credentials",
        "Key Team Members and their roles",
        "Advisors & Board composition",
        "Key Performance Indicators",
        "Growth Metrics & Charts",
        "Milestones Achieved",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1568234928966-359c35dd8327?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Users
    },
    {
      id: 8,
      badge: "Deliverables",
      title: "What You Receive",
      description: "Complete pitch deck package ready for investor presentations in multiple formats for different scenarios.",
      features: [
        "Editable PowerPoint/Keynote presentation",
        "PDF Version for easy sharing",
        "Speaker Notes for presentations",
        "One-Page Executive Summary",
        "Custom Brand Design integration",
        "Data Visualization charts and graphs",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Award
    },
    {
      id: 9,
      badge: "Why Choose Us",
      title: "Expert Pitch Deck Services",
      description: "We specialize in providing comprehensive pitch deck services, supporting entrepreneurs from initial guidance to ensuring all requirements are met.",
      features: [
        "Tailored pitch decks for the Indian market addressing local challenges",
        "Visually compelling presentations to effectively engage investors",
        "Expertise in regulations and culture for compliance and investor confidence",
        "Industry-specific expertise across tech, healthcare, education, and more",
        "Quick turnaround with unlimited revisions",
        "Presentation coaching and support",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Rocket
    }
  ];

  const AnimatedSection: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => {
    const { ref, isVisible } = useScrollAnimation();
    return (
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${className}`}
        style={{
          transitionDelay: `${delay}ms`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)"
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
              transform: isVisible ? "translateX(0)" : "translateX(-20px)"
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

  const ServiceSection: React.FC<{ section: typeof scrollSections[0]; index: number }> = ({ section, index }) => {
    const { ref, isVisible } = useScrollAnimation();
    const Icon = section.icon;
    const isEven = section.imagePosition === "left";

    return (
      <section ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          <div
            className={`flex flex-col justify-center space-y-4 sm:space-y-6 transition-all duration-700 ease-out ${isEven ? "md:order-2" : ""}`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : `translateX(${isEven ? "40px" : "-40px"})`
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-100 rounded-full w-fit hover:bg-slate-200 transition-colors duration-300">
              <Icon className="w-4 h-4 text-slate-700" />
              <span className="text-slate-700 font-medium text-sm sm:text-base">{section.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-semibold">{section.title}</h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">{section.description}</p>
            <div className="space-y-2 sm:space-y-3 pt-2">
              {section.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 transition-all duration-500"
                  style={{
                    transitionDelay: `${idx * 100 + 300}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-20px)"
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
              Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div
            className={`${isEven ? "md:order-1" : ""} transition-all duration-700 ease-out`}
            style={{
              transitionDelay: "200ms",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : `translateX(${isEven ? "-40px" : "40px"})`
            }}
          >
            {section.hasOverlappingImages ? (
              <div className="relative h-[320px] sm:h-[420px] md:h-[480px] lg:h-[540px]">
                <div className="absolute top-0 right-4 sm:right-12 w-[60%] sm:w-[65%] h-[55%] sm:h-[60%] rounded-2xl overflow-hidden shadow-xl z-10 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                  <ImageWithFallback src={section.imageUrl1} alt={`${section.badge} 1`} className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 left-0 w-[65%] sm:w-[70%] h-[60%] sm:h-[65%] rounded-2xl overflow-hidden shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                  <ImageWithFallback src={section.imageUrl2!} alt={`${section.badge} 2`} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 right-4 sm:right-8 bg-white rounded-xl shadow-lg px-4 sm:px-6 py-3 sm:py-4 z-30 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-slate-900 font-bold text-lg sm:text-xl">{String(index + 1).padStart(2, '0')}</div>
                  <div className="text-slate-500 text-xs sm:text-sm">Step</div>
                </div>
              </div>
            ) : (
              <div className="relative h-[280px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
                <div className="rounded-2xl overflow-hidden shadow-2xl w-full h-full hover:scale-[1.02] transition-all duration-500">
                  <ImageWithFallback src={section.imageUrl1} alt={section.badge} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white rounded-xl shadow-lg px-4 sm:px-6 py-3 sm:py-4 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">{String(index + 1).padStart(2, '0')}</div>
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
                <Image src={Avatar1} alt="Avatar1" className="w-[32px]" />
                <Image src={Avatar2} alt="Avatar2" className="w-[32px] ml-[-8px]" />
                <Image src={Avatar3} alt="Avatar3" className="w-[32px] ml-[-8px]" />
                <Image src={Avatar4} alt="Avatar4" className="w-[32px] ml-[-8px]" />
              </div>
              <Typography color="#fff" noDarkMode className="md:hidden">Trusted by Founders</Typography>
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
      <div className="w-full h-32 bg-gradient-to-b from-transparent to-white -mt-32 relative z-10 pointer-events-none" />
      <div className="min-h-screen bg-white relative z-20">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <AnimatedSection className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors duration-300">
                <IntroIcon className="w-4 sm:w-5 h-4 sm:h-5 text-slate-700" />
                <span className="text-slate-700 font-medium text-sm sm:text-base">{introContent.badge}</span>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold">{introContent.title}</h1>
                {introContent.subtitle && <h2 className="text-xl sm:text-2xl text-slate-600">{introContent.subtitle}</h2>}
              </div>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{introContent.description}</p>
              <FeatureList features={introContent.features} />
              <Link href={heroContent.ctaLink}>
                <button className="mt-6 sm:mt-8 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-slate-900 text-white text-sm sm:text-base font-semibold shadow-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:scale-105 active:scale-95">
                  Get Started
                </button>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={200} className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full">
              <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl opacity-20 blur-3xl animate-pulse" />
              <div className="absolute top-0 right-0 w-[75%] sm:w-[80%] lg:w-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10">
                <ImageWithFallback src={introContent.image1} alt="Intro visual 1" className="w-full h-64 sm:h-80 lg:h-[450px] object-cover" />
              </div>
              <div className="absolute bottom-8 sm:bottom-10 lg:bottom-20 left-0 w-[75%] sm:w-[80%] lg:w-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 border-4 sm:border-8 border-white z-20">
                <ImageWithFallback src={introContent.image2} alt="Intro visual 2" className="w-full h-64 sm:h-80 lg:h-[450px] object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-screen">
        <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 pb-6 sm:pb-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-2 sm:mb-3">Our Pitch Deck Services</h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">Investor-ready presentations that win funding</p>
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

export default PitchDeck;
