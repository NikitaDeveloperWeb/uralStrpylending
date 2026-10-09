"use client";

import { motion } from "framer-motion";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function CTAButton({
  children,
  onClick,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const variants = {
    primary:
      "bg-accent text-background hover:bg-accent-light shadow-lg shadow-accent/20",
    secondary: "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-background",
    outline:
      "border-2 border-foreground/30 text-foreground hover:border-accent hover:text-accent",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
        variants[variant]
      } ${className}`}
    >
      {children}
    </motion.button>
  );
}
