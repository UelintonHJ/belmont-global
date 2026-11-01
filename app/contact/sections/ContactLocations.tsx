import Image from "next/image";

import styles from "../styles/ContactLocations.module.css";

type OfficeLocation = {
    id: string;
    country: string;
    city: string;
    addressLines: string[];
    mapsQuery: string;
    image: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
};

const offices: OfficeLocation[] = [
    {
        id: "sao-paulo",
        country: "Brasil",
        city: "São Paulo",
        addressLines: [
            "Av. Brig. Faria Lima, 3500",
            "Itaim Bibi, São Paulo",
            "04538-132",
            "São Paulo",
        ],
        mapsQuery:
            "Av. Brig. Faria Lima, 3500, Itaim Bibi, São Paulo, 04538-132, Brasil",
        image: "/images/sao-paulo-img.webp",
        imageAlt: "Cidade de São Paulo",
        imageWidth: 2268,
        imageHeight: 4032,
    },
    {
        id: "new-york",
        country: "Estados Unidos",
        city: "Nova York",
        addressLines: [
            "717 5th Ave",
            "New York",
            "NY 10022",
            "Manhattan",
        ],
        mapsQuery:
            "717 5th Ave, New York, NY 10022, Manhattan, United States",
        image: "/images/new-york-img.webp",
        imageAlt: "Cidade de Nova York",
        imageWidth: 944,
        imageHeight: 1123,
    },
    {
        id: "london",
        country: "Reino Unido",
        city: "Londres",
        addressLines: [
            "55 Baker St",
            "London",
            "W1U 8EW",
            "Marylebone",
        ],
        mapsQuery:
            "55 Baker St, London, W1U 8EW, Marylebone, United Kingdom",
        image: "/images/london-img.webp",
        imageAlt: "Cidade de Londres",
        imageWidth: 944,
        imageHeight: 1123,
    },
    {
        id: "geneva",
        country: "Suíça",
        city: "Genebra",
        addressLines: [
            "Rue du Rhône 42",
            "1204 Genève",
            "Cité",
        ],
        mapsQuery:
            "Rue du Rhône 42, 1204 Genève, Cité, Switzerland",
        image: "/images/genebra-img.webp",
        imageAlt: "Cidade de Genebra",
        imageWidth: 6000,
        imageHeight: 4000,
    },
    {
        id: "jersey",
        country: "Reino Unido",
        city: "Jersey",
        addressLines: [
            "6th Floor",
            "37 Esplanade",
            "St. Helier",
            "JE2 3QE",
        ],
        mapsQuery:
            "6th Floor, 37 Esplanade, St. Helier, JE2 3QE, Jersey",
        image: "/images/jersey-img.webp",
        imageAlt: "Cidade de Jersey",
        imageWidth: 4000,
        imageHeight: 3000,
    },
    {
        id: "hong-kong",
        country: "China",
        city: "Hong Kong",
        addressLines: [
            "Unit 5101",
            "51/F",
            "Cheung Kong Center",
            "2 Queen's Road Central",
            "Central",
        ],
        mapsQuery:
            "Unit 5101, 51/F, Cheung Kong Center, 2 Queen's Road Central, Central, Hong Kong",
        image: "/images/hong-kong-img.webp",
        imageAlt: "Cidade de Hong Kong",
        imageWidth: 4658,
        imageHeight: 3494,
    },
    {
        id: "abu-dhabi",
        country: "Emirados Árabes Unidos",
        city: "Abu Dhabi",
        addressLines: [
            "Abu Dhabi Global Market Square",
            "Al Maryah Island",
        ],
        mapsQuery:
            "Abu Dhabi Global Market Square, Al Maryah Island, Abu Dhabi, United Arab Emirates",
        image: "/images/abu-dhabi-img.webp",
        imageAlt: "Cidade de Abu Dhabi",
        imageWidth: 3000,
        imageHeight: 4500,
    },
    {
        id: "singapore",
        country: "Singapura",
        city: "Singapura",
        addressLines: [
            "Marina Bay Financial Centre (MBFC)",
            "12 Marina Boulevard",
            "018982",
            "Downtown Core",
        ],
        mapsQuery:
            "Marina Bay Financial Centre, 12 Marina Boulevard, 018982, Downtown Core, Singapore",
        image: "/images/singapure-img.webp",
        imageAlt: "Cidade de Singapura",
        imageWidth: 3502,
        imageHeight: 4377,
    },
    {
        id: "austin",
        country: "Estados Unidos",
        city: "Austin",
        addressLines: [
            "Frost Bank Tower",
            "401 Congress Ave",
            "TX 78701",
            "Downtown",
        ],
        mapsQuery:
            "Frost Bank Tower, 401 Congress Ave, Austin, TX 78701, Downtown, United States",
        image: "/images/austin-img.webp",
        imageAlt: "Cidade de Austin",
        imageWidth: 5464,
        imageHeight: 3640,
    },
];

function ArrowRight() {
    return (
        <svg
            className={styles.locationArrow}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            aria-hidden="true"
            focusable="false"
        >
            <path
                d="M3.5 10h13M11 4.5 16.5 10 11 15.5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export function ContactLocations() {
    return (
        <section
            id="locations"
            className={styles.section}
            aria-labelledby="contact-locations-title"
        >
            <div className={styles.content}>
                <header className={styles.header}>
                    <div className={styles.eyebrow}>
                        <div
                            className={styles.octagon}
                            aria-hidden="true"
                        >
                            <svg
                                className={styles.octagonSvg}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 90 90"
                                fill="none"
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
                            NOSSAS LOCALIZAÇÕES
                        </span>
                    </div>

                    <h2
                        id="contact-locations-title"
                        className={styles.title}
                    >
                        Nossos Escritórios
                    </h2>
                </header>

                <div className={styles.locationsList}>
                    {offices.map((office) => {
                        const mapsUrl =
                            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapsQuery)}`;

                        return (
                            <article
                                key={office.id}
                                className={styles.locationItem}
                                aria-labelledby={`location-${office.id}-title`}
                            >
                                <div className={styles.locationInfo}>
                                    <p className={styles.country}>
                                        {office.country}
                                    </p>

                                    <h3
                                        id={`location-${office.id}-title`}
                                        className={styles.city}
                                    >
                                        {office.city}
                                    </h3>
                                </div>

                                <div className={styles.imageFrame}>
                                    <Image
                                        src={office.image}
                                        alt={office.imageAlt}
                                        fill
                                        sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 624px"
                                        className={styles.locationImage}
                                        unoptimized
                                    />
                                </div>

                                <div className={styles.locationDetails}>
                                    <address className={styles.address}>
                                        {office.addressLines.map(
                                            (line, index) => (
                                                <span key={`${office.id}-address-${index}`}>
                                                    {line}
                                                </span>
                                            )
                                        )}
                                    </address>

                                    <a
                                        className={styles.locationLink}
                                        href={mapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Como chegar ao escritório de ${office.city}, ${office.country}`}
                                    >
                                        <span>Como Chegar</span>
                                        <ArrowRight />
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}