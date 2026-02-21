import HeroSection from "../components/HeroSection";
import Ticker from "../components/Ticker";
import ServicesGrid from "../components/ServicesGrid";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";
import "./globals.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Ticker />
      <ServicesGrid />
      <WhyUs />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
