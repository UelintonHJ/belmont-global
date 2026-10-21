"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "../styles/Hero.module.css";

export function Hero() {
    const [isImageReady, setIsImageReady] = useState(false);

    async function handleImageLoad(
        event: React.SyntheticEvent<HTMLImageElement>
    ) {
        const image = event.currentTarget;

        try {
            if (typeof image.decode === "function") {
                await image.decode();
            }
        } catch {

        }

        setIsImageReady(true);
    }

    return (
        <section className={styles.hero} aria-labelledby="hero-title">
            <div className={styles.media} aria-hidden="true">
                <div
                    className={[
                        styles.imageFrame,
                        isImageReady ? styles.imageReady : "",
                    ]
                        .filter(Boolean)
                        .join(" ")}
                >
                    <div className={styles.imageCanvas}>
                        <Image
                            src="/images/hero-img.webp"
                            alt=""
                            width={1195}
                            height={896}
                            sizes="(max-width: 532px) calc(100vw - 40px), 500.7px"
                            className={styles.image}
                            loading="eager"
                            fetchPriority="high"
                            onLoad={handleImageLoad}
                            unoptimized
                        />
                    </div>
                </div>
            </div>

            <div className={styles.overlay} aria-hidden="true" />

            <h1 id="hero-title" className={styles.title}>
                <span className={styles.titleLine}>
                    <span className={styles.titleText}>Excelência em</span>
                    <span className={styles.titleText}>Macro &amp; Derivativos</span>
                </span>
            </h1>

            <div
                className={styles.scrollCue}
                aria-hidden="true"
            >
                <svg
                    className={styles.arrow}
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    focusable="false"
                >
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
}