'use client'

import { useTheme } from 'next-themes'
import { Toggle } from './ui/toggle'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useEffect } from 'react'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme('dark')
  }, [setTheme])

  return (
    <Toggle
      onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      className="my-3"
      variant={'outline'}
      size={'sm'}
    >
      {theme === 'dark' || !theme ? (
        <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0  dark:rotate-0 dark:scale-100" />
      ) : (
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      )}
    </Toggle>
  )
}
