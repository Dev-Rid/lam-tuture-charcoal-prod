import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-green text-dark-green-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-4">LAM-Tuture</h3>
            <p className="text-dark-green-foreground/60 text-sm leading-relaxed">
              Premium Nigerian hardwood charcoal, sustainably produced and exported worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-dark-green-foreground/60">
              <li><Link to="/" className="hover:text-dark-green-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-dark-green-foreground transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-dark-green-foreground transition-colors">Products</Link></li>
              <li><Link to="/production" className="hover:text-dark-green-foreground transition-colors">Production</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">More</h4>
            <ul className="space-y-2 text-sm text-dark-green-foreground/60">
              <li><Link to="/export" className="hover:text-dark-green-foreground transition-colors">Export</Link></li>
              <li><Link to="/sustainability" className="hover:text-dark-green-foreground transition-colors">Sustainability</Link></li>
              <li><Link to="/contact" className="hover:text-dark-green-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-dark-green-foreground/60">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@lamtuture.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+234 800 000 0000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-green-foreground/10 mt-12 pt-8 text-center text-sm text-dark-green-foreground/40">
          © {new Date().getFullYear()} LAM-Tuture Nigeria Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
