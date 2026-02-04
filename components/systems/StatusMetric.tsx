import React from 'react';

interface StatusMetricProps {
    label: string;
    value: string;
    color?: string;
}

const StatusMetric: React.FC<StatusMetricProps> = ({ label, value, color = "text-white" }) => (
    <div className="text-center">
        <div className="font-mono text-[9px] text-white/30 uppercase mb-1">{label}</div>
        <div className={`font-display text-sm font-medium ${color}`}>{value}</div>
    </div>
);

export default StatusMetric;
