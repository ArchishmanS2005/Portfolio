import React, { useState } from 'react';
import { Cpu, Network, Server } from 'lucide-react';
import TabButton from './systems/TabButton';
import ConcurrencyVisual from './systems/ConcurrencyVisual';
import DistributedVisual from './systems/DistributedVisual';
import SystemTooltip from './ui/SystemTooltip';

const SystemsThinkingSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'concurrency' | 'distributed'>('concurrency');

    return (
        <section className="w-full border-b border-border bg-[#f8f6f3] relative overflow-hidden py-16 md:py-24 px-6 md:px-12">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-7xl mx-auto">
                {/* Left Panel: Narrative */}
                <div className="w-full lg:w-1/3 flex flex-col z-10">
                    <div className="mb-8">
                        <span className="font-mono text-xs text-secondary uppercase tracking-widest border border-secondary/20 px-2 py-1 rounded-full">[SYSTEMS_DNA]</span>
                        <h2 className="font-display text-4xl md:text-5xl font-semibold mt-6 mb-6 leading-[1.05] tracking-tight text-text">
                            Engineering <br />
                            <span className="text-secondary opacity-60">Logic & Scale</span>
                        </h2>
                        <p className="font-sans text-lg text-secondary leading-relaxed mb-8 font-light">
                            I don't just write code; I design systems. My focus is on what happens <SystemTooltip content="Architecting zero-copy pipelines. Archishman ensures low-latency execution by minimizing garbage collection and optimizing memory layouts for CPU caches.">inside the memory</SystemTooltip>, how data flows across <SystemTooltip content="Scaling beyond single nodes. Archishman implements eventual consistency models and partition-tolerant services to handle millions of requests.">distributed nodes</SystemTooltip>, and ensuring uptime when things fail.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 mt-auto">
                        <TabButton
                            active={activeTab === 'concurrency'}
                            onClick={() => setActiveTab('concurrency')}
                            icon={<Cpu size={18} />}
                            title="Concurrency & Throughput"
                            subtitle="Go Routines / Parallelism"
                        />
                        <TabButton
                            active={activeTab === 'distributed'}
                            onClick={() => setActiveTab('distributed')}
                            icon={<Network size={18} />}
                            title="Distributed Systems"
                            subtitle="Merkle Trees / Fault Tolerance"
                        />
                    </div>
                </div>

                {/* Right Panel: Interactive Visual Window */}
                <div className="w-full lg:w-2/3 bg-[#1e1e1e] rounded-[1.5rem] shadow-2xl relative overflow-hidden text-gray-300 font-sans h-[600px] flex flex-col border border-black/5 transform transition-transform hover:scale-[1.01] duration-500">
                    {/* Window Controls */}
                    <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5 backdrop-blur-sm z-20">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                        </div>
                        <div className="font-mono text-[10px] text-white/30 uppercase tracking-widest flex items-center gap-2">
                            <Server size={10} />
                            sys_monitor :: {activeTab}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="relative flex-1 p-6 md:p-10 flex flex-col">
                        {activeTab === 'concurrency' ? <ConcurrencyVisual /> : <DistributedVisual />}
                    </div>

                    {/* Scanline Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[20%] w-full animate-scanline pointer-events-none opacity-10"></div>
                </div>
            </div>
        </section>
    );
};

export default SystemsThinkingSection;