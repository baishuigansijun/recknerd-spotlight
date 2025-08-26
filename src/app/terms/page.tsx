import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | BestPaintings',
  description: 'Terms and conditions for using this site.',
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 prose prose-zinc dark:prose-invert">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">Terms of Use</h1>
      <p><em>Last updated: August 26, 2025</em></p>

      <h2>Acceptance of Terms</h2>
      <p>
        By accessing or using this website, you agree to be bound by these Terms. If you do not agree,
        please discontinue use.
      </p>

      <h2>Content</h2>
      <p>
        All content is provided for informational purposes only and does not constitute professional
        advice or a guarantee of results. We strive for accuracy but are not liable for any losses or
        damages arising from use of the site.
      </p>

      <h2>Affiliate Links</h2>
      <p>
        This site contains affiliate links. <strong>As an Amazon Associate, we earn from qualifying
        purchases.</strong> See our <a href="/disclosure">Affiliate Disclosure</a> for details.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        Site text, images, and design are protected by applicable intellectual property laws. You may
        not reproduce or distribute content without permission.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these Terms from time to time. Continued use after changes means you accept the
        updated Terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms? Email{' '}
        <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>.
      </p>
    </main>
  )
}
