import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import Footer from "@/components/Footer";

const ContactoPage = () => (
  <>
    <SEOHead
      title="Contacto | Reparación Makita y Milwaukee Humacao"
      description="Reparación Makita, reparación Milwaukee, arreglos de trimmers y plantas eléctricas. WhatsApp (787) 809-4747. Humacao, PR 00791."
      canonical="https://epartsrentalsales.lovable.app/contacto"
    />
    <JsonLd />
    <main className="min-h-[60vh]">
      <section className="container py-12 md:py-20">
        <div className="text-center mb-10">
          <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">
            Contáctanos
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-black text-foreground mt-2">
            Estamos Aquí para Ayudarte
          </h1>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Comunícate con nosotros por WhatsApp, correo o visítanos en nuestra tienda en Humacao, Puerto Rico. 
            Respuesta rápida garantizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <h2 className="font-heading font-bold text-lg text-foreground">Información de Contacto</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="https://wa.me/17878094747?text=Hola%2C%20necesito%20información" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  📱 +1 (787) 809-4747 — WhatsApp principal
                </a>
              </li>
              <li>
                <a href="https://wa.me/17878525975?text=Hola%2C%20necesito%20información" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  📱 +1 (787) 852-5975 — WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:epartsrental@yahoo.com" className="hover:text-primary transition-colors">
                  📧 epartsrental@yahoo.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/epartsrentalsales" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  📸 @epartsrentalsales
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <h2 className="font-heading font-bold text-lg text-foreground">Ubicación</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Calle Cruz Ortiz Stella #117 Suite 2<br />
              Humacao, Puerto Rico 00791
            </p>
            <a
              href="https://maps.google.com/?q=Calle+Cruz+Ortiz+Stella+117+Suite+2+Humacao+Puerto+Rico+00791"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-heading font-bold text-sm hover:brightness-110 transition"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/17878094747?text=Hola%2C%20quiero%20información%20sobre%20piezas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-primary-foreground px-8 py-3.5 rounded-md font-heading font-bold text-sm uppercase tracking-wider hover:brightness-110 transition"
          >
            📱 Escribir por WhatsApp
          </a>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ContactoPage;
