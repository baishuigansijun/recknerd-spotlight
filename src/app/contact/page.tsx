import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | BestPaintings',
  description: 'How to get in touch with us.',
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 prose prose-zinc dark:prose-invert">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">Contact</h1>
      <p>
        We welcome pitches, corrections, and collaboration inquiries. Reach us at{' '}
        <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>.
      </p>
      <h2>Response Time</h2>
      <p>We typically reply within 2–3 business days.</p>
    </main>
  )
}
