import Image from "next/image";

import styles from "../styles/CareersTalentDevelopment.module.css";

const paragraphs = [
    "A seleção e o desenvolvimento de talentos são pilares fundamentais para o nosso sucesso. Investimos expressivamente em nossas pessoas, bem como na infraestrutura necessária para suportar o seu crescimento.",
    "Nossa abordagem para identificar profissionais fora da curva combina avaliações cognitivas e comportamentais, resolução de problemas reais de mercado e análises criteriosas para compreender como cada indivíduo pensa, aprende e performa sob cenários de alta pressão."
];

export function CareersTalentDevelopment() {
    return (
        <section
            className={styles.section}
            aria-label="Desenvolvimento de talentos"
        >
            <div className={styles.content}>
                <Image
                    className={styles.image}
                    src="/images/talents-img.webp"
                    alt="Profissionais em um ambiente de trabalho"
                    width={1189}
                    height={880}
                    unoptimized
                    sizes="(max-width: 760px) calc(100vw - 2.5rem), (max-width: 1230px) 50vw, 573px"
                />

                <div className={styles.copy}>
                    {paragraphs.map((paragraph, index) => (
                        <p
                            className={styles.paragraph}
                            key={index}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}