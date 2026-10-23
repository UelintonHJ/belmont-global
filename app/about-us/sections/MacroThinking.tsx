import Image from "next/image";

import { ScrollReveal } from "@/app/components/ScrollReveal";

import styles from "../styles/MacroThinking.module.css";

export default function MacroThinking() {
    return (
        <section
            className={styles.macroThinkingSection}
            aria-labelledby="macro-thinking-title"
        >
            <div className={styles.macroThinkingContent}>
                <ScrollReveal
                    as="span"
                    variant="fade"
                    className={styles.macroThinkingNumber}
                    aria-hidden="true"
                >
                    01
                </ScrollReveal>

                <div className={styles.macroThinkingGrid}>
                    <div className={styles.macroThinkingCopy}>
                        <ScrollReveal as="div" variant="up">
                            <h2
                                id="macro-thinking-title"
                                className={styles.macroThinkingTitle}
                            >
                                Visão Macroeconômica
                            </h2>
                        </ScrollReveal>

                        <div className={styles.macroThinkingTopics}>
                            <ScrollReveal as="div" variant="up">
                                <article
                                    className={styles.macroThinkingTopic}
                                >
                                    <h3
                                        className={
                                            styles.macroThinkingTopicTitle
                                        }
                                    >
                                        Pesquisa &amp; Análise
                                    </h3>

                                    <p
                                        className={
                                            styles.macroThinkingTopicDescription
                                        }
                                    >
                                        Contamos com uma rede global de mentes
                                        analíticas e independentes para
                                        fundamentar nosso processo de research
                                        e análise.
                                    </p>
                                </article>
                            </ScrollReveal>

                            <ScrollReveal as="div" variant="up">
                                <article
                                    className={styles.macroThinkingTopic}
                                >
                                    <h3
                                        className={
                                            styles.macroThinkingTopicTitle
                                        }
                                    >
                                        Debate &amp; Contraponto
                                    </h3>

                                    <p
                                        className={
                                            styles.macroThinkingTopicDescription
                                        }
                                    >
                                        Incentivamos o livre fluxo de
                                        informações e a transparência em toda
                                        a gestora. Mantemos um ambiente
                                        formado por profissionais de
                                        investimento criativos e autônimos,
                                        no qual ideias originais e visões
                                        diferenciadas são estimuladas e
                                        constantemente colocadas à prova.
                                    </p>
                                </article>
                            </ScrollReveal>

                            <ScrollReveal as="div" variant="up">
                                <article
                                    className={styles.macroThinkingTopic}
                                >
                                    <h3
                                        className={
                                            styles.macroThinkingTopicTitle
                                        }
                                    >
                                        Pensamento Não Consensual
                                    </h3>

                                    <p
                                        className={
                                            styles.macroThinkingTopicDescription
                                        }
                                    >
                                        Acreditamos no valor do pensamento
                                        contrariam (independente do consenso).
                                        Humildade intelectual, flexibilidade
                                        e visão analítica são fundamentais
                                        para a geração de valor no longo
                                        prazo.
                                    </p>
                                </article>
                            </ScrollReveal>
                        </div>
                    </div>

                    <ScrollReveal
                        as="figure"
                        variant="wipeReverse"
                        className={styles.macroThinkingImageContainer}
                    >
                        <Image
                            src="/images/macro-thinking-img.webp"
                            alt="Análise e o pensamento macroeconômico"
                            width={864}
                            height={1232}
                            sizes="(max-width: 790px) calc(100vw - 40px), (max-width: 1200px) 46vw, 592px"
                            className={styles.macroThinkingImage}
                        />
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}