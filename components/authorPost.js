import React from 'react'

export default function AuthorPost({ authorAvatar, authorName, authorJob }) {
  return (
    <div className="flex items-center mt-5">
      <img src={authorAvatar} alt="author-1" className="object-cover rounded-full h-14 w-14" />
      <div className="ml-4">
        <h3>{authorName}</h3>
        <div className="mt-1 text-sm text-white/60">{authorJob}</div>
      </div>
    </div>
  )
}
