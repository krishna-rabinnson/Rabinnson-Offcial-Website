"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { 
  Check, ArrowRight, FileText, Calculator, Users,
  TrendingUp, Award, CheckCircle,  Target,
  Scale, FolderOpen, Settings, 
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import Avatar1 from '@/assets/images/avatar-1.webp';
import Avatar2 from '@/assets/images/avatar-2.webp';
import Avatar3 from '@/assets/images/avatar-3.webp';
import Avatar4 from '@/assets/images/avatar-4.webp';

const ValuationCertificate = () => {
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
    title: "Valuation Services",
    description: "We offer expert-led business valuation services to help you assess, justify, and enhance your company's financial worth—essential for fundraising, mergers, acquisitions, and strategic planning.",
    ctaText: "Get Valuation Now",
    ctaLink: "/contact",
    subText: "Professional Valuation Aligned with Regulatory Requirements"
  };

  const introContent = {
    badge: "Valuation Services",
    badgeIcon: Calculator,
    title: "Expert-Led Business Valuation",
    subtitle: "Accurate valuation for fundraising, M&A, and strategic planning",
    description: "Valuation services involve the process of determining the current worth of a business, asset, or company. These services are essential for a range of financial and strategic decisions such as fundraising, mergers and acquisitions, regulatory compliance, tax planning, and dispute resolution.",
    features: [
      "Business Valuation – In-depth analysis to determine fair market value using globally accepted methodologies",
      "Company Valuation – Valuation support for startups, SMEs, and large enterprises across diverse sectors",
      "Corporate & Financial Valuation – Evaluation of financial performance, intangible assets, goodwill, and earning potential",
      "Mergers & Acquisitions Valuation – Specialized valuation for M&A deals to support negotiations and due diligence",
      "Asset-Based Valuation – Valuation based on tangible and intangible asset holdings for balance sheet accuracy",
    ],
    image1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080"
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Overview",
      title: "Understanding Valuation Services",
      description: "Valuation can be conducted for businesses, startups, assets (tangible and intangible), equity shares and securities, intellectual property, and goodwill. The process includes financial analysis, market comparisons, and regulatory considerations.",
      features: [
        "Businesses and Startups valuation",
        "Assets (tangible and intangible) assessment",
        "Equity Shares and Securities valuation",
        "Intellectual Property and Goodwill evaluation",
        "Used by investors, regulatory authorities, auditors, and management",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Target
    },
    {
      id: 2,
      badge: "Legal Framework",
      title: "Laws Governing Business Valuation in India",
      description: "Several Indian laws and regulations mandate the use of valuation services to ensure transparency, compliance, and fairness in business transactions.",
      features: [
        "The Companies Act, 2013 – Mandatory for mergers, acquisitions, corporate restructuring, and share issuance",
        "Income Tax Act, 1961 – Fair market value determination for property transfer, capital gains, or gift taxation",
        "Insolvency and Bankruptcy Code (IBC), 2016 – Essential for asset assessment during insolvency proceedings",
        "SEBI Regulations – Used for mutual fund units, REITs, InvITs, and takeovers for fair pricing",
        "Insurance Act, 1938 – Insurers must assess assets and liabilities for solvency reporting",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Scale
    },
    {
      id: 3,
      badge: "Valuation Approaches",
      title: "Different Approaches Used in Business Valuation",
      description: "Business valuation in India follows recognized methodologies based on global best practices and regulatory standards. The approach is selected based on the nature of business and purpose of valuation.",
      features: [
        "Asset Valuation Approach – Net asset value by calculating fair value of tangible and intangible assets minus liabilities",
        "Market Valuation Approach – Compares business with similar companies based on revenue, size, and growth metrics",
        "Discounted Cash Flow (DCF) Approach – Present value of expected future cash flows adjusted for time value of money",
        "Ideal for startups, asset-heavy businesses, publicly traded firms, or liquidation scenarios",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: TrendingUp
    },
    {
      id: 4,
      badge: "Report Contents",
      title: "Contents of a Valuation Report",
      description: "A typical valuation report includes structured sections to ensure clarity, transparency, and regulatory compliance.",
      features: [
        "Valuation Subject – Brief description of business or asset being valued (name, sector, activity)",
        "Proposed Transaction – Purpose and nature of transaction (merger, acquisition, restructuring)",
        "Key Financials – Summary including revenue, EBITDA, net profit, assets, liabilities",
        "Capital Structure – Breakdown of company's debt and equity structure",
        "Shareholding Pattern – Current shareholders, percentage holdings, and post-transaction changes",
        "Market Volumes & Prices – Trading volumes and share prices over last 6 months",
        "Related Party Issues – Disclosure of related party transactions or conflicts of interest",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: FileText
    },
    {
      id: 5,
      badge: "Purpose",
      title: "Purpose of Valuation Services",
      description: "Valuation services play a crucial role in business decision-making, regulatory compliance, and stakeholder transparency.",
      features: [
        "Understanding Real Value – Determines fair market value of businesses, securities, or assets",
        "Expert Advice – Professional insights for volatile or complex asset types",
        "Price Determination – Objective pricing through transparent and fair valuation processes",
        "Avoiding Assumptions – Relies on tested methodologies instead of arbitrary pricing",
        "International Standards – Aligns with global norms ensuring reliability and consistency",
        "Investor Confidence – Builds trust through clarity, accuracy, and regulatory compliance",
        "Corporate Governance – Supports sound governance by promoting asset transparency",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Award
    },
    {
      id: 6,
      badge: "Valuer Eligibility",
      title: "Eligibility to be a Valuer",
      description: "To become a registered valuer in India, certain key criteria must be fulfilled as per regulatory requirements.",
      features: [
        "Proper and Fit Person – Must demonstrate integrity, ethical conduct, and professional suitability",
        "Qualifications and Experience – Relevant academic qualifications and work experience in finance, law, accounting, or engineering",
        "Membership in Registered Valuer's Organisation (RVO) – Must be a member of IBBI-recognised RVO",
        "Clearing Examinations – Must pass the valuation examination conducted by IBBI for specific asset class",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Users
    },
    {
      id: 7,
      badge: "Documents Required",
      title: "Documents Required for Company Valuation",
      description: "Here is a structured overview of documents generally required when conducting a business valuation.",
      features: [
        "Basic Information – Promoter details, key personnel, MoA, AoA, Prospectus, Financial statements (3 years)",
        "Valuation Engagement – Copy of engagement letter between valuer and company",
        "Previous Valuations – Copy of previous valuation report (if available)",
        "Assumptions & Limiting Conditions – Written assumptions and limitations encountered",
        "Understanding of Value Drivers – Market/industry analysis, company-specific data affecting value",
        "Valuation Methodology – Documents justifying chosen approach with supporting rationale",
        "Basis of Valuation – Specific assumptions (going concern, liquidation) used",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1568234928966-359c35dd8327?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FolderOpen
    },
    {
      id: 8,
      badge: "Our Process",
      title: "Process of Company Valuation",
      description: "The business valuation process involves a structured approach to determining a company's fair market value.",
      features: [
        "Step 1: Define the Purpose – Identify reason for valuation (fundraising, merger, acquisition, litigation, tax reporting)",
        "Step 2: Establish Valuation Basis – Determine premise of value (going concern or liquidation) and standard of value",
        "Step 3: Collect Relevant Data – Gather financial statements, contracts, leases, IP assets, agreements, legal history",
        "Step 4: Review Financial History – Analyse past performance, growth trends, revenue sources, cost structure, debt position",
        "Step 5: Apply Valuation Methodology – Choose appropriate approach (Asset-Based, Market-Based, or DCF)",
        "Step 6: Final Valuation Conclusion – Document in formal report with methodology, assumptions, and rationale",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Settings
    },
    {
      id: 9,
      badge: "Why Choose Us",
      title: "Expert Valuation Services",
      description: "Company valuation is essential not just for determining share value but also for strategic decision-making. We offer end-to-end business valuation services ensuring accurate, compliant, and reliable outcomes.",
      features: [
        "Expert-led valuations aligned with regulatory requirements",
        "Valuation support for startups, SMEs, and large enterprises",
        "Globally accepted methodologies (DCF, Market, Asset-Based)",
        "Full compliance with Companies Act, IBC, SEBI, and Income Tax Act",
        "End-to-end service from advisory to final valuation report",
        "Tailored valuations for fundraising, M&A, and strategic planning",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: CheckCircle
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
                <Image src={Avatar1} alt="Avatar1" className="w-[32px]"  />
                <Image src={Avatar2} alt="Avatar2" className="w-[32px] ml-[-8px]"  />
                <Image src={Avatar3} alt="Avatar3" className="w-[32px] ml-[-8px]"  />
                <Image src={Avatar4} alt="Avatar4" className="w-[32px] ml-[-8px]"  />
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-2 sm:mb-3">Our Valuation Services</h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">Professional valuations for every business need</p>
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

export default ValuationCertificate;
