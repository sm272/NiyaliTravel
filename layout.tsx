import { Inter } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: {
    template: '%s | NiyaliTravel.com',
    default: 'NiyaliTravel.com - Authentic Maldivian Experiences'
  },
  description: 'Connect with local agents for authentic Maldivian travel experiences. Explore resorts, activities, and ferry schedules across all 26 atolls.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}