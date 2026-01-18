"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import {
    Heart,
    Globe,
    Zap,
    BookOpen,
    Users,
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { ImageWithFallback } from "@/components/Starc/ImageWithFallback";
import Avatar1 from "@/assets/images/avatar-1.png";
import Avatar2 from "@/assets/images/avatar-2.png";
import Avatar3 from "@/assets/images/avatar-3.png";
import Avatar4 from "@/assets/images/avatar-4.png";
import SanjaySir from "@/assets/images/sanjay-sir.webp";
import Ujjwal from "@/assets/images/ujjwal.webp";
import Manish from "@/assets/images/mainsh.webp";

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

    const heroContent = {
        title: "Our Amazing Teams",
        description:
            "Behind every success story is a team of passionate, talented individuals working together towards a common goal. Discover the people who make our organization extraordinary and learn about our collaborative culture.",
        ctaText: "Join Our Team",
        ctaLink: "/start-generating-your-idea",
        subText: "Where Talent Meets Passion and Purpose",
    };

    const values = [
        {
            icon: Heart,
            title: "Our Collaborative Culture",
            description: "We believe that great work happens when people feel valued, supported, and empowered. Our culture promotes open communication and mutual respect.",
        },
        {
            icon: Globe,
            title: "Strength in Diversity",
            description: "Our teams reflect the rich diversity of the communities we serve. Different perspectives lead to better solutions and innovation.",
        },
        {
            icon: Zap,
            title: "Empowering Innovation",
            description: "We encourage our teams to think creatively, challenge the status quo, and pursue innovative solutions.",
        },
        {
            icon: BookOpen,
            title: "Continuous Learning",
            description: "We invest in our team members' professional development through comprehensive training programs and mentorship opportunities.",
        },
    ];

    const teamMembers = [
        {
            name: "Sanjay Kumar Padhi",
            role: "CEO",
            image: SanjaySir,
        },
        {
            name: "Ujjwal Kumar Sahoo",
            role: "CTO",
            image: Ujjwal,
        },
        {
            name: "Kumar Manish",
            role: "COO",
            image: Manish,
        },
    ];

    const introContent = {
        badge: "Team Excellence",
        badgeIcon: Users,
        title: "The Heart of Our Organization",
        subtitle: "Collaboration, Innovation, Excellence",
        description:
            "Our teams are the driving force behind our success. Comprised of talented professionals from diverse backgrounds, they bring unique perspectives, skills, and experiences that fuel innovation and excellence. We foster a culture of collaboration, continuous learning, and mutual respect that empowers every team member to thrive.",
        image1:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080",
        image2:
            "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=1080",
    };

    const IntroIcon = introContent.badgeIcon;

    return (
        <>
            {/* Hero Section */}
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
                        <p className="text-lg sm:text-xl text-center text-white/80">
                            {heroContent.subText}
                        </p>
                    </div>
                </div>
            </HeroBackground>

            {/* Gradient Fade */}
            <div className="w-full h-32 bg-gradient-to-b from-transparent to-white -mt-32 relative z-10 pointer-events-none" />

            {/* Intro Section */}
            <section className="bg-white py-16 md:py-24 relative z-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        <AnimatedSection className="space-y-6 sm:space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-[#003A5C]/10 to-[#1146F2]/10 rounded-full hover:from-[#003A5C]/20 hover:to-[#1146F2]/20 transition-colors duration-300">
                                <IntroIcon className="w-4 sm:w-5 h-4 sm:h-5 text-[#1146F2]" />
                                <span className="text-[#003A5C] font-medium text-sm sm:text-base">
                                    {introContent.badge}
                                </span>
                            </div>
                            <div className="space-y-3 sm:space-y-4">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#070707] font-semibold">
                                    {introContent.title}
                                </h1>
                                {introContent.subtitle && (
                                    <h2 className="text-xl sm:text-2xl text-[#1146F2]">
                                        {introContent.subtitle}
                                    </h2>
                                )}
                            </div>
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                                {introContent.description}
                            </p>
                            <Link href={heroContent.ctaLink}>
                                <Button
                                    variant="primary"
                                    className="mt-6 sm:mt-8 hover:scale-105 transition-transform duration-300"
                                >
                                    Get Started
                                </Button>
                            </Link>
                        </AnimatedSection>
                        <AnimatedSection
                            delay={200}
                            className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full"
                        >
                            <div className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-[#003A5C] to-[#1146F2] rounded-3xl opacity-20 blur-3xl animate-pulse" />
                            <div className="absolute top-0 right-0 w-[75%] sm:w-[80%] lg:w-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10">
                                <ImageWithFallback
                                    src={introContent.image1}
                                    alt="Team collaboration"
                                    className="w-full h-64 sm:h-80 lg:h-[400px] object-cover"
                                />
                            </div>
                            <div className="absolute bottom-8 sm:bottom-10 lg:bottom-16 left-0 w-[75%] sm:w-[80%] lg:w-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 border-4 sm:border-8 border-white z-20">
                                <ImageWithFallback
                                    src={introContent.image2}
                                    alt="Team working together"
                                    className="w-full h-64 sm:h-80 lg:h-[400px] object-cover"
                                />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 lg:px-12">
                    <AnimatedSection className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#070707] mb-4">
                            What Makes Our Teams Special
                        </h2>
                        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
                            Discover the culture and values that unite us
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <AnimatedSection key={index} delay={index * 100}>
                                    <div className="group h-full p-6 md:p-8 border border-slate-200 rounded-2xl bg-white hover:shadow-xl hover:border-[#1146F2]/30 transition-all duration-300 text-center">
                                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#003A5C] to-[#1146F2] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-[#070707] mb-3">
                                            {value.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 lg:px-12">
                    <AnimatedSection className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 md:mb-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#070707] mb-2">
                                Meet the Visionaries
                            </h2>
                            <p className="text-slate-600 text-base md:text-lg">
                                The leaders driving our mission forward
                            </p>
                        </div>
                        <Link href="/about/leadership">
                            <Button variant="secondary" className="hover:scale-105 transition-transform duration-300">
                                View All
                            </Button>
                        </Link>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {teamMembers.map((member, index) => (
                            <AnimatedSection key={index} delay={index * 150}>
                                <div className="group bg-slate-50 p-5 md:p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
                                    <div className="relative overflow-hidden rounded-xl mb-5 aspect-[3/4]">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#003A5C]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#070707] mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-[#1146F2] font-medium">
                                        {member.role}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamsPage;
