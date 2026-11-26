import { ScrollReveal } from "@/app/components/ScrollReveal";
import { CountUp } from "@/app/components/CountUp";

import styles from "../styles/BgDigitalTalent.module.css";

export function BgDigitalTalent() {
    return (
        <section
            className={styles.section}
            aria-labelledby="bg-digital-talent-title"
        >
            <div className={styles.container}>
                <ScrollReveal
                    as="div"
                    variant="fade"
                    className={styles.eyebrowReveal}
                >
                    <div className={styles.eyebrow}>
                        <span className={styles.eyebrowNumber}>
                            02
                        </span>

                        <span className={styles.eyebrowLabel}>
                            TALENTOS
                        </span>
                    </div>
                </ScrollReveal>

                <div className={styles.content}>
                    <div className={styles.description}>
                        <h2
                            id="bg-digital-talent-title"
                            className={styles.title}
                        >
                            <ScrollReveal
                                as="span"
                                variant="up"
                                className={styles.titleAccent}
                            >
                                Nossa
                            </ScrollReveal>

                            <ScrollReveal
                                as="span"
                                variant="up"
                                className={`${styles.titleMain} ${styles.titleMainReveal}`}
                            >
                                Equipe
                            </ScrollReveal>
                        </h2>

                        <div className={styles.textContent}>
                            <ScrollReveal
                                as="p"
                                variant="up"
                            >
                                Ao alavancar nosso quadro excepcional de
                                talentos, tecnologia inovadora e uma
                                infraestrutura institucional consolidada,
                                buscamos entregar os melhores resultados
                                possíveis para nossos clientes,
                                mantendo-nos na vanguarda de um setor em
                                constante evolução.
                            </ScrollReveal>

                            <ScrollReveal
                                as="p"
                                variant="up"
                            >
                                Além de contar com o suporte de mais de
                                1.100 profissionais do Grupo Belmont
                                Global, a BG Digital construiu uma equipe
                                global sólida, que combina de forma única
                                talentos nativos do universo cripto e
                                especialistas do mercado financeiro
                                tradicional.
                            </ScrollReveal>
                        </div>
                    </div>

                    <ScrollReveal
                        as="div"
                        variant="up"
                        className={styles.metricsPanelReveal}
                    >
                        <dl
                            className={styles.metricsPanel}
                            aria-label="Indicadores da equipe BG Digital"
                        >
                            <div className={styles.metricLead}>
                                <dt className={styles.metricLeadNumber}>
                                    +<CountUp value={45} />
                                </dt>

                                <dd className={styles.metricLeadLabel}>
                                    Profissionais
                                </dd>
                            </div>

                            <div className={styles.metricCard}>
                                <dt className={styles.metricNumber}>
                                    <CountUp value={9} />
                                </dt>

                                <dd className={styles.metricLabel}>
                                    Gestoras de Carteira
                                </dd>
                            </div>

                            <div className={styles.metricCard}>
                                <dt className={styles.metricNumber}>
                                    <CountUp value={16} />
                                </dt>

                                <dd className={styles.metricLabel}>
                                    Especialistas em Investimentos
                                </dd>
                            </div>
                        </dl>
                    </ScrollReveal>
                </div>

                <ScrollReveal 
                    as="p"
                    variant="up"
                    className={styles.footnote}
                >
                    Dados referentes a 1º de novembro de 2026.
                </ScrollReveal>
            </div>
        </section>
    );
}