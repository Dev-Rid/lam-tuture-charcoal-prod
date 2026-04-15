import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import restaurantImg from "@/assets/charcoal-restaurant.jpg";
import bbqImg from "@/assets/charcoal-bbq.jpg";
<<<<<<< HEAD
import briquettesImg from "@/assets/charcoal-products-hero.jpg";
import nonsparkingImg from "@/assets/hero-charcoal.jpg";
import mixedImg from "@/assets/charcoal-briquettes.jpg";
=======
import briquettesImg from "@/assets/charcoal-briquettes.jpg";
import nonsparkingImg from "@/assets/charcoal-nonsparking.jpg";
import mixedImg from "@/assets/charcoal-mixed.jpg";
>>>>>>> 6689a0cece064ef5301ef96cae0557b6d82f9308

const products = [
  {
    label: "PRODUCT 01",
    title: "Restaurant-Grade Hardwood Charcoal",
    subtitle: "Ayin and Ayin Fingers",
    desc: "Ideal for restaurants, grills, and high-heat cooking environments.",
    img: restaurantImg,
    specs: [
      { label: "SIZE", value: "50–200 mm" },
      { label: "FIXED CARBON", value: ">80%" },
      { label: "MOISTURE", value: "<5%" },
    ],
    features: ["Long burning time", "Low smoke", "High heat output", "Minimal ash"],
    packaging: "20kg, 25kg, 50kg PP bags · 40ft container: 19–21 tons",
  },
  {
    label: "PRODUCT 02",
    title: "BBQ Charcoal",
    subtitle: "Ordinary BBQ and Picked BBQ",
    desc: "Perfect for home use, supermarkets, and outdoor grilling.",
    img: bbqImg,
    specs: [
      { label: "SIZE", value: "10–49 mm" },
      { label: "IGNITION", value: "Quick" },
      { label: "HEAT", value: "Steady" },
    ],
    features: ["Quick ignition", "Steady heat", "Low ash", "Easy to handle"],
    packaging: "5kg, 10kg, 20kg, 25kg, 50kg bags",
  },
  {
    label: "PRODUCT 03",
    title: "Charcoal Briquettes",
    subtitle: "",
    desc: "Clean, uniform, and long-lasting briquettes made from compressed charcoal fines.",
    img: briquettesImg,
    specs: [
      { label: "SHAPE", value: "Consistent" },
      { label: "BURN TIME", value: "Long" },
      { label: "SMOKE", value: "Low" },
    ],
    features: ["Consistent shape", "Long burn time", "Low smoke", "Eco-friendly"],
    packaging: "5kg–20kg retail bags · 40ft container: 19–21 tons",
  },
  {
    label: "PRODUCT 04",
    title: "Non-Sparking Charcoal, Lump (Solid)",
    subtitle: "",
    desc: "Delivers high, consistent heat without producing sparks — an excellent choice for restaurants, hotels, and home barbecues.",
    img: nonsparkingImg,
    specs: [
      { label: "TYPE", value: "Lump" },
      { label: "SPARKS", value: "None" },
      { label: "HEAT", value: "High" },
    ],
    features: ["Long burning duration", "Low ash residue", "Minimal smoke emission", "Spark-free"],
    packaging: "20kg, 25kg, 50kg PP bags · 40ft container: 19–21 tons",
  },
  {
    label: "PRODUCT 05",
    title: "Mixed Charcoal",
    subtitle: "Ayin with Non-Sparking Charcoal",
    desc: "A combination of Ayin and non-sparking charcoal (50% Ayin and 50% non-sparking), carefully carbonized and well-dried.",
    img: mixedImg,
    specs: [
      { label: "BLEND", value: "50/50" },
      { label: "HEAT", value: "High & Steady" },
      { label: "DURABILITY", value: "Heavy" },
    ],
    features: ["High and steady heat output", "Long burning duration", "Hard, heavy, and durable pieces", "Carefully carbonized"],
    packaging: "20kg, 25kg, 50kg PP bags · 40ft container: 19–21 tons",
  },
];

const Products = () => {
  return (
    <div className="pt-32 pb-16">
      <div className="text-center container mx-auto px-6 mb-20">
        <p className="section-label mb-3">Our Products</p>
        <h1 className="section-title mb-4">Premium Charcoal Solutions</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Five meticulously processed product lines designed to meet the highest international quality standards.
        </p>
      </div>

      <div className="space-y-24">
        {products.map((product, idx) => (
          <div key={product.title} className="container mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
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
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-1">{product.title}</h2>
                {product.subtitle && (
                  <p className="text-primary font-medium mb-3">{product.subtitle}</p>
                )}
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
