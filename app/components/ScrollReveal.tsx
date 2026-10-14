"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

import styles from "./ScrollReveal.module.css";

type ScrollRevealProps = {
    as: "div" | "span" | "p";
    className?: string;
    variant?: "up" | "center" | "left" | "right";
    children: React.ReactNode;
};

export function ScrollReveal({
    as,
    className,
    variant = "up",
    children,
}: ScrollRevealProps) {
    const elementRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        if (!("IntersectionObserver" in window)) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0,
                rootMargin: "0px 0px -8% 0px",
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const Tag = as as ElementType;

    return (
        <Tag
            ref={elementRef}
            className={[
                styles.reveal,
                styles[variant],
                isVisible ? styles.isVisible : "",
                className ?? "",
            ].filter(Boolean).join(" ")}
        >
            {children}
        </Tag>
    );
}