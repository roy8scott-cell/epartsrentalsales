import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "productos", label: "Productos" },
  { id: "categorías", label: "Categorías" },
  { id: "contacto", label: "Contacto" },
];

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header = ({ activeTab, onTabChange }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-secondary">
      <div className="container flex items-center justify-between py-3">
        <button onClick={() => onTabChange("inicio")} className="flex items-center gap-3">
          <img src={logo} alt="E-Parts Rental & Sales" className="h-12 w-auto" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`px-4 py-2 rounded-md font-heading font-semibold text-sm uppercase tracking-wider transition-colors ${
                activeTab === item.id
                  ? "text-primary bg-primary/10"
                  : "text-secondary-foreground/80 hover:text-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/17878524747?text=Hola%2C%20me%20interesa%20una%20pieza"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-primary-foreground px-5 py-2 rounded-md font-heading font-bold text-sm hover:brightness-110 transition ml-4"
          >
            WhatsApp
          </a>
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
            <button
              key={item.id}
              onClick={() => { onTabChange(item.id); setMenuOpen(false); }}
              className={`text-left px-3 py-2 rounded-md font-heading font-semibold text-sm uppercase tracking-wider transition-colors ${
                activeTab === item.id
                  ? "text-primary bg-primary/10"
                  : "text-secondary-foreground/80 hover:text-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/17878524747?text=Hola%2C%20me%20interesa%20una%20pieza"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-primary-foreground px-5 py-2 rounded-md font-heading font-bold text-sm text-center hover:brightness-110 transition"
          >
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
