import React from 'react';

interface TabButtonProps {
    active: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, icon, title, subtitle }) => (
    <button
        onClick={onClick}
        className={`group flex items-center gap-4 p-4 text-left transition-all duration-300 relative overflow-hidden rounded-xl border ${active ? 'bg-[#1a1a1a] shadow-2xl border-transparent' : 'border-transparent hover:bg-black/5'}`}
    >
        <div className={`p-3 rounded-lg transition-colors duration-300 ${active ? 'bg-white text-black' : 'bg-gray-200 text-secondary'}`}>
            {icon}
        </div>
        <div>
            <h3 className={`font-display text-base font-semibold ${active ? 'text-white' : 'text-secondary group-hover:text-text'}`}>{title}</h3>
            <p className={`font-mono text-[10px] mt-0.5 uppercase tracking-wider ${active ? 'text-white/60' : 'text-secondary/70'}`}>{subtitle}</p>
        </div>
    </button>
);

export default TabButton;
