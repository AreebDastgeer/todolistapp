import './globals.css'
import { Inter } from 'next/font/google'
import { NextAuthProvider } from '@/components/Providers'
import Appbar from '@/components/Appbar'
//import { SessionProvider } from "next-auth/react"
const inter = Inter({ subsets: ['latin'] })

export const metadata = { 
  title: 'My Stack',
  description: 'To Do List',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <NextAuthProvider> 
    <Appbar /> 
      <body className={inter.className}>{children}</body>
      </NextAuthProvider>
    </html>
  )
}
