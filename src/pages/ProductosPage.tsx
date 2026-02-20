import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

const ProductosPage = () => (
  <>
    <SEOHead
      title="Catálogo de Equipos Husqvarna, Makita y Milwaukee | E-Parts PR"
      description="Catálogo completo de motosierras, trimmers, sopladoras Husqvarna. Rotary hammers, taladros, esmeriles Makita. Herramientas M18 FUEL Milwaukee. Precios y disponibilidad. Humacao, Puerto Rico."
      canonical="https://epartsrentalsales.lovable.app/productos"
    />
    <JsonLd />
    <Products />
    <Footer />
  </>
);

export default ProductosPage;
