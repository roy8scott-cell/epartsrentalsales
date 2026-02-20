import { useLocation } from "react-router-dom";

const BASE_URL = "https://epartsrentalsales.lovable.app";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#business`,
  name: "E-Parts Rental & Sales",
  alternateName: "E-Parts PR",
  description:
    "Dealer autorizado Makita y Milwaukee en Puerto Rico. Venta, renta y reparación de equipos Husqvarna, Makita y Milwaukee. Garantía oficial, piezas originales y servicio técnico certificado en Humacao, PR.",
  url: BASE_URL,
  telephone: "+17878094747",
  email: "epartsrental@yahoo.com",
  image: `${BASE_URL}/og-logo.png`,
  logo: `${BASE_URL}/og-logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Cruz Ortiz Stella #117 Suite 2",
    addressLocality: "Humacao",
    addressRegion: "PR",
    postalCode: "00791",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.1496,
    longitude: -65.8238,
  },
  areaServed: {
    "@type": "State",
    name: "Puerto Rico",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, ATH Móvil",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  sameAs: ["https://instagram.com/epartsrentalsales"],
  brand: [
    { "@type": "Brand", name: "Husqvarna" },
    { "@type": "Brand", name: "Makita" },
    { "@type": "Brand", name: "Milwaukee" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Equipos y Servicios",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Servicios de Reparación",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación Makita — servicio autorizado" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación Milwaukee — taller certificado" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Arreglos de plantas eléctricas" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Arreglos de máquinas de presión" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Arreglos de trimmers y equipos de jardín" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Garantía Makita — dealer oficial PR" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Garantía Milwaukee — centro de servicio" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Equipos a la Venta",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Motosierras Husqvarna" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Trimmers y Desbrozadoras" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Sopladoras Husqvarna" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Tractores y Zero Turn Husqvarna" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Herramientas Makita" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Herramientas Milwaukee M18/MX FUEL" } },
        ],
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué marcas de equipos venden en E-Parts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Somos dealer autorizado de Makita y Milwaukee, y distribuimos equipos Husqvarna. Ofrecemos motosierras, trimmers, sopladoras, tractores, herramientas eléctricas y más.",
      },
    },
    {
      "@type": "Question",
      name: "¿Ofrecen servicio de reparación y garantía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, como dealer autorizado ofrecemos reparación certificada y garantía oficial de Makita y Milwaukee. También reparamos plantas eléctricas, máquinas de presión y trimmers de todas las marcas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde están ubicados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Estamos en Calle Cruz Ortiz Stella #117 Suite 2, Humacao, Puerto Rico 00791. Atendemos de lunes a viernes de 8am a 5pm y sábados de 8am a 12pm.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo puedo hacer un pedido?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes comunicarte con nosotros por WhatsApp al (787) 809-4747, visitarnos en la tienda o escribirnos a epartsrental@yahoo.com. Aceptamos efectivo, tarjeta de crédito y ATH Móvil.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hacen envíos a toda la isla?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, realizamos envíos a todo Puerto Rico. Consulta disponibilidad y costo de envío por WhatsApp.",
      },
    },
  ],
};

const JsonLd = () => {
  const location = useLocation();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: BASE_URL,
      },
      ...(location.pathname !== "/"
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name:
                location.pathname === "/productos"
                  ? "Productos"
                  : location.pathname === "/contacto"
                  ? "Contacto"
                  : location.pathname === "/nosotros"
                  ? "Quiénes Somos"
                  : "Página",
              item: `${BASE_URL}${location.pathname}`,
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default JsonLd;
