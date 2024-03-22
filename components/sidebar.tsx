'use client'

import { Navbar } from './navbar'
import Socials from './socials'

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full">
      <section className="px-2">
        <h2 className="text-5xl whitespace-nowrap font-bold">
          Tümerkan Durmuş
        </h2>
        <p className="text-2xl py-3">DevOps Engineer</p>
        <p className="py-3">I like to fix things</p>
      </section>

      <Navbar />
      <Socials />
    </div>
  )
}
