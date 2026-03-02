import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useLang } from "@/context/LanguageContext";

const routeMap: Record<string, string> = {
  inicio: "/",
  productos: "/productos",
  nosotros: "/nosotros",
  contacto: "/contacto",
  blog: "/blog",
};

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header = ({ activeTab, onTabChange }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  const navItems = [
    { id: "inicio", label: t.nav_inicio },
    { id: "productos", label: t.nav_productos },
    { id: "nosotros", label: t.nav_nosotros },
    { id: "contacto", label: t.nav_contacto },
    { id: "blog", label: t.nav_blog },
  ];

  return (
    <header className="sticky top-0 z-50 glass-dark border-b border-secondary-foreground/10 py-0">
      <div className="container flex items-center justify-between">
        <Link to="/" onClick={() => onTabChange("inicio")} className="flex items-center gap-3">
          <img src={logo} alt="E-Parts Rental & Sales — equipos de jardinería en Humacao PR" className="h-16 md:h-20 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={routeMap[item.id]}
              onClick={() => onTabChange(item.id)}
              className={`px-4 py-2 rounded-md font-heading font-semibold text-sm uppercase tracking-wider transition-colors ${
                activeTab === item.id
                  ? "text-primary bg-primary/10"
                  : "text-secondary-foreground/80 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-secondary-foreground/20 bg-secondary-foreground/5 hover:bg-primary/10 hover:border-primary/40 transition-all font-heading font-bold text-xs text-secondary-foreground/70 hover:text-primary"
            aria-label="Switch language"
          >
            <span className="text-sm">{lang === "es" ? "🇺🇸" : "🇵🇷"}</span>
            <span>{lang === "es" ? "EN" : "ES"}</span>
          </button>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-secondary-foreground p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-secondary border-t border-border px-6 pb-4 flex flex-col gap-2 animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={routeMap[item.id]}
              onClick={() => { onTabChange(item.id); setMenuOpen(false); }}
              className={`text-left px-3 py-2 rounded-md font-heading font-semibold text-sm uppercase tracking-wider transition-colors ${
                activeTab === item.id
                  ? "text-primary bg-primary/10"
                  : "text-secondary-foreground/80 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
