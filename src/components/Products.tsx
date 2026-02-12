import { MessageCircle } from "lucide-react";

const products = [
  { name: "Cuchilla para Podadora 21\"", price: "$25.00", category: "Podadoras" },
  { name: "Cadena Motosierra 16\"", price: "$18.50", category: "Motosierras" },
  { name: "Cabezal Trimmer Universal", price: "$12.00", category: "Trimmers" },
  { name: "Filtro de Aire Sopladora", price: "$8.99", category: "Sopladoras" },
  { name: "Bujía NGK Multiuso", price: "$4.50", category: "Repuestos" },
  { name: "Línea de Corte .095\" (1lb)", price: "$15.00", category: "Trimmers" },
];

const Products = () => {
  return (
    <section id="productos" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">
            Productos
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-2">
            Piezas Destacadas
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Pronto actualizaremos el inventario completo. ¡Consulta disponibilidad por WhatsApp!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all group"
            >
              <div className="h-44 bg-secondary/30 flex items-center justify-center">
                <Cog className="w-16 h-16 text-muted-foreground/30 group-hover:text-primary/40 transition-colors" />
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
                    href={`https://wa.me/1234567890?text=Hola%2C%20me%20interesa%20${encodeURIComponent(product.name)}`}
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

const Cog = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);

export default Products;
