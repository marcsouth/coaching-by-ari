import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coaching by Ari',
  description: 'Ari Coaching site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='text-white'>
      <body className={` dark bg-background ${inter.className}`}>{children}</body>
    </html>
  )
}
