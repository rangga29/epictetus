import React from 'react'
import InfoPost from '@components/infoPost'
import Link from 'next/link'

export default function featuredPost() {
  return (
    <article>
      <div className="flex flex-wrap items-start -mx-6 lg:items-center">
        <div className="w-full px-4 lg:w-8/12 md:w-7/12">
          <Link href="/detail">
            <a>
              <img src="/featured-thumbnail.png" alt="featured-thumbnail" className="w-full mb-4 rounded-xl md:mb-0" />
            </a>
          </Link>
        </div>
        <div className="w-full px-4 lg:w-4/12 md:w-5/12">
          <InfoPost
            category="UI Design"
            date="July 2 ,2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            authorAvatar="/author-1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
      <hr className="mt-10 border-white/10 md:hidden" />
    </article>
  )
}
