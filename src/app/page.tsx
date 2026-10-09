import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import GallerySection from "@/components/sections/GallerySection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactsSection from "@/components/sections/ContactsSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CalculatorSection />
        <GallerySection />
        <AdvantagesSection />
        <ReviewsSection />
        <FAQSection />
        <ContactsSection />
        <ContactFormSection />
      </div>
      <Footer />
    </div>
  );
}
