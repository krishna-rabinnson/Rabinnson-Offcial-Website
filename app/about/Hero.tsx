"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

import Typography from "@/components/typography";
import Button from "@/components/button";
import HeroBackground from "@/components/HeroBackground";

import Avatar1 from "@/assets/images/avatar-1.webp";
import Avatar2 from "@/assets/images/avatar-2.webp";
import Avatar3 from "@/assets/images/avatar-3.webp";
import Avatar4 from "@/assets/images/avatar-4.webp";

import Partner1 from "@/assets/images/Partners-1.webp";
import Partner2 from "@/assets/images/Partners-2.webp";
import Partner3 from "@/assets/images/Partners-3.webp";
import Partner4 from "@/assets/images/Partners-4.webp";
import Partner5 from "@/assets/images/Partners-5.webp";
import Partner6 from "@/assets/images/Partners-6.webp";

const images = [
  { src: Partner1, alt: "Partner1" },
  { src: Partner2, alt: "Partner2" },
  { src: Partner3, alt: "Partner3" },
  { src: Partner4, alt: "Partner4" },
  { src: Partner5, alt: "Partner5" },
  { src: Partner6, alt: "Partner6" },
];

export default function Hero() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sliderRef.current) return;

    const wrapper = sliderRef.current.querySelector(
      ".slider-track"
    ) as HTMLDivElement;

    if (!wrapper) return;

    const totalWidth = wrapper.scrollWidth / 2;

    gsap.to(wrapper, {
      x: `-=${totalWidth}`,
      duration: 20,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`,
      },
    });
  }, []);

  return (
    <HeroBackground>
      <div className="flex flex-col lg:flex-row justify-between items-start self-stretch">
        {/* LEFT */}
        <div className="w-full order-2 lg:w-[70%] lg:order-1">
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
            Creative Strategies, Impactful Results, Digital Excellence
          </Typography>

          <Typography
            color="#fff"
            size={18}
            noDarkMode
            className="mt-[24px] lg:w-[65%]"
          >
            We craft innovative digital strategies that drive engagement,
            enhance brand visibility, and deliver measurable results for your
            business growth.
          </Typography>

          <Link href="/contact">
            <Button variant="primary" className="mt-[32px]">
              GET STARTED
            </Button>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-start lg:items-end gap-[12px] pt-[24px] order-1 lg:order-2">
          <div className="flex items-center">
            {[Avatar1, Avatar2, Avatar3, Avatar4].map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`Avatar${i + 1}`}
                width={32}
                height={32}
                className={i > 0 ? "ml-[-8px]" : ""}
              />
            ))}
          </div>
          <Typography color="#fff" noDarkMode>
            Client Worldwide
          </Typography>
        </div>
      </div>

      {/* PARTNERS */}
      <div className="mt-[60px] py-[48px] md:py-[60px] flex flex-col items-center gap-[32px]">
        <Typography as="div" size={16} weight={500} className="text-center px-[40px]">
          Adverza is used by over 69,000+ companies across the globe
        </Typography>

        <div className="overflow-hidden w-full" ref={sliderRef}>
          <div className="flex items-center gap-20 slider-track">
            {[...images, ...images].map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-[30%] md:w-[20%] lg:w-[11%] flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </HeroBackground>
  );
}
