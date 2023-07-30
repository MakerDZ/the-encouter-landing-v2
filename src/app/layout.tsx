import NavBar from '@/components/general/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/general/Footer'

export const metadata: Metadata = {
  title: 'The Encounter',
  description: '🫣 Make A Paris Anonymously On Discord With Random Burmese People.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* max-w-[91rem] */}
      <body className='w-full h-auto mx-auto font-nunito'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
