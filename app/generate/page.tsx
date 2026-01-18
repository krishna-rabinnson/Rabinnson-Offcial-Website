import HeroBackground from "@/components/HeroBackground";
import Typography from "@/components/typography";
import Button from "@/components/button";

import Image from "next/image";
import Link from "next/link";

import Avatar1 from "@/assets/images/avatar-1.webp";
import Avatar2 from "@/assets/images/avatar-2.webp";
import Avatar3 from "@/assets/images/avatar-3.webp";
import Avatar4 from "@/assets/images/avatar-4.webp";

import IdeaDisco from "./idea-discovery/IdeaDiscovery";
import ProblemIdentifica from "./problem-identification/ProblemIdentification";
import App from "./ankh/Final";

export default function GenerateIdea() {
  return (
    <>
      <HeroBackground>
        <div className="w-full lg:w-[60%] lg:mx-auto flex flex-col items-start lg:items-center lg:text-center justify-center gap-[72px] lg:gap-[160px]">
          <div className="w-full flex flex-col items-start lg:items-center gap-[24px]">
            <div className="flex flex-col items-start gap-[12px] pt-[24px]">
              <div className="flex items-center">
                <Image src={Avatar1} alt="Avatar1" width={32} height={32} />
                <Image src={Avatar2} alt="Avatar2" width={32} height={32} className="ml-[-8px]" />
                <Image src={Avatar3} alt="Avatar3" width={32} height={32} className="ml-[-8px]" />
                <Image src={Avatar4} alt="Avatar4" width={32} height={32} className="ml-[-8px]" />
              </div>

              <Typography color="#fff" noDarkMode className="md:hidden">
                Client Worldwide
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
              Every successful business — starts with an idea
            </Typography>

            <Typography color="#fff" noDarkMode size={18} className="md:w-[80%]">
              The real challenge is shaping it into something practical, profitable, and scalable.
              Under Generate Your Idea, we guide you from confusion to clarity, helping you discover
              opportunities, validate concepts, and design a strong foundation for your startup journey.
            </Typography>

            <Link href="/contact">
              <Button variant="primary" className="mt-[32px]">
                Talk to an Expert
              </Button>
            </Link>

            <p className="text-sm text-center">
              Validate your Business Idea & Get a Free Idea Assessment
            </p>
          </div>
        </div>
      </HeroBackground>

      <IdeaDisco />
      <ProblemIdentifica />
      <App />
    </>
  );
}
