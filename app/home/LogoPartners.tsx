"use client";
import Typography from "@/components/typography";

export default function LogoPartners() {
    return (
        <div className="bg-slate-50 dark:bg-[#0a0a0a] py-[20px] md:py-[24px]">
            <div className="max-w-4xl mx-auto px-[20px] md:px-[40px]">
                <Typography
                    as="div"
                    size={14}
                    weight={500}
                    className="text-center text-slate-500 dark:text-slate-400"
                >
                    Rabinnson Private Limited is used by over 69.000+ companies across the globe
                </Typography>
            </div>
        </div>
    )
}
