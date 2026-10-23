import Image from "next/image";

import { ScrollReveal } from "@/app/components/ScrollReveal";

import styles from "../styles/TradeStructure.module.css";

export default function TradeStructure() {
    return (
        <section
            className={styles.tradeStructureSection}
            aria-labelledby="trade-structure-title"
        >
            <div className={styles.tradeStructureContent}>
                <div className={styles.tradeStructureGrid}>
                    <div
                        className={styles.tradeStructureVisuals}
                        aria-label="Imagens ilustrativas"
                    >
                        <ScrollReveal
                            as="figure"
                            variant="wipeReverse"
                            className={`${styles.tradeStructureImageFramePrimary}`}
                        >
                            <Image
                                src="/images/work-trade-img.webp"
                                alt=""
                                width={921}
                                height={1152}
                                aria-hidden="true"
                                sizes="(max-width: 790px) min(100vw - 40px, 474px), (max-width: 1100px) 42vw, 474px"
                                className={styles.tradeStructureImage}
                            />
                        </ScrollReveal>

                        <ScrollReveal
                            as="figure"
                            variant="wipe"
                            className={`${styles.tradeStructureImageFrameSecondary}`}
                        >
                            <Image
                                src="/images/trade-structure-img.webp"
                                alt=""
                                width={912}
                                height={1180}
                                aria-hidden="true"
                                sizes="(max-width: 790px) min(88vw, 355px), (max-width: 1100px) 34vw, 355px"
                                className={styles.tradeStructureImage}
                            />
                        </ScrollReveal>
                    </div>

                    <div className={styles.tradeStructureCopy}>
                        <ScrollReveal
                            as="span"
                            variant="fade"
                            className={styles.tradeStructureNumber}
                            aria-hidden="true"
                        >
                            02
                        </ScrollReveal>

                        <ScrollReveal
                            as="div"
                            variant="up"
                        >
                            <h2
                                id="trade-structure-title"
                                className={styles.tradeStructureTitle}
                            >
                                Estruturação de Operações
                            </h2>
                        </ScrollReveal>

                        <div className={styles.tradeStructureDescription}>
                            <ScrollReveal as="p" variant="up">
                                A estruturação de operações com assimetria
                                inerente de resultado (P&amp;L) nos permite
                                compreender melhor as probabilidades dos
                                diferentes cenários precificados pelo mercado
                                e contruir relações atrativas de
                                risco-retorno.¹
                            </ScrollReveal>

                            <ScrollReveal as="p" variant="up">
                                Criamos assimetria por meio do uso de opções
                                e estruturas derivativas equivalentes, bem
                                como pelo uso disciplinado de ordens de
                                stop-loss.²
                            </ScrollReveal>

                            <ScrollReveal as="p" variant="up">
                                As visões sobre a melhor estrutura para cada
                                operações são ativamente debatidas em conjunto
                                com os cenários de mercado. Nossos
                                profissionais são incentivados a colaborar e
                                integrar suas especialidades em estruturação
                                nos mais diversos mercados, visando otimizar
                                a rentabilidade das estratégias.
                            </ScrollReveal>
                        </div>
                    </div>
                </div>

                <div
                    className={styles.tradeStructureLegalNotes}
                    aria-label="Notes legais"
                >
                    <ScrollReveal
                        as="p"
                        variant="up"
                        className={styles.tradeStructureLegalNote}
                    >
                        <strong>
                            1. Referências a Rentabilidade Futura e Isenção
                            de Responsabilidade:
                        </strong>{" "}
                        Referências a rentabilidade futura não constituem
                        promessa ou garantia de resultados para os
                        investidores. Quaisquer projeções, simulações ou
                        cenários contidos neste site/material têm caráter
                        meramente ilustrativo e não devem ser interpretados
                        como recomendação de investimento ou aconselhamento
                        financeiro. A Belmont Global não presta declarações,
                        garantias ou compromissos de que qualquer
                        rentabilidade indicativa será alcançada no futuro,
                        tampouco de que os objetivos e políticas de
                        investimento dos nossos fundos serão atingidos.
                        Rentabilidade passada não representa garantia de
                        rentabilidade futura. Embora nossos fundos estejam
                        sujeitos aos riscos de mercado comuns a outras
                        modalidades de investimento, incluindo
                        a volatilidade, as estratégias adotadas utilizam
                        técnicas de gestão que podem incluir alavancagem e
                        operações derivativas complexas, as quais podem
                        aumentar a exposição e o risco de perdas
                        patrimoniais.
                    </ScrollReveal>

                    <ScrollReveal
                        as="p"
                        variant="up"
                        className={styles.tradeStructureLegalNote}
                    >
                        <strong>
                            2. Ordens de Stop-Loss e Stop-Limit em Contratos
                            Futuros:
                        </strong>{" "}
                        Determinadas bolsas reguladas podem permitir a
                        execução de ordens de stop-loss ou stop-limit em
                        contratos futuros e derivativos. Tais ferramentas
                        visam limitar a exposição do fundo a perdas
                        decorrentes de oscilações do mercado, contudo, não
                        garantem a limitação absoluta dos prejuízos ao valor
                        pretendido, uma vez que condições atípicas de
                        mercado, liquidez ou volatilidade extrema pode
                        impossibilitar a execução ou preço de stop
                        estipulado.
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}