import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'

export default function ContentArea() {
  return (
    <div className="flex flex-col items-center">
      <Avatar className="m-3">
        <AvatarImage src="/images/pb.jpg" alt="@tuemerkan" />
        <AvatarFallback>tuemerkan</AvatarFallback>
      </Avatar>
    </div>
  )
}
