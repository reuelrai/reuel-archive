import './globals.css'
import Link from 'next/link'

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
        <nav className="bg-transparent p-5 flex justify-end gap-15 pr-20">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/poem">Poem</Link>
          <Link href="/book">Book</Link>
        </nav>
        <main className="px-4">{children}</main>
      </body>
    </html>
  )
}
