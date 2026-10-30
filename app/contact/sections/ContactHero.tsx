import GlobeCanvas from "@/app/about-us/sections/GlobeCanvas";

import styles from "../styles/ContactHero.module.css";

export function ContactHero() {
    return (
        <section
            className={styles.section}
            aria-labelledby="contact-hero-title"
        >
            <div className={styles.content}>
                <div className={styles.copy}>
                    <div className={styles.eyebrow}>
                        <div
                            className={styles.octagon}
                            aria-hidden="true"
                        >
                            <svg
                                className={styles.octagonSvg}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 90 90"
                                fill="none"
                                focusable="false"
                            >
                                <polygon
                                    points="26,1 64,1 89,26 89,64 64,89 26,89 1,64 1,26"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                />
                            </svg>

                            <span className={styles.octagonNumber}>
                                01
                            </span>
                        </div>

                        <span className={styles.eyebrowLabel}>
                            SEJA NOSSO PARCEIRO
                        </span>
                    </div>

                    <h1
                        id="contact-hero-title"
                        className={styles.title}
                    >
                        Vamos Trabalhar Juntos
                    </h1>
                </div>

                <div className={styles.visual}>
                    <GlobeCanvas 
                        mode="contact"
                        className={styles.globe}
                    />
                </div>
            </div>
        </section>
    )
}