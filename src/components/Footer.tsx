import { Leaf, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-plant-green-light animate-leaf-sway" />
              <h3 className="text-2xl font-bold">Sobujayon</h3>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed">
              Bringing nature home with carefully curated plants, expert care guidance, 
              and a passion for helping your green space flourish.
            </p>

            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Shop Plants</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Indoor Plants</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Trees</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Flowers</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Orchids</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Planters</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Customer Care</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Plant Care Guide</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Plant Guarantee</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Track Your Order</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            
            <div className="space-y-4 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-plant-green-light" />
                <div>
                  <div className="font-medium text-primary-foreground">Talk to Our Plant Experts!</div>
                  <div>(888) 974-2079</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-plant-green-light mt-0.5" />
                <div>
                  <div className="font-medium text-primary-foreground">Email Support</div>
                  <div>hello@sobujayon.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-plant-green-light mt-0.5" />
                <div>
                  <div className="font-medium text-primary-foreground">Visit Our Nursery</div>
                  <div>123 Garden Lane<br />Green Valley, CA 90210</div>
                </div>
              </div>
            </div>

            <div className="bg-success/20 rounded-lg p-4">
              <div className="text-sm font-medium text-primary-foreground">
                🌱 Free Shipping Over 500৳
              </div>
              <div className="text-sm text-primary-foreground/80">
                30-Day Plant Guarantee
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/80 text-sm">
              © 2025 Sobujayon. All rights reserved. • Made with 💚 for plant lovers
            </div>
            
            <div className="flex gap-6 text-sm text-primary-foreground/80">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;