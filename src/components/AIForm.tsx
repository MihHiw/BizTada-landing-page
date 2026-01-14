"use client";
import { FormValues } from "@/Data/data";
import Form from "./Form";

export default function AIForm() {

    const handleSaveData = (data: FormValues) => {
        console.log("Dữ liệu khách hàng:", data);
        alert("Đã nhận dữ liệu: " + data.businessName);
    };

    return (
        // QUAN TRỌNG: bg-transparent để nhìn xuyên thấu
        <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden bg-transparent">
            {/* Không còn layer background nào ở đây nữa */}

            <div className="relative z-10 w-full flex justify-center mt-10 md:mt-28">
                <Form
                    onSubmitSuccess={handleSaveData}
                    className="shadow-[0_0_50px_rgba(56,189,248,0.2)]"
                />
            </div>
        </div>
    );
}