import { REACT_LOADABLE_MANIFEST } from 'next/dist/shared/lib/constants';
import Link  from 'next/link';
import React from 'react';
import Logo from './Logo';

function Header() {
    return (
        <header 
        className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav className="flex-container">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/projects">Projects</Link>
            </nav>
            <Logo />
            <nav>
                <Link href="/" target={"_blank"}>G</Link>
                <Link href="/" target={"_blank"}>L</Link>
            </nav>
        </header>
    );
}

export default Header;

