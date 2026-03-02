import { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { ShoppingCart, Search, X, ArrowUpDown, Check } from "lucide-react";
import { brands, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useLang } from "@/context/LanguageContext";

type SortOption = "price-asc" | "price-desc" | "name-asc";

const parsePrice = (price: string): number =>
  parseFloat(price.replace(/[^0-9.]/g, "")) || 0;

const sortProducts = (products: Product[], sort: SortOption): Product[] => {
  const sorted = [...products];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    case "price-desc":
      return sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
};

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeBrand, setActiveBrand] = useState("husqvarna");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categoryBarRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState(() => searchParams.get("buscar") || "");
  const [sort, setSort] = useState<SortOption>("price-asc");
  const { t } = useLang();
  const brand = brands.find((b) => b.id === activeBrand)!;

  useEffect(() => {
    const q = searchParams.get("buscar");
    if (q) {
      setSearchParams({}, { replace: true });
    }
  }, []);

  useEffect(() => {
    setActiveCategory(null);
    if (categoryBarRef.current) {
      categoryBarRef.current.scrollTo({ left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [activeBrand]);

  useEffect(() => {
    const main = document.querySelector("main");
    if (main) {
      main.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [activeBrand, activeCategory]);

  const filteredCategories = useMemo(() => {
    let cats = brand.categories;
    if (activeCategory) {
      cats = cats.filter((cat) => cat.name === activeCategory);
    }
    const q = search.toLowerCase().trim();
    const filtered = q
      ? cats
          .map((cat) => ({
            ...cat,
            products: cat.products.filter(
              (p) =>
                p.name.toLowerCase().includes(q) ||
                p.sku.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                cat.name.toLowerCase().includes(q)
            ),
          }))
          .filter((cat) => cat.products.length > 0)
      : cats;

    return filtered.map((cat) => ({
      ...cat,
      products: sortProducts(cat.products, sort),
    }));
  }, [brand, search, activeCategory, sort]);

  const totalResults = filteredCategories.reduce((sum, cat) => sum + cat.products.length, 0);

  return (
    <section className="min-h-full flex flex-col">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border md:relative md:border-0 md:bg-transparent md:backdrop-blur-none">
        <div className="container pt-4 pb-3 md:pt-8">
          <div className="hidden md:block mb-6">
            <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">
              {t.products_badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-2">
              {t.products_title}
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              {t.products_desc}
            </p>
          </div>

          {/* Brand Tabs */}
          <div className="flex gap-2 mb-3 overflow-x-auto pb-1 scrollbar-hide md:flex-wrap md:overflow-visible md:mb-6">
            {brands.map((b) => (
              <button
                key={b.id}
                onClick={() => { setActiveBrand(b.id); setActiveCategory(null); setSearch(""); window.scrollTo({ top: 0, behavior: "smooth" }); }}
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
          {brand.categories.length > 0 && (
            <div ref={categoryBarRef} className="flex gap-2 mb-3 overflow-x-auto pb-1 scrollbar-hide md:flex-wrap md:overflow-visible">
              <button
                onClick={() => { setActiveCategory(null); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs font-heading font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                  activeCategory === null
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.products_all}
              </button>
              {brand.categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => { setActiveCategory(cat.name); window.scrollTo({ top: 0, behavior: "smooth" }); }}
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
          )}

          {/* Search & Sort */}
          <div className="flex gap-2 items-center">
            <div className="relative flex-1 md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={`${t.products_search_placeholder} ${brand.name}...`}
                className="w-full pl-10 pr-10 py-2.5 md:py-3 rounded-full md:rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
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
            <div className="relative flex-shrink-0">
              <ArrowUpDown className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={14} />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="pl-8 pr-3 py-2.5 md:py-3 rounded-full md:rounded-lg border border-border bg-card text-foreground font-body text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition appearance-none cursor-pointer"
              >
                <option value="price-asc">{t.products_sort_price_asc}</option>
                <option value="price-desc">{t.products_sort_price_desc}</option>
                <option value="name-asc">{t.products_sort_name}</option>
              </select>
            </div>
          </div>

          {search && (
            <p className="text-xs text-muted-foreground mt-2 md:hidden">
              {totalResults} {t.products_results}{totalResults !== 1 ? "s" : ""} {t.products_result_for} "{search}"
            </p>
          )}
        </div>
      </div>

      {/* Products List */}
      <div className="container py-4 md:py-0 flex-1">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <Search size={40} className="mx-auto mb-3 opacity-30" />
            <p className="font-heading font-semibold">
              {brand.categories.length === 0
                ? t.products_empty_soon
                : t.products_empty_noresult}
            </p>
            <p className="text-sm mt-1">
              {brand.categories.length === 0
                ? t.products_empty_soon_desc
                : t.products_empty_noresult_desc}
            </p>
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

                <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4">
                  {cat.products.map((product) => (
                    <div
                      key={product.sku}
                      className="glass rounded-2xl md:rounded-xl overflow-hidden hover:shadow-[0_16px_48px_hsl(var(--primary)/0.18)] hover:border-primary/40 transition-all group flex items-center gap-3 md:flex-col md:items-stretch animate-fade-in"
                    >
                      {product.image && (
                        <ImageWithZoom src={product.image} alt={product.name} variant="desktop" />
                      )}
                      {product.image && (
                        <ImageWithZoom src={product.image} alt={product.name} variant="mobile" />
                      )}

                      <div className={`flex-1 min-w-0 md:flex-auto p-3 md:p-4 ${product.image ? 'md:pt-0' : ''}`}>
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
                        <p className="text-[11px] md:text-xs text-muted-foreground leading-snug mt-1">
                          {product.description}
                        </p>
                        <span className="text-lg font-heading font-black text-foreground md:hidden mt-1 block">
                          {product.price}
                        </span>
                      </div>

                      {/* Desktop: price + add to cart */}
                      <div className="hidden md:flex items-center justify-between px-4 pb-4 pt-2 border-t border-border/50 mx-4">
                        <span className="text-lg font-heading font-black text-foreground">
                          {product.price}
                        </span>
                        <AddToCartButton product={product} brandName={brand.name} />
                      </div>

                      {/* Mobile: add to cart */}
                      <div className="md:hidden flex-shrink-0 mr-3">
                        <AddToCartButton product={product} brandName={brand.name} mobile />
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

const ImageWithZoom = ({ src, alt, variant }: { src: string; alt: string; variant: "desktop" | "mobile" }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {variant === "desktop" ? (
        <div className="hidden md:block bg-muted/30 p-4 cursor-zoom-in" onClick={() => setOpen(true)}>
          <img src={src} alt={alt} className="w-full h-40 object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        </div>
      ) : (
        <div className="md:hidden w-20 h-20 flex-shrink-0 bg-muted/30 rounded-xl overflow-hidden ml-3 cursor-zoom-in" onClick={() => setOpen(true)}>
          <img src={src} alt={alt} className="w-full h-full object-contain p-1" loading="lazy" />
        </div>
      )}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[90vw] md:max-w-2xl p-2 bg-background">
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          <img src={src} alt={alt} className="w-full max-h-[80vh] object-contain" />
        </DialogContent>
      </Dialog>
    </>
  );
};

const AddToCartButton = ({ product, brandName, mobile }: { product: Product; brandName: string; mobile?: boolean }) => {
  const { addItem, items, setIsOpen } = useCart();
  const { t } = useLang();
  const [justAdded, setJustAdded] = useState(false);
  const inCart = items.find((i) => i.product.sku === product.sku);

  const handleAdd = () => {
    addItem(product, brandName);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  if (mobile) {
    return (
      <button
        onClick={inCart ? () => setIsOpen(true) : handleAdd}
        className={`px-4 py-2.5 rounded-full text-xs font-heading font-bold flex items-center gap-1.5 transition flex-shrink-0 shadow-sm ${
          justAdded
            ? "bg-accent text-accent-foreground"
            : inCart
            ? "bg-primary/10 text-primary border border-primary/30"
            : "bg-primary text-primary-foreground hover:brightness-110"
        }`}
      >
        {justAdded ? <Check size={14} /> : <ShoppingCart size={14} />}
        {justAdded ? t.products_added : inCart ? `${t.products_in_cart} (${inCart.quantity})` : t.products_add}
      </button>
    );
  }

  return (
    <button
      onClick={inCart ? () => setIsOpen(true) : handleAdd}
      className={`px-3 py-1.5 rounded-md text-xs font-heading font-bold flex items-center gap-1 transition ${
        justAdded
          ? "bg-accent text-accent-foreground"
          : inCart
          ? "bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20"
          : "bg-primary text-primary-foreground hover:brightness-110"
      }`}
    >
      {justAdded ? <Check size={14} /> : <ShoppingCart size={14} />}
      {justAdded ? t.products_added : inCart ? `${t.products_in_cart} (${inCart.quantity})` : t.products_add}
    </button>
  );
};

export default Products;
