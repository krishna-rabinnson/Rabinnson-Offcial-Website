"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  Heart,
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

export default function Registration12A80G() {
  const heroContent = {
    title: "12A and 80G Registration",
    description:
      "Get tax exemption certificates for your charitable organization. Enable donors to claim tax deductions on contributions.",
    ctaText: "Apply Now",
    ctaLink: "/contact",
    subText: "Get a Free Consultation & Compliance Checklist",
  };

  const introContent = {
    badge: "12A & 80G Registration",
    badgeIcon: Heart,
    title: "Tax Benefits for Charitable Organizations",
    subtitle: "Income Tax Exemption Certificates",
    description:
      "12A registration provides income tax exemption to trusts and NGOs, while 80G registration enables donors to claim tax deductions on their donations. Together, they enhance credibility and attract more donors.",
    features: [
      "12A - Income Tax Exemption",
      "80G - Donor Tax Deduction",
      "Attracts More Donations",
      "Builds Organization Credibility",
      "Enhanced Trust Status",
    ],
    image1:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1080",
    image2:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1080",
  };

  const scrollSections = [
    {
      id: 1,
      badge: "12A Registration",
      title: "Income Tax Exemption for Trust",
      description:
        "We help your trust or NGO obtain 12A registration with the Income Tax Department for exemption from paying tax on income.",
      features: [
        "Trust Deed Review",
        "Application Preparation",
        "IT Department Filing",
        "Certificate Issuance",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 2,
      badge: "80G Registration",
      title: "Tax Deduction for Donors",
      description:
        "80G registration allows your donors to claim 50% or 100% tax deduction on their donations, making your organization more attractive for contributions.",
      features: [
        "Eligibility Assessment",
        "Application Filing",
        "Donor Certificate System",
        "100%/50% Deduction",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left",
      hasOverlappingImages: true,
      icon: ShieldCheck,
    },
    {
      id: 3,
      badge: "Compliance & Renewal",
      title: "Maintain Your Tax Status",
      description:
        "12A and 80G require periodic renewal and annual compliance. We ensure your organization maintains its exempt status.",
      features: [
        "Annual Audit Filing",
        "Renewal Applications",
        "Compliance Monitoring",
        "Donor Reporting",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080",
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
            if (index !== -1) setActiveSection(index);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
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
              <Button variant="primary" className="mt-[32px]">
                {heroContent.ctaText}
              </Button>
            </Link>
            <p className="text-xl text-center text-black">
              {heroContent.subText}
            </p>
          </div>
        </div>
      </HeroBackground>
      <div className="w-full h-32 bg-gradient-to-b from-transparent to-white -mt-32 relative z-10 pointer-events-none" />
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
                    <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
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
            <div className="relative h-[500px] lg:h-[700px] w-full">
              <div className="absolute top-10 right-10 w-64 h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-3xl opacity-20 blur-3xl" />
              <div className="absolute top-0 right-0 w-[80%] lg:w-96 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
                <ImageWithFallback
                  src={introContent.image1}
                  alt="Intro visual 1"
                  className="w-full h-80 lg:h-[450px] object-cover"
                />
              </div>
              <div className="absolute bottom-10 lg:bottom-20 left-0 w-[80%] lg:w-96 rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white z-20">
                <ImageWithFallback
                  src={introContent.image2}
                  alt="Intro visual 2"
                  className="w-full h-80 lg:h-[450px] object-cover"
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
                            <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
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
                        <div className="relative h-[420px] md:h-[480px] lg:h-[540px]">
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
                        <div className="relative h-[320px] md:h-[420px] lg:h-[520px]">
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
