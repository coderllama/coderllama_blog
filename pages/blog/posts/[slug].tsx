import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../../components/container'
import PostBody from '../../../components/post-body'
import CustomErrorPage from '../../../components/custom-error-page'
import { getPostBySlug, getAllBlogPostSlugs, getBlogPostBySlug } from '../../../lib/api'
import PostTitle from '../../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../../lib/markdownToHtml'
import styles from './blog-post.module.css'

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
  post?: BlogPostType | null
  body?: string
}

const Post = (props: Props) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if (!router.isFallback && props.post === null) {
    return <CustomErrorPage statusCode={'404'} />
  }

  const { post, body } = props

  return (
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post?.title}
                </title>
              </Head>

              <h1 className={ styles.postTitle }>
                {post?.title}
              </h1>

              <div className={styles.coverImgContainer}>
                <img className={styles.coverImg} src={ "https://images.pexels.com/photos/96894/pexels-photo-96894.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" } ></img>
                <p> Photo from Pexels.com </p>
              </div>

              <PostBody content={body  || ''} />
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

  var post = await getBlogPostBySlug(context.params.slug)
  const body = await markdownToHtml(post?.body || '')

  if (!post) {
    post = null
  }

  return {
    props:{
      post,
      body
    },
  }
}
