// components/PageTransition.jsx
"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  const variants = {
    initial: { opacity: 0, y: reduce ? 0 : 12, filter: reduce ? "blur(0px)" : "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit:    { opacity: 0, y: reduce ? 0 : -12, filter: reduce ? "blur(0px)" : "blur(6px)" },
  };

  const transition = {
    duration: 0.38,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div key={pathname} className="relative overflow-x-clip">
        <motion.div
          key={pathname + "-content"}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          style={{ willChange: "opacity, transform, filter" }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
