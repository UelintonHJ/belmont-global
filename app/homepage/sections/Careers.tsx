import Image from "next/image";

import styles from "../styles/Careers.module.css";
import { ScrollReveal } from "../../components/ScrollReveal";

export function Careers() {
    return (
        <section
            id="carreira"
            className={styles.section}
            aria-labelledby="careers-title"
        >
            <div className={styles.content}>
                <ScrollReveal
                    as="div"
                    className={styles.eyebrow}
                >
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
                            04
                        </span>
                    </div>

                    <span className={styles.eyebrowLabel}>
                        CARREIRAS
                    </span>
                </ScrollReveal>

                <div className={styles.mainGrid}>
                    <div className={styles.copy}>
                        <ScrollReveal as="div">
                            <h2
                                id="careers-title"
                                className={styles.title}
                            >
                                Trabalhe na Belmont Global
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal
                            as="p"
                            className={styles.description}
                        >
                            Estamos sempre em busca de talentos
                            excepcionais para integrar nossa equipe
                            global. Procuramos profissionais
                            intelectualmente curiosos, apaixonados
                            pelo que fazem e alinhados com nossa
                            missão e valores.
                        </ScrollReveal>

                        <ScrollReveal 
                            as="div"
                            variant="center"
                            className={styles.details}
                        >
                            <a
                                className={styles.detailsLink}
                                href="#carreira"
                            >
                                <span>Mais Detalhes</span>

                                <svg
                                    className={styles.detailsArrow}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="22"
                                    viewBox="0 0 20 22"
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
                            </a>
                        </ScrollReveal>
                    </div>

                    <div
                        className={styles.imageComposition}
                        aria-label="Imagens relacionadas ao ambiente de trabalho"
                    >
                        <ScrollReveal
                            as="div"
                            variant="wipe"
                            className={styles.imageFramePrimary}
                        >
                            <Image
                                src="/images/careers-img.webp"
                                alt="Ambiente profissional"
                                width={922}
                                height={1152}
                                sizes="(max-width: 700px) 78vw, (max-width: 1100px) 27vw, 390px"
                                className={styles.image}
                            />
                        </ScrollReveal>

                        <ScrollReveal
                            as="div"
                            variant="wipeReverse"
                            className={styles.imageFrameSecondary}
                        >
                            <Image
                                src="/images/working-img.webp"
                                alt="Profissionais em seu ambiente de trabalho"
                                width={923}
                                height={1153}
                                sizes="(max-width: 700px) 78vw, (max-width: 1100px) 27vw, 390px"
                                className={styles.image}
                            />
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}