"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

type BuildingType = "house" | "sauna" | "shed";

interface CalculatorState {
  type: BuildingType;
  area: number;
  floors: 1 | 2;
  foundation: "tape" | "pile" | "slab";
  roof: "single" | "gable" | "hip";
  finish: "exterior" | "turnkey";
  extras: {
    terrace: boolean;
    garage: boolean;
    balcony: boolean;
  };
}

const basePrices = {
  house: 35000,
  sauna: 40000,
  shed: 25000,
};

const floorMultiplier = {
  1: 1.0,
  2: 1.15,
};

const foundationMultiplier = {
  tape: 1.0,
  pile: 0.85,
  slab: 1.2,
};

const roofMultiplier = {
  single: 1.0,
  gable: 1.1,
  hip: 1.2,
};

const finishMultiplier = {
  exterior: 1.0,
  turnkey: 1.35,
};

const extraPrices = {
  terrace: 500000,
  garage: 400000,
  balcony: 200000,
};

export default function CalculatorSection() {
  const [form, setForm] = useState<CalculatorState>({
    type: "house",
    area: 60,
    floors: 1,
    foundation: "tape",
    roof: "single",
    finish: "exterior",
    extras: {
      terrace: false,
      garage: false,
      balcony: false,
    },
  });

  const calculatedPrice = useMemo(() => {
    const base = basePrices[form.type];
    const area = form.area;
    const floorMult = floorMultiplier[form.floors];
    const foundationMult = foundationMultiplier[form.foundation];
    const roofMult = roofMultiplier[form.roof];
    const finishMult = finishMultiplier[form.finish];

    let total = base * area * floorMult * foundationMult * roofMult * finishMult;

    if (form.extras.terrace) total += extraPrices.terrace;
    if (form.extras.garage) total += extraPrices.garage;
    if (form.extras.balcony) total += extraPrices.balcony;

    return Math.round(total);
  }, [form]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price);
  };

  const updateField = <K extends keyof CalculatorState>(
    field: K,
    value: CalculatorState[K]
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const updateExtra = (key: keyof typeof form.extras, value: boolean) => {
    setForm((prev) => ({
      ...prev,
      extras: { ...prev.extras, [key]: value },
    }));
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="calculator" className="py-24 md:py-32 lg:py-40 bg-[#f5f6f8] relative border-b border-[#e0e3e8]">
      <div className="max-w-7xl xl:max-w-7xl mx-auto px-6 sm:px-8">
        <ScrollAnimation>
          <SectionTitle
            title="Рассчитайте стоимость"
            subtitle="Узнайте примерную стоимость вашего будущего дома"
            dark={true}
          />
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <ScrollAnimation direction="left" className="lg:col-span-2">
            <div className="space-y-8 lg:space-y-10 bg-white p-6 sm:p-8 md:p-10 lg:p-12 border border-[#e0e3e8] shadow-sm rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-3 text-[#4a5568]">
                    Тип постройки
                  </label>
                  <select
                    value={form.type}
                    onChange={(e) =>
                      updateField("type", e.target.value as BuildingType)
                    }
                    className="w-full px-0 py-3 bg-transparent border-b border-[#d0d3d8] focus:border-accent text-[#0f1419] font-light transition-colors"
                  >
                    <option value="house">Каркасный дом</option>
                    <option value="sauna">Баня</option>
                    <option value="shed">Хозблок</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest mb-3 text-[#4a5568]">
                    Площадь (м²): {form.area}
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="500"
                    value={form.area}
                    onChange={(e) =>
                      updateField("area", parseInt(e.target.value))
                    }
                    className="w-full accent-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest mb-3 text-[#4a5568]">
                    Этажность
                  </label>
                  <select
                    value={form.floors}
                    onChange={(e) =>
                      updateField(
                        "floors",
                        parseInt(e.target.value) as 1 | 2
                      )
                    }
                    className="w-full px-0 py-3 bg-transparent border-b border-[#d0d3d8] focus:border-accent text-[#0f1419] font-light transition-colors"
                  >
                    <option value={1}>1 этаж</option>
                    <option value={2}>2 этажа</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest mb-3 text-[#4a5568]">
                    Тип фундамента
                  </label>
                  <select
                    value={form.foundation}
                    onChange={(e) =>
                      updateField(
                        "foundation",
                        e.target.value as "tape" | "pile" | "slab"
                      )
                    }
                    className="w-full px-0 py-3 bg-transparent border-b border-[#d0d3d8] focus:border-accent text-[#0f1419] font-light transition-colors"
                  >
                    <option value="tape">Ленточный</option>
                    <option value="pile">Свайный</option>
                    <option value="slab">Плита</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest mb-3 text-[#4a5568]">
                    Тип крыши
                  </label>
                  <select
                    value={form.roof}
                    onChange={(e) =>
                      updateField(
                        "roof",
                        e.target.value as "single" | "gable" | "hip"
                      )
                    }
                    className="w-full px-0 py-3 bg-transparent border-b border-[#d0d3d8] focus:border-accent text-[#0f1419] font-light transition-colors"
                  >
                    <option value="single">Односкатная</option>
                    <option value="gable">Двускатная</option>
                    <option value="hip">Вальмовая</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest mb-3 text-[#4a5568]">
                    Уровень отделки
                  </label>
                  <select
                    value={form.finish}
                    onChange={(e) =>
                      updateField(
                        "finish",
                        e.target.value as "exterior" | "turnkey"
                      )
                    }
                    className="w-full px-0 py-3 bg-transparent border-b border-[#d0d3d8] focus:border-accent text-[#0f1419] font-light transition-colors"
                  >
                    <option value="exterior">Внешняя отделка</option>
                    <option value="turnkey">Под ключ</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest mb-6 text-[#4a5568]">
                  Дополнительные опции
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={form.extras.terrace}
                      onChange={(e) =>
                        updateExtra("terrace", e.target.checked)
                      }
                      className="w-4 h-4 accent-accent"
                    />
                    <span className="text-sm text-[#4a5568] font-light group-hover:text-[#1a1f28] transition-colors">Терраса (+500 000 ₽)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={form.extras.garage}
                      onChange={(e) =>
                        updateExtra("garage", e.target.checked)
                      }
                      className="w-4 h-4 accent-accent"
                    />
                    <span className="text-sm text-[#4a5568] font-light group-hover:text-[#1a1f28] transition-colors">Гараж (+400 000 ₽)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={form.extras.balcony}
                      onChange={(e) =>
                        updateExtra("balcony", e.target.checked)
                      }
                      className="w-4 h-4 accent-accent"
                    />
                    <span className="text-sm text-[#4a5568] font-light group-hover:text-[#1a1f28] transition-colors">Балкон (+200 000 ₽)</span>
                  </label>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right">
            <div className="bg-white p-6 sm:p-8 border border-[#e0e3e8] shadow-sm sticky top-24 rounded-lg">
              <h3 className="text-xs uppercase tracking-widest mb-6 text-[#0f1419]">Примерная стоимость</h3>

              <motion.div
                key={calculatedPrice}
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-light text-accent mb-4"
              >
                ~{formatPrice(calculatedPrice)} ₽
              </motion.div>

              <p className="text-xs text-[#4a5568] font-light mb-8 leading-relaxed">
                * Цена ориентировочная. Точную стоимость рассчитает наш
                менеджер.
              </p>

              <CTAButton
                variant="primary"
                className="w-full"
                onClick={scrollToContact}
              >
                Получить точный расчёт
              </CTAButton>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
