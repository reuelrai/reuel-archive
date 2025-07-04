'use client'

import { useState } from 'react'
import Link from 'next/link'

const navItems = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blogs" },
    { href: "/poem", label: "Poems" },
    { href: "/book", label: "Light Novel" },
    { href: "/quotes", label: "Quotes" },
    { href: "/qna", label: "Q&A" },
]

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#1d1d1d]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 p-4 shadow-lg dark:shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
            <div className="flex items-center justify-between max-w-7xl mx-auto">

                {/* Logo */}
                <div className="text-lg font-bold">REUEL</div>

                {/* Hamburger for Mobile */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg className="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6 pr-6">
                    {navItems.map(({ href, label }) => (
                        <Link key={href} href={href} className="relative inline-block">
                            <div className="absolute inset-0 bg-black dark:bg-white rounded-[0.75em] translate-y-1"></div>
                            <span className="relative z-10 block border-2 border-black dark:border-white bg-[#e8e8e8] dark:bg-[#1d1d1d] text-black dark:text-white rounded-[0.75em] px-4 py-1.5 font-semibold tracking-wider text-sm transition-transform duration-100 ease-in hover:-translate-y-1 active:translate-y-0">
                                {label}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Nav Items */}
            {menuOpen && (
                <div className="flex flex-col items-center md:hidden mt-4 gap-2 text-center">
                    {navItems.map(({ href, label }) => (
                        <Link key={href} href={href} className="relative inline-block w-full max-w-xs">

                            <div className="absolute inset-0 bg-black dark:bg-white rounded-[0.75em] translate-y-1"></div>
                            <span className="relative z-10 block border-2 border-black dark:border-white bg-[#e8e8e8] dark:bg-[#1d1d1d] text-black dark:text-white rounded-[0.75em] px-4 py-1.5 font-semibold tracking-wider text-sm transition-transform duration-100 ease-in hover:-translate-y-1 active:scale-95">
                                {label}
                            </span>
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    )
}
