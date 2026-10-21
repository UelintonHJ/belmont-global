import Image from "next/image";

import styles from "../styles/AboutResults.module.css";

export default function AboutResults() {
    return (
        <section
            className={styles.resultsSection}
            aria-label="Excelência e resultados"
        >
            <div className={styles.resultsContent}>
                <p className={styles.resultsDescription}>
                    Ao combinar a excelência de nossa equipe, tecnologia
                    inovadora e uma sólida infraestrutura institucional,
                    buscamos entregar os melhores resultados possíveis
                    para nossos clientes, mantendo-nos na vanguarda de
                    um mercado em constante evolução.
                </p>

                <figure>
                    <Image
                        src="/images/best-results-img.webp"
                        alt=""
                        width={1312}
                        height={814}
                        sizes="(max-width: 790px) calc(100vw - 40px), (max-width: 1328px) 46vw, 600px"
                        className={styles.resultsImage}
                    />
                </figure>
            </div>
        </section>
    );
}