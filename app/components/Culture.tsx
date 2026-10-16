import Image from "next/image";

import styles from "./Culture.module.css";
import { ScrollReveal } from "./ScrollReveal";

export function Culture() {
    return  (
        <section
            id="culture"
            className={styles.section}
            aria-labelledby="culture-title"
        >
            <div className={styles.content}>
                <div className={styles.headerGrid}>
                    <div className={styles.heading}>
                        <ScrollReveal 
                            as="div"
                            className={styles.eyebrow}
                        >
                            <div className={styles.octagon}>
                                <svg
                                    className={styles.octagonSvg}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 90 90"
                                    fill="none"
                                    aria-hidden="true"
                                    focusable="false"
                                >
                                    <polygon 
                                        points="26,1 64,1 89,26 89,64 64,89 26,89 1,64 1,26"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    />
                                </svg>

                                <span className={styles.octagonNumber}>
                                    03
                                </span>
                            </div>

                            <span className={styles.eyebrowLabel}>
                                Cultura
                            </span>
                        </ScrollReveal>

                        <h2
                            id="culture-title"
                            className={styles.title}
                        >
                            <ScrollReveal as="span">
                                A Experiência Belmont Global
                            </ScrollReveal>
                        </h2>
                    </div>

                    <ScrollReveal 
                        as="div"
                        variant="wipe"
                        className={styles.cultureImageFrame}
                    >
                        <Image 
                            src="/images/culture-img.webp"
                            alt="Cultura da Belmont Global"
                            width={944}
                            height={1121}
                            sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 960px) 28vw, 284px"
                            className={styles.cultureImage}
                        />
                    </ScrollReveal>
                </div>

                <div className={styles.bodyGrid}>
                    <div className={styles.leftColumn}>
                        <ScrollReveal 
                            as="p"
                            className={styles.description}
                        >
                            No centro de nossa cultura única estão
                            nossas pessoas, cuja inovação e dedicação
                            são a base da Belmont Global e impulsionam
                            nosso sucesso coletivo.
                        </ScrollReveal>

                        <ScrollReveal 
                            as="div"
                            variant="wipe"
                            className={styles.experienceImageFrame}
                        >
                            <Image 
                                src="/images/experience-img.webp"
                                alt="Experiência profissional na Belmont Global"
                                width={1301}
                                height={816}
                                sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 960px) 100vw, (max-width: 1280px) 60vw, 769px"
                                className={styles.experienceImage}
                            />
                        </ScrollReveal>
                    </div>

                    <div className={styles.rightColumn}>
                        <ScrollReveal 
                            as="p"
                            className={styles.description}
                        >
                            Unimos pessoas altamente qualificadas com 
                            habilidades sinérgicas e autonomia de 
                            pensamento, oferecendo um ambiente focado
                            em colaboração, meritocracia, iniciativa
                            e integridade.
                        </ScrollReveal>

                        <ScrollReveal
                            as="p"
                            className={styles.description}
                        >
                            Investimos continuamente no desenvolvimento 
                            e na evolução profissional das nossas 
                            equipes, garantindo o ambiente ideal para 
                            que todos performem no seu mais alto nível.
                        </ScrollReveal>

                        <ScrollReveal 
                            as="div"
                            className={styles.detailsReveal}    
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
                            </a>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}