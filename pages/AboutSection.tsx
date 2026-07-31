"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ScalableWord from "@/component/ScalableWord";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const eyebrowRef = useRef<HTMLParagraphElement>(null);
    const line1Ref = useRef<HTMLSpanElement>(null);
    const line2Ref = useRef<HTMLSpanElement>(null);
    const line3Ref = useRef<HTMLSpanElement>(null);
    const waveRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const ctx = gsap.context(() => {
            const lines = [line1Ref.current, line2Ref.current, line3Ref.current].filter(
                (el): el is HTMLSpanElement => el !== null
            );

            if (reduceMotion) {
                gsap.set([eyebrowRef.current, ...lines], { opacity: 1, y: 0, filter: "blur(0px)" });
                return;
            }

            gsap.set(eyebrowRef.current, { opacity: 0, y: 12 });
            gsap.set(lines, { opacity: 0, y: 28, filter: "blur(6px)" });

            const tl = gsap.timeline({
                scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
            });

            tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }).to(
                lines,
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.9,
                    ease: "power3.out",
                    stagger: 0.18,
                },
                "-=0.15"
            );

            // gentle looping wave on the 🖐🏻
            if (waveRef.current) {
                gsap
                    .timeline({ repeat: -1, repeatDelay: 2.4, delay: 1 })
                    .to(waveRef.current, {
                        rotate: 18,
                        duration: 0.18,
                        ease: "power1.inOut",
                        transformOrigin: "70% 70%",
                    })
                    .to(waveRef.current, { rotate: -12, duration: 0.16, ease: "power1.inOut" })
                    .to(waveRef.current, { rotate: 14, duration: 0.16, ease: "power1.inOut" })
                    .to(waveRef.current, { rotate: 0, duration: 0.2, ease: "power2.out" });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#050505] text-white gap-10 p-8"
        >
            <p
                ref={eyebrowRef}
                className="mx-auto text-sm uppercase tracking-[0.4em] text-neutral-400"
            >
                who am i?
            </p>
            <div className="flex-1 flex-col justify-between flex">
                <span
                    ref={line1Ref}
                    className="text-[44px] leading-[1.2] geistMono font-extralight"
                >
                    <span className="wave" ref={waveRef}>
                        🖐🏻
                    </span>{" "}
                    I&apos;m Monisha, a CS Student & Software Developer{" "}
                    <Image
                        src="/gif/work.gif"
                        alt="wave"
                        width={90}
                        height={90}
                        className="inline relative bottom-2"
                        unoptimized
                    />{" "}
                    passionate about building{" "}
                    <Image
                        src="/gif/building.gif"
                        alt="wave"
                        width={50}
                        height={50}
                        className="inline"
                        unoptimized
                    />{" "}
                    <div className="relative bottom-1 inline">
                        <ScalableWord />
                    </div>{" "}
                    & user-centric Web Applications.
                </span>
                <span
                    ref={line2Ref}
                    className="text-[44px] leading-18 geistMono font-extralight"
                >
                    I enjoy transforming{" "}
                    <Image
                        src="/gif/idea.gif"
                        alt="wave"
                        width={70}
                        height={70}
                        className="inline relative bottom-2"
                        unoptimized
                    />{" "}
                    into real products using modern tech like \\3d badges\\.
                </span>
                <span
                    ref={line3Ref}
                    className="text-[44px] leading-18 geistMono font-extralight"
                >
                    Beyond Web Development, I&apos;m also working on Web3, AI/ML, RAG system, DevOps &
                    System Design.
                </span>
            </div>
        </div>
    );
}