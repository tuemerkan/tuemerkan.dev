'use client'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function Experience() {
  const { theme } = useTheme()

  return (
    <div className="group/list flex flex-col gap-10 items-center overflow-y-auto scroll no-scrollbar">
      <Card className="w-full grid grid-cols-7 ">
        <div className="col-span-2">
          <CardHeader className="text-sm text-slate-500">
            <span>APR 23 — PRESENT</span>
            <Image
              className="pt-3"
              src="/images/db.svg"
              width={50}
              height={50}
              alt="ohmlogo"
            />
          </CardHeader>
        </div>
        <div className="col-span-5">
          <CardHeader>
            <CardTitle>DevOps Engineer</CardTitle>
            <CardDescription>DB Systel</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc">
              <li>
                Development of a web application for traffic management within a
                cross-functional, agile team
              </li>
              <li>Contribution to a cross-team component library</li>
              <li>Domain-Driven Design, Test-Driven Development</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Badge>React</Badge>
            <Badge>TypeScript</Badge>
            <Badge>SpringBoot</Badge>
            <Badge>Kotlin</Badge>
            <Badge>GitLab CI/CD</Badge>
            <Badge>OpenShift</Badge>
            <Badge>Kubernetes</Badge>
            <Badge>Docker</Badge>
            <Badge>Prometheus</Badge>
            <Badge>Grafana</Badge>
            <Badge>AWS</Badge>
            <Badge>Terraform</Badge>
          </CardFooter>
        </div>
      </Card>

      <Card className="w-full grid grid-cols-7">
        <div className="col-span-2">
          <CardHeader className="text-sm space-y-0 text-slate-500 whitespace-nowrap">
            <span>OCT 22</span>
            <span> — </span>
            <span>MAR 23</span>
            <Image
              className="pt-3"
              src={`/images/rexroth${theme == 'light' ? '_old' : ''}.svg`}
              width={75}
              height={75}
              alt="rexroth"
            />
          </CardHeader>
        </div>
        <div className="col-span-5">
          <CardHeader>
            <CardTitle>Working student</CardTitle>
            <CardDescription>Bosch Rexroth</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Developed a UI component library for control applications.</p>
          </CardContent>
          <CardFooter>
            <Badge>Angular</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Azure DevOps</Badge>
          </CardFooter>
        </div>
      </Card>

      <Card className="w-full grid grid-cols-7">
        <div className="col-span-2">
          <CardHeader className="text-sm space-y-0 text-slate-500">
            <span>OCT 21</span>
            <span> — </span>
            <span>SEP 21</span>
            <Image
              className="pt-3"
              src={`/images/rexroth${theme == 'light' ? '_old' : ''}.svg`}
              width={75}
              height={75}
              alt="rexroth"
            />
          </CardHeader>
        </div>
        <div className="col-span-5">
          <CardHeader>
            <CardTitle>PreMaster</CardTitle>
            <CardDescription className="whitespace-nowrap">
              Bosch Rexroth
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Developed a web and mobile application for logistics processes.
            </p>
          </CardContent>
          <CardFooter>
            <Badge>React</Badge>
            <Badge>JavaScript</Badge>
            <Badge>C#</Badge>
            <Badge>.NET</Badge>
          </CardFooter>
        </div>
      </Card>

      <Card className="w-full grid grid-cols-7">
        <div className="col-span-2">
          <CardHeader className="text-sm text-slate-500 space-y-0">
            <span>FEB 21</span>
            <span> — </span>
            <span>JUL 21</span>
            <Image
              className="pt-3"
              src="/images/siemens.svg"
              width={75}
              height={75}
              alt="siemens"
            />
          </CardHeader>
        </div>
        <div className="col-span-5">
          <CardHeader>
            <CardTitle>Bachelor Thesis</CardTitle>
            <CardDescription className="whitespace-nowrap">
              Siemens Energy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Title: “Virtual Prototypes based on 3D Scans”</p>
          </CardContent>
        </div>
      </Card>

      <Card className="w-full grid grid-cols-7">
        <div className="col-span-2">
          <CardHeader className="text-sm text-slate-500 whitespace-nowrap space-y-0">
            <span>MAR 20</span>
            <span> — </span>
            <span>JAN 21</span>
            <Image
              className="pt-3"
              src="/images/siemens.svg"
              width={75}
              height={75}
              alt="siemens"
            />
          </CardHeader>
        </div>
        <div className="col-span-5">
          <CardHeader>
            <CardTitle>Working student</CardTitle>
            <CardDescription className="whitespace-nowrap">
              Siemens Energy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Developed a mobile app for live visualization of industrial data
              in augmented reality.
            </p>
          </CardContent>
          <CardFooter>
            <Badge>Unity</Badge>
            <Badge>C#</Badge>
            <Badge>Python</Badge>
          </CardFooter>
        </div>
      </Card>

      <Card className="w-full grid grid-cols-7">
        <div className="col-span-2">
          <CardHeader className="text-sm text-slate-500 space-y-0">
            <span>MAR 19</span>
            <span> — </span>
            <span>AUG 19</span>
            <Image
              className="pt-3"
              src={`/images/rexroth${theme == 'light' ? '_old' : ''}.svg`}
              width={75}
              height={75}
              alt="rexroth"
            />
          </CardHeader>
        </div>
        <div className="col-span-5">
          <CardHeader>
            <CardTitle>Intern</CardTitle>
            <CardDescription className="whitespace-nowrap">
              Bosch Rexroth
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Development of future-oriented Industry 4.0 projects (augmented
              reality, image recognition, machine learning)
            </p>
          </CardContent>
          <CardFooter>
            <Badge>Unity</Badge>
            <Badge>HoloLens</Badge>
            <Badge>C#</Badge>
            <Badge>TensorFlow</Badge>
            <Badge>Python</Badge>
          </CardFooter>
        </div>
      </Card>
    </div>
  )
}
