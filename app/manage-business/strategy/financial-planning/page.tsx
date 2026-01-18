"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import {
    Check,
    ArrowRight,
    UserCheck,
    FileText,
    Shield,
    Award,
    Scale,
    ClipboardCheck,
    Handshake,
    BookOpen,
    Target,
    Clock,
    Lock,
    Users,
    Briefcase,
    FileCheck,
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import Avatar1 from "@/assets/images/avatar-1.webp";
import Avatar2 from "@/assets/images/avatar-2.webp";
import Avatar3 from "@/assets/images/avatar-3.webp";
import Avatar4 from "@/assets/images/avatar-4.webp";

const FinancialPlanningPage = () => {
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
        title: "Financial Strategy and Planning Services",
        description:
            "Financial Strategy and Planning involves designing a clear financial roadmap that aligns business objectives with sustainable growth, capital efficiency, and investor readiness. We help startups and SMEs develop forward-looking strategies that strengthen their financial foundation, optimise fund usage, and prepare them for funding and expansion. Our approach combines budgeting, forecasting, and scenario analysis—delivered with precision through strategic oversight and data-backed planning.",
        ctaText: "Consultation By Expert",
        ctaLink: "/contact",
        subText: "Ensuring your financial strategy is not just compliant, but agile, measurable, and built for long-term value creation.",
    };

    const introContent = {
        badge: "Overview",
        badgeIcon: UserCheck,
        title: "Overview of Financial Strategy and Planning",
        subtitle: undefined,
        description:
            "Businesses often struggle not because they lack ambition, but because they lack a structured financial strategy to execute that ambition. Whether you're navigating funding, scaling, or stabilising operations, a proactive financial strategy offers the clarity and control necessary to make confident decisions. Financial planning includes: Translating business goals into quantifiable targets; Aligning cash flow with operational demands; Identifying capital gaps and funding opportunities; Preparing for market, regulatory, or investor-driven changes; Making investment decisions with measurable ROI.",
        features: [
            "Long-term and short-term financial planning",
            "Budget formulation and cost allocation",
            "Revenue modeling and scalability analysis",
            "Capital structure planning and funding strategy",
            "Goal-based planning for expansion, hiring, and R&D",
            "Risk analysis and mitigation planning",
            "Strategic use of surplus funds and capital reserves",
            "Financial metrics and KPIs dashboarding",
            "Alignment with investor, lender, and grant expectations",
        ],
        image1:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080",
        image2:
            "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080",
    };

    const scrollSections = [
        {
            id: 1,
            badge: "Importance of Financial Strategy and Planning",
            title: "Importance of Financial Strategy and Planning",
            description:
                "Financial strategy and planning is essential for capital efficiency, investor preparedness, goal-driven execution, fundraising alignment, scenario readiness, and sustainable growth.",
            features: [
                "Capital Efficiency – Optimises fund usage across departments, projects, and growth stages",
                "Investor Preparedness – Builds trust through structured planning, target-driven performance, and accountability",
                "Goal-Driven Execution – Links financial resources with business milestones and measurable KPIs",
                "Fundraising Alignment – Determines ideal capital mix (equity/debt/grants) and timing for external funding",
                "Scenario Readiness – Models best-case, base-case, and worst-case projections for agile decision-making",
                "Sustainable Growth – Prevents over-expansion and supports consistent, margin-positive growth",
            ],
            imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: Target,
        },
        {
            id: 2,
            badge: "Key Focus Areas",
            title: "Key Focus Areas",
            description:
                "We focus on budgeting & forecasting, capital planning, profitability strategy, debt vs. equity planning, scenario planning, and milestone-based execution.",
            features: [
                "Budgeting & Forecasting – Annual and quarterly budgets aligned with business plans and KPIs",
                "Capital Planning – Structuring fund usage across operations, marketing, hiring, and expansion",
                "Profitability Strategy – Gross margin analysis, breakeven modeling, and pricing strategy",
                "Debt vs. Equity Planning – Choosing the optimal capital structure for your growth stage",
                "Scenario Planning – Projecting cash flows and P&L under various growth, cost, and funding assumptions",
                "Milestone-Based Execution – Tracking key business objectives against financial targets",
            ],
            imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
            imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "left" as const,
            hasOverlappingImages: true,
            icon: FileText,
        },
        {
            id: 3,
            badge: "Documents & Inputs Required",
            title: "Documents & Inputs Required",
            description:
                "We work with you to gather historical financials, business model, revenue streams, cost structure, expansion or fundraising plans, past budgets, current cash flow reports, HR, marketing, and operational forecasts, existing investor or board reporting templates, and your team's strategic and operational goals.",
            features: [
                "Historical financials (if available)",
                "Business model, revenue streams, and cost structure",
                "Expansion or fundraising plans",
                "Past budgets and current cash flow reports",
                "HR, marketing, and operational forecasts",
                "Existing investor or board reporting templates",
                "Team's strategic and operational goals",
            ],
            imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: Briefcase,
        },
        {
            id: 4,
            badge: "Our Process",
            title: "Our Process",
            description:
                "1. Business Understanding: Align with the founder's vision, business model, and operational dynamics. 2. Financial Baseline Analysis: Review current financials, cost structure, capital usage, and cash position. 3. Strategy Formulation: Define growth goals, funding strategy, and resource allocation models. 4. Financial Model Development: Build a 12–36 month roadmap including P&L, cash flow, balance sheet, and unit economics. 5. Review & Advisory: Regular review of strategy with founders and investors, adjustments as needed based on outcomes or funding.",
            features: [
                "Business Understanding",
                "Financial Baseline Analysis",
                "Strategy Formulation",
                "Financial Model Development",
                "Review & Advisory",
            ],
            imageUrl1: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
            imageUrl2: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "left" as const,
            hasOverlappingImages: true,
            icon: Users,
        },
        {
            id: 5,
            badge: "Best Suited For",
            title: "Best Suited For",
            description:
                "Our services are best suited for founders planning to raise capital within the next 6–12 months, MSMEs expanding into new geographies, verticals, or teams, businesses preparing for grant or subsidy-based funding, startups aiming to move from survival to scale stage, companies seeking clarity in budget vs. actuals tracking, and growth-stage firms needing data-driven board reporting.",
            features: [
                "Founders planning to raise capital within the next 6–12 months",
                "MSMEs expanding into new geographies, verticals, or teams",
                "Businesses preparing for grant or subsidy-based funding",
                "Startups aiming to move from survival to scale stage",
                "Companies seeking clarity in budget vs. actuals tracking",
                "Growth-stage firms needing data-driven board reporting",
            ],
            imageUrl1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: Award,
        },
        {
            id: 6,
            badge: "Why Choose Us for Financial Strategy and Planning?",
            title: "Why Choose Us for Financial Strategy and Planning?",
            description:
                "We provide founder-first, business-aligned strategic planning, sector-specific growth modeling and benchmarking, integration with cash flow, cost control, and fundraising support, and are trusted by investor-backed startups and bootstrapped businesses alike. Our strategic insights are backed by sound financial principles and real-world feasibility.",
            features: [
                "Founder-first, business-aligned strategic planning",
                "Sector-specific growth modeling and benchmarking",
                "Integrated with cash flow, cost control, and fundraising support",
                "Trusted by investor-backed startups and bootstrapped businesses alike",
                "Strategic insights backed by sound financial principles and real-world feasibility",
            ],
            imageUrl1: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080",
            imageUrl2: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
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
                        className={`flex flex-col justify-center space-y-4 sm:space-y-6 transition-all duration-700 ease-out ${isEven ? "md:order-2" : ""
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
                        <Link href="/contact" className="w-fit">
                            <button className="mt-4 sm:mt-6 group px-5 sm:px-7 py-3 sm:py-3.5 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center gap-2 w-fit hover:shadow-lg active:scale-95 text-sm sm:text-base">
                                Learn More{" "}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>
                    <div
                        className={`${isEven ? "md:order-1" : ""
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
                                <Image src={Avatar1} alt="Avatar1" className="w-[32px]" />
                                <Image src={Avatar2} alt="Avatar2" className="w-[32px] ml-[-8px]" />
                                <Image src={Avatar3} alt="Avatar3" className="w-[32px] ml-[-8px]" />
                                <Image src={Avatar4} alt="Avatar4" className="w-[32px] ml-[-8px]" />
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
                            <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl opacity-20 blur-3xl animate-pulse" />
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
                        Our {heroContent.title} Services
                    </h1>
                    <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">
                        Complete HR documentation from entry to exit
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

export default FinancialPlanningPage;
