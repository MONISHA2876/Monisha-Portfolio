"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, MotionValue } from "framer-motion";
import { Code2, Palette, Cpu, ArrowUpRight, type LucideIcon } from "lucide-react";

const STRIPE_COUNT = 5;
const STRIPE_DURATION = 0.28;
const STRIPE_STAGGER = 0.06;

const HERO_FADE_END = 0.15;

const HEADING_START = 0.32;
const HEADING_END = 0.5;

const CARD_START = 0.4;
const CARD_STAGGER = 0.05;
const CARD_DURATION = 0.24;

function AnimatedWords({
  text,
  className = "",
  wordDelay = 0.05,
}: {
  text: string;
  className?: string;
  wordDelay?: number;
}) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      transition={{ staggerChildren: wordDelay }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.28em]"
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

function Stripe({
  visualIndex,
  scrollYProgress,
}: {
  visualIndex: number;
  scrollYProgress: MotionValue<number>;
}) {
  const order = STRIPE_COUNT - 1 - visualIndex;
  const start = order * STRIPE_STAGGER;
  const end = Math.min(start + STRIPE_DURATION, 1);

  const y = useTransform(scrollYProgress, [start, end], ["0%", "-102%"]);

  return (
    <div
      className="absolute left-0 w-full overflow-hidden z-20"
      style={{
        top: `calc(${(visualIndex * 100) / STRIPE_COUNT}% - 2px)`,
        height: `calc(${100 / STRIPE_COUNT}% + 4px)`,
      }}
    >
      <motion.div className="h-full w-full bg-black" style={{ y }} />
    </div>
  );
}

type CardData = {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  accent: string;
};

function Card({
  index,
  title,
  subtitle,
  description,
  icon: Icon,
  accent,
  progress,
}: CardData & { index: number; progress: MotionValue<number> }) {
  const start = CARD_START + index * CARD_STAGGER;
  const end = Math.min(start + CARD_DURATION, 1);

  const rotateX = useTransform(
  progress,
  [start, end, 1],
  [70, 0, 0]
);

const y = useTransform(
  progress,
  [start, end, 1],
  [110, 0, 0]
);

const scale = useTransform(
  progress,
  [start, end, 1],
  [0.8, 1, 1]
);

const opacity = useTransform(
  progress,
  [start, end, 1],
  [0, 1, 1]
);

  return (
    <motion.div
      style={{ rotateX, y, scale, opacity, transformPerspective: 1400 }}
      whileHover={{ y: -8 }}
      className="group relative mx-auto aspect-3/4 w-full max-w-xs overflow-hidden rounded-3xl border border-neutral-200 bg-linear-to-b from-white to-neutral-50 shadow-xl"
    >
      <div className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${accent}`} />
      <Icon
        className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 rotate-12 text-neutral-100"
        strokeWidth={1}
      />
      <div className="relative z-10 flex h-full flex-col p-7">
        <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${accent} shadow-lg`}>
          <Icon className="h-7 w-7 text-white" strokeWidth={1.75} />
        </div>
        <h3 className="mt-6 text-xl font-semibold text-neutral-900">{title}</h3>
        <p className="text-sm font-medium text-neutral-400">{subtitle}</p>
        <p className="mt-4 text-sm leading-relaxed text-neutral-500">{description}</p>
        <div className="mt-auto flex items-center gap-1 text-sm font-medium text-neutral-900 opacity-0 transition-opacity group-hover:opacity-100">
          Explore <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </motion.div>
  );
}

function LightContent({
  progress,
  sectionTitle,
  cards,
}: {
  progress: MotionValue<number>;
  sectionTitle: string;
  cards: CardData[];
}) {
  const headingY = useTransform(
    progress,
    [HEADING_START, HEADING_END, 1],
    [60, 0, 0]
  );

  const headingOpacity = useTransform(
    progress,
    [HEADING_START, HEADING_END, 1],
    [0, 1, 1]
  );

  return (
    <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-10 px-6 md:gap-14">
      <motion.h2
        style={{
          y: headingY,
          opacity: headingOpacity,
          willChange: "transform, opacity",
        }}
        className="text-3xl font-semibold text-neutral-900 md:text-5xl"
      >
        {sectionTitle}
      </motion.h2>

      <div
        className="grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3"
        style={{
          perspective: 1400,
          transformStyle: "preserve-3d",
        }}
      >
        {cards.map((card, i) => (
          <Card
            key={card.title}
            index={i}
            progress={progress}
            {...card}
          />
        ))}
      </div>
    </div>
  );
}

interface ScrollStripeRevealProps {
  sectionTitle?: string;
  cards?: CardData[];
}

export default function ScrollStripeReveal({
  sectionTitle = "What I Build",
  cards = [
    {
      title: "Web & App",
      subtitle: "Frontend & Backend",
      description: "Responsive, performant products built end-to-end with modern frameworks.",
      icon: Code2,
      accent: "from-blue-500 to-indigo-600",
    },
    {
      title: "Beautiful & Meaningful",
      subtitle: "UI/UX",
      description: "Interfaces crafted with intent — clean, accessible, and delightful to use.",
      icon: Palette,
      accent: "from-fuchsia-500 to-purple-600",
    },
    {
      title: "AI Experience",
      subtitle: "& Web3 DApp",
      description: "Exploring intelligent systems and decentralized applications at the edge.",
      icon: Cpu,
      accent: "from-emerald-500 to-teal-600",
    },
  ],
}: ScrollStripeRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, HERO_FADE_END], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, HERO_FADE_END], [0, -40]);
  const heroVisibility = useTransform(scrollYProgress, (v) =>
    v > HERO_FADE_END ? "hidden" : "visible"
  );

  return (
    <div ref={containerRef} className="relative h-[450vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
      
        <div className="absolute inset-0 z-0 bg-neutral-100" />
 
        <LightContent progress={scrollYProgress} sectionTitle={sectionTitle} cards={cards} />

        {Array.from({ length: STRIPE_COUNT }).map((_, i) => (
          <Stripe key={i} visualIndex={i} scrollYProgress={scrollYProgress} />
        ))}

        <motion.div
          style={{ opacity: heroOpacity, y: heroY, visibility: heroVisibility }}
          className="pointer-events-none absolute inset-0 z-30 grid grid-cols-1 gap-y-16 p-16 text-white md:grid-cols-2 md:p-36"
        >
          <div className="flex items-start">
            <AnimatedWords
              text="Building products with purpose."
              className="text-md md:text-lg leading-tight max-w-xs uppercase"
            />
          </div>

          <div className="flex items-start md:justify-end">
            <div className="max-w-md md:text-right">
              <AnimatedWords
                text="Beyond coding, I enjoy exploring astronomy, creating art and craft & diving into emerging technologies that challenge the way we think."
                className="text-base md:text-lg text-neutral-300 leading-relaxed"
              />
            </div>
          </div>

          <div className="flex items-end">
            <AnimatedWords
              text="Learning something new every day."
              className="text-md md:text-lg text-neutral-400 max-w-2xs uppercase"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}