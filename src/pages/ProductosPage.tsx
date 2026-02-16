import SEOHead from "@/components/SEOHead";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

const ProductosPage = () => (
  <>
    <SEOHead
      title="Productos Husqvarna en Puerto Rico | E-Parts"
      description="Catálogo de motosierras, trimmers, sopladoras y tractores Husqvarna. Precios, fotos y compra directa por WhatsApp desde Humacao, PR."
      canonical="https://epartsrentalsales.lovable.app/productos"
    />
    <Products />
    <Footer />
  </>
);

export default ProductosPage;
