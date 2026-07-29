"use client";

import { useEffect, useState } from "react";
import Header from "@/component/Header";
import { ArrowDown } from "lucide-react";

const words = [
  "beautiful web experiences.",
  "AI-powered applications.",
  "interactive user interfaces.",
  "scalable backend systems.",
  "cutting-edge mobile apps.",
  "ideas into reality.",
];

export default function HeroSection() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, 70);

      if (text === currentWord) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, 35);

      if (text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#050505] text-white">
      {/* Blob 1 */}
      <div
        className="absolute h-[450px] w-[550px] bg-white/[0.13] blur-[95px]"
        style={{
          top: "-10%",
          left: "-5%",
          borderRadius: "42% 58% 65% 35% / 45% 40% 60% 55%",
          transform: "rotate(-15deg)",
        }}
      />

      {/* Blob 2 */}
      <div
        className="absolute h-[380px] w-[420px] bg-white/[0.09] blur-[90px] mix-blend-screen"
        style={{
          top: "-5%",
          right: "0%",
          borderRadius: "60% 40% 35% 65% / 55% 65% 35% 45%",
          transform: "rotate(22deg)",
        }}
      />

      {/* Blob 3 */}
      <div
        className="absolute h-[320px] w-[380px] bg-white/[0.06] blur-[100px] mix-blend-screen"
        style={{
          top: "45%",
          left: "10%",
          borderRadius: "35% 65% 55% 45% / 65% 45% 55% 35%",
          transform: "rotate(-30deg)",
        }}
      />

      {/* Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col ">
        <Header />

        <main className="relative bottom-7 flex flex-1 flex-col items-center justify-center px-6 text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-neutral-400">
            Software Engineer
          </p>

          <h1 className="text-6xl font-bold leading-tight md:text-8xl">
            Hi, I'm Monisha
          </h1>

          <div className="mt-8 h-20 flex items-center justify-center">
            <h2 className="text-3xl font-medium text-neutral-300 md:text-5xl">
              I build{" "}
              <span className="text-white">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
          </div>

        </main>
        
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center">
                <span className="mb-3 text-[11px] uppercase tracking-[0.4em] text-neutral-400">
                    Scroll
                </span>

                <ArrowDown
                    size={22}
                    strokeWidth={1.8}
                    className="text-neutral-400 scroll-indicator"
                />
            </div>
        </div>
      </div>
    </div>
  );
}