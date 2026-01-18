"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { Check, ArrowRight, Heart, FileText, ShieldCheck, Scale, Users, ClipboardList, Award, BookOpen, FileCheck } from "lucide-react";

import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";

import Avatar1 from '@/assets/images/avatar-1.webp';
import Avatar2 from '@/assets/images/avatar-2.webp';
import Avatar3 from '@/assets/images/avatar-3.webp';
import Avatar4 from '@/assets/images/avatar-4.webp';

export default function TrustRegistration() {
  const heroContent = {
    title: "Trust Registration Services",
    description: "We help individuals and groups formalize charitable missions through Trust Registration under the Indian Trusts Act, 1882. Whether you're creating a public trust for education, healthcare, social work, or community upliftment, we simplify the legal process, ensuring your trust is recognized for government benefits, donor compliance, and tax exemption eligibility.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    subText: "Have a Question? Request a Call back: +91-7011 808 002"
  };

  const introContent = {
    badge: "Trust Registration",
    badgeIcon: Heart,
    title1: "Overview of ",
    title2: "Trust Registration in India",
    subtitle: "Create a Lasting Legacy of Giving",
    description: "A Trust is a legal structure where the trustor transfers property to a trustee, who manages it for the benefit of a beneficiary. Governed by the Indian Trusts Act, 1882, this arrangement is formalized through a trust deed outlining roles, responsibilities, and asset management terms. Trusts can serve charitable purposes, family welfare, or estate planning. Once registered, trustees are legally bound to act in the beneficiary's best interest.",
    features: [
      "Legal Recognition - Formal identity under Indian laws",
      "Tax Exemptions under Sections 12A and 80G",
      "Eligibility for Government Schemes and CSR partnerships",
      "Public Trustworthiness - Promotes transparency",
      "Asset Protection - Legal safeguards for trust property",
      "Perpetual Existence - Continuity beyond founders",
      "Avoids Probate - Smooth transfer of assets",
      "Charitable Impact - Support causes you care about"
    ],
    image1: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1080"
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Our Services",
      title: "Our Trust Registration Services Include",
      description: "Our team handles the entire process—from drafting the trust deed to securing registration and advisory on related compliance.",
      features: [
        "Consultation on trust structure and name selection",
        "Drafting of Trust Deed with objectives, trustees, and operations",
        "Stamp paper procurement and registration with local sub-registrar",
        "PAN and TAN application for the trust",
        "Advisory on 12A/80G applications, NGO Darpan, and FCRA",
        "Guidance on bank account setup and trust operations"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 2,
      badge: "Key Parties",
      title: "Key Parties Involved in Trust Registration",
      description: "The trust registration process involves three main parties, each with specific roles and responsibilities.",
      features: [
        "Trustor (Settlor) - Creates the trust and transfers ownership of assets",
        "Trustee - Manages trust assets as per deed, acts in beneficiary's interest",
        "Beneficiary - Person or group entitled to receive benefits from trust",
        "Minimum 2 Trustees required for registration",
        "All trustees must be Indian residents",
        "Settlor cannot be a trustee"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Users,
    },
    {
      id: 3,
      badge: "Types of Trusts",
      title: "Types of Trusts in India",
      description: "Understanding the different types of trusts is key to selecting the right structure for your objectives. Trusts in India are classified based on purpose and beneficiaries.",
      features: [
        "Public Trust - For general public benefit (charitable, educational, religious)",
        "Private Trust - For specific individuals, families, or groups",
        "Public-Cum-Private Trust - Dual purpose combining both elements",
        "Governed by Religious Endowments Act, 1863",
        "Charitable and Religious Trusts Act, 1920",
        "Indian Trusts Act, 1882 for private trusts"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Scale,
    },
    {
      id: 4,
      badge: "Why Register",
      title: "Why Register a Trust?",
      description: "Registering a trust offers several important advantages, especially for organizations working in the social, educational, and charitable space.",
      features: [
        "Legal Recognition - Formal legal identity under Indian laws",
        "Regulatory Compliance - Promotes transparency and accountability",
        "Tax Benefits - Exemptions under Sections 12A and 80G",
        "Public Trustworthiness - Trust acts in society's best interest",
        "Government Schemes - Access to funding and CSR partnerships",
        "Operational Authority - License to carry out activities legally"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: ShieldCheck,
    },
    {
      id: 5,
      badge: "Requirements",
      title: "Requirements for Trust Registration",
      description: "To register a trust in India, certain legal and procedural conditions must be fulfilled. These ensure the trust operates within the framework of Indian laws.",
      features: [
        "Minimum of Two Trustees required",
        "Non-Profit, Non-Governmental Objective",
        "Lawful Purpose - Must be legitimate under Indian laws",
        "Compliant Trust Deed on non-judicial stamp paper",
        "No Disqualified Parties involved",
        "Public Interest Alignment - Must not contradict public interest"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: ClipboardList,
    },
    {
      id: 6,
      badge: "Trust Deed",
      title: "Contents of a Trust Deed",
      description: "A trust deed is a legally binding document that outlines the structure, intent, and rules for operating a trust. It ensures clarity, compliance, and accountability.",
      features: [
        "Duration of the Trust - Operational period",
        "Registered Office Address and Geographical Scope",
        "Goals and Objectives of the trust",
        "Trustor Details and assets being transferred",
        "Board of Trustees - Appointments and qualifications",
        "Amendment Clause and Termination procedures"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: BookOpen,
    },
    {
      id: 7,
      badge: "Documents Required",
      title: "Documents Required for Trust Registration",
      description: "To register a trust online, the following documents must be prepared and submitted. These ensure compliance with legal and procedural requirements.",
      features: [
        "PAN Cards of all trustees and settlor",
        "Identity Proof - Aadhaar, Passport, Voter ID",
        "Address Proof - Driver's license, utility bill",
        "Passport-Sized Photographs of all parties",
        "NOC from property owner (if rented office)",
        "Trust Deed on non-judicial stamp paper"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FileCheck,
    },
    {
      id: 8,
      badge: "Registration Process",
      title: "Step-by-Step Process for Trust Registration",
      description: "The process of registering a trust in India involves several key steps. Following these in sequence ensures a smooth registration process.",
      features: [
        "Step 1: Choose a Unique Name for the Trust",
        "Step 2: Appoint the Settlor and Trustees (min 2)",
        "Step 3: Draft the Memorandum of Association (MOA)",
        "Step 4: Prepare the Trust Deed on stamp paper",
        "Step 5: Register with local Sub-Registrar",
        "Step 6: Apply for PAN, TAN, and 12A/80G"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Scale,
    },
    {
      id: 9,
      badge: "Why Choose Us",
      title: "How We Help You Secure Trust Registration",
      description: "Our expert team is dedicated to making trust registration smooth, compliant, and hassle-free. We guide you through every step—from drafting the trust deed to filing with the Registrar.",
      features: [
        "Expert Guidance - Clear answers to all your queries",
        "End-to-End Support - From deed drafting to registration",
        "Legal Compliance - Aligned with Indian Trusts Act",
        "12A/80G Advisory - Tax exemption applications",
        "Post-Registration Support - Bank account, operations setup",
        "Transparent Pricing - No hidden charges"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1080",
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
              <Typography color="#fff" noDarkMode className="md:hidden">Trusted by NGOs & Charities</Typography>
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
              <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-pink-400 to-rose-400 rounded-3xl opacity-20 blur-3xl" />
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
            Complete Trust Registration Process
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-xs sm:text-sm lg:text-base">
            From trust formation to tax exemptions and compliance, we are with you at every step.
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
