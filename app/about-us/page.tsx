import type { Metadata } from "next";
import Image from "next/image";

import styles from "./AboutUs.module.css";

export const metadata: Metadata = {
    title: "Quem Somos | Belmont Global",
    description: 
        "Conheça a Belmont Global, plataforma global de gestão de investimentos alternativos fundada em 2002.",
};

export default function AboutUsPage() {
    return (
        <main>
            <section
                className={styles.section}
                aria-labelledby="about-us-title"
            >
                <div className={styles.content}>
                    <div className={styles.introduction}>
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

                        <h1
                            id="about-us-title"
                            className={styles.title}
                        >
                            Quem Somos
                        </h1>

                        <div className={styles.description}>
                            <p>
                                Fundada em 2002, somos uma plataforma global e
                                líder em gestão de investimentos alternativos, 
                                especializada em estratégias macro globais e
                                ativos digitais. Gestamos recursos para
                                investidores institucionais no mundo todo, 
                                incluindo fundos soberanos, fundos de pensão 
                                corporativos e públicos, fundações e endowments.
                            </p>

                            <p>
                                Contamos com mais de 1.050 colaboradores, mais
                                de 145 Gestores de Carteira* e 9 Hubs com 
                                escritórios em São Paulo, Nova York, Londres, 
                                Genebra, Jersey, Hong Kong, Abu Dhabi, Cingapura
                                e Austin.
                            </p>

                            <p>
                                A gestora é liderada pelo CEO, Eduardo Prado.
                            </p>
                        </div>
                    </div>

                    <figure className={styles.imageContainer}>
                        <Image 
                            src="/images/aboutUs-img.webp"
                            alt="Imagem institucional da Belmont Global"
                            width={843}
                            height={1264}
                            priority
                            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 45vw, 540px"
                            className={styles.image}
                        />
                    </figure>
                </div>
            </section>
        </main>
    );
}