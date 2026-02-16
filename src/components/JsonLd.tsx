const JsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "E-Parts Rental & Sales",
    description: "Venta y renta de equipos y piezas de jardinería en Humacao, Puerto Rico. Distribuidor autorizado Husqvarna.",
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;
