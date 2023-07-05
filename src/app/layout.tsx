import { Inter } from 'next/font/google'

import { ClerkProvider } from '@clerk/nextjs'

import { cn } from '@/lib/utils'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'mweeter',
  description: 'A Twitter clone built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(inter.variable, 'bg-gray-50 text-gray-800')}>
      <ClerkProvider>
        <body>{children}</body>
      </ClerkProvider>
    </html>
  )
}
