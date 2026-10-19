import type { Metadata } from "next";
import Image from "next/image";

import styles from "./AboutUs.module.css";

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

export const metadata: Metadata = {
    title: "Quem Somos | Belmont Global",
    description:
        "Conheça a Belmont Global, plataforma global de gestão de investimentos alternativos fundada em 2002.",
};

export default function AboutUsPage() {
    return (
        <main>
            <section
                className={styles.section}
                aria-labelledby="about-us-title"
            >
                <div className={styles.content}>
                    <div className={styles.introduction}>
                        <div className={styles.eyebrow}>
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
                                    01
                                </span>
                            </div>

                            <span className={styles.eyebrowLabel}>
                                INTRODUÇÃO
                            </span>
                        </div>

                        <h1
                            id="about-us-title"
                            className={styles.title}
                        >
                            Quem Somos
                        </h1>

                        <div className={styles.description}>
                            <p>
                                Fundada em 2002, somos uma plataforma global e
                                líder em gestão de investimentos alternativos,
                                especializada em estratégias macro globais e
                                ativos digitais. Gestamos recursos para
                                investidores institucionais no mundo todo,
                                incluindo fundos soberanos, fundos de pensão
                                corporativos e públicos, fundações e endowments.
                            </p>

                            <p>
                                Contamos com mais de 1.050 colaboradores, mais
                                de 145 Gestores de Carteira* e 9 Hubs com
                                escritórios em São Paulo, Nova York, Londres,
                                Genebra, Jersey, Hong Kong, Abu Dhabi, Cingapura
                                e Austin.
                            </p>

                            <p>
                                A gestora é liderada pelo CEO, Eduardo Prado.
                            </p>
                        </div>
                    </div>

                    <figure className={styles.imageContainer}>
                        <Image
                            src="/images/aboutUs-img.webp"
                            alt="Imagem institucional da Belmont Global"
                            width={843}
                            height={1264}
                            priority
                            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 45vw, 540px"
                            className={styles.image}
                        />
                    </figure>
                </div>
            </section>

            <section
                className={styles.quoteSection}
                aria-label="Depoimento de Eduardo Prado"
            >
                <div className={styles.quoteContent}>
                    <figure className={styles.portraitContainer}>
                        <Image
                            src="/images/eduardo-prado-img.webp"
                            alt="Eduardo Prado, diretor executivo da Belmont Global"
                            width={1008}
                            height={1043}
                            sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) 45vw, 504px"
                            className={styles.portrait}
                        />
                    </figure>

                    <div className={styles.quoteCopy}>
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
                    </div>
                </div>
            </section>

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

            <section
                className={styles.differentialsSection}
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
        </main>
    );
}