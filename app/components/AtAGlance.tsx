import Image from "next/image";
import type { IconType } from "react-icons";

import { BsPersonArmsUp } from "react-icons/bs";
import { LuMonitorSmartphone } from "react-icons/lu";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdAnalytics } from "react-icons/md";
import { PiTreeStructureFill } from "react-icons/pi";
import { FaSearchDollar } from "react-icons/fa";

import styles from "./AtAGlance.module.css";
import { ScrollReveal } from "./ScrollReveal";

const pillars: { title: string; Icon: IconType }[] = [
    {
        title: "Profissionais Excecionais",
        Icon: BsPersonArmsUp,
    },
    {
        title: "Tecnologia de Ponta",
        Icon: LuMonitorSmartphone,
    },
    {
        title: "Produtos de Investimento Diversificados",
        Icon: FaMoneyBillTrendUp,
    },
    {
        title: "Análise Macro de Excelência",
        Icon: MdAnalytics,
    },
    {
        title: "Especialização em Estruturação",
        Icon: PiTreeStructureFill,
    },
    {
        title: "Excelência em Gestão de Risco",
        Icon: FaSearchDollar,
    },
];

export function AtAGlance() {
    return (
        <section
            id="at-a-glance"
            className={styles.section}
            aria-labelledby="at-a-glance-title"
        >
            <div
                className={styles.decorativeBlock}
                aria-hidden="true"
            />

            <div className={styles.content}>
                <div className={styles.intro}>
                    <ScrollReveal
                        as="div"
                        className={styles.eyebrow}
                    >
                        <div className={styles.octagon}>
                            <svg
                                className={styles.octagonSvg}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 90 90"
                                fill="none"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <polygon
                                    points="26,1 64,1 89,26 89,64 64,89 26,89 1,64 1,26"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                />
                            </svg>

                            <span className={styles.octagonNumber}>
                                02
                            </span>
                        </div>

                        <span className={styles.eyebrowLabel}>
                            VISÃO GERAL
                        </span>
                    </ScrollReveal>

                    <h2
                        id="at-a-glance-title"
                        className={styles.title}
                    >
                        <ScrollReveal
                            as="span"
                            className={styles.titleReveal}
                        >
                            Pilares da Belmont Global
                        </ScrollReveal>
                    </h2>
                </div>

                <ul className={styles.grid}>
                    {pillars.map(({ title, Icon }) => (
                        <li
                            key={title}
                            className={styles.pillar}
                        >
                            <div className={styles.pillarContent}>
                                <div className={styles.iconFrame}>
                                    <ScrollReveal
                                        as="span"
                                        variant="scaleDown"
                                        className={styles.hexagonReveal}
                                    >
                                        <Image
                                            src="/images/hexagon-group.svg"
                                            alt=""
                                            aria-hidden="true"
                                            width={110}
                                            height={110}
                                            sizes="110px"
                                            className={styles.hexagon}
                                        />
                                    </ScrollReveal>

                                    <ScrollReveal
                                        as="span"
                                        variant="grow"
                                        className={styles.iconReveal}
                                    >
                                        <Icon
                                            className={styles.icon}
                                            aria-hidden="true"
                                        />
                                    </ScrollReveal>
                                </div>

                                <h3 className={styles.pillarTitle}>
                                    <ScrollReveal
                                        as="span"
                                        variant="up"
                                        className={styles.pillarTitleReveal}
                                    >
                                        {title}
                                    </ScrollReveal>
                                </h3>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}