"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { Check, ArrowRight, Users, FileText, ShieldCheck, Vote, ClipboardList, Target, RefreshCw, Award } from "lucide-react";

import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";

import Avatar1 from '@/assets/images/avatar-1.webp';
import Avatar2 from '@/assets/images/avatar-2.webp';
import Avatar3 from '@/assets/images/avatar-3.webp';
import Avatar4 from '@/assets/images/avatar-4.webp';

export default function SocietyRegistration() {
  const heroContent = {
    title: "Society Registration",
    description: "We help community-based and charitable groups formalize their mission through Society Registration under the Societies Registration Act, 1860. Ideal for educational, cultural, religious, and social welfare initiatives, registered societies gain legal recognition, credibility, and eligibility for grants and tax exemptions.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    subText: "Have a Question? Request a Call back: +91-7011 808 002"
  };

  const introContent = {
    badge: "Society Registration",
    badgeIcon: Users,
    title1: "Overview of ",
    title2: "Society Registration",
    subtitle: "Unite for a Common Purpose",
    description: "A society is a group of individuals united by a shared interest or purpose, working together toward a common social, cultural, scientific, or charitable goal. In India, society formation and governance are regulated by the Societies Registration Act, 1860. Societies are typically established to promote charity, education, art, science, literature, or public welfare. Registration is mandatory to give the society legal recognition and ensure smooth, structured operations.",
    features: [
      "Legal Recognition - Official status enhances credibility",
      "Easier Fundraising - Attract government, private, and CSR funding",
      "Tax Benefits - Apply for 12A and 80G exemptions",
      "Structured Governance - Clear roles and decision-making",
      "Legal Safeguards - Protection against disputes",
      "Limited Liability - Members' personal assets protected",
      "Grant Eligibility - Access to government schemes",
      "Democratic Management Structure"
    ],
    image1: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1080"
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Our Services",
      title: "Our Society Registration Services Include",
      description: "We provide complete assistance from drafting governing documents to completing the registration process with the appropriate state authority.",
      features: [
        "Drafting of Memorandum of Association (MOA) and Rules & Regulations",
        "Name approval and verification under relevant state jurisdiction",
        "Filing registration application with the Registrar of Societies",
        "Assistance with PAN, bank account setup, and trust deed notarization",
        "Post-registration support for 12A/80G, NGO Darpan, and FCRA applications"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 2,
      badge: "Objectives",
      title: "Objectives of Society Registration",
      description: "Society registration in India is primarily aimed at advancing public welfare through organized, non-profit activities. The objectives behind forming a society reflect its commitment to social, cultural, and educational development.",
      features: [
        "Promotion of Fine Arts - Platforms for artistic expression",
        "Political Education - Awareness of political systems",
        "Charitable Support - Humanitarian causes and disaster relief",
        "Advancement of Science and Literature",
        "Welfare of Military Orphans",
        "Preservation of Museums and Art Galleries",
        "Management of Libraries and Reading Rooms"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Target,
    },
    {
      id: 3,
      badge: "Eligibility Criteria",
      title: "Eligibility Criteria for Society Registration",
      description: "To register a society in India under the Societies Registration Act, 1860, certain eligibility conditions must be met. These ensure that the society is formed with a clear purpose and proper legal structure.",
      features: [
        "Minimum 7 individuals required to form a society",
        "Must share a common non-profit objective",
        "Purpose aligned with Section 20 of the Act",
        "Charity, education, science, literature, or fine arts",
        "All founders must sign the Memorandum of Association",
        "Submit MoA to Registrar of Societies"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: ClipboardList,
    },
    {
      id: 4,
      badge: "Documents Required",
      title: "Documents Required for Society Registration",
      description: "To register a society under the Societies Registration Act, 1860, you must submit a set of essential documents that establish the society's purpose, structure, and legal standing.",
      features: [
        "Cover Letter - Formal application signed by all founders",
        "PAN Cards of all governing body members",
        "Memorandum of Association (MoA) - Name, objectives, address",
        "Rules & Regulations / Articles of Association (AoA)",
        "List of Governing Members with designations",
        "Affidavits from Office Bearers",
        "Address Proof - Aadhaar, Passport, or NOC from landlord"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: FileText,
    },
    {
      id: 5,
      badge: "Registration Process",
      title: "Society Registration Process in India",
      description: "Registering a society in India involves a structured legal process to ensure it gains official recognition and operates under a clear framework.",
      features: [
        "Step 1: Application Submission with Affidavit",
        "Step 2: Drafting MoA & By-laws (signed by 3+ founders)",
        "Step 3: Board Resolution showing unanimous agreement",
        "Step 4: Affidavit for Name and Address Verification",
        "Step 5: Pay Registration Fees as per state guidelines",
        "Step 6: Receive Certificate of Registration"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: ShieldCheck,
    },
    {
      id: 6,
      badge: "Renewal Process",
      title: "Society Registration Renewal Process",
      description: "Renewing your society registration ensures uninterrupted legal status and compliance. The renewal process may vary slightly by state, but the general steps remain consistent.",
      features: [
        "Step 1: Verify Renewal Deadline as per state guidelines",
        "Step 2: Collect Required Documents - Certificate, bylaws, AGM minutes",
        "Step 3: Visit Official Online Portal for your state",
        "Step 4: Log In and Enter Society Details",
        "Step 5: Upload Documents and Pay Renewal Fee",
        "Step 6: Track Application Status via portal"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: RefreshCw,
    },
    {
      id: 7,
      badge: "Post-Registration",
      title: "Post-Registration Compliances for Societies",
      description: "Once your society is officially registered, it must follow certain legal and financial compliances to maintain transparency, governance, and eligibility for benefits.",
      features: [
        "Apply for PAN Card for official transactions",
        "Open Bank Account in society's name",
        "Maintain Books of Accounts - Income, expenses, donations",
        "File Annual Income Tax Returns",
        "GST Registration (if applicable)",
        "Apply for 80G Certification for tax-deductible donations",
        "Compliance with Registrar of Societies (RoS)"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Vote,
    },
    {
      id: 8,
      badge: "Why Choose Us",
      title: "Our End-to-End Services for Society Registration",
      description: "We offer end-to-end support for Society Registration and post-registration compliance to help you establish and manage your organization with ease and confidence.",
      features: [
        "Expert Advisory - Step-by-step guidance through entire process",
        "Documentation Support - Preparation and verification of all documents",
        "Legal Compliance - Adherence to Societies Registration Act, 1860",
        "Simplified Process - Quick, paperless registration",
        "Post-Registration Compliance - PAN, bank, 80G/12A certification",
        "Transparent & Reliable - Clear communication at every stage"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
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
              <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-green-400 to-teal-400 rounded-3xl opacity-20 blur-3xl" />
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
            Complete Society Registration Process
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-xs sm:text-sm lg:text-base">
            From society formation to governance and compliance, we are with you at every step.
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
