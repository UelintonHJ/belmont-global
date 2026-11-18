import type { Metadata } from "next";

import { BgDigitalContent } from "./sections/BgDigitalContent";

export const metadata: Metadata = {
    title: "BG Digital | Belmont Global",
    description: 
        "Conheça a BG Digital e acompanhe seus canais oficiais.",
};

export default function BgDigitalPage() {
    return (
        <main>
            <BgDigitalContent />
        </main>
    )
}