import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SidebarContact from './sidebarcontact'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vempati Sai Vishal Portfolio',
  description: "This is Vempati Sai Vishal portfolio. Computer Science Engineering and Machine Learning student pursuing B.Tech (2021-2025). Passionate about technology and innovation." ,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <SidebarContact/> */}
      
      <body className={inter.className} >{children}</body>
    </html>
  )
}
