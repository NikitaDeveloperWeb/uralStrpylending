"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-light mb-4 tracking-tight ${dark ? 'text-[#0f1419]' : 'text-foreground'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base font-light max-w-2xl mx-auto mt-4 ${dark ? 'text-[#4a5568]' : 'text-text-muted'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
