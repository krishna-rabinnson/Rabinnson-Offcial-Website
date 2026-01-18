"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  FileText,
  Building,
  Users,
  Shield,
  ClipboardCheck,
  FileCheck,
  Award,
  Scale,
  TrendingUp,
  Globe,
  DollarSign,
  UserCheck,
  Lightbulb,
  Megaphone,
  Settings,
  Handshake,
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import Avatar1 from "@/assets/images/avatar-1.webp";
import Avatar2 from "@/assets/images/avatar-2.webp";
import Avatar3 from "@/assets/images/avatar-3.webp";
import Avatar4 from "@/assets/images/avatar-4.webp";

const SecretarialComplianceFund = () => {
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
    title: "Fundraising Compliance",
    description:
      "Start-up founders must be aware of compliance requirements under the Companies Act, 2013 and other applicable regulations to raise funds legally and efficiently. We offer expert assistance for complete fundraising compliance support.",
    ctaText: "Get Expert Assistance",
    ctaLink: "/contact",
    subText: "Complete Fundraising Compliance Support",
  };

  const servicesContent = {
    title: "Services Offered",
    services: [
      {
        title: "Regulatory Compliance",
        description: "Regulatory compliance as per RBI and RoC guidelines",
        icon: Scale,
      },
      {
        title: "Legal Due Diligence",
        description: "Legal due diligence for fundraising activities",
        icon: FileText,
      },
      {
        title: "Document Preparation",
        description: "Preparation and organisation of required documents",
        icon: FileText,
      },
      {
        title: "Investor Reporting",
        description: "Reporting and investor update management",
        icon: Users,
      },
      {
        title: "Corporate Governance",
        description: "Guidance on corporate governance best practices",
        icon: Building,
      },
    ],
  };

  const introContent = {
    badge: "Overview",
    badgeIcon: Shield,
    title: "Overview of Fundraising Compliance",
    subtitle: "Ensuring lawful and transparent fundraising",
    description:
      "Fundraising is the process of acquiring financial or non-financial support to achieve specific organisational goals. This includes reaching out to investors, donors, or sponsors for capital infusion. Start-ups and companies must comply with regulatory requirements under the Companies Act, 2013, RBI guidelines, and other legal frameworks to ensure lawful and transparent fundraising.",
    features: [
      "Legitimacy of capital raised",
      "Investor confidence and transparency",
      "Smooth audit and due diligence processes",
      "Eligibility for future funding rounds and government schemes",
    ],
    featureTitle: "Proper compliance ensures:",
    closingText:
      "We offer end-to-end compliance support to ensure your fundraising efforts meet all legal and regulatory standards.",
    image1:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
    image2:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
  };

  const fundraisingObjectives = [
    {
      title: "Secure Initial Capital",
      description:
        "To cover product development, setup costs, and early-stage operations.",
      icon: DollarSign,
    },
    {
      title: "Scale Business Operations",
      description:
        "To expand teams, increase production, and enter new markets.",
      icon: TrendingUp,
    },
    {
      title: "Attract Top Talent",
      description:
        "To offer competitive compensation and retain skilled professionals.",
      icon: UserCheck,
    },
    {
      title: "Invest in R&D",
      description:
        "To innovate, refine offerings, and stay ahead of market trends.",
      icon: Lightbulb,
    },
    {
      title: "Enhance Marketing & Customer Acquisition",
      description: "To build brand visibility and grow the customer base.",
      icon: Megaphone,
    },
    {
      title: "Upgrade Infrastructure & Technology",
      description:
        "To ensure operational efficiency and long-term scalability.",
      icon: Settings,
    },
    {
      title: "Explore Business Expansion",
      description:
        "To launch new products, enter new geographies, or open additional units.",
      icon: Globe,
    },
    {
      title: "Form Strategic Partnerships",
      description:
        "To gain mentorship, industry connections, and business opportunities.",
      icon: Handshake,
    },
  ];

  const checklistItems = [
    {
      title: "Define Funding Objectives",
      description:
        "Clearly outline capital requirements, usage plans, and fundraising targets.",
    },
    {
      title: "Prepare a Business Plan",
      description:
        "Include vision, market size, competition, financials, and growth roadmap.",
    },
    {
      title: "Build a Committed Core Team",
      description:
        "Ensure founders and key personnel have relevant experience and roles.",
    },
    {
      title: "Identify Suitable Investors",
      description:
        "Research and shortlist VCs or angel investors aligned with your sector and stage.",
    },
    {
      title: "Ensure Financial Documentation is Ready",
      description:
        "Maintain updated P&L statements, cash flow projections, and cap tables.",
    },
    {
      title: "Establish Online Presence",
      description:
        "Set up a professional website and maintain active, credible social profiles.",
    },
    {
      title: "Practice Pitching",
      description:
        "Refine your pitch deck and rehearse with mentors or advisors.",
    },
    {
      title: "Seek Expert Guidance",
      description: "Engage advisors for mentorship and legal due diligence.",
    },
    {
      title: "Attend Networking Events",
      description:
        "Participate in demo days, pitch events, and investor forums.",
    },
    {
      title: "Follow Up with Investors",
      description:
        "Send personalised updates post-meeting and maintain engagement.",
    },
  ];

  const preFundingCompliances = [
    {
      title: "Compliance with RoC Norms",
      description:
        "Ensure the company is compliant with the Companies Act, 2013 and all Registrar of Companies (RoC) filings are up to date.",
    },
    {
      title: "Board Meeting Resolution",
      description:
        "Issue notice at least 7 days in advance. Approve key items such as: Valuation report, Offer period and number of allottees, Opening of a separate bank account for funds, Draft offer letter for private placement, Date and agenda for the Extraordinary General Meeting (EGM).",
    },
    {
      title: "Extraordinary General Meeting (EGM)",
      description:
        "Conduct an EGM to pass a Special Resolution for preferential allotment. File Form MGT-14 with RoC. Distribute Form PAS-4 with the offer details and certified true copy of the resolution.",
    },
    {
      title: "Issuance of Offer Letters",
      description:
        "Share the offer letter (Form PAS-4) within 30 days of approval to the identified investors via physical or electronic mode.",
    },
    {
      title: "Maintain Allotment Records",
      description:
        "Keep a complete record of allotments and file it with the RoC before accepting funds.",
    },
  ];

  const postFundingCompliances = [
    {
      title: "Allotment of Shares & Filing Return",
      description:
        "Allot shares to investors within 60 days of receiving funds. File Form PAS-3 (Return of Allotment) with the Registrar of Companies (RoC) within 30 days of allotment.",
    },
    {
      title: "Issuance of Share Certificates",
      description:
        "Issue share certificates to the new shareholders within 60 days from the date of allotment. Funds received cannot be utilized until share certificates are issued.",
    },
    {
      title: "Compliance with Banking Norms",
      description:
        "Share application money must be received via banking channels only from the investor's account, ensuring traceability and legal compliance.",
    },
    {
      title: "Reporting to RBI (For Foreign Investments)",
      description:
        "Submit Advance Reporting Form within 30 days of receiving funds from foreign investors. File Form FC-GPR within 30 days of share issuance, along with Certificate from Company Secretary (compliance with FDI policy) and Certificate from a professional (valuation justification).",
    },
    {
      title: "Companies Act Compliance",
      description:
        "Maintain statutory registers, file necessary forms, and adhere to all relevant procedures under the Companies Act, 2013.",
    },
  ];

  const foreignInvestorCompliances = [
    {
      title: "RBI Regulations for Foreign Investments",
      description:
        "All foreign investments are governed by the Reserve Bank of India (RBI). Startups must follow applicable FEMA and RBI guidelines to ensure legal compliance.",
    },
    {
      title: "Advance Reporting to RBI",
      description:
        "File an Advance Reporting Form within 30 days of receiving foreign funds. Include: Investor details (name, address, nationality), Amount and date of remittance, Bank or authorised dealer details, Government approvals (if applicable), KYC documents of non-resident investors.",
    },
    {
      title: "Share Issuance Timeline",
      description:
        "Shares must be allotted to foreign investors within 180 days of receiving the funds. Non-compliance may lead to FEMA violations.",
    },
    {
      title: "Filing of FC-GPR",
      description:
        "Submit Form FC-GPR within 30 days of share issuance. Attach: Certificate from a Company Secretary (FDI compliance), Valuation certificate from a practising professional, Board resolution and relevant supporting documents.",
    },
    {
      title: "Companies Act Compliance",
      description:
        "Follow procedures for share allotment, file necessary RoC forms, and maintain statutory registers as per the Companies Act.",
    },
  ];

  const scrollSections = [
    {
      id: 1,
      badge: "Pre-Funding",
      title: "Pre-Funding Compliances for Startups in India",
      description:
        "Before raising capital, startups must comply with regulatory procedures to ensure legal validity and investor confidence. Key pre-funding compliances include:",
      features: [
        "Compliance with RoC Norms: Ensure the company is compliant with the Companies Act, 2013 and all RoC filings are up to date.",
        "Board Meeting Resolution: Issue notice at least 7 days in advance with key approvals.",
        "Extraordinary General Meeting (EGM): Conduct an EGM to pass a Special Resolution for preferential allotment.",
        "Issuance of Offer Letters: Share the offer letter (Form PAS-4) within 30 days of approval.",
        "Maintain Allotment Records: Keep a complete record of allotments and file it with the RoC.",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: ClipboardCheck,
    },
    {
      id: 2,
      badge: "Post-Funding",
      title: "Post-Funding Compliances for Startups in India",
      description:
        "Once funding is received, startups must comply with statutory procedures to maintain transparency and meet legal obligations under corporate and foreign investment laws.",
      features: [
        "Allotment of Shares & Filing Return: Allot shares within 60 days, file Form PAS-3 within 30 days.",
        "Issuance of Share Certificates: Issue share certificates within 60 days from allotment date.",
        "Compliance with Banking Norms: Receive funds via banking channels only from investor's account.",
        "Reporting to RBI (For Foreign Investments): Submit Advance Reporting Form and FC-GPR within timelines.",
        "Companies Act Compliance: Maintain statutory registers and file necessary forms.",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: FileCheck,
    },
    {
      id: 3,
      badge: "Foreign Investment",
      title: "Other Compliances for Foreign Investors in India",
      description:
        "India's startup ecosystem continues to attract foreign investment. Startups engaging with foreign investors must comply with guidelines issued under the Foreign Exchange Management Act (FEMA), RBI regulations, and the Companies Act, 2013.",
      features: [
        "RBI Regulations: All foreign investments are governed by RBI under FEMA guidelines.",
        "Advance Reporting to RBI: File within 30 days of receiving foreign funds with complete investor details.",
        "Share Issuance Timeline: Allot shares to foreign investors within 180 days of receiving funds.",
        "Filing of FC-GPR: Submit within 30 days of share issuance with required certificates.",
        "Companies Act Compliance: Follow procedures for share allotment and maintain statutory registers.",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Globe,
    },
    {
      id: 4,
      badge: "Our Services",
      title: "Services Offered for Fundraising Compliance",
      description:
        "Compliance plays a critical role in protecting both startups and their investors. Regulatory lapses can lead to penalties and loss of investor confidence. Once funding is secured, it becomes the founder's responsibility to ensure funds are handled with transparency and in compliance with legal frameworks.",
      features: [
        "Expert guidance on fundraising regulations under RBI and RoC",
        "Legal and financial due diligence to ensure full regulatory compliance",
        "Preparation and filing of compliance documents (PAS-3, FC-GPR, certifications)",
        "Investor reporting support, including regular updates and compliance records",
        "Advisory on corporate governance practices and internal control frameworks",
        "Compliance support for foreign investments, including FDI norms and RBI reporting",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Award,
    },
  ];

  const ourServicesDetailed = [
    "Expert guidance on fundraising regulations under RBI and RoC",
    "Legal and financial due diligence to ensure full regulatory compliance",
    "Preparation and filing of compliance documents such as: Share allotment forms, Reporting forms (PAS-3, FC-GPR), Certification and supporting documentation",
    "Investor reporting support, including regular updates and compliance records",
    "Advisory on corporate governance practices and internal control frameworks",
    "Compliance support for foreign investments, including FDI norms and RBI reporting",
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

  const FeatureList: React.FC<{ features: string[]; title?: string }> = ({
    features,
    title,
  }) => {
    const { ref, isVisible } = useScrollAnimation();
    return (
      <div ref={ref} className="space-y-3">
        {title && (
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">
            {title}
          </h3>
        )}
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-3 transition-all duration-500 ease-out"
            style={{
              transitionDelay: `${index * 100}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-20px)",
            }}
          >
            <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110 mt-0.5">
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
            <Link href="/contact">
              <button className="mt-4 sm:mt-6 group px-5 sm:px-7 py-3 sm:py-3.5 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center gap-2 w-fit hover:shadow-lg active:scale-95 text-sm sm:text-base">
                Learn More{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
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
      {/* Services Section */}
      <div className="bg-slate-50 py-12 sm:py-16 lg:py-20 relative z-20">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              {servicesContent.title}
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesContent.services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-4">
                      <ServiceIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
      {/* Intro Section */}
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
              <FeatureList
                features={introContent.features}
                title={introContent.featureTitle}
              />
              <p className="text-base sm:text-lg text-slate-700 font-medium">
                {introContent.closingText}
              </p>
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
              <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl opacity-20 blur-3xl animate-pulse" />
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
      {/* Objectives of Fundraising Section */}
      <div className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-3">
              Objectives of Fundraising
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              Start-ups raise funds to accelerate growth, ensure sustainability,
              and build a competitive edge.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {fundraisingObjectives.map((objective, index) => {
              const ObjectiveIcon = objective.icon;
              return (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-4">
                      <ObjectiveIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {objective.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {objective.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
      {/* Basic Fundraising Checklist Section */}
      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-3">
              Basic Fundraising Checklist for Start-ups
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base">
              Before approaching investors, start-ups must ensure strategic,
              legal, and operational readiness. A structured approach improves
              credibility and fundraising outcomes.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {checklistItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
      {/* Pre-Funding Compliances Section */}
      <div className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-3">
              Pre-Funding Compliances for Startups in India
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base">
              Before raising capital, startups must comply with regulatory
              procedures to ensure legal validity and investor confidence.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              {preFundingCompliances.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ClipboardCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
      {/* Post-Funding Compliances Section */}
      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-3">
              Post-Funding Compliances for Startups in India
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base">
              Once funding is received, startups must comply with statutory
              procedures to maintain transparency and meet legal obligations
              under corporate and foreign investment laws.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              {postFundingCompliances.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={400} className="text-center mt-8">
            <p className="text-slate-700 text-base sm:text-lg max-w-3xl mx-auto font-medium">
              We provide expert assistance in handling all pre- and post-funding
              compliance needs, ensuring your startup stays fully aligned with
              legal requirements and investor expectations.
            </p>
          </AnimatedSection>
        </div>
      </div>
      {/* Foreign Investor Compliances Section */}
      <div className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-3">
              Other Compliances for Foreign Investors in India
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base">
              India's startup ecosystem continues to attract foreign investment.
              Startups engaging with foreign investors must comply with
              guidelines issued under the Foreign Exchange Management Act
              (FEMA), RBI regulations, and the Companies Act, 2013.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              {foreignInvestorCompliances.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={400} className="text-center mt-8">
            <p className="text-slate-700 text-base sm:text-lg max-w-3xl mx-auto font-medium">
              We offer professional support to help startups navigate foreign
              investment compliance, ensuring full adherence to RBI and MCA
              norms while facilitating smooth capital inflow.
            </p>
          </AnimatedSection>
        </div>
      </div>
      {/* Main Scroll Sections */}
      <div className="bg-white min-h-screen">
        <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 pb-6 sm:pb-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-2 sm:mb-3">
            Our Compliance Services
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">
            Complete secretarial support for your fundraising
          </p>
        </AnimatedSection>
        <div className="space-y-16 sm:space-y-24 lg:space-y-32 pb-12 sm:pb-20">
          {scrollSections.map((section, index) => (
            <ServiceSection key={section.id} section={section} index={index} />
          ))}
        </div>
      </div>
      {/* Services Offered Detail Section */}
      <div className="bg-slate-900 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-3">
              Services Offered for Fundraising Compliance
            </h2>
            <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base">
              Compliance plays a critical role in protecting both startups and
              their investors. Regulatory lapses can lead to penalties and loss
              of investor confidence. Once funding is secured, it becomes the
              founder's responsibility to ensure funds are handled with
              transparency and in compliance with legal frameworks.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 lg:p-10">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-6">
                Our Services Include
              </h3>
              <div className="space-y-4">
                {ourServicesDetailed.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-slate-700 text-sm sm:text-base">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-slate-50 rounded-xl">
                <p className="text-slate-700 text-base sm:text-lg font-medium text-center">
                  By partnering with us, startups can avoid compliance-related
                  risks and focus on growth while staying fully aligned with
                  regulatory requirements.
                </p>
              </div>
              <div className="mt-8 text-center">
                <Link href="/contact">
                  <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-slate-900 text-white text-sm sm:text-base font-semibold shadow-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:scale-105 active:scale-95">
                    Get Expert Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};

export default SecretarialComplianceFund;
