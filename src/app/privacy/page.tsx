import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | BestPaintings',
  description: 'How we collect, use, and protect data.',
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 prose prose-zinc dark:prose-invert">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">Privacy Policy</h1>
      <p><em>Last updated: August 26, 2025</em></p>

      <h2>Overview</h2>
      <p>
        We collect the minimum data necessary to operate and improve this website. We do not sell
        personal data.
      </p>

      <h2>Data We May Collect</h2>
      <ul>
        <li>Aggregated analytics (e.g., page views, referral categories, session duration).</li>
        <li>
          Information you voluntarily provide via email when contacting us at{' '}
          <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>.
        </li>
      </ul>

      <h2>Cookies & Analytics</h2>
      <p>
        If we use analytics tools, they are for aggregated reporting only. You can disable cookies in
        your browser settings (site functionality may be limited).
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our content may link to third-party sites (including online retailers). Their privacy policies
        apply when you visit them.
      </p>

      <h2>Data Retention & Security</h2>
      <p>
        We retain data only as long as needed for the purposes described above and take reasonable
        measures to protect it.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request correction or deletion of personal information you have provided to us
        (e.g., email correspondence). Contact{' '}
        <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>.
      </p>
    </main>
  )
}
