import { Link, useLocation } from "react-router-dom";
import { Home, Info, Package, Factory, Ship, Leaf, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/about", label: "About", icon: Info },
  { path: "/products", label: "Products", icon: Package },
  { path: "/production", label: "Production", icon: Factory },
  { path: "/export", label: "Export", icon: Ship },
  { path: "/sustainability", label: "Sustainability", icon: Leaf },
  { path: "/contact", label: "Contact", icon: Mail },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-green/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="font-serif text-xl font-bold text-dark-green-foreground">
          LAM-Tuture
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-dark-green-foreground/70 hover:text-dark-green-foreground hover:bg-dark-green-foreground/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-dark-green-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-dark-green/95 backdrop-blur-md border-t border-dark-green-foreground/10 pb-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-dark-green-foreground/70 hover:text-dark-green-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
