
"use client";

import { motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <motion.div
      key={pathname}
      initial={
        shouldReduceMotion || !isReady
          ? false
          : { opacity: 0, y: 10 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex min-h-full flex-1 flex-col"
    >
      {children}
    </motion.div>
  );
}
