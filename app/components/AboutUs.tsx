import styles from "./AboutUs.module.css"
import { CountUp } from "./CountUp";
import { ScrollReveal } from "./ScrollReveal";

export function AboutUs() {
    return (
        <section
            id="sobre-nos"
            className={styles.section}
            aria-labelledby="about-title"
        >
            <div className={styles.sectionContent}>
                <div className={styles.intro}>
                    <ScrollReveal as="div" className={styles.eyebrow}>
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

                            <span>01</span>
                        </div>

                        <span className={styles.eyebrowLabel}>
                            Quem Somos
                        </span>
                    </ScrollReveal>

                    <h2
                        id="about-title"
                        className={styles.title}
                    >
                        <ScrollReveal as="span">Perfil Institucional</ScrollReveal>
                    </h2>

                    <ScrollReveal as="p" className={styles.introDescription}>
                        Fundada em 2002, a Belmont Global é uma das
                        principais plataformas globais de gestão de
                        investimentos alternativos, especializada em
                        estratégias macro globais e ativos digitais.
                        Nossa reputação, construída ao longo de mais
                        de duas décadas, baseia-se na excelência de
                        nossos profissionais, em tecnologias de ponta
                        e em uma ampla gama de produtos de investimento
                        dinâmicos, sempre respaldados por uma rigorosa
                        governança institucional.
                    </ScrollReveal>

                    <ScrollReveal
                        as="div"
                        variant="center"
                        className={styles.detailsReveal}
                    >
                        <a
                            className={styles.detailsLink}
                            href="#sobre-nos"
                        >
                            <span>Mais Detalhes</span>

                            <svg
                                className={styles.detailsArrow}
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
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </ScrollReveal>

                </div>

                <div className={styles.statsGrid}>
                    <div className={styles.historyColumn}>
                        <div className={styles.historyContent}>
                            <div
                                className={styles.historyNumber}
                                aria-label="Mais de 20 anos"
                            >
                                <span
                                    className={styles.historyPlus}
                                    aria-hidden="true"
                                >
                                    +
                                </span>

                                <CountUp value={20} />
                            </div>

                            <ScrollReveal 
                                as="p" 
                                variant="left" 
                                className={styles.historyTitle}
                            >
                                Anos de História
                            </ScrollReveal>

                            <ScrollReveal 
                                as="p"
                                variant="up"
                                className={styles.historyDescription}
                            >
                                Investindo nos mercados globais,
                                aprimorando continuamente nossos
                                processos de investimento e entregando
                                resultados para nossos clientes.
                            </ScrollReveal>
                        </div>

                        <div
                            className={styles.decorativeBlock}
                            aria-hidden="true"
                        />
                    </div>

                    <div
                        className={styles.metricsColumn}
                        aria-label="Indicadores institucionais"
                    >
                        <article className={styles.metric}>
                            <div
                                className={styles.metricNumber}
                                aria-label="Mais de mil"
                            >
                                <span
                                    className={styles.metricPlus}
                                    aria-hidden="true"
                                >
                                    +
                                </span>

                                <CountUp value={1000} />
                            </div>

                            <ScrollReveal 
                                as="p"
                                variant="right"
                                className={styles.metricTitle}
                            >
                                Membros na Equipe
                            </ScrollReveal>

                            <ScrollReveal 
                                as="p"
                                variant="right"
                                className={styles.metricDescription}
                            >
                                Uma comunidade global e diversificada
                                de pensadores independentes forma o
                                nosso ambiente de trabalho inclusivo.
                            </ScrollReveal>
                        </article>

                        <article className={styles.metric}>
                            <div
                                className={styles.metricNumber}
                                aria-label="Mais de 150"
                            >
                                <span
                                    className={styles.metricPlus}
                                    aria-hidden="true"
                                >
                                    +
                                </span>

                                <CountUp value={150} />
                            </div>

                            <ScrollReveal
                                as="p"
                                variant="right"
                                className={styles.metricTitle}
                            >
                                Gestores de Portfólio*
                            </ScrollReveal>

                            <ScrollReveal 
                                as="p"
                                variant="right"
                                className={styles.metricDescription}
                            >
                                Especialistas em suas áreas de atuação
                                e diversificados em estilo de gestão
                                e geografia.
                            </ScrollReveal>
                        </article>

                        <article className={styles.metric}>
                            <div className={styles.metricNumber}>
                                <CountUp value={9} minimumIntegerDigits={2} />
                            </div>

                            <ScrollReveal 
                                as="p"
                                variant="right"
                                className={styles.metricTitle}
                            >
                                Polos Operacionais
                            </ScrollReveal>

                            <ScrollReveal 
                                as="p"
                                variant="right"
                                className={styles.metricDescription}
                            >
                                Localizados em regiões estratégicas
                                para servir a nossa base global de
                                clientes e aceder a talentos
                                excecionais.
                            </ScrollReveal>
                        </article>

                        <ScrollReveal
                            as="p"
                            variant="right"
                            className={styles.footnote}
                        >
                            *Inclui Gestores de Portfólio / Traders
                            e Pod PMs responsáveis pela gestão ativa
                            de capital. Dados atualizados em 1º de
                            setembro de 2026.
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}