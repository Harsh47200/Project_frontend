import Header from "@/component/Header";
import HeroSection from "@/component/HeroSection";
import DescriptionSection from "@/component/DescriptionSection";
import ServicesSection from "@/component/ServicesSection";
import AboutSection from "@/component/AboutSection";
import LocationSection from "@/component/LocationSection";
import TestimonialsSection from "@/component/TestimonialsSection";
import ContactSection from "@/component/ContactSection";
import Footer from "@/component/Footer";
import JCBRentSection from "@/component/RentJcbSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <DescriptionSection />
      <ServicesSection />
      <AboutSection />
      <JCBRentSection />
      <LocationSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
