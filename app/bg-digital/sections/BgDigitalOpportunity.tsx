import { ScrollReveal } from "@/app/components/ScrollReveal";

import styles from "../styles/BgDigitalOpportunity.module.css";

const opportunityAreas = [
    "Estratégia de Crescimento",
    "Desenvolvimento em Blockchain",
    "Vantagem de Informação Assimétrica",
    "Participação Ativa na Rede",
    "Votação e Governança",
];

export function BgDigitalOpportunity() {
    return (
        <section
            className={styles.section}
            aria-labelledby="bg-digital-opportunity-title"
        >
            <div className={styles.container}>
                <ScrollReveal
                    as="div"
                    variant="fade"
                    className={styles.eyebrowReveal}
                >
                    <div className={styles.eyebrow}>
                        <span className={styles.eyebrowNumber}>
                            03
                        </span>

                        <span className={styles.eyebrowLabel}>
                            OPPORTUNITY
                        </span>
                    </div>
                </ScrollReveal>

                <div className={styles.content}>
                    <div className={styles.description}>
                        <h2
                            id="bg-digital-opportunity-title"
                            className={styles.title}
                        >
                            <ScrollReveal
                                as="span"
                                variant="up"
                                className={styles.titleAccent}
                            >
                                Nossos
                            </ScrollReveal>

                            <ScrollReveal
                                as="span"
                                variant="up"
                                className={styles.titleAccent}>
                                parceiros &
                            </ScrollReveal>

                            <ScrollReveal
                                as="span"
                                variant="up"
                                className={`${styles.titleMain} ${styles.titleMainReveal}`}>
                                Investimentos
                            </ScrollReveal>
                        </h2>

                        <ScrollReveal
                            as="p"
                            variant="up"
                            className={styles.descriptionText}
                        >
                            A estrutura evergreen da BG Digital, aliada
                            ao nosso compromisso de oferecer uma ampla
                            gama de serviços de valor agregado aos
                            fundadores, nos permite atuar como parceiros
                            estratégicos de longo prazo para as empresas
                            do nosso portfólio. Para projetos do
                            ecossistema cripto que buscam ganho de escala,
                            oferecemos suporte especializado nas
                            seguintes áreas-chave:
                        </ScrollReveal>
                    </div>

                    <div className={styles.details}>
                        <ScrollReveal
                            as="div"
                            variant="up"
                            className={styles.opportunityListReveal}
                        >
                            <ul
                                className={styles.opportunityList}
                                aria-label="Áreas de suporte aos projetos"
                            >
                                {opportunityAreas.map((area) => (
                                    <li
                                        key={area}
                                        className={styles.opportunityItem}
                                    >
                                        {area}
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>

                        <div className={styles.institucional}>
                            <h3 className={styles.institucionalTitle}>
                                INFORMAÇÕES INSTITUCIONAIS E REGULATÓRIAS
                            </h3>

                            <ScrollReveal 
                                as="p"
                                variant="up"
                                className={styles.riskInformation}
                            >
                                <a
                                    href="#"
                                    className={styles.riskLink}
                                    aria-label="Clique aqui para acessar os Fatores de Risco de Ativos Digitais"
                                >
                                    <strong>
                                        Clique aqui
                                    </strong>
                                </a>
                                {" "}para acessar os Fatores de Risco de
                                Ativos Digitais
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}