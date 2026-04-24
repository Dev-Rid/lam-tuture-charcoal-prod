import { Target, Eye } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-6 pt-32 pb-16">
      <p className="section-label mb-3">About Us</p>
      <h1 className="section-title mb-6">Who We Are</h1>
      <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-6">
        Lam-Tuture Nigeria Limited is a forward-thinking charcoal production, warehousing, distribution and export company incorporated on 13 August 2024.
      </p>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Our operations are headquartered at KM 7, Idere–Igboora Road, Behind School of Missions, Idere, Oyo State, Nigeria.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We are committed to delivering high-quality charcoal products that meet international standards for restaurants, industrial users, shisha markets, and retail distributors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="card-dark">
            <Target className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-serif text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-sm opacity-80">
              To produce and export premium, eco-friendly charcoal products that meet global quality standards while supporting sustainable forestry practices.
            </p>
          </div>
          <div className="rounded-xl p-6 bg-primary/10">
            <Eye className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-serif text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-sm text-muted-foreground">
              To become one of Africa's most trusted suppliers of natural hardwood charcoal through innovation, quality, and responsible production.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
