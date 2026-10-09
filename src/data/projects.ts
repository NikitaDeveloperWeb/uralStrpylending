export interface Project {
  id: number;
  title: string;
  category: "house-big" | "house-small" | "sauna";
  area: number;
  price: number;
  description: string;
  image: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Дом «Скандинавия-60»",
    category: "house-small",
    area: 60,
    price: 2100000,
    description:
      "Компактный каркасный дом для семьи из 2-3 человек. Планировка включает гостиную, спальню и кухню.",
    image: "/images/09-qx218-top_b-1024x610.jpg",
    features: ["60 м²", "1 этаж", "2 комнаты", "Терраса 12 м²"],
  },
  {
    id: 2,
    title: "Дом «Фьорд-90»",
    category: "house-small",
    area: 90,
    price: 3150000,
    description:
      "Просторный дом для круглогодичного проживания. Три спальни, просторная кухня-гостиная, два санузла.",
    image: "/images/luwai-6782-1743177831.webp",
    features: ["90 м²", "1 этаж", "3 комнаты", "Гараж"],
  },
  {
    id: 3,
    title: "Дом «Хюгге-120»",
    category: "house-big",
    area: 120,
    price: 4200000,
    description:
      "Двухэтажный дом премиум-класса. Четыре спальни, кабинет, гардеробная, терраса с видом.",
    image: "/images/Standard_house_Neros.jpg",
    features: ["120 м²", "2 этажа", "4 комнаты", "Балкон"],
  },
  {
    id: 4,
    title: "Дом «Нордик-150»",
    category: "house-big",
    area: 150,
    price: 5250000,
    description:
      "Роскошный двухэтажный дом с панорамными окнами. Пять спален, две гостиные, сауна, гараж на 2 авто.",
    image: "/images/IMG_0277_22-11-2019_kerro.jpg",
    features: ["150 м²", "2 этажа", "5 комнат", "Сауна"],
  },
  {
    id: 5,
    title: "Дом «Альпийский-180»",
    category: "house-big",
    area: 180,
    price: 6300000,
    description:
      "Элитный дом в альпийском стиле. Пять спален, кабинет, библиотека, терраса с видом на горы.",
    image: "/images/c39f2d0a5e60d64e20fd61bf1a08d448.jpg",
    features: ["180 м²", "2 этажа", "5 комнат", "Вид на горы"],
  },
  {
    id: 6,
    title: "Дом «Модерн-75»",
    category: "house-small",
    area: 75,
    price: 2625000,
    description:
      "Современный одноэтажный дом с открытой планировкой. Две спальни, просторная кухня-гостиная.",
    image: "/images/barnhaus-kd-670-546x384.webp",
    features: ["75 м²", "1 этаж", "2 комнаты", "Панорамные окна"],
  },
  {
    id: 7,
    title: "Баня «Сауна-сканди-24»",
    category: "sauna",
    area: 24,
    price: 850000,
    description:
      "Компактная баня с парной, моечной и комнатой отдыха. Идеальна для дачного участка.",
    image: "/images/banya1.jpg",
    features: ["24 м²", "Парная", "Комната отдыха", "Душ"],
  },
  {
    id: 8,
    title: "Баня «Нордика-36»",
    category: "sauna",
    area: 36,
    price: 1250000,
    description:
      "Просторная баня с бассейном, сауной, комнатой отдыха и кухней. Возможность размещения до 8 человек.",
    image: "/images/banya2.jpg",
    features: ["36 м²", "Бассейн", "Сауна", "Кухня"],
  },
  {
    id: 9,
    title: "Баня «Лесная сказка-48»",
    category: "sauna",
    area: 48,
    price: 1680000,
    description:
      "Большая баня с террасой, двумя парными, бассейном и комнатой отдыха. Премиум комплектация.",
    image: "/images/banya3.webp",
    features: ["48 м²", "2 парные", "Терраса", "Бассейн"],
  },
];
