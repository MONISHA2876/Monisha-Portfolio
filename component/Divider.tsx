export default function Divider() {
    const words = [
        "Software Engineer",
        "Web Developer",
        "UI/UX Designer",
        "Open Source Contributor",
        "Full Stack Developer",
        "React Native Developer",
        "Web3 Enthusiast",
        "AI/ML Engineer",
        "System Design Learner"
    ];
    return(
        <div className="relative w-full h-24 bg-white my-4 p-4">
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="flex flex-nowrap flex-row justify-center gap-20 animate-marquee overflow-hidden">
                        {words.map((word, index) => (
                            <span key={index} className=" text-black whitespace-nowrap rounded-full text-6xl">
                                {word}
                            </span>
                        ))}
                    </div>
                </div>

    )
}