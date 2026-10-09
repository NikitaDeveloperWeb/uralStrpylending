import {
  Shield,
  Clock,
  Leaf,
  Award,
  Ruler,
  Heart,
  type LucideIcon,
} from "lucide-react";

export interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const advantages: Advantage[] = [
  {
    icon: Shield,
    title: "Гарантия 10 лет",
    description:
      "Мы уверены в качестве наших домов и предоставляем расширенную гарантию на все конструкции.",
  },
  {
    icon: Clock,
    title: "Сроки от 45 дней",
    description:
      "Строим быстро без потери качества. Среднее время строительства — 45-60 дней.",
  },
  {
    icon: Leaf,
    title: "Экологичные материалы",
    description:
      "Используем только сертифицированную древесину и безопасные утеплители.",
  },
  {
    icon: Award,
    title: "Скандинавское качество",
    description:
      "Применяем проверенные технологии строительства, адаптированные под климат Урала.",
  },
  {
    icon: Ruler,
    title: "Индивидуальный проект",
    description:
      "Разрабатываем проекты с учётом ваших пожеланий и особенностей участка.",
  },
  {
    icon: Heart,
    title: "Тёплые дома",
    description:
      "Скандинавские технологии обеспечивают отличную теплоизоляцию даже в суровые зимы.",
  },
];
