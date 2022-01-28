import React from 'react'
import Link from 'next/link'

export default function MetaTitlePost({ category, title, date, center }) {
  return (
    <>
      <div className="flex items-center space-x-4 text-white/60">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div className="">{date}</div>
      </div>
      <h2 className={`mt-5 text-2xl ${center ? 'text-center' : ''}`}>
        <Link href="/detail">
          <a>{title}</a>
        </Link>
      </h2>
    </>
  )
}
