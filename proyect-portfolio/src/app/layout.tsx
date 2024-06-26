import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../styles/globals.css'

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
        <title>Jonatan Pizarro</title>
        <link rel="shortcut icon" href="https://raw.githubusercontent.com/Jonvtvn/Jonvtvn.github.io/main/logo/Logo-jp-sin-fondo.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>

  )
}
