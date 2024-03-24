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
      <NavigationMenu className="lg:py-16 py-12 lg:block">
        <NavigationMenuList className="lg:flex-col lg:w-full w-screen gap-3">
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(
                  pathname === '/about' && 'font-bold text-stone-50 ',
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
                  pathname === '/experience' && 'font-bold text-stone-50',
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
                  pathname === '/education' && 'font-bold text-stone-50',
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
                  pathname === '/projects' && 'font-bold text-stone-50',
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
