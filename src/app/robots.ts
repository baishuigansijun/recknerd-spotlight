import type { MetadataRoute } from 'next'


export const dynamic = 'force-static'       // ✅ 必须：静态导出
export const revalidate = false             // ✅ 可选：不再增量再生

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
