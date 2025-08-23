import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "像在藝術館裡下棋，卻是用味覺去感受。",
      author: "林小姐",
      role: "藝術愛好者",
      rating: 5
    },
    {
      quote: "甜點精緻到讓人捨不得動手，卻又忍不住一口接一口。",
      author: "王先生", 
      role: "美食部落客",
      rating: 5
    },
    {
      quote: "每一顆甜點都是驚喜，就像每一步棋都充滿策略。",
      author: "陳小姐",
      role: "棋藝愛好者", 
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 marble-texture">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            顧客回饋 · <span className="text-gold">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            來自我們顧客的真實感受
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elegant bg-background/80 backdrop-blur-sm border border-gold/20">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-gold opacity-50" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-lg text-primary leading-relaxed mb-6 font-medium italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-gold/20 pt-4">
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;