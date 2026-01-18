"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { 
  Check, ArrowRight, Receipt, FileSpreadsheet, Calculator, RefreshCw,
  Users, Building2, Home,  Landmark,
  FileText, Clock, AlertTriangle, Award, CheckCircle, Rocket
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import Avatar1 from '@/assets/images/avatar-1.webp';
import Avatar2 from '@/assets/images/avatar-2.webp';
import Avatar3 from '@/assets/images/avatar-3.webp';
import Avatar4 from '@/assets/images/avatar-4.webp';

const TDSWithholdingTax = () => {
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
    title: "TDS / Withholding Tax",
    description: "File TDS Returns Right, On Time, Every Time! Ensure flawless TDS returns – we handle the complexity, ensuring compliance and timely filing!",
    ctaText: "File TDS Now",
    ctaLink: "/contact",
    subText: "TDS Returns in 0-2 Days? Yes, It's That Easy!"
  };

  const introContent = {
    badge: "TDS Services",
    badgeIcon: Receipt,
    title: "TDS Return Eligibility: Are You Required?",
    subtitle: "Deducting TDS comes with the responsibility of filing returns",
    description: "Tax Deducted at Source (TDS) is a critical compliance requirement. Employers are required to deduct TDS on salaries paid to employees as per Section 192 of the Income Tax Act, 1961. We handle everything from quarterly return filing to certificate generation and refund claims, ensuring you never miss a deadline.",
    features: [
      "Employers Deducting TDS on Salaries",
      "Entities Deducting TDS on Non-Salary Payments",
      "Payers Making Payments to Non-Residents",
      "Individuals/HUFs Deducting TDS Without TAN",
      "Collectors of Tax at Source"
    ],
    image1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080"
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Eligibility",
      title: "TDS Return Eligibility: Are You Required?",
      description: "Deducting TDS comes with the responsibility of filing returns. Employers are required to deduct TDS on salaries paid to employees as per Section 192 of the Income Tax Act, 1961. Businesses deduct TDS on non-salary payments like interest, rent, and professional fees based on the relevant sections.",
      features: [
        "Employers Deducting TDS on Salaries (Section 192)",
        "Entities Deducting TDS on Non-Salary Payments",
        "Payers Making Payments to Non-Residents (Section 195)",
        "Individuals/HUFs Deducting TDS Without TAN"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Users
    },
    {
      id: 2,
      badge: "More Eligibility",
      title: "Additional TDS Eligibility Criteria",
      description: "As per section 194IA, 194IB and 194M, Individuals or HUFs not subject to tax audit must deduct TDS on payments like rent, property sales, and contractor fees exceeding set thresholds. Sellers and e-commerce operators are required to collect TCS on specified goods or transactions under Section 206C.",
      features: [
        "Section 194IA - Property Sales TDS",
        "Section 194IB - Rent TDS",
        "Section 194M - Contractor/Professional Fees",
        "Section 206C - TCS on Specified Transactions"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Home
    },
    {
      id: 3,
      badge: "Government & Authorities",
      title: "Government Entities and Local Authorities",
      description: "Government and local authorities are required to deduct TDS on various payments, including contracts, salaries, and interest. Collectors of Tax at Source on specified transactions must also comply with TDS filing requirements.",
      features: [
        "Government Entities TDS Deduction",
        "Local Authorities Compliance",
        "Contract Payment TDS",
        "Interest & Salary TDS"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Landmark
    },
    {
      id: 4,
      badge: "5-Step Process",
      title: "Quick TDS Filing in 5 Steps!",
      description: "Smooth TDS filing—follow these steps for perfect compliance! From speaking to our experts to timely submission, we ensure your TDS returns are filed accurately and on time. Don't wait—take control of your TDS filing with expert guidance.",
      features: [
        "Step 1: Speak to Our Experts",
        "Step 2: Submit Your Details & Documents",
        "Step 3: Preparing TDS Return",
        "Step 4: Make TDS Liability Payment"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Clock
    },
    {
      id: 5,
      badge: "Timely Submission",
      title: "TDS Return Timely Submission",
      description: "Complete your TDS filing in just 5 simple steps! Step 5 ensures timely submission of your TDS returns. TDS Returns in 0-2 Days? Yes, It's That Easy! Take control of your TDS filing with expert guidance and complete it in no time.",
      features: [
        "Step 5: TDS Return Timely Submission",
        "0-2 Days Completion Time",
        "Expert Guidance Throughout",
        "Complete Compliance Assurance"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: CheckCircle
    },
    {
      id: 6,
      badge: "Documents Required",
      title: "Quick Checklist for TDS Returns Filing",
      description: "Be proactive—Prepare these documents for seamless TDS filing. You'll need TAN and PAN details of the deductor, PAN of each deductee, TDS Payments Challan, Deduction Details, Prior TDS Certificates (if any), and Prior TDS Return Acknowledgment (if any).",
      features: [
        "TAN and PAN details of the deductor",
        "PAN of each deductee",
        "TDS Payments Challan",
        "Prior TDS Certificates & Acknowledgments"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: FileText
    },
    {
      id: 7,
      badge: "Deliverables",
      title: "TDS Filing Deliverables for You",
      description: "Explore our expert TDS filing deliverables, ensuring fast, accurate, and effortless compliance. We provide organized data in template, hassle-free return preparation, timely return submission, issuance of TDS certificates, no cost rectification, and post submission support.",
      features: [
        "Organized Data in Template",
        "Hassle Free Return Preparation",
        "Timely Return Submission",
        "Issuance of TDS Certificates"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1568234928966-359c35dd8327?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Award
    },
    {
      id: 8,
      badge: "More Deliverables",
      title: "Additional TDS Filing Support",
      description: "Our comprehensive TDS filing services include no cost rectification if any errors are found, and complete post submission support. We ensure your TDS compliance is handled professionally from start to finish.",
      features: [
        "No Cost Rectification (if any)",
        "Post Submission Support",
        "Professional Compliance Handling",
        "End-to-End Filing Support"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: RefreshCw
    },
    {
      id: 9,
      badge: "TDS Return Types",
      title: "Types of TDS Return Filing Online",
      description: "Familiarize yourself with TDS return categories for accurate compliance. Form 24Q for TDS on Salaries (Quarterly, due 30 days after quarter-end). Form 26Q for TDS on Non-Salary Payments (Quarterly). Form 27Q for TDS on Payments to Non-Residents (Quarterly).",
      features: [
        "Form 24Q - TDS on Salaries (Quarterly)",
        "Form 26Q - Non-Salary Payments (Quarterly)",
        "Form 27Q - Payments to Non-Residents",
        "Form 27EQ - Tax Collected at Source (TCS)"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FileSpreadsheet
    },
    {
      id: 10,
      badge: "More Return Types",
      title: "Transaction-Based TDS Returns",
      description: "Form 26QB for TDS on Sale of Property (Transaction-Based, due 30 days from transaction month end). Form 26QC for TDS on Rent (Monthly, due 30 days from deduction month end). Form 26QD for TDS on Contractors/Professionals (Monthly).",
      features: [
        "Form 26QB - Sale of Property (Transaction-Based)",
        "Form 26QC - TDS on Rent (Monthly)",
        "Form 26QD - Contractors/Professionals (Monthly)",
        "Due: 30 days from month/transaction end"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Calculator
    },
    {
      id: 11,
      badge: "Penalties",
      title: "Avoid Penalties: Common TDS Mistakes",
      description: "Understand the consequences of TDS errors: penalties, interest, and legal risks. Late Filing Fee is ₹200 per day (maximum: TDS amount). Interest for Late Deduction is 1% per month. Interest for Late Deposit is 1.5% per month. Penalty for Late Filing ranges from ₹10,000 to ₹1,00,000.",
      features: [
        "Late Filing Fee: ₹200/day (max: TDS amount)",
        "Interest for Late Deduction: 1% per month",
        "Interest for Late Deposit: 1.5% per month",
        "Penalty for Late Filing: ₹10,000 to ₹1,00,000"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: AlertTriangle
    },
    {
      id: 12,
      badge: "More Penalties",
      title: "Additional Consequences of Non-Compliance",
      description: "Expense Disallowance of 30%/100% of expense may apply. Late issuance of TDS Certificate (15 days from due date of filing TDS Return) attracts penalty of ₹500 per day. Avoid these penalties by filing your TDS returns on time with our expert assistance.",
      features: [
        "Expense Disallowance: 30%/100% of expense",
        "Late TDS Certificate: ₹500 per day",
        "15 days deadline from filing due date",
        "Avoid penalties with timely filing"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Building2
    },
    {
      id: 13,
      badge: "Why Choose Us",
      title: "Expert TDS Filing Services",
      description: "Don't wait—take control of your TDS filing with expert guidance and complete it in no time! Our team ensures flawless TDS returns with accuracy, compliance, and timely filing. TDS Returns in 0-2 Days with complete professional support.",
      features: [
        "0-2 Days Completion Time",
        "Expert Guidance & Support",
        "Flawless Returns with Accuracy",
        "Complete Compliance Assurance"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-2 sm:mb-3">Our TDS Filing Services</h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">Complete TDS compliance from filing to certificates</p>
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

export default TDSWithholdingTax;
