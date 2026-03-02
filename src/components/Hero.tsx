import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import { useLang } from "@/context/LanguageContext";

interface HeroProps {
  onNavigate?: (tab: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden min-h-[75vh] md:min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Equipos de jardinería Husqvarna en Puerto Rico" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-secondary/80" />
        {/* Mobile gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary/90 md:hidden" />
      </div>
      <div className="relative container py-20 md:py-36 flex flex-col items-center text-center gap-5 md:gap-6">
        <span className="animate-fade-in glass-primary text-primary px-4 py-1.5 rounded-full font-heading font-bold text-xs uppercase tracking-widest">
          {t.hero_badge}
        </span>
        <h1 className="animate-fade-in text-4xl md:text-6xl font-heading font-black text-secondary-foreground leading-tight max-w-3xl" style={{ animationDelay: "0.1s" }}>
          {t.hero_title}{" "}
          <span className="text-primary">{t.hero_title_highlight}</span>
        </h1>
        <p className="animate-fade-in text-secondary-foreground/70 text-base md:text-xl max-w-sm md:max-w-xl font-body leading-relaxed" style={{ animationDelay: "0.2s" }}>
          {t.hero_desc}
        </p>
        <div className="animate-fade-in flex flex-col sm:flex-row gap-3 md:gap-4 mt-2 md:mt-4 w-full max-w-xs sm:max-w-none sm:w-auto" style={{ animationDelay: "0.3s" }}>
          <Link
            to="/productos"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-heading font-bold text-sm uppercase tracking-wider hover:brightness-110 transition shadow-lg shadow-primary/30"
          >
            {t.hero_cta_products}
          </Link>
          <a
            href="https://wa.me/17878094747?text=Hola%2C%20quiero%20información%20sobre%20piezas"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-primary-foreground px-8 py-4 rounded-xl font-heading font-bold text-sm uppercase tracking-wider hover:brightness-110 transition shadow-lg shadow-green-700/30 flex items-center justify-center gap-2"
          >
            <WhatsAppIcon />
            {t.hero_cta_whatsapp}
          </a>
        </div>
        {/* Mobile scroll hint */}
        <div className="md:hidden mt-6 animate-bounce text-secondary-foreground/40">
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default Hero;
