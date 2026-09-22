import ContactModel from '@/component/ContactModel';
import '../app/globals.css';
import Image from 'next/image';

export default function Contact() {
    return (
        <div className="bg-[#FAF9F0] dark:bg-black text-black dark:text-white min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-8">Get in Touch - Lets Connect!</h1>
            <div className="flex flex-col md:flex-row justify-around gap-5">
                <div id="Contact_Info" className="flex flex-col justify-between my-4 mx-2.5 w-md">
                    <h3 className="text-sm font-extralight">Your name</h3>
                    <input type="text" className="border-0 focus:outline-none rounded-md p-2 mb-4 bg-white dark:bg-gray-800 text-black dark:text-white w-full placeholder:text-xs mt-1.5" placeholder="What's your good name ?" />
                    <h3 className="text-sm font-extralight">Your email</h3>
                    <input type="email" className="border-0 focus:outline-none rounded-md p-2 mb-4 bg-white dark:bg-gray-800 text-black dark:text-white w-full placeholder:text-xs mt-1.5" placeholder="What's your Email address ?" />
                    <h3 className="text-sm font-extralight">Your message</h3>
                    <textarea className="border-0 focus:outline-none rounded-md p-2 mb-4 bg-white dark:bg-gray-800 text-black dark:text-white w-full h-32 placeholder:text-xs mt-1.5" placeholder="What do you want to say ?" />
                    <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md hover:opacity-80 transition-opacity w-full cursor-pointer">
                        Send Message
                        <Image src="/arrow-right.png" alt="Send Icon" width={16} height={16} className="inline-block ml-2 " />
                    </button>
                </div>
                <div id="3D_Model" className='min-w-md h-full'>
                    <figure className='w-md h-[70vh]'>
                        <ContactModel />
                    </figure>
                </div>
            </div>
        </div>
    );
}