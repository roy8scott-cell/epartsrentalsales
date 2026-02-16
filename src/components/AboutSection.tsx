import { ShieldCheck, Clock, Award, Truck, Wrench, Zap } from "lucide-react";

const highlights = [
  { icon: Clock, label: "Más de 10 años de experiencia" },
  { icon: ShieldCheck, label: "Dealer autorizado Makita y Milwaukee" },
  { icon: Award, label: "Garantía Makita y garantía Milwaukee" },
  { icon: Truck, label: "Envío rápido a todo Puerto Rico" },
];

const services = [
  "Arreglos de máquina de presión",
  "Arreglos de plantas eléctricas",
  "Reparación Makita — servicio autorizado",
  "Reparación Milwaukee — taller certificado",
  "Arreglos de trimmers y equipos de jardín",
  "Garantía Makita — dealer oficial en PR",
  "Garantía Milwaukee — centro de servicio",
];

const AboutSection = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <div className="text-center mb-10">
        <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">
          Sobre Nosotros
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-2">
          Dealer Makita y Milwaukee en Puerto Rico
        </h2>
      </div>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6 leading-relaxed">
        En E-Parts Rental & Sales somos especialistas en venta, renta y reparación de equipos de jardinería en Humacao, Puerto Rico. 
        Como dealer autorizado de Makita y dealer Milwaukee, ofrecemos garantía oficial, piezas originales y servicio técnico certificado. 
        Nuestro equipo cuenta con más de una década de experiencia en arreglos de trimmers, máquinas de presión y plantas eléctricas.
      </p>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">
        Realizamos reparación Makita y reparación Milwaukee con piezas originales. 
        También ofrecemos arreglos de plantas eléctricas y arreglos de máquinas de presión para residencias y negocios en todo Puerto Rico.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {highlights.map((h) => (
          <div key={h.label} className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <h.icon size={24} />
            </div>
            <p className="font-heading font-bold text-sm text-foreground">{h.label}</p>
          </div>
        ))}
      </div>

      {/* Services list for SEO keyword coverage */}
      <div className="max-w-2xl mx-auto">
        <h3 className="font-heading font-bold text-lg text-foreground text-center mb-6 flex items-center justify-center gap-2">
          <Wrench size={20} className="text-primary" />
          Servicios de Reparación y Garantía
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {services.map((s) => (
            <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap size={14} className="text-primary flex-shrink-0" />
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
