import { ScrollReveal } from "@/app/components/ScrollReveal";

import styles from "../styles/CareersTalentNetwork.module.css";

export function CareersTalentNetwork() {
    return (
        <section
            className={styles.section}
            aria-labelledby="careers-talent-network-title"
        >
            <div
                className={styles.background}
                aria-hidden="true"
            />
            <div className={styles.content}>
                <ScrollReveal as="div" variant="up">
                    <h2
                        id="careers-talent-network-title"
                        className={styles.title}
                    >
                        Faça parte da nossa rede de talentos
                    </h2>
                </ScrollReveal>

                <ScrollReveal as="p" variant="up" className={styles.description}>
                    Notificaremos você sobre posições alinhadas ao seu
                    perfil e manteremos seus dados em nosso radar sempre
                    que surgirem oportunidades relevantes.
                </ScrollReveal>

                <ScrollReveal as="div" variant="center" className={styles.linkReveal}>
                    <a
                        className={styles.link}
                        href="#"
                    >
                        <span>Cadastre-se agora</span>

                        <svg
                            className={styles.arrow}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="25"
                            viewBox="0 0 20 20"
                            fill="none"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path
                                d="M11 4.5 16.5 10 11 15.5"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </ScrollReveal>
            </div>
        </section>
    );
}