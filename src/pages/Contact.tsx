import { useState } from "react";
import { MapPin, Clock, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    }, 1000);
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-16">
      <div className="text-center mb-16">
        <p className="section-label mb-3">Contact</p>
        <h1 className="section-title mb-4">Get in Touch</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Whether you're looking to place an order, request a sample, or explore a partnership — we'd love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-border">
            <MapPin className="w-6 h-6 text-primary mb-3" />
            <h3 className="font-serif text-lg font-bold mb-2">Wareouse Address</h3>
            <p className="text-muted-foreground text-sm">
            103 Shields Rd, Newcastle upon Tyne NE6 1DN United Kingdom
              
              <div className="flex hover:text-primary transition-colors">
                <Phone className="w-4 h-4 shrink-0 " />
                <a
                  href="https://wa.me/08134229301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  +2348134229301
              </a>        
              </div>
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border">
            <Clock className="w-6 h-6 text-primary mb-3" />
            <h3 className="font-serif text-lg font-bold mb-2">Business Hours</h3>
            <p className="text-muted-foreground text-sm">
              Monday – Saturday: 8:00AM – 6:00PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
              <Input placeholder="Your full name" required />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email Address *</label>
              <Input type="email" placeholder="your@email.com" required />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Phone Number</label>
              <Input placeholder="+234..." />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Product of Interest</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a product" />
                </SelectTrigger>
                
                <SelectContent>
                  <SelectItem value="restaurant">Restaurant-Grade Charcoal</SelectItem>
                  <SelectItem value="bbq">BBQ Charcoal</SelectItem>
                  <SelectItem value="briquettes">Charcoal Briquettes</SelectItem>
                  <SelectItem value="briquettes">Non-Sparking Lump</SelectItem>
                  <SelectItem value="briquettes">Mixed Charcoal</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Quantity Required</label>
            <Input placeholder="e.g., 20 tons per month" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Message</label>
            <Textarea placeholder="Tell us about your requirements..." rows={4} />
          </div>
          <Button type="submit" size="lg" className="w-full rounded-full" disabled={loading}>
            {loading ? "Sending..." : "Send Inquiry"} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
