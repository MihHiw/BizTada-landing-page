"use client";
import {
    AlertCircle,
    BarChart3,
    ChevronDown,
    ChevronUp,
    Database,
    Layers,
    Lightbulb,
    Loader2,
    MessageSquare,
    Target,
    Zap
} from 'lucide-react';
import React, { useRef, useState } from 'react';
import ContactForm from './ContactForm';

interface ResultMeta {
    message?: string;
    error?: string;
}

interface ResultDisplayProps {
    originalImage?: string | null;
    resultImage?: string | null;
    resultMeta?: ResultMeta;
    isLoading?: boolean;
    error?: string | null;
    onDownload?: (filename: string) => void | Promise<void | unknown>;
    serviceName?: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({
    resultMeta,
    isLoading,
    error,
    serviceName = "Paradigm Entertainment"
}) => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);

    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
        if (!isFormVisible) {
            setTimeout(() => {
                formRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    if (isLoading) {
        return (
            <div className="w-full min-h-[400px] bg-slate-950 border border-blue-500/20 rounded-3xl flex flex-col items-center justify-center text-center p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/5 animate-pulse" />
                <Loader2 className="h-12 w-12 text-blue-500 animate-spin mb-4 z-10" />
                <p className="text-xl font-bold text-white z-10 italic">Đang thiết lập hệ thống AI cho {serviceName}...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full min-h-[400px] bg-red-950/10 border border-red-900/30 rounded-3xl flex flex-col items-center justify-center text-center p-8">
                <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
                <p className="text-lg font-bold text-red-200">Có lỗi xảy ra</p>
                <p className="text-red-400/80 text-sm mt-2 max-w-xs">{error}</p>
            </div>
        );
    }

    const strategySections = [
        {
            id: "1",
            title: "1. PHÂN TÍCH BMC (TÓM GỌN)",
            icon: <Layers className="w-5 h-5 text-blue-400" />,
            content: "Tập trung vào phân khúc Gen Z (18-28) tại HCM & HN. Điểm nghẽn lớn nhất là chi phí Marketing đang bị lãng phí vào Lead rác và thiếu hệ thống Retention tự động."
        },
        {
            id: "2",
            title: "2. VẤN ĐỀ CỐT LÕI (TOP 3)",
            icon: <Target className="w-5 h-5 text-red-400" />,
            content: "1. Lead rác/Booking ảo cao - 2. Dữ liệu khách hàng phân mảnh - 3. Khó kiểm soát hiệu quả nhân sự và hoa hồng trên quy mô chuỗi."
        },
        {
            id: "3",
            title: "3. PHỄU AI HÓA (THU HÚT)",
            icon: <Zap className="w-5 h-5 text-yellow-400" />,
            content: "Sử dụng AI Quiz Funnel 'Khám phá phong cách Chill' để lọc khách hàng Spend cao ngay từ đầu. Tự động đẩy data sạch về CRM."
        },
        {
            id: "4",
            title: "4. APP2 CRM (GIỮ TIỀN & SCALE)",
            icon: <Database className="w-5 h-5 text-green-400" />,
            content: "Quản lý lịch sử tiêu dùng, tự động phân hạng VIP và nhắc khách quay lại. Hệ thống tính hoa hồng tự động giúp chủ doanh nghiệp rảnh tay."
        },
        {
            id: "5",
            title: "5. KPI KỲ VỌNG",
            icon: <BarChart3 className="w-5 h-5 text-purple-400" />,
            content: "Cam kết 3000 User thật trong 3 quý. Tăng tỷ lệ khách quay lại 30% và giảm 100% tình trạng thất thoát dòng tiền."
        },
    ];

    return (
        <div className="space-y-8 animate-in fade-in zoom-in duration-500 max-w-4xl mx-auto pb-20 px-4">

            <div className="text-center space-y-2">
                <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">
                    Chiến lược thực thi <span className="text-blue-500">AI & CRM</span>
                </h2>
                <p className="text-slate-400 text-sm uppercase tracking-[0.2em]">Dành cho: {serviceName}</p>
            </div>

            {resultMeta?.message && (
                <div className="bg-blue-500/10 border-l-4 border-blue-500 p-6 rounded-r-2xl text-slate-200 shadow-xl backdrop-blur-md">
                    <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="w-5 h-5 text-blue-400" />
                        <span className="font-black text-blue-400 uppercase text-xs tracking-widest">Phân tích từ đối tác công nghệ:</span>
                    </div>
                    <p className=" italic text-lg text-blue-50/90 leading-snug tracking-tight">
                        {resultMeta.message}
                    </p>
                </div>
            )}

            <div className="grid grid-cols-1 gap-4">
                {strategySections.map((section) => (
                    <div
                        key={section.id}
                        className="group bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 p-6 rounded-3xl transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-slate-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                {section.icon}
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">{section.title}</h3>
                                <p className="text-slate-200 leading-relaxed font-medium text-base">
                                    {section.content}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative pt-10">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-slate-800/50"></div>
                </div>
                <div className="relative flex justify-center">
                    <button
                        onClick={toggleForm}
                        className={`
                            flex items-center gap-3 px-8 py-4 rounded-full border-2 transition-all duration-500
                            ${isFormVisible
                                ? "bg-slate-900 border-slate-700 text-slate-400"
                                : "bg-white border-white text-black shadow-[0_10px_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
                            }
                        `}
                    >
                        <MessageSquare className={`w-5 h-5 ${isFormVisible ? "text-slate-500" : "text-blue-600"}`} />
                        <span className="text-sm font-black uppercase tracking-[0.15em]">
                            {isFormVisible ? "Đóng Form Liên Hệ" : "Để lại thông tin liên hệ"}
                        </span>
                        {isFormVisible ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {isFormVisible && (
                <div
                    ref={formRef}
                    className="animate-in slide-in-from-bottom-8 fade-in duration-700"
                >
                    <div className="bg-gradient-to-b from-slate-900 to-black border border-slate-800 rounded-[2.5rem] p-1 shadow-2xl">
                        <div className="bg-slate-950 rounded-[2.4rem] p-8 md:p-12">
                            <ContactForm businessName={serviceName} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResultDisplay;