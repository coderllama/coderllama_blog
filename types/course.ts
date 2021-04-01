import Author from './author'

type CourseType = {
  slug: string
  title: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  preview?: string
}

export default CourseType
