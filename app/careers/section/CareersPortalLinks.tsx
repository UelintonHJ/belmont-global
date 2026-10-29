import styles from "../styles/CareersPortalLinks.module.css";

export function CareersPortalLinks() {
    return (
        <section
            className={styles.section}
            aria-label="Link do portal de carreiras"
        >
            <div className={styles.grid}>
                <div className={styles.item}>
                    <a
                        className={styles.link} 
                        href="#"
                    >
                        Informações Pessoais
                    </a>
                </div>

                <div className={styles.item}>
                    <a 
                        className={styles.link}
                        href="#"
                    >
                        Configurações de Cookies do Portal de Carreiras
                    </a>
                </div>
            </div>
        </section>
    );
}