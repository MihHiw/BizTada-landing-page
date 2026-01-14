import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface InputProps<T extends FieldValues> {
    label: string;
    id: Path<T>;
    register: UseFormRegister<T>;
    error?: FieldError;
    placeholder?: string;
    type?: string;
}

export const FormInput = <T extends FieldValues>({
    label,
    id,
    register,
    error,
    placeholder,
    type = "text"
}: InputProps<T>) => (
    <div className="w-full">
        <label className="block text-sm font-medium text-slate-300 mb-1.5">{label}</label>
        <input
            type={type}
            {...register(id)}
            placeholder={placeholder}
            className={`w-full bg-slate-800 border rounded-lg p-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ${error ? 'border-red-500' : 'border-slate-700'}`}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
);