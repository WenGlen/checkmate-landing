import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "是否可以外帶？",
      answer: "可以，但部分造型（如鏡面蛋糕）建議現場享用，以確保最佳的視覺與味覺體驗。我們會提供精美的包裝盒。"
    },
    {
      question: "大量訂單或活動訂製怎麼辦？",
      answer: "由於每日產量有限，請至少提前 7 天洽詢。我們可以為特殊活動客製化棋盤拼盤或主題甜點組合。"
    },
    {
      question: "有無素食或無麩質選項？",
      answer: "部分品項可調整為素食或無麩質版本，請先於訂購時詢問。我們會盡力滿足特殊飲食需求。"
    },
    {
      question: "營業時間和預約方式？",
      answer: "每週五～週日，14:00 – 20:00 營業。建議提前透過官方 IG 或聯絡表單預約，以確保座位和甜點供應。"
    },
    {
      question: "棋盤體驗區需要額外費用嗎？",
      answer: "使用棋盤桌不需額外費用，但因座位有限，建議預約時說明需求。我們也提供棋盤拼盤的特製服務。"
    },
    {
      question: "甜點的保存方式？",
      answer: "建議當日享用完畢。如需保存，請冷藏保存並於 2-3 天內食用完畢，以確保最佳口感。"
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
              常見問題 · <span className="text-gold">FAQ</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              關於 Checkmate Pâtisserie 的常見疑問
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-background rounded-lg border border-border/50 px-6"
              >
                <AccordionTrigger className="hover:text-gold font-medium text-lg py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;