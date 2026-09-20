"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CollaborationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.4,
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#050608] text-white"
    >
      <div className="flex w-full flex-col items-center justify-center overflow-hidden">

        <motion.h2
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={
            isInView
              ? {
                  x: 0,
                  opacity: 1,
                }
              : {
                  x: "-100vw",
                  opacity: 0,
                }
          }
          transition={{
            duration: 2.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-center
            text-[18vw]
            font-normal
            leading-[0.8]
            tracking-[-0.06em]
            md:text-[11vw]
            mb-8
          "
        >
          Let's
        </motion.h2>

        <motion.h2
          initial={{
            x: "100vw",
            opacity: 0,
          }}
          animate={
            isInView
              ? {
                  x: 0,
                  opacity: 1,
                }
              : {
                  x: "100vw",
                  opacity: 0,
                }
          }
          transition={{
            duration: 2.5,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-center
            text-[16vw]
            font-normal
            leading-[0.8]
            tracking-[-0.06em]
            md:text-[10vw]
          "
        >
          Collaborate!
        </motion.h2>

      </div>
    </section>
  );
}