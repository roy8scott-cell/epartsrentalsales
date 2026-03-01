import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "es" | "en";

interface Translations {
  // Nav
  nav_inicio: string;
  nav_productos: string;
  nav_nosotros: string;
  nav_contacto: string;
  // Hero
  hero_badge: string;
  hero_title: string;
  hero_title_highlight: string;
  hero_desc: string;
  hero_cta_products: string;
  hero_cta_whatsapp: string;
  // Categories
  cat_title_badge: string;
  cat_title: string;
  cat_podadoras: string;
  cat_podadoras_desc: string;
  cat_motosierras: string;
  cat_motosierras_desc: string;
  cat_trimmers: string;
  cat_trimmers_desc: string;
  cat_sopladoras: string;
  cat_sopladoras_desc: string;
  // About
  about_badge: string;
  about_title: string;
  about_desc1: string;
  about_desc2: string;
  about_services_title: string;
  about_services: string[];
  about_highlights: { label: string }[];
  // Testimonials
  testimonials_badge: string;
  testimonials_title: string;
  testimonials: { name: string; location: string; text: string; rating: number }[];
  // FAQ
  faq_badge: string;
  faq_title: string;
  faqs: { q: string; a: string }[];
  // Products
  products_badge: string;
  products_title: string;
  products_desc: string;
  products_all: string;
  products_sort_price_asc: string;
  products_sort_price_desc: string;
  products_sort_name: string;
  products_search_placeholder: string;
  products_empty_soon: string;
  products_empty_soon_desc: string;
  products_empty_noresult: string;
  products_empty_noresult_desc: string;
  products_results: string;
  products_result_for: string;
  products_add: string;
  products_added: string;
  products_in_cart: string;
  // Footer
  footer_desc: string;
  footer_categories: string;
  footer_contact: string;
  footer_rights: string;
  // Nosotros
  nosotros_badge: string;
  nosotros_title: string;
  nosotros_subtitle: string;
  nosotros_our_story: string;
  nosotros_p1: string;
  nosotros_p2: string;
  nosotros_p3: string;
  nosotros_highlights: { label: string; detail: string }[];
  nosotros_services_title: string;
  nosotros_services: { title: string; desc: string }[];
  nosotros_brands_title: string;
  nosotros_location_title: string;
  nosotros_address_label: string;
  nosotros_hours_label: string;
  nosotros_hours_wf: string;
  nosotros_hours_sat: string;
  nosotros_hours_sun: string;
  nosotros_phone_label: string;
  nosotros_email_label: string;
  nosotros_instagram_label: string;
  nosotros_cta: string;
  // Contacto
  contacto_badge: string;
  contacto_title: string;
  contacto_desc: string;
  contacto_info_title: string;
  contacto_location_title: string;
  contacto_maps_btn: string;
  contacto_cta: string;
  // Cart
  cart_title: string;
  cart_empty: string;
  cart_whatsapp: string;
  cart_total: string;
  cart_items: string;
}

const es: Translations = {
  nav_inicio: "Inicio",
  nav_productos: "Productos",
  nav_nosotros: "Nosotros",
  nav_contacto: "Contacto",
  hero_badge: "Equipos de Jardinería y Hogar en Humacao, PR",
  hero_title: "Piezas y Equipos para tu",
  hero_title_highlight: "Jardín y Hogar",
  hero_desc: "Venta y renta de motosierras, trimmers, sopladoras y tractores Husqvarna en Puerto Rico. Compra fácil por WhatsApp con envío rápido.",
  hero_cta_products: "Ver Productos",
  hero_cta_whatsapp: "Cotizar por WhatsApp",
  cat_title_badge: "Categorías",
  cat_title: "Encuentra lo que Necesitas",
  cat_podadoras: "Podadoras",
  cat_podadoras_desc: "Piezas para cortadoras de césped, cuchillas, filtros y más.",
  cat_motosierras: "Motosierras",
  cat_motosierras_desc: "Cadenas, barras guía, bujías y repuestos originales.",
  cat_trimmers: "Trimmers",
  cat_trimmers_desc: "Cabezales, líneas de corte, ejes y accesorios.",
  cat_sopladoras: "Sopladoras",
  cat_sopladoras_desc: "Tubos, filtros de aire, arrancadores y partes eléctricas.",
  about_badge: "Sobre Nosotros",
  about_title: "Dealer Makita y Milwaukee en Puerto Rico",
  about_desc1: "En E-Parts Rental & Sales somos especialistas en venta, renta y reparación de equipos de jardinería en Humacao, Puerto Rico. Como dealer autorizado de Makita y dealer Milwaukee, ofrecemos garantía oficial, piezas originales y servicio técnico certificado.",
  about_desc2: "Realizamos reparación Makita y reparación Milwaukee con piezas originales. También ofrecemos arreglos de plantas eléctricas y máquinas de presión para residencias y negocios en todo Puerto Rico.",
  about_services_title: "Servicios de Reparación y Garantía",
  about_services: [
    "Arreglos de máquina de presión",
    "Arreglos de plantas eléctricas",
    "Reparación Makita — servicio autorizado",
    "Reparación Milwaukee — taller certificado",
    "Arreglos de trimmers y equipos de jardín",
    "Garantía Makita — dealer oficial en PR",
    "Garantía Milwaukee — centro de servicio",
  ],
  about_highlights: [
    { label: "Más de 10 años de experiencia" },
    { label: "Dealer autorizado Makita y Milwaukee" },
    { label: "Garantía Makita y garantía Milwaukee" },
    { label: "Envío rápido a todo Puerto Rico" },
  ],
  testimonials_badge: "Testimonios",
  testimonials_title: "Lo que Dicen Nuestros Clientes",
  testimonials: [
    { name: "Carlos Rivera", location: "Humacao, PR", text: "Excelente servicio. Encontré las piezas para mi motosierra Husqvarna en minutos. Entrega rápida y precios justos.", rating: 5 },
    { name: "María Torres", location: "Caguas, PR", text: "Compré un trimmer por WhatsApp y me lo entregaron al día siguiente. Muy profesionales y atentos.", rating: 5 },
    { name: "José Rodríguez", location: "San Juan, PR", text: "Más de 3 años comprando aquí. Siempre tienen lo que necesito para el mantenimiento de jardines.", rating: 5 },
  ],
  faq_badge: "Preguntas Frecuentes",
  faq_title: "¿Tienes Dudas?",
  faqs: [
    { q: "¿Qué marcas de equipos venden en E-Parts?", a: "Somos dealer autorizado de Makita y Milwaukee, y distribuimos equipos Husqvarna. Ofrecemos motosierras, trimmers, sopladoras, tractores, herramientas eléctricas profesionales y más." },
    { q: "¿Ofrecen servicio de reparación y garantía?", a: "Sí. Como dealer autorizado ofrecemos reparación certificada y garantía oficial de Makita y Milwaukee. También reparamos plantas eléctricas, máquinas de presión y trimmers de todas las marcas." },
    { q: "¿Dónde están ubicados?", a: "Estamos en Calle Cruz Ortiz Stella #117 Suite 2, Humacao, Puerto Rico 00791. Horario: lunes a viernes 8am–5pm y sábados 8am–12pm." },
    { q: "¿Cómo puedo hacer un pedido?", a: "Puedes comunicarte por WhatsApp al (787) 809-4747, visitarnos en la tienda o escribirnos a epartsrental@yahoo.com. Aceptamos efectivo, tarjeta y ATH Móvil." },
    { q: "¿Hacen envíos a toda la isla?", a: "Sí, realizamos envíos a todo Puerto Rico. Consulta disponibilidad y costo de envío por WhatsApp." },
  ],
  products_badge: "Catálogo de Productos",
  products_title: "Encuentra tu Equipo",
  products_desc: "Selecciona la marca y busca por nombre o código. ¡Consulta disponibilidad por WhatsApp!",
  products_all: "Todas",
  products_sort_price_asc: "Menor precio",
  products_sort_price_desc: "Mayor precio",
  products_sort_name: "Nombre A-Z",
  products_search_placeholder: "Buscar en",
  products_empty_soon: "Próximamente — productos en camino",
  products_empty_soon_desc: "Estamos agregando inventario de esta marca",
  products_empty_noresult: "No se encontraron productos",
  products_empty_noresult_desc: "Intenta con otro término",
  products_results: "resultado",
  products_result_for: "para",
  products_add: "Agregar",
  products_added: "Agregado",
  products_in_cart: "En carrito",
  footer_desc: "Dealer autorizado Makita y Milwaukee en Humacao, Puerto Rico. Venta, renta y reparación de equipos Husqvarna, Makita y Milwaukee.",
  footer_categories: "Categorías",
  footer_contact: "Contacto",
  footer_rights: "Todos los derechos reservados.",
  nosotros_badge: "Quiénes Somos",
  nosotros_title: "E-Parts Rental & Sales",
  nosotros_subtitle: "Dealer autorizado Makita y Milwaukee en Humacao, Puerto Rico. Más de una década sirviendo a profesionales y hogares con equipos de la más alta calidad.",
  nosotros_our_story: "Nuestra Historia",
  nosotros_p1: "E-Parts Rental & Sales nació en Humacao, Puerto Rico, con la misión de ofrecer equipos y herramientas de calidad profesional a precios accesibles. Con más de 10 años de experiencia, nos hemos convertido en el dealer de referencia para Makita y Milwaukee en el este de Puerto Rico.",
  nosotros_p2: "Nuestro equipo de técnicos certificados se especializa en la reparación y mantenimiento de equipos de jardinería, construcción y hogar. Desde motosierras Husqvarna hasta herramientas eléctricas Milwaukee M18 y MX FUEL, ofrecemos servicio técnico con piezas originales y garantía oficial.",
  nosotros_p3: "Ya sea que necesites comprar equipo nuevo, rentar herramientas para un proyecto, o reparar tu equipo existente, en E-Parts encontrarás atención personalizada y el conocimiento técnico que solo años de experiencia pueden ofrecer.",
  nosotros_highlights: [
    { label: "Más de 10 años de experiencia", detail: "Sirviendo a la comunidad de Humacao y todo Puerto Rico desde 2013." },
    { label: "Dealer autorizado Makita y Milwaukee", detail: "Certificación oficial para ventas, reparaciones y garantías." },
    { label: "Garantía oficial de fábrica", detail: "Respaldados directamente por los fabricantes para garantías Makita y Milwaukee." },
    { label: "Envíos a todo Puerto Rico", detail: "Entrega rápida y confiable a cualquier municipio de la isla." },
  ],
  nosotros_services_title: "Nuestros Servicios",
  nosotros_services: [
    { title: "Reparación Makita", desc: "Servicio autorizado con piezas originales. Diagnosticamos y reparamos todas las herramientas Makita." },
    { title: "Reparación Milwaukee", desc: "Taller certificado Milwaukee. Reparamos herramientas M18, M12 y MX FUEL con garantía." },
    { title: "Arreglos de plantas eléctricas", desc: "Mantenimiento preventivo y reparaciones de generadores residenciales y comerciales." },
    { title: "Arreglos de máquinas de presión", desc: "Reparación completa de pressure washers de todas las marcas." },
    { title: "Arreglos de trimmers", desc: "Servicio técnico para trimmers, desbrozadoras y equipos de jardín." },
    { title: "Garantía oficial", desc: "Procesamos garantías Makita y Milwaukee como dealer autorizado en Puerto Rico." },
  ],
  nosotros_brands_title: "Marcas que Representamos",
  nosotros_location_title: "Ubicación y Contacto",
  nosotros_address_label: "Dirección",
  nosotros_hours_label: "Horario",
  nosotros_hours_wf: "Lunes a Viernes: 8:00 AM – 5:00 PM",
  nosotros_hours_sat: "Sábado: 8:00 AM – 12:00 PM",
  nosotros_hours_sun: "Domingo: Cerrado",
  nosotros_phone_label: "Teléfono / WhatsApp",
  nosotros_email_label: "Correo",
  nosotros_instagram_label: "Instagram",
  nosotros_cta: "📱 Contáctanos por WhatsApp",
  contacto_badge: "Contáctanos",
  contacto_title: "Estamos Aquí para Ayudarte",
  contacto_desc: "Comunícate con nosotros por WhatsApp, correo o visítanos en nuestra tienda en Humacao, Puerto Rico. Respuesta rápida garantizada.",
  contacto_info_title: "Información de Contacto",
  contacto_location_title: "Ubicación",
  contacto_maps_btn: "Ver en Google Maps",
  contacto_cta: "📱 Escribir por WhatsApp",
  cart_title: "Tu Carrito",
  cart_empty: "Tu carrito está vacío",
  cart_whatsapp: "Pedir por WhatsApp",
  cart_total: "Total",
  cart_items: "artículos",
};

const en: Translations = {
  nav_inicio: "Home",
  nav_productos: "Products",
  nav_nosotros: "About Us",
  nav_contacto: "Contact",
  hero_badge: "Outdoor & Home Equipment in Humacao, PR",
  hero_title: "Parts & Equipment for your",
  hero_title_highlight: "Garden & Home",
  hero_desc: "Sales and rental of Husqvarna chainsaws, trimmers, blowers and tractors in Puerto Rico. Easy purchase via WhatsApp with fast shipping.",
  hero_cta_products: "View Products",
  hero_cta_whatsapp: "Quote via WhatsApp",
  cat_title_badge: "Categories",
  cat_title: "Find What You Need",
  cat_podadoras: "Mowers",
  cat_podadoras_desc: "Parts for lawn mowers, blades, filters and more.",
  cat_motosierras: "Chainsaws",
  cat_motosierras_desc: "Chains, guide bars, spark plugs and original parts.",
  cat_trimmers: "Trimmers",
  cat_trimmers_desc: "Heads, cutting lines, shafts and accessories.",
  cat_sopladoras: "Blowers",
  cat_sopladoras_desc: "Tubes, air filters, starters and electrical parts.",
  about_badge: "About Us",
  about_title: "Makita & Milwaukee Dealer in Puerto Rico",
  about_desc1: "At E-Parts Rental & Sales we specialize in sales, rental and repair of outdoor equipment in Humacao, Puerto Rico. As an authorized Makita and Milwaukee dealer, we offer official warranty, original parts and certified technical service.",
  about_desc2: "We perform authorized Makita and Milwaukee repairs with original parts. We also offer generator and pressure washer repairs for residential and commercial clients across Puerto Rico.",
  about_services_title: "Repair & Warranty Services",
  about_services: [
    "Pressure washer repairs",
    "Generator repairs",
    "Makita repairs — authorized service",
    "Milwaukee repairs — certified shop",
    "Trimmer & garden equipment repairs",
    "Makita warranty — official dealer in PR",
    "Milwaukee warranty — service center",
  ],
  about_highlights: [
    { label: "Over 10 years of experience" },
    { label: "Authorized Makita & Milwaukee dealer" },
    { label: "Makita & Milwaukee official warranty" },
    { label: "Fast shipping across Puerto Rico" },
  ],
  testimonials_badge: "Testimonials",
  testimonials_title: "What Our Customers Say",
  testimonials: [
    { name: "Carlos Rivera", location: "Humacao, PR", text: "Excellent service. Found the parts for my Husqvarna chainsaw in minutes. Fast delivery and fair prices.", rating: 5 },
    { name: "María Torres", location: "Caguas, PR", text: "I bought a trimmer via WhatsApp and it was delivered the next day. Very professional and attentive.", rating: 5 },
    { name: "José Rodríguez", location: "San Juan, PR", text: "Over 3 years shopping here. They always have what I need for garden maintenance.", rating: 5 },
  ],
  faq_badge: "Frequently Asked Questions",
  faq_title: "Have Questions?",
  faqs: [
    { q: "What equipment brands do you carry at E-Parts?", a: "We are an authorized dealer for Makita and Milwaukee, and we distribute Husqvarna equipment. We offer chainsaws, trimmers, blowers, tractors, professional power tools and more." },
    { q: "Do you offer repair and warranty service?", a: "Yes. As an authorized dealer we provide certified repair and official warranty for Makita and Milwaukee. We also repair generators, pressure washers and trimmers of all brands." },
    { q: "Where are you located?", a: "We are at Calle Cruz Ortiz Stella #117 Suite 2, Humacao, Puerto Rico 00791. Hours: Monday–Friday 8am–5pm and Saturday 8am–12pm." },
    { q: "How can I place an order?", a: "You can reach us via WhatsApp at (787) 809-4747, visit our store, or email us at epartsrental@yahoo.com. We accept cash, credit card and ATH Móvil." },
    { q: "Do you ship across the island?", a: "Yes, we ship anywhere in Puerto Rico. Check availability and shipping cost via WhatsApp." },
  ],
  products_badge: "Product Catalog",
  products_title: "Find Your Equipment",
  products_desc: "Select a brand and search by name or code. Check availability via WhatsApp!",
  products_all: "All",
  products_sort_price_asc: "Lowest price",
  products_sort_price_desc: "Highest price",
  products_sort_name: "Name A-Z",
  products_search_placeholder: "Search in",
  products_empty_soon: "Coming soon — products on the way",
  products_empty_soon_desc: "We are adding inventory for this brand",
  products_empty_noresult: "No products found",
  products_empty_noresult_desc: "Try another search term",
  products_results: "result",
  products_result_for: "for",
  products_add: "Add",
  products_added: "Added",
  products_in_cart: "In cart",
  footer_desc: "Authorized Makita & Milwaukee dealer in Humacao, Puerto Rico. Sales, rental and repair of Husqvarna, Makita and Milwaukee equipment.",
  footer_categories: "Categories",
  footer_contact: "Contact",
  footer_rights: "All rights reserved.",
  nosotros_badge: "About Us",
  nosotros_title: "E-Parts Rental & Sales",
  nosotros_subtitle: "Authorized Makita and Milwaukee dealer in Humacao, Puerto Rico. Over a decade serving professionals and households with top-quality equipment.",
  nosotros_our_story: "Our Story",
  nosotros_p1: "E-Parts Rental & Sales was founded in Humacao, Puerto Rico, with the mission of offering professional-quality equipment and tools at accessible prices. With over 10 years of experience, we have become the go-to Makita and Milwaukee dealer in eastern Puerto Rico.",
  nosotros_p2: "Our team of certified technicians specializes in repair and maintenance of landscaping, construction and home equipment. From Husqvarna chainsaws to Milwaukee M18 and MX FUEL power tools, we offer technical service with original parts and official warranty.",
  nosotros_p3: "Whether you need to buy new equipment, rent tools for a project, or repair your existing equipment, at E-Parts you'll find personalized service and the technical expertise that only years of experience can offer.",
  nosotros_highlights: [
    { label: "Over 10 years of experience", detail: "Serving the Humacao community and all of Puerto Rico since 2013." },
    { label: "Authorized Makita & Milwaukee dealer", detail: "Official certification for sales, repairs and warranties." },
    { label: "Official factory warranty", detail: "Backed directly by manufacturers for Makita and Milwaukee warranties." },
    { label: "Shipping across Puerto Rico", detail: "Fast and reliable delivery to any municipality on the island." },
  ],
  nosotros_services_title: "Our Services",
  nosotros_services: [
    { title: "Makita Repair", desc: "Authorized service with original parts. We diagnose and repair all Makita tools." },
    { title: "Milwaukee Repair", desc: "Certified Milwaukee shop. We repair M18, M12 and MX FUEL tools with warranty." },
    { title: "Generator Repairs", desc: "Preventive maintenance and repair of residential and commercial generators." },
    { title: "Pressure Washer Repairs", desc: "Complete repair of pressure washers of all brands." },
    { title: "Trimmer Repairs", desc: "Technical service for trimmers, brushcutters and garden equipment." },
    { title: "Official Warranty", desc: "We process Makita and Milwaukee warranties as an authorized dealer in Puerto Rico." },
  ],
  nosotros_brands_title: "Brands We Represent",
  nosotros_location_title: "Location & Contact",
  nosotros_address_label: "Address",
  nosotros_hours_label: "Hours",
  nosotros_hours_wf: "Monday to Friday: 8:00 AM – 5:00 PM",
  nosotros_hours_sat: "Saturday: 8:00 AM – 12:00 PM",
  nosotros_hours_sun: "Sunday: Closed",
  nosotros_phone_label: "Phone / WhatsApp",
  nosotros_email_label: "Email",
  nosotros_instagram_label: "Instagram",
  nosotros_cta: "📱 Contact us on WhatsApp",
  contacto_badge: "Contact Us",
  contacto_title: "We're Here to Help",
  contacto_desc: "Reach us via WhatsApp, email or visit our store in Humacao, Puerto Rico. Fast response guaranteed.",
  contacto_info_title: "Contact Information",
  contacto_location_title: "Location",
  contacto_maps_btn: "View on Google Maps",
  contacto_cta: "📱 Message us on WhatsApp",
  cart_title: "Your Cart",
  cart_empty: "Your cart is empty",
  cart_whatsapp: "Order via WhatsApp",
  cart_total: "Total",
  cart_items: "items",
};

const translations = { es, en };

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  setLang: () => {},
  t: es,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
