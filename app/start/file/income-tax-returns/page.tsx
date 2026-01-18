"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { 
  Check, ArrowRight, FileText, Calculator, Shield, TrendingUp,
  Clock, Users, Award,
  Briefcase, Star, Rocket, Building2, CheckCircle, Globe
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import Avatar1 from '@/assets/images/avatar-1.webp';
import Avatar2 from '@/assets/images/avatar-2.webp';
import Avatar3 from '@/assets/images/avatar-3.webp';
import Avatar4 from '@/assets/images/avatar-4.webp';

const IncomeTaxReturns = () => {
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
    title: "Income Tax Return Filing",
    description: "Don't leave the fate of your Income Tax Return in the hands of a processing machine or a data operator. Take expert consultation to ensure maximum savings and accuracy in return filing. Choose the right ITR Plan based on your income source and our specialists handle the rest.",
    ctaText: "File ITR Now",
    ctaLink: "/contact",
    subText: "File before 5th August & Avail Flat 10% Off"
  };

  const introContent = {
    badge: "ITR Filing Services",
    badgeIcon: FileText,
    title: "Advantages of Income Tax Return Filing",
    subtitle: "Expert consultation for maximum savings and accuracy",
    description: "Filing your Income Tax Return on time ensures you avoid paying additional interest & late fees up to Rs 5,000. ITR acts as proof of your declaration to the government regarding income earned by you during the previous year and forms part of your financial directory.",
    features: [
      "Avoid Late Fees up to Rs 5,000",
      "Financial Documentation & Proof",
      "Tax Refund Claims Processing",
      "Faster Visa Processing",
      "Credit Worthiness for Loans"
    ],
    image1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080"
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Benefits",
      title: "Advantages of Income Tax Return Filing",
      description: "Filing ITR in time ensures you avoid paying additional interest & a late fee up to Rs 5,000. ITR acts as a proof of your declaration to the government regarding Income earned by you during the previous year and forms part of your financial directory.",
      features: [
        "Avoid Late Fees - Up to Rs 5,000 penalty",
        "Financial Documentation - Proof of income",
        "Tax Refund - Claim back excess TDS",
        "Faster Visa Processing - Required for most countries"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Shield
    },
    {
      id: 2,
      badge: "More Benefits",
      title: "Additional Advantages of ITR Filing",
      description: "In case you have taxes deducted over & above your tax liability, you will need to file your ITR to claim back the refund. Sooner the ITR is filed, sooner your refund is processed. You may be served a notice from the income tax department in case you fail to file your ITR or file incorrect ITR.",
      features: [
        "Tax Refund - Faster processing",
        "Avoid Tax Notices from IT Department",
        "Credit Worthiness for Loans & Credit Cards",
        "ITR for last 2-3 years needed for Visa"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Award
    },
    {
      id: 3,
      badge: "4-Step Process",
      title: "Process of ITR Filing",
      description: "Our streamlined 4-step process makes ITR filing simple and hassle-free. Choose your plan, share information, talk to our expert, and we handle the computation & filing. Income Tax Return is prepared and filed after you approve the computation.",
      features: [
        "Step 1: Choose Plan",
        "Step 2: Share Information",
        "Step 3: Talk to Expert",
        "Step 4: Computation & Filing"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Clock
    },
    {
      id: 4,
      badge: "Who Should File",
      title: "Who Should File an ITR?",
      description: "For FY 2023-24, if your annual gross total income (before allowing any deductions under section 80C to 80U) exceeds ₹2.5 lakh (₹3 lakh for those aged 60 years and above & ₹5 lakhs for 80 years & above) you must file an income tax return in India.",
      features: [
        "Income exceeds ₹2.5L (₹3L for 60+, ₹5L for 80+)",
        "Excess TDS deducted - Want to claim refund",
        "Deposited more than Rs. 1 Crore in current accounts",
        "Electricity expense more than Rs. 1 lakh"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Users
    },
    {
      id: 5,
      badge: "More Filing Criteria",
      title: "Additional Filing Requirements",
      description: "You must also file if you incurred foreign travel expenditure more than 2 lakh, want to carry forward business/capital gain loss, are beneficial owner of assets outside India, or signing authority in any account located outside India.",
      features: [
        "Foreign travel expenditure more than ₹2 lakh",
        "Carry forward Business or Capital Gain Loss",
        "Beneficial owner of assets outside India",
        "Signing authority in foreign accounts"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Globe
    },
    {
      id: 6,
      badge: "Why File With Us",
      title: "Why File With Us?",
      description: "All ITRs reviewed by a Chartered Accountant before filing. We don't just process; we analyze, verify and then file - ensuring correctness and maximum benefit to assessee. Dedicated specialist to answer all your questions, not only today, but round the year.",
      features: [
        "All ITRs reviewed by CA before filing",
        "Analyze, verify and then file",
        "Dedicated specialist round the year",
        "Filing only after you approve computation"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: CheckCircle
    },
    {
      id: 7,
      badge: "Expert Advisory",
      title: "Tax Planning & Advisory",
      description: "Advisory on tax planning and choosing between New and Old Tax Regime. We ensure maximum savings through proper planning. Our accuracy rate is 99.6% ensuring your returns are filed correctly the first time.",
      features: [
        "New vs Old Tax Regime Advisory",
        "Tax Planning Consultancy",
        "99.6% Accuracy Rate",
        "Maximum Benefit to Assessee"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1568234928966-359c35dd8327?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: TrendingUp
    },
    {
      id: 8,
      badge: "Information Required",
      title: "Information Required for ITR Filing",
      description: "Share basic information such as PAN, Aadhar Card, current address, and bank details. Provide income proofs like Salary Details, Rental Income, Income from Investments (FDs, Savings), details of assets sold (Property, Shares, Mutual Funds).",
      features: [
        "Basic Info - PAN, Aadhar, Address",
        "Bank Details - All accounts maintained",
        "Income Proofs - Salary, Rental, Investments",
        "Tax Saving Details & Tax Payments"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: FileText
    },
    {
      id: 9,
      badge: "Salary Plans",
      title: "ITR Plans for Salary & Rental Income",
      description: "Salary & Rental Income (< Rs. 25 lakhs) - ₹1,549 for ITR Form 1. Salary & Rental Income (> Rs. 25 lakhs) - ₹2,799 for ITR Form 1 or 2. Covers Single/Multiple Form 16, House Property Income, Savings A/c, Dividends, FD Interest, and Donations.",
      features: [
        "ITR-1: ₹1,549 (Income up to 25 lakhs)",
        "ITR-1/2: ₹2,799 (Income above 25 lakhs)",
        "Form 16, House Property, FD Interest",
        "CA Review & 2 Expert Calls included"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Calculator
    },
    {
      id: 10,
      badge: "Capital Gains & NRI",
      title: "Capital Gains & Foreign Income Plans",
      description: "Capital Gains Income - ₹4,449 for ITR Form 2 covering Capital Gains, Brought Forward Losses, Income from Lottery/Gaming. Foreign Income/NRI - ₹6,649 for ITR Form 2 covering NRE/NRO accounts, Foreign Income/Assets with Expert Talk Time and Skype Call.",
      features: [
        "Capital Gains: ₹4,449 (ITR Form 2)",
        "Foreign Income/NRI: ₹6,649 (ITR Form 2)",
        "NRE/NRO Accounts, Foreign Assets",
        "30 mins Expert Talk + Skype Call"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Globe
    },
    {
      id: 11,
      badge: "Self Employed Plans",
      title: "ITR Plans for Self Employed & Professionals",
      description: "For Security Traders - ₹5,549 (ITR Form 3) covering F&O or Intraday Trading up to 200 transactions. For Professionals & Freelancers - ₹4,449 (ITR Form 4) for presumptive income. For Businesses - ₹8,349 (ITR Form 3) with P&L and Balance Sheet preparation.",
      features: [
        "Security Traders: ₹5,549 (ITR Form 3)",
        "Professionals/Freelancers: ₹4,449 (ITR Form 4)",
        "Businesses: ₹8,349 (ITR Form 3)",
        "P&L, Balance Sheet preparation included"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Briefcase
    },
    {
      id: 12,
      badge: "Premium Plan",
      title: "Premium Filing Plan - Rs. 15,000",
      description: "Expert Tax Advisory: Premium Service, All Year Long. Includes Income Tax Return Filing (Any Form), Quarterly Advance Tax Computation, Tax Planning & Consultancy Twice a Year, 4 Expert Calls (90 mins), Face to Face Meeting with Expert, CA Verified Return Filing.",
      features: [
        "Any ITR Form + All Income Types",
        "Quarterly Advance Tax Computation",
        "Tax Planning Consultancy Twice a Year",
        "4 Expert Calls (90 mins) + Face to Face Meeting"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Star
    },
    {
      id: 13,
      badge: "Who Should Opt Premium",
      title: "Who Should Opt for Premium Plan?",
      description: "If you are liable to pay advance tax, have income from multiple sources, high value receipt on account of property or share sale, HNIs having high tax exposure, looking to manage taxes in a structured way, or looking for tax saving consultancy.",
      features: [
        "Liable to pay Advance Tax",
        "Income from Multiple Sources",
        "HNIs with High Tax Exposure",
        "Looking for Structured Tax Management"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Building2
    },
    {
      id: 14,
      badge: "Our Track Record",
      title: "Trusted by 5,000+ Entrepreneurs",
      description: "Join 5,000+ Entrepreneurs benefiting from our expertise. We provide Name Approval Letter, Incorporation Certificate, MOA/AOA, DIN Approval Letter, PAN Card, TAN/TDS Letter, Incorporation kit for bank account, and Filing of INC 20A for Commencement of Business.",
      features: [
        "Trusted by 5,000+ Entrepreneurs",
        "Expert Guidance - 10+ years experience",
        "Transparent Pricing - No hidden fees",
        "CA Verified Returns"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
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
              <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl opacity-20 blur-3xl animate-pulse" />
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-2 sm:mb-3">Our ITR Filing Services</h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">Simple, accurate, and timely tax filing with expert CA review</p>
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

export default IncomeTaxReturns;
