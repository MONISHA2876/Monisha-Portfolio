"use client";

import { useMemo } from "react";
import StackIcon from "tech-stack-icons";

interface Skill {
  name: string;
  label: string;
}

const skills: Skill[] = [
  { name: "html5", label: "HTML" },
  { name: "css3", label: "CSS" },
  { name: "js", label: "JavaScript" },
  { name: "react", label: "React" },
  { name: "nextjs", label: "Next.js" },
  { name: "tailwindcss", label: "Tailwind CSS" },
  { name: "react", label: "React Native" },
  { name: "nodejs", label: "Node.js" },
  { name: "expressjs", label: "Express.js" },
  { name: "mongodb", label: "MongoDB" },
  { name: "postgresql", label: "PostgreSQL" },
  { name: "python", label: "Python" },
  { name: "c++", label: "C" },
  { name: "c++", label: "C++" },
  { name: "java", label: "Java" },
  { name: "git", label: "Git" },
  { name: "github", label: "GitHub" },
  { name: "postman", label: "Postman" },
];

const needInvert = ["nextjs", "expressjs", "github", "vercel"];

function SkillCard({ skills, index }: { skills: Skill; index: number }) {
  // useMemo se values consistent rahegi client aur server pe
  const animationValues = useMemo(() => ({
    duration: 3 + Math.random() * 3,
    delay: Math.random() * 2,
    x1: Math.random() * 4 - 2,
    y1: Math.random() * 4 - 2,
    x2: Math.random() * 4 - 2,
    y2: Math.random() * 6 - 3,
    x3: Math.random() * 4 - 2,
    y3: Math.random() * 4 - 2,
  }), []);
      
  return (
    <div className="skill-container p-2 bg-slate-800 rounded-xl">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-${index} {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(${animationValues.x1}px, ${animationValues.y1}px);
          }
          50% {
            transform: translate(${animationValues.x2}px, ${animationValues.y2}px);
          }
          75% {
            transform: translate(${animationValues.x3}px, ${animationValues.y3}px);
          }
        }
      `}} />
      <div className="flex flex-col items-center justify-center p-2 rounded-lg">
        <div 
          className="floating-icon"
          style={{
            animation: `float-${index} ${animationValues.duration}s ease-in-out infinite`,
            animationDelay: `${animationValues.delay}s`
          }}
        >
          <StackIcon 
            name={skills.name} 
            className={`w-12 h-12 ${needInvert.includes(skills.name) ? 'invert' : ''}`} 
          />
        </div>
        <p className="mt-1 text-xs font-medium">{skills.label}</p>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .floating-icon {
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .skill-container:hover .floating-icon {
          animation-play-state: paused !important;
          transform: scale(1.08) !important;
        }
      `}} />
      
      <div className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-6xl px-10 py-4 mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skills={skill} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}