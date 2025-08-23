import marbleImage from "@/assets/marble-dessert.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden marble-texture">
              <img 
                src={marbleImage} 
                alt="Marble dessert showcase" 
                className="w-full h-full object-cover hover-elegant"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gold-accent rounded-full opacity-20 blur-xl" />
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
                品牌故事 · <span className="text-gold">About</span>
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  在靜謐的木紋與大理石紋之間，誕生了 <span className="font-semibold text-primary">Checkmate Pâtisserie</span>。
                  我們相信，甜點不僅是味覺的享受，更是一場充滿秩序與策略的遊戲。
                </p>
                
                <div className="bg-secondary/50 rounded-lg p-6 border-l-4 border-gold">
                  <p className="font-medium text-primary mb-4">因為是小型品牌，我們保留了更多手工的溫度與細節：</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                      每日產量有限，當日售完即止。
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                      部分造型蛋糕需提前詢問或預訂。
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                      若有大量訂單需求，請務必事先與我們聯繫。
                    </li>
                  </ul>
                </div>
                
                <p className="font-medium text-primary italic">
                  我們希望在細緻中保留真實，讓每一位來訪者都能品嚐到「用心」的味道。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;