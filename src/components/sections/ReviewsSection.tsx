"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { reviews } from "@/data/reviews";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, []);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    startAutoplay();
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    startAutoplay();
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + reviews.length) % reviews.length
    );
    startAutoplay();
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${
              i < rating ? "text-accent fill-accent" : "text-line"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-dark-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-line" />
      <div className="max-w-4xl xl:max-w-5xl mx-auto px-6 sm:px-8">
        <ScrollAnimation>
          <SectionTitle
            title="Отзывы клиентов"
            subtitle="Узнайте, что говорят о нас наши клиенты"
          />
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-dark-card p-6 sm:p-8 md:p-10 lg:p-12 border border-line rounded-lg"
              >
                <div className="flex items-start gap-4 sm:gap-6 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent rounded-full flex items-center justify-center text-background font-light flex-shrink-0">
                    {reviews[currentIndex].name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg lg:text-xl font-light text-foreground mb-1">
                      {reviews[currentIndex].name}
                    </h4>
                    <p className="text-xs sm:text-sm text-text-muted uppercase tracking-wider">
                      {reviews[currentIndex].projectType} •{" "}
                      {reviews[currentIndex].date}
                    </p>
                  </div>
                </div>

                <div className="mb-6">{renderStars(reviews[currentIndex].rating)}</div>

                <p className="text-base lg:text-lg text-foreground font-light leading-relaxed italic">
                  &ldquo;{reviews[currentIndex].text}&rdquo;
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 sm:p-3 border border-line text-foreground hover:border-accent hover:text-accent transition-all rounded"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-accent w-6"
                        : "bg-line hover:bg-accent/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 sm:p-3 border border-line text-foreground hover:border-accent hover:text-accent transition-all rounded"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
