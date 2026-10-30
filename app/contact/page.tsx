import type { Metadata } from "next";

import { ContactHero } from "./sections/ContactHero";

export const metadata: Metadata = {
    title: "Contato | Belmont Global",
    description: 
        "Conheça nossos canais de atendimento e entre em contato com a Belmont Global."
}

export default function ContactPage() {
    return (
        <main>
            <ContactHero />
        </main>
    )
}