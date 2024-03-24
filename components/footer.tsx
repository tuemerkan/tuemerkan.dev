import { ModeToggle } from './mode-toggle'

export default function Footer() {
  return (
    <footer className="text-sm text-slate-500 pt-16">
      <div className="lg:block hidden">
        <ModeToggle />
      </div>
      <p>
        Built with{' '}
        <a
          href="https://nextjs.org/"
          className="font-medium text-orange-300 dark:text-slate-400 hover:text-orange-400 focus-visible:text-orange-400 dark:hover:text-orange-400 "
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Next.js"
        >
          Next.js,
        </a>
        <a
          href="https://ui.shadcn.com/"
          className="font-medium text-orange-300 dark:text-slate-400 hover:text-orange-400 focus-visible:text-orange-400 dark:hover:text-orange-400 "
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Next.js"
        >
          shadcn/ui
        </a>{' '}
        and{' '}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-orange-300 dark:text-slate-400 hover:text-orange-400 focus-visible:text-orange-400 dark:hover:text-orange-400 "
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Tailwind CSS"
        >
          Tailwind CSS
        </a>
        , deployed with
        <a
          href="https://vercel.com/"
          className="font-medium text-orange-300 dark:text-slate-400 hover:text-orange-400 focus-visible:text-orange-400 dark:hover:text-orange-400 "
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Vercel"
        >
          {' '}
          Vercel
        </a>
        . All text is set in the
        <a
          href="https://rsms.me/inter/"
          className="font-medium text-orange-300 dark:text-slate-400 hover:text-orange-400 dark:hover:text-orange-400 focus-visible:text-orange-400"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Inter"
        >
          {' '}
          Inter
        </a>{' '}
        typeface.
      </p>
    </footer>
  )
}
