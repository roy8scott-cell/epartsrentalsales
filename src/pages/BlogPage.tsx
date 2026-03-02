import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LanguageContext";
import { BookOpen, X, Calendar, Tag } from "lucide-react";

const posts = [
  {
    slug: "como-mantener-tu-trimmer",
    date: "2025-01-15",
    img: "/images/blog-trimmer.jpg",
    category_es: "Mantenimiento",
    category_en: "Maintenance",
    title_es: "Cómo mantener tu trimmer en perfecto estado",
    title_en: "How to keep your trimmer in perfect condition",
    excerpt_es: "Aprende los pasos básicos de mantenimiento para que tu trimmer dure más y funcione mejor: limpieza del filtro, cambio de línea y revisión del carburador.",
    excerpt_en: "Learn the basic maintenance steps to make your trimmer last longer and perform better: filter cleaning, line replacement and carburetor check.",
    content_es: `
Un trimmer bien mantenido puede durar muchos años. Sigue estos pasos clave:

**1. Limpieza del filtro de aire**
El filtro de aire es la primera línea de defensa de tu equipo. Límpialo cada 25 horas de uso o una vez al mes. Retira el filtro, sacúdelo y, si está muy sucio, lávalo con agua tibia y jabón suave. Déjalo secar completamente antes de reinstalarlo.

**2. Cambio de línea de corte**
Cuando la línea se acorta o se rompe frecuentemente, es momento de cambiarla. Usa siempre el grosor recomendado por el fabricante (generalmente 0.080" o 0.095"). Una línea incorrecta puede dañar el cabezal.

**3. Revisión del carburador**
Si el motor no arranca fácilmente o trabaja a velocidades irregulares, el carburador puede estar obstruido. Usa carburador cleaner en spray y limpia los conductos internos. En casos avanzados, trae tu equipo a nuestro taller en Humacao.

**4. Bujía**
Revisa la bujía cada temporada. Una bujía desgastada causa arranques difíciles y pérdida de potencia. El costo de una bujía nueva es mínimo comparado con el rendimiento que ganarás.

**5. Almacenamiento correcto**
Si no usarás el trimmer por más de 30 días, vacía el tanque de combustible o agrega estabilizador de gasolina para evitar que el combustible se oxide y obstruya el carburador.

¿Tu trimmer necesita servicio? Visítanos en **Calle Cruz Ortiz Stella #117 Suite 2, Humacao, PR** o escríbenos por WhatsApp.
    `,
    content_en: `
A well-maintained trimmer can last many years. Follow these key steps:

**1. Air filter cleaning**
The air filter is your equipment's first line of defense. Clean it every 25 hours of use or once a month. Remove the filter, shake it out and, if very dirty, wash it with warm soapy water. Let it dry completely before reinstalling.

**2. Cutting line replacement**
When the line shortens or breaks frequently, it's time to replace it. Always use the thickness recommended by the manufacturer (generally 0.080" or 0.095"). An incorrect line can damage the head.

**3. Carburetor check**
If the engine doesn't start easily or runs at irregular speeds, the carburetor may be clogged. Use carburetor cleaner spray and clean the internal passages. For advanced cases, bring your equipment to our shop in Humacao.

**4. Spark plug**
Check the spark plug every season. A worn spark plug causes hard starts and loss of power. The cost of a new spark plug is minimal compared to the performance you'll gain.

**5. Proper storage**
If you won't use the trimmer for more than 30 days, empty the fuel tank or add a gasoline stabilizer to prevent the fuel from oxidizing and clogging the carburetor.

Does your trimmer need service? Visit us at **Calle Cruz Ortiz Stella #117 Suite 2, Humacao, PR** or message us on WhatsApp.
    `,
  },
  {
    slug: "makita-vs-milwaukee",
    date: "2025-02-03",
    img: "/images/blog-makita-milwaukee.jpg",
    category_es: "Comparativas",
    category_en: "Comparisons",
    title_es: "Makita vs Milwaukee: ¿cuál es mejor para ti?",
    title_en: "Makita vs Milwaukee: which one is better for you?",
    excerpt_es: "Comparamos las líneas M18 de Milwaukee y LXT de Makita para ayudarte a elegir la mejor herramienta según tu trabajo y presupuesto.",
    excerpt_en: "We compare Milwaukee's M18 and Makita's LXT lines to help you choose the best tool based on your work and budget.",
    content_es: `
Tanto Makita como Milwaukee son marcas líderes en herramientas profesionales. Aquí te ayudamos a decidir cuál es mejor para tu caso:

**Makita LXT 18V**
- **Ideal para:** carpinteros, contratistas generales y usuarios que buscan ligereza.
- **Ventajas:** herramientas más ligeras, baterías de larga duración, excelente para trabajo prolongado sobre la cabeza.
- **Catálogo:** más de 200 herramientas compatibles con la batería LXT 18V.
- **Precio:** generalmente más accesible por herramienta individual.

**Milwaukee M18**
- **Ideal para:** electricistas, plomeros y trabajo en condiciones extremas.
- **Ventajas:** mayor torque en categorías como impacto y taladro, tecnología REDLINK™ protege las baterías.
- **Catálogo:** más de 250 herramientas compatibles, incluyendo la línea MX FUEL para trabajo pesado.
- **Precio:** inversión inicial más alta, pero muy buena durabilidad.

**¿Cuál elegir?**
Si trabajas en exteriores con equipos de jardinería y necesitas ligereza → **Makita LXT**.
Si haces trabajos eléctricos, fontanería o construcción pesada → **Milwaukee M18**.

Como dealer autorizado de ambas marcas en Puerto Rico, en E-Parts podemos asesorarte personalmente. ¡Visítanos o escríbenos por WhatsApp!
    `,
    content_en: `
Both Makita and Milwaukee are leading brands in professional tools. Here we help you decide which is best for your case:

**Makita LXT 18V**
- **Ideal for:** carpenters, general contractors and users looking for lightweight tools.
- **Advantages:** lighter tools, long-lasting batteries, excellent for prolonged overhead work.
- **Catalog:** over 200 tools compatible with the LXT 18V battery.
- **Price:** generally more accessible per individual tool.

**Milwaukee M18**
- **Ideal for:** electricians, plumbers and work in extreme conditions.
- **Advantages:** higher torque in categories like impact and drill, REDLINK™ technology protects batteries.
- **Catalog:** over 250 compatible tools, including the MX FUEL line for heavy work.
- **Price:** higher initial investment, but very good durability.

**Which to choose?**
If you work outdoors with landscaping equipment and need lightweight tools → **Makita LXT**.
If you do electrical, plumbing or heavy construction work → **Milwaukee M18**.

As an authorized dealer for both brands in Puerto Rico, at E-Parts we can advise you personally. Visit us or message us on WhatsApp!
    `,
  },
  {
    slug: "plantas-electricas-huracanes",
    date: "2025-03-10",
    img: "/images/blog-generator.jpg",
    category_es: "Consejos",
    category_en: "Tips",
    title_es: "Prepara tu planta eléctrica antes de la temporada de huracanes",
    title_en: "Prepare your generator before hurricane season",
    excerpt_es: "Con la temporada de huracanes cerca, es esencial revisar tu generador. Te decimos qué revisar, qué aceite usar y cómo almacenarlo correctamente.",
    excerpt_en: "With hurricane season approaching, it's essential to check your generator. We tell you what to inspect, what oil to use and how to store it properly.",
    content_es: `
La temporada de huracanes en Puerto Rico va de junio a noviembre. No esperes a que llegue la tormenta para descubrir que tu generador no arranca.

**Lista de verificación antes de la temporada:**

**1. Cambio de aceite**
Si no has cambiado el aceite en la última temporada, hazlo ahora. Usa SAE 10W-30 para la mayoría de los generadores residenciales. Revisa el nivel con la varilla medidora.

**2. Filtro de aire y bujía**
Reemplaza el filtro de aire y la bujía si llevan más de un año. Son piezas económicas que marcan una gran diferencia al arrancar.

**3. Combustible**
Nunca almacenes gasolina vieja. El combustible degradado es la causa #1 de generadores que no arrancan en emergencias. Usa estabilizador de combustible si planeas almacenarla por más de 30 días.

**4. Prueba de carga**
Arranca el generador y conéctalo a una carga real (nevera, ventilador) durante al menos 30 minutos. Esto verifica que el AVR (regulador de voltaje) esté funcionando correctamente.

**5. Inspección de cables y enchufes**
Revisa que los cables de extensión no estén pelados y que los interruptores del panel del generador estén en buen estado.

**¿Tu generador necesita servicio antes de la temporada?**
En E-Parts hacemos revisión completa y reparación de plantas eléctricas. Agenda tu cita en Humacao antes de que llegue la temporada pico. ¡Escríbenos por WhatsApp!
    `,
    content_en: `
Puerto Rico's hurricane season runs from June to November. Don't wait for the storm to discover your generator won't start.

**Pre-season checklist:**

**1. Oil change**
If you haven't changed the oil since last season, do it now. Use SAE 10W-30 for most residential generators. Check the level with the dipstick.

**2. Air filter and spark plug**
Replace the air filter and spark plug if they've been in use for more than a year. They're inexpensive parts that make a big difference when starting.

**3. Fuel**
Never store old gasoline. Degraded fuel is the #1 cause of generators that won't start in emergencies. Use a fuel stabilizer if you plan to store it for more than 30 days.

**4. Load test**
Start the generator and connect it to a real load (refrigerator, fan) for at least 30 minutes. This verifies that the AVR (voltage regulator) is working properly.

**5. Cable and plug inspection**
Check that extension cords are not frayed and that the generator panel switches are in good condition.

**Does your generator need service before the season?**
At E-Parts we do full inspection and repair of generators. Schedule your appointment in Humacao before the peak season arrives. Message us on WhatsApp!
    `,
  },
];

// Simple markdown-like renderer
const renderContent = (text: string) => {
  const lines = text.trim().split("\n");
  return lines.map((line, i) => {
    if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
      return <p key={i} className="font-heading font-bold text-foreground mt-5 mb-1">{line.slice(2, -2)}</p>;
    }
    if (line.startsWith("- **")) {
      const parts = line.slice(2).split(":**");
      if (parts.length === 2) {
        return (
          <p key={i} className="text-foreground/80 text-sm leading-relaxed ml-3">
            <strong className="text-foreground">{parts[0].replace("**", "")}:</strong>{parts[1]}
          </p>
        );
      }
    }
    if (line.startsWith("- ")) {
      return <p key={i} className="text-foreground/80 text-sm leading-relaxed ml-3">• {line.slice(2)}</p>;
    }
    if (line.trim() === "") return <div key={i} className="h-2" />;
    return <p key={i} className="text-foreground/80 text-sm leading-relaxed">{line}</p>;
  });
};

const BlogPage = () => {
  const { lang } = useLang();
  const [selected, setSelected] = useState<typeof posts[0] | null>(null);

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-primary text-primary text-xs font-heading font-bold uppercase tracking-widest mb-4">
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
              className="group glass rounded-2xl overflow-hidden hover:shadow-[0_16px_48px_hsl(var(--primary)/0.18)] hover:border-primary/40 transition-all duration-300 animate-fade-in cursor-pointer"
              onClick={() => setSelected(post)}
            >
              <div className="h-44 bg-secondary overflow-hidden">
                {post.img
                  ? <img src={post.img} alt={lang === "es" ? post.title_es : post.title_en} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  : <div className="w-full h-full flex items-center justify-center"><BookOpen size={40} className="text-secondary-foreground/20" /></div>
                }
              </div>

              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {lang === "es" ? post.category_es : post.category_en}
                  </span>
                  <span className="text-xs text-muted-foreground ml-auto">{post.date}</span>
                </div>

                <h2 className="font-heading font-bold text-xl text-foreground leading-snug group-hover:text-primary transition-colors">
                  {lang === "es" ? post.title_es : post.title_en}
                </h2>

                <p className="text-foreground/80 text-base leading-relaxed line-clamp-3">
                  {lang === "es" ? post.excerpt_es : post.excerpt_en}
                </p>

                <span className="mt-1 text-primary text-xs font-heading font-bold uppercase tracking-wider">
                  {lang === "es" ? "Leer más →" : "Read more →"}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-12">
          {lang === "es"
            ? "✍️ Más artículos próximamente — síguenos en Instagram @epartsrentalsales"
            : "✍️ More articles coming soon — follow us on Instagram @epartsrentalsales"}
        </p>
      </section>

      <Footer />

      {/* Modal overlay */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6 bg-secondary/60 backdrop-blur-md animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full md:max-w-2xl glass rounded-t-3xl md:rounded-2xl shadow-[0_24px_80px_hsl(0_0%_0%/0.35)] max-h-[90dvh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-start justify-between gap-4 px-6 pt-5 pb-4 border-b border-border/50 shrink-0">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-primary glass-primary px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Tag size={9} />
                    {lang === "es" ? selected.category_es : selected.category_en}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar size={11} /> {selected.date}
                  </span>
                </div>
                <h2 className="font-heading font-black text-xl md:text-2xl text-card-foreground leading-tight">
                  {lang === "es" ? selected.title_es : selected.title_en}
                </h2>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="shrink-0 mt-0.5 p-2 rounded-full glass hover:shadow-md text-secondary-foreground transition-all"
                aria-label="Cerrar"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal content */}
            <div className="overflow-y-auto px-6 py-5 flex flex-col gap-1">
              {renderContent(lang === "es" ? selected.content_es : selected.content_en)}
            </div>

            {/* Modal footer CTA */}
            <div className="shrink-0 px-6 py-4 border-t border-border/40 glass-dark">
              <a
                href="https://wa.me/17878094747?text=Hola%2C%20leí%20el%20blog%20y%20necesito%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-foreground font-heading font-bold text-sm uppercase tracking-wide hover:bg-primary/90 transition-colors"
              >
                📱 {lang === "es" ? "Consultar por WhatsApp" : "Contact via WhatsApp"}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPage;
