import AIForm from "@/components/AIForm";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>BizTada - Giải pháp AI cho Doanh nghiệp</title>
                <meta name="description" content="BizTada" />
            </Head>

            <main className="min-h-screen relative bg-[#0B1121]">
                <Navbar />
                <HeroSection />
                <div id="ai-form-section" className="scroll-mt-24">
                    <AIForm />
                </div>
            </main>
            <Footer />

        </>
    );
}