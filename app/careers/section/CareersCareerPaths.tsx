import Image from "next/image";

import styles from "../styles/CareersCareerPaths.module.css";

const careerPaths = [
    {
        title: "Início de Carreira",
        titleLines: ["Início de", "Carreira"],
        image: "/images/early-careers-img.webp",
        alt: "Profissional em início de carreira",
    },
    {
        title: "Profissionais Experientes",
        titleLines: ["Profissionais Experientes"],
        image: "/images/experienced-professionals-img.webp",
        alt: "Reunião de profissionais experientes",
    },
];

export function CareersCareerPaths() {
    return (
        <section
            className={styles.section}
            aria-label="Oportunidades de carreira"
        >
            <div
                className={styles.blockDecorative}
                aria-hidden="true"
            />

            <div className={styles.content}>
                {careerPaths.map((careerPath) => (
                    <article
                        className={styles.card}
                        key={careerPath.title}
                    >
                        <div className={styles.imageFrame}>
                            <Image
                                className={styles.image}
                                src={careerPath.image}
                                alt={careerPath.alt}
                                width={1264}
                                height={843}
                                sizes="(max-width: 760px) calc(100vw - 2.5rem), (max-width: 1230px) calc((100vw - 4.5rem) / 2), 560px"
                            />
                        </div>

                        <div className={styles.cardContent}>
                            <h2 className={styles.title}>
                                {careerPath.titleLines.map((line) => (
                                    <span key={line}>{line}</span>
                                ))}
                            </h2>

                            <a
                                className={styles.linkVisual}
                                href="#"
                            >
                                <span>Saiba mais</span>

                                <svg
                                    className={styles.arrow}
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
                                    />
                                </svg>
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}