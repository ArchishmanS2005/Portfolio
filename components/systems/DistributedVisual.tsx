import React from 'react';
import { Server, Network } from 'lucide-react';
import StatusMetric from './StatusMetric';

const DistributedVisual: React.FC = () => {
    return (
        <div className="flex flex-col h-full gap-6 items-center justify-center relative">
            {/* 3D Node Simulation */}
            <div className="relative w-full h-80 md:h-96 flex items-center justify-center">
                {/* Center Hub */}
                <div className="absolute z-20 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,255,255,0.1)] relative z-10">
                        <Server size={24} />
                    </div>
                    <span className="mt-2 font-mono text-[9px] text-white/50 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm border border-white/5">IPFS_GATEWAY</span>
                </div>

                {/* Orbit Track 1 (Inner) */}
                <div className="absolute w-32 h-32 rounded-full border border-dashed border-white/10" style={{ animation: 'spin 8s linear infinite' }}>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#1e1e1e] border border-blue-400/30 rounded-full flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]" style={{ animation: 'spin 8s linear infinite reverse' }}>
                        <Network size={14} />
                    </div>
                </div>

                {/* Orbit Track 2 (Middle) - Reverse Orbit */}
                <div className="absolute w-52 h-52 rounded-full border border-dashed border-white/5" style={{ animation: 'spin 15s linear infinite reverse' }}>
                    <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 bg-[#1e1e1e] border border-emerald-400/30 rounded-full flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                        {/* Child rotates normally to counteract parent's reverse rotation */}
                        <div style={{ animation: 'spin 15s linear infinite' }}>
                            <Network size={14} />
                        </div>
                    </div>
                </div>

                {/* Orbit Track 3 (Outer) */}
                <div className="absolute w-72 h-72 rounded-full border border-dashed border-white/5 opacity-60" style={{ animation: 'spin 25s linear infinite' }}>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#1e1e1e] border border-purple-400/30 rounded-full flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]" style={{ animation: 'spin 25s linear infinite reverse' }}>
                        <Network size={14} />
                    </div>
                </div>
            </div>

            <div className="w-full grid grid-cols-3 gap-4 border-t border-white/10 pt-6 z-10">
                <StatusMetric label="Hash" value="QmXy...9zP" />
                <StatusMetric label="Peers" value="12 Active" color="text-emerald-400" />
                <StatusMetric label="Uptime" value="99.99%" />
            </div>
        </div>
    )
}

export default DistributedVisual;
