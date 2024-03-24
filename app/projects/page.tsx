'use client'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card'
import Image from 'next/image'

export default function Projects() {
  return (
    <>
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
              <CardTitle>Respondo</CardTitle>
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
    </>
  )
}
