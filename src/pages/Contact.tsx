


import { useState } from "react";
import { MapPin, Clock, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    quantity: "",
    message: "",
  });

  // ✅ HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      toast({
        title: "Missing fields",
        description: "Name and Email are required.",
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_nvu288j",
        "template_hszufrw",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          quantity: form.quantity,
          message: form.message,
        },
        "Yu4MnAOZMOIiDKiGQ"
      );

      toast({
        title: "Message sent!",
        description: "We'll get back to you shortly.",
      });

      // ✅ CLEAR FORM
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        quantity: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);

      // toast({ title: "Message sent!", description: "We'll get back to you shortly." });
       setForm({ name: "", email: "", phone: "", service: "", quantity: "", message: "" });

    }
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-16">
      {/* HEADER */}
      <div className="text-center mb-16">
        <p className="section-label mb-3">Contact</p>
        <h1 className="section-title mb-4">Get in Touch</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Whether you're looking to place an order, request a sample, or explore
          a partnership — we'd love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {/* LEFT INFO */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-border">
            <MapPin className="w-6 h-6 text-primary mb-3" />
            <h3 className="font-serif text-lg font-bold mb-2">
              Warehouse Address
            </h3>

            {/* ✅ FIXED HTML STRUCTURE */}
            <div className="text-muted-foreground text-sm space-y-2">
              <p>
                Shields Rd, Newcastle upon Tyne NE6 1DN United Kingdom
              </p>

              <div className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <a
                  href="https://wa.me/2348134229301"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +2348134229301
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border">
            <Clock className="w-6 h-6 text-primary mb-3" />
            <h3 className="font-serif text-lg font-bold mb-2">
              Business Hours
            </h3>
            <p className="text-muted-foreground text-sm">
              Monday – Saturday: 8:00AM – 6:00PM <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-2 space-y-5"
        >
          {/* NAME + EMAIL */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Full Name *
              </label>
              <Input
                placeholder="Your full name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Email Address *
              </label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
              />
            </div>
          </div>

          {/* PHONE + SERVICE */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Phone Number
              </label>
              <Input
                placeholder="+234..."
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Product of Interest
              </label>

              {/* ✅ FIXED SELECT */}
              <Select
                value={form.service}
                onValueChange={(value) =>
                  setForm({ ...form, service: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a product" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="restaurant">
                    Restaurant-Grade Charcoal
                  </SelectItem>
                  <SelectItem value="bbq">
                    BBQ Charcoal
                  </SelectItem>
                  <SelectItem value="briquettes">
                    Charcoal Briquettes
                  </SelectItem>
                  <SelectItem value="nonsparking">
                    Non-Sparking Lump
                  </SelectItem>
                  <SelectItem value="mixed">
                    Mixed Charcoal
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* QUANTITY */}
          <div>
            <label className="text-sm font-medium mb-1.5 block">
              Quantity Required
            </label>
            <Input
              placeholder="e.g., 20 tons per month"
              value={form.quantity}
              onChange={(e) =>
                setForm({ ...form, quantity: e.target.value })
              }
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-sm font-medium mb-1.5 block">
              Message
            </label>
            <Textarea
              rows={4}
              placeholder="Tell us about your requirements..."
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />
          </div>

          {/* BUTTON */}
          <Button
            type="submit"
            size="lg"
            className="w-full rounded-full"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Inquiry"}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;