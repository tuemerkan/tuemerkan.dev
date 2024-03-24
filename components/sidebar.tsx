'use client'

import { ExternalLinkIcon } from '@radix-ui/react-icons'
import Footer from './footer'
import { Navbar } from './navbar'
import Socials from './socials'
import { Button } from './ui/button'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

export default function Sidebar() {
  return (
    <>
      <div>
        <div className="lg:hidden pt-3 pr-3 absolute top-0 right-0">
          <ModeToggle />
        </div>
        <h1 className="text-4xl tracking-tight dark:text-slate-200 sm:text-5xl font-bold">
          Tümerkan Durmuş
        </h1>
        <h2 className="mt-3 text-lg  dark:md:text-slate-400 dark:text-slate-200 font-medium sm:text-xl">
          Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">I like to fix things</p>

        <div className="lg:hidden my-4">
          <Link href="/CV_EN.pdf" target="_blank">
            <Button variant={'outline'} className="mt-5 gap-0.5">
              View Full Resume <ExternalLinkIcon />
            </Button>
          </Link>
          <Socials />
        </div>

        <div className="">
          <Navbar />
        </div>

        <div className="lg:block hidden">
          <Link href="/CV_EN.pdf" target="_blank">
            <Button variant={'outline'} className=" gap-0.5">
              View Full Resume <ExternalLinkIcon />
            </Button>
          </Link>
          <Socials />
        </div>
      </div>

      <div className="lg:block hidden">
        <Footer />
      </div>
    </>
  )
}
