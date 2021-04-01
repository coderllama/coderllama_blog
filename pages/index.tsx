import Container from '../components/container'
import Head from 'next/head'
import RecentPosts from '../components/recent-posts'
import PostType from '../types/post'
import Layout from '../components/layout'
import NavRoomLayout from '../components/nav-room-layout'

import knex from 'knex'

type Props = {
  recentPosts: PostType[]
}

const Index = () => {
  return (
    <>
    </>
  )
}

export default Index

// export const getStaticProps = async () => {

//   const database = knex({
//     client: 'pg',
//     connection: process.env.DATABASE_CONNECTION_POOL_URL
//   })

//   return {
//     props: { recentPosts: await database('posts').select() }
//   };
// }
