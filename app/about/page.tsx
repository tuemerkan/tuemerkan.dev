'use client'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useRouter } from 'next/navigation'

export default function About() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center leading-relaxed gap-3">
      <Avatar className="lg:my-9">
        <AvatarImage src="/images/pb.jpg" alt="@tuemerkan" />
        <AvatarFallback delayMs={600}>tuemerkan</AvatarFallback>
      </Avatar>

      <p>
        As a child, I spent most of the time on our PC, exploring Windows 98 to
        its core or googling everything that came to mind. For some reason, I
        typed a whole lexicon on Notepad. Fast-forward to today, and I&apos;ve
        had the privilege of learning to build software by studying
        <span
          onClick={() => router.push('/education')}
          className="text-orange-400 hover:text-black dark:text-slate-200 cursor-pointer font-semibold dark:hover:text-orange-400"
        >
          {' '}
          computer science{' '}
        </span>
        and gaining hands-on experience at various{' '}
        <span
          onClick={() => router.push('/education')}
          className="text-orange-400 hover:text-black dark:text-slate-200 cursor-pointer font-semibold dark:hover:text-orange-400"
        >
          {' '}
          companies
        </span>
        .
      </p>
      <p>
        My main focus these days is building accessible user interfaces for our
        customers at{' '}
        <a
          href="https://www.dbsystel.de/dbsystel"
          target="_blank"
          className="text-orange-400 hover:text-black dark:text-slate-200 font-semibold dark:hover:text-orange-400"
        >
          {' '}
          Deutsche Bahn
        </a>
        . I derive great satisfaction from diving deep into specific domains,
        grasping their unique challenges, and then crafting software solutions
        that are precisely tailored to meet those needs. In my free time,
        I&apos;ve also published an{' '}
        <a
          href="https://www.getrespondo.com/"
          target="_blank"
          className="text-orange-400 hover:text-black dark:text-slate-200 font-semibold dark:hover:text-orange-400"
        >
          {' '}
          AI tweet generator{' '}
        </a>{' '}
        and am currently working on a website for{' '}
        <span
          onClick={() => router.push('/projects')}
          className="text-orange-400 hover:text-black dark:text-slate-200 cursor-pointer font-semibold dark:hover:text-orange-400"
        >
          {' '}
          booking vacation stays
        </span>
        .
      </p>
      <p className="w-full">
        When I&apos;m not at the computer, I&apos;m usually in the gym, mosque
        or spending time with my
        <a
          href="https://www.behance.net/larintalabdf05"
          target="_blank"
          className="text-orange-400 hover:text-black dark:text-slate-200 font-semibold dark:hover:text-orange-400"
        >
          {' '}
          wife
        </a>{' '}
        and friends.
      </p>
    </div>
  )
}
