"use client";

// 👇 1. Import Image từ next/image
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B1121] border-t border-white/5 py-8 text-gray-400">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">

          {/* CỘT 1: Logo */}
          <div className="flex flex-col items-center md:items-start gap-2">

            {/* 👇 2. SỬA LẠI: Dùng Next Image với fill */}
            {/* Container: 
                - h-12 (48px): Chiều cao cố định cho logo footer
                - w-40 (160px): Chiều rộng đủ lớn để logo giãn ra (giữ tỉ lệ ngang)
            */}
            <div className="relative h-12 w-40">
              <Image
                src="/image/logo.png"
                alt="BizTada Logo"
                fill // Tự động lấp đầy khung cha
                // object-center cho mobile (căn giữa), md:object-left cho desktop (căn trái)
                className="object-contain object-center md:object-left brightness-0 invert"
                sizes="(max-width: 768px) 100vw, 20vw" // Tối ưu tải ảnh
              />
            </div>

          </div>

          {/* CỘT 2: Thông tin liên hệ */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm text-center md:text-left">

            {/* Lịch làm việc */}
            <div>
              <h4 className="text-white font-semibold mb-1">Lịch làm việc</h4>
              <p>9:00 – 20:00 (Hàng ngày)</p>
              <p className="text-xs text-gray-600 italic mt-0.5">Nghỉ lễ theo quy định</p>
            </div>

            {/* Liên hệ */}
            <div>
              <h4 className="text-white font-semibold mb-1">Liên hệ</h4>
              <p className="mb-1">
                Hotline/Zalo: <a href="tel:0899739739" className="text-blue-500 font-bold hover:text-blue-400 transition-colors">0899 739 739</a>
              </p>
              <p>
                Email: <a href="mailto:vanilla.tadabiz@gmail.com" className="hover:text-blue-400 transition-colors">vanilla.tadabiz@gmail.com</a>
              </p>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}