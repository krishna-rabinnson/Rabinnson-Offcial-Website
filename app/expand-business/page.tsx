import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";
import Avatar1 from '@/assets/images/avatar-1.webp';
import Avatar2 from '@/assets/images/avatar-2.webp';
import Avatar3 from '@/assets/images/avatar-3.webp';
import Avatar4 from '@/assets/images/avatar-4.webp';
import Link from "next/link";
import Image from "next/image";
import { ValueProposition } from "./CtaPage";

import ProcessSteps from "./ProcessSteps";
import ServicesPage from "./Services";

export default function ExpnadBuisness() {
    return (<>
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
                        <Typography color="#fff" noDarkMode className="md:hidden">Expand Your Business</Typography>
                    </div>
                    <Typography as="div" color="#fff" size={72} sizeTablet={52} sizeMobile={40} weight={600} lineHeight={85} lineHeightTablet={64} lineHeightMobile={52} letterSpacing={-2.16} letterSpacingMobile={-1.2} noDarkMode>
                       When growth is stable, expansion is the next step
                        
                    </Typography>
                    <Typography color="#fff" noDarkMode size={18} className="md:w-[80%]">
                    Once your business is working, the next challenge is scaling without breaking systems, quality, or profitability. Under Expand Your Business, we help you replicate what works and unlock new opportunities.
                    </Typography>
                    <Link href= "/contact">
                    <Button variant="primary" className="mt-[32px]">Talk to an Expert</Button>
                    
                    </Link>
                    <p className="text-sm text-center">Scale with structure, not chaos.</p>
                </div>
           
            </div>
        </HeroBackground>
        <ValueProposition/>
        <ServicesPage/>
        <ProcessSteps/>

       
        </>
    )
}
