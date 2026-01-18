"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import {
    Check,
    ArrowRight,
    Users,
    Heart,
    Shield,
    Award,
    Target,
    Zap,
    Handshake,
    BookOpen,
    TrendingUp,
    Globe,
    Star,
    Briefcase,
    Smile,
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import Avatar1 from "@/assets/images/avatar-1.webp";
import Avatar2 from "@/assets/images/avatar-2.webp";
import Avatar3 from "@/assets/images/avatar-3.webp";
import Avatar4 from "@/assets/images/avatar-4.webp";

const TeamsPage = () => {
    const useScrollAnimation = () => {
        const [isVisible, setIsVisible] = useState(false);
        const ref = useRef<HTMLDivElement>(null);
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setIsVisible(true);
                },
                { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
            );
            if (ref.current) observer.observe(ref.current);
            return () => {
                if (ref.current) observer.unobserve(ref.current);
            };
        }, []);
        return { ref, isVisible };
    };

    const heroContent = {
        title: "Our Amazing Teams",
        description:
            "Behind every success story is a team of passionate, talented individuals working together towards a common goal. Discover the people who make our organization extraordinary and learn about our collaborative culture.",
        ctaText: "Join Our Team",
        ctaLink: "/start-generating-your-idea",
        subText: "Where Talent Meets Passion and Purpose",
    };

    const introContent = {
        badge: "Team Excellence",
        badgeIcon: Users,
        title: "The Heart of Our Organization",
        subtitle: "Collaboration, Innovation, Excellence",
        description:
            "Our teams are the driving force behind our success. Comprised of talented professionals from diverse backgrounds, they bring unique perspectives, skills, and experiences that fuel innovation and excellence. We foster a culture of collaboration, continuous learning, and mutual respect that empowers every team member to thrive.",
        features: [
            "Diverse team members from over 20 countries worldwide",
            "Collaborative work environment that encourages innovation",
            "Continuous learning and professional development opportunities",
            "Work-life balance and employee wellbeing as priorities",
            "Recognition and rewards for outstanding contributions",
        ],
        image1:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080",
        image2:
            "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=1080",
    };

    const scrollSections = [
        {
            id: 1,
            badge: "Team Culture",
            title: "Our Collaborative Culture",
            description:
                "We believe that great work happens when people feel valued, supported, and empowered. Our culture promotes open communication, mutual respect, and a shared commitment to excellence.",
            features: [
                "Open-door policy encouraging transparent communication",
                "Cross-functional collaboration on key projects",
                "Regular team building and engagement activities",
                "Inclusive environment where every voice matters",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: Heart,
        },
        {
            id: 2,
            badge: "Diversity",
            title: "Strength in Diversity",
            description:
                "Our teams reflect the rich diversity of the communities we serve. We actively promote diversity and inclusion, knowing that different perspectives lead to better solutions and innovation.",
            features: [
                "Equal opportunities regardless of background",
                "Active diversity and inclusion initiatives",
                "Cultural awareness and sensitivity training",
                "Employee resource groups for underrepresented communities",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",
            imageUrl2:
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "left" as const,
            hasOverlappingImages: true,
            icon: Globe,
        },
        {
            id: 3,
            badge: "Innovation",
            title: "Empowering Innovation",
            description:
                "We encourage our teams to think creatively, challenge the status quo, and pursue innovative solutions. Our innovation programs provide resources and support for turning great ideas into reality.",
            features: [
                "Dedicated innovation time for passion projects",
                "Internal hackathons and innovation challenges",
                "Fast-track process for promising ideas",
                "Recognition and rewards for innovation champions",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: Zap,
        },
        {
            id: 4,
            badge: "Development",
            title: "Continuous Learning & Growth",
            description:
                "We invest in our team members' professional development through comprehensive training programs, mentorship opportunities, and career advancement pathways. Your growth is our success.",
            features: [
                "Personalized learning and development plans",
                "Access to premium online learning platforms",
                "Mentorship programs pairing junior and senior staff",
                "Conference attendance and skill development workshops",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1080",
            imageUrl2:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "left" as const,
            hasOverlappingImages: true,
            icon: BookOpen,
        },
        {
            id: 5,
            badge: "Wellbeing",
            title: "Health & Wellbeing First",
            description:
                "We prioritize the physical and mental wellbeing of our team members. From comprehensive health benefits to wellness programs, we ensure our people have the support they need to thrive.",
            features: [
                "Comprehensive health insurance and wellness benefits",
                "Mental health support and counseling services",
                "Flexible work arrangements for work-life balance",
                "On-site fitness facilities and wellness programs",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: Heart,
        },
        {
            id: 6,
            badge: "Recognition",
            title: "Celebrating Success Together",
            description:
                "We believe in recognizing and celebrating the achievements of our team members. Our recognition programs acknowledge outstanding contributions and inspire continued excellence.",
            features: [
                "Monthly and quarterly excellence awards",
                "Peer-to-peer recognition platforms",
                "Performance bonuses and incentive programs",
                "Public acknowledgment of team achievements",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1560439513-74b037a25d84?auto=format&fit=crop&q=80&w=1080",
            imageUrl2:
                "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "left" as const,
            hasOverlappingImages: true,
            icon: Award,
        },
        {
            id: 7,
            badge: "Collaboration",
            title: "Team Collaboration Tools",
            description:
                "We equip our teams with cutting-edge collaboration tools and technologies that enable seamless communication, efficient project management, and effective remote work.",
            features: [
                "Modern collaboration platforms and tools",
                "Cloud-based project management systems",
                "Video conferencing for distributed teams",
                "Shared knowledge bases and documentation",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: Briefcase,
        },
        {
            id: 8,
            badge: "Flexibility",
            title: "Flexible Work Environment",
            description:
                "We understand that different people work best in different ways. Our flexible work policies allow team members to choose work arrangements that suit their needs and maximize productivity.",
            features: [
                "Hybrid work model with remote and office options",
                "Flexible working hours to accommodate personal needs",
                "Results-oriented work culture over presenteeism",
                "Modern office spaces designed for collaboration",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1080",
            imageUrl2:
                "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "left" as const,
            hasOverlappingImages: true,
            icon: Target,
        },
        {
            id: 9,
            badge: "Impact",
            title: "Making a Difference",
            description:
                "Our teams are passionate about making a positive impact beyond business metrics. Through volunteer programs and social initiatives, we contribute to the communities we serve.",
            features: [
                "Paid volunteer time for community service",
                "Team volunteering and social impact projects",
                "Charitable giving and donation matching programs",
                "Partnerships with local nonprofits and causes",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "right" as const,
            hasOverlappingImages: false,
            icon: Handshake,
        },
        {
            id: 10,
            badge: "Career Growth",
            title: "Career Advancement Opportunities",
            description:
                "We believe in promoting from within and providing clear career progression paths. Our team members have opportunities to take on new challenges, expand their skills, and advance their careers.",
            features: [
                "Clear career progression frameworks and pathways",
                "Internal job postings and mobility programs",
                "Leadership development for high-potential talent",
                "Cross-functional project opportunities",
            ],
            imageUrl1:
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1080",
            imageUrl2:
                "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80&w=1080",
            imagePosition: "left" as const,
            hasOverlappingImages: true,
            icon: TrendingUp,
        },
    ];

    const AnimatedSection: React.FC<{
        children: React.ReactNode;
        delay?: number;
        className?: string;
    }> = ({ children, delay = 0, className = "" }) => {
        const { ref, isVisible } = useScrollAnimation();
        return (
            <div
                ref={ref}
                className={`transition-all duration-700 ease-out ${className}`}
                style={{
                    transitionDelay: `${delay}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(40px)",
                }}
            >
                {children}
            </div>
        );
    };

    const FeatureList: React.FC<{ features: string[] }> = ({ features }) => {
        const { ref, isVisible } = useScrollAnimation();
        return (
            <div ref={ref} className="space-y-3">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 transition-all duration-500 ease-out"
                        style={{
                            transitionDelay: `${index * 100}ms`,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                        }}
                    >
                        <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                            <Check className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-slate-700 text-sm sm:text-base">{feature}</p>
                    </div>
                ))}
            </div>
        );
    };

    const ServiceSection: React.FC<{
        section: (typeof scrollSections)[0];
        index: number;
    }> = ({ section, index }) => {
        const { ref, isVisible } = useScrollAnimation();
        const Icon = section.icon;
        const isEven = section.imagePosition === "left";
        return (
            <section
                ref={ref}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full"
            >
                <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
                    <div
                        className={`flex flex-col justify-center space-y-4 sm:space-y-6 transition-all duration-700 ease-out ${isEven ? "md:order-2" : ""
                            }`}
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible
                                ? "translateX(0)"
                                : `translateX(${isEven ? "40px" : "-40px"})`,
                        }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-100 rounded-full w-fit hover:bg-slate-200 transition-colors duration-300">
                            <Icon className="w-4 h-4 text-slate-700" />
                            <span className="text-slate-700 font-medium text-sm sm:text-base">
                                {section.badge}
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-semibold">
                            {section.title}
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                            {section.description}
                        </p>
                        <div className="space-y-2 sm:space-y-3 pt-2">
                            {section.features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3 transition-all duration-500"
                                    style={{
                                        transitionDelay: `${idx * 100 + 300}ms`,
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible
                                            ? "translateX(0)"
                                            : "translateX(-20px)",
                                    }}
                                >
                                    <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 mt-0.5">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <p className="text-slate-700 text-sm lg:text-base">
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <Link href="/contact" className="w-fit">
                            <button className="mt-4 sm:mt-6 group px-5 sm:px-7 py-3 sm:py-3.5 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center gap-2 w-fit hover:shadow-lg active:scale-95 text-sm sm:text-base">
                                Learn More{" "}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>
                    <div
                        className={`${isEven ? "md:order-1" : ""
                            } transition-all duration-700 ease-out`}
                        style={{
                            transitionDelay: "200ms",
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible
                                ? "translateX(0)"
                                : `translateX(${isEven ? "-40px" : "40px"})`,
                        }}
                    >
                        {section.hasOverlappingImages ? (
                            <div className="relative h-[320px] sm:h-[420px] md:h-[480px] lg:h-[540px]">
                                <div className="absolute top-0 right-4 sm:right-12 w-[60%] sm:w-[65%] h-[55%] sm:h-[60%] rounded-2xl overflow-hidden shadow-xl z-10 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                                    <ImageWithFallback
                                        src={section.imageUrl1}
                                        alt={`${section.badge} 1`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 w-[65%] sm:w-[70%] h-[60%] sm:h-[65%] rounded-2xl overflow-hidden shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                                    <ImageWithFallback
                                        src={section.imageUrl2!}
                                        alt={`${section.badge} 2`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-4 right-4 sm:right-8 bg-white rounded-xl shadow-lg px-4 sm:px-6 py-3 sm:py-4 z-30 hover:shadow-xl transition-shadow duration-300">
                                    <div className="text-slate-900 font-bold text-lg sm:text-xl">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                    <div className="text-slate-500 text-xs sm:text-sm">Step</div>
                                </div>
                            </div>
                        ) : (
                            <div className="relative h-[280px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
                                <div className="rounded-2xl overflow-hidden shadow-2xl w-full h-full hover:scale-[1.02] transition-all duration-500">
                                    <ImageWithFallback
                                        src={section.imageUrl1}
                                        alt={section.badge}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white rounded-xl shadow-lg px-4 sm:px-6 py-3 sm:py-4 hover:shadow-xl transition-shadow duration-300">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                    <div className="text-xs lg:text-sm text-slate-500">Step</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    };

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
                            <Typography color="#fff" noDarkMode className="md:hidden">
                                Our Talented Team
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
                            <Button
                                variant="primary"
                                className="mt-[32px] hover:scale-105 transition-transform duration-300"
                            >
                                {heroContent.ctaText}
                            </Button>
                        </Link>
                        <p className="text-lg sm:text-xl text-center text-black">
                            {heroContent.subText}
                        </p>
                    </div>
                </div>
            </HeroBackground>
            <div className="w-full h-32 bg-gradient-to-b from-transparent to-white -mt-32 relative z-10 pointer-events-none" />
            <div className="min-h-screen bg-white relative z-20">
                <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        <AnimatedSection className="space-y-6 sm:space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors duration-300">
                                <IntroIcon className="w-4 sm:w-5 h-4 sm:h-5 text-slate-700" />
                                <span className="text-slate-700 font-medium text-sm sm:text-base">
                                    {introContent.badge}
                                </span>
                            </div>
                            <div className="space-y-3 sm:space-y-4">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold">
                                    {introContent.title}
                                </h1>
                                {introContent.subtitle && (
                                    <h2 className="text-xl sm:text-2xl text-slate-600">
                                        {introContent.subtitle}
                                    </h2>
                                )}
                            </div>
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                                {introContent.description}
                            </p>
                            <FeatureList features={introContent.features} />
                            <Link href={heroContent.ctaLink}>
                                <button className="mt-6 sm:mt-8 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-slate-900 text-white text-sm sm:text-base font-semibold shadow-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:scale-105 active:scale-95">
                                    Get Started
                                </button>
                            </Link>
                        </AnimatedSection>
                        <AnimatedSection
                            delay={200}
                            className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full"
                        >
                            <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl opacity-20 blur-3xl animate-pulse" />
                            <div className="absolute top-0 right-0 w-[75%] sm:w-[80%] lg:w-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10">
                                <ImageWithFallback
                                    src={introContent.image1}
                                    alt="Intro visual 1"
                                    className="w-full h-64 sm:h-80 lg:h-[450px] object-cover"
                                />
                            </div>
                            <div className="absolute bottom-8 sm:bottom-10 lg:bottom-20 left-0 w-[75%] sm:w-[80%] lg:w-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 border-4 sm:border-8 border-white z-20">
                                <ImageWithFallback
                                    src={introContent.image2}
                                    alt="Intro visual 2"
                                    className="w-full h-64 sm:h-80 lg:h-[450px] object-cover"
                                />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
            <div className="bg-white min-h-screen">
                <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 pb-6 sm:pb-8 text-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-2 sm:mb-3">
                        What Makes Our Teams Special
                    </h1>
                    <p className="text-slate-600 max-w-xl mx-auto text-sm lg:text-base">
                        Discover the culture and values that unite us
                    </p>
                </AnimatedSection>
                <div className="space-y-16 sm:space-y-24 lg:space-y-32 pb-12 sm:pb-20">
                    {scrollSections.map((section, index) => (
                        <ServiceSection key={section.id} section={section} index={index} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default TeamsPage;
