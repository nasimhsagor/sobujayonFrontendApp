import { Search, ShoppingCart, User, Menu, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Top Bar */}
      {/* 
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        Free Shipping Over $75 + 30-Day Plant Guarantee 🌱
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-plant-green animate-leaf-sway" />
              <h1 className="text-2xl font-bold text-primary">Sobujayon</h1>
            </div>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">New Arrivals</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Indoor Plants</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Trees</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Flowers</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Orchids</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Planters</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Plant Care</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search for plants..." 
                className="pl-10 bg-muted/50 border-border"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>
            
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search for plants..." 
              className="pl-10 bg-muted/50 border-border"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;