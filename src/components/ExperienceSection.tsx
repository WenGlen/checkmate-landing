import chessExperienceImage from "@/assets/chess-experience.jpg";
import { Button } from "@/components/ui/button";
import { Play, Clock, Users, Coffee } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={chessExperienceImage} 
          alt="Chess table experience" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/80" />
      </div>
      
      {/* Chess Pattern Overlay */}
      <div className="absolute inset-0 chess-pattern opacity-10" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-8">
            體驗區 · <span className="gold-accent bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold">The Chess Table Experience</span>
          </h2>
          
          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-primary-foreground/20">
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold mb-8 text-gold">
              「來一場棋藝 × 甜點的對弈」
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-8 h-8 text-gold" />
                </div>
                <h4 className="font-semibold text-lg mb-2">棋盤桌享用</h4>
                <p className="text-sm text-primary-foreground/80">於木質棋盤桌上享用甜點棋子</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-gold" />
                </div>
                <h4 className="font-semibold text-lg mb-2">棋盤拼盤</h4>
                <p className="text-sm text-primary-foreground/80">重現棋局佈陣的樂趣</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-gold" />
                </div>
                <h4 className="font-semibold text-lg mb-2">寧靜專注</h4>
                <p className="text-sm text-primary-foreground/80">享受小規模空間裡的寧靜</p>
              </div>
            </div>
            
            <div className="bg-background/20 rounded-lg p-6 border border-gold/30 mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="w-5 h-5 text-gold" />
                <span className="font-medium text-gold">座位預約提醒</span>
              </div>
              <p className="text-primary-foreground/90 leading-relaxed">
                因座位有限，建議提前洽詢或現場視情況安排。
              </p>
            </div>
            
            <Button 
              size="lg" 
              variant="gold"
            >
              預約體驗
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;