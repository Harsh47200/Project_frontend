import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import MamtaEngineeringWebsite from "@/component/home";
import Header from "@/component/Header";
import HeroSection from "@/component/HeroSection";
import DescriptionSection from "@/component/DescriptionSection";
import ServicesSection from "@/component/ServicesSection";
import AboutSection from "@/component/AboutSection";
import LocationSection from "@/component/LocationSection";
import TestimonialsSection from "@/component/TestimonialsSection";
import ContactSection from "@/component/ContactSection";
import Footer from "@/component/Footer";
import RentJcb from "@/component/RentJcbSection";
import JCBRentSection from "@/component/RentJcbSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    // <div>
    //   <MamtaEngineeringWebsite />
    // </div>
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <DescriptionSection />
      <ServicesSection />
      <AboutSection />
      <JCBRentSection/>
      <LocationSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
