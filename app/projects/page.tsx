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

export default function Projects() {
  return (
    <>
      <div className="group/list pb-1 flex flex-col gap-10 items-center overflow-y-auto scroll no-scrollbar">
        <a href="https://getrespondo.com" target="_blank">
          <Card className="flex">
            <Image
              src="/images/respondo.svg"
              width={50}
              height={50}
              alt="respondo"
              className="pl-5"
            />
            <div>
              <CardHeader>
                <CardTitle className="flex gap-1">
                  Respondo
                  <ArrowTopRightIcon />
                </CardTitle>
                <CardDescription>
                  Generate engaging twitter replies with AI.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Elevate your Twitter game with real-time, AI-generated reply
                  suggestions directly within your Chrome browser.
                </p>
              </CardContent>
            </div>
          </Card>
        </a>

        <Card className="flex">
          <Image
            src="/images/progress.svg"
            width={50}
            height={50}
            alt="progress"
            className="pl-5"
          />
          <div>
            <CardHeader>
              <CardTitle>Project Name: AirVillas </CardTitle>
              <CardDescription>In progress</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Booking platform especially for accommodation with full privacy.
              </p>
            </CardContent>
          </div>
        </Card>
      </div>
    </>
  )
}
