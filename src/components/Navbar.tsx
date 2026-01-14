"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        // 1. BACKGROUND KÍNH (GLASSMORPHISM)
        // Dùng bg-slate-900/10 (rất trong) kết hợp backdrop-blur-md để làm mờ nền bên dưới
        // Border đổi sang white/5 cho tinh tế hơn
        <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/10 backdrop-blur-md border-b border-white/5 transition-all duration-300">
            <div className="container mx-auto flex justify-between items-center px-4 h-24">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative flex items-center justify-center">
                        {/* 2. LOGO GLOW: Đổi sang màu Hồng (Fuchsia) */}
                        <div className="absolute inset-0 bg-fuchsia-500 blur-2xl opacity-20 rounded-full group-hover:opacity-50 transition-opacity"></div>

                        <div
                            className="relative z-10 w-[120px] h-32 bg-contain  bg-no-repeat bg-center brightness-0 invert"
                            style={{ backgroundImage: "url('/image/logo.png')" }}
                            aria-label="BizTada Logo"
                        ></div>
                    </div>
                </Link>

                <nav className="flex items-center gap-8">
                    <a
                        href="#"
                        className="text-slate-200 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] font-medium hidden md:block transition-all text-sm tracking-wide"
                    >
                        Về BizTada
                    </a>

                    {/* 3. NÚT BẤM: Gradient Hồng Tím (Match với Hero) */}
                    <button className="relative group overflow-hidden rounded-full font-bold text-sm text-white shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all">

                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-500 group-hover:opacity-90 transition-opacity"></div>

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