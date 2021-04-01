import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import RecentPosts from '../../components/recent-posts'

const Index = ({posts}:any) => {
  return (
    <>
        <Head>
          <title> Blog | Coder Llama </title>
        </Head>
        <Container>
          <RecentPosts posts={posts}/>
        </Container>
    </>
  )
}

export default Index

export const getServerSideProps = async () => {
  const posts = await getAllPosts()

  console.log(posts)

  return {
    props: { posts },
  }
}
