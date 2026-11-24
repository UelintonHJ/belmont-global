import styles from "../styles/BgDigitalTalent.module.css";

export function BgDigitalTalent() {
    return (
        <section
            className={styles.section}
            aria-labelledby="bg-digital-talent-title"
        >
            <div className={styles.container}>
                <div className={styles.eyebrow}>
                    <span className={styles.eyebrowNumber}>
                        02
                    </span>

                    <span className={styles.eyebrowLabel}>
                        TALENTOS
                    </span>
                </div>

                <div className={styles.content}>
                    <div className={styles.description}>
                        <h2
                            id="bg-digital-talent-title"
                            className={styles.title}
                        >
                            <span className={styles.titleAccent}>
                                Nossa
                            </span>

                            <span className={styles.titleMain}>
                                Equipe
                            </span>
                        </h2>

                        <div className={styles.textContent}>
                            <p>
                                Ao alavancar nosso quadro excepcional de 
                                talentos, tecnologia inovadora e uma
                                infraestrutura institucional consolidada,
                                buscamos entregar os melhores resultados
                                possíveis para nossos clientes,
                                mantendo-nos na vanguarda de um setor em 
                                constante evolução.
                            </p>

                            <p>
                                Além de contar com o suporte de mais de 
                                1.100 profissionais do Grupo Belmont
                                Global, a BG Digital construiu uma equipe
                                global sólida, que combina de forma única 
                                talentos nativos do universo cripto e 
                                especialistas do mercado financeiro 
                                tradicional.
                            </p>
                        </div>
                    </div>

                    <dl
                        className={styles.metricsPanel}
                        aria-label="Indicadores da equipe BG Digital"
                    >
                        <div className={styles.metricLead}>
                            <dt className={styles.metricLeadNumber}>
                                +45
                            </dt>

                            <dd className={styles.metricLeadLabel}>
                                Profissionais
                            </dd>
                        </div>

                        <div className={styles.metricCard}>
                            <dt className={styles.metricNumber}>
                                8
                            </dt>

                            <dd className={styles.metricLabel}>
                                Gestores de Carteira
                            </dd>
                        </div>

                        <div className={styles.metricCard}>
                            <dt className={styles.metricNumber}>
                                16
                            </dt>

                            <dd className={styles.metricLabel}>
                                Especialistas em Investimentos
                            </dd>
                        </div>
                    </dl>
                </div>

                <p className={styles.footnote}>
                    Dados referentes a 1º de novembro de 2026.
                </p>
            </div>
        </section>
    );
}