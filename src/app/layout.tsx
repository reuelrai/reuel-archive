import './globals.css'
import { GeistSans } from 'geist/font/sans';


import { Analytics } from "@vercel/analytics/next"
import Navbar from './components/Navbar'
import Footer from './components/Footer';

export const metadata = {
  title: 'Reuel Blogs',
  description: 'Read blogs and poems by Reuel.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen bg-white text-gray-800 dark:bg-[#1d1d1d] dark:text-white">
        <Navbar />
        <main className="">{children}
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  )
}
