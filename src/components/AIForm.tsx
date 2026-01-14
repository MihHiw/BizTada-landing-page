"use client";
import { FormValues } from "@/Data/data";
import Form from "./Form";
export default function AIForm() {

    const handleSaveData = (data: FormValues) => {
        console.log("Dữ liệu khách hàng:", data);
        alert("Đã nhận dữ liệu: " + data.businessName);
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center p-4 bg-[#0B1121] overflow-hidden">

            {/* --- BACKGROUND EFFECTS --- */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full mix-blend-screen"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 blur-[100px] rounded-full mix-blend-screen"></div>
            </div>

            <div className="relative z-10 w-full flex justify-center -mt-1 md:-mt-28">
                <Form
                    onSubmitSuccess={handleSaveData}
                    className="shadow-2xl shadow-blue-900/20"
                />
            </div>

        </div>
    );
}