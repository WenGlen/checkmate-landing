import { Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="wood-texture py-16">
      <div className="container mx-auto px-6">
        <div className="text-center text-wood-foreground">
          {/* Logo */}
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-bold mb-2">
              Checkmate Pâtisserie
            </h2>
            <p className="text-lg font-light opacity-90">
              Every Move is a Taste of Art
            </p>
          </div>
          
          {/* Navigation Links */}
          <nav className="mb-8">
            <div className="flex flex-wrap justify-center gap-8 text-wood-foreground/80">
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-gold transition-colors duration-200 font-medium"
              >
                Story
              </button>
              <button 
                onClick={() => scrollToSection('collections')}
                className="hover:text-gold transition-colors duration-200 font-medium"
              >
                Collections
              </button>
              <button 
                onClick={() => scrollToSection('signature')}
                className="hover:text-gold transition-colors duration-200 font-medium"
              >
                Signature
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="hover:text-gold transition-colors duration-200 font-medium"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-gold transition-colors duration-200 font-medium"
              >
                Contact
              </button>
            </div>
          </nav>
          
          {/* Social Media */}
          <div className="mb-8">
            <div className="flex justify-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-12 h-12 text-wood-foreground hover:text-gold hover:bg-wood-foreground/10"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-12 h-12 text-wood-foreground hover:text-gold hover:bg-wood-foreground/10"
              >
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-wood-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-wood-foreground/60">
              <p>© 2024 Checkmate Pâtisserie. All rights reserved.</p>
              <p>Crafted with passion in Elaris</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;