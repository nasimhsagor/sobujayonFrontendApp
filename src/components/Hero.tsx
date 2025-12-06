import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-plants.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Fresh from our greenhouse
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Bring Nature 
                <span className="text-plant-green"> Home</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Transform your space with our carefully curated collection of indoor plants, 
                trees, flowers, and orchids. Expert care tips included with every purchase.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="hover-lift">
                Shop New Arrivals
                <ArrowRight className="h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="xl" className="border-2">
                Plant Care Guide
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                30-Day Guarantee
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Expert Plant Care
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Free Shipping $75+
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img 
                src={heroImage} 
                alt="Beautiful collection of indoor plants" 
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-card">
                <div className="text-sm font-medium text-foreground">
                  New Arrival
                </div>
                <div className="text-xs text-muted-foreground">
                  Monstera Collection
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-plant-green/10 rounded-full animate-gentle-bounce"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/10 rounded-full animate-gentle-bounce" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;