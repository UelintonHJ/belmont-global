"use client";

import { useEffect, useRef } from "react";

import { 
    geoGraticule, 
    geoNaturalEarth1, 
    geoPath,
} from "d3-geo";

import { ScrollReveal } from "@/app/components/ScrollReveal";

import landData from "../../about-us/data/ne_110m_land.json";

import styles from "../styles/BgDigitalGlobalSupport.module.css";

type OfficeLocation = {
    city: string;
    latitude: number;
    longitude: number;
    labelOffset: {
        x: number;
        y: number;
        align: CanvasTextAlign;
    };
};

const offices: OfficeLocation[] = [
    {
        city: "São Paulo",
        latitude: -23.5505,
        longitude: -46.6333,
        labelOffset: {
            x: 14,
            y: 20,
            align: "left",
        },
    },
    {
        city: "Nova York",
        latitude: 40.7128,
        longitude: -74.006,
        labelOffset: {
            x: 14,
            y: -14,
            align: "left"
        },
    },
    {
        city: "Londres",
        latitude: 51.5072,
        longitude: -0.1276,
        labelOffset: {
            x: -14,
            y: -36,
            align: "right"
        },
    },
    {
        city: "Genebra",
        latitude: 46.2044,
        longitude: 6.1432,
        labelOffset: {
            x: 14,
            y: 29,
            align: "left",
        },
    },
    {
        city: "Jersey",
        latitude: 49.1868,
        longitude: -2.1313,
        labelOffset: {
            x: 14,
            y: -7,
            align: "left",
        },
    },
    {
        city: "Hong Kong",
        latitude: 22.3193,
        longitude: 114.1694,
        labelOffset: {
            x: 14,
            y: -14,
            align: "left",
        },
    },
    {
        city: "Abu Dhabi",
        latitude: 24.4539,
        longitude: 54.3773,
        labelOffset: {
            x: 14,
            y: -14,
            align: "left",
        },
    },
    {
        city: "Singapura",
        latitude: 1.3521,
        longitude: 103.8198,
        labelOffset: {
            x: 14,
            y: 20,
            align: "left",
        },
    },
    {
        city: "Austin",
        latitude: 30.2672,
        longitude: -97.7431,
        labelOffset: {
            x: -14,
            y: 20,
            align: "right",
        },
    },
];

const LAND_DATA = landData as never;

function drawWorldMap(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
) {
    context.clearRect(0, 0, width, height);

    const horizontalPadding = width * 0.035;
    const verticalPadding = 
        width <= 800
            ? height * 0.02
            : height * 0.055;

    const projection =  geoNaturalEarth1()
        .fitExtent(
            [
                [
                    horizontalPadding,
                    verticalPadding,
                ],
                [
                    width - horizontalPadding,
                    height * 0.76,
                ],
            ],
            LAND_DATA,
        );

    const path = geoPath(projection, context);

    context.beginPath();
    path(LAND_DATA);

    context.fillStyle = "rgba(98, 202, 195, 0.13)";
    context.fill();

    context.strokeStyle = "rgba(98, 202, 195, 0.35)";
    context.lineWidth = Math.max(0.65, width * 0.0005);
    context.stroke();

    const graticule = geoGraticule()
        .step([30, 30])();

    context.beginPath();
    path(graticule as never);

    context.strokeStyle = "rgba(255, 255, 255, 0.09)";
    context.lineWidth = 0.65;
    context.stroke();

    const labelScale = Math.min(
        1,
        Math.max(0.72, width / 1200),
    );

    const fontSize = Math.min(
        16,
        Math.max(11, width * 0.0115),
    );

    context.font = `400 ${fontSize}px "Titillium Web", sans-serif`;
    context.textBaseline = "middle";

    offices.forEach((office) => {
        const coordinates = projection([
            office.longitude,
            office.latitude,
        ]);

        if (!coordinates) {
            return;
        }

        const [x, y] = coordinates;

        const offsetX =
            office.labelOffset.x * labelScale;

        const offsetY =
            office.labelOffset.y * labelScale;
        
        const labelX = x + offsetX;
        const labelY = y + offsetY;

        context.beginPath();
        context.arc(x, y, 5, 0, Math.PI * 2);

        context.fillStyle = "rgba(255, 255, 255, 0.16)";
        context.fill();

        context.beginPath();
        context.arc(x, y, 2.8, 0, Math.PI * 2);

        context.fillStyle = "#ffffff";
        context.fill();

        context.beginPath();
        context.moveTo(x, y);

        context.lineTo(
            labelX - (office.labelOffset.align === "left" ? 4 : -4),
            labelY,
        );

        context.strokeStyle = "rgba(255, 255, 255, 0.55)";
        context.lineWidth = 0.8;
        context.stroke();

        context.textAlign = office.labelOffset.align;
        context.fillStyle = "#ffffff";

        context.fillText(
            office.city,
            labelX,
            labelY,
        );
    });
}

export function BgDigitalGlobalSupport() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return;
        }

        const context = canvas.getContext("2d");

        if (!context) {
            return;
        }

        function resizeCanvas(
            canvasElement: HTMLCanvasElement,
            canvasContext: CanvasRenderingContext2D,
        ) {
            const bounds = canvasElement.getBoundingClientRect();

            if (bounds.width <= 0 || bounds.height <= 0) {
                return;
            }

            const pixelRatio = Math.min(
                window.devicePixelRatio || 1,
                2,
            );

            canvasElement.width = Math.round(
                bounds.width * pixelRatio,
            );

            canvasElement.height = Math.round(
                bounds.height * pixelRatio,
            );

            canvasContext.setTransform(
                pixelRatio,
                0,
                0,
                pixelRatio,
                0,
                0,
            );

            drawWorldMap(
                canvasContext,
                bounds.width,
                bounds.height,
            );
        }

        const handleResize = () => {
            resizeCanvas(canvas, context);
        };

        const resizeObserver = new ResizeObserver(handleResize);

        resizeObserver.observe(canvas);

        handleResize();

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <section
            className={styles.section}
            aria-labelledby="bg-digital-global-support-title"
        >
            <div
                className={styles.mapLayer}
                aria-hidden="true"
            >
                <canvas 
                    ref={canvasRef}
                    className={styles.mapCanvas}
                />
            </div>

            <div className={styles.content}>
                <div className={styles.description}>
                    <h2
                        id="bg-digital-global-support-title"
                        className={styles.title}
                    >
                        <ScrollReveal
                            as="span"
                            variant="up"
                            className={styles.titleAccent}
                        >
                            Suporte Global 24/7
                        </ScrollReveal>

                        <ScrollReveal 
                            as="span"
                            variant="up"
                            className={`${styles.titleMain} ${styles.titleMainReveal}`}>
                            Um Modelo à Altura de um Mercado Ininterrupto
                        </ScrollReveal>
                    </h2>

                    <ScrollReveal 
                        as="p"
                        variant="up"
                        className={styles.text}
                    >
                        A BG Digital utiliza a presença global da 
                        Belmont Global em 9 escritórios para garantir
                        acesso contínuo a suporte de negociação,
                        gestão de risco e operações em qualquer fuso
                        horário, 24 horas por dia, 7 dias por semana,
                        365 dias por ano, em sintonia com o ritmo do
                        mercado de ativos digitais.
                    </ScrollReveal>
                </div>

                <ul
                    className={styles.srOnly}
                    aria-label="Escritórios globais da Belmont Global"
                >
                    {offices.map((office) => (
                        <li key={office.city}>
                            {office.city}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}