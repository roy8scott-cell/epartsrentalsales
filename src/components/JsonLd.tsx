const JsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "E-Parts Rental & Sales",
    description: "Dealer autorizado Makita y Milwaukee en Puerto Rico. Reparación, garantía, arreglos de trimmers, máquinas de presión y plantas eléctricas en Humacao, PR.",
    url: "https://epartsrentalsales.lovable.app",
    telephone: "+17878094747",
    email: "epartsrental@yahoo.com",
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
    areaServed: "Puerto Rico",
    priceRange: "$$",
    sameAs: ["https://instagram.com/epartsrentalsales"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de reparación y garantía",
      itemListElement: [
        "Arreglos de máquina de presión",
        "Arreglos de plantas eléctricas",
        "Reparación Makita",
        "Reparación Milwaukee",
        "Garantía Makita",
        "Garantía Milwaukee",
        "Arreglos de trimmers",
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;
