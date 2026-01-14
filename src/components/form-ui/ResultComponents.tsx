import React from 'react';

export const ResultSection = ({ title, icon: Icon, children }: { title: string, icon: React.ElementType, children: React.ReactNode }) => (
    <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-800/20">
        <div className="bg-slate-900/50 p-4 border-b border-slate-800 flex items-center gap-3">
            <Icon className="w-5 h-5 text-blue-500" />
            <h3 className="font-semibold text-white">{title}</h3>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {children}
        </div>
    </div>
);

export const ResultItem = ({ label, value, highlightColor }: { label: string, value?: string, highlightColor?: string }) => (
    <div className="flex flex-col">
        <span className="text-xs text-slate-500 mb-1 uppercase tracking-wider">{label}</span>
        <span className={`text-base font-medium ${highlightColor || 'text-white'}`}>
            {value || "---"}
        </span>
    </div>
);