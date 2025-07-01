import './globals.css'
import Link from 'next/link'
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'Reuel Blogs',
  description: 'Read blogs, poems, and books by Reuel.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-800">

        <nav className="bg-transparent p-5 flex justify-end gap-10 pr-20">
          {[
            { href: "/", label: "Home" },
            { href: "/blog", label: "Blog" },
            { href: "/poem", label: "Poem" },
            { href: "/book", label: "Book" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative inline-block"
            >
              {/* Shadow/Base */}
              <div className="absolute inset-0 bg-black dark:bg-white rounded-[0.75em] translate-y-1"></div>

              {/* Button Top */}
              <span className="relative z-10 block border-2 border-black dark:border-white bg-[#e8e8e8] dark:bg-[#1d1d1d] text-black dark:text-white rounded-[0.75em] px-4 py-1.5 font-semibold text-sm transition-transform duration-100 ease-in group hover:-translate-y-1 active:translate-y-0">
                {label}
              </span>
            </Link>
          ))}
        </nav>
        
        <main className="px-4">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
