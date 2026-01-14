import "@/styles/globals.css"; // Import CSS toàn cục tại đây
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

// Cấu hình font Inter
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={inter.className}>
            <Component {...pageProps} />
        </main>
    );
}