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

const TaxPlanningPage = () => {
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
        title: "Tax Planning and Investment Advisory Services",
        description: "Tax Planning and Investment Advisory is essential for businesses aiming to optimise their tax liabilities while building long-term capital resilience. We offer structured tax strategies and smart investment planning that not only ensure compliance but also unlock savings, improve liquidity, and enhance return on surplus capital. Our solutions are integrated into your financial operations—enabling proactive, year-round tax efficiency, rather than last-minute decisions.",
        ctaText: "Consultation By Expert",
        ctaLink: "/contact",
        subText: "We ensure that your tax outflows are minimised legally, and investments are aligned with your business cash flow and risk profile.",
    };

    const introContent = {
        badge: "Tax Planning",
        badgeIcon: Scale,
        title: "Overview of Tax Planning and Investment Advisory",
        subtitle: undefined,
        description: "Tax planning is not just about saving taxes—it's about doing it in a compliant, predictable, and strategically aligned manner. Similarly, business investments must balance safety, liquidity, and returns in line with operational and growth needs. With our advisory, founders and finance teams gain structured tax and investment insights embedded into financial decision-making, with monthly or quarterly reviews to adapt to changing business dynamics.",
        features: [
            "Direct and indirect tax planning",
            "Strategic deductions under applicable sections (80C, 35, 10AA, etc.)",
            "Advance tax calculation and quarterly payment tracking",
            "Investment planning for tax efficiency and surplus deployment",
            "TDS management and reconciliations",
            "Advisory on depreciation, carry-forward losses, and MAT",
            "Tax-saving strategies for founders and directors",
            "Tax implications of funding rounds and ESOPs",
            "Coordination with CAs and tax consultants during audits"
        ],
        image1: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1080",
        image2: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&q=80&w=1080",
    };

    const scrollSections = [
        {
            id: 1,
            badge: "Why Strategic Tax Planning & Investment Advisory is Critical",
            title: "Why Strategic Tax Planning & Investment Advisory is Critical",
            description: "Strategic tax planning and investment advisory is critical for optimizing tax liability, enhancing cash retention, and supporting business growth.",
            features: [
                "Optimise Tax Liability: Reduces effective tax outgo while remaining fully compliant",
                "Enhance Cash Retention: Delays or reduces payouts, improving liquidity",
                "Plan Surplus Deployment: Aligns investment decisions with business needs and return goals",
                "Support Growth Plans: Frees capital for marketing, hiring, or expansion",
                "Investor-Ready Compliance: Avoids surprises during due diligence or board-level reviews",
                "Avoid Penalties: Ensures timely payment and accurate declarations of tax dues"
            ],
            imageUrl1: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?ixid=M3w5NjA2fDB8MHxzZWFyY2h8M3x8dGF4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: FileCheck,
        },
        {
            id: 2,
            badge: "Key Focus Areas",
            title: "Key Focus Areas",
            description: "Our key focus areas cover all aspects of tax and investment planning for businesses and founders.",
            features: [
                "Income Tax Strategy: Planning for corporate income tax, advance tax, and rebate eligibility",
                "TDS & GST Compliance: Planning for deductibles, credits, and returns under TDS/GST laws",
                "Founder/Promoter Taxation: Structuring compensation, ESOPs, and capital gains efficiently",
                "Section-Wise Deductions: Claiming allowable deductions under applicable tax sections",
                "Capital Gains Advisory: Structuring asset sales, equity transfers, and property gains",
                "Investment Planning: Identifying safe, liquid, and high-yield avenues for business surplus"
            ],
            imageUrl1: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&q=80&w=1080",
            imageUrl2: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "left" as const,
            hasOverlappingImages: true,
            icon: Award,
        },
        {
            id: 3,
            badge: "Documents Required",
            title: "Documents Required for Tax Planning & Investment Advisory",
            description: "All client data is handled with strict confidentiality through secure digital infrastructure.",
            features: [
                "Previous year's ITR and tax audit reports",
                "GST, TDS, and advance tax challans",
                "Balance sheet, P&L, and fixed asset register",
                "Details of investments and depreciation schedules",
                "Payroll structure and employee benefit details",
                "Notices (if any) from tax authorities",
                "Capital gains or dividend income records",
                "ESOP, share allotment, and funding documents (if applicable)"
            ],
            imageUrl1: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: FileText,
        },
        {
            id: 4,
            badge: "Our Process",
            title: "Our Process",
            description: "Our process ensures a thorough, compliant, and strategic approach to tax planning and investment advisory.",
            features: [
                "Review of Current Tax Position: Evaluate tax returns, past planning strategies, and compliance status.",
                "Identify Planning Opportunities: Detect gaps, missed deductions, and under-optimised areas.",
                "Design Tax Strategy: Propose changes to structure income, deductions, or investments better.",
                "Quarterly Advisory & Monitoring: Track advance tax, file timely returns, and adapt strategy if financials shift.",
                "Investment Recommendations: Suggest surplus capital deployment options based on liquidity, tenure, and yield."
            ],
            imageUrl1: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&q=80&w=1080",
            imageUrl2: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "left" as const,
            hasOverlappingImages: true,
            icon: ClipboardCheck,
        },
        {
            id: 5,
            badge: "Best Suited For",
            title: "Best Suited For",
            description: "Our services are best suited for startups, MSMEs, founder-led companies, and businesses preparing for due diligence or seeking future tax planning visibility.",
            features: [
                "Startups looking to reduce early-stage tax burden legally",
                "MSMEs managing inconsistent cash flows or profits",
                "Founder-led companies dealing with ESOPs or capital gains",
                "Businesses preparing for due diligence, audits, or investor entry",
                "Teams seeking visibility into future tax liabilities and planning buffers"
            ],
            imageUrl1: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?ixid=M3w5NjA2fDB8MHxzZWFyY2h8M3x8dGF4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: Users,
        },
        {
            id: 6,
            badge: "Why Choose Us",
            title: "Why Choose Us for Tax Planning & Investment Advisory?",
            description: "We transform your tax and investment planning from reactive to strategic—reducing cost, unlocking value, and ensuring compliance.",
            features: [
                "Integrated approach: tax, compliance, and financial strategy under one roof",
                "Legally sound tax-saving strategies aligned with operational goals",
                "Investment planning that balances liquidity, returns, and business growth",
                "Ongoing monitoring—not just year-end panic",
                "Support across ITRs, GST, TDS, and capital structure implications"
            ],
            imageUrl1: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: Award,
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
                        className={`flex flex-col justify-center space-y-4 sm:space-y-6 transition-all duration-700 ease-out ${isEven ? "md:order-2" : ""}`}
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

export default TaxPlanningPage;
