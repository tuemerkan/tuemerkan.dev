import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from './ui/navigation-menu'
import { ModeToggle } from './mode-toggle'

export function Navbar() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="flex flex-row">
          <NavigationMenuItem>
            <Link href="/resume" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                tuemerkan.dev
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className="">
        <NavigationMenuList className="flex flex-row">
          <NavigationMenuItem>
            <Link href="/resume" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Resume
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/projects" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Projects
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}
