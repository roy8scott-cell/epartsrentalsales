import { Wrench, Trees, Cog, Zap } from "lucide-react";

const categories = [
  {
    icon: Trees,
    title: "Podadoras",
    description: "Piezas para cortadoras de césped, cuchillas, filtros y más.",
  },
  {
    icon: Wrench,
    title: "Motosierras",
    description: "Cadenas, barras guía, bujías y repuestos originales.",
  },
  {
    icon: Cog,
    title: "Trimmers",
    description: "Cabezales, líneas de corte, ejes y accesorios.",
  },
  {
    icon: Zap,
    title: "Sopladoras",
    description: "Tubos, filtros de aire, arrancadores y partes eléctricas.",
  },
];

const Categories = () => {
  return (
    <section id="categorías" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">
            Categorías
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-2">
            Encuentra lo que Necesitas
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all group cursor-pointer"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <cat.icon size={28} />
              </div>
              <h3 className="font-heading font-bold text-lg text-card-foreground mb-2">
                {cat.title}
              </h3>
              <p className="text-muted-foreground text-sm">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
