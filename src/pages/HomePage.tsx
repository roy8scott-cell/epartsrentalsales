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
        title="E-Parts Rental & Sales | Equipos de Jardín en Humacao, PR"
        description="Venta y renta de equipos y piezas de jardinería Husqvarna en Humacao, Puerto Rico. Compra fácil por WhatsApp. +10 años de experiencia."
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
