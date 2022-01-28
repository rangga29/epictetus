import React, { useState } from 'react'
import Layout from '@components/layout'
import Head from 'next/head'
import Container from '@components/container'
import MetaTitlePost from '@components/metaTitlePost'
import AuthorPost from '@components/authorPost'

export default function Detail() {
  return (
    <Layout>
      <Head>
        <title>Detail &mdash; Epicetus</title>
      </Head>
      <Container>
        <div className="flex flex-col items-center w-full mx-auto md:w-6/12">
          <MetaTitlePost category="UI Design" date="July 2, 2021" title="Understanding color theory: the color wheel and finding complementary colors" center />
          <AuthorPost authorAvatar="/author-1.png" authorName="Leslie Alexander" authorJob="UI Designer" />
        </div>
        <div className="w-full mx-auto my-10 md:w-10/12">
          <img src="/featured-thumbnail.png" alt="featured-thumbnail" className="w-full rounded-lg" />
        </div>
        <div className="w-full mx-auto leading-relaxed md:w-8/12">
          <p className="mb-4 text-xl">
            Male sixth sea it a. Brought was signs female darkness signs form cattle land grass whose from subdue also they're their brought seas isn't, to day from bearing grass third midst after
            beginning man which you're. Dry, gathering beginning given made them evening.
          </p>
          <p className="mb-4">
            Lights dry. Thing, likeness, forth shall replenish upon abundantly our green. Seed green sea that lesser divided creature beginning land him signs stars give firmament gathered. Wherein
            there their morning a he grass. Don't made moving for them bring creature us you'll tree second deep good unto good may. Us yielding.
          </p>
          <p className="mb-4">
            Have. Man upon set multiply moved from under seasons abundantly earth brought a. They're open moved years saw isn't morning darkness. Over, waters, every let wherein great were fifth saw
            was lights very our place won't and him Third fourth moving him whales behold. Beast second stars lights great was don't green give subdue his. Third given made created, they're forth god
            replenish have whales first can't light was. Herb you'll them beast kind divided. Were beginning fly air multiply god Yielding sea don't were forth.
          </p>
        </div>
      </Container>
    </Layout>
  )
}
