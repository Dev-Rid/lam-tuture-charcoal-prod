import { Link, useLocation } from "react-router-dom";
import { Home, Info, Package, Factory, Ship, Leaf, Mail } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/about", label: "About", icon: Info },
  { path: "/products", label: "Products", icon: Package },
  { path: "/production", label: "Production", icon: Factory },
  { path: "/export", label: "Export", icon: Ship },
  { path: "/sustainability", label: "Sustainability", icon: Leaf },
  { path: "/contact", label: "Contact", icon: Mail },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-dark-green/95 backdrop-blur-md rounded-full px-2 py-2 flex gap-1 shadow-2xl">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-dark-green-foreground/70 hover:text-dark-green-foreground"
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="hidden md:inline">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
