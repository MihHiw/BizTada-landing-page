"use client";
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Target,
  Users
} from 'lucide-react';
import { useState } from 'react';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';

// Import các components UI
import { FormInput } from './form-ui/FormInput';
import { FormSelect } from './form-ui/FormSelect';
import { YesNoQuestion } from './form-ui/YesNoQuestion';
import ResultDisplay from './ResultDisplay';

// Import Data & Schema
import {
  ACQUISITION_SOURCES,
  ACTION_OPTIONS,
  FormValues,
  GOAL_OPTIONS,
  MONTHLY_CUSTOMERS_OPTIONS,
  PAIN_POINT_OPTIONS,
  ROLE_OPTIONS,
  SCALE_OPTIONS,
  STEPS,
  TIMELINE_OPTIONS,
  formSchema
} from '@/Data/data';

const FIELD_LABELS: Record<keyof FormValues, string> = {
  businessName: "Tên doanh nghiệp",
  industryType: "Mô hình",
  scale: "Quy mô",
  location: "Khu vực",
  decisionMaker: "Người quyết định",
  monthlyCustomers: "Khách trung bình/tháng",
  biggestPainPoint: "Vấn đề lớn nhất",
  acquisitionSource: "Nguồn khách hiện tại",
  primaryGoal: "Mục tiêu chính",
  kpiMetric: "Chỉ số KPI",
  kpiTarget: "KPI Cam kết",
  timeline: "Thời gian kỳ vọng",
  targetAge: "Độ tuổi khách hàng",
  mainProblem: "Vấn đề cốt lõi của khách",
  customerBehavior: "Hành vi tiêu biểu",
  desiredAction: "Hành động mong muốn",
  hasSalesTeam: "Đội Sales",
  hasDataCare: "Nhân sự Data Care",
  hasCRM: "Hệ thống CRM",
  picRole: "Người phụ trách"
};

const getFormattedValue = (key: keyof FormValues, data: FormValues): string => {
  const value = data[key];
  if (!value || (Array.isArray(value) && value.length === 0)) return "---";
  if (Array.isArray(value)) return value.join(", ");
  if (key === 'hasSalesTeam' || key === 'hasDataCare' || key === 'hasCRM') return value === 'yes' ? 'Có' : 'Không';
  if (key === 'kpiTarget') return `${value} (${data.kpiMetric === 'user' ? 'User' : 'Chuyển đổi'})`;
  return String(value);
};

interface FormProps {
  onSubmitSuccess: (data: FormValues) => void;
  className?: string;
}

export default function OnboardingForm({ onSubmitSuccess, className = "" }: FormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    control,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      acquisitionSource: [],
      primaryGoal: [],
      kpiMetric: "user",
    },
  });

  const kpiMetricValue = useWatch({ control, name: 'kpiMetric' });
  const watchSales = useWatch({ control, name: 'hasSalesTeam' });
  const watchData = useWatch({ control, name: 'hasDataCare' });
  const watchCRM = useWatch({ control, name: 'hasCRM' });

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormValues)[] = [];
    switch (currentStep) {
      case 1: fieldsToValidate = ['businessName', 'industryType', 'scale', 'location', 'decisionMaker']; break;
      case 2: fieldsToValidate = ['monthlyCustomers', 'biggestPainPoint', 'acquisitionSource']; break;
      case 3: fieldsToValidate = ['primaryGoal', 'kpiTarget', 'timeline']; break;
      case 4: fieldsToValidate = ['targetAge', 'mainProblem', 'desiredAction']; break;
      case 5: fieldsToValidate = ['hasSalesTeam', 'hasDataCare', 'hasCRM', 'picRole']; break;
    }
    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // 1. Tạo chuỗi dữ liệu cho AI
    const StringforAI = Object.entries(FIELD_LABELS)
      .map(([key, label]) => `${label}: ${getFormattedValue(key as keyof FormValues, data)}`)
      .join(" | ");

    // 2. Log ra console
    console.log("Output for AI: ", StringforAI);

    // 3. Kích hoạt màn hình chờ và kết quả
    setIsAnalyzing(true);
    setSubmittedData(data);

    // Giả lập AI xử lý trong 2.5 giây
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResult(true);
      onSubmitSuccess(data);
    }, 2500);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setShowResult(false);
    setIsAnalyzing(false);
    setCurrentStep(1);
    reset();
  };

  // --- MÀN HÌNH CHỜ / KẾT QUẢ ---
  if (isAnalyzing || showResult) {
    return (
      <div className={`w-full max-w-5xl mx-auto space-y-8 animate-in fade-in zoom-in duration-500 ${className}`}>

        <ResultDisplay
          isLoading={isAnalyzing}
          // Truyền tên doanh nghiệp vào tiêu đề bảng
          serviceName={submittedData?.businessName || "Doanh nghiệp"}

          // Truyền thông tin tóm tắt vào khung message
          resultMeta={{
            message: `Hệ thống AI đã phân tích dữ liệu cho đơn vị tại ${submittedData?.location || 'địa phương'}. Dưới đây là lộ trình tối ưu chi phí Ads và vận hành CRM.`
          }}
        />

        {showResult && !isAnalyzing && (
          <div className="flex justify-center pb-12">
            <button
              onClick={handleReset}
              className="group flex items-center px-8 py-4 rounded-2xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 shadow-2xl active:scale-95"
            >
              <RotateCcw className="w-5 h-5 mr-3 group-hover:rotate-[-180deg] transition-transform duration-500" />
              <span className="font-bold">Thiết lập lại dữ liệu phân tích</span>
            </button>
          </div>
        )}
      </div>
    );
  }
  // --- INPUT FORM VIEW ---
  return (
    <div className={`w-full max-w-4xl mx-auto bg-[#111827] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] ${className}`}>

      {/* SIDEBAR DESKTOP */}
      <div className="hidden md:flex w-1/3 bg-slate-900/50 border-r border-slate-800 p-6 flex-col">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2 tracking-tight ">Thiết lập hồ sơ</h2>
          <p className="text-sm text-slate-400 leading-relaxed">Dữ liệu này giúp AI xây dựng chiến dịch chính xác nhất.</p>
        </div>
        <div className="flex-1 space-y-2">
          {STEPS.map((step) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;
            return (
              <div key={step.id} className={`flex items-center gap-3 p-3 rounded-lg transition-all ${isActive ? 'bg-blue-600/10 border border-blue-600/50' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-all ${isActive ? 'bg-blue-600 text-white border-blue-600' : isCompleted ? 'bg-green-500/20 text-green-500 border-green-500/50' : 'bg-slate-800 text-slate-500 border-slate-700'}`}>
                  {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : step.id}
                </div>
                <p className={`text-sm font-medium ${isActive ? 'text-white' : 'text-slate-400'}`}>{step.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* FORM CONTENT */}
      <div className="w-full md:w-2/3 flex flex-col bg-[#0B1121]">
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          <form id="onboarding-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg mx-auto">

            {currentStep === 1 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl font-semibold text-white">Thông tin doanh nghiệp</h3>
                <FormInput label="Tên Doanh Nghiệp" id="businessName" register={register} error={errors.businessName} />
                <FormInput label="Mô hình kinh doanh" id="industryType" register={register} error={errors.industryType} />
                <FormSelect label="Quy mô hiện tại" id="scale" register={register} options={Array.from(SCALE_OPTIONS)} />
                <FormInput label="Khu vực hoạt động" id="location" register={register} error={errors.location} />
                <FormInput label="Người quyết định" id="decisionMaker" register={register} error={errors.decisionMaker} />
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl font-semibold text-white">Hiện trạng & Vấn đề</h3>
                <FormSelect label="Khách trung bình/tháng" id="monthlyCustomers" register={register} options={Array.from(MONTHLY_CUSTOMERS_OPTIONS)} />
                <FormSelect label="Vấn đề đau đầu nhất" id="biggestPainPoint" register={register} options={Array.from(PAIN_POINT_OPTIONS)} />
                <div className="space-y-2">
                  <label className="block text-sm text-slate-300">Nguồn khách hiện tại (Chọn nhiều)</label>
                  <div className="grid grid-cols-2 gap-3 p-4 border border-slate-700 rounded-xl bg-slate-800/30">
                    {ACQUISITION_SOURCES.map((source) => (
                      <label key={source} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" value={source} {...register('acquisitionSource')} className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{source}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl font-semibold text-white">Mục tiêu chiến dịch</h3>
                <div className="space-y-2">
                  <label className="block text-sm text-slate-300">Mục tiêu ưu tiên (Chọn nhiều)</label>
                  <div className="grid grid-cols-1 gap-2 p-4 border border-slate-700 rounded-xl bg-slate-800/30">
                    {GOAL_OPTIONS.map((goal) => (
                      <label key={goal} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700/50 cursor-pointer transition-all">
                        <input type="checkbox" value={goal} {...register('primaryGoal')} className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-blue-600" />
                        <span className="text-sm text-slate-300">{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-700 space-y-4">
                  <label className="block text-sm text-slate-300 uppercase tracking-widest text-[10px] font-bold">Chỉ số KPI cam kết</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${kpiMetricValue === 'user' ? 'border-blue-500 bg-blue-600/10 text-white' : 'border-slate-700 text-slate-400'}`}>
                      <input type="radio" value="user" {...register('kpiMetric')} className="sr-only" />
                      <Users className="w-5 h-5 mb-1" />
                      <span className="text-xs font-bold uppercase tracking-widest text-[10px]">User</span>
                    </label>
                    <label className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${kpiMetricValue === 'conversion' ? 'border-green-500 bg-green-600/10 text-white' : 'border-slate-700 text-slate-400'}`}>
                      <input type="radio" value="conversion" {...register('kpiMetric')} className="sr-only" />
                      <Target className="w-5 h-5 mb-1" />
                      <span className="text-xs font-bold uppercase tracking-widest text-[10px]">Chuyển đổi</span>
                    </label>
                  </div>
                  <FormInput label="Số lượng mong muốn" id="kpiTarget" register={register} error={errors.kpiTarget} />
                </div>
                <FormSelect label="Thời gian kỳ vọng" id="timeline" register={register} options={Array.from(TIMELINE_OPTIONS)} />
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl font-semibold text-white">Chân dung & Vấn đề khách</h3>
                <FormInput label="Độ tuổi khách hàng" id="targetAge" register={register} error={errors.targetAge} placeholder='VD: 18-28 tuổi' />
                <div className="space-y-1">
                  <label className="block text-sm text-slate-300">Vấn đề cốt lõi của khách hàng là gì?</label>
                  <textarea
                    {...register('mainProblem')}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white min-h-[100px] focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="VD: Khách ngại giá dịch vụ cao, chưa biết tới không gian mới..."
                  ></textarea>
                </div>
                <FormSelect label="Hành động mong muốn" id="desiredAction" register={register} options={Array.from(ACTION_OPTIONS)} />
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl font-semibold text-white">Năng lực vận hành</h3>
                <YesNoQuestion label="1. Doanh nghiệp có đội Sales chưa?" id="hasSalesTeam" register={register} currentValue={watchSales} error={errors.hasSalesTeam} />
                <YesNoQuestion label="2. Có nhân sự chuyên chăm sóc Data?" id="hasDataCare" register={register} currentValue={watchData} error={errors.hasDataCare} />
                <YesNoQuestion label="3. Đã sử dụng hệ thống CRM chưa?" id="hasCRM" register={register} currentValue={watchCRM} error={errors.hasCRM} />
                <FormSelect label="4. Ai sẽ là người trực tiếp chốt đơn?" id="picRole" register={register} options={Array.from(ROLE_OPTIONS)} />
              </div>
            )}
          </form>
        </div>

        <div className="p-6 border-t border-slate-800 bg-slate-900/50 flex justify-between items-center">
          <button onClick={prevStep} disabled={currentStep === 1} className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${currentStep === 1 ? 'opacity-0' : 'text-slate-400 hover:text-white'}`}>
            <ChevronLeft className="w-4 h-4 mr-2" /> Quay lại
          </button>
          {currentStep < 5 ? (
            <button onClick={nextStep} type="button" className="flex items-center bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-lg font-medium shadow-lg transition-all hover:scale-105">
              Tiếp theo <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          ) : (
            <button form="onboarding-form" type="submit" disabled={isSubmitting} className="flex items-center bg-green-600 hover:bg-green-500 text-white px-8 py-2.5 rounded-lg font-bold shadow-lg transition-all hover:scale-105">
              {isSubmitting ? 'Đang xử lý...' : 'Hoàn tất & Mô phỏng'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}