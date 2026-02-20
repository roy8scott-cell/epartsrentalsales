import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "¿Qué marcas de equipos venden en E-Parts?",
    a: "Somos dealer autorizado de Makita y Milwaukee, y distribuimos equipos Husqvarna. Ofrecemos motosierras, trimmers, sopladoras, tractores, herramientas eléctricas profesionales y más.",
  },
  {
    q: "¿Ofrecen servicio de reparación y garantía?",
    a: "Sí. Como dealer autorizado ofrecemos reparación certificada y garantía oficial de Makita y Milwaukee. También reparamos plantas eléctricas, máquinas de presión y trimmers de todas las marcas.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: "Estamos en Calle Cruz Ortiz Stella #117 Suite 2, Humacao, Puerto Rico 00791. Nuestro horario es de lunes a viernes de 8am a 5pm y sábados de 8am a 12pm.",
  },
  {
    q: "¿Cómo puedo hacer un pedido?",
    a: "Puedes comunicarte con nosotros por WhatsApp al (787) 809-4747, visitarnos en la tienda o escribirnos a epartsrental@yahoo.com. Aceptamos efectivo, tarjeta de crédito y ATH Móvil.",
  },
  {
    q: "¿Hacen envíos a toda la isla?",
    a: "Sí, realizamos envíos a todo Puerto Rico. Consulta disponibilidad y costo de envío por WhatsApp.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 bg-secondary">
      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-2">
            ¿Tienes Dudas?
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-heading font-bold text-sm text-foreground pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-muted-foreground flex-shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
