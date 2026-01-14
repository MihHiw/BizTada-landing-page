import {
    Building2,
    Settings,
    Target,
    TrendingUp,
    Users
} from 'lucide-react';
import { z } from 'zod';

export const SCALE_OPTIONS = [
    "Nhỏ (1 cơ sở)",
    "Vừa (2-5 cơ sở)",
    "Chuỗi (>5 cơ sở)"
] as const;

export const MONTHLY_CUSTOMERS_OPTIONS = [
    "Dưới 100 khách",
    "100 - 300 khách",
    "300 - 500 khách",
    "500 - 1.000 khách",
    "Trên 1.000 khách"
] as const;

export const PAIN_POINT_OPTIONS = [
    "Tốn tiền Ads",
    "Lead rác/Booking ảo",
    "Không biết chăm sóc lại",
    "Thiếu quy trình sales",
    "Khác"
] as const;

export const ACQUISITION_SOURCES = [
    "Facebook Ads",
    "Tiktok Ads",
    "Booking KOLs",
    "Sales trực tiếp",
    "Khách giới thiệu",
    "Organic Social"
];

export const GOAL_OPTIONS = [
    "Tăng số lượng Booking",
    "Tăng chất lượng (Spend cao)",
    "Giữ chân khách cũ (Retention)",
    "Tăng nhận diện thương hiệu",
    "Mở rộng tệp khách hàng mới"
] as const;

export const TIMELINE_OPTIONS = [
    "1 Quý (3 tháng)",
    "2 Quý (6 tháng)",
    "3 Quý (9 tháng)",
    "1 Năm",
    "Dài hạn"
] as const;

export const ACTION_OPTIONS = [
    "Đăng ký App",
    "Mua vé/Booking",
    "Để lại SĐT tư vấn"
] as const;

export const ROLE_OPTIONS = [
    "Chủ doanh nghiệp (Trực tiếp)",
    "Quản lý (Manager)",
    "Sale Leader",
    "Nhân viên Sales",
    "Lễ tân/Admin",
    "Chưa có người phụ trách"
] as const;

// --- 2. ZOD SCHEMA (Validation) ---
export const formSchema = z.object({
    // Step 1
    businessName: z.string().min(1, "Vui lòng nhập tên doanh nghiệp"),
    industryType: z.string().min(1, "Nhập mô hình doanh nghiệp"),
    scale: z.enum(SCALE_OPTIONS),
    location: z.string().min(1, "Khu vực hoạt động là bắt buộc"),
    decisionMaker: z.string().min(1, "Người quyết định là bắt buộc"),

    // Step 2
    acquisitionSource: z.array(z.string()).min(1, "Chọn ít nhất 1 nguồn khách"),
    monthlyCustomers: z.enum(MONTHLY_CUSTOMERS_OPTIONS),
    biggestPainPoint: z.enum(PAIN_POINT_OPTIONS),

    // Step 3 (CẬP NHẬT: Cho phép chọn nhiều mục tiêu)
    primaryGoal: z.array(z.string()).min(1, "Chọn ít nhất 1 mục tiêu chiến dịch"),
    kpiMetric: z.enum(["user", "conversion"]),
    kpiTarget: z.string().min(1, "Vui lòng nhập số liệu cụ thể"),
    timeline: z.enum(TIMELINE_OPTIONS),

    // Step 4 (CẬP NHẬT: Thêm mainProblem)
    targetAge: z.string().min(1, "Vui lòng nhập độ tuổi khách hàng"),
    mainProblem: z.string().min(10, "Vui lòng mô tả chi tiết hơn về vấn đề của khách (ít nhất 10 ký tự)"),
    customerBehavior: z.string().optional(),
    desiredAction: z.enum(ACTION_OPTIONS),

    // Step 5
    hasSalesTeam: z.enum(["yes", "no"]),
    hasDataCare: z.enum(["yes", "no"]),
    hasCRM: z.enum(["yes", "no"]),
    picRole: z.enum(ROLE_OPTIONS),
});

export type FormValues = z.infer<typeof formSchema>;

// --- 3. STEPS CONFIG ---
export const STEPS = [
    { id: 1, title: "Hồ sơ Doanh nghiệp", icon: Building2 },
    { id: 2, title: "Hiện trạng & Vấn đề", icon: TrendingUp },
    { id: 3, title: "Mục tiêu Chiến dịch", icon: Target },
    { id: 4, title: "Chân dung", icon: Users },
    { id: 5, title: "Vận hành", icon: Settings },
];