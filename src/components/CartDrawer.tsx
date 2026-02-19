import { ShoppingCart, X, Trash2, Plus, Minus, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

const parsePrice = (price: string): number =>
  parseFloat(price.replace(/[^0-9.]/g, "")) || 0;

const formatPrice = (n: number): string =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, clearCart, totalItems, isOpen, setIsOpen } = useCart();

  const subtotal = items.reduce(
    (sum, i) => sum + parsePrice(i.product.price) * i.quantity,
    0
  );

  const buildWhatsAppMessage = () => {
    const lines = items.map(
      (i) =>
        `• ${i.product.name} (${i.brand}) — SKU: ${i.product.sku} × ${i.quantity} = ${formatPrice(parsePrice(i.product.price) * i.quantity)}`
    );
    const msg = `¡Hola! Me interesa comprar los siguientes productos:\n\n${lines.join("\n")}\n\n*Total estimado: ${formatPrice(subtotal)}*\n\n¿Están disponibles?`;
    return `https://wa.me/17878094747?text=${encodeURIComponent(msg)}`;
  };

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-5 z-40 bg-primary text-primary-foreground w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:brightness-110 transition-all active:scale-95"
        aria-label="Abrir carrito"
      >
        <ShoppingCart size={22} />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {totalItems > 99 ? "99+" : totalItems}
          </span>
        )}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border z-50 flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingCart size={20} className="text-primary" />
            <h2 className="font-heading font-bold text-lg">
              Mi Carrito
              {totalItems > 0 && (
                <span className="text-sm font-normal text-muted-foreground ml-2">
                  ({totalItems} {totalItems === 1 ? "artículo" : "artículos"})
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-foreground p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <ShoppingCart size={48} className="mx-auto mb-3 opacity-20" />
              <p className="font-heading font-semibold">Tu carrito está vacío</p>
              <p className="text-sm mt-1">Agrega productos desde el catálogo</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.product.sku}
                  className="bg-card border border-border rounded-lg p-3 flex gap-3"
                >
                  {item.product.image && (
                    <div className="w-16 h-16 flex-shrink-0 bg-muted/30 rounded-md overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-heading font-bold text-sm text-card-foreground leading-tight truncate">
                      {item.product.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground font-mono">
                      {item.brand} • {item.product.sku}
                    </p>
                    <p className="font-heading font-bold text-foreground text-sm mt-1">
                      {item.product.price}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.sku, item.quantity - 1)}
                        className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-heading font-bold w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.sku, item.quantity + 1)}
                        className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() => removeItem(item.product.sku)}
                        className="ml-auto text-muted-foreground hover:text-destructive transition p-1"
                        aria-label="Eliminar"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Subtotal estimado</span>
              <span className="text-xl font-heading font-black text-foreground">
                {formatPrice(subtotal)}
              </span>
            </div>
            <a
              href={buildWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-whatsapp text-primary-foreground py-3 rounded-lg font-heading font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 transition active:scale-[0.98]"
            >
              <MessageCircle size={18} />
              Comprar por WhatsApp
            </a>
            <button
              onClick={clearCart}
              className="w-full text-xs text-muted-foreground hover:text-destructive transition py-1"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
