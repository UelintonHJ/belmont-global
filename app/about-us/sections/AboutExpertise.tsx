import Image from "next/image";

import styles from "../styles/AboutExpertise.module.css";

const expertisePillars = [
    {
        number: "1",
        title: "Visão Macroeconômica",
        description:
            "A pesquisa macro global atua como a espinha dorsal do nosso processo de investimento.",
    },
    {
        number: "2",
        title: "Estruturação de Operações",
        description:
            "Buscamos estruturar posições convexas, nas quais o potencial de ganho supera significativamente o risco de perda.",
    },
    {
        number: "3",
        title: "Gestão de Riscos",
        description:
            "Nosso processo de gerenciamento de risco é focado em maximizar os retornos potenciais, mantendo a rigorosa preservação do capital investido.",
    },
];

export default function AboutExpertise() {
    return (
        <section
            className={styles.expertiseSection}
            aria-labelledby="expertise-title"
        >
            <div
                className={styles.decorativeBlock}
                aria-hidden="true"
            />

            <div className={styles.expertiseContent}>
                <div className={styles.expertiseIntroduction}>
                    <div className={styles.expertiseEyebrow}>
                        <div className={styles.expertiseOctagon}>
                            <svg
                                className={styles.expertiseOctagonSvg}
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

                            <span className={styles.expertiseOctagonNumber}>
                                02
                            </span>
                        </div>

                        <span className={styles.expertiseEyebrowLabel}>
                            ABORDAGEM DE INVESTIMENTO
                        </span>
                    </div>

                    <h2
                        id="expertise-title"
                        className={styles.expertiseTitle}
                    >
                        Três Pilares de Expertise
                    </h2>

                    <div className={styles.expertiseDescriptionGrid}>
                        <p>
                            Nossa abordagem de gestão combina estratégias
                            direcionais, de valor relativo (relative value) e
                            derivativos, desenhadas para gerar retornos
                            descorrelacionados e complementares através de uma
                            ampla gama de soluções de investimento.
                        </p>

                        <p>
                            Diferenciamos nosso processo de investimento por meio
                            de três pilares fundamentais: visão macroeconômica,
                            estruturação de operações e gestão de risco.
                        </p>
                    </div>
                </div>

                <div className={styles.expertisePillarsGrid}>
                    <figure className={styles.expertiseImageContainer}>
                        <Image
                            src="/images/pillars-expertise-img.webp"
                            alt=""
                            width={544}
                            height={408}
                            sizes="(max-width: 790px) calc(100vw - 40px), (max-width: 1100px) 45vw, 600px"
                            className={styles.expertiseImage}
                        />
                    </figure>

                    <ol className={styles.expertisePillarsList}>
                        {expertisePillars.map((pillar) => (
                            <li
                                key={pillar.number}
                                className={styles.expertisePillar}
                            >
                                <span
                                    className={styles.expertisePillarNumber}
                                    aria-hidden="true"
                                >
                                    {pillar.number}
                                </span>

                                <div className={styles.expertisePillarContent}>
                                    <h3 className={styles.expertisePillarTitle}>
                                        {pillar.title}
                                    </h3>

                                    <p className={styles.expertisePillarDescription}>
                                        {pillar.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}