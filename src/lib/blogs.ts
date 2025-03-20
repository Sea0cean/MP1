import glob from 'fast-glob'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogType = {
  title: string
  description: string
  author: string
  date: string
  slug: string
  category?: string
}

export type CategoryType = {
  name: string
  description: string
  slug: string
  blogs: BlogType[]
}

async function importBlog(
  blogFilename: string,
): Promise<BlogType> {
  const filePath = path.join(process.cwd(), 'src/content/blog', blogFilename)
  const source = await fs.readFile(filePath, 'utf-8')

  const { data } = matter(source)

  // Generate slug from relative path
  const slug = blogFilename
    .replace(/\.mdx$/, '')
    .replace(/\\/g, '/') // Normalize path separators

  // @ts-expect-error
  return {
    slug,
    ...data,
  }
}

export async function getAllBlogs() {
  // Get all mdx files recursively
  let blogFileNames = await glob('*/*.mdx', {
    cwd: './src/content/blog',
  })

  // Import all blogs
  let blogs = await Promise.all(blogFileNames.map(importBlog))

  // Add category information based on folder structure
  blogs = blogs.map(blog => {
    const parts = blog.slug.split('/')
    if (parts.length > 1) {
      return {
        ...blog,
        category: parts[0]
      }
    }
    return blog
  })

  return blogs.sort((a, z) => {
    const aDate = a.date ? +new Date(a.date) : 0;
    const zDate = z.date ? +new Date(z.date) : 0;
    return zDate - aDate;
  })
}

export async function getLatestBlogsByCategory(limit = 3) {
  const blogs = await getAllBlogs()

  // Group blogs by category
  const categoriesMap = blogs.reduce((acc, blog) => {
    const category = blog.category || 'Uncategorized'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(blog)
    return acc
  }, {} as Record<string, BlogType[]>)

  // Get latest blogs for each category
  const result = Object.entries(categoriesMap).map(([category, blogs]) => ({
    category,
    blogs: blogs.slice(0, limit)
  }))

  return result
}

export async function getBlogsByCategory(category: string) {
  const blogs = await getAllBlogs()
  return blogs.filter(blog => blog.category === category)
}

export async function getCategories(): Promise<CategoryType[]> {
  const blogs = await getAllBlogs()

  // Group blogs by category
  const categoriesMap = blogs.reduce((acc, blog) => {
    const category = blog.category || 'Uncategorized'
    if (!acc[category]) {
      acc[category] = {
        name: category,
        slug: category.toLowerCase().replace(/\s+/g, '-'),
        description: '',
        blogs: []
      }
    }
    acc[category].blogs.push(blog)
    return acc
  }, {} as Record<string, CategoryType>)

  // Convert to array and sort
  return Object.values(categoriesMap).sort((a, z) => a.name.localeCompare(z.name))
}

export async function getBlogBySlug(slug: string): Promise<BlogType | null> {
  try {
    // 移除可能存在的 .mdx 扩展名
    const cleanSlug = slug.replace(/\.mdx$/, '')

    // 获取所有博客
    const allBlogs = await getAllBlogs()

    // 查找匹配的博客
    const blog = allBlogs.find(b => {
      // 规范化路径
      const normalizePath = (path: string) =>
        path.replace(/\\/g, '/')
          .replace(/^\/|\/$/g, '') // 移除开头结尾的斜杠
          .toLowerCase()

      const blogSlug = normalizePath(b.slug)
      const inputSlug = normalizePath(cleanSlug)

      // 调试日志
      console.log('Comparing slugs:', {
        blogSlug,
        inputSlug,
        match: blogSlug === inputSlug
      })

      // 允许匹配带或不带分类前缀的slug
      return blogSlug === inputSlug ||
        blogSlug.endsWith(`/${inputSlug}`)
    })

    if (blog) {
      return blog
    }

    // 如果找不到，尝试直接加载文件
    try {
      const blogPath = `${cleanSlug}.mdx`
      console.log('Attempting to load blog directly:', blogPath)
      return await importBlog(blogPath)
    } catch (error) {
      console.error(`Failed to load blog with slug: ${slug}`, error)
      return null
    }
  } catch (error) {
    console.error(`Failed to load blog with slug: ${slug}`, error)
    return null
  }
}
