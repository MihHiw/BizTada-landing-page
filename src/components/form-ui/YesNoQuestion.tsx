import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface YesNoProps<T extends FieldValues> {
    label: string;
    id: Path<T>;
    register: UseFormRegister<T>;
    currentValue?: string;
    error?: FieldError;
}

export const YesNoQuestion = <T extends FieldValues>({
    label,
    id,
    register,
    currentValue,
    error
}: YesNoProps<T>) => (
    <div className={`flex items-center justify-between p-4 rounded-xl border transition-all ${error ? 'border-red-500/30 bg-red-500/5' : 'border-slate-800 bg-slate-900/50'}`}>
        <div className="pr-4">
            <span className="text-sm font-medium text-slate-200">{label}</span>
            {error && <p className="text-red-400 text-xs mt-1 animate-pulse">{error.message}</p>}
        </div>
        <div className="flex gap-2 shrink-0">
            <label className={`px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-all border ${currentValue === 'yes' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'}`}>
                <input type="radio" value="yes" {...register(id)} className="sr-only" />
                Có
            </label>
            <label className={`px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-all border ${currentValue === 'no' ? 'bg-red-600/80 border-red-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'}`}>
                <input type="radio" value="no" {...register(id)} className="sr-only" />
                Không
            </label>
        </div>
    </div>
);