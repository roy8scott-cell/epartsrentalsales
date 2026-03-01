import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  const { t } = useLang();

  return (
    <section className="py-16 bg-secondary">
      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">
            {t.faq_badge}
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-black text-foreground mt-2">
            {t.faq_title}
          </h2>
        </div>
        <div className="space-y-3">
          {t.faqs.map((faq, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-heading font-bold text-sm text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-muted-foreground flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 pt-0 animate-fade-in">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
