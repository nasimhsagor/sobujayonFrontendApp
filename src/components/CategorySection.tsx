import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import monsteraImage from "@/assets/monstera.jpg";
import orchidImage from "@/assets/orchid.jpg";
import snakePlantImage from "@/assets/snake-plant.jpg";
import flowersImage from "@/assets/flowers.jpg";

const plants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    category: "Indoor Plants",
    price: 49,
    originalPrice: 65,
    image: monsteraImage,
    rating: 4.8,
    reviews: 124,
    description: "This stunning split-leaf beauty grows fast!",
    badge: "Best Seller",
    badgeColor: "secondary" as const
  },
  {
    id: 2,
    name: "White Orchid",
    category: "Orchids",
    price: 79,
    image: orchidImage,
    rating: 4.9,
    reviews: 89,
    description: "Elegant blooms for sophisticated spaces",
    badge: "Premium",
    badgeColor: "default" as const
  },
  {
    id: 3,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 35,
    image: snakePlantImage,
    rating: 4.7,
    reviews: 156,
    description: "Perfect for beginners - nearly indestructible!",
    badge: "Easy Care",
    badgeColor: "secondary" as const
  },
  {
    id: 4,
    name: "Mixed Flower Bouquet",
    category: "Flowers",
    price: 25,
    image: flowersImage,
    rating: 4.6,
    reviews: 203,
    description: "Brighten any room with vibrant colors",
    badge: "Fresh Daily",
    badgeColor: "destructive" as const
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-plant-green/10 text-plant-green px-4 py-2 rounded-full text-sm font-medium">
            Fresh on the Scene
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            From our greenhouse to your door
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't miss these new arrivals! Carefully selected and nurtured by our plant experts.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button variant="plant" size="lg">Shop Indoor Plants →</Button>
            <Button variant="accent" size="lg">Shop Flowers →</Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <Card key={plant.id} className="group overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300 hover-lift">
              <div className="relative">
                {/* Product Image */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={plant.image} 
                    alt={plant.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Badge */}
                <Badge 
                  variant={plant.badgeColor}
                  className="absolute top-3 left-3 font-medium"
                >
                  {plant.badge}
                </Badge>

                {/* Wishlist Button */}
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Price Badge */}
                {plant.originalPrice && (
                  <div className="absolute bottom-3 left-3 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-medium">
                    Save ${plant.originalPrice - plant.price}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-3">
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    {plant.category}
                  </div>
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-plant-green transition-colors">
                    {plant.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plant.description}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{plant.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({plant.reviews} reviews)
                  </span>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between pt-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground">
                        ${plant.price}
                      </span>
                      {plant.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${plant.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <Button variant="plant" size="sm" className="gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Add
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center pt-12">
          <Button variant="outline" size="lg" className="border-2">
            View All Plants →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;