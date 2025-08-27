import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  output: 'export', // ✅ 关键：静态导出
  trailingSlash: true,
  images: {
    unoptimized: true, // ✅ 需要用静态导出时必须加
  },
  outputFileTracingIncludes: {
    '/guides/*': ['./src/app/guides/**/*.mdx'],
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
