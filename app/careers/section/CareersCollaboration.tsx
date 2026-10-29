import Image from "next/image";

import { ScrollReveal } from "@/app/components/ScrollReveal";

import styles from "../styles/CareersCollaboration.module.css";

const paragraphs = [
    "Na Belmont Global, acreditamos que talentos excepcionais não são definidos apenas pela formação acadêmica ou pela trajetória profissional, mas sim pela sua forma de pensar: como raciocinam diante da complexidade, questionam premissas, gerenciam riscos, enxergam oportunidades negligenciadas pelo mercado e agem com disciplina sob pressão.",
    "Nosso ambiente de trabalho é guiado por uma cultura de excelência impulsionada pela colaboração, inovação, responsabilidade e um foco compartilhado em performance — valores ancorados em nossa tradição como uma das principais gestoras de investimento macro do mercado global.",
];

export function CareersCollaboration() {
    return (
        <section
            id="careers"
            className={styles.section}
            aria-label="Colaboração na Belmont Global"
        >
            <div
                className={styles.blockDecorative}
                aria-hidden="true"
            />

            <div className={styles.content}>
                <ScrollReveal as="div" variant="up">
                    <div className={styles.copy}>
                        {paragraphs.map((paragraph, index) => (
                            <p
                                className={styles.paragraph}
                                key={index}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </ScrollReveal>
                <ScrollReveal as="div" variant="wipeReverse">
                    <div className={styles.imageFrame}>

                        <Image
                            className={styles.image}
                            src="/images/collaboration-img.webp"
                            alt="Profissionais colaborando em um ambiente de trabalho"
                            width={1195}
                            height={896}
                            unoptimized
                            sizes="(max-width: 760px) calc(100vw - 2.5rem), (max-width: 1230px) 50vw, 716px"
                        />
                        <ScrollReveal as="div" variant="center" className={styles.linkDelayReveal}>
                            <a
                                className={styles.link}
                                href="#careers"
                            >
                                <span>Faça parte da equipe</span>

                                <svg
                                    className={styles.arrow}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 22"
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
                </ScrollReveal>
            </div>
        </section>
    );
}