import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const activeTab = location.pathname === "/productos"
    ? "productos"
    : location.pathname === "/contacto"
    ? "contacto"
    : "inicio";

  const handleTabChange = (tab: string) => {
    if (tab === "inicio") navigate("/");
    else navigate(`/${tab}`);
  };

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <Header activeTab={activeTab} onTabChange={handleTabChange} />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;
