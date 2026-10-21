import Link from "next/link";

import styles from "../styles/InvestmentOpportunities.module.css";

export default function InvestmentOpportunities() {
    return (
        <section
            className={styles.investmentOpportunitiesSection}
            aria-labelledby="investment-opportunities-title"
        >
            <div 
                className={styles.decorativeBlock}
                aria-hidden="true"
            />

            <div className={styles.investmentOpportunitiesContent}>
                <div className={styles.investmentOpportunitiesEyebrow}>
                    <div className={styles.investmentOpportunitiesOctagon}>
                        <svg
                            className={styles.investmentOpportunitiesOctagonSvg}
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

                        <span
                            className={
                                styles.investmentOpportunitiesOctagonNumber
                            }
                        >
                            03
                        </span>
                    </div>

                    <span
                        className={styles.investmentOpportunitiesEyebrowLabel}
                    >
                        ESTRATÉGIAS DE INVESTIMENTO
                    </span>
                </div>

                <h2
                    id="investment-opportunities-title"
                    className={styles.investmentOpportunitiesTitle}
                >
                    Oportunidades de Investimento
                </h2>

                <div className={styles.investmentOpportunitiesGrid}>
                    <div className={styles.investmentOpportunitiesDescription}>
                        <p>
                            Nossas estratégias de investimento atendem a uma
                            ampla gama de necessidades de alocação, buscando
                            e gerando oportunidades ativamente em diversas 
                            classes de ativos, instrumentos financeiros e
                            geografias globais — incluindo estratégias em 
                            ativos digitais.
                        </p>

                        <p>
                            Nosso portfólio de produtos abrange estratégias 
                            multi-gestor (multi-PM), estratégias de gestor 
                            único e oportunidades temáticas de co-investimento.
                        </p>
                    </div>

                    <div className={styles.investmentOpportunitiesContact}>
                        <p>
                            Para obter mais informações sobre nossa família
                            de fundos e estratégias, faça o login ou entre
                            em contato conosco.
                        </p>

                        <Link
                            href="/"
                            className={styles.investmentOpportunitiesLink}
                        >
                            <span>Faça seu Login</span>

                            <svg
                                className={styles.investmentOpportunitiesArrow}
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
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}