'use client'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

export default function Projects() {
  return (
    <>
      <div className="group/list pb-1 flex flex-col gap-10 items-center overflow-y-auto scroll no-scrollbar">
        <a href="https://villasprivate.com" target="_blank">
          <Card>
            <div className="grid grid-cols-[150px_1fr] items-center">
              <div className="flex items-center justify-center p-6">
                <Image
                  src="/images/villasprivate.svg"
                  width={80}
                  height={80}
                  alt="villas"
                />
              </div>
              <div className="min-w-0">
                <CardHeader>
                  <CardTitle className="flex gap-1">
                    VillasPrivate.com
                    <ArrowTopRightIcon />
                  </CardTitle>
                  <CardDescription>In progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Booking platform specifically for accommodation with full
                    privacy.
                  </p>
                </CardContent>
                <CardFooter>
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Prisma ORM</Badge>
                  <Badge>Tailwind CSS</Badge>
                </CardFooter>
              </div>
            </div>
          </Card>
        </a>
        <a href="https://getrespondo.com" target="_blank">
          <Card>
            <div className="grid grid-cols-[150px_1fr] items-center">
              <div className="flex items-center justify-center p-6">
                <Image
                  src="/images/respondo.svg"
                  width={50}
                  height={50}
                  alt="respondo"
                />
              </div>
              <div className="min-w-0">
                <CardHeader>
                  <CardTitle className="flex gap-1">
                    Respondo
                    <ArrowTopRightIcon />
                  </CardTitle>
                  <CardDescription>
                    Generate engaging X/Twitter replies with AI.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Elevate your X/Twitter game with real-time, AI-generated
                    reply suggestions directly within your Chrome browser.
                  </p>
                </CardContent>
              </div>
            </div>
          </Card>
        </a>
      </div>
    </>
  )
}
