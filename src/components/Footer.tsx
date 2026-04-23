import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-green text-dark-green-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-xl sm:text-2xl font-bold mb-4">
              LAM-Tuture
            </h3>
            <p className="text-dark-green-foreground/60 text-sm leading-relaxed">
              Premium Nigerian hardwood charcoal, sustainably produced and exported worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-xs sm:text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-dark-green-foreground/60">
              <li><Link to="/" className="hover:text-dark-green-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-dark-green-foreground transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-dark-green-foreground transition-colors">Products</Link></li>
              <li><Link to="/production" className="hover:text-dark-green-foreground transition-colors">Production</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-semibold mb-4 text-xs sm:text-sm uppercase tracking-wider">
              More
            </h4>
            <ul className="space-y-2 text-sm text-dark-green-foreground/60">
              <li><Link to="/export" className="hover:text-dark-green-foreground transition-colors">Export</Link></li>
              <li><Link to="/sustainability" className="hover:text-dark-green-foreground transition-colors">Sustainability</Link></li>
              <li><Link to="/contact" className="hover:text-dark-green-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            
            {/* divone contact */}
            <div>
              <h4 className="font-semibold mb-4 text-xs sm:text-sm uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-3 text-sm text-dark-green-foreground/60">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 shrink-0" />
                  <span className="leading-relaxed">
                    <p className="text-base sm:text-lg">Nigeria Office</p>
                    KM 7, Idere–Igboora Road,
                    Behind School of Missions,
                    Idere, Oyo State, Nigeria.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span className="break-all">info@lamtuture.com</span>
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span className="hover:text-dark-green-foreground transition-colors">+2348134229301</span>
                  <span className="hover:text-dark-green-foreground transition-colors">+2348141997509 </span>
                </li>
              </ul>
            </div>

            {/* divtwo contact */}
            <div>
              <h4 className="font-semibold mb-4 text-xs sm:text-sm uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-3 text-sm text-dark-green-foreground/60">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 shrink-0" />
                  <span className="leading-relaxed">
                    <p className="text-base sm:text-lg">UK Office</p>
                    103 Shields Rd, Newcastle upon Tyne NE6 1DN
                    United Kingdom
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 shrink-0" />
                  <a
                    href="https://wa.me/447586554460"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-dark-green-foreground transition-colors"
                  >
                    +44758655446
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="border-t border-dark-green-foreground/10 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-dark-green-foreground/40">
          © {new Date().getFullYear()} LAM-Tuture Nigeria Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;