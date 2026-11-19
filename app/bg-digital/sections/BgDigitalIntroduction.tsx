import styles from "../styles/BgDigitalIntroduction.module.css";

export function BgDigitalIntroduction() {
    return (
        <section
            className={styles.section}
            aria-labelledby="bg-digital-introduction-title"
        >
            <div className={styles.container}>
                <div className={styles.eyebrow}>
                    <span className={styles.eyebrowNumber}>
                        01
                    </span>

                    <span className={styles.eyebrowLabel}>
                        INTRODUÇÃO
                    </span>
                </div>

                <h2
                    id="bg-digital-introduction-title"
                    className={styles.title}
                >
                    <span className={styles.titleAccent}>
                        Sobre a
                    </span>

                    <span className={styles.titleMain}>
                        BG Digital
                    </span>
                </h2>

                <div className={styles.content}>
                    <div className={styles.description}>
                        <p>
                            A BG Digital é a divisão dedicada à gestão de 
                            ativos digitais da Belmont Global. Oferecemos 
                            a investidores institucionais acesso a uma 
                            ampla variedade de oportunidades de 
                            investimento no ecossistema de criptoativos 
                            e blockchain, impulsionados por uma 
                            infraestrutura tecnológica de classe 
                            mundial, expertise comprovada em gestão de 
                            riscos, governança e controles rigorosos.
                        </p>
                    </div>

                    <div className={styles.multistrategy}>
                        <h3 className={styles.subtitle}>
                            BG DIGITAL MULTIESTRATÉGIA
                        </h3>

                        <p className={styles.multistrategyDescription}>
                            A BG Digital adota uma abordagem 
                            multiestratégica diversificada para capturar 
                            oportunidades de investimento e trading ao 
                            longo de todo o ecossistema de ativos 
                            digitais. Além de contar com o suporte de 
                            mais de 1.100 profissionais do Grupo Belmont 
                            Global, a BG Digital construiu uma equipe 
                            global robusta, que combina de forma única 
                            talentos nativos do universo cripto e 
                            especialistas do mercado financeiro 
                            tradicional.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}