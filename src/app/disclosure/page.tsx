import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | BestPaintings',
  description: 'Our affiliate policy and disclosures.',
}

export default function DisclosurePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 prose prose-zinc dark:prose-invert">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">Affiliate Disclosure</h1>
      <p>
        Some links on this site are affiliate links. <strong>As an Amazon Associate, we earn from
        qualifying purchases.</strong> This does not affect the price you pay.
      </p>
      <p>
        We only recommend products and resources we believe are genuinely useful. Where possible,
        affiliate links are clearly labeled or disclosed on-page.
      </p>
      <p>
        If you have any questions about this disclosure, please contact{' '}
        <a href="mailto:hello@mytrueartguide.com">hello@mytrueartguide.com</a>.
      </p>
    </main>
  )
}
