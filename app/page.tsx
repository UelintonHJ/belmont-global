import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { InvestmentApproach } from "./components/InvestmentApproach";
import { AtAGlance } from "./components/AtAGlance";
import { Culture } from "./components/Culture";
import { Careers } from "./components/Careers";
import { ContactAndLocations } from "./components/ContactAndLocations";

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
