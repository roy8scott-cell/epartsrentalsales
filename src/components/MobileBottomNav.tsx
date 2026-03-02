import { Link, useLocation } from "react-router-dom";
import { Home, Package, Users, Phone, BookOpen } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const MobileBottomNav = () => {
  const location = useLocation();
  const { t } = useLang();

  const items = [
    { path: "/", label: t.nav_inicio, icon: Home, id: "inicio" },
    { path: "/productos", label: t.nav_productos, icon: Package, id: "productos" },
    { path: "/blog", label: t.nav_blog, icon: BookOpen, id: "blog" },
    { path: "/nosotros", label: t.nav_nosotros, icon: Users, id: "nosotros" },
    { path: "/contacto", label: t.nav_contacto, icon: Phone, id: "contacto" },
  ];

  const activeId = location.pathname === "/" ? "inicio"
    : location.pathname === "/productos" ? "productos"
    : location.pathname === "/nosotros" ? "nosotros"
    : location.pathname === "/contacto" ? "contacto"
    : location.pathname === "/blog" ? "blog"
    : "";

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-dark border-t border-secondary-foreground/10 safe-area-pb">
      <div className="flex items-stretch justify-around">
        {items.map(({ path, label, icon: Icon, id }) => {
          const isActive = activeId === id;
          return (
            <Link
              key={id}
              to={path}
              className={`flex flex-col items-center justify-center gap-1 py-3 flex-1 transition-all active:scale-95 ${
                isActive
                  ? "text-primary"
                  : "text-secondary-foreground/50 hover:text-secondary-foreground/80"
              }`}
            >
              <div className={`relative flex items-center justify-center w-8 h-8 rounded-xl transition-all ${
                isActive ? "bg-primary/15" : ""
              }`}>
                <Icon size={isActive ? 22 : 20} strokeWidth={isActive ? 2.5 : 1.8} />
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </div>
              <span className={`text-[10px] font-heading font-bold uppercase tracking-wide transition-all ${
                isActive ? "opacity-100" : "opacity-60"
              }`}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
