"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollAnimationProps {
    children: React.ReactNode;
    animation?: "fade-in" | "slide-up" | "slide-in-left" | "slide-in-right" | "zoom-in" | "scale-in";
    delay?: number;
    className?: string;
}

export function ScrollAnimation({
    children,
    animation = "fade-in",
    delay = 0,
    className = "",
}: ScrollAnimationProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? `animate-${animation}` : "opacity-0"
                }`}
        >
            {children}
        </div>
    );
}
