import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';


export default function Header() {
    const {isDarkTheme,toggleThemeHandler} = useContext(ThemeContext);
    console.log(ThemeContext)

    return(
        <header  >
            <nav className='flex flex-wrap items-center px-3 bg-teal-400  dark:bg-stone-500'>
            <Link className='inline-flex items-center px-2 mr-4' href='/'>
            <Image
                src="/assets/cookie-stand-admin-app.png"
                width={90}
                height={50}
                alt="Picture of the author"
            />
            <span className='text-xl font-bold tracking-wide text-white uppercase'>Cookie Stand Admin</span>
            </Link>
            <button onClick={toggleThemeHandler} type="submit" className='bg-stone-300 text-base bg-contain bg-origin-content
     text-teal-900 rounded-md hover:bg-orange-200 px-2 py-1 font-serif font-bold absolute top-3 
     left-2/4 ml-80 '>Theme</button> 
            </nav>
        </header>
    )
} 