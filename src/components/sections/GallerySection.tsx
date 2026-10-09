"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import SectionTitle from "@/components/ui/SectionTitle";

const galleryImages = [
  { id: 1, src: "/images/09-qx218-top_b-1024x610.jpg", title: "Дом «Скандинавия»" },
  { id: 2, src: "/images/banya1.jpg", title: "Баня «Сауна-сканди»" },
  { id: 3, src: "/images/luwai-6782-1743177831.webp", title: "Дом «Фьорд»" },
  { id: 4, src: "/images/banya2.jpg", title: "Баня «Нордика»" },
  { id: 5, src: "/images/Standard_house_Neros.jpg", title: "Дом «Хюгге»" },
  { id: 6, src: "/images/banya3.webp", title: "Баня «Лесная сказка»" },
  { id: 7, src: "/images/IMG_0277_22-11-2019_kerro.jpg", title: "Дом «Нордик»" },
  { id: 8, src: "/images/c39f2d0a5e60d64e20fd61bf1a08d448.jpg", title: "Дом «Альпийский»" },
  { id: 9, src: "/images/650_1-768x576.jpg", title: "Дом «Модерн»" },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  };

  const prevImage = () => {
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : null
    );
  };

  return (
    <section id="gallery" className="py-24 md:py-32 lg:py-40 bg-dark-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-line" />
      <div className="max-w-7xl xl:max-w-7xl mx-auto px-6 sm:px-8">
        <ScrollAnimation>
          <SectionTitle
            title="Наши работы"
            subtitle="Посмотрите на реализованные проекты"
          />
        </ScrollAnimation>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <ScrollAnimation key={image.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-64 sm:h-72 bg-dark-card cursor-pointer border border-line hover:border-accent transition-colors duration-300 overflow-hidden rounded-lg"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </ScrollAnimation>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-foreground hover:text-accent"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 text-foreground hover:text-accent"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-5xl max-h-[85vh] px-16 sm:px-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border border-line overflow-hidden rounded-lg">
                <img
                  src={galleryImages[lightboxIndex].src}
                  alt={galleryImages[lightboxIndex].title}
                  className="w-full h-[60vh] sm:h-[70vh] object-cover"
                />
              </div>
              <p className="text-center text-text-muted mt-4 text-sm font-light">
                {lightboxIndex + 1} / {galleryImages.length}
              </p>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 text-foreground hover:text-accent"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
