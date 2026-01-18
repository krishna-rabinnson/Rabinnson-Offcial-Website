"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { Check, ArrowRight, Building, FileText, ShieldCheck, TrendingUp, Users, ClipboardList, Award, Heart, Wallet } from "lucide-react";

import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";

import Avatar1 from '@/assets/images/avatar-1.webp';
import Avatar2 from '@/assets/images/avatar-2.webp';
import Avatar3 from '@/assets/images/avatar-3.webp';
import Avatar4 from '@/assets/images/avatar-4.webp';

export default function Section8Company() {
  const heroContent = {
    title: "Section 8 Company Registration",
    description: "We help mission-driven founders and social entrepreneurs legally establish Section 8 Companies—a non-profit structure under the Companies Act, 2013. Recognized for promoting charitable, educational, scientific, or cultural objectives, Section 8 Companies enjoy tax exemptions, donation eligibility, and credibility with donors and grant-makers.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    subText: "Have a Question? Request a Call back: +91-7011 808 002"
  };

  const introContent = {
    badge: "Section 8 Company",
    badgeIcon: Building,
    title1: "Overview of Online ",
    title2: "Section 8 Company Registration",
    subtitle: "Non-Profit with Corporate Structure",
    description: "A Section 8 Company is registered with the objective of promoting art, science, commerce, education, sports, research, social welfare, religion, charity, or environmental protection, among other purposes of public benefit. Once the registration process is successfully completed, the company is legally permitted to operate across India, furthering its mission without the intent of profit distribution to its members.",
    features: [
      "NGOs can register under Registrar of Societies or Section 8 of Companies Act, 2013",
      "Income must be used solely for promoting social objectives",
      "Must comply with Companies Act provisions and file annual returns",
      "Modifications to MoA or AoA require central government approval",
      "100% Tax Exemption under Section 12AA",
      "No Minimum Capital Requirement",
      "Separate Legal Identity with perpetual succession",
      "Enhanced Credibility among donors and institutions"
    ],
    image1: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1080"
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Our Services",
      title: "Our Section 8 Company Registration Services",
      description: "We handle the complex compliance and documentation process, allowing you to focus on social impact.",
      features: [
        "Name reservation and MOA/AOA drafting aligned with non-profit goals",
        "Assistance in obtaining DSC and DIN for directors",
        "Filing of incorporation forms with MCA (SPICe+, INC-12, INC-13)",
        "Coordination for License under Section 8 from ROC/MCA",
        "Post-registration support for 12A, 80G, FCRA, and NGO Darpan",
        "Advisory on governance, financial transparency, and donor readiness"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 2,
      badge: "Benefits",
      title: "Benefits of Registering a Section 8 Company",
      description: "Registering a Section 8 Company offers several unique advantages for individuals and organizations focused on social welfare, charitable causes, and not-for-profit objectives.",
      features: [
        "100% Tax Exemption - Under Section 12AA for charitable purposes",
        "No Minimum Capital Requirement - Flexibility in capital structure",
        "Separate Legal Identity - Perpetual succession and asset ownership",
        "Enhanced Credibility - Stringent compliance increases donor trust",
        "Flexible Naming - No need to include 'Section 8' in company name",
        "Donation Eligibility - Can receive domestic and foreign donations"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: ShieldCheck,
    },
    {
      id: 3,
      badge: "Legal Requirements",
      title: "Key Legal Requirements for Registration",
      description: "To register a Section 8 Company in India, the following legal criteria must be fulfilled based on the company type.",
      features: [
        "Private Limited: Minimum 2 directors, max 200 members",
        "Public Limited: Minimum 3 directors, no member limit",
        "No minimum capital required for both types",
        "Must be formed for non-profit purposes only",
        "Profits must be reinvested in company or charitable activities",
        "At least one director must be Indian resident"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: ClipboardList,
    },
    {
      id: 4,
      badge: "Documents Required",
      title: "Documents Required for Registration",
      description: "To complete the registration process of a Section 8 Company in India, the following documents are required.",
      features: [
        "Memorandum of Association (MoA) and Articles of Association (AoA)",
        "Declaration by first directors and subscribers",
        "Proof of registered office address (utility bill)",
        "Digital Signature Certificate (DSC) of all directors",
        "Identity and address proof of directors and subscribers",
        "Board resolution and consent of nominee (Form INC-3)"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: FileText,
    },
    {
      id: 5,
      badge: "Eligibility Criteria",
      title: "Eligibility Criteria for Incorporation",
      description: "To incorporate a Section 8 Company in India, the following eligibility conditions must be met.",
      features: [
        "Individual, HUF, or Registered Company can apply",
        "Minimum 2 individuals as shareholders or directors",
        "At least one director must be Indian resident",
        "Primary objective: sports, social welfare, science, arts, education",
        "Surplus income must be reinvested in core objectives",
        "No salary or remuneration for founders, directors, members"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Users,
    },
    {
      id: 6,
      badge: "Annual Compliance",
      title: "Annual Compliance Requirements",
      description: "Section 8 Companies must adhere to the following mandatory annual compliances to remain legally compliant and in good standing.",
      features: [
        "Filing of Annual Return with MCA",
        "Statement of Accounts and Solvency filing",
        "Statutory Audit if turnover > ₹40 lakhs or capital > ₹25 lakhs",
        "Income Tax Return filing (mandatory regardless of tax liability)",
        "Board meetings and maintaining minutes",
        "Financial records and governance documentation"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: TrendingUp,
    },
    {
      id: 7,
      badge: "Donations & Funding",
      title: "Donations and Funding Options",
      description: "A Section 8 Company is not permitted to raise capital through public deposits, but it can legally accept donations from individuals and organizations.",
      features: [
        "Domestic Donations - No restrictions, robust tracking required",
        "Foreign Contributions - Allowed with FCRA registration",
        "FCRA registration after 3 years of incorporation",
        "Prior approval available for foreign funding before 3 years",
        "Equity Funding - Issue shares at premium for non-profit objectives",
        "Grant eligibility from government and private foundations"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Wallet,
    },
    {
      id: 8,
      badge: "Tax Registrations",
      title: "Section 12AA and 80G Registration",
      description: "Registering under Section 12AA and obtaining 80G approval offers valuable tax advantages and boosts donor confidence.",
      features: [
        "Section 12AA - Income tax exemption for charitable income",
        "Section 80G - Donors can claim tax deductions on contributions",
        "Enhanced fundraising opportunities with 80G certificate",
        "80G valid until March 2025, renewal required",
        "CSR-1 Registration for corporate donations",
        "NGO Darpan registration for government grants"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Heart,
    },
    {
      id: 9,
      badge: "Why Choose Us",
      title: "Streamline Section 8 Registration with Us",
      description: "We are your trusted partner for hassle-free Section 8 Company registration in India. Our expert team and efficient online process make it easy for entrepreneurs, NGOs, and social ventures to set up legally compliant, not-for-profit organizations.",
      features: [
        "Expert team for non-profit compliance",
        "End-to-end registration support",
        "12A, 80G, FCRA registration assistance",
        "Quick turnaround and transparent pricing",
        "Post-registration compliance support",
        "Donor readiness and governance advisory"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Award,
    }
  ];

  const [, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLElement);
            if (index !== -1) setActiveSection(index);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    sectionRefs.current.forEach((section) => { if (section) observer.observe(section); });
    return () => { sectionRefs.current.forEach((section) => { if (section) observer.unobserve(section); }); };
  }, []);

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
              <Typography color="#fff" noDarkMode className="md:hidden">Trusted by NGOs & Social Enterprises</Typography>
            </div>
            <Typography as="div" color="#fff" size={72} sizeTablet={52} sizeMobile={40} weight={600} lineHeight={85} lineHeightTablet={64} lineHeightMobile={52} letterSpacing={-2.16} letterSpacingMobile={-1.2} noDarkMode>
              {heroContent.title}
            </Typography>
            <Typography color="#fff" noDarkMode size={18} className="md:w-[80%]">{heroContent.description}</Typography>
            <Link href={heroContent.ctaLink}>
              <Button variant="primary" className="mt-[32px]">{heroContent.ctaText} 👉</Button>
            </Link>
            <p className="text-xl text-center text-black">{heroContent.subText}</p>
          </div>
        </div>
      </HeroBackground>
      <div className="w-full h-32 bg-gradient-to-b from-transparent to-white -mt-32 relative z-10 pointer-events-none" />
      <div className="min-h-screen bg-white relative z-20">
        <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-100 rounded-full">
                <IntroIcon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
                <span className="text-slate-700 font-medium text-sm sm:text-base">{introContent.badge}</span>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold">
                  {introContent.title1} <span className="text-blue-500">{introContent.title2}</span>
                </h1>
                {introContent.subtitle && <h2 className="text-xl sm:text-2xl text-slate-600">{introContent.subtitle}</h2>}
              </div>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{introContent.description}</p>
              <div className="space-y-2 sm:space-y-3">
                {introContent.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <p className="text-slate-700 text-sm sm:text-base">{feature}</p>
                  </div>
                ))}
              </div>
              <button className="mt-6 sm:mt-8 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-slate-900 text-white text-sm sm:text-base font-semibold shadow-lg transition hover:bg-slate-800 hover:shadow-xl">
                Get Started 👉
              </button>
            </div>

            <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full mt-8 lg:mt-0">
              <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-purple-400 to-violet-400 rounded-3xl opacity-20 blur-3xl" />
              <div className="absolute top-0 right-0 w-[75%] sm:w-[80%] lg:w-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
                <ImageWithFallback src={introContent.image1} alt="Intro visual 1" className="w-full h-64 sm:h-80 lg:h-[450px] object-cover" />
              </div>
              <div className="absolute bottom-5 sm:bottom-10 lg:bottom-20 left-0 w-[75%] sm:w-[80%] lg:w-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 border-4 sm:border-8 border-white z-20">
                <ImageWithFallback src={introContent.image2} alt="Intro visual 2" className="w-full h-64 sm:h-80 lg:h-[450px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 pb-6 sm:pb-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-2 sm:mb-3">
            Complete Section 8 Company Registration Process
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-xs sm:text-sm lg:text-base">
            From incorporation to tax exemptions and compliance, we are with you at every step.
          </p>
        </div>

        <div className="relative">
          {scrollSections.map((section, index) => {
            const Icon = section.icon;
            const isEven = section.imagePosition === "left";
            return (
              <section key={section.id} ref={(el) => { sectionRefs.current[index] = el; }} className="sticky top-0 min-h-screen flex items-center bg-white overflow-hidden py-8 sm:py-0">
                <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center">
                    <div className={`flex flex-col justify-center space-y-4 sm:space-y-6 ${isEven ? "md:order-2" : ""}`}>
                      <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-100 rounded-full w-fit">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700" />
                        <span className="text-slate-700 font-medium text-xs sm:text-sm">{section.badge}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-semibold">{section.title}</h2>
                      <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">{section.description}</p>
                      <div className="space-y-2 sm:space-y-3 pt-1 sm:pt-2">
                        {section.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 sm:gap-3">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                            </div>
                            <p className="text-slate-700 text-xs sm:text-sm lg:text-base">{feature}</p>
                          </div>
                        ))}
                      </div>
                      <button className="mt-4 sm:mt-6 group px-5 sm:px-7 py-2.5 sm:py-3.5 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-colors flex items-center gap-2 w-fit text-sm sm:text-base">
                        Learn More <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                    <div className={`${isEven ? "md:order-1" : ""}`}>
                      {section.hasOverlappingImages ? (
                        <div className="relative h-[300px] sm:h-[420px] md:h-[480px] lg:h-[540px]">
                          <div className="absolute top-0 right-4 sm:right-12 w-[60%] sm:w-[65%] h-[55%] sm:h-[60%] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl z-10">
                            <ImageWithFallback src={section.imageUrl1} alt={`${section.badge} 1`} className="w-full h-full object-cover" />
                          </div>
                          <div className="absolute bottom-0 left-0 w-[65%] sm:w-[70%] h-[60%] sm:h-[65%] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl z-20">
                            <ImageWithFallback src={section.imageUrl2!} alt={`${section.badge} 2`} className="w-full h-full object-cover" />
                          </div>
                          <div className="absolute -bottom-2 sm:-bottom-4 right-4 sm:right-8 bg-white rounded-lg sm:rounded-xl shadow-lg px-4 sm:px-6 py-2 sm:py-4 z-30">
                            <div className="text-slate-900 font-bold text-lg sm:text-xl">0{index + 1}</div>
                            <div className="text-slate-500 text-xs sm:text-sm">Step</div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative h-[250px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
                          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl w-full h-full">
                            <ImageWithFallback src={section.imageUrl1} alt={section.badge} className="w-full h-full object-cover" />
                          </div>
                          <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-white rounded-lg sm:rounded-xl shadow-lg px-4 sm:px-6 py-2 sm:py-4">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">0{index + 1}</div>
                            <div className="text-[10px] sm:text-xs lg:text-sm text-slate-500">Step</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
