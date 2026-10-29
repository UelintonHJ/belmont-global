import { ScrollReveal } from "@/app/components/ScrollReveal";

import styles from "../styles/CareersIntroduction.module.css";

export function CareersIntroduction() {
    return (
        <section
            className={styles.section}
            aria-label="Nossa filosofia e cultura"
        >
            <div className={styles.content}>
                <ScrollReveal as="p" variant="up" className={styles.paragraph}>
                    Na Belmont Global, acreditamos que talentos
                    excepcionais não são definidos apenas pela
                    formação acadêmica ou pela trajetória
                    profissional, mas sim pela sua forma de pensar:
                    como raciocinam diante da complexidade,
                    questionam premissas, gerenciam riscos, enxergam
                    oportunidades negligenciadas pelo mercado e 
                    agem com disciplina sob pressão.
                </ScrollReveal>

                <ScrollReveal as="p" variant="up" className={`${styles.paragraph} ${styles.paragraphDelayReveal}`}>
                    Nosso ambiente de trabalho é guiado por uma
                    cultura de excelência impulsionada pela
                    colaboração, inovação, responsabilidade e um
                    foco compartilhado em performance — valores
                    ancorados em nossa tradição como uma das
                    principais gestoras de investimento macro do
                    mercado global.
                </ScrollReveal>
            </div>
        </section>
    );
}