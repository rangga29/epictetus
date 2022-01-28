import React from 'react'
import MetaTitlePost from '@components/metaTitlePost'
import AuthorPost from '@components/authorPost'

export default function InfoPost({ category, date, title, shortDescription, authorAvatar, authorName, authorJob }) {
  return (
    <>
      <MetaTitlePost category={category} title={title} date={date} />
      <p className="w-10/12 mt-6 text-white/60">{shortDescription}</p>
      <AuthorPost authorAvatar={authorAvatar} authorName={authorName} authorJob={authorJob} />
    </>
  )
}
