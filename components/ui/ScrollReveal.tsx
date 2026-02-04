import React, { useRef } from 'react';
import { motion, useInView, UseInViewOptions } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    duration?: number;
    viewport?: UseInViewOptions;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    width = "100%",
    className = "",
    delay = 0,
    duration = 0.5,
    viewport = { once: true, margin: "-10%" }
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, viewport);

    return (
        <div ref={ref} style={{ width }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
