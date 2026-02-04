import React, { useState, useEffect } from 'react';

const BinaryTimeDisplay: React.FC = () => {
    const [display, setDisplay] = useState<string>('01001010110');
    const [isHovered, setIsHovered] = useState(false);

    // Helpers
    const generateBinary = (length: number) => {
        return Array.from({ length }, () => Math.round(Math.random())).join('');
    };

    const getRealData = () => {
        const now = new Date();
        const time = now.toLocaleTimeString([], { hour12: false });
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        // Extract city from "Asia/Kolkata" -> "Kolkata"
        const region = timeZone.split('/')[1]?.replace(/_/g, ' ') || timeZone;
        return `${time} :: ${region.toUpperCase()}`;
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (!isHovered) {
            // Binary Shuffle Mode
            interval = setInterval(() => {
                setDisplay(generateBinary(12)); // Length matches typical time string length roughly
            }, 80);
        } else {
            // Real Time Mode
            // Immediate update
            setDisplay(getRealData());
            // Tick every second
            interval = setInterval(() => {
                setDisplay(getRealData());
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <div
            className="font-mono text-xs md:text-sm font-medium text-text bg-black/5 px-3 py-1.5 rounded cursor-help hover:bg-black hover:text-white transition-all duration-300 min-w-[140px] text-center select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? (
                <span className="tracking-wide">{display}</span>
            ) : (
                <span className="tracking-widest opacity-70">[{display}]</span>
            )}
        </div>
    );
};

export default BinaryTimeDisplay;
