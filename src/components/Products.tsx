import { useState, useMemo } from "react";
import { MessageCircle, Search, X } from "lucide-react";

const brands = [
  {
    id: "husqvarna",
    name: "Husqvarna",
    accent: "border-orange-500",
    badge: "bg-orange-500/10 text-orange-600",
    categories: [
      {
        name: "Motosierras",
        products: [
          { name: 'Cadena Motosierra 16"', price: "$18.50", sku: "HUS-CH-16" },
          { name: 'Barra Guía 18"', price: "$35.00", sku: "HUS-BG-18" },
          { name: "Piñón de Cadena .325", price: "$12.00", sku: "HUS-PC-325" },
          { name: "Tensor de Cadena", price: "$9.50", sku: "HUS-TC-01" },
          { name: "Bomba de Aceite", price: "$28.00", sku: "HUS-BA-01" },
          { name: "Embrague Completo", price: "$42.00", sku: "HUS-EM-01" },
        ],
      },
      {
        name: "Trimmers",
        products: [
          { name: "Cabezal Trimmer T25", price: "$22.00", sku: "HUS-T25" },
          { name: 'Línea de Corte .095" (1lb)', price: "$15.00", sku: "HUS-LC-095" },
          { name: "Protector de Línea", price: "$8.00", sku: "HUS-PL-01" },
          { name: "Eje Flexible", price: "$18.50", sku: "HUS-EF-01" },
        ],
      },
      {
        name: "Sopladoras",
        products: [
          { name: "Filtro de Aire Sopladora", price: "$8.99", sku: "HUS-FA-SOP" },
          { name: "Tubo Soplador", price: "$14.00", sku: "HUS-TS-01" },
          { name: "Boquilla Plana", price: "$6.50", sku: "HUS-BP-01" },
        ],
      },
      {
        name: "Repuestos Generales",
        products: [
          { name: "Bujía NGK para Husqvarna", price: "$4.50", sku: "HUS-BJ-NGK" },
          { name: "Filtro de Combustible", price: "$3.50", sku: "HUS-FC-01" },
          { name: "Arrancador de Retroceso", price: "$22.00", sku: "HUS-AR-01" },
          { name: "Carburador Completo", price: "$38.00", sku: "HUS-CB-01" },
        ],
      },
    ],
  },
  {
    id: "makita",
    name: "Makita",
    accent: "border-teal-500",
    badge: "bg-teal-500/10 text-teal-600",
    categories: [
      {
        name: "Baterías y Cargadores",
        products: [
          { name: "Batería 18V 5.0Ah", price: "$89.00", sku: "MAK-BT-18V5" },
          { name: "Batería 18V 3.0Ah", price: "$55.00", sku: "MAK-BT-18V3" },
          { name: "Cargador Rápido DC18RC", price: "$45.00", sku: "MAK-CR-18RC" },
          { name: "Cargador Doble DC18RD", price: "$69.00", sku: "MAK-CR-18RD" },
        ],
      },
      {
        name: "Taladros",
        products: [
          { name: "Broca SDS-Plus Set 5pc", price: "$28.00", sku: "MAK-BR-SDS5" },
          { name: "Mandril 13mm", price: "$19.00", sku: "MAK-MN-13" },
          { name: "Carbones para Taladro", price: "$7.00", sku: "MAK-CB-TAL" },
          { name: "Portabrocas Rápido", price: "$24.00", sku: "MAK-PB-01" },
        ],
      },
      {
        name: "Accesorios",
        products: [
          { name: 'Disco de Corte 4.5"', price: "$6.50", sku: "MAK-DC-45" },
          { name: "Disco Diamantado 4.5\"", price: "$18.00", sku: "MAK-DD-45" },
          { name: "Lija Orbital Set 10pc", price: "$12.00", sku: "MAK-LO-10" },
        ],
      },
    ],
  },
  {
    id: "milwaukee",
    name: "Milwaukee",
    accent: "border-red-600",
    badge: "bg-red-600/10 text-red-600",
    categories: [
      {
        name: "Baterías",
        products: [
          { name: "Batería M18 RedLithium 5.0Ah", price: "$95.00", sku: "MIL-M18-5" },
          { name: "Batería M18 RedLithium 3.0Ah", price: "$65.00", sku: "MIL-M18-3" },
          { name: "Batería M12 RedLithium", price: "$45.00", sku: "MIL-M12-2" },
        ],
      },
      {
        name: "Sierras",
        products: [
          { name: "Sierra Sable Blade Set", price: "$32.00", sku: "MIL-SS-SET" },
          { name: "Hoja Sierra Circular 7.25\"", price: "$28.00", sku: "MIL-SC-725" },
          { name: "Hoja Sierra Caladora Set", price: "$18.00", sku: "MIL-SJ-SET" },
        ],
      },
      {
        name: "Taladros",
        products: [
          { name: "Broca Paso Titanio", price: "$24.00", sku: "MIL-BPT-01" },
          { name: "Punta de Impacto Set 20pc", price: "$15.00", sku: "MIL-PI-20" },
          { name: "Broca Cobalto Set 15pc", price: "$38.00", sku: "MIL-BC-15" },
        ],
      },
      {
        name: "Accesorios y Protección",
        products: [
          { name: "Cinta Métrica 8m", price: "$18.00", sku: "MIL-CM-8" },
          { name: "Guantes de Trabajo XL", price: "$22.00", sku: "MIL-GT-XL" },
          { name: "Organizador PACKOUT", price: "$35.00", sku: "MIL-PO-01" },
        ],
      },
    ],
  },
];

const Products = () => {
  const [activeBrand, setActiveBrand] = useState("husqvarna");
  const [search, setSearch] = useState("");
  const brand = brands.find((b) => b.id === activeBrand)!;

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return brand.categories;
    const q = search.toLowerCase();
    return brand.categories
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
  }, [brand, search]);

  return (
    <section className="min-h-full flex flex-col">
      <div className="container py-8 flex-1">
        {/* Header */}
        <div className="mb-8">
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

        {/* Brand Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {brands.map((b) => (
            <button
              key={b.id}
              onClick={() => { setActiveBrand(b.id); setSearch(""); }}
              className={`px-5 py-2.5 rounded-lg font-heading font-bold text-sm uppercase tracking-wider transition-all border-2 ${
                activeBrand === b.id
                  ? `${b.accent} bg-card shadow-md scale-105 text-foreground`
                  : "border-transparent bg-card text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Buscar en ${brand.name}... (nombre o código)`}
            className="w-full pl-10 pr-10 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
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

        {/* Catalog Grid by Category */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <Search size={48} className="mx-auto mb-4 opacity-30" />
            <p className="font-heading font-semibold text-lg">No se encontraron repuestos</p>
            <p className="text-sm mt-1">Intenta con otro término de búsqueda</p>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredCategories.map((cat) => (
              <div key={cat.name}>
                <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <span className={`inline-block w-1 h-5 rounded-full ${brand.accent.replace("border-", "bg-")}`} />
                  {cat.name}
                  <span className="text-xs font-normal text-muted-foreground">
                    ({cat.products.length} {cat.products.length === 1 ? "producto" : "productos"})
                  </span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {cat.products.map((product) => (
                    <div
                      key={product.sku}
                      className={`bg-card border border-border rounded-lg p-4 hover:shadow-lg hover:border-primary/40 transition-all group`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className={`text-[10px] font-heading font-bold uppercase tracking-wider px-2 py-0.5 rounded ${brand.badge}`}>
                          {cat.name}
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground">
                          {product.sku}
                        </span>
                      </div>
                      <h4 className="font-heading font-bold text-card-foreground text-sm mt-2 min-h-[2.5rem]">
                        {product.name}
                      </h4>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                        <span className="text-lg font-heading font-black text-foreground">
                          {product.price}
                        </span>
                        <a
                          href={`https://wa.me/1234567890?text=Hola%2C%20me%20interesa%20${encodeURIComponent(product.name)}%20(${brand.name})%20-%20${product.sku}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-whatsapp text-primary-foreground px-3 py-1.5 rounded-md text-xs font-heading font-bold flex items-center gap-1 hover:brightness-110 transition"
                        >
                          <MessageCircle size={14} />
                          Consultar
                        </a>
                      </div>
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
