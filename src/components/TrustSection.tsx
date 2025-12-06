import { Card } from "@/components/ui/card";
import { Award, Truck, Users, Phone } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Guidance",
    description: "Success starts with choosing the right plants. We'll make sure you do.",
    color: "plant-green"
  },
  {
    icon: Users,
    title: "Connect & Grow",
    description: "Community is everything. Our workshops and events help you learn and connect.",
    color: "accent"
  },
  {
    icon: Truck,
    title: "Judgment-Free Service",
    description: "Our dedicated team is always available to assist — no question too small or too silly!",
    color: "earth-brown"
  },
  {
    icon: Phone,
    title: "24/7 Plant Support",
    description: "Talk to our plant experts anytime! Call (888) 974-2079 for immediate assistance.",
    color: "success"
  }
];

const TrustSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 text-center space-y-4 border-0 shadow-card hover:shadow-hover transition-all duration-300 hover-lift bg-gradient-card"
              >
                <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center`}
                     style={{ backgroundColor: `hsl(var(--${feature.color}))` }}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 lg:mt-24 text-center">
          <Card className="max-w-2xl mx-auto p-8 lg:p-12 shadow-hover bg-gradient-card">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  Stay Connected with Sobujayon
                </h3>
                <p className="text-muted-foreground">
                  Get plant care tips, exclusive offers, and be the first to know about new arrivals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <button className="px-6 py-3 bg-plant-green text-white rounded-md hover:bg-plant-green/90 transition-colors font-medium">
                  Subscribe
                </button>
              </div>

              <div className="flex justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  No spam, ever
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  Unsubscribe anytime
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;