import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Asiri Sandakelum | Mechanical Engineering',
  description: 'Final Year Mechanical Engineering Undergraduate at University of Moratuwa. Specializing in Robotics, Biomechanics, Mechatronics, Embedded Systems, and Product Design.',
  keywords: ['mechanical engineering', 'robotics', 'biomechanics', 'mechatronics', 'embedded systems', 'Sri Lanka', 'University of Moratuwa'],
  openGraph: {
    title: 'Asiri Sandakelum | Mechanical Engineering Portfolio',
    description: 'Engineering portfolio showcasing robotics, biomechanics, and mechatronics projects.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#080808] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
