import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LanguageContext";
import { BookOpen } from "lucide-react";

const posts = [
  {
    slug: "como-mantener-tu-trimmer",
    date: "2025-01-15",
    img: null,
    category_es: "Mantenimiento",
    category_en: "Maintenance",
    title_es: "Cómo mantener tu trimmer en perfecto estado",
    title_en: "How to keep your trimmer in perfect condition",
    excerpt_es: "Aprende los pasos básicos de mantenimiento para que tu trimmer dure más y funcione mejor: limpieza del filtro, cambio de línea y revisión del carburador.",
    excerpt_en: "Learn the basic maintenance steps to make your trimmer last longer and perform better: filter cleaning, line replacement and carburetor check.",
  },
  {
    slug: "makita-vs-milwaukee",
    date: "2025-02-03",
    img: null,
    category_es: "Comparativas",
    category_en: "Comparisons",
    title_es: "Makita vs Milwaukee: ¿cuál es mejor para ti?",
    title_en: "Makita vs Milwaukee: which one is better for you?",
    excerpt_es: "Comparamos las líneas M18 de Milwaukee y LXT de Makita para ayudarte a elegir la mejor herramienta según tu trabajo y presupuesto.",
    excerpt_en: "We compare Milwaukee's M18 and Makita's LXT lines to help you choose the best tool based on your work and budget.",
  },
  {
    slug: "plantas-electricas-huracanes",
    date: "2025-03-10",
    img: null,
    category_es: "Consejos",
    category_en: "Tips",
    title_es: "Prepara tu planta eléctrica antes de la temporada de huracanes",
    title_en: "Prepare your generator before hurricane season",
    excerpt_es: "Con la temporada de huracanes cerca, es esencial revisar tu generador. Te decimos qué revisar, qué aceite usar y cómo almacenarlo correctamente.",
    excerpt_en: "With hurricane season approaching, it's essential to check your generator. We tell you what to inspect, what oil to use and how to store it properly.",
  },
];

const BlogPage = () => {
  const { t, lang } = useLang();

  return (
    <>
      <SEOHead
        title="Blog — E-Parts Rental & Sales | Tips y Consejos Makita, Milwaukee"
        description="Consejos de mantenimiento, comparativas de herramientas y guías para equipos Makita, Milwaukee y Husqvarna en Puerto Rico."
        canonical="https://epartsrentalsales.lovable.app/blog"
      />

      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24 border-b border-secondary-foreground/10">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-heading font-bold uppercase tracking-widest mb-4">
            <BookOpen size={12} />
            Blog
          </div>
          <h1 className="font-heading font-black text-3xl md:text-5xl text-secondary-foreground mb-4">
            {lang === "es" ? "Consejos y Guías de Herramientas" : "Tool Tips & Guides"}
          </h1>
          <p className="text-secondary-foreground/60 max-w-xl mx-auto text-base md:text-lg">
            {lang === "es"
              ? "Artículos sobre mantenimiento, comparativas y novedades de Makita, Milwaukee y Husqvarna."
              : "Articles on maintenance, comparisons and news about Makita, Milwaukee and Husqvarna."}
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="container py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 animate-fade-in"
            >
              {/* Image placeholder */}
              <div className="h-44 bg-secondary flex items-center justify-center">
                <BookOpen size={40} className="text-secondary-foreground/20" />
              </div>

              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {lang === "es" ? post.category_es : post.category_en}
                  </span>
                  <span className="text-xs text-muted-foreground ml-auto">{post.date}</span>
                </div>

                <h2 className="font-heading font-bold text-lg text-card-foreground leading-snug group-hover:text-primary transition-colors">
                  {lang === "es" ? post.title_es : post.title_en}
                </h2>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {lang === "es" ? post.excerpt_es : post.excerpt_en}
                </p>

                <span className="mt-1 text-primary text-xs font-heading font-bold uppercase tracking-wider cursor-pointer hover:underline">
                  {lang === "es" ? "Leer más →" : "Read more →"}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Coming soon note */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          {lang === "es"
            ? "✍️ Más artículos próximamente — síguenos en Instagram @epartsrentalsales"
            : "✍️ More articles coming soon — follow us on Instagram @epartsrentalsales"}
        </p>
      </section>

      <Footer />
    </>
  );
};

export default BlogPage;
