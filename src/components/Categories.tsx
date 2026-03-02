import { Wrench, Tractor, Cog, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLang } from "@/context/LanguageContext";

const Categories = () => {
  const navigate = useNavigate();
  const { t } = useLang();

  const categories = [
    {
      icon: Tractor,
      title: t.cat_podadoras,
      description: t.cat_podadoras_desc,
      search: "Tractores",
    },
    {
      icon: Wrench,
      title: t.cat_motosierras,
      description: t.cat_motosierras_desc,
      search: "Motosierras",
    },
    {
      icon: Cog,
      title: t.cat_trimmers,
      description: t.cat_trimmers_desc,
      search: "Trimmers",
    },
    {
      icon: Zap,
      title: t.cat_sopladoras,
      description: t.cat_sopladoras_desc,
      search: "Sopladoras",
    },
  ];

  return (
    <section id="categorías" className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">
            {t.cat_title_badge}
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-black text-foreground mt-2">
            {t.cat_title}
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              onClick={() => { navigate(`/productos?buscar=${encodeURIComponent(cat.search)}`); window.scrollTo({ top: 0 }); }}
              className="animate-fade-in glass rounded-2xl p-5 md:p-8 text-center hover:border-primary/40 hover:shadow-[0_12px_40px_hsl(var(--primary)/0.15)] transition-all group cursor-pointer active:scale-95"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-5 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <cat.icon size={24} />
              </div>
              <h3 className="font-heading font-bold text-sm md:text-lg text-card-foreground mb-1 md:mb-2">
                {cat.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm hidden md:block">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
