import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../styles/globals.css'
import { StreamProvider } from '../app/StreamContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jonatan Pizarro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <StreamProvider>
          {children}
        </StreamProvider>
      </body>
    </html>

  )
}
