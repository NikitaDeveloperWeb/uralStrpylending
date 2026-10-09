import { Home, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-line">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Home className="w-5 h-5 text-accent" />
              <h3 className="text-lg font-light uppercase tracking-widest">УралСтройДерево</h3>
            </div>
            <p className="text-text-muted font-light leading-relaxed">
              Строим каркасные дома, бани и хозблоки по скандинавским
              технологиям в Златоусте и Челябинской области.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest mb-6 text-accent">Навигация</h4>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "О нас" },
                { href: "#projects", label: "Проекты" },
                { href: "#calculator", label: "Калькулятор" },
                { href: "#gallery", label: "Галерея" },
                { href: "#contacts", label: "Контакты" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-text-muted hover:text-accent transition-colors font-light"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest mb-6 text-accent">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                <span className="text-text-muted font-light">
                  г. Златоуст, Челябинская область
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="tel:+73511234567"
                  className="text-text-muted hover:text-accent transition-colors font-light"
                >
                  +7 (351) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@uralstroyderevo.ru"
                  className="text-text-muted hover:text-accent transition-colors font-light"
                >
                  info@uralstroyderevo.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line mt-12 pt-8 text-center text-text-muted font-light text-sm">
          <p>© {currentYear} УралСтройДерево. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
