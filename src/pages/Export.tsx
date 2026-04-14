import { Ship, FileText, Globe } from "lucide-react";

const Export = () => {
  return (
    <div className="container mx-auto px-6 pt-32 pb-16">
      <div className="text-center mb-20">
        <p className="section-label mb-3">Global Logistics</p>
        <h1 className="section-title mb-4">Export & Shipping</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Reliable logistics from Lagos ports to destinations worldwide.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="card-dark">
          <Ship className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-serif text-xl font-bold mb-2">Container Capacity</h3>
          <p className="text-sm opacity-80">19–21 metric tons per 40ft container, professionally loaded and secured.</p>
        </div>
        <div className="card-dark">
          <FileText className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-serif text-xl font-bold mb-2">Documentation</h3>
          <p className="text-sm opacity-80">Full export documentation including Certificate of Origin, Phytosanitary Certificate, and Bill of Lading.</p>
        </div>
        <div className="card-dark">
          <Globe className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-serif text-xl font-bold mb-2">Trade Terms</h3>
          <p className="text-sm opacity-80">FOB Lagos, CIF, and other Incoterms available based on client requirements.</p>
        </div>
      </div>

      <div>
        <h2 className="font-serif text-3xl font-bold mb-8 text-center">Destinations</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { region: "Middle East", countries: "UAE, Saudi Arabia, Qatar, Jordan" },
            { region: "Europe", countries: "Turkey, Greece, Cyprus, Romania" },
            { region: "Asia", countries: "China, India" },
            { region: "North America", countries: "Retail & industrial buyers" },
            { region: "Africa", countries: "Regional distribution" },
          ].map((item) => (
            <div key={item.region} className="p-5 rounded-xl border border-border text-center">
              <h3 className="font-serif font-bold mb-1">{item.region}</h3>
              <p className="text-muted-foreground text-sm">{item.countries}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Export;
