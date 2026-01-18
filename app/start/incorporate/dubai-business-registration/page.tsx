"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { Check, ArrowRight, Globe, FileText, ShieldCheck, Building2, MapPin, Briefcase, CreditCard, Users } from "lucide-react";

import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";

import Avatar1 from '@/assets/images/avatar-1.webp';
import Avatar2 from '@/assets/images/avatar-2.webp';
import Avatar3 from '@/assets/images/avatar-3.webp';
import Avatar4 from '@/assets/images/avatar-4.webp';

export default function DubaiBusinessRegistration() {
  const heroContent = {
    title: "Dubai Business Registration",
    description: "We simplify global expansion for Indian entrepreneurs by facilitating Dubai Business Registration, including mainland, free zone, and offshore setups. Whether you're launching a tech startup, trading firm, or services business, we connect you with the right jurisdiction, local sponsor (if needed), and handle the compliance maze—end-to-end.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    subText: "Have a Question? Request a Call back: +91-7011 808 002"
  };

  const introContent = {
    badge: "Dubai Business Setup",
    badgeIcon: Globe,
    title1: "Overview of Company ",
    title2: "Incorporation in Dubai",
    subtitle: "Your Gateway to Global Markets",
    description: "Setting up a company in the United Arab Emirates (UAE) offers unmatched business advantages in the Middle East. With its dynamic economy, strategic geographic location, world-class infrastructure, and investor-friendly regulations, the UAE has become a global hub for entrepreneurs and businesses seeking regional and international expansion.",
    features: [
      "Strategic Global Location - Intersection of Europe, Asia, and Africa",
      "Zero Personal Income Tax - No capital gains tax",
      "100% Foreign Ownership - In Free Zones",
      "World-Class Infrastructure - Modern airports, seaports, logistics",
      "Robust Economic Growth - Diversified and rapidly growing economy",
      "Business-Friendly Environment - Simplified regulatory processes",
      "Entrepreneurial Support - Government incentives and programs",
      "Full Profit Repatriation - No restrictions on capital movement"
    ],
    image1: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=1080"
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Our Services",
      title: "Our Dubai Registration Services Include",
      description: "Our strong partner network in the UAE ensures your company is incorporated with the right structure, licenses, and banking setup. We provide comprehensive support from start to finish.",
      features: [
        "Jurisdiction advisory: Mainland vs Free Zone vs Offshore",
        "Company name approval and license procurement",
        "Drafting of MOA, Shareholder Agreement, and local sponsor arrangements",
        "Support for investor visa, Emirates ID, and UAE bank account setup",
        "Post-registration compliance including VAT, ESR, and UBO filings"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 2,
      badge: "Business Setup Types",
      title: "Types of Business Setup in Dubai",
      description: "Dubai offers multiple business setup structures designed to meet the diverse goals of global entrepreneurs and investors. Each model—Mainland, Free Zone, and Offshore—comes with unique benefits tailored to different operational needs under the UAE company registration framework.",
      features: [
        "Mainland Company - Unrestricted trade across UAE, government contracts eligible",
        "Free Zone Company - 100% foreign ownership, zero corporate taxes",
        "Offshore Company - International operations, wealth management, asset protection",
        "Branch Office - Extension of foreign parent company",
        "Dual License - Free zone company operating in mainland"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Building2,
    },
    {
      id: 3,
      badge: "Business Licenses",
      title: "Types of Business Licenses in Dubai",
      description: "When setting up a company in Dubai, choosing the right business license is essential and depends on the nature of your business activity. The UAE offers various license types tailored to different sectors.",
      features: [
        "Trade License - Commercial trading, buying and selling goods",
        "Industrial License - Manufacturing, production, processing",
        "Professional License - Consultants, engineers, freelancers",
        "Tourism License - Travel agencies, tour operators",
        "Media License - Publishing, broadcasting, advertising"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: Briefcase,
    },
    {
      id: 4,
      badge: "Legal Structures",
      title: "Eligible Business Structures in Dubai",
      description: "Dubai offers a range of business structures to suit the operational needs, ownership preferences, and scalability goals of global entrepreneurs. Choose the structure that aligns with your business goals.",
      features: [
        "Limited Liability Company (LLC) - Min capital AED 100,000",
        "Free Zone LLC (FZ LLC) - Up to 5 shareholders",
        "Free Zone Establishment (FZE) - Single shareholder",
        "Joint Stock Company (JSC) - For large-scale ventures",
        "Branch Office - Extension of parent company"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: true,
      icon: Users,
    },
    {
      id: 5,
      badge: "Registration Process",
      title: "Step-by-Step Company Registration Process",
      description: "Setting up a business in Dubai requires a structured approach to ensure full legal compliance and smooth operations. Whether you're forming a company in the Mainland, Free Zone, or Offshore jurisdiction, follow these steps.",
      features: [
        "Step 1: Define Business Activity & License Type",
        "Step 2: Choose Legal Structure (LLC, FZE, Branch)",
        "Step 3: Reserve Trade Name with DED/Free Zone",
        "Step 4: Finalize Business Location & Ejari",
        "Step 5: Apply for Business License",
        "Step 6: Apply for Visas & Emirates ID",
        "Step 7: Open Corporate Bank Account"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: false,
      icon: ShieldCheck,
    },
    {
      id: 6,
      badge: "Documents Required",
      title: "Documents Required for Company Registration",
      description: "To establish a business in Dubai, certain key documents must be prepared and submitted to the relevant authorities. Having these ready will help speed up the registration process.",
      features: [
        "Duly filled application form",
        "Comprehensive business plan",
        "Passport copies of all shareholders and manager",
        "Specimen signatures of shareholders",
        "Title deeds (if property ownership involved)",
        "Bank reference or financial reports",
        "Letter of intent detailing business purpose"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 7,
      badge: "Top Free Zones",
      title: "Top Free Zones for Company Incorporation",
      description: "The UAE hosts some of the most progressive and business-friendly free zones, offering exceptional infrastructure, 100% foreign ownership, tax benefits, and industry-specific advantages.",
      features: [
        "Dubai - DMCC, JAFZA, DAFZA, DIC, DMC, DSO, DHCC",
        "Abu Dhabi - ADGM, KIZAD, Masdar City, ADAFZ",
        "Sharjah - SAIF Zone, Shams Media City, HFZA",
        "Ras Al Khaimah - RAKEZ",
        "Ajman - Ajman Free Zone, Ajman Media City"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right" as const,
      hasOverlappingImages: true,
      icon: MapPin,
    },
    {
      id: 8,
      badge: "Why Choose Us",
      title: "Simplify Dubai Business Registration with Us",
      description: "We offer a cost-effective and streamlined solution for setting up your business in Dubai. From choosing the right business structure to securing your license, our expert team guides you through every stage of the registration process.",
      features: [
        "Expert guidance on choosing right business structure",
        "Complete license procurement support",
        "Investor and employee visa applications",
        "UAE bank account setup assistance",
        "Compliant accounting system establishment",
        "Fast, hassle-free registration experience"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left" as const,
      hasOverlappingImages: false,
      icon: CreditCard,
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
              <Typography color="#fff" noDarkMode className="md:hidden">Trusted by Global Entrepreneurs</Typography>
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
              <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-amber-400 to-orange-400 rounded-3xl opacity-20 blur-3xl" />
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
            Complete Dubai Business Registration Process
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-xs sm:text-sm lg:text-base">
            From jurisdiction selection to compliance and operations, we are with you at every step.
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