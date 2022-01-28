import React from 'react'
import InfoPost from 'components/infoPost'
import Link from 'next/link'

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <Link href="/detail">
        <a>
          <img src={thumbnail} alt="featured-thumbnail" className="w-full mb-4 rounded-xl" />
        </a>
      </Link>
      <InfoPost {...infoPost} />
    </article>
  )
}
