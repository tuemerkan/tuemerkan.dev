'use client'

import { Navbar } from './navbar'
import Socials from './socials'

export default function Sidebar() {
  return (
    <>
      <div>
        <h1 className="text-4xl tracking-tight text-slate-200 sm:text-5xl font-bold">
          Tümerkan Durmuş
        </h1>
        <h2 className="mt-3 text-lg font-medium  sm:text-xl">
          DevOps Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">I like to fix things</p>

        <Navbar />
      </div>

      <Socials />
    </>
  )
}
