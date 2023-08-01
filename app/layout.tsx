import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ℤ App',
  description: 'Like X but cooler',
  icons: {
    icon: '/Z.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="zDark">
      <body className={inter.className}>
        <Navbar />
        <div className='min-h-screen overflow-x-hidden'>
          {children}
        </div>
      </body>
    </html>
  )
}
