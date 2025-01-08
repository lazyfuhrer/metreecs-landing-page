import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Petrecs - AI-Powered Demand Forecasting',
  description: 'Optimize your retail inventory with Petrecs AI-powered demand forecasting solution.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#bae6fd] bg-fixed`}>
        {children}
      </body>
    </html>
  )
}