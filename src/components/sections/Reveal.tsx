
"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
  distance = 55,
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : distance,
      scale: shouldReduceMotion ? 1 : 0.985,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.12,
      }}
    >
      {children}
    </motion.div>
  );
}
