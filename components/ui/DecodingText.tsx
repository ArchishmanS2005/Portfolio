import React, { useEffect, useState } from 'react';

interface DecodingTextProps {
    text: string;
    className?: string;
    trigger?: boolean;
    delay?: number;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

const DecodingText: React.FC<DecodingTextProps> = ({ text, className = "", trigger = true, delay = 0 }) => {
    const [display, setDisplay] = useState("");
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        if (!trigger) return;

        const timeout = setTimeout(() => {
            setIsStarted(true);
        }, delay);

        return () => clearTimeout(timeout);
    }, [trigger, delay]);

    useEffect(() => {
        if (!isStarted) return;

        let iteration = 0;
        const interval = setInterval(() => {
            setDisplay(
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3; // Slower decoding for subtlety
        }, 50); // Slower updates

        return () => clearInterval(interval);
    }, [text, isStarted]);

    return <span className={className}>{display}</span>;
};

export default DecodingText;
