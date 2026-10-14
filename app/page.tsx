import { AboutUs } from "./components/AboutUs";
import { Hero } from "./components/Hero";
import { InvestmentApproach } from "./components/InvestmentApproach";


export default function Home() {
  return (
      <main className="flex-1">
        <Hero />
        <AboutUs />
        <InvestmentApproach />
      </main>
  );
}
