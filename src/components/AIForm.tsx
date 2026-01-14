"use client";
import { FormValues } from "@/Data/data";
import Form from "./Form";

export default function AIForm() {

    const handleSaveData = (data: FormValues) => {
        console.log("Dữ liệu khách hàng:", data);
        alert("Đã nhận dữ liệu: " + data.businessName);
    };

    return (
        // Xóa background màu, chỉ để flex container trong suốt
        <div className="relative min-h-screen w-full flex items-center justify-center p-4 bg-transparent">

            {/* XÓA: div chứa Grid và Blobs cũ ở đây vì đã có ở Page.tsx rồi */}

            <div className="relative z-10 w-full flex justify-center -mt-1 md:-mt-1">
                <Form
                    onSubmitSuccess={handleSaveData}
                    // Giữ shadow để Form nổi bật trên nền động
                    className="shadow-[0_0_50px_rgba(56,189,248,0.2)]"
                />
            </div>
        </div>
    );
}