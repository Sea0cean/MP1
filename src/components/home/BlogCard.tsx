import { Card } from '@/components/shared/Card'
import { formatDate } from '@/lib/formatDate'
import { type BlogType } from '@/lib/blogs'

export function BlogCard({ blog, titleAs }: { blog: BlogType, titleAs?: keyof JSX.IntrinsicElements }) {
  const as = titleAs ?? 'h2'
  return (
    <Card as="article">
        <div className="flex flex-wrap gap-2 mb-6">
          {blog.categories.map((category) => (
            <span 
              key={category}
              className="inline-flex items-center rounded-md bg-gray-50 px-1 py-1 text-sm font-medium font-bold text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-gray-800 dark:text-gray-300"
            >
              {category}
            </span>
          ))}
        </div>
      <Card.Title as={as} href={`/blogs/${blog.slug}`}>
        {blog.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={blog.date} decorate>
        {formatDate(blog.date)}
      </Card.Eyebrow>
        <Card.Description>{blog.description}</Card.Description>
      <Card.Cta>Read blog</Card.Cta>
    </Card>
  )
}
