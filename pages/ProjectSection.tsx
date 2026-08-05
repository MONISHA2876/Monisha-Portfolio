"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern developer portfolio with immersive GSAP animations and smooth interactions.",
    image: "/projects/portfolio.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind", "GSAP"],
    live: "#",
    github: "#",
  },
  {
    title: "Task Manager",
    description:
      "A full-stack productivity app with authentication, drag & drop and realtime updates.",
    image: "/projects/taskmanager.jpg",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    live: "#",
    github: "#",
  },
  {
    title: "Resume Builder",
    description:
      "Create elegant resumes instantly with live preview and PDF export.",
    image: "/projects/resume.jpg",
    tech: ["Next.js", "Tailwind", "PDF"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const distance = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + distance,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: 1 / (projects.length - 1),
            duration: 0.35,
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white">
      <div ref={trackRef} className="flex h-screen w-max">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex h-screen w-screen flex-col justify-center px-8 md:px-20"
          >
            <div className="mx-auto w-full max-w-5xl">
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="mt-10 flex flex-col gap-5">
                <h2 className="text-4xl font-bold text-neutral-900">
                  {project.title}
                </h2>

                <p className="max-w-3xl text-lg leading-8 text-neutral-600">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-neutral-300 px-4 py-2 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-2 flex gap-5">
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-2 font-medium hover:underline"
                  >
                    Live Demo <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}