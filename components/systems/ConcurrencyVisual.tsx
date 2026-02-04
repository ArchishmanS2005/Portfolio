import React, { useState, useEffect } from 'react';
import { Lock, Zap } from 'lucide-react';

const ConcurrencyVisual: React.FC = () => {
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newLog = `[${new Date().toLocaleTimeString().split(' ')[0]}] worker_${Math.floor(Math.random() * 4)} processed job #${Math.floor(Math.random() * 999)} (Latency: ${Math.floor(Math.random() * 15 + 5)}ms)`;
            setLogs(prev => [newLog, ...prev].slice(0, 6));
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col h-full gap-6">
            <div className="flex-1 flex flex-col md:flex-row gap-6">
                {/* Code Block */}
                <div className="w-full md:w-1/2 rounded-xl bg-[#111] border border-white/10 p-4 font-mono text-[10px] md:text-xs text-gray-400 overflow-hidden relative shadow-inner">
                    <div className="absolute top-2 right-2 text-white/20"><Lock size={12} /></div>
                    <pre className="whitespace-pre-wrap leading-relaxed">
                        <span className="text-purple-400">func</span> <span className="text-blue-400">worker</span>(...) {'{'}{'\n'}
                        {'  '}<span className="text-purple-400">for</span> j := <span className="text-purple-400">range</span> jobs {'{'}{'\n'}
                        {'    '}<span className="text-emerald-500/50">// Heavy compute</span>{'\n'}
                        {'    '}time.Sleep(10 * time.ms){'\n'}
                        {'    '}results {'<-'} j * 2{'\n'}
                        {'  '}{'}'}{'\n'}
                        {'}'}
                    </pre>
                </div>

                {/* Scheduler Visual */}
                <div className="w-full md:w-1/2 flex flex-col justify-center gap-3">
                    <div className="flex items-center justify-between text-[10px] text-white/40 font-mono uppercase tracking-wider mb-2">
                        <span>Goroutine Scheduler</span>
                        <Zap size={12} className="text-yellow-400 animate-pulse" />
                    </div>
                    {[0, 1, 2, 3].map(i => (
                        <div key={i} className="flex items-center gap-3">
                            <span className="font-mono text-[10px] text-blue-300/60 w-8">T_{i}</span>
                            <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-blue-500 rounded-full animate-shimmer"
                                    style={{
                                        width: `${Math.random() * 50 + 20}%`,
                                        animationDuration: `${Math.random() * 1.5 + 1}s`
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Terminal Output */}
            <div className="h-36 rounded-xl bg-black/40 border border-white/10 font-mono text-[10px] p-4 text-emerald-400/90 overflow-hidden flex flex-col-reverse shadow-inner font-light">
                {logs.map((log, i) => (
                    <div key={i} className="border-l-2 border-emerald-500/20 pl-2 animate-fade-in-up">
                        <span className="opacity-50 mr-2">{'>'}</span>{log}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ConcurrencyVisual;
