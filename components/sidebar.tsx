import Link from 'next/link'
import { Navbar } from './navbar'

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

      <div className="mb-32 px-2 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <footer className="">
          <Link href="mailto:tuemerkan.d@icloud.com">
            <span>E-mail</span>
          </Link>
        </footer>
      </div>
    </div>
  )
}
