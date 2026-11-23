import Image from "next/image";

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
                        <span>Eduardo</span>

                        <span className={styles.nameAccent}>
                            Prado
                        </span>
                    </h2>

                    <p className={styles.role}>
                        CEO
                    </p>
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

                    <blockquote className={styles.quoteText}>
                        Nossa convicção na enorme diversidade de 
                        oportunidades no mercado de ativos digitais e 
                        na sua relevância para investidores de longo
                        prazo foi o motivo pelo qual criamos a BG Digital.
                    </blockquote>

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

            <div
                className={styles.designImage}
                aria-hidden="true"
            >
                <Image 
                    src="/images/design-section.webp"
                    alt=""
                    width={1366}
                    height={784}
                    sizes="(max-width: 600px) 100vw, 510px"
                    className={styles.designImageContent}
                />
            </div>
        </section>
    );
}