import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import Icons from "@/components/icon";
import { OptimizedImage } from "@/components/OptimizedImage";
import Avatar1 from '@/assets/images/avatar-1.webp';
import Avatar2 from '@/assets/images/avatar-2.webp';
import Avatar3 from '@/assets/images/avatar-3.webp';
import Avatar4 from '@/assets/images/avatar-4.webp';
import Givenchy from '@/assets/images/consysmindlanding.webp';

interface HeroProps {
    onScrollToTestimonials?: () => void;
}

export default function Hero({ onScrollToTestimonials }: HeroProps) {
    return (
        <HeroBackground>
            <div className="flex flex-col lg:flex-row justify-between items-start self-stretch gap-[8px]">
                <div className="w-full order-2 lg:w-[70%] lg:order-1">
                    <Typography as="div" color="#fff" size={72} sizeTablet={52} sizeMobile={40} weight={600} lineHeight={85} lineHeightTablet={64} lineHeightMobile={52} letterSpacing={-2.16} letterSpacingMobile={-1.2} noDarkMode>
                        We Crafting Real Results
                        More Traffic, More Leads,
                        More Growth!
                    </Typography>
                    <Typography color="#fff" noDarkMode size={18} className="mt-[24px] lg:w-[60%]">
                        Your success is our mission. We create custom digital marketing strategies that increase brand awareness, engagement, and revenue.
                    </Typography>
                    <Link href="/contact">
                        <Button variant="primary" className="mt-[32px]">GET STARTED</Button>
                    </Link>
                </div>
                <div className="flex flex-col items-start lg:items-end gap-[12px] pt-[24px] order-1 lg:order-2">
                    <div className="flex items-center">
                        <OptimizedImage src={Avatar1} alt="Avatar1" className="w-[32px]" width={32} height={32} priority />
                        <OptimizedImage src={Avatar2} alt="Avatar2" className="w-[32px] ml-[-8px]" width={32} height={32} priority />
                        <OptimizedImage src={Avatar3} alt="Avatar3" className="w-[32px] ml-[-8px]" width={32} height={32} priority />
                        <OptimizedImage src={Avatar4} alt="Avatar4" className="w-[32px] ml-[-8px]" width={32} height={32} priority />
                    </div>
                    <Typography color="#fff" noDarkMode>Client Worldwide</Typography>
                </div>
            </div>
            <div className="flex items-center gap-[40px] mt-[48px] lg:hidden">
                <div className="w-[180px]">
                    <Typography color="#070707" size={40} weight={600} lineHeight={48}>23K</Typography>
                    <Typography color="#070707" className="mt-[8px]">Year of experiences</Typography>
                </div>
                <div className="w-[180px]">
                    <Typography color="#070707" size={40} weight={600} lineHeight={48}>8+</Typography>
                    <Typography color="#070707" className="mt-[8px]">Year of experiences</Typography>
                </div>
            </div>
            <div className="flex justify-between items-stretch lg:items-end self-stretch mt-[48px] lg:mt-[22px]">
                <div className="hidden lg:flex justify-between items-center gap-[8px] text-[#070707] dark:text-white cursor-pointer" onClick={onScrollToTestimonials}>SCROLL DOWN <Icons name="arrowDown" className="w-5" /></div>
                <div className="relative flex flex-col justify-between items-end pt-[56px] lg:pt-0">
                    <div className="hidden absolute left-0 top-[-650%] lg:flex items-center gap-[80px]">
                        <div className="w-[180px]">
                            <Typography color="#070707" size={40} weight={600} lineHeight={48}>23K</Typography>
                            <Typography color="#070707" className="mt-[8px]">Year of experiences</Typography>
                        </div>
                        <div className="w-[180px]">
                            <Typography color="#070707" size={40} weight={600} lineHeight={48}>8+</Typography>
                            <Typography color="#070707" className="mt-[8px]">Year of experiences</Typography>
                        </div>
                    </div>
                    <Link href="/portofolio">
                        <div className="flex justify-between items-center gap-[8px] text-[#070707] text-[14px] dark:text-[#fff] cursor-pointer">SEE OUR PORTFOLIO <Icons name="arrowUpRight" className="w-5" /></div>
                    </Link>
                    <Typography as="div" className="lg:hidden" color="#070707" size={28} weight={500} lineHeight={24}><Typography as="span" color="#8D8D8D" size={28} weight={500} lineHeight={24} noDarkMode >4</Typography>/5</Typography>
                </div>
                <div className="flex items-end gap-[24px] w-[50%] md:w-auto">
                    <Typography as="div" className="hidden lg:inline-block" color="#070707" size={28} weight={500} lineHeight={24}><Typography as="span" color="#8D8D8D" size={28} weight={500} lineHeight={24} noDarkMode >4</Typography>/5</Typography>
                    <div>
                        <div className="flex justify-between items-start self-stretch">
                            <div>
                                <Typography color="#8D8D8D" noDarkMode>Product Design</Typography>
                                <Typography color="#070707" weight={600} className="mt-[4px]">CONSYSMIND</Typography>
                            </div>
                            <Typography color="#070707">1 Jan 2026</Typography>
                        </div>
                        <OptimizedImage src={Givenchy} alt="Givenchy" className="w-full md:w-[270px] rounded mt-[12px]" width={270} height={180} priority />
                    </div>
                </div>
            </div>
        </HeroBackground>
    )
}
