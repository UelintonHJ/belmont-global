import type { Metadata } from "next";

import AboutIntroduction from "./sections/AboutIntroductions";
import AboutQuote from "./sections/AboutQuote";
import AboutResults from "./sections/AboutResults";
import AboutDifferentials from "./sections/AboutDifferentials";
import AboutExpertise from "./sections/AboutExpertise";
import MacroThinking from "./sections/MacroThinking";
import TradeStructure from "./sections/TradeStructure";

export const metadata: Metadata = {
    title: "Quem Somos | Belmont Global",
    description:
        "Conheça a Belmont Global, plataforma global de gestão de investimentos alternativos fundada em 2002.",
};

export default function AboutUsPage() {
    return (
        <main>
            <AboutIntroduction />
            <AboutQuote />
            <AboutResults />
            <AboutDifferentials />
            <AboutExpertise />
            <MacroThinking />
            <TradeStructure />
        </main>
    );
}