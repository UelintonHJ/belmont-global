import type { Metadata } from "next"; 

import { CareersHero } from "./section/CareersHero";

export const metadata: Metadata = {
    title: "Carreiras | Belmont Global",
    description:
        "Construa o seu futuro conosco. Conheça as oportunidades de carreira na Belmont Global."
};

export default function CareersPage() {
    return (
        <main>
            <CareersHero />
        </main>
    )
}