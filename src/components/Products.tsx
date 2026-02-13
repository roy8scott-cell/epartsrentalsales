import { useState, useMemo } from "react";
import { MessageCircle, Search, X } from "lucide-react";

type Product = {
  name: string;
  price: string;
  sku: string;
  description?: string;
};

type Category = {
  name: string;
  products: Product[];
};

type Brand = {
  id: string;
  name: string;
  accent: string;
  badge: string;
  categories: Category[];
};

const brands: Brand[] = [
  {
    id: "husqvarna",
    name: "Husqvarna",
    accent: "border-orange-500",
    badge: "bg-orange-500/10 text-orange-600",
    categories: [
      {
        name: "Motosierras",
        products: [
          { name: "Husqvarna 562 XP® Mark II", price: "$949.99", sku: "HUS-562XP", description: "59.8 cm³ · 4.7 hp · 70.2 fts. Alta capacidad de corte, diseño liviano y barras largas." },
        ],
      },
      {
        name: "Hedge Trimmers",
        products: [
          { name: "Husqvarna 122HD60", price: "$369.99", sku: "HUS-122HD60", description: "23.2 in cuchilla · 10.8 lbs. LowVib®, Smart Start® y Air Purge." },
          { name: "Husqvarna 322HD60", price: "$449.99", sku: "HUS-322HD60", description: "24 in cuchilla · 11.5 lbs. Cuchillas de acero endurecido, Smart Start® y mango trasero ajustable." },
          { name: "Husqvarna 525HF3S", price: "$549.99", sku: "HUS-525HF3S", description: "25.59 in cuchilla · 13.4 lbs. Peso ligero, barra larga y engranajes duraderos." },
          { name: "Husqvarna 525HE3", price: "$589.99", sku: "HUS-525HE3", description: "24 in cuchilla · 13 lbs. Motor X-TORQ®, Smart Start® y barra ajustable." },
          { name: "Husqvarna 525HE4", price: "$629.99", sku: "HUS-525HE4", description: "24 in cuchilla · 13.1 lbs. Motor X-TORQ®, Smart Start® y barra ajustable." },
        ],
      },
      {
        name: "Pole Saws",
        products: [
          { name: "Husqvarna 122LKP", price: "$299.99", sku: "HUS-122LKP", description: "Alcance hasta 12 pies · 12.6 lbs. Cadena X-CUT® y lubricación automática." },
        ],
      },
      {
        name: "Zero-Turn Mowers",
        products: [
          { name: "Husqvarna Z254F Special Edition", price: "$3,699.00", sku: "HUS-Z254F", description: "54 in corte · 23.1 hp Kawasaki. ClearCut™ Fabricated Deck y marco ultra-duradero." },
          { name: "Husqvarna Z248F Special Edition", price: "$3,599.00", sku: "HUS-Z248F", description: "48 in corte · 21.5 hp Kawasaki. ClearCut™ Fabricated Deck y marco ultra-duradero." },
          { name: "Husqvarna Z242F Special Edition", price: "$3,499.00", sku: "HUS-Z242F", description: "42 in corte · 21.5 hp Kawasaki. ClearCut™ Fabricated Deck y marco ultra-duradero." },
        ],
      },
    ],
  },
  {
    id: "makita",
    name: "Makita",
    accent: "border-teal-500",
    badge: "bg-teal-500/10 text-teal-600",
    categories: [],
  },
  {
    id: "milwaukee",
    name: "Milwaukee",
    accent: "border-red-600",
    badge: "bg-red-600/10 text-red-600",
    categories: [],
  },
];

const Products = () => {
  const [activeBrand, setActiveBrand] = useState("husqvarna");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const brand = brands.find((b) => b.id === activeBrand)!;

  const filteredCategories = useMemo(() => {
    let cats = brand.categories;
    if (activeCategory) {
      cats = cats.filter((cat) => cat.name === activeCategory);
    }
    if (!search.trim()) return cats;
    const q = search.toLowerCase();
    return cats
      .map((cat) => ({
        ...cat,
        products: cat.products.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.sku.toLowerCase().includes(q) ||
            cat.name.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.products.length > 0);
  }, [brand, search, activeCategory]);

  const totalResults = filteredCategories.reduce((sum, cat) => sum + cat.products.length, 0);

  return (
    <section className="min-h-full flex flex-col">
      {/* Sticky top bar on mobile: brand pills + search */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border md:relative md:border-0 md:bg-transparent md:backdrop-blur-none">
        <div className="container pt-4 pb-3 md:pt-8">
          {/* Header - hidden on mobile for compactness */}
          <div className="hidden md:block mb-6">
            <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">
              Catálogo de Repuestos
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-2">
              Encuentra tu Repuesto
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              Selecciona la marca y busca por nombre o código. ¡Consulta disponibilidad por WhatsApp!
            </p>
          </div>

          {/* Brand Tabs - horizontal scroll on mobile */}
          <div className="flex gap-2 mb-3 overflow-x-auto pb-1 scrollbar-hide md:flex-wrap md:overflow-visible md:mb-6">
            {brands.map((b) => (
              <button
                key={b.id}
                onClick={() => { setActiveBrand(b.id); setActiveCategory(null); setSearch(""); }}
                className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full md:rounded-lg font-heading font-bold text-xs md:text-sm uppercase tracking-wider transition-all border-2 whitespace-nowrap flex-shrink-0 ${
                  activeBrand === b.id
                    ? `${b.accent} bg-card shadow-md text-foreground`
                    : "border-transparent bg-card text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>

          {/* Category Pills */}
          <div className="flex gap-2 mb-3 overflow-x-auto pb-1 scrollbar-hide md:flex-wrap md:overflow-visible">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs font-heading font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                activeCategory === null
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              Todas
            </button>
            {brand.categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs font-heading font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                  activeCategory === cat.name
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Bar - full width on mobile */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Buscar en ${brand.name}...`}
              className="w-full pl-10 pr-10 py-2.5 md:py-3 rounded-full md:rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition md:max-w-md"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Results count on mobile */}
          {search && (
            <p className="text-xs text-muted-foreground mt-2 md:hidden">
              {totalResults} resultado{totalResults !== 1 ? "s" : ""} para "{search}"
            </p>
          )}
        </div>
      </div>

      {/* Products List */}
      <div className="container py-4 md:py-0 flex-1">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <Search size={40} className="mx-auto mb-3 opacity-30" />
            <p className="font-heading font-semibold">No se encontraron repuestos</p>
            <p className="text-sm mt-1">Intenta con otro término</p>
          </div>
        ) : (
          <div className="space-y-6 md:space-y-8">
            {filteredCategories.map((cat) => (
              <div key={cat.name}>
                <h3 className="font-heading font-bold text-base md:text-lg text-foreground mb-3 flex items-center gap-2">
                  <span className={`inline-block w-1 h-4 md:h-5 rounded-full ${brand.accent.replace("border-", "bg-")}`} />
                  {cat.name}
                  <span className="text-[11px] font-normal text-muted-foreground">
                    ({cat.products.length})
                  </span>
                </h3>

                {/* Mobile: compact list cards | Desktop: grid */}
                <div className="flex flex-col gap-2 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4">
                  {cat.products.map((product) => (
                    <div
                      key={product.sku}
                      className="bg-card border border-border rounded-xl md:rounded-lg p-3 md:p-4 hover:shadow-lg hover:border-primary/40 transition-all group flex items-center gap-3 md:flex-col md:items-stretch"
                    >
                      {/* Mobile: horizontal layout */}
                      <div className="flex-1 min-w-0 md:flex-auto">
                        <div className="flex items-center gap-2 mb-0.5 md:mb-2">
                          <span className={`text-[9px] md:text-[10px] font-heading font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${brand.badge}`}>
                            {cat.name}
                          </span>
                          <span className="text-[9px] md:text-[10px] font-mono text-muted-foreground hidden md:inline">
                            {product.sku}
                          </span>
                        </div>
                        <h4 className="font-heading font-bold text-card-foreground text-sm leading-tight md:min-h-[2.5rem]">
                          {product.name}
                        </h4>
                        {product.description && (
                          <p className="text-[11px] md:text-xs text-muted-foreground leading-snug mt-1 line-clamp-2">
                            {product.description}
                          </p>
                        )}
                        <span className="text-lg font-heading font-black text-foreground md:hidden">
                          {product.price}
                        </span>
                      </div>

                      {/* Desktop: price + button row */}
                      <div className="hidden md:flex items-center justify-between mt-3 pt-3 border-t border-border">
                        <span className="text-lg font-heading font-black text-foreground">
                          {product.price}
                        </span>
                        <a
                          href={`https://wa.me/17878525975?text=Hola%2C%20me%20interesa%20${encodeURIComponent(product.name)}%20(${brand.name})%20-%20${product.sku}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-whatsapp text-primary-foreground px-3 py-1.5 rounded-md text-xs font-heading font-bold flex items-center gap-1 hover:brightness-110 transition"
                        >
                          <MessageCircle size={14} />
                          Consultar
                        </a>
                      </div>

                      {/* Mobile: compact buy button */}
                      <a
                        href={`https://wa.me/17878525975?text=Hola%2C%20me%20interesa%20${encodeURIComponent(product.name)}%20(${brand.name})%20-%20${product.sku}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:hidden bg-whatsapp text-primary-foreground px-4 py-2.5 rounded-full text-xs font-heading font-bold flex items-center gap-1.5 hover:brightness-110 transition flex-shrink-0 shadow-sm"
                      >
                        <MessageCircle size={14} />
                        Comprar
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
