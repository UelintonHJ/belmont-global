import { ScrollReveal } from "@/app/components/ScrollReveal";

import styles from "../styles/BgDigitalContactUs.module.css";

export function BgDigitalContactUs() {
    return (
        <section
            className={styles.section}
            aria-labelledby="bg-digital-contact-title"
        >
            <div className={styles.container}>
                <header className={styles.header}>
                    <h2
                        id="bg-digital-contact-title"
                        className={styles.title}
                    >
                        <ScrollReveal
                            as="span"
                            variant="up"
                            className={styles.titleAccent}
                        >
                            Fale
                        </ScrollReveal>

                        <ScrollReveal
                            as="span"
                            variant="up"
                            className={`${styles.titleMain} ${styles.titleMainReveal}`}>
                            Conosco
                        </ScrollReveal>
                    </h2>
                </header>

                <div className={styles.contactGrid}>
                    <ScrollReveal
                        as="div"
                        variant="up"
                        className={`${styles.contactItem} ${styles.contactItemDelay1}`}
                    >
                        <strong className={styles.contactLabel}>
                            Relações com Investidores / Dúvidas sobre Fundos:
                        </strong>

                        <div className={styles.contactContent}>
                            <a
                                className={styles.contactLink}
                                href="mailto:ri@belmontglobal.com.br"
                            >
                                ri@belmontglobal.com.br
                            </a>

                            <a
                                className={styles.contactLink}
                                href="tel:+551138974200"
                            >
                                BR: +55 11 3897-4200
                            </a>

                            <a
                                className={styles.contactLink}
                                href="tel:+12125550184"
                            >
                                US: +1 (212) 555-0184
                            </a>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal
                        as="div"
                        variant="up"
                        className={`${styles.contactItem} ${styles.contactItemDelay2}`}
                    >
                        <strong className={styles.contactLabel}>
                            Assessoria de Imprensa:
                        </strong>

                        <div className={styles.contactContent}>
                            <p className={styles.contactName}>
                                Marina Fontes de Alencar
                            </p>

                            <p className={styles.contactRole}>
                                Diretora de Comunicação
                            </p>

                            <a
                                className={styles.contactLink}
                                href="tel:+551138974255"
                            >
                                +55 11 3897-4255
                            </a>

                            <a
                                className={styles.contactLink}
                                href="mailto:imprensa@belmontglobal.com.br"
                            >
                                imprensa@belmontglobal.com.br
                            </a>

                            <p className={styles.contactOrganization}>
                                Vanguard Alliance Capital Group
                            </p>

                            <a
                                className={styles.contactLink}
                                href="mailto:belmontglobal@vanguardalliance.com"
                            >
                                belmontglobal@vanguardalliance.com
                            </a>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal 
                        as="div"
                        variant="up"
                        className={`${styles.contactItem} ${styles.contactItemDelay3}`}
                    >
                        <strong className={styles.contactLabel}>
                            Demais Assuntos:
                        </strong>

                        <div className={styles.contactContent}>
                            <a
                                className={styles.contactLink}
                                href="tel:+551138974000"
                            >
                                +55 11 3897-4000
                            </a>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal 
                        as="div"
                        variant="up"
                        className={`${styles.contactItem} ${styles.contactItemDelay4}`}
                    >
                        <strong className={styles.contactLabel}>
                            Social:
                        </strong>

                        <div className={styles.contactContent}>
                            <p className={styles.socialName}>
                                LinkedIn/Belmont Global
                            </p>

                            <a
                                className={styles.contactLink}
                                href="https://www.linkedin.com/company/belmont-global/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://www.linkedin.com/company/belmont-global/
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}