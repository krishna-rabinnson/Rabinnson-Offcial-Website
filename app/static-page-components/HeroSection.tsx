import { OptimizedImage } from '@/components/OptimizedImage';
import Link from 'next/link';
import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import Avatar1 from "@/assets/images/avatar-1.webp";
import Avatar2 from "@/assets/images/avatar-2.webp";
import Avatar3 from "@/assets/images/avatar-3.webp";
import Avatar4 from "@/assets/images/avatar-4.webp";
import { HeroContent } from "./types";

interface HeroSectionProps {
    content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
    return (
        <HeroBackground>
            <div className="w-full lg:w-[60%] lg:mx-auto flex flex-col items-start lg:items-center lg:text-center justify-center gap-[72px] lg:gap-[160px]">
                <div className="w-full flex flex-col items-start lg:items-center gap-[24px]">
                    <div className="flex flex-col items-start gap-[12px] pt-[24px]">
                        <div className="flex items-center">
                            <OptimizedImage src={Avatar1} alt="Avatar1" className="w-[32px]" width={32} height={32} priority />
                            <OptimizedImage src={Avatar2} alt="Avatar2" className="w-[32px] ml-[-8px]" width={32} height={32} priority />
                            <OptimizedImage src={Avatar3} alt="Avatar3" className="w-[32px] ml-[-8px]" width={32} height={32} priority />
                            <OptimizedImage src={Avatar4} alt="Avatar4" className="w-[32px] ml-[-8px]" width={32} height={32} priority />
                        </div>
                        <Typography color="#fff" noDarkMode className="md:hidden">
                            {content.mobileLabel || "Trusted by Thousands"}
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
                        {content.title}
                    </Typography>
                    <Typography color="#fff" noDarkMode size={18} className="md:w-[80%]">
                        {content.description}
                    </Typography>
                    <Link href={content.ctaLink}>
                        <Button
                            variant="primary"
                            className="mt-[32px] hover:scale-105 transition-transform duration-300"
                        >
                            {content.ctaText}
                        </Button>
                    </Link>
                    <p className="text-lg sm:text-xl text-center text-black">
                        {content.subText}
                    </p>
                </div>
            </div>
        </HeroBackground>
    );
}
