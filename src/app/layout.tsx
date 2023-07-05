import { Inter } from 'next/font/google'

import { UserProvider } from '@auth0/nextjs-auth0/client'

import { cn } from '@/lib/utils'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Mweeter',
  description: 'A Twitter clone built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(inter.variable, 'bg-gray-50 text-gray-800')}>
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  )
}
