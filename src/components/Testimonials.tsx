import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Rivera",
    location: "Humacao, PR",
    text: "Excelente servicio. Encontré las piezas para mi motosierra Husqvarna en minutos. Entrega rápida y precios justos.",
    rating: 5,
  },
  {
    name: "María Torres",
    location: "Caguas, PR",
    text: "Compré un trimmer por WhatsApp y me lo entregaron al día siguiente. Muy profesionales y atentos.",
    rating: 5,
  },
  {
    name: "José Rodríguez",
    location: "San Juan, PR",
    text: "Más de 3 años comprando aquí. Siempre tienen lo que necesito para el mantenimiento de jardines.",
    rating: 5,
  },
];

const Testimonials = () => (
  <section className="py-16 bg-muted/50">
    <div className="container">
      <div className="text-center mb-10">
        <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">
          Testimonios
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-2">
          Lo que Dicen Nuestros Clientes
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card border border-border rounded-lg p-6">
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
            <p className="font-heading font-bold text-sm text-foreground">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.location}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
