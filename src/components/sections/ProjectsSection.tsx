"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

type Category = "all" | "house-big" | "house-small" | "sauna";

const projectImages = [
  "/images/09-qx218-top_b-1024x610.jpg",
  "/images/36261759328234_OGlJFwG3exSp_768x380.jpg",
  "/images/3c3f3819a29340c28eac8ab161473471a83ae97e.webp",
  "/images/570agh3su4a3ve3mw1fxs2qny4spq4qc.png",
  "/images/5a97d0b35b4f42348dc2eab4ff3cfe7120f0fabe.webp",
  "/images/650_1-768x576.jpg",
  "/images/7712ba4707187be1c1884d47c928bad7.png",
  "/images/86040c1792b70e8e2e57dc8fd618d7fe.jpg",
  "/images/BARN_65_3.jpg",
  "/images/barnhaus-kd-670-546x384.webp",
  "/images/barnhaus-kd-720.webp",
  "/images/bj2l3mujbphwq63ik39tb86wq3o3m8ia.webp",
  "/images/c39f2d0a5e60d64e20fd61bf1a08d448.jpg",
  "/images/IMG_0277_22-11-2019_kerro.jpg",
  "/images/luwai-6782-1743177831.webp",
  "/images/Standard_house_Neros.jpg",
  "/images/watermark.jpg",
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: "Все проекты" },
    { key: "house-big", label: "Большие дома" },
    { key: "house-small", label: "Средние дома" },
    { key: "sauna", label: "Бани" },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
  };

  return (
    <section id="projects" className="py-24 md:py-32 lg:py-40 bg-dark-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-line" />
      <div className="max-w-7xl xl:max-w-7xl mx-auto px-6 sm:px-8">
        <ScrollAnimation>
          <SectionTitle
            title="Наши проекты"
            subtitle="Выберите идеальный проект для вашей семьи"
          />
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-16">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`text-sm uppercase tracking-widest transition-all duration-300 pb-2 border-b ${
                  activeCategory === cat.key
                    ? "text-accent border-accent"
                    : "text-text-muted border-transparent hover:text-accent"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="relative h-64 sm:h-72 bg-dark-card mb-4 overflow-hidden border border-line group-hover:border-accent transition-colors duration-300 rounded-lg">
                  <img
                    src={projectImages[index % projectImages.length]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
                <h3 className="text-xl font-light mb-2 text-foreground">{project.title}</h3>
                <p className="text-sm text-text-muted mb-4 font-light line-clamp-2 leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-line">
                  <span className="text-accent font-light text-lg">{formatPrice(project.price)}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
