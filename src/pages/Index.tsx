import { useLocation, useNavigate, Outlet } from "react-router-dom";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CartDrawer from "@/components/CartDrawer";
import MobileBottomNav from "@/components/MobileBottomNav";
import { CartProvider } from "@/context/CartContext";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const activeTab = location.pathname === "/productos"
    ? "productos"
    : location.pathname === "/contacto"
    ? "contacto"
    : location.pathname === "/nosotros"
    ? "nosotros"
    : "inicio";

  const handleTabChange = (tab: string) => {
    if (tab === "inicio") navigate("/");
    else navigate(`/${tab}`);
  };

  return (
    <CartProvider>
      <div className="h-screen flex flex-col bg-background overflow-hidden">
        <Header activeTab={activeTab} onTabChange={handleTabChange} />
        <main className="flex-1 overflow-y-auto pb-16 md:pb-0">
          <Outlet />
        </main>
        <WhatsAppFloat />
        <CartDrawer />
        <MobileBottomNav />
      </div>
    </CartProvider>
  );
};

export default Layout;
