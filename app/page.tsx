import { AboutUs } from "./components/AboutUs";
import { Hero } from "./components/Hero";


export default function Home() {
  return (
      <main className="flex-1">
        <Hero />
        <AboutUs />
      </main>
  );
}
