import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import restaurantImg from "@/assets/charcoal-restaurant.jpg";
import bbqImg from "@/assets/charcoal-bbq.jpg";
import briquettesImg from "@/assets/charcoal-briquettes.jpg";

const products = [
  {
    label: "PRODUCT 01",
    title: "Restaurant-Grade Hardwood Charcoal",
    desc: "Ideal for restaurants, grills, and high-heat cooking environments.",
    img: restaurantImg,
    specs: [
      { label: "SIZE", value: "50–200 mm" },
      { label: "FIXED CARBON", value: ">80%" },
      { label: "MOISTURE", value: "<5%" },
    ],
    features: ["Long burning time", "Low smoke", "High heat output", "Minimal ash"],
    packaging: "Packaging: 20kg, 25kg, 50kg PP bags",
  },
  {
    label: "PRODUCT 02",
    title: "BBQ Charcoal",
    desc: "Perfect for home use, supermarkets, and outdoor grilling.",
    img: bbqImg,
    specs: [
      { label: "SIZE", value: "10–49 mm" },
      { label: "IGNITION", value: "Quick" },
      { label: "MOISTURE", value: "<5%" },
    ],
    features: ["Quick ignition", "Consistent heat", "Clean burning", "Easy to handle"],
    packaging: "Packaging: 3kg, 5kg, 10kg retail bags",
  },
  {
    label: "PRODUCT 03",
    title: "Charcoal Briquettes",
    desc: "Clean, uniform, and long-lasting briquettes from compressed charcoal fines.",
    img: briquettesImg,
    specs: [
      { label: "SHAPE", value: "Pillow/Hex" },
      { label: "BURN TIME", value: "2–3 hrs" },
      { label: "SMOKE", value: "Low" },
    ],
    features: ["Consistent shape", "Low smoke", "Long lasting", "Eco-friendly"],
    packaging: "Packaging: 5kg, 10kg, 20kg bags",
  },
];

const Products = () => {
  return (
    <div className="pt-32 pb-16">
      <div className="text-center container mx-auto px-6 mb-20">
        <p className="section-label mb-3">Our Products</p>
        <h1 className="section-title mb-4">Premium Charcoal Solutions</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Three meticulously processed product lines designed to meet the highest international quality standards.
        </p>
      </div>

      <div className="space-y-24">
        {products.map((product, idx) => (
          <div key={product.title} className="container mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={product.img}
                  alt={product.title}
                  className="rounded-2xl w-full aspect-[4/3] object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <p className="section-label mb-2">{product.label}</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">{product.title}</h2>
                <p className="text-muted-foreground mb-6">{product.desc}</p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="bg-secondary rounded-lg p-3">
                      <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">{spec.label}</p>
                      <p className="font-serif text-lg font-bold">{spec.value}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-dark-green rounded-lg p-4 mb-6">
                  <p className="text-dark-green-foreground text-sm">{product.packaging}</p>
                </div>

                <Button asChild className="rounded-full">
                  <Link to="/contact">Request Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
