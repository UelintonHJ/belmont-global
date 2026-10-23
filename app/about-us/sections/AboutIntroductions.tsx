import Image from "next/image";

import { ScrollReveal } from "@/app/components/ScrollReveal";

import styles from "../styles/AboutIntroduction.module.css";

export default function AboutIntroduction() {
    return (
        <section
            className={styles.section}
            aria-labelledby="about-us-title"
        >
            <div className={styles.content}>
                <div className={styles.introduction}>
                    <ScrollReveal as="div" variant="up">
                        <div className={styles.eyebrow}>
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
                                    01
                                </span>
                            </div>

                            <span className={styles.eyebrowLabel}>
                                INTRODUÇÃO
                            </span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal as="div" variant="up">
                        <h1
                            id="about-us-title"
                            className={styles.title}
                        >
                            Quem Somos
                        </h1>
                    </ScrollReveal>


                    <div className={styles.description}>
                        <ScrollReveal as="p" variant="up">
                            Fundada em 2002, somos uma plataforma global e
                            líder em gestão de investimentos alternativos,
                            especializada em estratégias macro globais e
                            ativos digitais. Gestamos recursos para
                            investidores institucionais no mundo todo,
                            incluindo fundos soberanos, fundos de pensão
                            corporativos e públicos, fundações e endowments.
                        </ScrollReveal>

                        <ScrollReveal as="p" variant="up">
                            Contamos com mais de 1.050 colaboradores, mais
                            de 145 Gestores de Carteira* e 9 Hubs com
                            escritórios em São Paulo, Nova York, Londres,
                            Genebra, Jersey, Hong Kong, Abu Dhabi, Cingapura
                            e Austin.
                        </ScrollReveal>

                        <ScrollReveal as="p" variant="up">
                            A gestora é liderada pelo CEO, Eduardo Prado.
                        </ScrollReveal>
                    </div>
                </div>

                <ScrollReveal
                    as="figure"
                    variant="wipeReverse"
                    className={styles.imageContainer}
                >
                    <Image
                        src="/images/aboutUs-img.webp"
                        alt="Imagem institucional da Belmont Global"
                        width={843}
                        height={1264}
                        priority
                        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 45vw, 540px"
                        className={styles.image}
                    />
                </ScrollReveal>
            </div>
        </section>
    );
}