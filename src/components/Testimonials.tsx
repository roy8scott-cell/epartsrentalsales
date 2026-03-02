import { Star } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const Testimonials = () => {
  const { t } = useLang();

  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-10">
          <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">
            {t.testimonials_badge}
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-black text-foreground mt-2">
            {t.testimonials_title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {t.testimonials.map((testimonial) => (
            <div key={testimonial.name} className="glass rounded-2xl p-5 md:p-6 hover:shadow-[0_12px_40px_hsl(var(--primary)/0.12)] transition-all duration-300">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{testimonial.text}"</p>
              <p className="font-heading font-bold text-sm text-foreground">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
