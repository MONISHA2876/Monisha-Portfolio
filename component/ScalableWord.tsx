"use client";

import { useRef, useState } from "react";
import { motion, animate } from "framer-motion";

export default function ScalableWord() {
  const [size, setSize] = useState(48);

  const startX = useRef(0);
  const startSize = useRef(48);

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    startX.current = e.clientX;
    startSize.current = size;
    //@ts-ignore
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const delta = e.clientX - startX.current;

    // Change sensitivity here
    const next = Math.max(28, Math.min(110, startSize.current + delta * 0.35));

    setSize(next);
  }

  function onPointerUp() {
    //@ts-ignore
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);

    animate(size, 48, {
      duration: 0.5,
      ease: "easeOut",
      onUpdate(v) {
        setSize(v);
      },
    });
  }

  const gap = size * 0.25;

  return (
    <div
      className="inline-flex items-center justify-center select-none"
      style={{
        gap: `${gap}px`,
        minHeight: `${size + 20}px`,
      }}
    >
      <motion.div
        onPointerDown={onPointerDown}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-ew-resize text-cyan-400 font-bold text-2xl"
      >
        ◀
      </motion.div>

      <motion.span
        animate={{
          fontSize: size,
          letterSpacing: size / 12,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="font-semibold whitespace-nowrap text-amber-500"
      >
        scalable
      </motion.span>

      <motion.div
        onPointerDown={onPointerDown}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-ew-resize text-cyan-400 font-bold text-2xl"
      >
        ▶
      </motion.div>
    </div>
  );
}