'use client'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <Avatar className="">
        <AvatarImage src="/images/pb.jpg" alt="@tuemerkan" />
        <AvatarFallback>tuemerkan</AvatarFallback>
      </Avatar>
    </div>
  )
}
