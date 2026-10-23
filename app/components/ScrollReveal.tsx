"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

import styles from "./ScrollReveal.module.css";

type ScrollRevealProps = {
    as: "div" | "span" | "p" | "figure";
    className?: string;
    variant?: "fade" | "up" | "center" | "left" | "right" | "wipe" | "wipeReverse" | "scaleDown" | "grow";
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

        if (typeof IntersectionObserver === "undefined") {
            element.classList.add(styles.isVisible);
            return;
        }

        let hasStartedReveal = false;

        async function reveal(target: Element) {
            if (variant === "wipe" || variant === "wipeReverse") {
                const image = target.querySelector("img");

                if (image) {
                    image.loading = "eager";

                    if (typeof image.decode === "function") {
                        try {
                            await image.decode();
                        } catch {

                        }
                    } else if (!image.complete) {
                        await new Promise<void>((resolve) => {
                            const onReady = () => {
                                image.removeEventListener("load", onReady);
                                image.removeEventListener("error", onReady);
                                resolve();
                            };

                            image.addEventListener("load", onReady, {
                                once: true,
                            });

                            image.addEventListener("error", onReady, {
                                once: true,
                            });

                            if (image.complete) {
                                onReady();
                            }
                        });
                    }
                }
            }

            if (!target.isConnected) return;

            setIsVisible(true);
            observer.unobserve(target);
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStartedReveal) {
                    hasStartedReveal = true;
                    void reveal(entry.target);
                }
            },
            {
                threshold: 0,
                rootMargin: "0px 0px -8% 0px",
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [variant]);

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