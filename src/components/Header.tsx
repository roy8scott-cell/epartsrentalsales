import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const routeMap: Record<string, string> = {
  inicio: "/",
  productos: "/productos",
  nosotros: "/nosotros",
  contacto: "/contacto",
};

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "productos", label: "Productos" },
  { id: "nosotros", label: "Nosotros" },
  { id: "contacto", label: "Contacto" },
];

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header = ({ activeTab, onTabChange }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-secondary py-0">
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
                  ? "text-secondary-foreground bg-primary/10"
                  : "text-secondary-foreground/80 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-secondary-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-secondary border-t border-border px-6 pb-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={routeMap[item.id]}
              onClick={() => { onTabChange(item.id); setMenuOpen(false); }}
              className={`text-left px-3 py-2 rounded-md font-heading font-semibold text-sm uppercase tracking-wider transition-colors ${
                activeTab === item.id
                  ? "text-secondary-foreground bg-primary/10"
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
