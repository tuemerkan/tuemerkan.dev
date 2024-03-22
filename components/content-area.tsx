import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from './ui/card'
import Image from 'next/image'

export default function ContentArea() {
  return (
    <div className="flex flex-col gap-10 items-center overflow-y-auto no-scrollbar">
      {/* <Avatar className="m-3">
        <AvatarImage src="/images/pb.jpg" alt="@tuemerkan" />
        <AvatarFallback>tuemerkan</AvatarFallback>
      </Avatar> */}

      <Card className="w-full grid grid-cols-7">
        <div className="col-span-2">
          <CardHeader className="text-sm">
            <span>2022 — PRESENT</span>
            <Image
              className="pt-3"
              src="/images/ohm.png"
              width={50}
              height={50}
              alt="ohmlogo"
            />
          </CardHeader>
        </div>
        <div className="col-span-5">
          <CardHeader>
            <CardTitle>M. Sc. Computer Science</CardTitle>
            <CardDescription>Technische Hochschule Nürnberg</CardDescription>
          </CardHeader>
        </div>
      </Card>

      <Card className="w-full grid grid-cols-7">
        <div className="col-span-2">
          <CardHeader className="text-sm whitespace-nowrap">
            <span>2017 — 2021</span>
            <Image
              className="pt-3"
              src="/images/ohm.png"
              width={50}
              height={50}
              alt="ohmlogo"
            />
          </CardHeader>
        </div>
        <div className="col-span-5">
          <CardHeader>
            <CardTitle>B. Eng. Media Engineering</CardTitle>
            <CardDescription>Technische Hochschule Nürnberg</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Got introcued to software engineering and learned a broad spectrum
              of awesome technologies including VR, AR and gesture controls.
            </p>
          </CardContent>
        </div>
      </Card>

      <Card className="w-full grid grid-cols-7">
        <div className="col-span-2">
          <CardHeader className="text-sm">2016</CardHeader>
        </div>
        <div className="col-span-5">
          <CardHeader>
            <CardTitle>Abitur</CardTitle>
            <CardDescription className="whitespace-nowrap">
              Bertolt-Brecht Gymnasium Nürnberg
            </CardDescription>
          </CardHeader>
        </div>
      </Card>
    </div>
  )
}
