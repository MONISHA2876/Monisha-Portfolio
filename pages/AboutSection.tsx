"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EYEBROW = "who am i?";
const BIO =
  "Hi, I'm Monisha, a Software Developer passionate about building digital products. From web applications and mobile apps to AI/ML and Web3 projects, I love bringing ideas to life.";

function W({ children }: { children: ReactNode }) {
    return (
        <span className="word inline-block overflow-hidden align-top">{children}</span>
    );
}

export default function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const eyebrowRef = useRef<HTMLParagraphElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const waveRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const ctx = gsap.context(() => {
            const eyebrowWords = eyebrowRef.current?.querySelectorAll(".word") ?? [];
            const textWords = textRef.current?.querySelectorAll(".word") ?? [];

            if (reduce) {
                gsap.set(eyebrowWords, { opacity: 1 });
                gsap.set(textWords, { opacity: 1, color: "#fff" });
                return;
            }

            // eyebrow: word-by-word entrance, once
            gsap.from(eyebrowWords, {
                opacity: 0,
                y: 14,
                duration: 0.5,
                stagger: 0.04,
                ease: "power2.out",
                scrollTrigger: { trigger: containerRef.current, start: "top 85%" },
            });

            // main text: black -> white per word, scrubbed by scroll position
            gsap.set(textWords, { color: "#050505" });
            gsap.to(textWords, {
                color: "#ffffff",
                stagger: 0.05,
                ease: "none",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 85%",
                    end: "bottom 45%",
                    scrub: 0.6,
                },
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#050505] text-white gap-10 p-8 items-center justify-center"
        >
            <p
                ref={eyebrowRef}
                className="mx-auto text-sm uppercase tracking-[0.4em] text-neutral-400"
            >
                {EYEBROW.split(" ").map((w, i) => (
                    <W key={i}>{w}&nbsp;</W>
                ))}
            </p>

            <div className="flex">
                <span ref={textRef} className="text-6xl leading-[1.2] geistMono">
                    {BIO.split(" ").map((w, i) => (
                        <W key={i}>{w}&nbsp;</W>
                    ))}
                </span>
            </div>
        </div>
    );
}