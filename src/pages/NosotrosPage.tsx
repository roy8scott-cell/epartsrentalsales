import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import Footer from "@/components/Footer";
import { ShieldCheck, Clock, Award, Truck, Wrench, Zap, MapPin, Phone, Mail, Instagram } from "lucide-react";

const highlights = [
  { icon: Clock, label: "Más de 10 años de experiencia", detail: "Sirviendo a la comunidad de Humacao y todo Puerto Rico desde 2013." },
  { icon: ShieldCheck, label: "Dealer autorizado Makita y Milwaukee", detail: "Certificación oficial para ventas, reparaciones y garantías." },
  { icon: Award, label: "Garantía oficial de fábrica", detail: "Respaldados directamente por los fabricantes para garantías Makita y Milwaukee." },
  { icon: Truck, label: "Envíos a todo Puerto Rico", detail: "Entrega rápida y confiable a cualquier municipio de la isla." },
];

const services = [
  { title: "Reparación Makita", desc: "Servicio autorizado con piezas originales. Diagnosticamos y reparamos todas las herramientas Makita." },
  { title: "Reparación Milwaukee", desc: "Taller certificado Milwaukee. Reparamos herramientas M18, M12 y MX FUEL con garantía." },
  { title: "Arreglos de plantas eléctricas", desc: "Mantenimiento preventivo y reparaciones de generadores residenciales y comerciales." },
  { title: "Arreglos de máquinas de presión", desc: "Reparación completa de pressure washers de todas las marcas." },
  { title: "Arreglos de trimmers", desc: "Servicio técnico para trimmers, desbrozadoras y equipos de jardín." },
  { title: "Garantía oficial", desc: "Procesamos garantías Makita y Milwaukee como dealer autorizado en Puerto Rico." },
];

const NosotrosPage = () => (
  <>
    <SEOHead
      title="Quiénes Somos | E-Parts Rental & Sales — Humacao, Puerto Rico"
      description="E-Parts Rental & Sales: dealer autorizado Makita y Milwaukee en Humacao, PR. Más de 10 años de experiencia en venta, renta y reparación de equipos Husqvarna, Makita y Milwaukee."
      canonical="https://epartsrentalsales.lovable.app/nosotros"
    />
    <JsonLd />
    <main>
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
          <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">
            Quiénes Somos
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-black text-secondary-foreground mt-3">
            E-Parts Rental & Sales
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Dealer autorizado Makita y Milwaukee en Humacao, Puerto Rico.
            Más de una década sirviendo a profesionales y hogares con equipos de la más alta calidad.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-heading font-black text-foreground mb-6">
              Nuestra Historia
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              E-Parts Rental & Sales nació en Humacao, Puerto Rico, con la misión de ofrecer equipos y herramientas
              de calidad profesional a precios accesibles. Con más de 10 años de experiencia, nos hemos convertido
              en el dealer de referencia para Makita y Milwaukee en el este de Puerto Rico.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nuestro equipo de técnicos certificados se especializa en la reparación y mantenimiento de equipos
              de jardinería, construcción y hogar. Desde motosierras Husqvarna hasta herramientas eléctricas Milwaukee
              M18 y MX FUEL, ofrecemos servicio técnico con piezas originales y garantía oficial.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ya sea que necesites comprar equipo nuevo, rentar herramientas para un proyecto, o reparar tu equipo
              existente, en E-Parts Rental & Sales encontrarás atención personalizada y el conocimiento técnico
              que solo años de experiencia pueden ofrecer.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {highlights.map((h) => (
              <div key={h.label} className="flex gap-4 p-5 rounded-lg bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <h.icon size={24} />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-foreground">{h.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{h.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Services */}
          <h2 className="text-2xl md:text-3xl font-heading font-black text-foreground mb-6">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {services.map((s) => (
              <div key={s.title} className="p-5 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Wrench size={16} className="text-primary" />
                  <h3 className="font-heading font-bold text-sm text-foreground">{s.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Marcas */}
          <h2 className="text-2xl md:text-3xl font-heading font-black text-foreground mb-6">
            Marcas que Representamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <div className="p-6 rounded-lg bg-card border-2 border-primary/30 text-center">
              <h3 className="font-heading font-black text-lg text-foreground mb-2">Husqvarna</h3>
              <p className="text-xs text-muted-foreground">Motosierras, trimmers, sopladoras, tractores, giro cero y Automower® robóticos.</p>
            </div>
            <div className="p-6 rounded-lg bg-card border-2 border-primary/20 text-center">
              <h3 className="font-heading font-black text-lg text-foreground mb-2">Makita</h3>
              <p className="text-xs text-muted-foreground">Dealer autorizado. Rotary hammers, taladros, esmeriles, sierras y equipos de jardín LXT 18V.</p>
            </div>
            <div className="p-6 rounded-lg bg-card border-2 border-primary/20 text-center">
              <h3 className="font-heading font-black text-lg text-foreground mb-2">Milwaukee</h3>
              <p className="text-xs text-muted-foreground">Dealer autorizado. Herramientas M18 FUEL, MX FUEL, martillos demoledores y equipos de jardín.</p>
            </div>
          </div>

          {/* Location & Contact */}
          <h2 className="text-2xl md:text-3xl font-heading font-black text-foreground mb-6">
            Ubicación y Contacto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-heading font-bold text-sm text-foreground">Dirección</p>
                  <p className="text-sm text-muted-foreground">
                    Calle Cruz Ortiz Stella #117 Suite 2<br />
                    Humacao, Puerto Rico 00791
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-heading font-bold text-sm text-foreground">Horario</p>
                  <p className="text-sm text-muted-foreground">
                    Lunes a Viernes: 8:00 AM – 5:00 PM<br />
                    Sábado: 8:00 AM – 12:00 PM<br />
                    Domingo: Cerrado
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-heading font-bold text-sm text-foreground">Teléfono / WhatsApp</p>
                  <p className="text-sm text-muted-foreground">
                    <a href="tel:+17878094747" className="hover:text-primary transition-colors">+1 (787) 809-4747</a> (principal)<br />
                    <a href="tel:+17878525975" className="hover:text-primary transition-colors">+1 (787) 852-5975</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-heading font-bold text-sm text-foreground">Correo</p>
                  <p className="text-sm text-muted-foreground">
                    <a href="mailto:epartsrental@yahoo.com" className="hover:text-primary transition-colors">epartsrental@yahoo.com</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Instagram size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-heading font-bold text-sm text-foreground">Instagram</p>
                  <p className="text-sm text-muted-foreground">
                    <a href="https://instagram.com/epartsrentalsales" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@epartsrentalsales</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <iframe
                title="Ubicación E-Parts Rental & Sales Humacao Puerto Rico"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.5!2d-65.8238!3d18.1496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDA4JzU4LjYiTiA2NcKwNDknMjUuNyJX!5e0!3m2!1ses!2spr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ minHeight: "300px", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <a
              href="https://wa.me/17878094747?text=Hola%2C%20quiero%20información%20sobre%20equipos%20y%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-primary-foreground px-8 py-3.5 rounded-md font-heading font-bold text-sm uppercase tracking-wider hover:brightness-110 transition"
            >
              📱 Contáctanos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default NosotrosPage;
