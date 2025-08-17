// components/NavBlurTransition.jsx
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function NavBlurTransition({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
