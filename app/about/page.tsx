'use client'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function About() {
  return (
    <div className="flex flex-col items-center leading-relaxed gap-3">
      <Avatar className="lg:my-9">
        <AvatarImage src="/images/pb.jpg" alt="@tuemerkan" />
        <AvatarFallback delayMs={600}>tuemerkan</AvatarFallback>
      </Avatar>

      <p>
        As a child, I spent most of the time on our PC, exploring Windows 98 to
        its core or googling everything which comes to mind. For some reason, I
        typed a whole lexicon on Notepad. Fast-forward to today, and I&apos;ve
        had the privilege of learning to build software by studying
        <a
          href="/education"
          className="text-slate-200 font-semibold hover:text-orange-400"
        >
          {' '}
          computer science{' '}
        </a>
        and hands-on at various{' '}
        <a
          href="/experience"
          className="text-slate-200 font-semibold hover:text-orange-400"
        >
          {' '}
          companies{' '}
        </a>
        .
      </p>
      <p>
        My main focus these days is building accessible user interfaces for our
        customers at{' '}
        <a
          href="https://www.dbsystel.de/dbsystel"
          target="_blank"
          className="text-slate-200 font-semibold hover:text-orange-400"
        >
          {' '}
          Deutsche Bahn{' '}
        </a>
        . I most enjoy building software in the sweet spot where design and
        engineering meet — things that look good but are also built well under
        the hood. In my free time, I've also published an{' '}
        <a
          href="https://www.getrespondo.com/"
          target="_blank"
          className="text-slate-200 font-semibold hover:text-orange-400"
        >
          {' '}
          AI tweet generator{' '}
        </a>{' '}
        and am currently working on a website for{' '}
        <a
          href="/projects"
          className="text-slate-200 font-semibold hover:text-orange-400"
        >
          {' '}
          booking vacation stays{' '}
        </a>
        .
      </p>
      <p>
        When I&apos;m not at the computer, I&apos;m usually in the gym, hanging
        out with my friends, or in the mosque.
      </p>
    </div>
  )
}
