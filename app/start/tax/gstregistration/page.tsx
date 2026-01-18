"use client";
import Image from 'next/image';
import  { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  Receipt,
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

export default function GSTRegistration() {
  const heroContent = {
    title: "GST Registration",
    description:
      "We simplify the process of obtaining Goods and Services Tax (GST) Registration, a mandatory requirement for businesses exceeding certain turnover thresholds or operating inter-state. Whether you're a product seller, service provider, freelancer, or e-commerce business, we ensure fast, compliant, and hassle-free GST onboarding. With a deep understanding of tax rules and portal processes, we ensure your business remains eligible for tax credits, avoids penalties, and gains a recognized GSTIN for seamless operations.",
    ctaText: "Register Now",
    ctaLink: "/contact",
    subText: "Get a Free Consultation & Compliance Checklist",
  };

  const introContent = {
    badge: "GST Registration",
    badgeIcon: Receipt,
    title: "What is GST Registration?",
    subtitle: "Consultation By Expert",
    description:
      "GST is an indirect tax in India that simplifies taxation on goods and services. Registration is mandatory for certain businesses, and non-compliance can result in penalties. It allows tax authorities to track transactions. Startup GST registration takes 2 to 6 working days via the official portal.",
    features: [
      "Eligibility assessment and advisory on threshold applicability",
      "Filing of GST application with accurate business and document details",
      "Support in securing the GSTIN (GST Identification Number)",
      "Post-registration services such as return filing, input tax credit guidance, and invoicing compliance",
      "Specialized support for composition scheme, inter-state supply, and reverse charge applicability",
      "GST application filing",
      "Securing GST identification number",
      "Documentation and eligibility support",
      "Post registration support",
      "Compliance maintenance",
    ],
    image1:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
    image2:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Eligibility for GST Registration",
      title: "Who Needs GST Registration?",
      description:
        "Companies – Businesses with an annual turnover above ₹40 lakhs (₹20 lakhs for special states). Service Providers – Those exceeding ₹20 lakhs per annum (₹10 lakhs for special states). Exempt Entities – Businesses dealing only in GST-exempt goods/services are not required to register. Migrated Businesses – Pre-registered entities under VAT, Excise, etc., must transition to GST. Inter-State Suppliers – Businesses supplying goods across different states. Casual Suppliers – Those making occasional taxable supplies. Reverse Charge Payers – Entities paying tax under the reverse charge mechanism.",
      features: [
        "Companies: Turnover above ₹40 lakhs (₹20 lakhs for special states)",
        "Service Providers: Above ₹20 lakhs (₹10 lakhs for special states)",
        "Exempt Entities: Only GST-exempt goods/services",
        "Migrated Businesses: VAT/Excise to GST",
        "Inter-State Suppliers",
        "Casual Suppliers",
        "Reverse Charge Payers",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 2,
      badge: "GST Registration Turnover Limits",
      title: "Turnover Thresholds & Voluntary Registration",
      description:
        "Voluntary Registration – Any business or individual can register for GST, regardless of turnover. However, it becomes mandatory upon crossing specific thresholds. Service Providers – Registration is required for businesses with an annual turnover exceeding ₹20 lakhs (₹10 lakhs for special category states). Goods Suppliers – Registration is mandatory for businesses with an annual turnover above ₹40 lakhs, provided they: Supply only goods and not services. Do not conduct intra-state sales in special category states (e.g., Arunachal Pradesh, Manipur, Meghalaya). Do not deal in restricted goods such as ice cream, pan masala, or tobacco. Other Businesses – The turnover threshold for GST registration is ₹20 lakhs (₹10 lakhs for special category states). Special Category States – Certain states like Arunachal Pradesh, Assam, and Jammu & Kashmir have lower turnover limits for mandatory registration.",
      features: [
        "Voluntary Registration: Any turnover",
        "Service Providers: Above ₹20 lakhs (₹10 lakhs for special states)",
        "Goods Suppliers: Above ₹40 lakhs",
        "Special Category States: Lower limits",
        "Restricted Goods: Ice cream, pan masala, tobacco",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1554224155-8d2a6c3d8925?auto=format&fit=crop&q=80&w=1080",
      imageUrl2:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left",
      hasOverlappingImages: true,
      icon: ShieldCheck,
    },
    {
      id: 3,
      badge: "Documents Required",
      title: "Documents Needed for GST Registration",
      description:
        "For online GST registration, the following documents are mandatory based on the business type: 1. Public/Private Limited Company: PAN Card, Certificate of Incorporation, MoA & AoA, ID & Address Proof, Photographs, Board Resolution, Bank Details, Business Address Proof. 2. Sole Proprietorship: PAN Card, Aadhar Card, Photograph, Bank Details, Business Address Proof. 3. Partnership Firm: PAN Card, Partnership Deed, Photographs, ID & Address Proof, Aadhar Card, Appointment Proof, Registration Certificate, Bank Details, Business Address Proof. 4. Hindu Undivided Family (HUF): PAN Card, Photograph, ID & Address Proof, Business Address Proof.",
      features: [
        "Company: PAN, Incorporation, MoA/AoA, ID/Address, Photos, Board Resolution, Bank, Address Proof",
        "Sole Proprietorship: PAN, Aadhar, Photo, Bank, Address Proof",
        "Partnership: PAN, Deed, Photos, ID/Address, Aadhar, Appointment, Registration, Bank, Address Proof",
        "HUF: PAN, Photo, ID/Address, Address Proof",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: Building2,
    },
    {
      id: 4,
      badge: "Benefits of GST",
      title: "Why Register for GST?",
      description:
        "For Regular Registered Businesses: Avail Input Tax Credit (ITC) on purchases, Conduct inter-state trade without restrictions. For Composition Scheme Taxpayers: Lower compliance burden with simplified tax filing, Reduced tax liability with a fixed percentage tax rate, Minimal impact on working capital due to lower tax rates. For Voluntary GST Registration (Turnover Below ₹40 Lakhs): Claim Input Tax Credit to reduce tax burden, Seamless inter-state business operations without restrictions.",
      features: [
        "Input Tax Credit (ITC) on purchases",
        "Inter-state trade without restrictions",
        "Lower compliance for composition scheme",
        "Reduced tax liability",
        "Minimal impact on working capital",
        "Claim ITC below ₹40 lakhs turnover",
        "Seamless inter-state operations",
      ],
      imageUrl1:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: Check,
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
            From registration to compliance and advisory, we are with you at
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
