import { useState } from "react";
import { MessageCircle } from "lucide-react";

const brands = [
  {
    id: "husqvarna",
    name: "Husqvarna",
    color: "from-orange-500 to-orange-700",
    description: "Equipos profesionales de jardinería y forestales",
    products: [
      { name: "Cadena Motosierra 16\"", price: "$18.50", category: "Motosierras" },
      { name: "Cabezal Trimmer T25", price: "$22.00", category: "Trimmers" },
      { name: "Filtro de Aire Sopladora", price: "$8.99", category: "Sopladoras" },
      { name: "Bujía NGK para Husqvarna", price: "$4.50", category: "Repuestos" },
      { name: "Línea de Corte .095\" (1lb)", price: "$15.00", category: "Trimmers" },
      { name: "Barra Guía 18\"", price: "$35.00", category: "Motosierras" },
    ],
  },
  {
    id: "makita",
    name: "Makita",
    color: "from-teal-500 to-teal-700",
    description: "Herramientas eléctricas e inalámbricas de alta calidad",
    products: [
      { name: "Batería 18V 5.0Ah", price: "$89.00", category: "Baterías" },
      { name: "Cargador Rápido DC18RC", price: "$45.00", category: "Cargadores" },
      { name: "Broca SDS-Plus Set 5pc", price: "$28.00", category: "Taladros" },
      { name: "Disco de Corte 4.5\"", price: "$6.50", category: "Accesorios" },
      { name: "Carbones para Taladro", price: "$7.00", category: "Repuestos" },
      { name: "Mandril 13mm", price: "$19.00", category: "Taladros" },
    ],
  },
  {
    id: "milwaukee",
    name: "Milwaukee",
    color: "from-red-600 to-red-800",
    description: "Herramientas industriales de máximo rendimiento",
    products: [
      { name: "Batería M18 RedLithium", price: "$95.00", category: "Baterías" },
      { name: "Sierra Sable Blade Set", price: "$32.00", category: "Sierras" },
      { name: "Broca Paso Titanio", price: "$24.00", category: "Taladros" },
      { name: "Cinta Métrica 8m", price: "$18.00", category: "Accesorios" },
      { name: "Guantes de Trabajo XL", price: "$22.00", category: "Protección" },
      { name: "Punta de Impacto Set", price: "$15.00", category: "Accesorios" },
    ],
  },
];

const Products = () => {
  const [activeBrand, setActiveBrand] = useState("husqvarna");
  const brand = brands.find((b) => b.id === activeBrand)!;

  return (
    <section className="min-h-full flex flex-col">
      <div className="container py-10 flex-1">
        <div className="text-center mb-8">
          <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">
            Productos
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-2">
            Nuestras Marcas
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Trabajamos con las mejores marcas. ¡Consulta disponibilidad por WhatsApp!
          </p>
        </div>

        {/* Brand Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {brands.map((b) => (
            <button
              key={b.id}
              onClick={() => setActiveBrand(b.id)}
              className={`px-6 py-3 rounded-lg font-heading font-bold text-sm uppercase tracking-wider transition-all ${
                activeBrand === b.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>

        {/* Brand Description */}
        <p className="text-center text-muted-foreground mb-8 font-body">
          {brand.description}
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brand.products.map((product) => (
            <div
              key={product.name}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all group"
            >
              <div className={`h-32 bg-gradient-to-br ${brand.color} opacity-10 group-hover:opacity-20 transition-opacity flex items-center justify-center`}>
                <CogIcon className="w-14 h-14 text-foreground/20 group-hover:text-foreground/30 transition-colors" />
              </div>
              <div className="p-5">
                <span className="text-xs font-heading font-semibold text-primary uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="font-heading font-bold text-card-foreground mt-1">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-heading font-black text-foreground">
                    {product.price}
                  </span>
                  <a
                    href={`https://wa.me/1234567890?text=Hola%2C%20me%20interesa%20${encodeURIComponent(product.name)}%20(${brand.name})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-whatsapp text-primary-foreground px-4 py-2 rounded-md text-sm font-heading font-bold flex items-center gap-1.5 hover:brightness-110 transition"
                  >
                    <MessageCircle size={16} />
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CogIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);

export default Products;
