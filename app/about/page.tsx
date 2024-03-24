'use client'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function About() {
  return (
    <div className="flex flex-col items-center  gap-3">
      <Avatar className="lg:my-9">
        <AvatarImage src="/images/pb.jpg" alt="@tuemerkan" />
        <AvatarFallback delayMs={600}>tuemerkan</AvatarFallback>
      </Avatar>

      <p>
        I&apos;m an engineer who places a high value on good communication and
        has extensive experience in developing user-friendly digital products. I
        take great joy in tackling complex tasks, employing the latest
        technologies, and being part of a dedicated team.
      </p>
    </div>
  )
}
