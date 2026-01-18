"use client";
import Image from 'next/image';
import  { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  UtensilsCrossed,
  FileText,
  ShieldCheck,
  Building2,
} from "lucide-react";



import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";

import Avatar1 from "@/assets/images/avatar-1.webp";
import Avatar2 from "@/assets/images/avatar-2.webp";
import Avatar3 from "@/assets/images/avatar-3.webp";
import Avatar4 from "@/assets/images/avatar-4.webp";

export default function FSSAILicense() {
  const heroContent = {
    title: "FSSAI License Registration",
    description:
      "CapEasy helps food businesses gain legal credibility and ensure consumer safety through FSSAI License & Registration, mandated by the Food Safety and Standards Authority of India. Whether you're a home kitchen, cloud kitchen, manufacturer, or large food chain, having a valid FSSAI license is essential to operate and grow in India's food sector.",
    ctaText: "Register Now",
    ctaLink: "/contact",
    subText: "Get a Free Consultation & Compliance Checklist",
  };

  const introContent = {
    badge: "FSSAI License",
    badgeIcon: UtensilsCrossed,
    title: "Your Partner for FSSAI Compliance",
    subtitle: "Food Safety and Standards Authority of India",
    description:
      "We offer end-to-end assistance—from selecting the right license type to managing renewals and compliance documentation. FSSAI registration provides a 14-digit unique license number, which must be printed on all food packaging to ensure consumer awareness and regulatory compliance.",
    features: [
      "Consultation to determine license category (Basic, State, Central)",
      "Filing of application on the FoSCoS portal",
      "Assistance in compiling required documentation (layout, IDs, declarations)",
      "Liaising with FSSAI officials for verification and follow-up",
      "Post-registration support for renewal, amendments, and compliance audits",
      "Consultation By Expert",
    ],
    image1:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1080",
    image2:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=1080",
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Overview & Eligibility",
      title: "What is an FSSAI License?",
      description:
        "The Food Safety and Standards Authority of India (FSSAI) is the regulatory body responsible for overseeing food safety and ensuring compliance with food safety laws in India. Any food business operator (FBO) involved in the manufacturing, processing, storage, distribution, transportation, or sale of food products must obtain an FSSAI License or Registration to legally operate. FSSAI registration provides a 14-digit unique license number, which must be printed on all food packaging to ensure consumer awareness and regulatory compliance.",
      features: [
        "Food manufacturers, processors, retailers, wholesalers",
        "Restaurants, hotels, cafeterias, home kitchens",
        "Hawkers, street vendors, cold storage units",
        "Exporters, importers, e-commerce food suppliers",
        "Mandatory for all food businesses",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 2,
      badge: "Eligibility & Benefits",
      title: "Who Needs FSSAI & Why?",
      description:
        "Any entity involved in food-related activities must obtain an FSSAI registration. Benefits include legal compliance, brand recognition, consumer confidence, market expansion, access to government benefits, and international acceptance.",
      features: [
        "Small: turnover < ₹12 lakh (Basic)",
        "Medium: ₹12 lakh – ₹20 crore (State)",
        "Large: > ₹20 crore (Central)",
        "Legal compliance & brand trust",
        "Consumer confidence & market expansion",
        "International acceptance",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left",
      hasOverlappingImages: true,
      icon: ShieldCheck,
    },
    {
      id: 3,
      badge: "Types & Documents",
      title: "Types of FSSAI Licenses & Documents Required",
      description:
        "FSSAI licenses are categorized based on business size, turnover, and production capacity. Documents required vary by license type (Basic, State, Central) and include business registration, address proof, food safety plan, and more.",
      features: [
        "Basic: Form A, ID, business proof, address, food list",
        "State: Form B, layout, water report, machinery list",
        "Central: Form B, IEC, recall plan, compliance cert.",
        "Photo ID, business registration, address proof",
        "Food safety management plan, product list",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: Building2,
    },
    {
      id: 4,
      badge: "Fees & Renewal",
      title: "FSSAI License Fees & Renewal",
      description:
        "FSSAI License fees: Basic ₹100, State ₹2,000–₹5,000, Central ₹7,500. Licenses are valid for 1–5 years. Renewal is required 30 days before expiry. The process is similar to new registration and can be done via the FoSCoS portal.",
      features: [
        "Basic: ₹100",
        "State: ₹2,000–₹5,000",
        "Central: ₹7,500",
        "Validity: 1–5 years",
        "Renewal 30 days before expiry",
        "Online renewal via FoSCoS",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 5,
      badge: "Penalties & Process",
      title: "Penalties & FSSAI Registration Process",
      description:
        "Non-compliance with FSSAI norms can result in penalties: substandard food (₹5 lakh), misbranding (₹3 lakh), false advertising (₹10 lakh), unsanitary handling (₹1 lakh), obstructing officer (₹2 lakh). The FSSAI license application is a fully online process via the FoSCoS portal: determine license, fill application, upload documents, pay fee, inspection, certificate issuance.",
      features: [
        "Substandard food: ₹5 lakh",
        "Misbranding: ₹3 lakh",
        "False advertising: ₹10 lakh",
        "Unsanitary handling: ₹1 lakh",
        "Obstructing officer: ₹2 lakh",
        "Online process: 6 steps",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: ShieldCheck,
    },
    {
      id: 6,
      badge: "Why Choose Us",
      title: "Why Choose CapEasy for FSSAI Registration?",
      description:
        "At CapEasy, we make FSSAI registration simple and hassle-free, ensuring businesses comply with food safety laws. End-to-end support, quick registration, error-free documentation, and post-license compliance assistance.",
      features: [
        "End-to-end support",
        "Quick & easy registration",
        "Error-free documentation",
        "Post-license compliance",
        "Renewal & audit support",
        "Expert assistance",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: Building2,
    },
  ];

  const [ ,setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(
              entry.target as HTMLElement
            );
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const IntroIcon = introContent.badgeIcon;

  return (
    <>
      <HeroBackground>
        <div className="w-full lg:w-[60%] lg:mx-auto flex flex-col items-start lg:items-center lg:text-center justify-center gap-18 lg:gap-40">
          <div className="w-full flex flex-col items-start lg:items-center gap-6">
            <div className="flex flex-col items-start gap-3 pt-6">
              <div className="flex items-center">
                <Image src={Avatar1} alt="Avatar1" className="w-8"  />
                <Image src={Avatar2} alt="Avatar2" className="w-8 -ml-2"  />
                <Image src={Avatar3} alt="Avatar3" className="w-8 -ml-2"  />
                <Image src={Avatar4} alt="Avatar4" className="w-8 -ml-2"  />
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
              <Button variant="primary" className="mt-8">
                {heroContent.ctaText}
              </Button>
            </Link>
            <p className="text-xl text-center text-black">
              {heroContent.subText}
            </p>
          </div>
        </div>
      </HeroBackground>
      <div className="w-full h-32 bg-linear-to-b from-transparent to-white -mt-32 relative z-10 pointer-events-none" />
      <div className="min-h-screen bg-white relative z-20">
        <div className="container mx-auto px-6 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
                <IntroIcon className="w-5 h-5 text-slate-700" />
                <span className="text-slate-700 font-medium">
                  {introContent.badge}
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl text-slate-900 font-semibold">
                  {introContent.title}
                </h1>

                {introContent.subtitle && (
                  <h2 className="text-2xl text-slate-600">
                    {introContent.subtitle}
                  </h2>
                )}
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                {introContent.description}
              </p>

              <div className="space-y-3">
                {introContent.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>

              <button className="mt-8 inline-flex items-center justify-center px-8 py-4 rounded-lg bg-slate-900 text-white text-base font-semibold shadow-lg transition hover:bg-slate-800 hover:shadow-xl">
                Get Started
              </button>
            </div>

            <div className="relative h-125 lg:h-175 w-full">
              <div className="absolute top-10 right-10 w-64 h-64 lg:w-72 lg:h-72 bg-linear-to-br from-blue-400 to-indigo-400 rounded-3xl opacity-20 blur-3xl" />

              <div className="absolute top-0 right-0 w-[80%] lg:w-96 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
                <ImageWithFallback
                  src={introContent.image1}
                  alt="Intro visual 1"
                  className="w-full h-80 lg:h-112.5 object-cover"
                />
              </div>

              <div className="absolute bottom-10 lg:bottom-20 left-0 w-[80%] lg:w-96 rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white z-20">
                <ImageWithFallback
                  src={introContent.image2}
                  alt="Intro visual 2"
                  className="w-full h-80 lg:h-112.5 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 pb-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-3">
            How We Help You
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">
            From registration to compliance and renewal, we are with you at
            every step.
          </p>
        </div>

        <div className="relative">
          {scrollSections.map((section, index) => {
            const Icon = section.icon;
            const isEven = section.imagePosition === "left";

            return (
              <section
                key={section.id}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className="sticky top-0 h-screen flex items-center bg-white overflow-hidden"
              >
                <div className="max-w-9xl mx-auto px-6 lg:px-12 w-full h-full">
                  <div className="grid md:grid-cols-2 gap-10 lg:gap-16 h-full items-center">
                    <div
                      className={`flex flex-col justify-center space-y-6 ${
                        isEven ? "md:order-2" : ""
                      }`}
                    >
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full w-fit">
                        <Icon className="w-4 h-4 text-slate-700" />
                        <span className="text-slate-700 font-medium">
                          {section.badge}
                        </span>
                      </div>

                      <h2 className="text-3xl lg:text-4xl text-slate-900 font-semibold">
                        {section.title}
                      </h2>

                      <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                        {section.description}
                      </p>

                      <div className="space-y-3 pt-2">
                        {section.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <p className="text-slate-700 text-sm lg:text-base">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>

                      <button className="mt-6 group px-7 py-3.5 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-colors flex items-center gap-2 w-fit">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    <div className={`${isEven ? "md:order-1" : ""}`}>
                      {section.hasOverlappingImages ? (
                        <div className="relative h-105 md:h-120 lg:h-135">
                          <div className="absolute top-0 right-12 w-[65%] h-[60%] rounded-2xl overflow-hidden shadow-xl z-10">
                            <ImageWithFallback
                              src={section.imageUrl1}
                              alt={`${section.badge} 1`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute bottom-0 left-0 w-[70%] h-[65%] rounded-2xl overflow-hidden shadow-2xl z-20">
                            <ImageWithFallback
                              src={section.imageUrl2!}
                              alt={`${section.badge} 2`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-4 right-8 bg-white rounded-xl shadow-lg px-6 py-4 z-30">
                            <div className="text-slate-900 font-bold text-xl">
                              0{index + 1}
                            </div>
                            <div className="text-slate-500 text-sm">Step</div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative h-80 md:h-105 lg:h-130">
                          <div className="rounded-2xl overflow-hidden shadow-2xl w-full h-full">
                            <ImageWithFallback
                              src={section.imageUrl1}
                              alt={section.badge}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-6 py-4">
                            <div className="text-3xl lg:text-4xl font-bold text-slate-900">
                              0{index + 1}
                            </div>
                            <div className="text-xs lg:text-sm text-slate-500">
                              Step
                            </div>
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
