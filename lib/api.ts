import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

if (process.env.NODE_ENV === 'development') require('dotenv').config()

const knex = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ['knex', 'public'],
});

const postsDirectory = join(process.cwd(), '_posts')
const coursesDirectory = join(process.cwd(), '_courses')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

// export function getAllPosts(fields: string[] = []) {
//   const slugs = getPostSlugs()
//   const posts = slugs
//     .map((slug) => getPostBySlug(slug, fields))
//     // sort posts by date in descending order
//     .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
//   return posts
// }

export function getCourseSlugs() {
  return fs.readdirSync(coursesDirectory)
}

export function getCourseBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(coursesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)


  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}
export function getAllCourses(fields: string[] = []) {
  const slugs = getCourseSlugs()
  const courses = slugs.map((slug) => getCourseBySlug(slug, fields))
  return courses
}


export async function getAllPosts() {
  const posts = await knex('blog_posts')
  return posts.map((post: any) => {
    const { id, title, author, body, slug } = post

    return { id, title, author, body, slug }
  })
}

export async function getAllBlogPostSlugs() {
  const posts = await knex.select('slug').from('blog_posts')
  return posts.map((post: any) => {
    const { slug } = post

    return { slug }
  })
}


export async function getBlogPostBySlug(slug: string) {
  const post = await knex.select('title', 'author', 'body').from('blog_posts').where({slug: slug })
  return post[0]
}