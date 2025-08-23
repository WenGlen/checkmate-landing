import { Card, CardContent } from "@/components/ui/card";
import { Crown, Shield, Zap, Castle, Users, Circle } from "lucide-react";

const SignaturePieces = () => {
  const pieces = [
    {
      name: "國王",
      english: "King",
      dessert: "高塔千層蛋糕",
      icon: Crown,
      color: "text-gold",
      bg: "gold-accent"
    },
    {
      name: "皇后",
      english: "Queen", 
      dessert: "紅寶石皇冠球",
      icon: Crown,
      color: "text-red-600",
      bg: "bg-red-100"
    },
    {
      name: "主教",
      english: "Bishop",
      dessert: "莓果尖塔慕斯",
      icon: Shield,
      color: "text-purple-600",
      bg: "bg-purple-100"
    },
    {
      name: "騎士",
      english: "Knight",
      dessert: "巧克力馬頭造型",
      icon: Zap,
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      name: "城堡",
      english: "Rook",
      dessert: "大理石方塊蛋糕",
      icon: Castle,
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      name: "兵",
      english: "Pawn",
      dessert: "彩色馬卡龍",
      icon: Circle,
      color: "text-orange-600",
      bg: "bg-orange-100"
    }
  ];

  return (
    <section id="signature" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            招牌甜點 · <span className="text-gold">Signature Pieces</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            每一枚甜點棋子，都是獨立的味覺角色。<br />
            我們建議現場選購，或提前詢問是否能提供完整棋盤組合。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pieces.map((piece, index) => (
            <Card 
              key={index} 
              className="group hover-elegant overflow-hidden border-2 border-border/50 hover:border-gold/50 cursor-pointer"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 ${piece.bg} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <piece.icon className={`w-10 h-10 ${piece.color}`} />
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                  {piece.name}
                </h3>
                <p className="text-sm text-muted-foreground font-medium mb-3 uppercase tracking-wider">
                  {piece.english}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {piece.dessert}
                </p>
                
                {/* Chess piece decoration */}
                <div className="mt-6 pt-4 border-t border-border/30">
                  <div className="w-8 h-1 bg-gold mx-auto opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-secondary/50 rounded-lg p-6 max-w-md mx-auto border border-gold/20">
            <p className="text-primary font-medium">♟️ 棋盤拼盤特製服務</p>
            <p className="text-sm text-muted-foreground mt-2">完整西洋棋造型甜點組合</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignaturePieces;