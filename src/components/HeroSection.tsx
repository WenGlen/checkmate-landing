import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 parallax bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />
      </div>
      
      {/* Chess Pattern Overlay */}
      <div className="absolute inset-0 chess-pattern opacity-5" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          Every Move is a <br />
          <span className="gold-accent bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold">
            Taste of Art
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 font-light leading-relaxed max-w-2xl mx-auto opacity-90">
          將棋藝化為甜點的另一種語言。
        </p>
        
        <p className="text-lg md:text-xl mb-12 font-light leading-relaxed max-w-3xl mx-auto opacity-80">
          我們是一家新成立的小型甜點工作室，靈感來自西洋棋的策略與優雅。<br />
          在這裡，每一顆甜點都是一枚棋子，每一步都承載著風味的驚喜。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            variant="gold"
            onClick={() => scrollToSection('collections')}
          >
            探索系列
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg hover-elegant"
            onClick={() => scrollToSection('about')}
          >
            關於我們
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary-foreground opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;