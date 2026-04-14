import { TreePine, Flame, Filter, Package, CheckCircle } from "lucide-react";

const steps = [
  { icon: TreePine, title: "Sustainable Harvesting", desc: "Raw hardwood sourced from regulated forest areas in Oyo State, Nigeria." },
  { icon: Flame, title: "Carbonization", desc: "Controlled earth kiln carbonization for optimal fixed carbon content." },
  { icon: Filter, title: "Sorting & Grading", desc: "Manual and mechanical sorting by size, density, and quality grade." },
  { icon: Package, title: "Packaging", desc: "Packed in PP bags (3kg–50kg) and palletized for container loading." },
  { icon: CheckCircle, title: "Quality Control", desc: "Each batch tested for moisture, ash, and fixed carbon before shipment." },
];

const Production = () => {
  return (
    <div className="container mx-auto px-6 pt-32 pb-16">
      <div className="text-center mb-20">
        <p className="section-label mb-3">Our Process</p>
        <h1 className="section-title mb-4">Production Process</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          From sustainable harvesting to export-ready packaging, every step is optimized for quality.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {steps.map((step, idx) => (
          <div key={step.title} className="flex gap-6 items-start">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0">
                <step.icon className="w-5 h-5" />
              </div>
              {idx < steps.length - 1 && <div className="w-px h-16 bg-border mt-2" />}
            </div>
            <div className="pt-2">
              <h3 className="font-serif text-xl font-bold mb-1">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Production;
