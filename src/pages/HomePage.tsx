import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="E-Parts Rental & Sales | Dealer Makita y Milwaukee Humacao PR"
        description="Dealer autorizado Makita y Milwaukee en Puerto Rico. Venta, renta y reparación de equipos Husqvarna, Makita y Milwaukee. Garantía oficial, arreglos de trimmers, máquinas de presión y plantas eléctricas. Humacao, PR."
        canonical="https://epartsrentalsales.lovable.app/"
      />
      <JsonLd />
      <Hero onNavigate={(tab) => navigate(tab === "productos" ? "/productos" : `/${tab}`)} />
      <Categories />
      <AboutSection />
      <FAQSection />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
