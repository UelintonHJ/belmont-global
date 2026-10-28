import Image from "next/image";

import styles from "../styles/CareersLeadershipTestimonials.module.css";

type TestimonialQuoteProps = {
    quote: string;
    name: string;
    role: string;
}

function TestimonialQuote({
    quote,
    name,
    role,
}: TestimonialQuoteProps) {
    return (
        <div className={styles.quoteCard}>
            <div className={styles.quoteOpening}>
                <Image
                    src="/images/quotes.svg"
                    alt=""
                    aria-hidden="true"
                    width={60}
                    height={60}
                    className={styles.quoteMark}
                />

                <blockquote className={styles.quoteText}>
                    {quote}
                </blockquote>
            </div>
            <div className={styles.quoteClosing}>
                <Image
                    src="/images/quotes.svg"
                    alt=""
                    aria-hidden="true"
                    width={60}
                    height={60}
                    className={`${styles.quoteMark} ${styles.quoteMarkClosing}`}
                />
            </div>

            <p className={styles.quoteAuthor}>
                {name}
            </p>

            <p className={styles.quoteRole}>
                {role}
            </p>
        </div>
    );
}

export function CareersLeadershipTestimonials() {
    return (
        <section
            className={styles.section}
            aria-label="Depoimentos da liderança da Belmont Global"
        >
            <div className={styles.content}>
                <div className={styles.testimonialRow}>
                    <figure className={styles.portraitFrame}>
                        <Image
                            src="/images/alvaro-belmont-img.webp"
                            alt="Álvaro Belmont, cofundador da Belmont Global"
                            width={943}
                            height={1136}
                            sizes="(max-width: 760px) 240px, 240px"
                            className={styles.portrait}
                        />
                    </figure>

                    <TestimonialQuote
                        quote="A Belmont Global é um espaço onde mentes brilhantes, independentemente de sua origem, encontram a oportunidade e o suporte necessários para realizar o melhor trabalho de suas carreiras."
                        name="Álvaro Belmont"
                        role="Cofundador"
                    />
                </div>

                <div
                    className={`${styles.testimonialRow} ${styles.testimonialRowReverse}`}
                >
                    <figure className={styles.portraitFrame}>
                        <Image
                            src="/images/eduardo-prado-careers-img.webp"
                            alt="Eduardo Prado, CEO da Belmont Global"
                            width={1008}
                            height={1044}
                            sizes="240px"
                            className={styles.portrait}
                        />
                    </figure>

                    <TestimonialQuote
                        quote="O nosso objetivo é continuar construindo um time de elite, composto por profissionais excepcionais que desafiam uns aos outros a performar no mais alto nível."
                        name="Eduardo Prado"
                        role="CEO"
                    />
                </div>
            </div>
        </section>
    );
}