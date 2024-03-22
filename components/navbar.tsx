import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from './ui/navigation-menu'
import { useParams } from 'next/navigation'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

const useHash = () => {
  const params = useParams()
  const [hash, setHash] = useState()

  useEffect(() => {
    const currentHash = window.location.hash.replace('#', '')
    setHash(currentHash)
  }, [params])

  return hash
}

export function Navbar() {
  const anchor = useHash()

  return (
    <>
      <NavigationMenu orientation="vertical" className="">
        <NavigationMenuList className="flex-col items-start">
          <NavigationMenuItem>
            <Link href="#about" legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(
                  anchor === 'about' ? 'font-bold' : '',
                  navigationMenuTriggerStyle()
                )}
              >
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#experience" legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(
                  anchor === 'experience' ? 'font-bold' : '',
                  navigationMenuTriggerStyle()
                )}
              >
                Experience
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#projects" legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(
                  anchor === 'projects' ? 'font-bold' : '',
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
