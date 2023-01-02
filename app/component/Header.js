import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
    return(
        <header >
            <nav className='flex flex-wrap items-center px-3 bg-teal-400'>
            <Link className='inline-flex items-center px-2 mr-4' href='/'>
            <Image
                src="/assets/cookie-stand-admin-app.png"
                width={90}
                height={50}
                alt="Picture of the author"
            />
            <span className='text-xl font-bold tracking-wide text-white uppercase'>Cookie Stand Admin</span>
            </Link>
            </nav>
        </header>
    )
} 