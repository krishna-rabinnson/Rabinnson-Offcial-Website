
"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { 
  Check, ArrowRight, BookOpen, FileStack, BarChart3, ClipboardList,
   Shield, TrendingUp, Clock,
  Building2, FileText, Calculator, Award, Rocket
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import Avatar1 from '@/assets/images/avatar-1.webp';
import Avatar2 from '@/assets/images/avatar-2.webp';
import Avatar3 from '@/assets/images/avatar-3.webp';
import Avatar4 from '@/assets/images/avatar-4.webp';

const AccountingBookKeeping = () => {
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
    title: "Accounting & Book Keeping",
    description: "Make Accounting & Bookkeeping Effortless! While you focus on growth, let us handle the numbers - Your trusted outsourced accounting & bookkeeping experts.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    subText: "Accurate Records, Better Decisions"
  };

  const introContent = {
    badge: "Outsourced Accounting",
    badgeIcon: BookOpen,
    title: "Benefits of Outsourced Accounting",
    subtitle: "Find out how outsourced accounting can improve accuracy, save time, and reduce stress!",
    description: "Outsourcing your accounting and bookkeeping needs allows you to focus on what matters most - growing your business. Our expert team handles all your financial records with precision, ensuring compliance and providing valuable insights for better decision-making.",
    features: [
      "Access to Expertise & Experience",
      "Improved Accuracy & Compliance",
      "Forecasting & Budgeting Support",
      "Saves Time & Money",
      "Reduces Error & Fraud Risk"
    ],
    image1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080"
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Benefits Overview",
      title: "Benefits of Outsourced Accounting",
      description: "Outsourced accounting ensures your financial matters are handled with expertise by accounting professionals. It ensures compliance with regulations providing peace of mind while giving you financial insights into future revenue and expenses that aid in decision-making.",
      features: [
        "Access to Expertise & Experience",
        "Improved Accuracy & Compliance",
        "Forecasting & Budgeting Insights",
        "Profitability & Tax Planning"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: TrendingUp
    },
    {
      id: 2,
      badge: "Cost & Time Savings",
      title: "Saves Time & Reduces Risk",
      description: "Free up your valuable time to focus on other tasks and reduce your overhead costs. Mitigate risks with best practices and stay updated on industry changes. Better productivity and simple tax planning help startups make more money early on.",
      features: [
        "Saves Time & Money",
        "Reduces Error & Fraud Risk",
        "Best Practices Implementation",
        "Industry Updates & Compliance"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Clock
    },
    {
      id: 3,
      badge: "5-Step Process",
      title: "5 Steps To Easy Accounting & Bookkeeping!",
      description: "Make your accounting & bookkeeping simple with 5 quick steps! From filling the form to getting timely reports, our streamlined process ensures hassle-free financial management with a dedicated accounting partner assigned to your business.",
      features: [
        "Step 1: Fill the Form",
        "Step 2: Talk To Expert",
        "Step 3: Dedicated Accounting Partner",
        "Step 4: Share Monthly Data"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: ClipboardList
    },
    {
      id: 4,
      badge: "Timely Reports",
      title: "Get Timely Financial Reports",
      description: "Receive comprehensive monthly reports including profit & loss statements, balance sheets, and cash flow analysis for informed business decisions. Our dedicated accounting partner ensures you always have accurate financial data when you need it.",
      features: [
        "Step 5: Get Timely Reports",
        "Monthly Financial MIS Reporting",
        "Profit & Loss Statements",
        "Balance Sheet & Cash Flow"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: BarChart3
    },
    {
      id: 5,
      badge: "Companies Act Compliance",
      title: "Legal Compliance - Companies Act",
      description: "Every incorporated Company must maintain its Books of Accounts at the registered office or a board-approved site. Notify the RoC if books are kept elsewhere. Accounts can be electronic. Books to be maintained for 8 years from the end of the relevant financial year.",
      features: [
        "Maintain at Registered Office",
        "Notify RoC for alternate location",
        "Electronic accounts permitted",
        "8 years retention period"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Building2
    },
    {
      id: 6,
      badge: "GST Compliance",
      title: "Legal Compliance - GST Act",
      description: "Every registered person is required to maintain GST records at the principal place of business. Books to be maintained for 6 years from the last date of filing the annual return for that year. Non-compliance can result in hefty penalties.",
      features: [
        "Maintain at Principal Place of Business",
        "6 years retention period",
        "From last annual return filing date",
        "Avoid penalties with compliance"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: FileText
    },
    {
      id: 7,
      badge: "Income Tax Compliance",
      title: "Legal Compliance - Income Tax Act",
      description: "For Individuals & HUF: Sales exceeding Rs. 25,00,000 or income exceeding Rs. 2,50,000 in any of 3 preceding years. For others: Sales exceeding Rs. 10,00,000 or income exceeding Rs. 1,20,000. Books to be maintained for 6 years from end of relevant year.",
      features: [
        "Individuals/HUF: Rs. 25L sales threshold",
        "Others: Rs. 10L sales threshold",
        "Claiming lower than presumptive income",
        "6 years retention period"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1568234928966-359c35dd8327?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Calculator
    },
    {
      id: 8,
      badge: "Accounting Records",
      title: "Maintaining Accounting Records",
      description: "Our comprehensive accounting services include Book-keeping, Payroll Processing, Accounts Reconciliation, Bank Reconciliation, AR Management, AP Management, Inventory Management, and Monthly Financial MIS Reporting to keep your finances organized.",
      features: [
        "Book-keeping & Payroll Processing",
        "Accounts & Bank Reconciliation",
        "AR & AP Management",
        "Inventory & MIS Reporting"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: FileStack
    },
    {
      id: 9,
      badge: "Regulatory Compliance",
      title: "Regulatory Compliances and Filings",
      description: "We handle all your regulatory compliance needs including Filing of Monthly/Quarterly GST Returns, Monthly TDS Computation, Quarterly Filing of TDS & TCS Returns, GSTR-2B Reconciliation, ESIC & PF Return Filing, and Professional Tax Return Filing.",
      features: [
        "Monthly/Quarterly GST Returns",
        "TDS/TCS Computation & Filing",
        "GSTR-2B Reconciliation",
        "ESIC, PF & Professional Tax Filing"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Shield
    },
    {
      id: 10,
      badge: "Why Choose Us",
      title: "Your Reliable Bookkeeping Partner",
      description: "With 10+ years of experience and 80+ experts guiding you every step of the way, we offer transparent all-inclusive pricing with no hidden fees. Using technology to provide great service, we handle everything from documents to compliance.",
      features: [
        "Expert Guidance - 10+ years experience",
        "Transparent Pricing - No hidden fees",
        "Technology Driven Services",
        "Comprehensive Support"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Award
    },
    {
      id: 11,
      badge: "Our Track Record",
      title: "Trusted by 3000+ Startups",
      description: "Join a large community of successful businesses. We've helped startups grow into billion-dollar businesses with 3+ Unicorns produced. Our proven track record demonstrates our commitment to helping businesses succeed through expert financial management.",
      features: [
        "Trusted by 3000+ Startups",
        "3+ Unicorns Produced",
        "Billion-dollar business support",
        "Proven success track record"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1080",
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
                  Book Free Consultation
                </button>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={200} className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full">
              <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-violet-400 to-purple-500 rounded-3xl opacity-20 blur-3xl animate-pulse" />
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-2 sm:mb-3">Our Accounting & Bookkeeping Services</h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">Comprehensive financial management for your business success</p>
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

export default AccountingBookKeeping;
