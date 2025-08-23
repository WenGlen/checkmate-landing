import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Crown, TreePine } from "lucide-react";

const CollectionsSection = () => {
  const [activeTab, setActiveTab] = useState("royal");

  const royalProducts = [
    {
      name: "大理石方塊慕斯",
      description: "噴砂紋理，金箔線條點綴",
      image: "/api/placeholder/400/400"
    },
    {
      name: "紅寶石皇后球",
      description: "紅色鏡面圓頂，搭配小巧金色皇冠",
      image: "/api/placeholder/400/400"
    },
    {
      name: "金脈球體蛋糕",
      description: "黑色鏡面中閃耀細金紋路",
      image: "/api/placeholder/400/400"
    }
  ];

  const rusticProducts = [
    {
      name: "水果兵馬卡龍",
      description: "草莓、檸檬、藍莓，繽紛開局",
      image: "/api/placeholder/400/400"
    },
    {
      name: "莓果主教塔",
      description: "尖塔造型，上鋪新鮮莓果",
      image: "/api/placeholder/400/400"
    },
    {
      name: "檸檬城堡方塊",
      description: "木紋盒裝，清新乳酪與檸檬香氣",
      image: "/api/placeholder/400/400"
    }
  ];

  return (
    <section id="collections" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            雙系列介紹 · <span className="text-gold">Collections</span>
          </h2>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12 h-14">
            <TabsTrigger 
              value="royal" 
              className="flex items-center gap-2 text-lg font-medium data-[state=active]:gold-accent"
            >
              <Crown className="w-5 h-5" />
              Royal Marble
            </TabsTrigger>
            <TabsTrigger 
              value="rustic" 
              className="flex items-center gap-2 text-lg font-medium data-[state=active]:wood-texture"
            >
              <TreePine className="w-5 h-5" />
              Rustic Wood
            </TabsTrigger>
          </TabsList>

          <TabsContent value="royal" className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="font-serif text-3xl font-bold text-primary mb-4">
                🥂 Royal Marble Series
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                黑白大理石紋，點綴細緻金箔。<br />
                每一款甜點就像收藏於展示櫃裡的雕塑，沉穩、簡約，卻蘊含著華麗。
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {royalProducts.map((product, index) => (
                <Card key={index} className="marble-texture hover-elegant overflow-hidden border-0">
                  <div className="aspect-square bg-gradient-to-br from-marble-light to-marble-dark p-8 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gold/20 rounded-full flex items-center justify-center">
                      <Crown className="w-16 h-16 text-gold" />
                    </div>
                  </div>
                  <CardContent className="p-6 bg-background">
                    <h4 className="font-serif text-xl font-semibold text-primary mb-2">
                      {product.name}
                    </h4>
                    <p className="text-muted-foreground">{product.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rustic" className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="font-serif text-3xl font-bold text-primary mb-4">
                🍓 Rustic Wood Series
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                木質溫潤、色彩自然。水果的酸甜與蛋糕結合，適合午後與朋友分享。
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {rusticProducts.map((product, index) => (
                <Card key={index} className="wood-texture hover-elegant overflow-hidden border-0">
                  <div className="aspect-square bg-gradient-to-br from-wood-light to-wood-dark p-8 flex items-center justify-center">
                    <div className="w-32 h-32 bg-wood-foreground/20 rounded-full flex items-center justify-center">
                      <TreePine className="w-16 h-16 text-wood-foreground" />
                    </div>
                  </div>
                  <CardContent className="p-6 bg-background">
                    <h4 className="font-serif text-xl font-semibold text-primary mb-2">
                      {product.name}
                    </h4>
                    <p className="text-muted-foreground">{product.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CollectionsSection;