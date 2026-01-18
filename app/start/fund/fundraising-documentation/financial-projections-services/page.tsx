"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  BarChart3,
  TrendingUp,
  Calculator,
  FileText,
  PieChart,
  Target,
  Award,
  CheckCircle,
  LineChart,
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import Avatar1 from "@/assets/images/avatar-1.webp";
import Avatar2 from "@/assets/images/avatar-2.webp";
import Avatar3 from "@/assets/images/avatar-3.webp";
import Avatar4 from "@/assets/images/avatar-4.webp";

const FinancialProjections = () => {
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
    title: "Financial Projections Services",
    description:
      "Financial projections are forward-looking estimates of a company's income, expenses, and growth potential over a defined period—typically 3 to 5 years. These projections are vital for fundraising, business planning, investor communication, loan applications, and strategic decision-making.",
    ctaText: "Get Financial Projections",
    ctaLink: "/contact",
    subText: "Professional Financial Models in 5-7 Working Days",
  };

  const introContent = {
    badge: "Financial Projections",
    badgeIcon: BarChart3,
    title: "Customised, Data-Driven Financial Models",
    subtitle: "Grounded, defensible, and aligned with your business logic",
    description:
      "We provide customised, data-driven financial projection models that reflect your industry dynamics, business model, and funding goals. Our models are designed to instill confidence in investors, lenders, and internal stakeholders alike.",
    features: [
      "3–5 Year Financial Forecasting",
      "Customised Revenue and Cost Modeling",
      "Projected Profit & Loss (P&L) Statements",
      "Balance Sheets and Cash Flow Forecasts",
      "Scenario Planning (Base Case, Best Case, Worst Case)",
      "Unit Economics, Burn Rate, and Runway Calculations",
      "Assumptions Justification and Sensitivity Analysis",
      "Graphical Dashboards for Pitch Decks and Investor Reports",
      "Sector-Specific Templates (Tech, SaaS, D2C, Services, Manufacturing, etc.)",
    ],
    image1:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
    image2:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Overview",
      title: "What are Financial Projections?",
      description:
        "Financial projections provide a structured estimate of a company's financial future, helping founders and decision-makers understand what the business might look like in terms of revenues, expenses, capital needs, profitability, and cash requirements over time.",
      features: [
        "Fundraising (equity or debt)",
        "Internal budgeting and cash flow planning",
        "Strategic expansion and hiring plans",
        "Loan and grant applications",
        "Performance measurement and course correction",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Target,
    },
    {
      id: 2,
      badge: "Importance",
      title: "Why Financial Projections Matter",
      description:
        "Well-prepared financial projections are essential for securing funding, strategic planning, and demonstrating business viability to stakeholders.",
      features: [
        "Investor Confidence - Demonstrates revenue potential, unit economics, and clarity in strategy",
        "Strategic Planning - Enables founders to plan hiring, expansion, marketing, and R&D",
        "Loan Eligibility - Financial institutions require forward-looking statements for credit appraisal",
        "Cash Flow Management - Projects inflow and outflow of cash to avoid liquidity issues",
        "Break-Even Analysis - Identifies when the business is expected to become profitable",
        "Valuation Support - Provides financial justification for business valuation",
        "Investor Reporting - Forms the basis for regular investor updates and performance tracking",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: TrendingUp,
    },
    {
      id: 3,
      badge: "Key Components - Part 1",
      title: "Core Elements of Financial Projections",
      description:
        "A comprehensive financial projection model includes multiple components that paint a complete picture of your business finances.",
      features: [
        "Revenue Forecast - Monthly/yearly projection based on pricing, sales volume, and market penetration",
        "Cost of Goods Sold (COGS) - Direct costs associated with delivering the product or service",
        "Operating Expenses (OPEX) - Overheads including marketing, salaries, rent, utilities, and admin costs",
        "EBITDA and Net Profit - Earnings before interest, taxes, depreciation, and amortisation",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Calculator,
    },
    {
      id: 4,
      badge: "Key Components - Part 2",
      title: "Additional Financial Metrics",
      description:
        "Beyond basic projections, these metrics provide deeper insights into your business health and funding needs.",
      features: [
        "Cash Flow Statement - Tracks when cash is expected to be received and spent",
        "Balance Sheet Forecast - Estimates future assets, liabilities, and equity",
        "Burn Rate - Monthly cash outflow, especially for early-stage startups",
        "Runway - Time until the business runs out of cash at current burn rate",
        "Capital Requirements - Total funds needed to meet operational and strategic objectives",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: PieChart,
    },
    {
      id: 5,
      badge: "Documents Required",
      title: "What We Need From You",
      description:
        "Gather these documents and information to ensure accurate and comprehensive financial projections.",
      features: [
        "Business plan or pitch deck",
        "Historical financials (if available)",
        "Details of products/services and pricing",
        "Sales and marketing strategy",
        "Cost structure and vendor agreements",
        "HR plan with team salary estimates",
        "Technology and infrastructure costs",
        "Fundraising requirements and intended use of funds",
        "Sector benchmarks or assumptions (optional but useful)",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 6,
      badge: "Our Process",
      title: "How We Build Your Financial Model",
      description:
        "We follow a structured and collaborative approach to building financial projections that are grounded, defendable, and investor-ready. Delivery Timeline: 5–7 working days.",
      features: [
        "Step 1: Requirement Assessment - Understand business model, revenue streams, cost centers, and funding needs",
        "Step 2: Assumptions Validation - Develop logical assumptions around pricing, CAC, churn, ARPU, and conversion rates",
        "Step 3: Model Development - Prepare detailed Excel-based model covering P&L, cash flow, balance sheet, and KPIs",
        "Step 4: Review and Feedback - Share preliminary models with client for inputs and refinements",
        "Step 5: Finalisation - Deliver investor-ready projections with clear charts, footnotes, and scenario summaries",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: LineChart,
    },
    {
      id: 7,
      badge: "Use Cases",
      title: "When Do You Need Financial Projections?",
      description:
        "Financial projections are essential for various business scenarios and funding requirements.",
      features: [
        "Equity fundraising from angel investors or VCs",
        "Bank loan or MSME scheme applications",
        "Application for government grants or subsidies",
        "Strategic expansion into new markets or product lines",
        "Internal board reporting and performance reviews",
        "Mergers, acquisitions, or valuation events",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1568234928966-359c35dd8327?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Award,
    },
    {
      id: 8,
      badge: "Our Approach",
      title: "Practical and Precise Projections",
      description:
        "Unlike over-optimistic or template-based projections, we focus on grounded, defensible forecasting with realistic growth paths, structured outputs, and clean visuals for pitch decks.",
      features: [
        "Assumptions sheet with clear documentation",
        "Dynamic dashboards for visual representation",
        "Monthly/quarterly/yearly views for flexibility",
        "Editable formats for future updates",
        "Export-ready graphs for investor decks",
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
      badge: "Why Choose Us",
      title: "Expert Financial Projection Services",
      description:
        "We help you build credibility with numbers that speak your vision—accurately, strategically, and convincingly.",
      features: [
        "Customised projections based on your industry and business model",
        "Realistic assumptions with market benchmarking",
        "Designed for investor scrutiny and due diligence",
        "Clarity in unit economics, CAC vs. LTV, margins, and funding runway",
        "Optional integration with valuation, due diligence, and pitch deck services",
        "Confidential, fast, and professionally delivered",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Target,
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
                  className="flex items-center gap-3 transition-all duration-500"
                  style={{
                    transitionDelay: `${idx * 100 + 300}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateX(0)"
                      : "translateX(-20px)",
                  }}
                >
                  <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-slate-700 text-sm lg:text-base">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            <button className="mt-4 sm:mt-6 group px-5 sm:px-7 py-3 sm:py-3.5 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center gap-2 w-fit hover:shadow-lg active:scale-95 text-sm sm:text-base">
              Learn More{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
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
              <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl opacity-20 blur-3xl animate-pulse" />
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
            Our Financial Projection Services
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">
            Investor-ready financial models for your business
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

export default FinancialProjections;
