import { ShieldCheck, Clock, Award, Truck, Wrench, Zap } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const icons = [Clock, ShieldCheck, Award, Truck];

const AboutSection = () => {
  const { t } = useLang();

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-10">
          <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">
            {t.about_badge}
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-black text-foreground mt-2">
            {t.about_title}
          </h2>
        </div>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-4 leading-relaxed text-sm md:text-base">
          {t.about_desc1}
        </p>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed text-sm md:text-base">
          {t.about_desc2}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {t.about_highlights.map((h, i) => {
            const Icon = icons[i];
            return (
              <div key={h.label} className="flex flex-col items-center text-center gap-2 md:gap-3 p-4 rounded-2xl bg-card border border-border">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Icon size={20} />
                </div>
                <p className="font-heading font-bold text-xs md:text-sm text-foreground">{h.label}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="font-heading font-bold text-lg text-foreground text-center mb-6 flex items-center justify-center gap-2">
            <Wrench size={20} className="text-primary" />
            {t.about_services_title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {t.about_services.map((s) => (
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
};

export default AboutSection;
