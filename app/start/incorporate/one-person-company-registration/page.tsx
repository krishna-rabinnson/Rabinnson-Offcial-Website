"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { Check, ArrowRight, UserCircle, FileText, ShieldCheck, TrendingUp, ClipboardList, Award, FileCheck, Users } from "lucide-react";

import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";

import Avatar1 from '@/assets/images/avatar-1.webp';
import Avatar2 from '@/assets/images/avatar-2.webp';
import Avatar3 from '@/assets/images/avatar-3.webp';
import Avatar4 from '@/assets/images/avatar-4.webp';

export default function OnePersonCompany() {
  const heroContent = {
    title: "One Person Company Registration",
    description: "We empower solo entrepreneurs and small business owners to operate with limited liability and full legal recognition through One Person Company (OPC) Registration. Designed for individuals who want the benefits of a private limited company without needing a co-founder, OPC is ideal for freelancers, consultants, and early-stage entrepreneurs.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    subText: "Have a Question? Request a Call back: +91-7011 808 002"
  };

  const introContent = {
    badge: "One Person Company",
    badgeIcon: UserCircle,
    title1: "Overview of ",
    title2: "OPC Registration",
    subtitle: "Solo Entrepreneur, Corporate Power",
    description: "The Companies Act, 2013 introduced a new business structure known as One Person Company (OPC), allowing a single entrepreneur to establish a company while enjoying the benefits of limited liability and a separate legal entity status. Under Section 2(62) of the Companies Act, 2013, an OPC can now be incorporated with just one director and one member, who can be the same individual. Compared to a private limited company, OPCs are subject to fewer regulatory compliances.",
    features: [
      "Single Member Ownership - One director and one member allowed",
      "Limited Liability Protection - Personal assets protected",
      "Separate Legal Entity - Company can sue and be sued",
      "No Minimum Paid-up Capital Required",
      "Simplified Compliance Requirements",
      "Perpetual Succession - Nominee takes over if needed",
      "Easy to Convert to Pvt Ltd when business grows",
      "Better Credibility than Sole Proprietorship"
    ],
    image1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1080"
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Our Services",
      title: "Our OPC Registration Services Include",
      description: "We simplify the incorporation process so you can focus on growing your idea with full control and compliance.",
      features: [
        "Name reservation and pre-checks via MCA portal",
        "Assistance in obtaining DSC and DIN for the sole director",
        "Drafting of MOA, AOA, and Nominee Consent Form",
        "Filing of SPICe+ forms for OPC incorporation",
        "PAN, TAN, and post-incorporation document delivery",
        "Support with GST, MSME, and Startup India registration"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 2,
      badge: "Benefits",
      title: "Benefits of OPC Registration in India",
      description: "Registering a One Person Company (OPC) offers several advantages, making it an ideal choice for solo entrepreneurs.",
      features: [
        "Legal Protection & Limited Liability - Personal assets protected",
        "Easy Access to Funding - VCs, angel investors, business loans",
        "Simplified Compliance Requirements - Fewer obligations",
        "Quick & Hassle-Free Incorporation - One member, one nominee",
        "Efficient Management & Decision-Making - Single owner control",
        "Perpetual Succession - Nominee takes over in case of demise"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: ShieldCheck,
    },
    {
      id: 3,
      badge: "Eligibility Checklist",
      title: "Checklist for Online OPC Registration",
      description: "To register an OPC in India, the following criteria must be met as per the Companies Act, 2013.",
      features: [
        "Only Indian citizen (natural person) can register - Companies/LLPs not eligible",
        "Must have resided in India for at least 182 days in previous year",
        "Minimum authorized capital of ₹1,00,000",
        "Must appoint a nominee during registration",
        "Cannot engage in financial services (banking, insurance)",
        "Convert to Pvt Ltd if capital exceeds ₹50 lakhs or turnover ₹2 crores"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: ClipboardList,
    },
    {
      id: 4,
      badge: "Documents Required",
      title: "Documents Required for OPC Registration",
      description: "The following documents are required to successfully register a One Person Company (OPC) in India.",
      features: [
        "Memorandum of Association (MoA) - Company objectives",
        "Articles of Association (AoA) - Rules and regulations",
        "Nominee's Consent (Form INC-3) with PAN & Aadhaar",
        "Registered Office Proof - Lease, utility bill, or NOC",
        "Director's Declaration (Form INC-9 and DIR-2)",
        "Professional Certification by CA, CS, or Cost Accountant"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: FileCheck,
    },
    {
      id: 5,
      badge: "Registration Process",
      title: "OPC Registration Process in India",
      description: "The process of registering a One Person Company (OPC) involves the following steps. We handle the complete process for you.",
      features: [
        "Step 1: Obtain Digital Signature Certificate (DSC)",
        "Step 2: Apply for Director Identification Number (DIN) via SPICe+",
        "Step 3: Name Reservation in format ABC (OPC) Private Limited",
        "Step 4: Prepare MoA, AoA, and nominee appointment documents",
        "Step 5: Filing of SPICe+, SPICe-MoA, SPICe-AoA forms with MCA",
        "Step 6: Certificate of Incorporation issued by RoC"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: TrendingUp,
    },
    {
      id: 6,
      badge: "Compliance Requirements",
      title: "OPC Compliance Requirements in India",
      description: "Under the Companies Act, 2013, a One Person Company (OPC) must adhere to specific compliance requirements within defined timelines.",
      features: [
        "Board Meetings - At least one per quarter (90 days gap)",
        "Bookkeeping - Maintain accurate books of accounts",
        "Statutory Audit - By qualified Chartered Accountant",
        "Income Tax Return - File annually before September 30th",
        "Form AOC-4 - Financial statements filing",
        "Form MGT-7A - Annual return (specific to OPCs)"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Users,
    },
    {
      id: 7,
      badge: "Why Choose Us",
      title: "Why Choose Us for Online OPC Registration?",
      description: "We offer comprehensive end-to-end services for online OPC registration in India. From expert guidance during the initial planning stage to fulfilling all regulatory requirements, our team ensures your OPC is registered quickly, correctly, and compliantly.",
      features: [
        "Expert Guidance - From planning to compliance",
        "End-to-End Services - Complete registration support",
        "Quick Turnaround - Fast processing and approvals",
        "Legal Integrity - Maintained throughout lifecycle",
        "Post-Registration Support - Ongoing compliance assistance",
        "Transparent Pricing - No hidden charges"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080",
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
              <Typography color="#fff" noDarkMode className="md:hidden">Trusted by Solo Founders</Typography>
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
              <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-3xl opacity-20 blur-3xl" />
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
            Complete OPC Registration Process
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-xs sm:text-sm lg:text-base">
            From OPC incorporation to compliance and growth, we are with you at every step.
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
