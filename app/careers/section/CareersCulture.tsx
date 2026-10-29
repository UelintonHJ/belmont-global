import { ScrollReveal } from "@/app/components/ScrollReveal";

import styles from "../styles/CareersCulture.module.css";

export function CareersCulture() {
    return (
        <section
            className={styles.section}
            aria-labelledby="careers-culture-title"
        >
            <div className={styles.content}>
                <ScrollReveal as="div" variant="left">
                    <h2
                        id="careers-culture-title"
                        className={styles.title}
                    >
                        Trabalhe na Belmont Global
                    </h2>
                </ScrollReveal>

                <div className={styles.copy}>
                    <ScrollReveal as="p" variant="up" className={styles.paragraph}>
                        No centro da nossa cultura única estão as
                        nossas pessoas, cuja inovação e dedicação
                        constituem a base da Belmont Global e
                        impulsionam o nosso sucesso coletivo.
                    </ScrollReveal>

                    <ScrollReveal as="div" variant="center">
                        <a
                            className={styles.link}
                            href="#"
                        >
                            <span>Saiba mais</span>

                            <svg
                                className={styles.arrow}
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="25"
                                fill="none"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <path
                                    d="M3.5 10h13M11 4.5 16.5 10 11 15.5"
                                    stroke="currentColor"
                                    strokeWidth="1.25"
                                />
                            </svg>
                        </a>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}