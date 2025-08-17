"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageFlipTransition({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      {/* overflow-x-hidden chặn thanh cuộn ngang khi 3D “nở” khung */}
      <div
        key={pathname}
        className="relative overflow-x-hidden"   
        style={{ perspective: 1200 }}
      >
        <motion.div
          key={pathname + "-content"}
          initial={{ rotateY: 10, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden", // giảm nhấp nháy & răng cưa
            willChange: "transform",
            transformOrigin: "center center", // hạn chế “nở” lệch
          }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
