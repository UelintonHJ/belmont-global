import Image from "next/image";

import { ScrollReveal } from "@/app/components/ScrollReveal";

import styles from "../styles/BgDigitalLeadership.module.css";

export function BgDigitalLeadership() {
    return (
        <section
            className={styles.section}
            aria-labelledby="bg-digital-leadership-title"
        >
            <div className={styles.content}>
                <div className={styles.identity}>
                    <h2
                        id="bg-digital-leadership-title"
                        className={styles.name}
                    >
                        <ScrollReveal
                            as="span"
                            className={styles.nameLine}
                            variant="up"
                        >
                            Eduardo
                        </ScrollReveal>

                        <ScrollReveal
                            as="span"
                            className={`${styles.nameAccent} ${styles.nameAccentReveal}`}
                            variant="up"
                        >
                            Prado
                        </ScrollReveal>
                    </h2>

                    <ScrollReveal
                        as="p"
                        className={styles.role}
                        variant="up"
                    >
                        CEO
                    </ScrollReveal>
                </div>

                <div className={styles.quote}>
                    <Image
                        src="/images/quote-turquoise.svg"
                        alt=""
                        aria-hidden="true"
                        width={40}
                        height={35}
                        className={styles.quoteMark}
                    />

                    <ScrollReveal
                        as="div"
                        className={styles.quoteTextReveal}
                        variant="up"
                    >
                        <blockquote className={styles.quoteText}>
                            Nossa convicção na enorme diversidade de
                            oportunidades no mercado de ativos digitais e
                            na sua relevância para investidores de longo
                            prazo foi o motivo pelo qual criamos a BG Digital.
                        </blockquote>
                    </ScrollReveal>

                    <div className={styles.quoteClosing}>
                        <Image
                            src="/images/quote-turquoise.svg"
                            alt=""
                            aria-hidden="true"
                            width={40}
                            height={35}
                            className={`${styles.quoteMark} ${styles.quoteMarkClosing}`}
                        />
                    </div>
                </div>

                <figure className={styles.portraitFrame}>
                    <Image
                        src="/images/eduardo-prado-bg-digital-img.webp"
                        alt="Eduardo Prado, CEO da BG Digital"
                        fill
                        priority={false}
                        sizes="(max-width: 900px) 100vw, 40vw"
                        className={styles.portrait}
                    />
                </figure>
            </div>

            <ScrollReveal
                as="div"
                className={styles.designImage}
                variant="wipe"
            >
                <Image
                    src="/images/design-section.webp"
                    alt=""
                    width={1366}
                    height={784}
                    sizes="(max-width: 600px) 100vw, 510px"
                    className={styles.designImageContent}
                />
            </ScrollReveal>
        </section>
    );
}