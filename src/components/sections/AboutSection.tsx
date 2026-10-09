"use client";

import { Home, ShieldCheck, TreeDeciduous } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function AboutSection() {
  const stats = [
    { number: "150+", label: "домов построено" },
    { number: "10", label: "лет опыта" },
    { number: "10", label: "лет гарантии" },
    { number: "45", label: "дней строительство" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-[#f5f6f8] relative border-b border-[#e0e3e8] text-[#0f1419]">

      <div className="max-w-7xl xl:max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollAnimation direction="left">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 tracking-tight text-[#0f1419]">
                О нас
              </h2>
              <p className="text-base lg:text-lg text-[#4a5568] mb-6 leading-relaxed font-light">
                Мы строим загородные дома с 2014 года. Во всех наших проектах сочетаем стиль,
                надежность и функциональность.
              </p>
              <p className="text-base lg:text-lg text-[#4a5568] mb-12 leading-relaxed font-light">
                Скандинавские традиции строительства — это проверенные веками
                технологии, которые обеспечивают тепло, уют и долговечность
                ваших домов.
              </p>

              <div className="grid grid-cols-2 gap-6 lg:gap-10">
                {stats.map((stat, index) => (
                  <ScrollAnimation key={stat.label} delay={index * 0.1}>
                    <div>
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-accent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-[#4a5568] uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right">
            <div className="space-y-6 lg:space-y-8">
              <div className="h-64 sm:h-80 lg:h-96 bg-white border border-[#e0e3e8] overflow-hidden shadow-sm rounded-lg">
                <img
                  src="/images/5a97d0b35b4f42348dc2eab4ff3cfe7120f0fabe.webp"
                  alt="О компании"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-6 lg:p-8 border border-[#e0e3e8] shadow-sm rounded-lg">
                <TreeDeciduous className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-light mb-2 text-[#0f1419]">
                  Экологичные материалы
                </h3>
                <p className="text-sm text-[#4a5568] font-light leading-relaxed">
                  Используем только сертифицированную древесину и безопасные
                  утеплители
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <div className="bg-[#f5f6f8] p-5 lg:p-6 border border-[#e0e3e8] rounded-lg">
                  <Home className="w-6 h-6 text-accent mb-3" />
                  <h4 className="font-light mb-1 text-sm text-[#0f1419]">Тёплые дома</h4>
                  <p className="text-xs text-[#5a6474] font-light">
                    Теплоизоляция до -40°C
                  </p>
                </div>
                <div className="bg-[#f5f6f8] p-5 lg:p-6 border border-[#e0e3e8] rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-accent mb-3" />
                  <h4 className="font-light mb-1 text-sm text-[#0f1419]">Гарантия</h4>
                  <p className="text-xs text-[#5a6474] font-light">
                    10 лет на все конструкции
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
