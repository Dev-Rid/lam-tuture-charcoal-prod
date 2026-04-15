import { Link } from "react-router-dom";
import { ArrowRight, Download, Flame, Droplets, Timer, Leaf, Truck, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-charcoal.jpg";
import restaurantImg from "@/assets/charcoal-restaurant.jpg";
import bbqImg from "@/assets/charcoal-bbq.jpg";
import briquettesImg from "@/assets/charcoal-briquettes.jpg";

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Premium hardwood charcoal"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 py-20">
          <p className="section-label mb-4">Sustainably Produced · Export-Ready</p>
          <h1 className="text-6xl md:text- file:8xl font-bold leading-[0.95] mb-6 max-w-3xl">
            Premium{" "}
            <em className="text-primary">Nigerian</em>{" "}
            Hardwood Charcoal
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mb-8">
            Professionally processed for global markets. Delivering consistent quality and reliable supply to clients across the world.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/contact">
                Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button> 
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/about">
                <Download className="mr-2 w-4 h-4" /> Company Profile
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground text-sm flex flex-col items-center gap-1 animate-bounce">
          <span>Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 container mx-auto px-6">
        <p className="section-label mb-3">About LAM-Tuture</p>
        <h2 className="section-title mb-6">Rooted in Quality, Built for Export</h2>
        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-6">
          Lam-Tuture Nigeria Limited is a registered Nigerian company (RC 7824430) specializing in the production, processing, distribution, and export of premium hardwood charcoal. Based in Idere, Oyo State — one of Nigeria's leading charcoal-producing regions.
        </p>
        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-8">
          We deliver consistent quality and reliable supply to clients across the world — from the Middle East and Europe to Asia and North America.
        </p>
        <Button asChild variant="outline" className="rounded-full">
          <Link to="/about">Learn more about us <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
      </section>

      {/* Products Section */}
      <section className="py-24 container mx-auto px-6">
        <p className="section-label mb-3">Our Products</p>
        <h2 className="section-title mb-4">Engineered for Performance</h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Three core product lines, each meticulously processed to meet the highest international standards.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: restaurantImg, title: "Restaurant-Grade", specs: "Size 50–200mm · Fixed Carbon >80%", desc: "Ideal for restaurants, grills, and high-heat cooking environments." },
            { img: bbqImg, title: "BBQ Charcoal", specs: "Size 10–49mm · Quick Ignition", desc: "Perfect for home use, supermarkets, and outdoor grilling." },
            { img: briquettesImg, title: "Charcoal Briquettes", specs: "Consistent Shape · Low Smoke", desc: "Clean, uniform, and long-lasting briquettes from compressed charcoal fines." },
          ].map((product) => (
            <Link
              key={product.title}
              to="/products"
              className="group rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold mb-1">{product.title}</h3>
                <p className="text-sm text-primary font-medium mb-2">{product.specs}</p>
                <p className="text-muted-foreground text-sm">{product.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 container mx-auto px-6">
        <p className="section-label mb-3">Why Choose Us</p>
        <h2 className="section-title mb-12">The LAM-Tuture Advantage</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: Flame, title: "High Fixed Carbon", desc: "Over 80% fixed carbon content for maximum heat output and efficiency." },
            { icon: Droplets, title: "Low Ash & Moisture", desc: "Under 5% moisture with minimal ash residue for clean burning." },
            { icon: Timer, title: "Long Burning Time", desc: "Extended burn duration ideal for commercial and industrial use." },
            { icon: Leaf, title: "Sustainable Sourcing", desc: "Responsibly harvested from regulated areas supporting reforestation." },
            { icon: Truck, title: "Reliable Export Logistics", desc: "19–21 tons per 40ft container shipped globally from Lagos ports." },
          ].map((item) => (
            <div key={item.title} className="p-5 rounded-xl border border-border">
              <item.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-serif text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Export Destinations */}
      <section className="py-24 container mx-auto px-6">
        <p className="section-label mb-3">Global Reach</p>
        <h2 className="section-title mb-4">Export Destinations</h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Serving clients across five continents with reliable supply and professional logistics.
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { region: "Middle East", countries: "UAE, Saudi Arabia, Qatar, Jordan" },
            { region: "Europe", countries: "Turkey, Greece, Cyprus, Romania" },
            { region: "Asia", countries: "China, India" },
            { region: "North America", countries: "Retail & industrial buyers" },
            { region: "Africa", countries: "Regional distribution" },
          ].map((item) => (
            <div key={item.region} className="card-dark">
              <h3 className="font-serif text-lg font-bold mb-2">{item.region}</h3>
              <p className="text-sm opacity-80">{item.countries}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 container mx-auto px-6 text-center">
        <h2 className="section-title mb-6">Ready to Partner?</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Whether you need restaurant-grade charcoal, BBQ charcoal, or custom briquettes — we deliver world-class quality at competitive rates.
        </p>
        <Button asChild size="lg" className="rounded-full px-10">
          <Link to="/contact">Get in Touch <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
      </section>
    </div>
  );
};

export default Index;
