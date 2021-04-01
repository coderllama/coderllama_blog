import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../../components/container'
import PostBody from '../../../components/post-body'
import { getPostBySlug, getAllBlogPostSlugs, getBlogPostBySlug } from '../../../lib/api'
import PostTitle from '../../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../../lib/markdownToHtml'

type BlogPostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: string // <== needs to be type Author, this is for testing
  excerpt: string
  body: string
}



type Props = {
  post: BlogPostType
  body: string
}

const Post = ({ post, body }: Props) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }
  return (
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title}
                </title>
              </Head>

              <h1>
                {post.title}
              </h1>

              <PostBody content={body} />
            </article>
          </>
        )}
      </Container>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getServerSideProps(context: any) {

  const post = await getBlogPostBySlug(context.params.slug)
  const body = await markdownToHtml(post.body || '')

  return {
    props:{
      post,
      body
    },
  }
}
