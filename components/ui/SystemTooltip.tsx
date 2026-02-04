"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SystemTooltipProps {
    children: React.ReactNode;
    content: string;
    className?: string;
}

const SystemTooltip: React.FC<SystemTooltipProps> = ({ children, content, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        // Get mouse position relative to the viewport or trigger?
        // Using simple viewport coordinates for fixed positioning is often smoother,
        // but here we are in a scoped relative container.
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    return (
        <span
            className={cn("relative inline-block cursor-help", className)}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onMouseMove={handleMouseMove}
        >
            <span className="text-text font-medium border-b border-secondary/40 transition-colors hover:border-emerald-500/60">
                {children}
            </span>

            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: mousePos.x,
                            y: mousePos.y - 20 // Offset above cursor
                        }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 200,
                            mass: 0.5,
                            opacity: { duration: 0.2 }
                        }}
                        className="fixed top-0 left-0 z-[100] w-72 md:w-80 pointer-events-none"
                        style={{
                            transform: 'translate(-50%, -100%)', // Always center and sit above
                            left: 0,
                            top: 0
                        }}
                    >
                        {/* Hover Box Container - Light Theme, High Transparency, Stronger Backdrop Blur */}
                        <div className="relative bg-[#f8f6f3]/80 border border-[#c3c3c3]/50 rounded-xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl overflow-hidden">

                            {/* Internal Grid - Matches Website Structure (Darker lines for light theme) */}
                            <div
                                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                                style={{
                                    backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                                    backgroundSize: "15px 15px"
                                }}
                            />

                            {/* Scanning Border Line - Emerald Glow */}
                            <motion.div
                                className="absolute top-0 left-0 h-[1.5px] w-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Header - Using Sora (Display Font) */}
                            <div className="flex justify-between items-center mb-4 border-b border-black/5 pb-2 relative z-10">
                                <span className="font-display text-[9px] text-emerald-600 font-bold tracking-[0.2em] uppercase">
                                    Data :: Logic_Node
                                </span>
                                <div className="flex gap-1">
                                    <div className="w-1 h-1 rounded-full bg-emerald-500/20"></div>
                                    <div className="w-1 h-1 rounded-full bg-emerald-500/60 animate-pulse"></div>
                                </div>
                            </div>

                            {/* Main Content - Using JetBrains Mono for Tech Accuracy */}
                            <p className="font-mono text-[11px] leading-[1.6] text-text relative z-10 antialiased font-medium">
                                {content}
                            </p>

                            {/* Signature Footer - Minimalist Line */}
                            <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between relative z-10">
                                <span className="font-mono text-[9px] text-secondary/40 uppercase tracking-widest">
                                    Verified_Seed
                                </span>
                                <span className="font-mono text-[9px] text-emerald-600/60 italic">
                                    Archishman_S
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    );
};

export default SystemTooltip;
