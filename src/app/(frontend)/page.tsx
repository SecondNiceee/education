import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CoursesSection } from "./components/CoursesSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <CoursesSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </>
  );
}
