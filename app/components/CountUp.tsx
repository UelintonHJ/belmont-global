"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./CountUp.module.css";

type CountUpProps = {
    value: number;
    duration?: number;
    minimumIntegerDigits?: number;
};

export function CountUp({
    value,
    duration = 2000,
    minimumIntegerDigits = 1,
}: CountUpProps) {
    const elementRef = useRef<HTMLSpanElement | null>(null);
    const [count, setCount] = useState(0);

    const numberFormat = new Intl.NumberFormat("en-US", {
        minimumIntegerDigits,
        maximumFractionDigits: 0,
    });

    const formattedCount = numberFormat.format(count);
    const formattedValue = numberFormat.format(value);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        const finishCount = () => setCount(value);

        if (
            window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
            !("IntersectionObserver" in window)
        ) {
            finishCount();
            return;
        }

        let frameId: number | undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                observer.unobserve(entry.target);

                const startTime = performance.now();

                const updateCount = (currentTime: number) => {
                    const elapsed = currentTime - startTime;
                    const progress =
                        duration <= 0
                            ? 1
                            : Math.min(elapsed / duration, 1);

                    setCount(Math.floor(progress * value));

                    if (progress < 1) {
                        frameId = requestAnimationFrame(updateCount);
                    } else {
                        setCount(value);
                    }
                };

                frameId = requestAnimationFrame(updateCount);
            },
            {
                threshold: 0,
                rootMargin: "0px 0px -8% 0px",
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();

            if (frameId !== undefined) {
                cancelAnimationFrame(frameId);
            }
        };
    }, [value, duration]);

    return (
        <span ref={elementRef} className={styles.countUp}>
            <span className={styles.value}>
                {formattedCount}
            </span>

            <span
                className={styles.placeholder}
                aria-hidden="true"
            >
                {formattedValue}
            </span>
        </span>
    );
}