import styles from "../styles/BgDigitalPartnerWithUs.module.css";

type OfficeLocation = {
    id: string;
    country: string;
    city: string;
    address: string;
    mapsQuery: string;
};

const offices: OfficeLocation[] = [
    {
        id: "sao-paulo",
        country: "Brasil",
        city: "São Paulo",
        address:
            "Av. Brig. Faria Lima, 3500, Itaim Bibi, São Paulo, 04538-132",
        mapsQuery:
            "Av. Brig. Faria Lima, 3500, Itaim Bibi, São Paulo, 04538-132, Brasil",
    },
    {
        id: "new-york",
        country: "Estados Unidos",
        city: "Nova York",
        address:
            "717 5th Ave, New York, NY 10022, Manhattan",
        mapsQuery:
            "717 5th Ave, New York, NY 10022, Manhattan, United States",
    },
    {
        id: "london",
        country: "Reino Unido",
        city: "Londres",
        address:
            "55 Baker St, London, W1U 8EW, Marylebone",
        mapsQuery:
            "55 Baker St, London, W1U 8EW, Marylebone, United Kingdom",
    },
    {
        id: "geneva",
        country: "Suíça",
        city: "Genebra",
        address:
            "Rue du Rhône 42, 1204 Genève, Cité",
        mapsQuery:
            "Rue du Rhône 42, 1204 Genève, Cité, Switzerland",
    },
    {
        id: "jersey",
        country: "Reino Unido",
        city: "Jersey",
        address:
            "6th Floor, 37 Esplanade, St. Helier, JE2 3QE",
        mapsQuery:
            "6th Floor, 37 Esplanade, St. Helier, JE2 3QE, Jersey",
    },
    {
        id: "hong-kong",
        country: "China",
        city: "Hong Kong",
        address:
            "Unit 5101, 51/F, Cheung Kong Center, 2 Queen's Road Central, Central",
        mapsQuery:
            "Unit 5101, 51/F, Cheung Kong Center, 2 Queen's Road Central, Central, Hong Kong",
    },
    {
        id: "abu-dhabi",
        country: "Emirados Árabes Unidos",
        city: "Abu Dhabi",
        address:
            "Abu Dhabi Global Market Square, Al Maryah Island",
        mapsQuery:
            "Abu Dhabi Global Market Square, Al Maryah Island, Abu Dhabi, United Arab Emirates",
    },
    {
        id: "singapore",
        country: "Singapura",
        city: "Singapura",
        address:
            "Marina Bay Financial Centre (MBFC), 12 Marina Boulevard, 018982, Downtown Core",
        mapsQuery:
            "Marina Bay Financial Centre (MBFC), 12 Marina Boulevard, 018982, Downtown Core, Singapore",
    },
    {
        id: "austin",
        country: "Estados Unidos",
        city: "Austin",
        address:
            "Frost Bank Tower, 401 Congress Ave, TX 78701, Downtown",
        mapsQuery:
            "Frost Bank Tower, 401 Congress Ave, TX 78701, Downtown, United States",
    },
];

export function BgDigitalPartnerWithUs() {
    return (
        <section
            className={styles.section}
            aria-labelledby="bg-digital-partner-title"
        >
            <div className={styles.container}>
                <div className={styles.eyebrow}>
                    <span className={styles.eyebrowNumber}>
                        04
                    </span>

                    <span className={styles.eyebrowLabel}>
                        SEJA NOSSO PARCEIRO
                    </span>
                </div>

                <header className={styles.header}>
                    <h2
                        id="bg-digital-partner-title"
                        className={styles.title}
                    >
                        <span className={styles.titleAccent}>
                            Vamos
                        </span>

                        <span className={styles.titleAccent}>
                            Trabalhar
                        </span>

                        <span className={styles.titleMain}>
                            Juntos
                        </span>
                    </h2>

                    <h3 className={styles.subtitle}>
                        Nossos Escritórios
                    </h3>
                </header>

                <ul
                    className={styles.officeList}
                    aria-label="Lista dos escritórios globais da Belmont Global"
                >
                    {offices.map((office) => {
                        const mapsUrl =
                            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapsQuery)}`;

                        return (
                            <li
                                key={office.id}
                                className={styles.officeItem}
                            >
                                <strong className={styles.country}>
                                    {office.country}
                                </strong>

                                <span className={styles.city}>
                                    {office.city}
                                </span>

                                <address className={styles.address}>
                                    {office.address}
                                </address>

                                <a
                                    className={styles.officeLink}
                                    href={mapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Como chegar ao escritório de ${office.city}, ${office.country}`}
                                >
                                    Como Chegar
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}