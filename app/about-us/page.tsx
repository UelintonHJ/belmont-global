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

const expertisePillars = [
    {
        number: "1",
        title: "Visão Macroeconômica",
        description:
            "A pesquisa macro global atua como a espinha dorsal do nosso processo de investimento.",
    },
    {
        number: "2",
        title: "Estruturação de Operações",
        description:
            "Buscamos estruturar posições convexas, nas quais o potencial de ganho supera significativamente o risco de perda.",
    },
    {
        number: "3",
        title: "Gestão de Riscos",
        description:
            "Nosso processo de gerenciamento de risco é focado em maximizar os retornos potenciais, mantendo a rigorosa preservação do capital investido.",
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

            <section
                className={styles.expertiseSection}
                aria-labelledby="expertise-title"
            >
                <div 
                    className={styles.decorativeBlock}
                    aria-hidden="true"
                />

                <div className={styles.expertiseContent}>
                    <div className={styles.expertiseIntroduction}>
                        <div className={styles.expertiseEyebrow}>
                            <div className={styles.expertiseOctagon}>
                                <svg
                                    className={styles.expertiseOctagonSvg}
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

                                <span className={styles.expertiseOctagonNumber}>
                                    02
                                </span>
                            </div>

                            <span className={styles.expertiseEyebrowLabel}>
                                ABORDAGEM DE INVESTIMENTO
                            </span>
                        </div>

                        <h2
                            id="expertise-title"
                            className={styles.expertiseTitle}
                        >
                            Três Pilares de Expertise
                        </h2>

                        <div className={styles.expertiseDescriptionGrid}>
                            <p>
                                Nossa abordagem de gestão combina estratégias
                                direcionais, de valor relativo (relative value) e 
                                derivativos, desenhadas para gerar retornos
                                descorrelacionados e complementares através de uma
                                ampla gama de soluções de investimento.
                            </p>

                            <p>
                                Diferenciamos nosso processo de investimento por meio 
                                de três pilares fundamentais: visão macroeconômica,
                                estruturação de operações e gestão de risco.
                            </p>
                        </div>
                    </div>

                    <div className={styles.expertisePillarsGrid}>
                        <figure className={styles.expertiseImageContainer}>
                            <Image 
                                src="/images/pillars-expertise-img.webp"
                                alt=""
                                width={544}
                                height={408}
                                sizes="(max-width: 790px) calc(100vw - 40px), (max-width: 1100px) 45vw, 600px"
                                className={styles.expertiseImage}
                            />
                        </figure>

                        <ol className={styles.expertisePillarsList}>
                            {expertisePillars.map((pillar) => (
                                <li
                                    key={pillar.number}
                                    className={styles.expertisePillar}
                                >
                                    <span
                                        className={styles.expertisePillarNumber}
                                        aria-hidden="true"
                                    >
                                        {pillar.number}
                                    </span>

                                    <div className={styles.expertisePillarContent}>
                                        <h3 className={styles.expertisePillarTitle}>
                                            {pillar.title}
                                        </h3>

                                        <p className={styles.expertisePillarDescription}>
                                            {pillar.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            <section
                className={styles.macroThinkingSection}
                aria-labelledby="macro-thinking-title"
            >
                <div className={styles.macroThinkingContent}>
                    <span
                        className={styles.macroThinkingNumber}
                        aria-hidden="true"
                    >
                        01
                    </span>

                    <div className={styles.macroThinkingGrid}>
                        <div className={styles.macroThinkingCopy}>
                            <h2
                                id="macro-thinking-title"
                                className={styles.macroThinkingTitle}
                            >
                                Visão Macroeconômica
                            </h2>

                            <div className={styles.macroThinkingTopics}>
                                <article
                                    className={styles.macroThinkingTopic}
                                >
                                    <h3
                                        className={
                                            styles.macroThinkingTopicTitle
                                        }
                                    >
                                        Pesquisa &amp; Análise
                                    </h3>

                                    <p
                                        className={
                                            styles.macroThinkingTopicDescription
                                        }
                                    >
                                        Contamos com uma rede global de mentes 
                                        analíticas e independentes para
                                        fundamentar nosso processo de research
                                        e análise.
                                    </p>
                                </article>

                                <article
                                    className={styles.macroThinkingTopic}
                                >
                                    <h3
                                        className={
                                            styles.macroThinkingTopicTitle
                                        }
                                    >
                                        Debate &amp; Contraponto
                                    </h3>

                                    <p
                                        className={
                                            styles.macroThinkingTopicDescription
                                        }
                                    >
                                        Incentivamos o livre fluxo de
                                        informações e a transparência em toda 
                                        a gestora. Mantemos um ambiente 
                                        formado por profissionais de 
                                        investimento criativos e autônimos, 
                                        no qual ideias originais e visões 
                                        diferenciadas são estimuladas e 
                                        constantemente colocadas à prova.
                                    </p>
                                </article>

                                <article 
                                    className={styles.macroThinkingTopic}
                                >
                                    <h3
                                        className={
                                            styles.macroThinkingTopicTitle
                                        }
                                    >
                                        Pensamento Não Consensual
                                    </h3>

                                    <p
                                        className={
                                            styles.macroThinkingTopicDescription
                                        }
                                    >
                                        Acreditamos no valor do pensamento 
                                        contrariam (independente do consenso).
                                        Humildade intelectual, flexibilidade 
                                        e visão analítica são fundamentais 
                                        para a geração de valor no longo 
                                        prazo.
                                    </p>
                                </article>
                            </div>
                        </div>

                        <figure
                            className={styles.macroThinkingImageContainer}
                        >
                            <Image 
                                src="/images/macro-thinking-img.webp"
                                alt="Análise e o pensamento macroeconômico"
                                width={864}
                                height={1232}
                                sizes="(max-width: 790px) calc(100vw - 40px), (max-width: 1200px) 46vw, 592px"
                                className={styles.macroThinkingImage}
                            />
                        </figure>
                    </div>
                </div>
            </section>
            <section
                className={styles.tradeStructureSection}
                aria-labelledby="trade-structure-title"
            >
                <div className={styles.tradeStructureContent}>
                    <div className={styles.tradeStructureGrid}>
                        <div
                            className={styles.tradeStructureVisuals}
                            aria-label="Imagens ilustrativas"
                        >
                            <figure
                                className={`${styles.tradeStructureImageFrame} ${styles.tradeStructureImageFramePrimary}`}
                            >
                                <Image 
                                    src="/images/work-trade-img.webp"
                                    alt=""
                                    width={921}
                                    height={1152}
                                    aria-hidden="true"
                                    sizes="(max-width: 790px) min(100vw - 40px, 474px), (max-width: 1100px) 42vw, 474px"
                                    className={styles.tradeStructureImage}
                                />
                            </figure>

                            <figure
                                className={`${styles.tradeStructureImageFrame} ${styles.tradeStructureImageFrameSecondary}`}
                            >
                                <Image 
                                    src="/images/trade-structure-img.webp"
                                    alt=""
                                    width={912}
                                    height={1180}
                                    aria-hidden="true"
                                    sizes="(max-width: 790px) min(88vw, 355px), (max-width: 1100px) 34vw, 355px"
                                    className={styles.tradeStructureImage}
                                />
                            </figure>
                        </div>

                        <div className={styles.tradeStructureCopy}>
                            <span
                                className={styles.tradeStructureNumber}
                                aria-hidden="true"
                            >
                                02
                            </span>

                            <h2
                                id="trade-structure-title"
                                className={styles.tradeStructureTitle}
                            >
                                Estruturação de Operações
                            </h2>

                            <div className={styles.tradeStructureDescription}>
                                <p>
                                    A estruturação de operações com assimetria 
                                    inerente de resultado (P&amp;L) nos permite 
                                    compreender melhor as probabilidades dos 
                                    diferentes cenários precificados pelo mercado 
                                    e contruir relações atrativas de 
                                    risco-retorno.¹
                                </p>

                                <p>
                                    Criamos assimetria por meio do uso de opções
                                    e estruturas derivativas equivalentes, bem 
                                    como pelo uso disciplinado de ordens de
                                    stop-loss.²
                                </p>

                                <p>
                                    As visões sobre a melhor estrutura para cada 
                                    operações são ativamente debatidas em conjunto 
                                    com os cenários de mercado. Nossos 
                                    profissionais são incentivados a colaborar e 
                                    integrar suas especialidades em estruturação 
                                    nos mais diversos mercados, visando otimizar 
                                    a rentabilidade das estratégias.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={styles.tradeStructureLegalNotes}
                        aria-label="Notes legais"
                    >
                        <p className={styles.tradeStructureLegalNote}>
                            <strong>
                                1. Referências a Rentabilidade Futura e Isenção 
                                de Responsabilidade:
                            </strong>{" "}
                            Referências a rentabilidade futura não constituem 
                            promessa ou garantia de resultados para os 
                            investidores. Quaisquer projeções, simulações ou 
                            cenários contidos neste site/material têm caráter 
                            meramente ilustrativo e não devem ser interpretados 
                            como recomendação de investimento ou aconselhamento
                            financeiro. A Belmont Global não presta declarações,
                            garantias ou compromissos de que qualquer
                            rentabilidade indicativa será alcançada no futuro, 
                            tampouco de que os objetivos e políticas de 
                            investimento dos nossos fundos serão atingidos. 
                            Rentabilidade passada não representa garantia de 
                            rentabilidade futura. Embora nossos fundos estejam 
                            sujeitos aos riscos de mercado comuns a outras 
                            modalidades de investimento, incluindo 
                            a volatilidade, as estratégias adotadas utilizam 
                            técnicas de gestão que podem incluir alavancagem e 
                            operações derivativas complexas, as quais podem 
                            aumentar a exposição e o risco de perdas 
                            patrimoniais.
                        </p>

                        <p className={styles.tradeStructureLegalNote}>
                            <strong>
                                2. Ordens de Stop-Loss e Stop-Limit em Contratos 
                                Futuros:
                            </strong>{" "}
                            Determinadas bolsas reguladas podem permitir a 
                            execução de ordens de stop-loss ou stop-limit em 
                            contratos futuros e derivativos. Tais ferramentas 
                            visam limitar a exposição do fundo a perdas 
                            decorrentes de oscilações do mercado, contudo, não 
                            garantem a limitação absoluta dos prejuízos ao valor 
                            pretendido, uma vez que condições atípicas de 
                            mercado, liquidez ou volatilidade extrema pode
                            impossibilitar a execução ou preço de stop 
                            estipulado.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}