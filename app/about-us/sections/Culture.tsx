import Image from "next/image";

import styles from "../styles/Culture.module.css";

export default function Culture() {
    return (
        <section
            id="culture"
            className={styles.cultureSection}
            aria-labelledby="culture-title"
        >
            <Image 
                className={styles.cultureImage}
                src="/images/collaborate-img.webp"
                alt=""
                fill
                sizes="100vw"
            />

            <div
                className={styles.cultureOverlay}
                aria-hidden="true"
            />

            <div className={styles.cultureContent}>
                <h2
                    id="culture-title"
                    className={styles.cultureTitle}
                >
                    Cultura
                </h2>

                <details className={styles.cultureDetails}>
                    <summary className={styles.cultureDetailsSummary}>
                        <span>Mais Detalhes</span>

                        <svg
                            className={styles.cultureArrow}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path 
                                d="M3.5 10h13M11 4.5 16.5 10 11 15.5"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </summary>
                </details>
            </div>
        </section>
    );
}