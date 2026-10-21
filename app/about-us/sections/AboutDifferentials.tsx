import styles from "../styles/AboutDifferentials.module.css";

import { BsPersonArmsUp } from "react-icons/bs";
import { LuMonitorSmartphone } from "react-icons/lu";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdAnalytics } from "react-icons/md";
import { PiTreeStructureFill } from "react-icons/pi";
import { FaSearchDollar } from "react-icons/fa";

const differentials = [
    {
        title: "Profissionais Excecionais",
        description:
            "Nosso time amplo e diversificado é impulsionado por uma cultura colaborativa, na qual incentivamos o desenvolvimento contínuo de talentos e evoluímos como uma comunidade de mentes analíticas, criativas e independentes.",
        Icon: BsPersonArmsUp,
    },
    {
        title: "Tecnologia de Ponta",
        description:
            "Investimentos robustos e constante inovação garantem que nossos profissionais disponham das melhores ferramentas e sistemas para alcançar a excelência.",
        Icon: LuMonitorSmartphone,
    },
    {
        title: "Produtos de Investimento Diversificados",
        description:
            "Nossa ampla prateleira de produtos e fundos oferece estratégias distintas e complementares, desenhadas para atender às mais diversas necessidades de alocação de carteira.",
        Icon: FaMoneyBillTrendUp,
    },
    {
        title: "Análise Macro de Excelência",
        description:
            "Nossa capacidade de análise e pesquisa macroeconômica é nosso grande diferencial competitivo, direcionando nossa filosofia de gestão independentemente da estratégia adotada.",
        Icon: MdAnalytics,
    },
    {
        title: "Especialização em Estruturação",
        description:
            "Utilizamos nossa sólida experiência em estruturação de operações para otimizar os resultados das teses de investimento geradas por nossa equipe de pesquisa.",
        Icon: PiTreeStructureFill,
    },
    {
        title: "Excelência em Gestão de Risco",
        description:
            "O uso intensivo e a constante evolução de testes de estresse (stress testing) nos permitem mapear riscos de cauda e mitigar cenários de perdas potenciais.",
        Icon: FaSearchDollar,
    },
];

export default function AboutDifferentials() {
    return (
        <section
            className={styles.differentialsSection}
            aria-labelledby="differentials-title"
        >
            <div className={styles.differentialsContent}>
                <h2
                    id="differentials-title"
                    className={styles.differentialsTitle}
                >
                    Diferenciais da Belmont Global
                </h2>

                <ul className={styles.differentialsGrid}>
                    {differentials.map(
                        ({ title, description, Icon }) => (
                            <li
                                key={title}
                                className={styles.differentialCard}
                            >
                                <Icon
                                    className={styles.differentialIcon}
                                    aria-hidden="true"
                                    focusable="false"
                                />

                                <h3
                                    className={styles.differentialTitle}
                                >
                                    {title}
                                </h3>

                                <p
                                    className={
                                        styles.differentialDescription
                                    }
                                >
                                    {description}
                                </p>
                            </li>
                        ),
                    )}
                </ul>
            </div>
        </section>
    );
}