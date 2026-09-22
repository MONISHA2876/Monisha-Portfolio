import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-black text-white py-6 mt-10 max-w-screen">
            <div className="container px-4 flex flex-col md:flex-row justify-between w-5xl mx-auto">
                <div className="flex space-x-4">
                    <a href="https://github.com/MONISHA2876" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-5 h-5 hover:text-gray-500 transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/in/monisha-singh-tech/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-5 h-5 hover:text-gray-500 transition-colors" />
                    </a>
                    <a href="mailto:monishasingh06@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="w-5 h-5 hover:text-gray-500 transition-colors" />
                    </a>
                </div>
                <p className="text-sm mb-4 md:mb-0">© {year} Monisha. Built with ❤️</p>
            </div>
        </footer>
    );
}