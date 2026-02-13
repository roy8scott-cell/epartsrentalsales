import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-secondary text-secondary-foreground">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src={logo} alt="E-Parts" className="h-16 w-auto mb-4" />
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              Venta y renta de piezas para equipos de jardinería. Servicio rápido y confiable.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-primary mb-4">
              Categorías
            </h4>
            <ul className="space-y-2 text-secondary-foreground/60 text-sm">
              <li><a href="#categorías" className="hover:text-primary transition-colors">Podadoras</a></li>
              <li><a href="#categorías" className="hover:text-primary transition-colors">Motosierras</a></li>
              <li><a href="#categorías" className="hover:text-primary transition-colors">Trimmers</a></li>
              <li><a href="#categorías" className="hover:text-primary transition-colors">Sopladoras</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-primary mb-4">
              Contacto
            </h4>
            <ul className="space-y-2 text-secondary-foreground/60 text-sm">
              <li>
                <a href="https://wa.me/17878094747?text=Hola%2C%20necesito%20información" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  📱 +1 (787) 809-4747 (WhatsApp principal)
                </a>
              </li>
              <li>
                <a href="https://wa.me/17878525975?text=Hola%2C%20necesito%20información" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  📱 +1 (787) 852-5975 (WhatsApp)
                </a>
              </li>
              <li>
                <a href="mailto:epartsrental@yahoo.com" className="hover:text-primary transition-colors">
                  📧 epartsrental@yahoo.com
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Calle+Cruz+Ortiz+Stella+117+Suite+2+Humacao+Puerto+Rico+00791" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  📍 Calle Cruz Ortiz Stella #117 Suite 2, Humacao, PR 00791
                </a>
              </li>
              <li>
                <a href="https://instagram.com/epartsrentalsales" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  📸 @epartsrentalsales
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/10 mt-10 pt-6 text-center text-secondary-foreground/40 text-xs">
          © {new Date().getFullYear()} E-Parts Rental & Sales. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
