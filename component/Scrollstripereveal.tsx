"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, MotionValue } from "framer-motion";
import { Code2, Blocks, Cpu, ArrowUpRight, type LucideIcon, Plus } from "lucide-react";

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
  tags?: string[];     
  linkText: string|"Explore Project";   
};

function Card({
  index,
  title,
  subtitle,
  description,
  icon: Icon,
  accent,
  tags,       
  linkText,  
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
      className="group relative mx-auto w-full max-w-sm min-h-[50vh] overflow-hidden rounded-[28px] border border-neutral-200/80 bg-white p-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]"
    >
      {/* top row: index number + icon chip */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium tracking-wide text-neutral-300">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 shadow-sm">
          <Icon className="h-4 w-4" strokeWidth={1.75} />
        </div>
      </div>

      {/* title + subtitle */}
      <h3 className="mt-5 text-2xl font-normal leading-tight tracking-tight text-neutral-700">
        {title}
      </h3>
      <p className="mt-1 text-[11px] font-normal tracking-[0.12em] text-neutral-400 uppercase">
        {subtitle}
      </p>

      {/* description */}
      <p className="mt-3 max-w-[85%] text-sm leading-tight text-neutral-500">
        {description}
      </p>

      {/* decorative icon watermark (bottom-right, replaces 3D render) */}
      <Icon
        className="pointer-events-none absolute -bottom-8 -right-8 h-36 w-36 rotate-[8deg] text-neutral-100"
        strokeWidth={1}
      />

      {/* accent gradient blob behind icon, subtle */}
      <div
        className={`pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-linear-to-br ${accent} opacity-[0.06] blur-2xl`}
      />

      {/* tags row */}
      {tags && (
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-medium text-neutral-600"
            >
              {tag}
            </span>
          ))}
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-neutral-500">
            <Plus className="h-3 w-3" strokeWidth={2} />
          </span>
        </div>
      )}
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
      <div className="flex flex-col items-center gap-3 text-center">
        <motion.h2
          style={{
            y: headingY,
            opacity: headingOpacity,
            willChange: "transform, opacity",
          }}
          className="text-xs font-semibold tracking-[0.25em] text-neutral-400">
          TURNING IDEAS INTO REALITY
        </motion.h2>
        <motion.h2
          style={{
            y: headingY,
            opacity: headingOpacity,
            willChange: "transform, opacity",
          }}
          className="text-3xl font-normal leading-tight tracking-tight text-neutral-700 md:text-6xl"
        >
          What I <span className="font-serif italic font-normal">Build</span>
        </motion.h2>
        <motion.h2
          style={{
            y: headingY,
            opacity: headingOpacity,
            willChange: "transform, opacity",
          }}
           className="max-w-md text-sm text-neutral-500 md:text-base">
          A mix of code, design and curiosity — building products that are useful, beautiful, and a little ahead of time.
        </motion.h2>
      </div>

      <div
        className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3"
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
  )
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
      subtitle: "Full-Stack Development",
      description: "Responsive, performant products built end-to-end with modern technologies.",
      icon: Code2,
      accent: "from-blue-500 to-indigo-600",
      tags: ["React", "Next.js", "Node.js", "React Native"],
      linkText: "Explore my work",
    },
    {
      title: "Web3 & Blockchain",
      subtitle: "Decentralized Apps",
      description: "Building smart contracts and DApps on the blockchain — secure, transparent, and trustless.",
      icon: Blocks,
      accent: "from-fuchsia-500 to-purple-600",
      tags: ["Solidity", "Ethereum", "Web3.js"],
      linkText: "Explore Web3 projects",
    },
    {
      title: "AI Experience",
      subtitle: "Intelligent Solutions",
      description: "Exploring intelligent systems and decentralized applications at the edge.",
      icon: Cpu,
      accent: "from-emerald-500 to-teal-600",
      tags: ["AI/ML", "LLMs"],
      linkText: "Explore AI projects",
    },
  ]
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