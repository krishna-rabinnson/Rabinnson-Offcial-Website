import Icons from "@/components/icon";
import Tag from "@/components/Tag";
import Typography from "@/components/typography";
import Image from "next/image";
import Eclipse from '@/assets/images/lates-project-eclipse.png';
import Portofolio1 from '@/assets/images/consysmindlanding.png';
import Portofolio2 from '@/assets/images/fintech-photo.webp';
import Portofolio3 from '@/assets/images/y2ff.png';

export default function LatestProject() {
    return (
        <div className="bg-white dark:bg-[#070707] w-full px-[20px] md:px-[72px] py-[48px] md:py-[80px]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-[24px]">
                <div className="flex flex-col items-start gap-[24px]">
                    <Tag>
                        <Typography size={14} sizeMobile={12} weight={500}>Latest Projects</Typography>
                    </Tag>
                    <div className="text-[32px] md:text-[48px] font-bold leading-[41.6px] md:leading-[56px] text-[#070707] dark:text-[#fff]">
                        Showcasing Creativity, <br />
                        Inspiring <OptimizedImage src={Eclipse} alt="Eclipse" className="inline w-10 md:w-20" width={80} height={80} /> Possibilities
                    </div>
                </div>
                <div className="flex gap-[10px] border-b border-[#070707] dark:border-[#fff] cursor-pointer">
                    <Typography size={16} weight={500}>SEE ALL PORTOFOLIO</Typography>
                    <Icons name="arrowRight" className="w-5" />
                </div>
            </div>
            <div className="mt-[40px] md:mt-[64px] flex flex-col gap-3 sm:gap-4 md:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Image
                            src={Portofolio1}
                            alt="Consysmind"
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw"
                            className="object-cover object-top hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Image
                            src={Portofolio2}
                            alt="Fintech"
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw"
                            className="object-cover object-top hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
                <div className="relative aspect-[16/9] sm:aspect-[16/7] md:aspect-[21/8] lg:aspect-[21/7] w-full overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                        src={Portofolio3}
                        alt="Y2F Hub"
                        fill
                        sizes="100vw"
                        className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
        </div>
    )
}
