"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  ScrollText,
  FileText,
  Shield,
  Award,
  Scale,
  Users,
  BookOpen,
  ClipboardCheck,
  AlertCircle,
  Gavel,
  CheckCircle,
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import Avatar1 from "@/assets/images/avatar-1.webp";
import Avatar2 from "@/assets/images/avatar-2.webp";
import Avatar3 from "@/assets/images/avatar-3.webp";
import Avatar4 from "@/assets/images/avatar-4.webp";

const TermsOfUse = () => {
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
    title: "Terms of Use Agreement Services",
    description:
      "We specialise in offering complete services for Terms of Use agreements. We assist you throughout the entire process — from early consultation to ensuring full legal compliance and ongoing maintenance of your Terms of Use documentation.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    subText: "Protect Your Digital Platform with Professionally Drafted Terms",
  };

  const introContent = {
    badge: "Terms of Use Overview",
    badgeIcon: ScrollText,
    title: "Overview of Terms of Use Agreement",
    subtitle: "Essential Legal Document for Businesses",
    description:
      "Starting a business involves fulfilling various legal obligations, acquiring licences and entering into contracts. Among these key documents, the Terms and Conditions Agreement (also known as Terms of Use or Terms of Service Agreement) is critically important. It outlines the contractual terms between the company providing a product or service and the customer using it. In the digital context, these terms are often accepted when users click \"I Accept\" or simply use the service, rather than signing a traditional contract.",
    features: [
      "Drafting customised and comprehensive Terms of Use agreements tailored to the specific needs of businesses operating in India",
      "Ensuring compliance with relevant laws when structuring and implementing the agreement",
      "Incorporating clauses for data privacy and protection of user information",
      "Providing legal guidance on consumer rights, limitation of liability and dispute resolution mechanisms",
      "Including intellectual property protection clauses to secure proprietary content and materials",
      "Offering regular review and updates of Terms of Use agreements to align with legal and operational changes",
    ],
    image1:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
    image2:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Key Benefits",
      title: "Benefits of a Terms and Conditions Agreement",
      description:
        "A well-drafted Terms and Conditions Agreement offers numerous advantages for businesses, establishing clear expectations and protecting both the company and its customers through legally sound provisions.",
      features: [
        "Clear Obligations — Establishes clear expectations and responsibilities for both the business and its customers",
        "Transparent Payment Norms — Clarifies payment terms, pricing structure, and refund conditions to avoid confusion",
        "Safeguard Intellectual Property — Protects business content, branding and proprietary technology from misuse",
        "Liability Protection — Limits the business's liability by defining its responsibilities and disclaimers",
        "Legally Required Disclosures — Includes necessary legal notices and compliance statements",
        "Establishes Legal Framework — Serves as a binding document outlining rights, obligations and permissible conduct",
        "Minimises Misunderstandings — Reduces disputes by ensuring all parties understand the terms clearly",
        "Enhances Trust and Credibility — Reinforces brand credibility by demonstrating professionalism",
        "Consequences for Non-compliance — Outlines penalties or actions in case users violate the terms",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Award,
    },
    {
      id: 2,
      badge: "Why It Matters",
      title: "Why is Terms and Conditions Agreement Important?",
      description:
        "A Terms and Conditions agreement serves as a legally binding contract that outlines how an organisation governs its services, protects user data, and manages its platform. It is essential for operational transparency and legal protection.",
      features: [
        "Enforcing Policies — Empowers the organisation to implement and enforce its internal policies in case of user violations",
        "Service Withdrawal — Grants the business authority to revoke access or discontinue services to users engaging in prohibited behaviour",
        "Account Disabling — Defines circumstances under which user accounts may be suspended or terminated",
        "Managing Customer Expectations — Helps clearly communicate the scope and limitations of services",
        "Defining Rules of Conduct — Establishes acceptable user behaviour, prohibiting abusive or harmful actions",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Scale,
    },
    {
      id: 3,
      badge: "Legal Standing",
      title: "Are Terms and Conditions Agreements Legally Binding?",
      description:
        "Yes, Terms and Conditions agreements are legally binding contracts between a business and its users. They outline the mutual expectations, obligations, and rights governing access to and use of a service. These agreements serve as critical tools to address and resolve legal disputes effectively.",
      features: [
        "Clarity — The terms must be written in clear, accessible language that the average user can understand",
        "Fairness — The agreement should avoid imposing excessive or unreasonable obligations on users",
        "Legality — All terms must comply with applicable laws; any clause promoting unlawful activity renders the agreement invalid",
        "Mutual Agreement — Both parties must voluntarily consent, typically evidenced when users click \"I Agree\"",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Gavel,
    },
    {
      id: 4,
      badge: "Essential Clauses",
      title: "Essential Clauses in a Terms and Conditions Agreement",
      description:
        "A properly structured Terms and Conditions agreement enhances legal protection and reinforces trust in your platform or service. Here are the key clauses that should be included in every comprehensive agreement.",
      features: [
        "Scope of Services — Defines the nature and purpose of the products or services offered",
        "Changes to the Agreement — Grants the business the right to modify terms and informs users of update procedures",
        "Prices and Payment Clause — Outlines pricing, taxes, payment methods, and consequences of non-payment",
        "Limitation of Liability Clause — Limits the business's responsibility for damages and third-party content accuracy",
        "Governing Law Clause — Specifies the legal jurisdiction and applicable law governing the agreement",
        "Acceptable Use Clause — Sets rules for appropriate platform use and outlines penalties for violations",
        "User-Generated Content — Details rules for submitting user content and assigns responsibility to users",
        "Intellectual Property Clause — Protects the business's proprietary content and restricts unauthorised use",
        "Termination Clause — Explains when and why user access may be suspended or revoked",
        "Contact Clause — Provides official communication channels for users to reach the company",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: FileText,
    },
    {
      id: 5,
      badge: "Checklist",
      title: "Basic Checklist for Terms and Conditions Agreements",
      description:
        "A comprehensive checklist ensures that your Terms and Conditions agreement covers all essential aspects of your business operations, data handling practices, and user interactions.",
      features: [
        "Introduction — States the purpose of the business and informs users about data collection and privacy practices",
        "Information Gathering — Specifies what types of user data (e.g., IP address, server details) are collected",
        "Methods of Information Gathering — Describes how data is collected—manually or automatically—and processed",
        "Storage of Data — Outlines how and where user data is stored, including compliance with local and international laws",
        "Contact Details of Business — Provides users with official email and address details to reach the company",
        "Information Related to Services — Explains how data is collected during purchases and through integrated platforms",
        "Handling of Employee Details — Covers the secure handling of employee data including health and financial information",
        "Financial Activities — Emphasises secure financial transactions and protection of payment-related data",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: ClipboardCheck,
    },
    {
      id: 6,
      badge: "Step 1-3",
      title: "Procedure: Acceptance, Description & Offerings",
      description:
        "The first steps in creating a Terms and Conditions Agreement involve establishing the acceptance mechanism, providing a clear platform description, and specifying the goods or services offered to users.",
      features: [
        "Acceptance of Terms — State that the user must accept the agreement before accessing or using the services",
        "Description of the Platform or App — Provide a clear overview of the platform's purpose, features, and functionality",
        "Goods or Services Offered — Mention what specific goods or services are made available to users",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: BookOpen,
    },
    {
      id: 7,
      badge: "Step 4-6",
      title: "Procedure: Policies, Confirmation & Binding Terms",
      description:
        "Continue with establishing operational policies, confirming user agreement through affirmative action, and explaining when the agreement becomes legally binding upon the user.",
      features: [
        "Policies and Procedures — List the operational guidelines, usage rules, and compliance requirements",
        "User Agreement Confirmation — Ensure users confirm their agreement via checkbox or other affirmative action",
        "Need for a Terms of Service Agreement — Explain when and how the agreement becomes binding upon the user",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1568234928966-359c35dd8327?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Users,
    },
    {
      id: 8,
      badge: "Step 7-8",
      title: "Procedure: Liability Restrictions & IP Ownership",
      description:
        "Include essential clauses to limit your liability, add necessary legal disclaimers, and define ownership of content along with user restrictions regarding intellectual property usage.",
      features: [
        "Liability Restrictions and Disclaimers — Include clauses to limit your liability and add necessary legal disclaimers",
        "Intellectual Property and Content Ownership — Define ownership of content and user restrictions regarding IP usage",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Shield,
    },
    {
      id: 9,
      badge: "Step 9-10",
      title: "Procedure: Privacy Policies & Noncompliance",
      description:
        "Complete the agreement by outlining your data collection, storage, usage, and user privacy measures, along with describing actions your business may take if users violate the agreement.",
      features: [
        "Privacy Policies — Outline your data collection, storage, usage, and user privacy measures",
        "Consequences of Noncompliance — Describe actions your business may take if users violate the agreement",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: AlertCircle,
    },
    {
      id: 10,
      badge: "Our Services",
      title: "Services Offered for Terms of Use Agreements",
      description:
        "We provide end-to-end legal support for drafting and maintaining Terms of Use agreements, ensuring businesses operate with clarity, compliance, and credibility. These agreements define the relationship between your company and its users, outlining expectations, responsibilities, and legal protections.",
      features: [
        "Drafting customised and comprehensive Terms of Use agreements tailored to your business model and industry",
        "Ensuring compliance with relevant national laws, IT regulations, and consumer protection rules",
        "Incorporating clauses for data privacy, information security, and user data handling",
        "Providing legal consultation on user obligations, limitations of liability, and platform usage restrictions",
        "Adding intellectual property protection clauses to secure your proprietary content",
        "Structuring clear procedures for dispute resolution and customer grievances",
        "Conducting periodic reviews and updates to keep the agreement current with legal and operational changes",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: CheckCircle,
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
            <Link href="/start-generating-your-idea" className="w-fit">
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
              <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl opacity-20 blur-3xl animate-pulse" />
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
            Our Terms of Use Agreement Services
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">
            Comprehensive legal support for drafting and maintaining Terms of Use agreements
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

export default TermsOfUse;
