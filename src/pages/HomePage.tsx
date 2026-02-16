import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="E-Parts | Dealer Makita y Milwaukee Humacao PR"
        description="Dealer Makita y Milwaukee en Puerto Rico. Reparación, garantía, arreglos de trimmers, máquinas de presión y plantas eléctricas. Humacao, PR."
        canonical="https://epartsrentalsales.lovable.app/"
      />
      <JsonLd />
      <Hero onNavigate={(tab) => navigate(tab === "productos" ? "/productos" : `/${tab}`)} />
      <Categories />
      <AboutSection />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
