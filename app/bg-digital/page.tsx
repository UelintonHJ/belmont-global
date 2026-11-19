import type { Metadata } from "next";

import { BgDigitalHero } from "./sections/BgDigitalHero";
import { BgDigitalIntroduction } from "./sections/BgDigitalIntroduction";

export const metadata: Metadata = {
    title: "BG Digital | Belmont Global",
    description: 
        "Conheça a BG Digital e acompanhe seus canais oficiais.",
};

export default function BgDigitalPage() {
    return (
        <main>
            <BgDigitalHero />
            <BgDigitalIntroduction />
        </main>
    )
}