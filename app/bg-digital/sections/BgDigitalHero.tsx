import { ScrollReveal } from "@/app/components/ScrollReveal";

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
                    <ScrollReveal 
                        as="span"
                        variant="up"
                        className={`${styles.titleAccent} ${styles.titleAccentReveal}`}
                    >
                        Criptoativos &amp;
                    </ScrollReveal>

                    <ScrollReveal 
                        as="span"
                        variant="up"
                        className={`${styles.titleMain} ${styles.titleMainReveal}`}
                    >
                        Ativos Digitais
                    </ScrollReveal>
                </h1>
            </div>
        </section>
    );
}