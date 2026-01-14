"use client"; // Đảm bảo dòng này ở đầu vì ta dùng onClick

import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin", "vietnamese"] });
const inter = Inter({ subsets: ["latin", "vietnamese"] });

const TechShapeIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="12" r="3" fill="currentColor" className="animate-pulse" />
    </svg>
);

export default function HeroSection() {

    // Hàm xử lý cuộn xuống Form
    const handleScrollToForm = () => {
        // Tìm phần tử có id là "ai-form-section"
        const formSection = document.getElementById("ai-form-section");
        if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-[#0B1121] text-white flex flex-col items-center pt-28 md:pt-36">

            {/* --- BACKGROUND EFFECTS --- */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full mix-blend-screen opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen opacity-40"></div>
            </div>

            {/* --- DECORATIVE ICONS --- */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <TechShapeIcon className="absolute top-32 left-[10%] w-10 h-10 text-blue-500/50 rotate-12 animate-pulse" />
                <TechShapeIcon className="absolute top-20 right-[20%] w-14 h-14 text-cyan-400/30 rotate-45" />
                <TechShapeIcon className="absolute bottom-40 left-[15%] w-8 h-8 text-indigo-400/40 -rotate-6" />
                <TechShapeIcon className="absolute top-1/2 right-[10%] w-6 h-6 text-blue-300/60 rotate-90" />
                <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
            </div>

            {/* --- MAIN CONTENT --- */}
            <div className="container mx-auto px-4 md:px-6 text-center relative z-10">

                {/* Logo & Margin Adjustments */}
                <div className="mb-6 -mt-4 flex justify-center">
                    <div className="relative group">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[50px] rounded-full"></div>
                        <Image
                            src="/image/logo.png"
                            alt="BizTada"
                            width={500}
                            height={200}
                            className="w-48 md:w-80 h-auto object-contain relative z-10 drop-shadow-2xl brightness-125"
                            priority
                        />
                    </div>
                </div>

                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60 mb-6 leading-[1.1] drop-shadow-sm ${playfair.className}`}>
                    Chạm Tới <br className="md:hidden" /> Vẻ Đẹp Hoàn Hảo
                </h1>

                <p className={`max-w-2xl mx-auto text-blue-100/60 mb-10 leading-relaxed text-base md:text-lg font-light tracking-wide ${inter.className}`}>
                    Bằng những <span className="text-blue-400 font-medium drop-shadow-[0_0_15px_rgba(96,165,250,0.4)]">công nghệ thẩm mỹ AI</span> tiên tiến,
                    Vanilla mang đến trải nghiệm làm đẹp an toàn, thông minh và đầy tính nghệ thuật.
                </p>

                {/* --- BUTTON VỚI SỰ KIỆN SCROLL --- */}
                <button
                    onClick={handleScrollToForm}
                    className="group relative bg-blue-600 hover:bg-blue-500 text-white text-base md:text-lg px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] inline-flex items-center gap-2 overflow-hidden cursor-pointer"
                >
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shiny" />
                    <span className="relative z-10">Thử Ngay Với AI</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                </button>
            </div>
        </section>
    );
}