import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import Header from '../../components/header'
import CourseHeader from '../../components/course-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts, getAllCourses, getCourseBySlug } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import CourseType from '../../types/course'
import { POINT_CONVERSION_UNCOMPRESSED } from 'constants'
import styles from './course.module.css'

type Props = {
  course: CourseType
  moreCourses: CourseType[]
  preview?: boolean
}

const Course = ({ course, moreCourses, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !course?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <CourseHeader author={ course.author } coverImage={ course.coverImage } title={ course.title } />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {course.title} 
                </title>
              </Head>
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Course

type Params = {
  params: {
    slug: string
  }
}

export async function getServerSideProps({ params }: Params) {
  const course = getCourseBySlug(params.slug, [
    'title',
    'slug',
    'author',
    'coverImage',
  ])
  const content = await markdownToHtml(course.content || '')

  return {
    props: {
      course: {
        ...course,
        content,
      },
    },
  }
}

