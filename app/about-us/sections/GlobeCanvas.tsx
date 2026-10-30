"use client"

import { useEffect, useRef } from "react";

import landData from "../data/ne_110m_land.json";

import { geoGraticule, geoOrthographic, geoPath } from "d3-geo";

type GlobeCanvasProps = {
    className?: string;
    mode?: "investment" | "contact";
};

type GeoPoint = [longitude: number, latitude: number];

type LandPolygon = GeoPoint[][];

type LandGeometry =
    | {
        type: "Polygon";
        coordinates: LandPolygon;
    }
    | {
        type: "MultiPolygon";
        coordinates: LandPolygon[];
    };

type LandFeature = {
    geometry: LandGeometry;
};

const LAND_FEATURES = (
    landData as unknown as {
        features: LandFeature[];
    }
).features;

type MarkerCategory =
    | "Renda Fixa"
    | "Câmbio"
    | "Commodities"
    | "Renda Variável"
    | "Ativos Digitais"
    | "Crédito Privado";

type GlobeMarker = {
    city: string;
    longitude: number;
    latitude: number;
    category: MarkerCategory;
    color: string;
};

const GLOBE_MARKERS: GlobeMarker[] = [
    { city: "Nova York", longitude: -74.006, latitude: 40.7128, category: "Renda Fixa", color: "#FFBB37" },
    { city: "Brasília", longitude: -47.8825, latitude: -15.7942, category: "Renda Fixa", color: "#FFBB37" },
    { city: "Frankfurt", longitude: 8.6821, latitude: 50.1109, category: "Renda Fixa", color: "#FFBB37" },
    { city: "Tóquio", longitude: 139.6917, latitude: 35.6762, category: "Renda Fixa", color: "#FFBB37" },
    { city: "Curitiba", longitude: -49.2733, latitude: -25.4284, category: "Renda Fixa", color: "#FFBB37" },
    { city: "Belo Horizonte", longitude: -43.9378, latitude: -19.9191, category: "Renda Fixa", color: "#FFBB37" },
    { city: "Porto Alegre", longitude: -51.2177, latitude: -30.0346, category: "Renda Fixa", color: "#FFBB37" },
    { city: "Florianópolis", longitude: -48.5482, latitude: -27.5954, category: "Renda Fixa", color: "#FFBB37" },
    { city: "Campinas", longitude: -47.0608, latitude: -22.9056, category: "Renda Fixa", color: "#FFBB37" },

    { city: "Londres", longitude: -0.1276, latitude: 51.5072, category: "Câmbio", color: "#9CEA4F" },
    { city: "Cingapura", longitude: 103.8198, latitude: 1.3521, category: "Câmbio", color: "#9CEA4F" },
    { city: "Zurique", longitude: 8.5417, latitude: 47.3769, category: "Câmbio", color: "#9CEA4F" },
    { city: "Foz do Iguaçu", longitude: -54.5882, latitude: -25.5478, category: "Câmbio", color: "#9CEA4F" },
    { city: "Manaus", longitude: -60.0217, latitude: -3.119, category: "Câmbio", color: "#9CEA4F" },
    { city: "Corumbá", longitude: -57.6533, latitude: -19.0092, category: "Câmbio", color: "#9CEA4F" },
    { city: "Cidade do Leste", longitude: -54.611, latitude: -25.5095, category: "Câmbio", color: "#9CEA4F" },
    { city: "Rivera", longitude: -55.5508, latitude: -30.9053, category: "Câmbio", color: "#9CEA4F" },

    { city: "Genebra", longitude: 6.1432, latitude: 46.2044, category: "Commodities", color: "#9472F6" },
    { city: "Chicago", longitude: -87.6298, latitude: 41.8781, category: "Commodities", color: "#9472F6" },
    { city: "Rondonópolis", longitude: -54.6356, latitude: -16.4673, category: "Commodities", color: "#9472F6" },
    { city: "Ribeirão Preto", longitude: -47.8103, latitude: -21.1704, category: "Commodities", color: "#9472F6" },
    { city: "Sorriso", longitude: -55.7089, latitude: -12.5453, category: "Commodities", color: "#9472F6" },
    { city: "Rio Verde", longitude: -50.9292, latitude: -17.7923, category: "Commodities", color: "#9472F6" },
    { city: "Parauapebas", longitude: -49.9032, latitude: -6.0675, category: "Commodities", color: "#9472F6" },
    { city: "Santos", longitude: -46.3289, latitude: -23.9608, category: "Commodities", color: "#9472F6" },

    { city: "Hong Kong", longitude: 114.1694, latitude: 22.3193, category: "Renda Variável", color: "#E98EEB" },
    { city: "São Paulo", longitude: -46.6333, latitude: -23.5505, category: "Renda Variável", color: "#E98EEB" },
    { city: "Rio de Janeiro", longitude: -43.1729, latitude: -22.9068, category: "Renda Variável", color: "#E98EEB" },
    { city: "Xangai", longitude: 121.4737, latitude: 31.2304, category: "Renda Variável", color: "#E98EEB" },
    { city: "Seul", longitude: 126.978, latitude: 37.5665, category: "Renda Variável", color: "#E98EEB" },
    { city: "Sydney", longitude: 151.2093, latitude: -33.8688, category: "Renda Variável", color: "#E98EEB" },
    { city: "Toronto", longitude: -79.3832, latitude: 46.6532, category: "Renda Variável", color: "#E98EEB" },
    { city: "Amsterdã", longitude: 4.9041, latitude: 52.3676, category: "Renda Variável", color: "#E98EEB" },

    { city: "Abu Dhabi", longitude: 54.3773, latitude: 24.4539, category: "Ativos Digitais", color: "#61D9FF" },
    { city: "Austin", longitude: -97.7431, latitude: 30.2672, category: "Ativos Digitais", color: "#61D9FF" },
    { city: "Jersey", longitude: -2.1313, latitude: 49.1868, category: "Ativos Digitais", color: "#61D9FF" },
    { city: "Dubai", longitude: 55.2708, latitude: 25.2048, category: "Ativos Digitais", color: "#61D9FF" },
    { city: "Zug", longitude: 8.5155, latitude: 47.1662, category: "Ativos Digitais", color: "#61D9FF" },
    { city: "São Lourenço do Sul", longitude: -51.9789, latitude: -31.3653, category: "Ativos Digitais", color: "#61D9FF" },
    { city: "Recife", longitude: -34.877, latitude: -8.0476, category: "Ativos Digitais", color: "#61D9FF" },
    { city: "Miami", longitude: -80.1918, latitude: 25.7617, category: "Ativos Digitais", color: "#61D9FF" },
    { city: "Lisboa", longitude: -9.1393, latitude: 38.7223, category: "Ativos Digitais", color: "#61D9FF" },

    { city: "Boston", longitude: -71.0589, latitude: 42.3601, category: "Crédito Privado", color: "#FDFF87" },
    { city: "Barueri", longitude: -46.8761, latitude: -23.5113, category: "Crédito Privado", color: "#FDFF87" },
    { city: "Joinville", longitude: -48.8457, latitude: -26.3045, category: "Crédito Privado", color: "#FDFF87" },
    { city: "Caxias do Sul", longitude: -51.1796, latitude: -29.1634, category: "Crédito Privado", color: "#FDFF87" },
    { city: "Uberlândia", longitude: -48.2772, latitude: -18.9186, category: "Crédito Privado", color: "#FDFF87" },
    { city: "Criciúma", longitude: -49.3697, latitude: -28.6775, category: "Crédito Privado", color: "#FDFF87" },
    { city: "Maringá", longitude: -51.9386, latitude: -23.4205, category: "Crédito Privado", color: "#FDFF87" },
    { city: "Goiânia", longitude: -49.2648, latitude: -16.6869, category: "Crédito Privado", color: "#FDFF87" },
    { city: "Charlotte", longitude: -80.8431, latitude: 35.2271, category: "Crédito Privado", color: "#FDFF87" },
]

function initializeGlobe(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    mode: "investment" | "contact",
) {
    const isContactMode = mode === "contact";
    const motionQuery = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    );

    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let rotation = 0;
    let previousTime = 0;
    let animationFrame = 0;
    let isPageVisible = !document.hidden;
    let animationTime = 0;

    function drawGlobe(ctx: CanvasRenderingContext2D) {
        if (width <= 0 || height <= 0) {
            return;
        }

        ctx.clearRect(0, 0, width, height);

        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width * 0.43, height * 0.43);

        const sphereGradient = ctx.createRadialGradient(
            centerX - radius * 0.32,
            centerY - radius * 0.36,
            radius * 0.04,
            centerX,
            centerY,
            radius
        );

        sphereGradient.addColorStop(0, "#29394d");
        sphereGradient.addColorStop(0.7, "#192433");
        sphereGradient.addColorStop(1, "#111722");

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = sphereGradient;
        ctx.fill();

        ctx.save()

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.clip();

        const projection = geoOrthographic()
            .translate([centerX, centerY])
            .scale(radius)
            .rotate([
                isContactMode
                    ? 35 - (rotation * 180) / Math.PI
                    : -(rotation * 180) / Math.PI,
                isContactMode ? -8 : 0,
                isContactMode ? -10 : 0,
            ]);

        const landPath = geoPath(projection, ctx);

        ctx.fillStyle = "#A8B49A"
        ctx.strokeStyle = "rgba(230, 220, 201, 0.72)";
        ctx.lineWidth = 1.1;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";

        const graticule = geoGraticule().step([30, 30])();

        ctx.fillStyle = "#A8B49A";

        for (const feature of LAND_FEATURES) {
            ctx.beginPath();
            landPath(feature as never);
            ctx.fill();
        }

        ctx.beginPath();
        landPath(graticule as never);
        ctx.strokeStyle = "rgba(225, 214, 190, 0.22)";
        ctx.lineWidth = 0.7;
        ctx.stroke();

        ctx.strokeStyle = "rgba(230, 220, 201, 0.72)";
        ctx.lineWidth = 1.1;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";

        for (const feature of LAND_FEATURES) {
            ctx.beginPath();
            landPath(feature as never);
            ctx.stroke();
        }

        for (const marker of GLOBE_MARKERS) {
            const latitudeRadians =
                (marker.latitude * Math.PI) / 180;

            const longitudeRadians =
                (marker.longitude * Math.PI) / 180 - 
                rotation + 
                (isContactMode ? (65 * Math.PI) / 180 : 0);

            const visibility =
                Math.cos(latitudeRadians) *
                Math.cos(longitudeRadians);

            if (visibility <= 0.015) {
                continue;
            }

            const projected = projection([
                marker.longitude,
                marker.latitude,
            ]);

            if (!projected) {
                continue;
            }

            const [x, y] = projected;

            const pulse =
                0.12 +
                ((Math.sin(
                    animationTime / 700 +
                    marker.longitude * 0.17 +
                    marker.latitude * 0.11,
                ) + 1) / 2) * 0.88;

            ctx.beginPath();
            ctx.arc(x, y, 6, 0, Math.PI * 2);

            ctx.fillStyle = isContactMode
                ? `rgba(255, 255, 255, ${pulse * 0.2})`
                : `${marker.color}35`;

            ctx.fill();

            ctx.beginPath();
            ctx.arc(x, y, 2.8, 0, Math.PI * 2);

            ctx.fillStyle = isContactMode
                ? `rgba(255, 255, 255, ${pulse})`
                : marker.color;

            ctx.fill();

            if (!isContactMode) {
                ctx.beginPath();
                ctx.arc(x, y, 2.8, 0, Math.PI * 2);
                ctx.strokeStyle = "rgba(8, 10, 13, 0.85)";
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        }

        ctx.restore();

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(230, 220, 201, 0.55)";
        ctx.lineWidth = 1;
        ctx.stroke();

        const highlight = ctx.createRadialGradient(
            centerX - radius * 0.38,
            centerY - radius * 0.45,
            0,
            centerX - radius * 0.38,
            centerY - radius * 0.45,
            radius * 0.7,
        );

        highlight.addColorStop(0, "rgba(255, 255, 255, 0.055)");
        highlight.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = highlight;
        ctx.fill();
    }

    function resizeCanvas() {
        const bounds = canvas.getBoundingClientRect();

        width = bounds.width;
        height = bounds.height;

        pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = Math.round(width * pixelRatio);
        canvas.height = Math.round(height * pixelRatio);

        context.setTransform(
            pixelRatio,
            0,
            0,
            pixelRatio,
            0,
            0,
        );

        drawGlobe(context);
    }

    function animate(time: number) {
        animationTime = time;

        if (previousTime !== 0 && !isContactMode) {
            const deltaSeconds = Math.min(
                (time - previousTime) / 1000,
                0.05,
            );

            rotation -= deltaSeconds * 0.22;
        }

        previousTime = time;
        drawGlobe(context);

        animationFrame = window.requestAnimationFrame(animate);
    }

    function startAnimation() {
        window.cancelAnimationFrame(animationFrame);
        previousTime = 0;

        if (!motionQuery.matches && isPageVisible) {
            animationFrame =
                window.requestAnimationFrame(animate);
        } else {
            drawGlobe(context);
        }
    }

    function handleMotionPreferenceChange() {
        startAnimation();
    }

    function handleVisibilityChange() {
        isPageVisible = !document.hidden;

        if (isPageVisible) {
            startAnimation();
        } else {
            window.cancelAnimationFrame(animationFrame);
            previousTime = 0;
        }
    }

    const resizeObserver = new ResizeObserver(resizeCanvas);

    resizeObserver.observe(canvas);
    motionQuery.addEventListener(
        "change",
        handleMotionPreferenceChange,
    );
    document.addEventListener(
        "visibilitychange",
        handleVisibilityChange,
    );

    resizeCanvas();
    startAnimation();

    return () => {
        window.cancelAnimationFrame(animationFrame);
        resizeObserver.disconnect();

        motionQuery.removeEventListener(
            "change",
            handleMotionPreferenceChange,
        );
        document.removeEventListener(
            "visibilitychange",
            handleVisibilityChange,
        );
    };
}

export default function GlobeCanvas({
    className,
    mode = "investment",
}: GlobeCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (canvas === null) {
            return;
        }

        const context = canvas.getContext("2d");

        if (context === null) {
            return;
        }

        return initializeGlobe(canvas, context, mode);
    }, [mode]);

    return (
        <div className={className} aria-hidden="true">
            <canvas
                ref={canvasRef}
                className="globeCanvasElement"
            />
        </div>
    );
}