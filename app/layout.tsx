import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import Sidebar from '@/components/sidebar'
import clsx from 'clsx'
import CursorEffect from '@/lib/cursor-effect'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: { icon: '/favicon.ico', apple: '/favicon.ico' },
  title: 'Tümerkan Durmuş',
  description: 'I like to build products, find solutions and fix things.',
  keywords: ['Tümerkan, Durmus, Software, Engineer'],
  twitter: {
    card: 'summary_large_image',
    title: 'Tümerkan Durmuş',
    description:
      'Tümerkan Durmus is a software engineer who likes to build software solutions that are precisely tailored to meet user needs.',
    site: '@tuemerkan',
    creator: '@tuemerkan',
    images: ['https://tuemerkan.com/images/pb.jpg']
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={clsx(
          inter.className,
          'leading-relaxed dark:text-slate-400 bg-[#fafafa] dark:bg-[#080917] antialiased selection:bg-orange-400 dark:selection:text-teal-900'
        )}
      >
        <CursorEffect className={''}>
          <Analytics />
          <SpeedInsights />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
              <div className="lg:flex lg:justify-between lg:gap-4">
                <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:py-24 lg:justify-between">
                  <Sidebar />
                </header>
                <main id="content" className="lg:pt-24 lg:w-1/2 lg:py-24">
                  {children}
                </main>
                <div className="lg:hidden">
                  <Footer />
                </div>
              </div>
            </div>
          </ThemeProvider>
        </CursorEffect>
      </body>
    </html>
  )
}
