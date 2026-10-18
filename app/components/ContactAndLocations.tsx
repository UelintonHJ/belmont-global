type ContactAndLocationsProps = {
    contactHref: string;
};

import styles from "./ContactAndLocations.module.css";

export function ContactAndLocations({
    contactHref,
}: ContactAndLocationsProps) {
    return (
        <section
            id="contato"
            className={styles.section}
            aria-labelledby="contact-and-locations-title"
        >
            <div className={styles.content}>
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
                            05
                        </span>
                    </div>

                    <span className={styles.eyebrowLabel}>
                        CONTATO & LOCALIZAÇÕES
                    </span>
                </div>

                <h2
                    id="contact-and-locations-title"
                    className={styles.title}
                >
                    Seja Nosso Parceiro
                </h2>

                <a 
                    className={styles.contactLink}
                    href={contactHref}
                >
                    <span>Fale Conosco</span>

                    <svg
                        className={styles.contactArrow}
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
                </a>
            </div>
        </section>
    );
}