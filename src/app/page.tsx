import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function GuideCard({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/guides/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read guide</Card.Cta>
    </Card>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Art & Wall Decor Guides{' '}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            BestPaintings publishes concise, practical guides on wall art and
            home display—covering materials, sizing, framing, hanging, and care.
            Short, actionable advice to help you decide fast and decorate well.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/guides">Browse Guides</Button>
            <Button href="/about" variant="secondary">
              About Us
            </Button>
          </div>
          <p className="mt-6 text-xs text-zinc-500 dark:text-zinc-500">
            Disclosure: Some links may be affiliate links.{' '}
            <strong>
              As an Amazon Associate, we earn from qualifying purchases.
            </strong>{' '}
            See our{' '}
            <Link href="/disclosure" className="underline underline-offset-2">
              Affiliate Disclosure
            </Link>
            .
          </p>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <GuideCard key={article.slug} article={article} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/guides"
            className="text-sm text-teal-600 hover:underline"
          >
            View all guides →
          </Link>
        </div>
      </Container>
    </>
  )
}
