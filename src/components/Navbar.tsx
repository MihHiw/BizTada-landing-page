"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/10 backdrop-blur-md border-b border-white/5 transition-all duration-300">
            <div className="container mx-auto flex justify-between items-center px-4 h-28">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative flex items-center justify-center">
                        {/* Glow effect */}
                        <div className="absolute inset-7 bg-fuchsia-200 blur-2xl opacity-10 rounded-full group-hover:opacity-50 transition-opacity"></div>
                        <div className="relative h-24 w-48">
                            <Image
                                src="/image/logo.png"
                                alt="BizTada Logo"
                                fill
                                className="object-contain object-left brightness-0 invert drop-shadow-lg"
                                priority
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                    </div>
                </Link>

                <nav className="flex items-center gap-8">
                    <a
                        href="#"
                        className="text-slate-200 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] font-medium hidden md:block transition-all text-sm tracking-wide"
                    >
                        Về BizTada
                    </a>

                    {/* 👇 NÚT ĐÃ SỬA: Thêm hover:shadow-none */}
                    <button className="relative group overflow-hidden rounded-full font-bold text-sm text-white hover:text-slate-900 shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-none transition-all duration-300">

                        {/* Lớp nền: Đổi từ gradient cyan sang trắng khi hover */}
                        <div className="absolute inset-0 bg-cyan-500 group-hover:bg-white transition-colors duration-300"></div>

                        {/* Nội dung nút */}
                        <span className="relative z-10 block px-6 py-2.5">
                            Tư vấn ngay
                        </span>
                    </button>
                </nav>
            </div>
        </header>
    );
}