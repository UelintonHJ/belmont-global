import type { Metadata } from "next"; 

import { CareersHero } from "./section/CareersHero";
import { CareersIntroduction } from "./section/CareersIntroduction";
import { CareersCollaboration } from "./section/CareersCollaboration";
import { CareersTalentDevelopment } from "./section/CareersTalentDevelopment";
import { CareersLeadershipTestimonials } from "./section/CareersLeadershipTestimonials";
import { CareersCareerPaths } from "./section/CareersCareerPaths";
import { CareersCulture } from "./section/CareersCulture";
import { CareersTalentNetwork } from "./section/CareersTalentNetwork";

export const metadata: Metadata = {
    title: "Carreiras | Belmont Global",
    description:
        "Construa o seu futuro conosco. Conheça as oportunidades de carreira na Belmont Global."
};

export default function CareersPage() {
    return (
        <main>
            <CareersHero />
            <CareersIntroduction />
            <CareersCollaboration />
            <CareersTalentDevelopment />
            <CareersLeadershipTestimonials />
            <CareersCareerPaths />
            <CareersCulture />
            <CareersTalentNetwork />
        </main>
    )
}