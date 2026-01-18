"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { 
  Check, ArrowRight, Banknote, Building2, 
  Award, ClipboardCheck, TrendingUp, Landmark, Target,
 Settings, Layers, FolderOpen
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import Avatar1 from '@/assets/images/avatar-1.webp';
import Avatar2 from '@/assets/images/avatar-2.webp';
import Avatar3 from '@/assets/images/avatar-3.webp';
import Avatar4 from '@/assets/images/avatar-4.webp';

const StartupGrantsLoans = () => {
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
    title: "Startup Business Loans & Grants",
    description: "Looking to fund your startup's growth journey? We provide expert assistance in securing business loans and government grants tailored for startups and MSMEs. Whether you are bootstrapping, scaling, or applying for government support, we ensure your funding process is smooth, strategic, and compliant.",
    ctaText: "Apply for Funding",
    ctaLink: "/contact",
    subText: "Access Capital to Fuel Your Startup's Next Phase"
  };

  const introContent = {
    badge: "Loans & Grants",
    badgeIcon: Banknote,
    title: "Expert Funding Assistance for Startups",
    subtitle: "Smooth, strategic, and compliant funding process",
    description: "India is now home to over 159,000 active startups, many of which seek financial assistance to fuel their growth. We help bridge the funding gap with tailored support for government schemes, MSME loans, and strategic financing options.",
    features: [
      "Business Loans for Startup Companies – Assistance with term loans, working capital, and line of credit",
      "Startup Business Funding – Guidance on equity, debt, and hybrid funding options",
      "MSME Startup Loans – Help with loans under CGTMSE, SIDBI, PMEGP and other MSME schemes",
      "Startup Business Finance – Structuring finance for operations, R&D, or expansion",
      "Government Startup Business Loans – Application support for Stand-Up India, Startup India Seed Fund, and Mudra",
    ],
    image1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080"
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Overview",
      title: "Business Loans & Grants for Startups",
      description: "While private equity and debt funding remain available, early-stage businesses often face challenges due to lack of collateral or operating history. Government initiatives and institutions like SIDBI have introduced direct lending models offering easier access and interest rates up to 300 basis points lower than traditional bank loans.",
      features: [
        "Boost innovation, employment, and economic inclusion",
        "Tailored financial support for entrepreneurs",
        "Direct lending models from SIDBI",
        "Lower interest rates than traditional banks",
        "Support for MSME sector credit access",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Target
    },
    {
      id: 2,
      badge: "Benefits",
      title: "Benefits of Business Financing for Startups",
      description: "Startup business loans offer several key advantages for early-stage entrepreneurs in India.",
      features: [
        "Tax Relief for New Entrepreneurs – 3 years of tax exemption to ease financial burden",
        "Equity Preservation – Retain full ownership without giving up equity",
        "Accessibility & Ease of Approach – Wide network of banks and NBFCs",
        "Structured Processing – Standardised, fast-track process reducing red tape",
        "Independent Business Management – Full control over operations and decisions",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: TrendingUp
    },
    {
      id: 3,
      badge: "Loan Types - Part 1",
      title: "Startup Business Loan Options",
      description: "Various loan options are available for startups in India, each suited to different business needs and stages.",
      features: [
        "Working Capital Loan – Short-term funds for daily operations, collateral-free, up to 15 years",
        "Term Loan – Lump-sum financing for expansion or asset purchase, 12 months to 5-10 years",
        "Overdraft Facility – Withdraw more than available balance, backed by FD or asset",
        "Letter of Credit – Credit guarantee for suppliers in global trade",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Banknote
    },
    {
      id: 4,
      badge: "Loan Types - Part 2",
      title: "Additional Financing Options",
      description: "Explore more financing options tailored to specific startup needs and revenue models.",
      features: [
        "Government Loan Schemes – Subsidised loans via Startup India, PMEGP, Standup India",
        "Equipment/Machinery Loan – Finance for buying business machinery with tax benefits",
        "Merchant Cash Advance – Loan against projected credit card sales, repayment tied to daily revenue",
        "Invoice Financing – Borrow funds against unpaid customer invoices",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Layers
    },
    {
      id: 5,
      badge: "Govt Schemes - Part 1",
      title: "Top Government Startup Loan Schemes",
      description: "Government of India has launched several startup loan and grant schemes to support entrepreneurs.",
      features: [
        "Startup India Seed Fund Scheme – Up to ₹20 Lakhs grant + ₹50 Lakhs convertible debt for DPIIT-recognised startups under 2 years",
        "Stand-Up India Scheme – ₹10 Lakhs to ₹1 Crore for SC/ST or Women Entrepreneurs (18-65 years)",
        "MUDRA Yojana – Collateral-free loans up to ₹10 Lakhs under Shishu, Kishor, and Tarun categories",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Landmark
    },
    {
      id: 6,
      badge: "Govt Schemes - Part 2",
      title: "More Government Funding Schemes",
      description: "Additional government-backed schemes providing credit support and guarantees for startups and MSMEs.",
      features: [
        "CGTMSE Scheme – Credit guarantee cover up to ₹5 Crores for MSMEs without collateral",
        "SIDBI Fund of Funds for Startups (FFS) – Indirect funding via SEBI-registered VC funds",
        "PMEGP – Credit-linked subsidy up to ₹25 Lakhs (Mfg.) or ₹10 Lakhs (Service) for new micro-enterprises",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Building2
    },
    {
      id: 7,
      badge: "Eligibility",
      title: "Eligibility Criteria for Startup Loans",
      description: "Key eligibility conditions that new startups must meet to apply for business loans in India.",
      features: [
        "Age Requirement – Applicant must be between 21 and 65 years at loan maturity",
        "Employment Status – Self-employed or running a business",
        "Business Structure – Sole proprietorship, partnership, Pvt/Public Ltd, or LLP",
        "Credit Score – Good credit score (typically 700+) preferred for approval",
        "Loan History – No past defaults with any financial institution",
        "Annual Turnover – Business turnover should not exceed ₹25 crore (MSME norms)",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1568234928966-359c35dd8327?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: ClipboardCheck
    },
    {
      id: 8,
      badge: "Documents Required",
      title: "Documentation for Loan Application",
      description: "Essential documents typically required when applying for a startup business loan in India.",
      features: [
        "Photographs – Two passport-size colour photographs",
        "Identity & Address Proof – PAN Card, Aadhaar, Passport, Voter ID, Driving Licence",
        "Bank Statements – Last 6 to 12 months statements",
        "Proof of Income – ITR (last 1 year), Salary slips, or Audited financials",
        "Business Documents – Certificate of Incorporation, Business Address Proof",
        "Signature & IFSC Proof – Cancelled cheque or bank passbook first page",
        "Application Form – Duly filled and signed with all required fields",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: FolderOpen
    },
    {
      id: 9,
      badge: "Our Process",
      title: "How to Get Startup Business Loans",
      description: "Our streamlined process ensures faster access to working capital, machinery loans, and MSME grants.",
      features: [
        "Step 1: Fill Application Details – Loan amount, employment status, turnover, collateral info",
        "Step 2: Agree to Terms – Accept terms and conditions to proceed",
        "Step 3: Provide Additional Information – Company type, industry, gross profit, bank details, personal info",
        "Step 4: Bank Contact – Representative reaches out for documentation and formalities",
        "Step 5: Approval & Disbursal – Loan credited directly to bank account after verification",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Settings
    },
    {
      id: 10,
      badge: "Why Choose Us",
      title: "Expert Startup Funding Support",
      description: "We stand out as a trusted partner for startups navigating India's complex funding ecosystem with deep understanding of government-backed schemes.",
      features: [
        "Deep understanding of Startup India, Standup India, MUDRA, and SIDBI schemes",
        "End-to-end support from eligibility assessment to application filing",
        "Streamlined process for faster access to funding",
        "Strong network of financial institutions",
        "Accessible, compliant, and efficient funding process",
        "Industry expertise backed by proven track record",
      ],
      imageUrl1: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Award
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-2 sm:mb-3">Our Grant & Loan Services</h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">Access government funding with expert guidance</p>
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

export default StartupGrantsLoans;
