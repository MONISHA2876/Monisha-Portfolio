"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  category?: string;
  year?: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Stock Market Dashboard",
    description: "A clean stock market dashboard that brings market data, price movements, watchlists, and financial insights together in one place.",
    image: "/Projects/stock_market.png",
    category: "Web Development",
    year: "2026",
    link: "https://stock-market-app-six-beige.vercel.app/"
  },
  {
    title: "SaaS Audit",
    description: "A client-side SaaS audit tool that identifies underused subscriptions, uncovers cost-saving opportunities, and generates AI-powered executive insights.",
    image: "/Projects/saas.png",
    category: "SaaS / AI",
    year: "2026",
    link: "https://ai-spend-audit-xi-five.vercel.app/"
  },
  {
    title: "StudyPal",
    description: "StudyPal is your personal study companion, a React Native + Expo app that helps you organize daily tasks, beat procrastination with Pomodoro timers, and build better study habits, one session at a time.",
    image: "/Projects/studypal.png",
    category: "Mobile",
    year: "2026",
    link: "https://github.com/MONISHA2876/StudyPal"
  },
  {
    title: "BlockAid Nexus",
    description: "ReliefProof is a full-stack MVP showing how blockchain-style logging and simple AI rules can improve transparency in disaster relief.",
    image: "/Projects/blockaid.jpeg",
    category: "Web3",
    year: "2026",
    link: "https://github.com/MONISHA2876/BLOCKAID-NEXUS"
  },
];

export function ViewProjectsButton( {text}: {text: string}) {
  return (
    <a href="https://github.com/MONISHA2876?tab=repositories" target="_blank" rel="noopener noreferrer">
      <button
        type="button"
        className="group flex items-center gap-3 border-b border-neutral-400 pb-2 text-[11px] uppercase tracking-[0.16em] text-neutral-900 transition-colors duration-300 hover:border-neutral-900"
      >
        <span>{text}</span>

      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>
    </a>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex h-screen w-[50vw] shrink-0 items-center justify-center px-8 lg:px-12 border-2 border-neutral-300 border-l-0">
      <a
        href={project.link ?? "#"}
        target={project.link ? "_blank" : undefined}
        rel={project.link ? "noopener noreferrer" : undefined}
        className="group block w-full max-w-[800px]"
      >
        {/* Image */}
        <motion.div
          initial={
            { opacity: 1, y: 60 }
          }
          whileInView={
            { opacity: 1, y: 0 }
          }
          viewport={{
            once: false,
            amount: 0.35,
          }}
          transition={{
            duration: 0.5,
            ease: "linear",
            delay: 0,
          }}
          className="relative w-full overflow-hidden rounded-[7px]"
        >
          <Image
            width={800}
            height={600}
            priority={index === 0}
            quality={100}
            src={project.image}
            alt={project.title}
            className={`aspect-[1.55/1] w-full object-cover object-left transition-transform duration-700 ${
              shouldReduceMotion ? "" : "group-hover:scale-[1.025]"
            }`}
          />

          {/* Inner border */}
          <div className="pointer-events-none absolute inset-[5%] border border-white/40" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 45 }
          }
          whileInView={
            shouldReduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 1, y: 0 }
          }
          viewport={{
            once: false,
            amount: 0.35,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 flex items-start justify-between gap-8"
        >
          {/* Title + Description */}
          <div className="max-w-[60%]">
            <h3 className="text-2xl font-normal leading-tight tracking-tight text-neutral-900 md:text-3xl">
              {project.title}
            </h3>

            <p className="mt-3 max-w-md text-sm leading-[1.4] text-neutral-500 md:text-base">
              {project.description}
            </p>
          </div>

          {/* Explore Project */}
          <div className="shrink-0 pt-1">
            <div className="flex min-w-[150px] items-center justify-between gap-6 border-b border-neutral-400 pb-3 text-[11px] uppercase tracking-[0.12em] text-neutral-700 transition-colors duration-300 group-hover:border-neutral-900">
              <span>Explore Project</span>

              <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </motion.div>
      </a>
    </div>
  );
}

export default function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    let ticking = false;

    const updateTrack = () => {
      const rect = section.getBoundingClientRect();

      const sectionTop = window.scrollY + rect.top;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollableDistance = sectionHeight - viewportHeight;

      if (scrollableDistance <= 0) {
        track.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      // How far we have scrolled inside this section
      const currentScroll = window.scrollY - sectionTop;

      // 0 → 1
      const progress = Math.min(
        Math.max(currentScroll / scrollableDistance, 0),
        1
      );

      // Total horizontal distance
      const maxTranslate =
        track.scrollWidth - window.innerWidth;

      const translateX = -(progress * maxTranslate);

      track.style.transform = `translate3d(${translateX}px, 0, 0)`;

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateTrack);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateTrack);

    updateTrack();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateTrack);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] w-full bg-neutral-100 text-neutral-900 md:h-[300vh]"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Horizontal track */}
        <div
          ref={trackRef}
          className="flex h-screen w-max will-change-transform"
        >

          <div className="flex h-screen w-[50vw] shrink-0 items-center justify-center border-2 gap-4 flex-col border-neutral-300">
            <h3 className="text-3xl font-normal leading-tight tracking-tight text-neutral-700 md:text-6xl">
              Selected Work<br/>& explorations
            </h3>
            <ViewProjectsButton text="View All Projects" />
          </div>

          <ProjectCard
            project={projects[0]}
            index={0}
          />

          <ProjectCard
            project={projects[1]}
            index={1}
          />

          <ProjectCard
            project={projects[2]}
            index={2}
          />

          <ProjectCard
            project={projects[3]}
            index={3}
          />

          <div className="flex flex-col h-screen p-10 w-[50vw] shrink-0 items-center justify-center border-2 border-neutral-300 border-l-0">
            <h3 className="text-xl text-center font-normal leading-tight tracking-tight text-neutral-700 md:text-3xl mb-8">
              A collection of digital products,<br/> & explorations shaped by<br/>technology & curiosity.
            </h3>
            <ViewProjectsButton text="View All Projects" />
          </div>
        </div>
      </div>
    </section>
  );
}