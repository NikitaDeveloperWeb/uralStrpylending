"use client";

import { advantages } from "@/data/advantages";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function AdvantagesSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[#f5f6f8] relative border-b border-[#e0e3e8] text-[#0f1419]">
      <div className="absolute top-0 left-0 right-0 h-px bg-line" />
      <div className="max-w-7xl xl:max-w-7xl mx-auto px-6 sm:px-8">
        <ScrollAnimation>
          <SectionTitle
            title="Почему выбирают нас"
            subtitle="Мы строим не просто дома, а создаём пространство для счастливой жизни"
            dark={true}
          />
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <ScrollAnimation key={advantage.title} delay={index * 0.1}>
              <div className="text-center p-6 sm:p-8 bg-white border border-[#e0e3e8] shadow-sm rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-accent/10 rounded-full">
                  <advantage.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg lg:text-xl font-light mb-3 text-[#0f1419]">
                  {advantage.title}
                </h3>
                <p className="text-sm text-[#4a5568] font-light leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
