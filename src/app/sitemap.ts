import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/articles'


export default async function sitemap(): Promise<({ url: string; lastModified: Date; changeFrequency: string; priority: number })[]> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'
  const now = new Date()

  // static pages
  const staticPages = ['', 'about', 'contact', 'disclosure', 'privacy', 'terms', 'guides']
    .map((slug, idx) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: Number((slug === '' ? 1 : 0.6 - idx * 0.05).toFixed(2)), // rounded
    }))

  // dynamic articles (your guides)
  const articles = await getAllArticles()
  const articlePages = articles.map((a, i) => ({
    url: `${baseUrl}/guides/${a.slug}`,
    lastModified: a.date ? new Date(a.date) : now,
    changeFrequency: 'monthly',
    priority: Number((0.55 - i * 0.01).toFixed(2)),
  }))

  return [...staticPages, ...articlePages]
}
