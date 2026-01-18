"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  EyeOff,
  FileText,
  Shield,

  Scale,
  Users,
  BookOpen,
  ClipboardCheck,
  AlertCircle,
  Gavel,
  CheckCircle,
  Lock,
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import Avatar1 from "@/assets/images/avatar-1.webp";
import Avatar2 from "@/assets/images/avatar-2.webp";
import Avatar3 from "@/assets/images/avatar-3.webp";
import Avatar4 from "@/assets/images/avatar-4.webp";

const NDA = () => {
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
    title: "Non-Disclosure Agreement Services",
    description:
      "We offer complete legal support for drafting, registering, and enforcing Non-Disclosure Agreements (NDAs) that protect your business-critical information and intellectual property.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    subText: "Safeguard Your Business Secrets & Confidential Information",
  };

  const introContent = {
    badge: "NDA Overview",
    badgeIcon: EyeOff,
    title: "Overview of Non-Disclosure Agreement (NDA)",
    subtitle: "Protect Your Confidential Information",
    description:
      "A Non-Disclosure Agreement (NDA) is a legally enforceable contract where parties agree to protect specific confidential information from being disclosed to others. NDAs are vital tools used in business transactions, employment relationships, and strategic partnerships to safeguard intellectual property, trade secrets, and sensitive data. In India, NDAs are governed by the Indian Contract Act, 1872, and for them to be legally valid and enforceable, they must also comply with applicable stamp duty regulations.",
    features: [
      "Custom NDA Drafting tailored to your business type and confidentiality needs",
      "Enforceability Advisory to ensure the NDA stands up in Indian courts",
      "Optional NDA Registration to provide added legal weight and documentation",
      "Protection of IP and Trade Secrets through precise and robust confidentiality clauses",
      "Compliance & Enforcement Support to help you take timely legal action in case of breaches",
    ],
    image1:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
    image2:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Key Highlights",
      title: "Essential Features of NDAs",
      description:
        "NDAs are legally binding contracts that protect sensitive information shared between parties. Understanding their key features helps ensure your business information remains secure.",
      features: [
        "Protects sensitive information in business or employment settings",
        "Legally binds parties from disclosing or misusing shared confidential data",
        "Can be enforced in court in case of a breach",
        "Must be duly stamped to meet legal compliance in India",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 2,
      badge: "Common Uses",
      title: "Uses of Non-Disclosure Agreements (NDAs)",
      description:
        "NDAs are used in a wide range of situations where confidentiality is essential. From protecting intellectual property to securing trade secrets, NDAs serve multiple critical purposes.",
      features: [
        "Intellectual Property Protection — Prevent disclosure of proprietary designs, formulas, or inventions shared with employees, contractors, or partners",
        "Confidential Business Plans — Protect innovative business strategies or concepts shared with stakeholders, investors, or collaborators",
        "Trade Secrets — Secure vital internal data like client lists, pricing models, or marketing strategies",
        "Personal & Sensitive Information — Maintain discretion over private matters that could impact personal or professional reputation",
        "Medical Information — Ensure confidentiality of lab results or sensitive health records handled by diagnostic or clinical entities",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Lock,
    },
    {
      id: 3,
      badge: "Key Benefits",
      title: "Benefits of Signing a Non-Disclosure Agreement (NDA)",
      description:
        "Executing an NDA provides numerous advantages for your business or professional engagement, from establishing clear obligations to protecting your intellectual property.",
      features: [
        "Clear Obligations — Defines the duties of both disclosing and receiving parties, eliminating ambiguity",
        "Confidentiality Assurance — Provides legal assurance that sensitive data will remain undisclosed",
        "Preservation of Secrets — Helps protect critical information like financials, strategies, or development plans",
        "Commitment to Protection — Reflects mutual commitment to confidentiality, encouraging responsible conduct",
        "Protection of Intellectual Property — Shields proprietary assets such as trade secrets and innovations",
        "Overall Organisational Protection — Minimises risk of leaks and data breaches, reinforcing security",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Shield,
    },
    {
      id: 4,
      badge: "Key Elements",
      title: "Key Elements of a Non-Disclosure Agreement",
      description:
        "A well-structured NDA contains essential elements that define the scope, obligations, and consequences. Understanding these elements ensures your agreement is comprehensive and enforceable.",
      features: [
        "Parties Involved — Identifies the Disclosing Party and the Receiving Party with their obligations",
        "Description of Confidential Information — Specifies what information is considered confidential",
        "Scope of the Agreement — Defines purpose, usage limitations, internal access rights, and confidentiality obligations",
        "Exclusions from Confidentiality — Lists information not covered by the NDA (public knowledge, prior known info)",
        "Validity and Duration — Specifies how long the NDA will be effective—commonly between 2 to 5 years",
        "Duties and Obligations — Outlines responsibilities of both parties to protect confidential information",
        "Consequences of Breach — States legal remedies such as injunctions, damages, or legal action",
        "Dispute Resolution — Provides methods like negotiation, mediation, or arbitration",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: BookOpen,
    },
    {
      id: 5,
      badge: "NDA Types",
      title: "Types of Non-Disclosure Agreements",
      description:
        "Different types of NDAs serve different purposes depending on the nature of the relationship and information exchange between parties.",
      features: [
        "Unilateral NDA — Only one party is bound to maintain confidentiality of shared information (Employers protecting data from employees/vendors)",
        "Bilateral NDA (Mutual NDA) — Both parties agree not to disclose shared confidential information (Joint ventures, strategic partnerships, M&A discussions)",
        "Multilateral NDA — One party discloses to multiple parties, who all agree to maintain secrecy (Multi-party collaborations, consortiums, R&D partnerships)",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Users,
    },
    {
      id: 6,
      badge: "Exclusions",
      title: "Exclusion Elements in a Non-Disclosure Agreement",
      description:
        "Certain types of information are typically excluded from NDA coverage. Understanding these exclusions helps define the boundaries of confidentiality obligations.",
      features: [
        "Recipient's Prior Knowledge — Information already known to the recipient before signing the NDA is not subject to confidentiality",
        "Publicly Available Information — Data already in the public domain (not due to the recipient's actions) is excluded",
        "Information from Third Parties — If obtained lawfully from an unrelated third party not bound by confidentiality",
        "Legal Obligation — Disclosure required by law, court order, or regulatory authority is permitted and does not constitute a breach",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: AlertCircle,
    },
    {
      id: 7,
      badge: "Key Functions",
      title: "Key Functions of a Non-Disclosure Agreement",
      description:
        "NDAs serve critical functions beyond simple confidentiality protection. They help preserve patent rights and distinguish between exclusive and confidential information.",
      features: [
        "Preservation of Patent Rights — NDAs protect patent eligibility when developing new products or inventions. Public disclosure before filing can invalidate claims",
        "Distinguishing Exclusive and Confidential Information — NDAs help clearly differentiate between exclusive (proprietary) and confidential information",
        "Legal Clarity — Provides clear understanding of what must be protected and how, reducing ambiguity in legal proceedings",
        "Protection Before Legal Filing — Ensures confidentiality is maintained until legal protection is secured through patents or trademarks",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1568234928966-359c35dd8327?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Scale,
    },
    {
      id: 8,
      badge: "When Required",
      title: "When is a Non-Disclosure Agreement Required?",
      description:
        "NDAs are essential in various business scenarios where sensitive information needs to be shared with external parties while maintaining protection.",
      features: [
        "Presenting Invention or Business Idea — When pitching ideas to potential partners, investors, or distributors, NDAs protect intellectual property from being copied or disclosed",
        "Sharing Financial, Marketing, or Business Data — In acquisition discussions, NDAs protect sensitive internal information shared with potential buyers during due diligence",
        "Engaging External Companies or Individuals — When outsourcing or collaborating with service providers, NDAs safeguard proprietary processes, customer databases, or trade secrets",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: ClipboardCheck,
    },
    {
      id: 9,
      badge: "Legal Framework",
      title: "Enforceability of Non-Disclosure Agreements in India",
      description:
        "Non-Disclosure Agreements (NDAs) are legally enforceable in India, provided they meet the requirements of applicable laws. Their enforceability is supported by key legal components.",
      features: [
        "Indian Contract Act, 1872 — Forms the legal foundation by defining essential elements: offer, acceptance, lawful consideration, intention, and capacity",
        "Stamp Duty Compliance — NDAs must be duly stamped according to rates prescribed by the Stamp Act of the respective Indian state",
        "Optional Registration under Registration Act, 1908 — Although not mandatory, registering the NDA can add legal weight and serve as strong evidence in court",
        "Enforceable Remedies — Courts can grant injunctions, damages, or other legal remedies in case of breach",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Gavel,
    },
    {
      id: 10,
      badge: "Drafting Guide",
      title: "Drafting a Non-Disclosure Agreement",
      description:
        "Drafting an NDA is essential for protecting sensitive information and must be tailored to the nature of the data and parties involved. Key components to include:",
      features: [
        "Identification of Parties — Clearly define the disclosing party and recipient, including any third parties who may access information",
        "Scope of Confidentiality Obligations — Outline how confidential information will be used, who may access it, and measures to maintain confidentiality",
        "Definition of Confidential Information — Specify what constitutes confidential information, including both written and oral disclosures",
        "Exclusions from Confidentiality — List exceptions such as prior knowledge, public domain information, or lawful disclosures",
        "Terms of Agreement — Duration, Return/Destruction Clause, Non-Solicitation Clause, Dispute Resolution, Injunction Clause, No Rights Clause",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: FileText,
    },
    {
      id: 11,
      badge: "Precautions",
      title: "Precautions When Creating and Signing an NDA",
      description:
        "When drafting or entering into an NDA, certain precautions must be considered to ensure legal enforceability and clarity in the agreement.",
      features: [
        "Clarity and Precision — Use clear, unambiguous language to define confidential information and obligations, ensuring all terms are easily understood",
        "Thorough Review — Carefully read and understand each clause before signing. If any term is unclear, consult legal professionals for clarification",
        "Avoid Unnecessary Clauses — Keep the agreement focused and concise. Avoid including vague, conflicting, or irrelevant clauses",
        "Inclusion of Expiry Date and Renewal Clause — Define a clear validity period and include a renewal clause if confidentiality is expected to extend",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: AlertCircle,
    },
    {
      id: 12,
      badge: "Why Choose Us",
      title: "Why Choose Our Non-Disclosure Agreement Services?",
      description:
        "We specialise in providing end-to-end Non-Disclosure Agreement (NDA) services tailored to your business needs. Our expert legal support ensures that your confidential information stays protected, and your agreements are legally sound and enforceable.",
      features: [
        "Comprehensive Drafting Support — Customised NDAs that reflect the specific nature and sensitivity of your business information",
        "Regulatory Compliance — Guidance aligned with the Indian Contract Act, 1872, and applicable stamp duty laws to ensure legal validity",
        "Protection of Intellectual Property & Trade Secrets — Structuring NDAs to protect inventions, trade secrets, and proprietary strategies",
        "Confidentiality Risk Mitigation — Safeguarding data during partnerships, investments, outsourcing, and employee engagements",
        "Professional Assistance at Every Step — From initial consultation to post-signing compliance checks, we ensure seamless execution",
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
              <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-slate-400 to-zinc-500 rounded-3xl opacity-20 blur-3xl animate-pulse" />
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
            Our Non-Disclosure Agreement Services
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">
            Comprehensive confidentiality protection and NDA drafting services
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

export default NDA;
