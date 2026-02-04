"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { cn } from "../../lib/utils";
import {
    FaGithub,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaEnvelope,
    FaDiscord,
} from "react-icons/fa";

export interface SocialItem {
    letter: string;
    icon: React.ReactNode;
    label: string;
    href?: string;
    onClick?: () => void;
}

interface SocialFlipButtonProps {
    items?: SocialItem[];
    className?: string;
    itemClassName?: string;
    frontClassName?: string;
    backClassName?: string;
}

const defaultItems: SocialItem[] = [
    { letter: "C", icon: <FaGithub />, label: "Github", href: "https://github.com/ArchishmanS2005" },
    { letter: "O", icon: <FaTwitter />, label: "X (Twitter)", href: "https://x.com/1070Sarkar" },
    { letter: "N", icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/archishman-sarkar-a65110380/" },
    { letter: "T", icon: <FaInstagram />, label: "Instagram", href: "https://www.instagram.com/archishmansarkar" },
    { letter: "A", icon: <FaFacebook />, label: "Facebook", href: "https://www.facebook.com/archishman.2005" },
    { letter: "C", icon: <FaEnvelope />, label: "Email", href: "mailto:archishmansarkar94@gmail.com" },
    { letter: "T", icon: <FaDiscord />, label: "Discord", href: "https://discordapp.com/users/1352869756708851822" },
];

const SocialFlipNode = ({
    item,
    index,
    isHovered,
    setTooltipIndex,
    tooltipIndex,
    itemClassName,
    frontClassName,
    backClassName,
}: {
    item: SocialItem;
    index: number;
    isHovered: boolean;
    setTooltipIndex: (val: number | null) => void;
    tooltipIndex: number | null;
    itemClassName?: string;
    frontClassName?: string;
    backClassName?: string;
}) => {
    const Wrapper = item.href ? "a" : "div";
    const wrapperProps = item.href
        ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
        : { onClick: item.onClick };

    return (
        <Wrapper
            {...wrapperProps}
            className={cn("relative h-10 w-10 cursor-pointer", itemClassName)}
            style={{ perspective: "1000px" }}
            onMouseEnter={() => setTooltipIndex(index)}
            onMouseLeave={() => setTooltipIndex(null)}
        >
            <AnimatePresence>
                {isHovered && tooltipIndex === index && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8, x: "-50%" }}
                        animate={{ opacity: 1, y: -50, scale: 1, x: "-50%" }}
                        exit={{ opacity: 0, y: 10, scale: 0.8, x: "-50%" }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-1/2 z-50 whitespace-nowrap rounded bg-[#161819] px-3 py-1.5 text-xs font-mono font-medium text-white shadow-xl"
                        style={{ borderRadius: "4px" }}
                    >
                        {item.label}
                        {/* Arrow */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-[#161819]" />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                className="relative h-full w-full"
                initial={false}
                animate={{ rotateY: isHovered ? 180 : 0 }}
                transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 120,
                    damping: 15,
                    delay: index * 0.08,
                }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front - Letter */}
                <div
                    className={cn(
                        "absolute inset-0 flex items-center justify-center rounded border border-[#c3c3c3] bg-[#f8f6f3] text-lg font-mono font-medium text-[#161819] shadow-sm",
                        frontClassName
                    )}
                    style={{ backfaceVisibility: "hidden", borderRadius: "8px" }}
                >
                    {item.letter}
                </div>

                {/* Back - Icon */}
                <div
                    className={cn(
                        "absolute inset-0 flex items-center justify-center rounded border border-[#161819] bg-[#161819] text-lg text-white",
                        backClassName
                    )}
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        borderRadius: "8px"
                    }}
                >
                    {item.icon}
                </div>
            </motion.div>
        </Wrapper>
    );
};

export default function SocialFlipButton({
    items = defaultItems,
    className,
    itemClassName,
    frontClassName,
    backClassName,
}: SocialFlipButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);

    return (
        <div className={cn("flex items-center justify-center gap-4 p-4", className)}>
            <div className="relative">
                {/* Rotating Black Glow Gradient */}
                <div className="absolute -inset-0.5 rounded-[18px] overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                        className="absolute inset-[-100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(22,24,25,0.05)_25%,rgba(22,24,25,0.4)_50%,rgba(22,24,25,0.05)_75%,transparent_100%)]"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                <div
                    className="group relative flex items-center justify-center gap-1.5 rounded-xl border border-[#c3c3c3]/80 bg-[#f8f6f3]/90 backdrop-blur-md p-3 shadow-2xl transition-all duration-500 hover:border-[#161819]/30"
                    style={{ borderRadius: "16px" }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => {
                        setIsHovered(false);
                        setTooltipIndex(null);
                    }}
                >
                    {/* Border Lines Container - Clipped */}
                    <div className="absolute -inset-[1px] overflow-hidden rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderRadius: "16px" }}>
                        {/* Animated Top Border Line */}
                        <motion.div
                            className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#161819]/20 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />

                        {/* Animated Bottom Border Line */}
                        <motion.div
                            className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#161819]/20 to-transparent"
                            animate={{ x: ["100%", "-100%"] }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                    </div>

                    {items.map((item, index) => (
                        <SocialFlipNode
                            key={index}
                            item={item}
                            index={index}
                            isHovered={isHovered}
                            setTooltipIndex={setTooltipIndex}
                            tooltipIndex={tooltipIndex}
                            itemClassName={itemClassName}
                            frontClassName={frontClassName}
                            backClassName={backClassName}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
