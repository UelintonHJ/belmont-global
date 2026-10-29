import Image from "next/image";

import styles from "../styles/InvestmentApproach.module.css";
import { ScrollReveal } from "../../components/ScrollReveal";

export function InvestmentApproach() {
    return (
        <section
            id="investment-approach"
            className={styles.section}
            aria-labelledby="investment-approach-title"
        >
            <div className={styles.content}>
                <div className={styles.copy}>
                    <h2
                        id="investment-approach-title"
                        className={styles.title}
                    >
                        <ScrollReveal as="span">
                            Abordagem de Investimento
                        </ScrollReveal>
                    </h2>

                    <div className={styles.description}>
                        <ScrollReveal as="p">
                            Nossa abordagem de investimento combina
                            estratégias direcionais, de valor relativo
                            e de trading de derivativos, concebidas para
                            gerar retornos ortogononais e complementares
                            em uma ampla gama de soluções de investimento.
                        </ScrollReveal>

                        <ScrollReveal as="p">
                            Diferenciamos nosso processo de investimento
                            por meio de nossos três pilares fundamentais
                            de especialização: visão macroeconômica,
                            estruturação de operações e gestão de risco.
                        </ScrollReveal>
                    </div>

                    <ScrollReveal
                        as="div"
                        variant="center"
                        className={styles.detailsReveal}
                    >
                        <a
                            className={styles.detailsLink}
                            href="#investment-approach"
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

                <ScrollReveal
                    as="div"
                    variant="wipe"
                    className={styles.media}
                >
                    <Image
                        src="/images/investmet-approach-img.webp"
                        alt=""
                        width={848}
                        height={1230}
                        sizes="(max-width: 960px) calc(100vw - 40), (max-width: 1280px) 40vw, 512px"
                        className={styles.image}
                    />
                </ScrollReveal>
            </div>
        </section>
    );
}