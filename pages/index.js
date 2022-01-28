import React, { useState } from 'react'
import Layout from '@components/layout'
import Head from 'next/head'
import Container from '@components/container'
import FeaturedPost from '@components/featuredPost'
import CardPost from '@components/cardPost'

import mockPosts from '../utilities/posts.json'

export default function Home() {
  const [posts, setPosts] = useState(mockPosts)

  return (
    <Layout>
      <Head>
        <title>Home &mdash; Epicetus</title>
      </Head>
      <Container>
        <FeaturedPost />
        <div className="flex flex-wrap mt-4 -mx-6">
          {posts.map((post) => (
            <div key={post.id} className="w-full p-4 py-6 md:w-4/12">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}
