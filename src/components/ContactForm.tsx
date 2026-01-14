"use client";
import { Mail, Phone, Send, User } from 'lucide-react';
import React, { useState } from 'react';

// Khai báo Interface chuẩn để lưu trữ
interface CustomerLead {
    fullName: string;
    phoneNumber: string;
    email: string;
    businessName: string;
    createdAt: string; // Lưu dạng string ISO hoặc Locale để đồng nhất múi giờ
}

interface ContactFormProps {
    businessName?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ businessName }) => {
    // 1. Quản lý state cho form
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 2. Xử lý thời gian Việt Nam (GMT+7)
        // JavaScript mặc định dùng UTC, ta cộng thêm 7 giờ
        const now = new Date();
        const vnTime = new Date(now.getTime() + (7 * 60 * 60 * 1000))
            .toISOString()
            .replace('T', ' ')
            .substring(0, 19);

        // 3. Tạo object dữ liệu hoàn chỉnh
        const leadData: CustomerLead = {
            ...formData,
            businessName: businessName || 'N/A',
            createdAt: vnTime
        };

        // Console log để kiểm tra dữ liệu trước khi gửi lên Server/Database
        console.log("Dữ liệu khách hàng chuẩn bị lưu trữ (Giờ VN): ", leadData);

        // Hiển thị thông báo thành công cho khách hàng
        alert(`Cảm ơn! Thông tin của ${leadData.fullName} đã được ghi nhận vào hệ thống.`);

        // 4. Reset form về trạng thái trống
        setFormData({ fullName: '', phoneNumber: '', email: '' });
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Đăng ký nhận tư vấn chuyên sâu</h3>
                <p className="text-slate-400">
                    Để lại thông tin thực thi chiến lược cho <strong className="text-blue-400">{businessName || "doanh nghiệp"}</strong>
                </p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Họ và tên */}
                <div className="space-y-2">
                    <label className="text-sm text-slate-400 ml-1">Họ và tên</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                            required
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            type="text"
                            placeholder="Nguyễn Văn A"
                            className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-4 pl-12 pr-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Số điện thoại */}
                <div className="space-y-2">
                    <label className="text-sm text-slate-400 ml-1">Số điện thoại</label>
                    <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                            required
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            type="tel"
                            placeholder="0901 234 567"
                            className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-4 pl-12 pr-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="md:col-span-2 space-y-2">
                    <label className="text-sm text-slate-400 ml-1">Email liên hệ</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="contact@doanhnghiep.com"
                            className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-4 pl-12 pr-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="md:col-span-2 mt-4">
                    <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                    >
                        <Send className="w-5 h-5" />
                        Gửi thông tin tư vấn
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;