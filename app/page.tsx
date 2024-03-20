'use client'

import { Navbar } from '@/components/navbar'

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="font-mono flex w-full justify-between">
        <Navbar />
      </div>

      <div className=""></div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  )
}
