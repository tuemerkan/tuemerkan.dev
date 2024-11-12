'use client'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

export default function Education() {
  return (
    <div className="group/list flex flex-col gap-10 items-center overflow-y-auto no-scrollbar pb-1">
      <a
        href="https://www.th-nuernberg.de/studiengang/informatik-msc/"
        target="_blank"
        className="w-full"
      >
        <Card className="w-full grid grid-cols-7">
          <div className="col-span-2">
            <CardHeader className="text-xs text-slate-500">
              <span>2022 — 2024</span>
              <Image
                className="pt-7"
                src="/images/ohm.png"
                width={50}
                height={50}
                alt="ohmlogo"
              />
            </CardHeader>
          </div>
          <div className="col-span-5">
            <CardHeader>
              <CardTitle className="flex gap-1">
                M. Sc. Computer Science <ArrowTopRightIcon />
              </CardTitle>
              <CardDescription>Technische Hochschule Nürnberg</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Favorite courses:</p>
              <ul className="list-disc pl-3">
                <li>Large Language Models</li>
                <li>Conversational AI</li>
                <li>Advanced Human-Computer-Interaction</li>
                <li>Pervasive Computing</li>
              </ul>
            </CardContent>
          </div>
        </Card>
      </a>

      <a
        href="https://www.th-nuernberg.de/studiengang/media-engineering-beng/"
        target="_blank"
      >
        <Card className="w-full grid grid-cols-7">
          <div className="col-span-2">
            <CardHeader className="text-xs text-slate-500 whitespace-nowrap">
              <span>2017 — 2021</span>
              <Image
                className="pt-7"
                src="/images/ohm.png"
                width={50}
                height={50}
                alt="ohmlogo"
              />
            </CardHeader>
          </div>
          <div className="col-span-5">
            <CardHeader>
              <CardTitle className="flex gap-1">
                B. Eng. Media Engineering <ArrowTopRightIcon />
              </CardTitle>
              <CardDescription>Technische Hochschule Nürnberg</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Got introduced to software engineering and learned a broad
                spectrum of awesome technologies including VR, AR and gesture
                controls.
              </p>
            </CardContent>
          </div>
        </Card>
      </a>

      <Card className="w-full grid grid-cols-7">
        <div className="col-span-2">
          <CardHeader className="text-xs text-slate-500">2016</CardHeader>
        </div>
        <div className="col-span-5">
          <CardHeader>
            <CardTitle>Abitur</CardTitle>
            <CardDescription className="">
              Bertolt-Brecht-Gymnasium Nürnberg
            </CardDescription>
          </CardHeader>
        </div>
      </Card>
    </div>
  )
}
