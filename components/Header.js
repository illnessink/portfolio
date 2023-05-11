import Link  from 'next/link';
import React from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { BsGithub, BsLinkedin, BsFillMoonStarsFill, BsFillBrightnessHighFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import useThemeSwitcher from 'components/hooks/useThemeSwitcher.js';
import { useState } from 'react';

function Header() {

    const [mode, setMode] = useThemeSwitcher();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const MobileLink = ({ href, title, className = "", toggle }) => {
        const router = useRouter();
        const handleClick = () => {
            toggle();
            router.push(href);
        }

        return (
            <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
                {title}
                <span
                  className={`
                  h-[1px] inline-block bg-light
                  absolute left-0 -bottom-0.5
                  group-hover:w-full transition-[width] ease duration-300
                  ${router.asPath === href ? "w-full" : "w-0"}
                  dark:bg-dark
                  `}>&nbsp;</span>
            </button>
        )         
    }

    return (
        <header 
        className='w-full px-32 py-8 font-medium flex items-center justify-between
        dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8
        '>

            <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav className="flex-container">
                        <Link href="/" className='mr-4 relative group'>Home
                            <span className={`h-[1px] inline-block bg-indigo dark:bg-light
                            absolute left-0 -bottom-0.5
                            group-hover:w-full transition-[width] ease duration-300
                            ${router.asPath === "/" ? "w-full" : "w-0"}`}>
                            &nbsp;</span>
                        </Link>
                        <Link href="/about" className='mx-4 relative group'>About
                            <span className={`h-[1px] inline-block bg-indigo dark:bg-light
                            absolute left-0 -bottom-0.5
                            group-hover:w-full transition-[width] ease duration-300
                            ${router.asPath === "/about" ? "w-full" : "w-0"}`}>
                            &nbsp;</span>
                        </Link>
                        <Link href="/projects" className='ml-4 relative group'>Projects
                            <span className={`h-[1px] inline-block bg-indigo dark:bg-light
                            absolute left-0 -bottom-0.5
                            group-hover:w-full transition-[width] ease duration-300
                            ${router.asPath === "/projects" ? "w-full" : "w-0"}`}>
                            &nbsp;</span>
                        </Link>
                        <Link href="/contact" className='mx-4 relative group'>Contact
                            <span className={`h-[1px] inline-block bg-indigo dark:bg-light
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
                    <motion.button
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className="w-6 ml-3"
                    onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                    >
                    {mode === 'dark' ? 
                    <BsFillBrightnessHighFill className='text-3xl ml-3' />
                    :
                    <BsFillMoonStarsFill className='text-3xl ml-3'/>
                    }
                    </motion.button>
                </nav>
            </div>

            {
                isOpen ?
                <motion.div 
                initial={{scale:0, opacity:0, x:'-50%', y:'-50%'}}
                animate={{scale:1, opacity:1}}
                className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 
                -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
                '>
                <nav className="flex items-center flex-col justify-center mb-5">
                        <MobileLink href="/" title="Home" className='' toggle={handleClick}/>
                        <MobileLink href="/about" title="About" className='' toggle={handleClick}/>
                        <MobileLink href="/projects" title="Projects" className='' toggle={handleClick}/>
                        <MobileLink href="/contact" title="Contact"  className='' toggle={handleClick}/>
                </nav>
                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a href="https://github.com/illnessink" target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className="w-6 mr-3"
                    >
                        <BsGithub className='text-3xl  bg-light rounded-full dark:bg-dark border border-light dark:border-dark' />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/vanessafoerster/" target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className="w-6 ml-3"
                    >
                        <BsLinkedin className='text-3xl  bg-light rounded-md border border-light dark:bg-dark dark:border-dark' />
                    </motion.a>
                    <motion.button
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className="w-6 ml-3"
                    onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                    >
                    {mode === 'dark' ? 
                    <BsFillBrightnessHighFill className='text-3xl ml-3 bg-dark rounded-full border border-dark' />
                    :
                    <BsFillMoonStarsFill className='text-3xl ml-3 bg-light rounded-full border border-light'/>
                    }
                    </motion.button>
                </nav>
            </motion.div>




                : null
            }

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    );
}

export default Header;

