import styles from "../styles/CareersJobRecommendations.module.css";

export function CareersJobRecommendations() {
    return (
        <section
            className={styles.section}
            aria-label="Recomendações de vagas"
        >
            <div className={styles.content}>
                <p className={styles.description}>
                    Receba recomendações de vagas personalizadas com base 
                    nos seus interesses.
                </p>

                <a
                    className={styles.link} 
                    href="#"
                >
                    Começar
                </a>
            </div>
        </section>
    );
}