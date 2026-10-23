import Image from "next/image";

import styles from "../styles/RiskManagement.module.css";
import { ScrollReveal } from "@/app/components/ScrollReveal";

export default function RiskManagement() {
    return (
        <section
            className={styles.riskManagementSection}
            aria-labelledby="risk-management-title"
        >
            <div className={styles.riskManagementContent}>
                <ScrollReveal
                    as="span"
                    variant="fade"
                    className={styles.riskManagementNumber}
                    aria-hidden="true"
                >
                    03
                </ScrollReveal>

                <div className={styles.riskManagementGrid}>
                    <div className={styles.riskManagementCopy}>
                        <ScrollReveal as="div" variant="up">
                            <h2
                                id="risk-management-title"
                                className={styles.riskManagementTitle}
                            >
                                Gestão de Riscos
                            </h2>
                        </ScrollReveal>

                        <div className={styles.riskManagementTopics}>
                            <ScrollReveal as="div" variant="up">
                                <article
                                    className={styles.riskManagementTopic}
                                >
                                    <h3
                                        className={
                                            styles.riskManagementTopicTitle
                                        }
                                    >
                                        Arte &amp; Ciência
                                    </h3>

                                    <p
                                        className={
                                            styles.riskManagementTopicDescription
                                        }
                                    >
                                        O gerenciamento de riscos combina método
                                        científico e sensibilidade analítica,
                                        operando de forma quantitativa e
                                        qualitativa. Aplicamos uma disciplina
                                        rigorosa e minuciosa a cada detalhe das
                                        nossas posições.
                                    </p>
                                </article>
                            </ScrollReveal>

                            <ScrollReveal as="div" variant="up">
                                <article
                                    className={styles.riskManagementTopic}
                                >
                                    <h3
                                        className={
                                            styles.riskManagementTopicTitle
                                        }
                                    >
                                        Mais do que uma Função de Controle
                                    </h3>

                                    <p
                                        className={
                                            styles.riskManagementTopicDescription
                                        }
                                    >
                                        O risco não atua de forma isolada; ele é
                                        parte integrante do processo de decisão
                                        e da construção de portfólio de cada
                                        gestor. Cada estratégia possui um mandato
                                        de risco customizado e conta com um gestor
                                        de risco dedicado, atuando em estreita
                                        colaboração com os tomadores de decisão.
                                    </p>
                                </article>
                            </ScrollReveal>

                            <ScrollReveal as="div" variant="up">
                                <article
                                    className={styles.riskManagementTopic}
                                >
                                    <h3
                                        className={
                                            styles.riskManagementTopicTitle
                                        }
                                    >
                                        Foco em Testes de Estresse &amp; Análise
                                        de Cenários
                                    </h3>

                                    <p
                                        className={
                                            styles.riskManagementTopicDescription
                                        }
                                    >
                                        Nosso banco proprietário de testes de
                                        estresse foi desenvolvido ao longo de
                                        quase duas décadas e passa por
                                        atualizações contínuas. Essas ferramentas
                                        nos permitem mapear e examinar riscos de
                                        cauda, mitigando eventuais cenários de
                                        perda.
                                    </p>
                                </article>
                            </ScrollReveal>
                        </div>
                    </div>

                    <div className={styles.riskManagementVisuals}>
                        <ScrollReveal 
                            as="figure" 
                            variant="wipe"
                            className={styles.riskManagementImageFramePrimary}
                        >
                            <Image
                                src="/images/risk-management-img.webp"
                                alt=""
                                width={912}
                                height={1176}
                                sizes="(max-width: 790px) min(100vw - 40px, 355.19px), (max-width: 1100px) 34vw, 355.19px"
                                className={styles.riskManagementImage}
                            />
                        </ScrollReveal>

                        <ScrollReveal 
                            as="figure" 
                            variant="wipeReverse"
                            className={styles.riskManagementImageFrameSecondary}
                        >
                            <Image
                                src="/images/scenario-analysis-img.webp"
                                alt=""
                                width={923}
                                height={1152}
                                sizes="(max-width: 790px) min(100vw - 40px, 473.59px), (max-width: 1100px) 43vw, 473.59px"
                                className={styles.riskManagementImage}
                            />
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}