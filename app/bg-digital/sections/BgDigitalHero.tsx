import styles from "../styles/BgDigitalHero.module.css";

export function BgDigitalHero() {
    return (
        <section
            className={styles.hero}
            aria-labelledby="bg-digital-hero-title"
        >
            <div className={styles.content}>
                <h1
                    id="bg-digital-hero-title"
                    className={styles.title}
                >
                    <span className={styles.titleAccent}>
                        Criptoativos &amp;
                    </span>

                    <span className={styles.titleMain}>
                        Ativos Digitais
                    </span>
                </h1>
            </div>
        </section>
    );
}