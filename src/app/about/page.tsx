import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import portraitImage from '@/images/portrait.jpg'

export const metadata: Metadata = {
  title: 'About | BestPaintings',
  description: 'Who we are and what we publish.',
}

export default function AboutPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16">
        <div>
          <div className="max-w-xs px-2.5 lg:max-w-none">
            {/*<Image*/}
            {/*  src={portraitImage}*/}
            {/*  alt="BestPaintings"*/}
            {/*  sizes="(min-width: 1024px) 32rem, 20rem"*/}
            {/*  className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"*/}
            {/*  priority*/}
            {/*/>*/}
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            About BestPaintings
          </h1>
          <div className="mt-6 space-y-6 text-base leading-7 text-zinc-700 dark:text-zinc-400">
            <p>
              BestPaintings publishes concise, practical guides on wall art and home display—covering
              acrylic vs. oil, canvas and paper options, framing, hanging, sizing, and care.
            </p>
            <p>
              Our content is structured and reader-friendly: comparisons, checklists, FAQs, and buying
              advice you can act on quickly.
            </p>
            <p>
              We use affiliate links where appropriate. <strong>As an Amazon Associate, we earn from
              qualifying purchases.</strong> See our{' '}
              <Link href="/disclosure" className="text-teal-600 hover:underline">
                Affiliate Disclosure
              </Link>.
            </p>
            <p>
              Questions or ideas? Email us at{' '}
              <a href="mailto:hello@yourdomain.com" className="text-teal-600 hover:underline">
                hello@yourdomain.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
