import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

// 2. Cấu hình Font Galvani
const galvani = localFont({
    src: "../../public/fonts/Galvani.otf",
    variable: "--font-galvani",
    display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        // 3. Thêm variable vào thẻ main bao quanh ứng dụng
        <main className={`${galvani.variable} font-sans`}>
            <Component {...pageProps} />
        </main>
    );
}