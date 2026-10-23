import Link from "next/link";

import GlobeCanvas from "./GlobeCanvas";
import styles from "../styles/InvestmentOpportunities.module.css";

const GLOBE_LEGEND = [
    { label: "Renda Fixa", color: "#FFBB37" },
    { label: "Câmbio", color: "#9CEA4F" },
    { label: "Commodities", color: "#9472F6" },
    { label: "Renda Variável", color: "#E98EEB" },
    { label: "Ativos Digitais", color: "#61D9FF" },
    { label: "Crédito Privado", color: "#FDFF87" },
] as const;

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

                <GlobeCanvas 
                    className={styles.globeCanvas}
                />

                <ul
                    className={styles.globeLegend}
                    aria-label="Categorias de investimento representadas no globo"
                >
                    {GLOBE_LEGEND.map((item) => (
                        <li
                            key={item.label}
                            className={styles.globeLegendItem}
                        >
                            <span
                                className={styles.globeLegendColor}
                                style={{ backgroundColor: item.color }}
                                aria-hidden="true"
                            />

                            <span className={styles.globeLegendLabel}>
                                {item.label}
                            </span>
                        </li>
                    ))}
                </ul>

                <p className={styles.globeLegendDisclaimer}>
                    Os marcadores são exibidos meramente para fins ilustrativos e não
                    representam a exposição real dos investimentos.
                </p>
            </div>
        </section>
    );
}