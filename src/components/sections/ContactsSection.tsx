"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function ContactsSection() {
  return (
    <section id="contacts" className="py-24 md:py-32 lg:py-40 bg-dark-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-line" />
      <div className="max-w-7xl xl:max-w-7xl mx-auto px-6 sm:px-8">
        <ScrollAnimation>
          <SectionTitle
            title="Контакты"
            subtitle="Свяжитесь с нами любым удобным способом"
          />
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ScrollAnimation direction="left">
            <div className="space-y-8 lg:space-y-10">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs uppercase tracking-widest mb-2 text-text-muted">Адрес</h3>
                  <p className="font-light text-foreground text-sm sm:text-base">
                    г. Златоуст, Челябинская область
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs uppercase tracking-widest mb-2 text-text-muted">Телефон</h3>
                  <a
                    href="tel:+73511234567"
                    className="font-light text-foreground hover:text-accent transition-colors text-sm sm:text-base"
                  >
                    +7 (351) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs uppercase tracking-widest mb-2 text-text-muted">Email</h3>
                  <a
                    href="mailto:info@uralstroyderevo.ru"
                    className="font-light text-foreground hover:text-accent transition-colors text-sm sm:text-base"
                  >
                    info@uralstroyderevo.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs uppercase tracking-widest mb-2 text-text-muted">График работы</h3>
                  <p className="font-light text-foreground text-sm sm:text-base leading-relaxed">
                    Пн-Пт: 9:00 - 18:00
                    <br />
                    Сб: 10:00 - 15:00
                    <br />
                    Вс: выходной
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right">
            <div className="h-72 sm:h-80 lg:h-96 bg-dark-card border border-line overflow-hidden rounded-lg">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=59.890781%2C55.985076&z=12&l=map"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(90%)" }}
                allowFullScreen
                loading="lazy"
                title="Карта расположения компании"
              ></iframe>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
