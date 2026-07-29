import Image from "next/image";


export default function Header() {
    return (
        <div className="flex justify-between items-center py-2 pr-8 pl-2 mx-16 rounded-full my-4 bg-black/30 text-white border border-slate-800">
            <div className="flex items-center space-x-2">
                <div className="flex items-end">
                    <Image src="/dp.png" alt="Logo" width={50} height={50} className="rounded-full" />
                    <div className="animate-blink bg-green-400 h-3 w-3 ml-2 rounded-full relative right-5"></div>
                </div>
                <h1 className="text-xl">Monisha Singh</h1>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/about" className="hover:underline">About</a></li>
                    <li><a href="/contact" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}