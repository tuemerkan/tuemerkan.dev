'use client'

import Footer from './footer'
import { ModeToggle } from './mode-toggle'
import { Navbar } from './navbar'
import Socials from './socials'

export default function Sidebar() {
  return (
    <>
      <div>
        <h1 className="text-4xl tracking-tight dark:text-slate-200 sm:text-5xl font-bold">
          Tümerkan Durmuş
        </h1>
        <h2 className="mt-3 text-lg  dark:md:text-slate-400 dark:text-slate-200 font-medium sm:text-xl">
          Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">I like to fix things</p>

        <div className="lg:hidden my-4">
          <Socials />
          <div className="lg:hidden pt-3">
            <ModeToggle />
          </div>
        </div>

        <div className="">
          <Navbar />
        </div>

        <div className="lg:block hidden">
          <Socials />
        </div>
      </div>

      <div className="lg:block hidden">
        <Footer />
      </div>
    </>
  )
}
