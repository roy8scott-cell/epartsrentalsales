import { ShieldCheck, Clock, Award, Truck } from "lucide-react";

const highlights = [
  { icon: Clock, label: "Más de 10 años de experiencia" },
  { icon: ShieldCheck, label: "Distribuidor autorizado Husqvarna" },
  { icon: Award, label: "Piezas originales garantizadas" },
  { icon: Truck, label: "Envío rápido a todo Puerto Rico" },
];

const AboutSection = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <div className="text-center mb-10">
        <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">
          Sobre Nosotros
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-2">
          Experiencia y Confianza en Equipos de Jardín
        </h2>
      </div>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">
        En E-Parts Rental & Sales somos especialistas en venta y renta de equipos y piezas de jardinería en Humacao, Puerto Rico. 
        Trabajamos con marcas líderes como Husqvarna, Makita y Milwaukee para ofrecer productos de calidad profesional. 
        Nuestro equipo cuenta con más de una década de experiencia asesorando a jardineros profesionales y propietarios de hogar.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {highlights.map((h) => (
          <div key={h.label} className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <h.icon size={24} />
            </div>
            <p className="font-heading font-bold text-sm text-foreground">{h.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
