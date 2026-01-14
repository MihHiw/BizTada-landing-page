"use client";

import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { useEffect, useState } from "react";
// 👇 1. Import Navbar từ file components
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin", "vietnamese"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin", "vietnamese"] });
const inter = Inter({ subsets: ["latin", "vietnamese"] });

export default function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 3500);
        return () => clearTimeout(timer);
    }, []);

    const scrollToForm = () => {
        const formSection = document.getElementById('ai-form-section');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center bg-transparent px-4">

            {/* 👇 2. Thêm Navbar vào đây (Nó sẽ tự nổi lên trên cùng nhờ class 'fixed' trong file Navbar) */}
            <Navbar />

            <style jsx>{`
                /* ... GIỮ NGUYÊN TOÀN BỘ STYLE CŨ ... */
                @keyframes assemble-1 { 0% { transform: translate(-200px, -200px) rotate(-45deg); opacity: 0; color: #ff0055; } 50%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; color: #fff; } }
                @keyframes assemble-2 { 0% { transform: translate(0, -300px) scale(2); opacity: 0; color: #00ffcc; } 50%, 100% { transform: translate(0, 0) scale(1); opacity: 1; color: #fff; } }
                @keyframes assemble-3 { 0% { transform: translate(200px, -200px) rotate(90deg); opacity: 0; color: #ffff00; } 50%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; color: #fff; } }
                @keyframes assemble-4 { 0% { transform: translate(0, 300px) scale(0.5); opacity: 0; color: #0088ff; } 50%, 100% { transform: translate(0, 0) scale(1); opacity: 1; color: #fff; } }
                @keyframes assemble-5 { 0% { transform: translate(-200px, 200px) rotate(-180deg); opacity: 0; color: #ff00ff; } 50%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; color: #fff; } }
                @keyframes assemble-6 { 0% { transform: translate(300px, 0) skew(30deg); opacity: 0; color: #00ff00; } 50%, 100% { transform: translate(0, 0) skew(0deg); opacity: 1; color: #fff; } }
                @keyframes assemble-7 { 0% { transform: translate(200px, 200px) rotate(45deg); opacity: 0; color: #ffaa00; } 50%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; color: #fff; } }
                @keyframes loading-blink { 0% { filter: blur(0); opacity: 1; transform: translateY(0); } 100% { filter: blur(5px); opacity: 0.2; transform: translateY(-5px); } }
                .l-1 { animation: assemble-1 3s infinite ease-in-out; } .l-2 { animation: assemble-2 3s infinite ease-in-out; } .l-3 { animation: assemble-3 3s infinite ease-in-out; } .l-4 { animation: assemble-4 3s infinite ease-in-out; } .l-5 { animation: assemble-5 3s infinite ease-in-out; } .l-6 { animation: assemble-6 3s infinite ease-in-out; } .l-7 { animation: assemble-7 3s infinite ease-in-out; }
                .loading-text span { animation: loading-blink 1.2s infinite alternate; } .loading-text span:nth-child(2) { animation-delay: 0.2s; } .loading-text span:nth-child(3) { animation-delay: 0.4s; } .loading-text span:nth-child(4) { animation-delay: 0.6s; } .loading-text span:nth-child(5) { animation-delay: 0.8s; } .loading-text span:nth-child(6) { animation-delay: 1s; } .loading-text span:nth-child(7) { animation-delay: 1.2s; }

                @keyframes text-shimmer { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
                @keyframes float-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                @keyframes code-pulse { 0%, 100% { text-shadow: 0 0 10px rgba(56,189,248,0.5); opacity: 1; } 50% { text-shadow: 0 0 25px rgba(56,189,248,0.9); opacity: 0.8; } }
                .animate-text-shimmer { background-size: 200% auto; animation: text-shimmer 3s linear infinite; }
                .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
                .animate-code-pulse { animation: code-pulse 2s ease-in-out infinite; }
                
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .is-loaded .delay-100 { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; animation-delay: 0.1s; }
                .is-loaded .delay-200 { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; animation-delay: 0.3s; }
                .is-loaded .delay-300 { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; animation-delay: 0.5s; }
                .is-loaded .delay-400 { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; animation-delay: 0.7s; }
            `}</style>

            {/* Màn hình chờ */}
            <div className={`fixed inset-0 z-[9999] bg-[#0f172a] flex flex-col items-center justify-center transition-all duration-1000 ${isLoaded ? 'opacity-0 pointer-events-none scale-110' : 'opacity-100'}`}>
                <div className={`flex text-[60px] md:text-[90px] font-black mb-6 font-galvani`}>
                    <span className="l-1 inline-block text-white">B</span><span className="l-2 inline-block text-white">i</span><span className="l-3 inline-block text-white">z</span><span className="l-4 inline-block text-white">T</span><span className="l-5 inline-block text-white">a</span><span className="l-6 inline-block text-white">d</span><span className="l-7 inline-block text-white">a</span>
                </div>
                <div className={`loading-text text-xl font-bold tracking-[0.5em] text-cyan-400 ${jetbrainsMono.className}`}>
                    <span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span>
                </div>
            </div>

            {/* Nội dung chính */}
            <div className={`relative w-full h-full flex flex-col items-center justify-center transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100 is-loaded' : 'opacity-0 scale-95'}`}>
                <div className="container mx-auto text-center relative z-10">

                    {/* Badge */}
                    <div className={`delay-100 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/40 bg-white/10 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(56,189,248,0.4)] animate-float-slow ${jetbrainsMono.className}`}>
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-[11px] font-bold tracking-widest text-cyan-100 uppercase animate-code-pulse">
                            BizTada_System_Ready
                        </span>
                    </div>


                    {/* Tiêu đề */}
                    <h1 className={`delay-200 text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-white mb-6 leading-normal tracking-wide drop-shadow-2xl animate-float-slow font-galvani`}>


                        <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-shimmer">
                            AI AND AUTOMATION SOLUTIONS
                        </span>

                        <br />
                        {/* Dòng dưới giữ nguyên */}
                        <span className="inline-block mt-2 bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.5)] animate-text-shimmer">
                            FOR BUSINESSES
                        </span>
                    </h1>

                    <p className={`delay-300 max-w-2xl mx-auto text-blue-100 mb-10 text-lg md:text-xl font-light leading-relaxed tracking-wide ${inter.className}`}>
                        Bằng những
                        <span className={`mx-2 text-white font-bold bg-gradient-to-r from-blue-600/40 to-cyan-600/40 px-2 py-0.5 rounded border border-cyan-400/40 inline-block animate-code-pulse ${jetbrainsMono.className}`}>
                            &lt;AI_Technology /&gt;
                        </span>
                        tiên tiến, BizTada mang đến trải nghiệm làm đẹp an toàn và thông minh.
                    </p>

                    <div className="delay-400">
                        <button onClick={scrollToForm} className={`group relative px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(56,189,248,0.6)] ${spaceGrotesk.className}`}>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full opacity-70 blur-md group-hover:opacity-100 transition-opacity animate-pulse"></div>
                            <div className="absolute inset-[2px] bg-gradient-to-r from-blue-600 to-blue-600 rounded-full z-10"></div>
                            <span className="relative z-20 flex items-center gap-3 text-white">
                                Thử Ngay Với AI
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}