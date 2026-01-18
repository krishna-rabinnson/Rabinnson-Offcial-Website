"use client";
import Image from 'next/image';
import  { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  Rocket,
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

export default function StartupIndiaRegistration() {
  const heroContent = {
    title: "Startup India Registration",
    description:
      "CapEasy helps early-stage ventures fast-track their journey through the Startup India Registration, a flagship initiative by the Government of India. We assist founders in availing official recognition, unlocking a host of benefits including tax exemptions, relaxed compliance, access to government tenders, and faster IPR support. Our team ensures your startup meets eligibility, compiles the right documentation, and gets formally recognized under the Department for Promotion of Industry and Internal Trade (DPIIT).",
    ctaText: "Register Now",
    ctaLink: "/contact",
    subText: "Get a Free Consultation & Compliance Checklist",
  };

  const introContent = {
    badge: "Startup India",
    badgeIcon: Rocket,
    title: "CapEasy's Startup India Registration Services",
    subtitle: "End-to-End Support for DPIIT Recognition",
    description:
      "Our Startup India Registration Services Include:",
    features: [
      "Eligibility assessment for DPIIT recognition",
      "Complete application filing and compliance support",
      "Preparation of pitch deck, incorporation documents, and writeups",
      "Support in claiming tax exemptions (Section 80-IAC and 56 Exemption)",
      "Post-registration assistance for utilizing Startup India benefits",
    ],
    image1:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1080",
    image2:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080",
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Overview",
      title: "What is Startup India?",
      description:
        "Launched on 16th January, 2016, the Startup India initiative is a flagship initiative of the Government of India, designed to nurture innovation and entrepreneurship, by creating an ecosystem that is conducive for growth of Startups. The initiative not only helps in simplifying the process of starting a company but also provides a host of benefits to the recognized startups, transforming India into a country of job creators instead of job seekers. These programs are managed by a dedicated Startup India Team, which reports to The Department for Promotion of Industry and Internal Trade (DPIIT).",
      features: [
        "Flagship initiative for innovation and entrepreneurship",
        "Simplifies company formation and compliance",
        "Managed by DPIIT",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 2,
      badge: "Key Advantages",
      title: "Benefits of Startup India Registration",
      description:
        "Official DPIIT Recognition: Achieve formal acknowledgment from the Department for Promotion of Industry and Internal Trade (DPIIT), Government of India, enhancing your startup's credibility in the market.\nStartup India Seed Funding Scheme: Eligible startups can receive a grant of INR 20 Lakhs or a loan of INR 50 Lakhs at the RBI's repo rate.\nStartup India Income Tax Exemption under Section 80 IAC: Avail a three-year income tax exemption within the first ten years from incorporation.\nExemption from Earnest Money Deposit (EMD) for Government Tenders: No 10% EMD or Security Deposit required for government tenders.\nAWS Free Cloud Credits: Free AWS credits for eligible startups.\nZOHO Free One Year Subscription: Free one-year ZOHO suite subscription.\nStartup Patent & IPR Application: Expedited patent applications, 80% discount on fees, and government-covered facilitator fees.\nNetworking Opportunities: Access to events, meetups, and investor connections.\nEasier Regulatory Approvals: Simpler compliance and winding-up procedures.",
      features: [
        "DPIIT Recognition",
        "Seed Funding Scheme",
        "Income Tax Exemption",
        "EMD Exemption for Tenders",
        "AWS & ZOHO Free Credits",
        "IPR & Patent Support",
        "Networking & Regulatory Ease",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left",
      hasOverlappingImages: true,
      icon: ShieldCheck,
    },
    {
      id: 3,
      badge: "Eligibility Criteria",
      title: "Who Can Register as a Startup?",
      description:
        "To qualify for the Startup India registration, your enterprise should meet the following conditions: Age of the Company: Not older than ten years from incorporation. Type of Entity: Private Limited Company, LLP, or Partnership Firm. Annual Turnover: Not exceeding ₹100 crore in any financial year. Original Entity: Not formed by splitting up or reconstructing an existing business. Innovation and Scalability: Should work towards innovation or improvement and have potential for employment or wealth creation.",
      features: [
        "Company age ≤ 10 years",
        "Pvt Ltd, LLP, or Partnership",
        "Turnover ≤ ₹100 crore",
        "Original, innovative, scalable business",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: Building2,
    },
    {
      id: 4,
      badge: "Required Documents",
      title: "Documents Needed for Registration",
      description:
        "Certificate of Incorporation or Firm Registration Copy, MOA and AOA for companies or Partnership Deed for firms, e-KYCs of directors/partners, Organizational Class 3 Digital Signature, business description, Letter of Authorization.",
      features: [
        "Certificate of Incorporation/Firm Registration",
        "MOA & AOA/Partnership Deed",
        "e-KYCs of directors/partners",
        "Class 3 Digital Signature",
        "Business Description",
        "Letter of Authorization",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left",
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 5,
      badge: "Registration Process",
      title: "How to Register for Startup India",
      description:
        "Online Application: Register on the National Single Window System (NSWS).\nOrganizational Class 3 DSC: Create DSC for PAN and company verification.\nProfile Completion: Provide all business details.\nDocument Submission: Upload required documents.\nSelf-Certification: Confirm eligibility.\nRecognition: Receive Startup India certificate after verification.",
      features: [
        "Register on NSWS",
        "Create Class 3 DSC",
        "Complete profile & upload docs",
        "Self-certification & recognition",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: ShieldCheck,
    },
    {
      id: 6,
      badge: "Why Choose CapEasy?",
      title: "CapEasy Makes Startup India Registration Simple",
      description:
        "At CapEasy, we are committed to guiding you through the Startup India Registration process smoothly, ensuring that you can avail all the advantages this initiative offers. Contact us today to embark on your journey towards growth and success.",
      features: [
        "Expert eligibility assessment",
        "Complete documentation & filing",
        "Tax exemption & benefit support",
        "Post-registration assistance",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: ShieldCheck,
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
            From eligibility check to benefits activation, we are with you at
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
