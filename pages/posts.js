import React, { useState } from 'react'
import Layout from '@components/layout'
import Head from 'next/head'
import Container from '@components/container'
import SectionHeader from '@components/sectionHeader'
import CardPost from '@components/cardPost'

import mockPosts from '../utilities/posts.json'

export default function Posts() {
  const [posts, setPosts] = useState(mockPosts)

  return (
    <Layout>
      <Head>
        <title>Posts &mdash; Epicetus</title>
      </Head>
      <Container>
        <SectionHeader>UI Design</SectionHeader>
        {!posts.length ? (
          <div className="py-20 text-center">
            <h2 className="text-6xl">No Result 😥</h2>
            <p className="w-full mx-auto mt-4 text-xl md:w-6/12 text-white/60">We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.</p>
          </div>
        ) : (
          <div className="flex flex-wrap mt-4 -mx-6">
            {posts.map((post) => (
              <div key={post.id} className="w-full p-4 py-6 md:w-4/12">
                <CardPost {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  )
}
