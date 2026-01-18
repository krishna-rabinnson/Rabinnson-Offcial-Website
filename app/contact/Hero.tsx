import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import Icons from "@/components/icon";
import Avatar1 from '@/assets/images/avatar-1.webp';
import Avatar2 from '@/assets/images/avatar-2.webp';
import Avatar3 from '@/assets/images/avatar-3.webp';
import Avatar4 from '@/assets/images/avatar-4.webp';
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function Hero() {
    return (
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
                        <Typography color="#fff" noDarkMode className="md:hidden">Client Worldwide</Typography>
                    </div>
                    <Typography as="div" color="#fff" size={72} sizeTablet={52} sizeMobile={40} weight={600} lineHeight={85} lineHeightTablet={64} lineHeightMobile={52} letterSpacing={-2.16} letterSpacingMobile={-1.2} noDarkMode>
                        Connect With Us – Let's
                        Elevate Your Brand!
                    </Typography>
                    <Typography color="#fff" noDarkMode size={18} className="md:w-[80%]">
                        Choose a plan that fits your goals and budget, offering scalable solutions with transparent pricing and no hidden fees
                    </Typography>
                    <Button variant="primary" className="mt-[32px]">GET STARTED</Button>
                </div>
                <div className="flex flex-col lg:flex-row items-start justify-between gap-[32px] w-full lg:w-[90%]">
                    <div className="flex items-center gap-[24px]">
                        <div className="bg-[#1D1D1D] dark:bg-[#393939] rounded-[12px] p-[12px]">
                            <Icons name="chats" className="w-[24px] h-[24px]" color="#fff" />
                        </div>
                        <div className="flex flex-col items-start gap-[4px]">
                            <Typography color="#070707" size={20} weight={700}>Live Chat</Typography>
                            <Typography color="#070707" size={14} weight={400} className="underline">response@rabinnson.com</Typography>
                        </div>
                    </div>
                    <div className="flex items-center gap-[24px]">
                        <div className="bg-[#1D1D1D] dark:bg-[#393939] rounded-[12px] p-[12px]">
                            <Icons name="map" className="w-[24px] h-[24px]" color="#fff" />
                        </div>
                        <div className="flex flex-col items-start gap-[4px]">
                            <Typography color="#070707" size={20} weight={700}>Visit Us</Typography>
                            <Typography color="#070707" size={14} weight={400} className="underline">response@rabinnson.com</Typography>
                        </div>
                    </div>
                    <div className="flex items-center gap-[24px]">
                        <div className="bg-[#1D1D1D] dark:bg-[#393939] rounded-[12px] p-[12px]">
                            <Icons name="phone" className="w-[24px] h-[24px]" color="#fff" />
                        </div>
                        <div className="flex flex-col items-start gap-[4px]">
                            <Typography color="#070707" size={20} weight={700}>Call Us</Typography>
                            <Typography color="#070707" size={14} weight={400} className="underline">+91 96689-01245</Typography>
                        </div>
                    </div>
                </div>
            </div>

            {/* Head Office Section */}
            <div className="w-full mt-[48px] md:mt-[72px]">
                <div className="w-full lg:w-[60%] lg:mx-auto flex flex-col items-center">
                    <Typography as="div" color="#070707" size={24} sizeMobile={20} weight={600} className="mb-[24px] text-center">
                        Head Office
                    </Typography>
                    <div className="w-full max-w-[500px] bg-white/95 dark:bg-[#1D1D1D] backdrop-blur-sm rounded-[16px] p-[28px] md:p-[32px] shadow-xl border border-[#1146F2]/20">
                        <div className="flex items-start gap-[20px]">
                            <div className="bg-[#003A5C] rounded-[12px] p-[14px] flex-shrink-0">
                                <MapPin className="w-[24px] h-[24px] text-white" />
                            </div>
                            <div className="flex flex-col gap-[8px]">
                                <Typography color="#070707" size={20} sizeMobile={18} weight={700}>Hyderabad Office</Typography>
                                <Typography color="#5A5A5A" size={15} sizeMobile={14} weight={400} lineHeight={24}>
                                    WeWork, 13th Floor, Building No 9,<br />
                                    IT Park, Shaikpet, Hi Tech City,<br />
                                    Hyderabad – 500081,<br />
                                    Telangana State, India
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Branch Offices Section */}
            <div className="w-full mt-[32px] md:mt-[48px]">
                <div className="w-full lg:w-[80%] lg:mx-auto flex flex-col items-center">
                    <Typography as="div" color="#070707" size={24} sizeMobile={20} weight={600} className="mb-[24px] text-center">
                        Branch Offices
                    </Typography>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[24px] max-w-[900px]">
                        {/* Mumbai Office */}
                        <div className="bg-white/90 dark:bg-[#1D1D1D] backdrop-blur-sm rounded-[16px] p-[24px] shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start gap-[16px]">
                                <div className="bg-[#1146F2] rounded-[10px] p-[10px] flex-shrink-0">
                                    <MapPin className="w-[20px] h-[20px] text-white" />
                                </div>
                                <div className="flex flex-col gap-[8px]">
                                    <Typography color="#070707" size={18} weight={600}>Mumbai Office</Typography>
                                    <Typography color="#5A5A5A" size={14} weight={400} lineHeight={22}>
                                        WeWork, Unit 212, 6th Floor,<br />
                                        Hiranandani Business Park,<br />
                                        Powai, Mumbai – 400072,<br />
                                        Maharashtra, India
                                    </Typography>
                                </div>
                            </div>
                        </div>

                        {/* Bhubaneswar Office */}
                        <div className="bg-white/90 dark:bg-[#1D1D1D] backdrop-blur-sm rounded-[16px] p-[24px] shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start gap-[16px]">
                                <div className="bg-[#1146F2] rounded-[10px] p-[10px] flex-shrink-0">
                                    <MapPin className="w-[20px] h-[20px] text-white" />
                                </div>
                                <div className="flex flex-col gap-[8px]">
                                    <Typography color="#070707" size={18} weight={600}>Bhubaneswar Office</Typography>
                                    <Typography color="#5A5A5A" size={14} weight={400} lineHeight={22}>
                                        Coworking-SRB Tower,<br />
                                        SRB Towers, 1st & 2nd Floor,<br />
                                        E-12, Infocity, Patia,<br />
                                        Bhubaneswar – 751024
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HeroBackground>
    )
}
