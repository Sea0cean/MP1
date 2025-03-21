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
  categories: string[]
}

async function importBlog(
  blogFilename: string,
): Promise<BlogType> {
  const source = await fs.readFile(
    path.join(process.cwd(), 'src/content/blog', blogFilename),
    'utf-8'
  )
  
  const { data } = matter(source)
  
  return {
    title: data.title,
    description: data.description,
    author: data.author,
    date: data.date,
    slug: blogFilename.replace(/\.mdx$/, ''),
    categories: Array.isArray(data.categories) ? data.categories : 
                data.categories ? [data.categories] : [],
  }
}

export async function getAllBlogs() {
  let blogFileNames = await glob('*.mdx', {
    cwd: './src/content/blog',
  })

  let blogs = await Promise.all(blogFileNames.map(importBlog))

  // Group blogs by category
  const categoriesMap = new Map<string, BlogType[]>()
  
  blogs.forEach(blog => {
    blog.categories.forEach(category => {
      if (!categoriesMap.has(category)) {
        categoriesMap.set(category, [])
      }
      categoriesMap.get(category)?.push(blog)
    })
  })

  // Convert map to array of category groups
  const categoryGroups = Array.from(categoriesMap.entries())
    .map(([category, blogs]) => ({
      category,
      blogs: blogs.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
      latestDate: new Date(blogs[0].date) // First blog is newest after sort
    }))

  // Sort categories by their latest blog date
  const sortedCategories = categoryGroups.sort((a, b) => 
    b.latestDate.getTime() - a.latestDate.getTime()
  )

  return {
    sortedCategories,
    allBlogs: sortedCategories.flatMap(group => group.blogs)
  }
}

export async function getBlogsByCategory(category: string): Promise<BlogType[]> {
  const { allBlogs } = await getAllBlogs()
  return allBlogs.filter((blog: BlogType) => 
    blog.categories.some((cat: string) => 
      cat.toLowerCase() === category.toLowerCase()
    )
  )
}

export async function getBlogBySlug(slug: string): Promise<BlogType | null> {
  try {
    const cleanSlug = slug.replace(/\.mdx$/, '')
    return await importBlog(`${cleanSlug}.mdx`)
  } catch (error) {
    console.error(`Failed to load blog with slug: ${slug}`, error)
    return null
  }
}
