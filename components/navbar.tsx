'use client'

import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from './ui/navigation-menu'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const pathname = usePathname()

  return (
    <>
      <NavigationMenu orientation="vertical" className="">
        <NavigationMenuList className="flex-col items-start">
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(
                  pathname === '/about' && 'font-bold',
                  navigationMenuTriggerStyle()
                )}
              >
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/experience" legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(
                  pathname === '/experience' && 'font-bold',
                  navigationMenuTriggerStyle()
                )}
              >
                Experience
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/education" legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(
                  pathname === '/education' && 'font-bold',
                  navigationMenuTriggerStyle()
                )}
              >
                Education
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/projects" legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(
                  pathname === '/projects' && 'font-bold',
                  navigationMenuTriggerStyle()
                )}
              >
                Projects
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}
