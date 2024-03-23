import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import Sidebar from '@/components/sidebar'
import clsx from 'clsx'
import CursorEffect from '@/lib/cursor-effect'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tümerkan Durmuş',
  description: 'Personal Website'
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
          'leading-relaxed text-slate-400 bg-[#080917] antialiased selection:bg-orange-400 selection:text-teal-900'
        )}
      >
        <CursorEffect className={''}>
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
              <div className="lg:flex lg:justify-between lg:gap-4">
                <header className="lg:sticky lg:top-0 lg:flex lg:max-h-[1vh] lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                  <Sidebar />
                </header>
                <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
                  {children}
                </main>
              </div>
            </div>
          </ThemeProvider>
        </CursorEffect>
      </body>
    </html>
  )
}
