import Link from 'next/link'
import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({
                   href,
                   children,
                 }: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/guides">Guides</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/disclosure">Disclosure</NavLink>
                <NavLink href="/privacy">Privacy</NavLink>
                <NavLink href="/terms">Terms</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </div>

              <div className="text-center md:text-right">
                {/* 简短披露（可选但推荐） */}
                <p className="text-xs text-zinc-400 dark:text-zinc-500">
                  Some links may be affiliate links. <strong>As an Amazon Associate, we earn from qualifying purchases.</strong>
                </p>
                <p className="mt-1 text-sm text-zinc-400 dark:text-zinc-500">
                  &copy; {year} BestPaintings. All rights reserved.
                </p>
              </div>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
