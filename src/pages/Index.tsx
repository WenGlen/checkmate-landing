import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CollectionsSection from "@/components/CollectionsSection";
import SignaturePieces from "@/components/SignaturePieces";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CollectionsSection />
      <SignaturePieces />
      <ExperienceSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
