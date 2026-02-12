import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = ["Inicio", "Productos", "Categorías", "Contacto"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-secondary">
      <div className="container flex items-center justify-between py-3">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="E-Parts Rental & Sales" className="h-12 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-secondary-foreground/80 hover:text-primary font-heading font-semibold text-sm uppercase tracking-wider transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="https://wa.me/1234567890?text=Hola%2C%20me%20interesa%20una%20pieza"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-primary-foreground px-5 py-2 rounded-md font-heading font-bold text-sm hover:brightness-110 transition"
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
        <nav className="md:hidden bg-secondary border-t border-border px-6 pb-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-secondary-foreground/80 hover:text-primary font-heading font-semibold text-sm uppercase tracking-wider transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="https://wa.me/1234567890?text=Hola%2C%20me%20interesa%20una%20pieza"
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
