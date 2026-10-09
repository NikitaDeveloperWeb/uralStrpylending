"use client";

import { motion } from "framer-motion";

interface ScrollAnimationProps {
  children: React.ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
}

export default function ScrollAnimation({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollAnimationProps) {
  const directions = {
    up: { y: 40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
  };

  const initialStyle = directions[direction];

  return (
    <motion.div
      initial={{ opacity: 0, y: initialStyle.y, x: initialStyle.x }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
