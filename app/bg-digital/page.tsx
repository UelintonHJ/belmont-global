import type { Metadata } from "next";

import { BgDigitalHero } from "./sections/BgDigitalHero";
import { BgDigitalIntroduction } from "./sections/BgDigitalIntroduction";
import { BgDigitalLeadership } from "./sections/BgDigitalLeadership";

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
            <BgDigitalLeadership />
        </main>
    )
}