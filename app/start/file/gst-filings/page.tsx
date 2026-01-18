"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { 
  Check, ArrowRight, Receipt, FileCheck, RefreshCcw, BadgeCheck,
  AlertTriangle, Shield, Clock, Award, Rocket, 
  FileText, Building2,Ban,Star
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import Avatar1 from '@/assets/images/avatar-1.webp';
import Avatar2 from '@/assets/images/avatar-2.webp';
import Avatar3 from '@/assets/images/avatar-3.webp';
import Avatar4 from '@/assets/images/avatar-4.webp';

const GSTFilings = () => {
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

      const currentRef = ref.current;
      if (currentRef) observer.observe(currentRef);

      return () => {
        if (currentRef) observer.unobserve(currentRef);
      };
    }, []);

    return { ref, isVisible };
  };

  const heroContent = {
    title: "GST Filings",
    description: "Filing GST Returns, the Easy Way! Say goodbye to GST headaches—we take care of your GSTR filing, from accurate calculations to timely submissions, ensuring a hassle-free experience!",
    ctaText: "File GST Now",
    ctaLink: "/contact",
    subText: "Complete GST Compliance Solutions"
  };

  const introContent = {
    badge: "GST Services",
    badgeIcon: Receipt,
    title: "Benefits of GST Return Filing on Time",
    subtitle: "Stay compliant, avoid fines, and reap the benefits with on-time GST submissions",
    description: "Timely GST filing ensures you avoid late fees, penalties, and interest charges that could accumulate for non-compliance. It helps your business remain eligible for government contracts and improves cash flow management by retaining more capital for reinvestment.",
    features: [
      "Avoid Severe Penalties and Interest",
      "Avoid GST Suspension or Cancellation",
      "Eligibility for Government Contracts",
      "Better Cash Flow Management",
      "Improved Tax Record for Audits"
    ],
    image1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080"
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Benefits",
      title: "Benefits of Timely GST Filing",
      description: "Ensure that you avoid late fees, penalties, and interest charges that could accumulate for non-compliance. Late filings can result in the suspension or cancellation of GST registration, which can disrupt your business activities. Timely filing ensures smooth refund process and improves cash flows.",
      features: [
        "Avoid Severe Penalties and Interest",
        "Avoid GST Suspension or Cancellation",
        "Eligibility for Government Contracts",
        "Smooth Refund Process"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Shield
    },
    {
      id: 2,
      badge: "More Benefits",
      title: "Additional Advantages of Compliance",
      description: "Help you retain more capital, which can be reinvested in the business, improving cash flow. Simplify the process in case of audits and reduce the chances of disputes with the tax authorities. Ensure that the refund process is smooth and free from unnecessary delays.",
      features: [
        "Better Cash Flow Management",
        "Improved Tax Record for Audits",
        "Reduced Disputes with Authorities",
        "Capital Retention for Reinvestment"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Award
    },
    {
      id: 3,
      badge: "5-Step Process",
      title: "Get GST Filing Done In 5 Simple Steps!",
      description: "GST filing made effortless—follow our simple steps for quick results! From speaking to our GST experts to timely submission, we streamline your returns and ensure full compliance. Don't let GST filings slow you down.",
      features: [
        "Step 1: Speak to Our GST Experts",
        "Step 2: Organize and Update Your Invoices",
        "Step 3: GST Calculation and Review",
        "Step 4: Make GST Liability Payment"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Clock
    },
    {
      id: 4,
      badge: "Timely Submission",
      title: "GST Return Timely Submission",
      description: "Complete your filing in just 5 simple steps! Our experts ensure accurate calculations, proper documentation, and on-time submission to keep your business compliant. Count on us to streamline your returns and ensure full compliance.",
      features: [
        "Step 5: GST Return Timely Submission",
        "Accurate Calculations Guaranteed",
        "Proper Documentation Support",
        "Full Compliance Assurance"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: FileCheck
    },
    {
      id: 5,
      badge: "Required Documents",
      title: "Must-Have Documents for GST Returns Filing",
      description: "Stay ahead—have these essential documents ready for smooth GST returns. You'll need Login Credentials, Inward Supplies Details, Outward Supplies Details, Tax Invoices, Credit and Debit Notes, Refund Voucher (if any), and Tax Paid under RCM.",
      features: [
        "Login Credentials",
        "Inward & Outward Supplies Details",
        "Tax Invoices, Credit & Debit Notes",
        "Tax Paid under RCM"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FileText
    },
    {
      id: 6,
      badge: "Government Support",
      title: "Government Support for Timely GST Filing",
      description: "Explore how government initiatives make GST filing easier, faster, and more efficient for businesses of all sizes. From GST Compliance Rating to GST Suvidha Providers (GSPs), Pre-Fill System, and Grievance Redressal Mechanism.",
      features: [
        "GST Compliance Rating",
        "GST Suvidha Providers (GSPs)",
        "GST Pre-Fill System",
        "GST Grievance Redressal Mechanism"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Building2
    },
    {
      id: 7,
      badge: "GSTR Types",
      title: "Types of GST Return Filing Online",
      description: "Get familiar with the types of GSTR returns to ensure timely and accurate submissions. GSTR-1 for outward supplies (11th monthly), GSTR-3B for summary return (20th monthly), GSTR-4 for composition scheme (30th April annually), GSTR-9 annual return (31st December).",
      features: [
        "GSTR-1 - Outward Supplies (11th monthly)",
        "GSTR-3B - Summary Return (20th monthly)",
        "GSTR-4 - Composition Scheme (Annual)",
        "GSTR-9 - Annual Return (31st Dec)"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1568234928966-359c35dd8327?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: RefreshCcw
    },
    {
      id: 8,
      badge: "More GSTR Types",
      title: "Additional GST Return Types",
      description: "GSTR-5 for Non-Resident persons (13th monthly), GSTR-6 for Input Service Distributors (13th monthly), GSTR-7 for TDS (10th monthly), GSTR-8 for TCS by e-commerce (10th monthly), GSTR-9C for reconciliation (31st Dec), GSTR-10 final return, GSTR-11 for UIN holders.",
      features: [
        "GSTR-5/6 - Non-Resident & ISD Returns",
        "GSTR-7/8 - TDS & TCS Returns",
        "GSTR-9C - Reconciliation Statement",
        "GSTR-10/11 - Final & UIN Returns"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: BadgeCheck
    },
    {
      id: 9,
      badge: "Consequences",
      title: "GST Mistakes: Consequences You Should Know",
      description: "Learn how filing mistakes can lead to penalties, interest, and legal complications. Late GSTR filing incurs ₹50/day (₹25 each for CGST, SGST) or IGST, capped at ₹5,000, plus 18% annual interest on unpaid taxes.",
      features: [
        "Penalties: ₹50/day capped at ₹5,000",
        "18% Annual Interest on Unpaid Taxes",
        "Loss of Input Tax Credit (ITC)",
        "GST Registration Cancellation Risk"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: AlertTriangle
    },
    {
      id: 10,
      badge: "More Consequences",
      title: "Additional Risks of Non-Compliance",
      description: "Delayed or incorrect GSTR-1 can block ITC claims and disrupt supply chains. Non-filing for 6 months may lead to registration cancellation. Incorrect filings can trigger Show Cause Notice or tax evasion charges, leading to penalties, fines, or prosecution.",
      features: [
        "ITC Claims Blocked & Supply Chain Disruption",
        "Registration Cancellation after 6 months",
        "Show Cause Notice & Legal Issues",
        "Government Contracts Exclusion"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Ban
    },
    {
      id: 11,
      badge: "Why Choose Us",
      title: "Go Farther with Expert GST Support!",
      description: "Count on us for effortless GST return filing! With 10+ years of experience and 80+ experts guiding you every step of the way, we offer transparent all-inclusive pricing with no hidden fees and quick turnaround to get your GST Returns filed efficiently and on time.",
      features: [
        "Expert Guidance - 10+ years experience",
        "Transparent Pricing - No hidden fees",
        "Quick Turnaround - Efficient & On Time",
        "Comprehensive Support"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Star
    },
    {
      id: 12,
      badge: "Our Track Record",
      title: "Trusted by 3000+ Startups",
      description: "Join a large community of successful businesses. We've helped startups grow into billion-dollar businesses with 3+ Unicorns produced. From documents to compliance, we handle it all with our comprehensive support system.",
      features: [
        "Trusted by 3000+ Startups",
        "3+ Unicorns Produced",
        "Billion-dollar Business Support",
        "Complete Document & Compliance Handling"
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
                <Image src={Avatar1} alt="Avatar1" className="w-[32px]"  />
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
              <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-rose-400 to-pink-500 rounded-3xl opacity-20 blur-3xl animate-pulse" />
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-2 sm:mb-3">Our GST Filing Services</h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">Complete GST compliance from registration to audit</p>
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

export default GSTFilings;
