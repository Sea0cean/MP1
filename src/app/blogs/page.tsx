import { type Metadata } from 'next'
import Link from 'next/link'

import { Card } from '@/components/shared/Card'
import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { type BlogType, getLatestBlogsByCategory } from '@/lib/blogs'
import { formatDate } from '@/lib/formatDate'
import { blogHeadLine, blogIntro } from '@/config/infoConfig'

export const runtime = process.env.NEXT_RUNTIME === 'edge' ? 'edge' : 'nodejs'

function Blog({ blog }: { blog: BlogType }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        {blog.category && (
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {blog.category}
          </span>
        )}
        <Card.Title href={`/blogs/${blog.slug}`}>
          {blog.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={blog.date}
          className="md:hidden"
          decorate
        >
          {formatDate(blog.date)}
        </Card.Eyebrow>
        <Card.Description>{blog.description}</Card.Description>
        <Card.Cta>Read blog</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={blog.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(blog.date)}
      </Card.Eyebrow>
    </article>
  )
}

function CategorySection({ category, blogs }: { category: string, blogs: BlogType[] }) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-6">
        <Link href={`/blogs/category/${category.toLowerCase()}`}>
          {category}
        </Link>
      </h2>
      <div className="space-y-16">
        {blogs.map((blog) => (
          <Blog key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Blogs',
  description: blogIntro
}

export default async function BlogsIndex() {
  const categories = await getLatestBlogsByCategory()

  return (
    <SimpleLayout
      title={blogHeadLine}
      intro={blogIntro}
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col">
          {categories.map(({ category, blogs }) => (
            <CategorySection key={category} category={category} blogs={blogs} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
