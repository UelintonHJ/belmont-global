import Image from "next/image";

import { ScrollReveal } from "@/app/components/ScrollReveal";

import styles from "../styles/AboutQuote.module.css";

export default function AboutQuote() {
    return (
        <section
            className={styles.quoteSection}
            aria-label="Depoimento de Eduardo Prado"
        >
            <div className={styles.quoteContent}>
                <ScrollReveal
                    as="figure"
                    variant="wipeReverse"
                    className={styles.portraitContainer}
                >
                    <Image
                        src="/images/eduardo-prado-img.webp"
                        alt="Eduardo Prado, diretor executivo da Belmont Global"
                        width={1008}
                        height={1043}
                        sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) 45vw, 504px"
                        className={styles.portrait}
                    />
                </ScrollReveal>

                <ScrollReveal 
                    as="div"
                    variant="left"
                    className={styles.quoteCopy}
                >
                    <div className={styles.quoteOpening}>
                        <Image
                            src="/images/quotes.svg"
                            alt=""
                            aria-hidden="true"
                            width={39}
                            height={34}
                            className={styles.quoteMark}
                        />

                        <blockquote className={styles.quoteText}>
                            Nosso propósito é gerar retornos consistentes e
                            de excelência para nossos clientes em qualquer
                            cenário macroeconômico.
                        </blockquote>
                    </div>

                    <div className={styles.quoteClosing}>
                        <Image
                            src="/images/quotes.svg"
                            alt=""
                            aria-hidden="true"
                            width={39}
                            height={34}
                            className={`${styles.quoteMark} ${styles.quoteMarkClosing}`}
                        />
                    </div>

                    <div className={styles.quoteDivider} />

                    <p className={styles.quoteAuthor}>
                        Eduardo Prado
                    </p>

                    <p className={styles.quoteRole}>
                        Diretor Executivo (CEO)
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
}