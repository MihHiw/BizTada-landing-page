"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1121]/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full group-hover:opacity-40 transition-opacity"></div>
                        <Image
                            src="/image/logo.png"
                            alt="BizTada"
                            width={140}
                            height={40}
                            className="h-12 w-auto object-contain relative z-10 brightness-0 invert"
                        />
                    </div>
                </Link>

                <nav className="flex items-center gap-8">
                    <a
                        href="#"
                        className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] font-medium hidden md:block transition-all"
                    >
                        Về BizTada
                    </a>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_rgba(37,99,235,0.8)] border border-blue-400/30">
                        Tư vấn ngay
                    </button>
                </nav>
            </div>
        </header>
    );
}