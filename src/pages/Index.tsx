import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const tabs = [
  { id: "inicio", label: "Inicio" },
  { id: "productos", label: "Productos" },
  { id: "contacto", label: "Contacto" },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("inicio");

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-y-auto">
        {activeTab === "inicio" && <Hero onNavigate={setActiveTab} />}
        {activeTab === "productos" && <Products />}
        {activeTab === "contacto" && <Footer />}
      </main>
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
