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
                <div className={styles.eyebrow}>
                    <span className={styles.eyebrowNumber}>
                        03
                    </span>

                    <span className={styles.eyebrowLabel}>
                        OPPORTUNITY
                    </span>
                </div>

                <div className={styles.content}>
                    <div className={styles.description}>
                        <h2
                            id="bg-digital-opportunity-title"
                            className={styles.title}
                        >
                            <span className={styles.titleAccent}>
                                Nossos
                            </span>

                            <span className={styles.titleAccent}>
                                parceiros &
                            </span>

                            <span className={styles.titleMain}>
                                Investimentos
                            </span>
                        </h2>

                        <p className={styles.descriptionText}>
                            A estrutura evergreen da BG Digital, aliada 
                            ao nosso compromisso de oferecer uma ampla 
                            gama de serviços de valor agregado aos 
                            fundadores, nos permite atuar como parceiros 
                            estratégicos de longo prazo para as empresas 
                            do nosso portfólio. Para projetos do 
                            ecossistema cripto que buscam ganho de escala, 
                            oferecemos suporte especializado nas 
                            seguintes áreas-chave:
                        </p>
                    </div>

                    <div className={styles.details}>
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

                        <div className={styles.institucional}>
                            <h3 className={styles.institucionalTitle}>
                                INFORMAÇÕES INSTITUCIONAIS E REGULATÓRIAS
                            </h3>

                            <p className={styles.riskInformation}>
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
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}