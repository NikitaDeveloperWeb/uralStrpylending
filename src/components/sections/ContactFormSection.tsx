"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    agree: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    if (!formData.name.trim()) {
      setError("Пожалуйста, введите ваше имя");
      return false;
    }
    if (!formData.phone.trim()) {
      setError("Пожалуйста, введите номер телефона");
      return false;
    }
    if (!formData.agree) {
      setError("Необходимо согласие на обработку персональных данных");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Отправка в Supabase
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          agree: false,
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError("Ошибка отправки. Пожалуйста, попробуйте позже.");
      }
    } catch {
      setError("Ошибка сети. Пожалуйста, попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 bg-[#f5f6f8] relative border-b border-[#e0e3e8]">
      <div className="max-w-4xl xl:max-w-5xl mx-auto px-6 sm:px-8">
        <ScrollAnimation>
          <SectionTitle
            title="Получить консультацию"
            subtitle="Оставьте заявку и мы свяжемся с вами в ближайшее время"
            dark={true}
          />
        </ScrollAnimation>
        <ScrollAnimation delay={0.2}>
          <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 border border-[#e0e3e8] shadow-sm rounded-lg">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 sm:py-12"
              >
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-light mb-2 text-[#0f1419]">
                  Заявка отправлена!
                </h3>
                <p className="text-sm text-[#4a5568] font-light">
                  Мы свяжемся с вами в ближайшее время
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {error && (
                  <div className="text-red-400 text-sm font-light">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-3 text-[#0f1419]">
                      Имя <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-[#d0d3d8] focus:border-accent text-[#0f1419] font-light transition-colors placeholder-[#6a7484]"
                      placeholder="Ваше имя"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-3 text-[#0f1419]">
                      Телефон <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-[#d0d3d8] focus:border-accent text-[#0f1419] font-light transition-colors placeholder-[#6a7484]"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest mb-3 text-[#4a5568]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b border-[#d0d3d8] focus:border-accent text-[#0f1419] font-light transition-colors placeholder-[#6a7484]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest mb-3 text-[#4a5568]">
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-0 py-3 bg-transparent border-b border-[#d0d3d8] focus:border-accent text-[#0f1419] font-light transition-colors resize-none placeholder-[#6a7484]"
                    placeholder="Опишите ваш проект или задайте вопрос"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    id="agree"
                    required
                    className="w-4 h-4 mt-1 accent-accent"
                  />
                  <label htmlFor="agree" className="text-xs text-[#4a5568] font-light">
                    Я согласен на обработку{" "}
                    <a href="#" className="text-accent underline">
                      персональных данных
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-background py-4 font-light hover:bg-accent-light transition-colors disabled:opacity-50 text-sm sm:text-base"
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </button>
              </form>
            )}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
