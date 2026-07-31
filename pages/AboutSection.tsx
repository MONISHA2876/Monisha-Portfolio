import Image from "next/image";
import ScalableWord from "@/component/ScalableWord";

export default function AboutSection() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#050505] text-white gap-10 p-8">
            <p className="mx-auto text-sm uppercase tracking-[0.4em] text-neutral-400">
            who am i?
          </p>
          <div className="flex-1 flex-col justify-between flex">
            <span className="text-[44px] leading-[1.2] geistMono font-extralight">
                <span className="wave">🖐🏻</span> I'm Monisha, a CS Student & Software Developer{" "}
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
                <div className="relative bottom-1 inline"><ScalableWord /></div> & user-centric Web Applications.
            </span>
            <span className="text-[44px] leading-18 geistMono font-extralight">
                I enjoy transforming {" "}
                <Image
                    src="/gif/idea.gif"
                    alt="wave"
                    width={70}
                    height={70}
                    className="inline relative bottom-2"
                    unoptimized
                />{" "} into real products using modern tech like \\3d badges\\.
            </span>
            <span className="text-[44px] leading-18 geistMono font-extralight">
                Beyond Web Development, I'm also working on Web3, AI/ML, RAG system, DevOps & System Design.
            </span>
            </div>
        </div>
    );
}