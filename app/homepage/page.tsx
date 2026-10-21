import { Hero } from "./sections/Hero";
import { AboutUs } from "./sections/AboutUs";
import { InvestmentApproach } from "./sections/InvestmentApproach";
import { AtAGlance } from "./sections/AtAGlance";
import { Culture } from "./sections/Culture";
import { Careers } from "./sections/Careers";
import { ContactAndLocations } from "./sections/ContactAndLocations";

export default function Home() {
  return (
      <main className="flex-1">
        <Hero />
        <AboutUs />
        <InvestmentApproach />
        <AtAGlance />
        <Culture />
        <Careers />
        <ContactAndLocations 
          contactHref=""
        />
      </main>
  );
}