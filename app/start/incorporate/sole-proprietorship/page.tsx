"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { Check, ArrowRight, User, FileText, ShieldCheck, FileCheck, HelpCircle, Building2 } from "lucide-react";

import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";

import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import Avatar1 from '@/assets/images/avatar-1.webp';
import Avatar2 from '@/assets/images/avatar-2.webp';
import Avatar3 from '@/assets/images/avatar-3.webp';
import Avatar4 from '@/assets/images/avatar-4.webp';


export default function SoleProprietorship() {

  const heroContent = {
    title: "Sole Proprietorship",
    description: "Sole proprietorship is a type of business which is entirely run by one person and in which there is no legal distinction between the owner and the entity. It is one of the oldest forms of business in India. The person who manages this type of business is solely and personally responsible for the debts.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    subText: "Have a Question? Request a Call back: +91-7011 808 002"
  };

  const introContent = {
    badge: "Sole Proprietorship",
    badgeIcon: User,
    title1: "Advantages Of ",
    title2: "Sole Proprietorship",
    subtitle: "The Simplest Way to Start Your Business",
    description: "It is an ideal form of business for any small-scale operator as they are saved from all kinds of legal formalities in every defined law. The ease of its operation and management also makes people opt for this form of business.",
    features: [
      "No Governing Law - No separate law or compulsory registration required",
      "No Profit Sharing - Owner enjoys entire profits as sole stakeholder",
      "Easy to Form - Can be established easily and instantly",
      "Quick Decision Making - Complete control over entire business",
      "Confidentiality - No need to publish financial accounts publicly",
      "Less Formalities - Very less formalities involved",
      "Sense of Satisfaction - Be your own boss",
      "Less Compliance Cost - Inexpensive due to fewer requirements",
      "Tax Benefits - Lower taxes and presumptive income declaration"
    ],
    image1: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1080"
  };

  const scrollSections = [
    {
      id: 1,
      badge: "Our Services",
      title: "GST Registration for Sole Proprietorship",
      description: "If the supplier is engaged in providing taxable intra-state supply of goods and services and the aggregate turnover exceeds the specified limit OR engaged in providing inter-state supply of goods or services OR wishes to take voluntary registration, he may register under GST. This gives the owner the benefit to avail loans, declare the turnover to have a record, avail credits and expand the business.",
      features: [
        "Registration under GST law",
        "Connecting with Empanelled bankers for bank account opening",
        "Registration under Shop & Establishment",
        "Trademark Registration"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: FileText,
    },
    {
      id: 2,
      badge: "Process Of Registration",
      title: "Opening Current Account & Other Registrations",
      description: "After getting the certificate of GST Registration, the Owner can get the Bank Account opened in the name of the sole proprietorship. Banks accept GST Registration Form and Number as a valid proof for opening bank account in the trade name of the proprietorship.",
      features: [
        "GST Registration - Avail loans, declare turnover, avail credits",
        "Opening Current Account - Essential for business transactions",
        "Shop & Establishment Registration",
        "Trademark Registration - Protect your brand identity"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left",
      hasOverlappingImages: true,
      icon: ShieldCheck,
    },
    {
      id: 3,
      badge: "Shop & Establishment",
      title: "Shop & Establishment Registration",
      description: "Shop and Establishment Act is covered under state legislation and each state has its own rules and regulations for the same. Since rules are framed by the state government, they will differ from state to state. All shops, hotels, eating houses, restaurants, theatres, places of public amusement or establishment and any other commercial establishment are covered under this Act and are required to obtain registration.",
      features: [
        "Covered under state legislation",
        "Required for all commercial establishments",
        "Must apply within 30 days of commencement",
        "Rules differ from state to state",
        "Mandatory for shops, hotels, restaurants, theatres"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: Building2,
    },
    {
      id: 4,
      badge: "Trademark Registration",
      title: "Protect Your Brand Identity",
      description: "Trademark refers to brand or logo. It can also be obtained for a business name, distinctive catchy phrases, taglines or captions. Trademark Registration can help prevent repetition or duplication of goods or service by competitors or other persons. It also ensures that the investment put into the business and efforts are protected from unidentified sources.",
      features: [
        "Register your brand name or logo",
        "Protect distinctive taglines & captions",
        "Prevent duplication by competitors",
        "Legal protection for your investment",
        "Exclusive rights to use the trademark"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1080",
      imageUrl2: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left",
      hasOverlappingImages: true,
      icon: ShieldCheck,
    },
    {
      id: 5,
      badge: "Documents Required",
      title: "Documents Required For Incorporation",
      description: "To register your sole proprietorship and obtain necessary licenses, you'll need to provide the following documents. Having these ready will help speed up the registration process.",
      features: [
        "ID Proof - ID Proof of the Owner",
        "Address Proof - Address Proof of the Owner",
        "Rent Agreement - Rent Agreement of Business Premises",
        "Photograph - Passport Size Photograph of Owner",
        "Utility Bill - Utility bill for the premises",
        "NOC - No Objection Certificate from premises owner (if not owned)"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "right",
      hasOverlappingImages: false,
      icon: FileCheck,
    },
    {
      id: 6,
      badge: "Who Should Opt",
      title: "Who and Why Should You Opt for It?",
      description: "It is an ideal form of business for any small-scale operator as they are saved from all kinds of legal formalities in every defined law. The ease of its operation and management also makes people opt for this form of business.",
      features: [
        "Small-scale operators seeking minimal legal formalities",
        "Entrepreneurs wanting complete business control",
        "Individuals preferring quick decision making",
        "Business owners seeking confidentiality",
        "Those wanting lower compliance costs"
      ],
      imageUrl1: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1080",
      imagePosition: "left",
      hasOverlappingImages: false,
      icon: HelpCircle,
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
        <div className="w-full lg:w-[60%] lg:mx-auto flex flex-col items-start lg:items-center lg:text-center justify-center gap-[72px] lg:gap-[160px]">
          <div className="w-full flex flex-col items-start lg:items-center gap-[24px]">
            <div className="flex flex-col items-start gap-[12px] pt-[24px]">
              <div className="flex items-center">
                <Image src={Avatar1} alt="Avatar1" className="w-[32px]"  />
                <Image src={Avatar2} alt="Avatar2" className="w-[32px] ml-[-8px]"  />
                <Image src={Avatar3} alt="Avatar3" className="w-[32px] ml-[-8px]"  />
                <Image src={Avatar4} alt="Avatar4" className="w-[32px] ml-[-8px]"  />
              </div>
              <Typography color="#fff" noDarkMode className="md:hidden">Trusted by 5,000+ Entrepreneurs</Typography>
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
            
            <Typography color="#fff" noDarkMode size={18} className="md:w-[80%]">
              {heroContent.description}
            </Typography>
            <Link href={heroContent.ctaLink}>
              <Button variant="primary" className="mt-[32px]">{heroContent.ctaText} 👉</Button>
            </Link>
            <p className="text-xl text-center text-black">{heroContent.subText}</p>
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
                <span className="text-slate-700 font-medium">{introContent.badge}</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl text-slate-900 font-semibold">
                  {introContent.title1} <span className="text-blue-500">{introContent.title2}</span>
                </h1>
                {introContent.subtitle && (
                  <h2 className="text-2xl text-slate-600">{introContent.subtitle}</h2>
                )}
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">{introContent.description}</p>

              <div className="space-y-3">
                {introContent.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>

              <button className="mt-8 inline-flex items-center justify-center px-8 py-4 rounded-lg bg-slate-900 text-white text-base font-semibold shadow-lg transition hover:bg-slate-800 hover:shadow-xl">
                Get Started 👉
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
            Complete Registration Process
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">
            From registration to compliance and growth, we are with you at every step.
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
                    <div className={`flex flex-col justify-center space-y-6 ${isEven ? "md:order-2" : ""}`}>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full w-fit">
                        <Icon className="w-4 h-4 text-slate-700" />
                        <span className="text-slate-700 font-medium">{section.badge}</span>
                      </div>

                      <h2 className="text-3xl lg:text-4xl text-slate-900 font-semibold">
                        {section.title}
                      </h2>

                      <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                        {section.description}
                      </p>

                      <div className="space-y-3 pt-2">
                        {section.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <p className="text-slate-700 text-sm lg:text-base">{feature}</p>
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
                            <div className="text-slate-900 font-bold text-xl">0{index + 1}</div>
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
                            <div className="text-3xl lg:text-4xl font-bold text-slate-900">0{index + 1}</div>
                            <div className="text-xs lg:text-sm text-slate-500">Step</div>
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