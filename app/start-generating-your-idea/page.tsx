"use client";

import Image from 'next/image';
import React from "react";
import { ArrowRight } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import IdeaForm from "./IdeaForm";
import Avatar1 from '@/assets/images/avatar-1.webp';
import Avatar2 from '@/assets/images/avatar-2.webp';
import Avatar3 from '@/assets/images/avatar-3.webp';
import Avatar4 from '@/assets/images/avatar-4.webp';


const StartGeneratingIdeaPage = () => {

    const heroContent = {
        title: "Start Generating Your Idea",
        description: "Turn your vision into reality. Share your startup idea with us and let our team of experts guide you through validation, registration, and growth strategies.",
        ctaText: "Start My Journey",
        subText: "Empowering Next-Gen Entrepreneurs"
    };

    return (
        <>
            

            <HeroBackground>
                <div className="w-full lg:w-[80%] lg:mx-auto flex flex-col items-start lg:items-center lg:text-center justify-center gap-[72px] lg:gap-[160px]">
                    <div className="w-full flex flex-col items-start lg:items-center gap-[24px]">
                        <div className="flex flex-col items-start gap-[12px] pt-[24px]">
                            <div className="flex items-center">
                                <Image src={Avatar1} alt="Avatar1" className="w-[32px]" />
                                <Image src={Avatar2} alt="Avatar2" className="w-[32px] ml-[-8px]" />
                                <Image src={Avatar3} alt="Avatar3" className="w-[32px] ml-[-8px]" />
                                <Image src={Avatar4} alt="Avatar4" className="w-[32px] ml-[-8px]" />
                            </div>
                            <Typography color="#fff" noDarkMode className="md:hidden">Trusted by 3000+ Founders</Typography>
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

                        <p className="text-lg sm:text-xl text-center text-white/80">{heroContent.subText}</p>
                    </div>
                </div>
            </HeroBackground>

            {/* Hero transition gradient */}
            <div className="w-full h-32 bg-gradient-to-b from-transparent to-white -mt-32 relative z-10 pointer-events-none" />

            <div className="min-h-screen bg-white relative z-20">
                <div id="idea-form-section" className="container mx-auto px-4 sm:px-6 py-12 lg:py-20 flex justify-center">
                    <IdeaForm />
                </div>
            </div>
        </>
    );
};

export default StartGeneratingIdeaPage;
