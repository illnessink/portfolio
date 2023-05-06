import Link  from 'next/link';
import React from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { motion } from 'framer-motion';


function Header() {
    const router = useRouter();
    return (
        <header 
        className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav className="flex-container">
                        <Link href="/" className='mr-4 relative group'>Home
                            <span className={`h-[1px] inline-block bg-indigo
                            absolute left-0 -bottom-0.5
                            group-hover:w-full transition-[width] ease duration-300
                            ${router.asPath === "/" ? "w-full" : "w-0"}`}>
                            &nbsp;</span>
                        </Link>
                        <Link href="/about" className='mx-4 relative group'>About
                            <span className={`h-[1px] inline-block bg-indigo
                            absolute left-0 -bottom-0.5
                            group-hover:w-full transition-[width] ease duration-300
                            ${router.asPath === "/about" ? "w-full" : "w-0"}`}>
                            &nbsp;</span>
                        </Link>
                        <Link href="/projects" className='ml-4 relative group'>Projects
                            <span className={`h-[1px] inline-block bg-indigo
                            absolute left-0 -bottom-0.5
                            group-hover:w-full transition-[width] ease duration-300
                            ${router.asPath === "/projects" ? "w-full" : "w-0"}`}>
                            &nbsp;</span>
                        </Link>
                        <Link href="/contact" className='mx-4 relative group'>Contact
                            <span className={`h-[1px] inline-block bg-indigo
                            absolute left-0 -bottom-0.5
                            group-hover:w-full transition-[width] ease duration-300
                            ${router.asPath === "/contact" ? "w-full" : "w-0"}`}>
                            &nbsp;</span>
                        </Link>
            </nav>
            <nav className="flex items-center justify-center flex-wrap">
                <motion.a href="https://github.com/illnessink" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mr-3"
                >
                    <BsGithub className='text-3xl' />
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/vanessafoerster/" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 ml-3"
                >
                    <BsLinkedin className='text-3xl' />
                </motion.a>
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    );
}

export default Header;

