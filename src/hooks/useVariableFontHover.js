import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

// Configuration for font weights to ensure consistency
export const FONT_WEIGHTS = {
    subtitle: {
        min: 100,
        max: 600,
        default: 100,
    },
    title: {
        min: 400,
        max: 800,
        default: 400,
    }
};

/**
 * Custom hook to handle variable font weight animations on hover.
 * Optimized to prevent layout thrashing by caching element positions.
 * 
 * @param {React.RefObject} containerRef - Ref to the container element
 * @param {keyof typeof FONT_WEIGHTS} type - Type of text (title or subtitle)
 */
const useVariableFontHover = (containerRef, type) => {
    const { contextSafe } = useGSAP({ scope: containerRef });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const letters = container.querySelectorAll(".hover-char");
        const { min, max, default: defaultWeight } = FONT_WEIGHTS[type];

        // Cache for letter positions to avoid reflows during mousemove
        let letterMetrics = [];

        const updateMetrics = () => {
            letterMetrics = Array.from(letters).map(letter => {
                const { left, width } = letter.getBoundingClientRect();
                return {
                    element: letter,
                    center: left + width / 2
                };
            });
        };

        // Initial calculation
        updateMetrics();

        // Recalculate on resize to maintain accuracy
        window.addEventListener('resize', updateMetrics);

        const handleMouseMove = contextSafe((e) => {
            const mouseX = e.clientX;

            letterMetrics.forEach(({ element, center }) => {
                const distance = Math.abs(mouseX - center);

                // Calculate intensity (Gaussian distribution)
                // Sigma squared = 10000 (approx 100px standard deviation)
                const intensity = Math.exp(-(distance * distance) / 10000);
                const targetWeight = min + (max - min) * intensity;

                // Use quickSetter or standard to
                gsap.to(element, {
                    fontWeight: targetWeight,
                    color: intensity > 0.5 ? 'white' : '#e5e7eb',
                    duration: 0.25,
                    ease: "power2.out",
                    overwrite: 'auto'
                });
            });
        });

        const handleMouseLeave = contextSafe(() => {
            gsap.to(letters, {
                fontWeight: defaultWeight,
                color: '#e5e7eb',
                duration: 0.5,
                ease: "power2.out",
                overwrite: true
            });
        });

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener('resize', updateMetrics);
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [containerRef, type, contextSafe]);
};

export default useVariableFontHover;
