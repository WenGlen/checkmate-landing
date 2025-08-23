import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            聯絡我們 · <span className="text-gold">Contact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            歡迎預約體驗或洽詢客製服務
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-6">店家資訊</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">地址</h4>
                    <p className="text-muted-foreground">Elaris 市中心 ×× 街（虛構）</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">營業時間</h4>
                    <p className="text-muted-foreground">每週五～週日</p>
                    <p className="text-muted-foreground">14:00 – 20:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">預約方式</h4>
                    <p className="text-muted-foreground">請透過右側表單或社群媒體聯繫</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-primary mb-4">追蹤我們</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="w-12 h-12 hover:bg-gold hover:text-primary hover:border-gold">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="w-12 h-12 hover:bg-gold hover:text-primary hover:border-gold">
                  <Facebook className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-marble-light to-marble-dark flex items-center justify-center">
                <div className="text-center text-marble-veins">
                  <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p className="text-lg font-medium">地圖位置</p>
                  <p className="text-sm opacity-75">Elaris 市中心</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-2 border-gold/20">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-6">預約 / 洽詢表單</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">姓名</label>
                      <Input placeholder="請輸入您的姓名" className="border-gold/30 focus:border-gold" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">電話</label>
                      <Input placeholder="請輸入聯絡電話" className="border-gold/30 focus:border-gold" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Email</label>
                    <Input type="email" placeholder="請輸入電子信箱" className="border-gold/30 focus:border-gold" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">預約日期 / 需求</label>
                    <Input placeholder="例：12/25 下午茶時段，2人座位" className="border-gold/30 focus:border-gold" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">其他訊息</label>
                    <Textarea 
                      placeholder="請告訴我們更多詳細需求，或特殊飲食限制..." 
                      className="border-gold/30 focus:border-gold min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full" variant="gold">
                    送出預約
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;