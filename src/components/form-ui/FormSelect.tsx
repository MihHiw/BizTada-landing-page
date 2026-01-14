import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface SelectProps<T extends FieldValues> {
    label: string;
    id: Path<T>;
    register: UseFormRegister<T>;
    options: string[];
}

export const FormSelect = <T extends FieldValues>({
    label,
    id,
    register,
    options
}: SelectProps<T>) => (
    <div className="w-full">
        <label className="block text-sm font-medium text-slate-300 mb-1.5">{label}</label>
        <div className="relative">
            <select
                {...register(id)}
                className="w-full appearance-none bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer"
            >
                {options.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
        </div>
    </div>
);