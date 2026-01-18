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

const CashFlowManagementPage = () => {
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
        title: "Cash Flow Management Services",
        description:
            "Cash Flow Management is the process of tracking, forecasting, and optimising the inflow and outflow of cash to ensure a business maintains healthy liquidity and operational stability. We provide structured cash flow solutions that enable startups and growing businesses to maintain control over working capital, avoid cash shortfalls, and make informed financial decisions. As part of our Virtual CFO Services, we help companies align their revenue cycles, expense planning, and funding timelines—ensuring business continuity and scalability. Our services offer clear visibility into cash positions and upcoming obligations, supporting data-driven decisions at every stage.",
        ctaText: "Consultation By Expert",
        ctaLink: "/contact",
        subText: "Delivering clarity, control, and confidence in your company's cash position—ensuring your financial engine runs smoothly, every day.",
    };

    const introContent = {
        badge: "Overview",
        badgeIcon: UserCheck,
        title: "Overview of Cash Flow Management",
        subtitle: undefined,
        description:
            "Cash flow is the lifeblood of a business. Poor cash management—not lack of profit—is a leading cause of startup failures. Even profitable companies can experience liquidity crises if cash inflows and outflows are not well aligned. Effective cash flow management involves: Monitoring receivables and payables; Planning expense schedules; Tracking collections and disbursements; Forecasting future liquidity needs; Managing reserves, credit lines, or fund deployment.",
        features: [
            "Cash flow forecasting (weekly, monthly, quarterly)",
            "Cash inflow and outflow tracking",
            "Working capital management",
            "Burn rate analysis and runway calculation",
            "Payment prioritisation and vendor management",
            "Fund flow statements and liquidity dashboards",
            "Scenario planning for revenue volatility or funding delays",
            "Alerts on cash deficits and fund requirement triggers",
            "Integration with financial projections and MIS reports",
        ],
        image1:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080",
        image2:
            "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080",
    };

    const scrollSections = [
        {
            id: 1,
            badge: "Why Cash Flow Management is Crucial",
            title: "Why Cash Flow Management is Crucial",
            description:
                "Cash flow management is crucial for maintaining liquidity, avoiding overdrafts or delays, enabling strategic spending, extending runway, preparing for downturns, and demonstrating funding readiness.",
            features: [
                "Maintain Liquidity – Ensures the business can meet its short-term obligations and avoid cash crunches",
                "Avoid Overdrafts or Delays – Prevents missed payments to employees, vendors, or statutory authorities",
                "Strategic Spending – Aligns marketing, hiring, and growth with available cash resources",
                "Extend Runway – Controls burn rate and preserves cash during pre-revenue or funding stages",
                "Prepare for Downturns – Builds contingency plans to handle seasonal dips or unexpected disruptions",
                "Funding Readiness – Demonstrates financial discipline to banks and investors",
            ],
            imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: Target,
        },
        {
            id: 2,
            badge: "Documents Required for Cash Flow Management Services",
            title: "Documents Required for Cash Flow Management Services",
            description:
                "We analyse the following data to build cash flow models tailored to your business cycle and revenue structure.",
            features: [
                "Bank statements (last 6–12 months)",
                "Sales and receivables reports",
                "Purchase and payables data",
                "Payroll and operational expense schedules",
                "Loan/EMI/interest obligations",
                "Investment or grant inflows",
                "Fundraising timelines (if any)",
                "Financial projections or existing MIS reports",
            ],
            imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
            imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "left" as const,
            hasOverlappingImages: true,
            icon: FileText,
        },
        {
            id: 3,
            badge: "Typical Outputs and Reports Delivered",
            title: "Typical Outputs and Reports Delivered",
            description:
                "We deliver a range of reports and outputs to provide actionable insights into your cash flow position.",
            features: [
                "Cash Flow Forecast – Projected inflows and outflows for next 3–12 months",
                "Burn Rate Report – Monthly net cash usage and available months of runway",
                "Accounts Receivable Aging – List of overdue and upcoming customer payments",
                "Payables Schedule – Breakdown of vendor, tax, loan, and salary dues",
                "Working Capital Summary – Gap between current assets and current liabilities",
                "Scenario Analysis – Impact of optimistic, base, and worst-case revenue assumptions",
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
                "1. Initial Business Review: Understand revenue model, expense patterns, and payment cycles. 2. Data Collection & Integration: Sync with accounting, banking, or invoicing platforms (or manual formats). 3. Forecasting & Modeling: Prepare dynamic cash flow models and liquidity plans based on current and projected data. 4. Monitoring & Alerts: Periodic updates with triggers for negative cash flow, surplus deployment, or funding needs. 5. Review & Advisory: Monthly/quarterly review sessions with strategic suggestions on spend optimization and fund planning.",
            features: [
                "Initial Business Review",
                "Data Collection & Integration",
                "Forecasting & Modeling",
                "Monitoring & Alerts",
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
            badge: "Ideal for Businesses That Are",
            title: "Ideal for Businesses That Are",
            description:
                "Our services are ideal for businesses facing inconsistent or delayed customer payments, planning to raise funds or apply for a loan, running on investor capital and seeking burn control, experiencing seasonal demand or uneven cash cycles, scaling up and hiring aggressively, or managing multiple vendors or cost centers.",
            features: [
                "Facing inconsistent or delayed customer payments",
                "Planning to raise funds or apply for a loan",
                "Running on investor capital and seeking burn control",
                "Experiencing seasonal demand or uneven cash cycles",
                "Scaling up and hiring aggressively",
                "Managing multiple vendors or cost centers",
            ],
            imageUrl1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: Award,
        },
        {
            id: 6,
            badge: "Why Choose Us for Cash Flow Management?",
            title: "Why Choose Us for Cash Flow Management?",
            description:
                "We provide integrated financial projections, MIS, and fundraising strategy; real-time visibility into business liquidity health; custom dashboards and actionable reports; sector-specific insights into revenue seasonality and vendor management; and enable better decision-making and investor preparedness.",
            features: [
                "Integrated with financial projections, MIS, and fundraising strategy",
                "Real-time visibility into business liquidity health",
                "Custom dashboards and actionable reports",
                "Sector-specific insights into revenue seasonality and vendor management",
                "Enables better decision-making and investor preparedness",
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
                
                <div className="space-y-16 sm:space-y-24 lg:space-y-32 pb-12 sm:pb-20">
                    {scrollSections.map((section, index) => (
                        <ServiceSection key={section.id} section={section} index={index} />
                    ))}
                </div>
            </div>
        </>
    ); 
};

export default CashFlowManagementPage;
