import { Leaf, TreePine, Recycle, Users } from "lucide-react";

const Sustainability = () => {
  return (
    <div className="container mx-auto px-6 pt-32 pb-16">
      <div className="text-center mb-20">
        <p className="section-label mb-3">Our Commitment</p>
        <h1 className="section-title mb-4">Sustainability</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We believe in responsible production that benefits both business and the environment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          { icon: TreePine, title: "Responsible Harvesting", desc: "All hardwood is sourced from regulated areas with proper forestry permits. We avoid endangered species and support reforestation programs." },
          { icon: Leaf, title: "Eco-Friendly Processing", desc: "Our carbonization process minimizes emissions and maximizes carbon yield, reducing waste and environmental impact." },
          { icon: Recycle, title: "Waste Reduction", desc: "Charcoal fines and by-products are compressed into briquettes, ensuring nothing goes to waste in our production cycle." },
          { icon: Users, title: "Community Impact", desc: "We provide employment and fair wages to local communities in Idere and surrounding areas, supporting rural economic development." },
        ].map((item) => (
          <div key={item.title} className="card-dark">
            <item.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-serif text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sustainability;
