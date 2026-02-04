import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseEnter = () => setHidden(false);
        const onMouseLeave = () => setHidden(true);

        const checkPointer = () => {
            const target = document.elementFromPoint(position.x, position.y);
            if (target) {
                const computed = window.getComputedStyle(target);
                setIsPointer(computed.cursor === 'pointer');
            }
        };

        // More performant hover check using event delegation
        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.tagName === 'INPUT' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer');

            setIsPointer(!!isInteractive);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mouseover', onMouseOver);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mouseover', onMouseOver);
        };
    }, []);

    if (typeof window === 'undefined') return null;

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
            * { cursor: none !important; }
        `}} />
            <div
                className="fixed pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                {/* Inner Dot */}
                <div className={`
                rounded-full bg-white transition-all duration-300 ease-out
                ${isPointer ? 'w-4 h-4' : 'w-2 h-2'}
            `}></div>

                {/* Outer Ring - Follows with slight delay (simulated by CSS transition) */}
                <div className={`
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                border border-white rounded-full transition-all duration-500 ease-out
                ${isPointer ? 'w-12 h-12 opacity-50' : 'w-8 h-8 opacity-30'}
                ${hidden ? 'opacity-0 scale-0' : ''}
            `}></div>
            </div>
        </>
    );
};

export default CustomCursor;
