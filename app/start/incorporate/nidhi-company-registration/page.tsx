"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { Check, ArrowRight, Landmark, FileText, ShieldCheck, Users, ClipboardList, Building2, Ban, Award } from "lucide-react";

import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";

import Avatar1 from '@/assets/images/avatar-1.webp';
import Avatar2 from '@/assets/images/avatar-2.webp';
import Avatar3 from '@/assets/images/avatar-3.webp';
import Avatar4 from '@/assets/images/avatar-4.webp';

export default function NidhiCompany() {
  const heroContent = {
    title: "Nidhi Company Registration",
    description: "We enable community finance and thrift organizations to register as Nidhi Companies, a special class of NBFC recognized under Section 406 of the Companies Act, 2013. These companies are ideal for promoting savings among members and facilitating secured loans without external involvement.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    subText: "Have a Question? Request a Call back: +91-7011 808 002"
  };

  const introContent = {
    badge: "Nidhi Company",
    badgeIcon: Landmark,
    title1: "Overview of ",
    title2: "Nidhi Company Registration",
    subtitle: "Promote Thrift & Savings Among Members",
    description: "A Nidhi Company is a type of Non-Banking Financial Company (NBFC) recognized under Section 406 of the Companies Act, 2013 and governed by the Nidhi Rules, 2014. These companies are created primarily to promote savings and provide loans among their members. To register a Nidhi Company, a minimum of 7 members is required. They are also commonly known as Mutual Benefit Funds or Permanent Funds.",
    features: [
      "Governed by Ministry of Corporate Affairs (MCA)",
      "Not required to register with RBI, but must follow MCA guidelines",
      "Can accept deposits and lend money only to its members",
      "Restricted from conducting general NBFC activities",
      "Cannot accept public deposits",
      "Must be incorporated as a Public Limited Company",
      "Company name must end with 'Nidhi Limited'",
      "Permitted to offer locker rental services to members"
    ],
    image1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1080"
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Our Services",
      title: "Our Nidhi Company Registration Services",
      description: "We guide you through the regulatory, documentation, and ROC compliance required to establish a legally compliant Nidhi Company.",
      features: [
        "Name reservation and pre-checks on MCA portal",
        "Drafting and filing of incorporation documents with ROC",
        "PAN, TAN, and bank account setup post-incorporation",
        "Assistance in preparing bylaws and member onboarding",
        "Capital compliance support",
        "Post-registration compliance - NDH-1, NDH-2, annual filings"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 2,
      badge: "Eligibility Criteria",
      title: "Key Eligibility for Nidhi Company Registration",
      description: "Registering a Nidhi Company in India is straightforward as it does not require RBI approval. However, it must comply with specific norms under the Companies Act, 2013 and Nidhi Rules, 2014.",
      features: [
        "Must be incorporated as a Public Limited Company",
        "Company name must end with 'Nidhi Limited'",
        "Minimum 7 members including 3 designated directors",
        "Minimum equity share capital of ₹10 lakhs",
        "Activities limited to borrowing and lending among members only",
        "Locker rental income must not exceed 20% of total income"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: ClipboardList,
    },
    {
      id: 3,
      badge: "Post-Incorporation",
      title: "Post-Incorporation Compliance (Within 1 Year)",
      description: "After incorporation, Nidhi Companies must meet specific compliance requirements within one year as per MCA guidelines.",
      features: [
        "Net Owned Funds (NOF) must reach ₹20 lakhs",
        "Maintain at least 10% of deposits as unencumbered term deposits",
        "NOF-to-deposit ratio should be maintained between 1:20",
        "At least 10% of total deposits in fixed deposits with nationalized bank",
        "File Form NDH-4 within 4 months for Nidhi status",
        "Meet minimum member requirements"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: ShieldCheck,
    },
    {
      id: 4,
      badge: "Benefits",
      title: "Benefits of Nidhi Company Registration",
      description: "Registering a Nidhi Company offers several strategic advantages, especially for individuals looking to promote savings and provide affordable credit within a trusted member network.",
      features: [
        "Affordable Credit Access - Loans at lower interest rates",
        "Encourages Savings - Promotes financial discipline among members",
        "Simple & Cost-Effective Setup - Only 7 members required",
        "No RBI Compliance Required - More operational flexibility",
        "Low Risk Model - Transactions limited to members only",
        "Net-Owned Fund Leverage - 1:20 NOF to deposit ratio"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Users,
    },
    {
      id: 5,
      badge: "Documents Required",
      title: "Documents Required for Registration",
      description: "To register a Nidhi Company in India, the following documents are required for compliance with the Companies Act, 2013 and MCA guidelines.",
      features: [
        "DIN and DSC for all directors",
        "Passport-sized photographs of directors and members",
        "PAN Card of all directors and shareholders",
        "Address Proof - Bank Statement, Aadhaar, Driving License",
        "Memorandum of Association (MoA) & Articles of Association (AoA)",
        "Registered Office Address Proof with NOC from property owner"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 6,
      badge: "Registration Process",
      title: "Step-by-Step Registration Procedure",
      description: "Registering a Nidhi Company involves a streamlined legal process governed by the Companies Act, 2013 and Nidhi Rules, 2014. Here's how we help you navigate each step.",
      features: [
        "Step 1: Obtain DSC & DIN for all proposed directors",
        "Step 2: Choose unique name ending with 'Nidhi Limited'",
        "Step 3: Name Reservation via RUN or SPICe+ form",
        "Step 4: File SPICe+ form (Part B) for incorporation",
        "Step 5: Obtain Certificate of Incorporation with CIN",
        "Step 6: File Form NDH-4 within 4 months for Nidhi status"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: ClipboardList,
    },
    {
      id: 7,
      badge: "Restricted Activities",
      title: "Restricted Activities for Nidhi Companies",
      description: "Nidhi Companies are established for the sole purpose of lending and borrowing within their own member base. As per the Nidhi Rules, 2014, they are prohibited from engaging in certain activities.",
      features: [
        "Cannot engage in chit funds, hire purchase, or leasing",
        "Cannot issue debentures or preference shares",
        "Cannot open current accounts for members",
        "Cannot accept deposits from non-members",
        "Cannot pledge members' assets as security",
        "Cannot advertise to solicit public deposits"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Ban,
    },
    {
      id: 8,
      badge: "Branch Opening",
      title: "Can a Nidhi Company Open Branches?",
      description: "Yes, a Nidhi Company can open branches, but certain conditions must be met as per the latest amendments under the Nidhi Rules.",
      features: [
        "Up to 3 branches within same district without special approval",
        "More than 3 branches requires Form NDH-2 filing",
        "Must notify Registrar within 30 days of opening branch",
        "Must have net profits for last 3 consecutive years",
        "No branch outside state without special permission",
        "Prior approval from Regional Director for more than 3 branches"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Building2,
    },
    {
      id: 9,
      badge: "Why Choose Us",
      title: "Why Choose Us for Nidhi Company Registration?",
      description: "Registering a Nidhi Company requires precision, compliance, and timely execution - we deliver all three. With extensive experience and a dedicated team, we offer end-to-end support.",
      features: [
        "Securing DINs and DSCs for all directors",
        "Complete document filing and ROC submission",
        "Obtaining Certificate of Incorporation",
        "Full compliance with MCA norms",
        "Fast turnaround times",
        "Responsive support at every step"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1080",
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
                <Image src={Avatar1} alt="Avatar1" className="w-[32px]" />
                <Image src={Avatar2} alt="Avatar2" className="w-[32px] ml-[-8px]" />
                <Image src={Avatar3} alt="Avatar3" className="w-[32px] ml-[-8px]" />
                <Image src={Avatar4} alt="Avatar4" className="w-[32px] ml-[-8px]" />
              </div>
              <Typography color="#fff" noDarkMode className="md:hidden">Trusted by Communities</Typography>
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
              <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl opacity-20 blur-3xl" />
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
            Complete Nidhi Company Registration Process
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-xs sm:text-sm lg:text-base">
            From incorporation to member building and compliance, we are with you at every step.
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
