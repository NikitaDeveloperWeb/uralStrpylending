"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCalculator = () => {
    const element = document.querySelector("#calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/images/bg-header.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-foreground mb-8 leading-tight tracking-tight"
        >
          Дома родом
          <br />
          <span className="text-accent">из Скандинавии</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg lg:text-xl text-text-muted mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Строим тёплые каркасные дома, бани и хозблоки в Златоусте
          с скандинавским качеством и вниманием к деталям
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-2xl mx-auto"
        >
          <CTAButton variant="primary" onClick={scrollToCalculator}>
            Рассчитать стоимость
          </CTAButton>
          <CTAButton variant="outline" onClick={scrollToProjects}>
            Смотреть проекты
          </CTAButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-accent/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
