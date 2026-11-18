import { ScrollReveal } from "@/app/components/ScrollReveal";

import styles from "../styles/ContactInformation.module.css";

export function ContactInformation() {
    return (
        <section
            id="contact-information"
            className={styles.section}
            aria-labelledby="contact-information-title"
        >
            <div className={styles.content}>
                <header className={styles.header}>
                    <ScrollReveal
                        as="div"
                        variant="up"
                    >
                        <div className={styles.eyebrow}>
                            <div
                                className={styles.octagon}
                                aria-hidden="true"
                            >
                                <svg
                                    className={styles.octagonSvg}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 90 90"
                                    fill="none"
                                    focusable="false"
                                >
                                    <polygon
                                        points="26,1 64,1 89,26 89,64 64,89 26,89 1,64 1,26"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    />
                                </svg>

                                <span className={styles.octagonNumber}>
                                    03
                                </span>
                            </div>

                            <span className={styles.eyebrowLabel}>
                                INFORMAÇÕES DE CONTATO
                            </span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal
                        as="div"
                        variant="up"
                    >
                        <h2
                            id="contact-information-title"
                            className={styles.title}
                        >
                            Contato
                        </h2>
                    </ScrollReveal>
                </header>

                <dl className={styles.contactList}>
                    <ScrollReveal
                        as="div"
                        variant="up"
                    >
                        <div className={styles.contactRow}>
                            <dt className={styles.contactLabel}>
                                Relações com Investidores / Dúvidas sobre fundos:
                            </dt>

                            <dd className={styles.contactDetails}>
                                <a
                                    href="mailto:ri@belmontglobal.com.br"
                                    className={styles.contactLink}
                                >
                                    ri@belmontglobal.com.br
                                </a>

                                <a
                                    href="tel:+551138974200"
                                    className={styles.contactLink}
                                >
                                    BR: +55 11 3897-4200
                                </a>

                                <a
                                    href="tel:+12125550184"
                                    className={styles.contactLink}
                                >
                                    US: +1 (212) 555-0184
                                </a>
                            </dd>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal
                        as="div"
                        variant="up"
                    >
                        <div className={styles.contactRow}>
                            <dt className={styles.contactLabel}>
                                Assessoria de Imprensa:
                            </dt>

                            <dd className={styles.contactDetails}>
                                <p className={styles.contactText}>
                                    Marina Fontes de Alencar
                                </p>

                                <p className={styles.contactText}>
                                    Diretora de Comunicação
                                </p>

                                <a
                                    href="tel:+551138974255"
                                    className={styles.contactLink}
                                >
                                    +55 11 3897-4255
                                </a>

                                <a
                                    href="mailto:imprensa@belmontglobal.com.br"
                                    className={styles.contactLink}
                                >
                                    imprensa@belmontglobal.com.br
                                </a>
                            </dd>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal
                        as="div"
                        variant="up"
                    >
                        <div className={styles.contactRow}>
                            <dt className={styles.contactLabel}>
                                Demais Assuntos:
                            </dt>

                            <dd className={styles.contactDetails}>
                                <a
                                    href="tel:+551138974000"
                                    className={styles.contactLink}
                                >
                                    +55 11 3897-4000
                                </a>
                            </dd>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal
                        as="div"
                        variant="up"
                    >
                        <div className={styles.contactRow}>
                            <dt className={styles.contactLabel}>
                                Social:
                            </dt>

                            <dd className={styles.contactDetails}>
                                <a
                                    href="https://www.linkedin.com/company/belmont-global/"
                                    className={styles.contactLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn/Belmont Global
                                </a>
                            </dd>
                        </div>
                    </ScrollReveal>
                </dl>
            </div>
        </section>
    );
}