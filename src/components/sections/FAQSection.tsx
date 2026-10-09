"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqItems } from "@/data/faq";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[#f5f6f8] relative border-b border-[#e0e3e8] text-[#0f1419]">
      <div className="absolute top-0 left-0 right-0 h-px bg-line" />
      <div className="max-w-4xl xl:max-w-5xl mx-auto px-6 sm:px-8">
        <ScrollAnimation>
          <SectionTitle
            title="Частые вопросы"
            subtitle="Ответы на самые популярные вопросы наших клиентов"
            dark={true}
          />
        </ScrollAnimation>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <ScrollAnimation key={index} delay={index * 0.05}>
              <div className="bg-white border border-[#e0e3e8] shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:text-accent transition-colors group"
                >
                  <span className="font-light text-[#0f1419] group-hover:text-accent pr-8 text-sm sm:text-base">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus className="w-5 h-5 text-accent flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-[#4a5568] font-light leading-relaxed text-sm sm:text-base">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
