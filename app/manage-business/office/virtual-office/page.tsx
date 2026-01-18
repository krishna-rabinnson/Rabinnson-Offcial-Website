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

const VirtualOfficePage = () => {
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
        title: "Virtual Office",
        description:
            "An Employment Agreement is a legally binding contract that defines the terms and conditions of employment between an employer and an employee. It ensures clarity, protects both parties, and supports legal compliance throughout the employment lifecycle.",
        ctaText: "Get Started",
        ctaLink: "/start-generating-your-idea",
        subText: "Secure Your Workplace Relationships with Professionally Drafted Agreements",
    };

    const introContent = {
        badge: "Virtual Office",
        badgeIcon: UserCheck,
        title: "Overview of Virtual Office",
        subtitle: "Legally Binding Employment Contracts",
        description:
            "An Employment Agreement is a legally binding contract signed between an employer and an employee, clearly defining the rights, responsibilities, and obligations of both parties. It serves as a foundational document that governs the terms of employment in accordance with labour laws. This formal agreement outlines key aspects such as job role, compensation, working conditions, and termination clauses, ensuring transparency and legal enforceability.",
        features: [
            "Customised employment agreements to meet specific organisational requirements",
            "Expert consultation on employment laws, HR policies, and regulatory standards",
            "In-depth review and revision of existing employment contracts",
            "Professional assistance in incorporating dispute resolution mechanisms",
            "Ensuring full compliance with applicable labour laws and statutory regulations",
        ],
        image1:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080",
        image2:
            "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080",
    };

    const scrollSections = [
        {
            id: 1,
            badge: "When Needed",
            title: "When Is an Employment Agreement Necessary?",
            description:
                "While appointment letters are commonly used for regular hiring, a formal employment agreement becomes essential in specific scenarios where legal clarity, protection, and structured terms are critical.",
            features: [
                "Senior Management Employees with access to confidential business information",
                "Short-Term Contract Employees for temporary roles with specific deliverables",
                "High-level positions playing a strategic role in the organisation",
                "Roles requiring detailed clarity on responsibilities and duration",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: Target,
        },
        {
            id: 2,
            badge: "Contract Types",
            title: "Permanent & Fixed-Term Contracts",
            description:
                "Different employment scenarios require different types of contracts. Permanent Employment Contracts are for full-time or part-time employees hired indefinitely until termination, while Temporary or Fixed-Term Contracts are for hiring employees for a specific duration or project.",
            features: [
                "Permanent Employment Contract – Indefinite hiring until termination",
                "Temporary or Fixed-Term Contract – Specific duration or project",
                "Executive Employment Contract – Tailored for high-level executives",
                "Part-Time Employment Contract – Fewer hours with limited benefits",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
            imageUrl2:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "left" as const,
            hasOverlappingImages: true,
            icon: FileText,
        },
        {
            id: 3,
            badge: "Freelance & Consulting",
            title: "Freelance & Consultancy Agreements",
            description:
                "For project-based engagements and professional advisory services, specialised contracts ensure clear terms between parties. These include Freelance Contracts for short-term engagements and Consultancy Agreements for expert advice services.",
            features: [
                "Freelance Contract – Short-term or project-based engagements",
                "Independent Contractor Agreement – Third-party professionals",
                "Consultancy Agreement – Expert advice without full-time commitment",
                "Internship Agreement – Students gaining experience with learning goals",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: Briefcase,
        },
        {
            id: 4,
            badge: "Specialised Contracts",
            title: "Apprenticeship & Casual Employment",
            description:
                "Specialised employment scenarios require tailored agreements. Apprenticeship Agreements combine work with structured learning, while Casual Employment Contracts are for workers engaged on an as-needed basis without long-term commitment.",
            features: [
                "Zero-Hour Contract – No guaranteed hours, work when needed",
                "Casual Employment Contract – As-needed basis engagement",
                "Apprenticeship Agreement – Training with structured learning",
                "Seasonal roles and gig-based work arrangements",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
            imageUrl2:
                "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "left" as const,
            hasOverlappingImages: true,
            icon: Users,
        },
        {
            id: 5,
            badge: "Key Benefits",
            title: "Benefits of an Employment Agreement",
            description:
                "Employment agreements provide clarity on job responsibilities, compensation, benefits, and working conditions. They establish a formal, legally enforceable relationship that helps resolve disputes by referencing agreed-upon terms.",
            features: [
                "Clarity – Outlines responsibilities, compensation, and conditions",
                "Legal Protection – Enforceable relationship for dispute resolution",
                "Employee Rights – Documents entitlements like leave and benefits",
                "Confidentiality – Protects trade secrets and sensitive information",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: Award,
        },
        {
            id: 6,
            badge: "Protection Clauses",
            title: "Non-Compete & Termination Protection",
            description:
                "Critical protective clauses restrict employees from engaging in competitive activities or soliciting clients after leaving. Termination conditions specify notice periods, severance, and grounds for dismissal, ensuring fair procedures.",
            features: [
                "Non-Compete and Non-Solicitation restrictions post-employment",
                "Termination Conditions with notice periods and severance",
                "Intellectual Property Protection – Ownership of work created",
                "Labour Law Compliance – Aligned with Indian legal standards",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1080",
            imageUrl2:
                "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "left" as const,
            hasOverlappingImages: true,
            icon: Shield,
        },
        {
            id: 7,
            badge: "Dispute Resolution",
            title: "Stability and Dispute Resolution",
            description:
                "Employment agreements enable faster, cost-effective resolution of conflicts through arbitration or mediation clauses. They provide a stable framework protecting employees from abrupt changes in terms or conditions.",
            features: [
                "Dispute Resolution Mechanisms – Arbitration or mediation",
                "Stability and Security – Protection from abrupt changes",
                "Faster conflict resolution through agreed-upon procedures",
                "Cost-effective alternative to litigation",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1568234928966-359c35dd8327?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: Scale,
        },
        {
            id: 8,
            badge: "Main Clauses",
            title: "Essential Clauses in Employment Agreement",
            description:
                "A comprehensive employment agreement includes appointment terms, responsibilities, wages, termination conditions, and confidentiality provisions. These clauses define the complete employment relationship.",
            features: [
                "Appointment – Role, designation, and terms of employment",
                "Responsibilities – Duties, roles, and expectations",
                "Wages – Salary, incentives, bonuses, and payment frequency",
                "Termination – Notice periods, grounds, and severance",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1080",
            imageUrl2:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "left" as const,
            hasOverlappingImages: true,
            icon: BookOpen,
        },
        {
            id: 9,
            badge: "Additional Clauses",
            title: "Confidentiality & Data Protection Clauses",
            description:
                "Additional essential clauses cover incapacity provisions, confidentiality restrictions, data protection compliance, indemnification, non-compete clauses, and governing law specifications.",
            features: [
                "Incapacity – Provisions for disability or death",
                "Confidentiality – Restricts disclosure of information",
                "Data Protection – Compliance with privacy laws",
                "Indemnification – Accountability for losses caused",
                "Governing Law – Applicable legal jurisdiction",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: Lock,
        },
        {
            id: 10,
            badge: "Step 1",
            title: "Initial Consultation",
            description:
                "Engage our professionals to gather employment details and role requirements. We understand your specific organisational needs and the nature of the employment relationship to be documented.",
            features: [
                "Gather employment details and requirements",
                "Understand organisational needs",
                "Identify specific role requirements",
                "Assess compliance requirements",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
            imageUrl2:
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "left" as const,
            hasOverlappingImages: true,
            icon: ClipboardCheck,
        },
        {
            id: 11,
            badge: "Step 2",
            title: "Define Objectives & Draft Agreement",
            description:
                "Set goals for the agreement covering job role, compensation, confidentiality, termination, and more. We then create a legally sound, customised agreement with all essential clauses.",
            features: [
                "Define objectives for job role and compensation",
                "Set confidentiality and termination terms",
                "Create legally sound customised agreement",
                "Include all essential clauses",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: FileText,
        },
        {
            id: 12,
            badge: "Step 3",
            title: "Review, Revision & Finalisation",
            description:
                "Share the draft for feedback and incorporate necessary changes. Final agreement is prepared and delivered in print or digital format. Timeline: Typically completed within 3–4 working days.",
            features: [
                "Share draft for feedback from all parties",
                "Incorporate necessary revisions",
                "Final agreement in print or digital format",
                "Completed within 3–4 working days",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1080",
            imageUrl2:
                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "left" as const,
            hasOverlappingImages: true,
            icon: Clock,
        },
        {
            id: 13,
            badge: "Our Services",
            title: "Comprehensive Employment Agreement Services",
            description:
                "We offer comprehensive employment agreement services tailored to businesses of all sizes and sectors. From initial consultation to final drafting, our experts ensure your organisation remains legally sound and fully compliant.",
            features: [
                "Customised Agreement Drafting for your industry",
                "Expert Legal Consultation on Indian labour laws",
                "Review and Revision of Existing Contracts",
                "Confidentiality & Non-Disclosure Clauses drafting",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: FileCheck,
        },
        {
            id: 14,
            badge: "Why Choose Us",
            title: "Why Choose Us for Employment Agreements?",
            description:
                "By partnering with us, businesses can safeguard their operations, protect intellectual assets, and avoid the consequences of non-compliance. We deliver prompt, professional, and effective services so you can focus on scaling your business — risk-free.",
            features: [
                "Non-Compete & Non-Solicitation Clauses design",
                "Termination & Severance Structuring",
                "Compliance with Labour Regulations",
                "Prompt, professional, and effective services",
                "Focus on scaling your business risk-free",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1080",
            imageUrl2:
                "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
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

export default VirtualOfficePage;
