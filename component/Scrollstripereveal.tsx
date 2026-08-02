"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const STRIPE_COUNT = 6;
const STRIPE_DURATION = 0.35;
const STRIPE_STAGGER = 0.1;

function Stripe({
  index,
  scrollYProgress,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index * STRIPE_STAGGER;
  const end = Math.min(start + STRIPE_DURATION, 1);

  const exitDirection = index % 2 === 0 ? "100%" : "-100%";
  const x = useTransform(scrollYProgress, [start, end], ["0%", exitDirection]);

  return (
    <div
      className="absolute left-0 w-full overflow-hidden"
      style={{
        top: `${(index * 100) / STRIPE_COUNT}%`,
        height: `${100 / STRIPE_COUNT}%`,
      }}
    >
      <motion.div className="h-full w-full bg-black" style={{ x }} />
    </div>
  );
}

export default function ScrollStripeReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  // scrollYProgress goes 0 -> 1 as the user scrolls through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Final revealed background */}
        <div className="absolute inset-0 bg-neutral-100" />

        {/* Optional: content that appears once stripes are gone */}
        <div className="relative z-0 flex h-full w-full items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-neutral-900">
            Welcome to the light side
          </h2>
        </div>

        {/* Stripes stacked above the background/content */}
        {Array.from({ length: STRIPE_COUNT }).map((_, i) => (
          <Stripe key={i} index={i} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </div>
  );
}