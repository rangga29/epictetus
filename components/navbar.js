import React, { useState } from 'react'
import Container from '@components/container'
import Link from 'next/link'

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false)
  const [offCanvas, setOffCanvas] = useState(false)
  const [search, setSearch] = useState(false)
  const dropdownList = [
    { text: 'Internet', href: '/posts' },
    { text: 'Books', href: '/posts' },
    { text: 'Open Source', href: '/posts' },
  ]

  return (
    <nav className="py-10">
      <Container>
        <div className="flex items-center">
          <div className="flex w-3/12 lg:hidden">
            <button
              onClick={() => {
                setOffCanvas(!offCanvas)
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center w-6/12 lg:w-2/12 lg:justify-start">
            <Link href="/">
              <a>
                <div className="flex items-center justify-center w-10 h-10 mr-4 bg-gray-500 rounded shadow-2xl ">E</div>
              </a>
            </Link>
            <Link href="/">
              <a>Epictetus</a>
            </Link>
          </div>
          <div className="w-3/12 text-right lg:hidden">
            <button
              onClick={() => {
                setSearch(!search)
              }}
            >
              <svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </button>
          </div>
          <div
            className={`fixed top-0 w-full h-full lg:h-auto p-10 lg:p-0 bg-gradient-to-b from-gray-600 to-gray-900 lg:static lg:bg-none lg:w-7/12 transition-all ${
              offCanvas ? 'left-0' : '-left-full'
            } `}
          >
            <button
              className="absolute top-10 right-10 lg:hidden"
              onClick={() => {
                setOffCanvas(false)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </button>
            <ul className="flex flex-col space-y-0 lg:flex-row lg:space-x-14 lg:items-center">
              <li>
                <Link href="/posts">
                  <a className="hover:underline">Backend</a>
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <a className="hover:underline">Frontend</a>
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <a className="hover:underline">Backend</a>
                </Link>
              </li>
              <li className="relative">
                <a className="flex items-center cursor-pointer hover:underline" onClick={() => setDropdown(!dropdown)}>
                  Lainnya
                  <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                {dropdown && (
                  <ul className="absolute mt-4 w-[200px] rounded bg-gray-800 shadow-xl">
                    {dropdownList.map(({ text, href }) => (
                      <li key={text} className="border-b border-white/5 last:border-0">
                        <Link href={href}>
                          <a className="flex px-4 py-3 hover:bg-gray-700/60">{text}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className={`absolute lg:static lg:px-0 left-0 w-full px-10 transition-all ${search ? 'top-10' : '-top-40'} lg:w-3/12`}>
            <button
              className="absolute top-3 right-14 lg:hidden"
              onClick={() => {
                setSearch(false)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </button>
            <input type="text" placeholder="Search..." className="w-full px-6 py-3 pl-12 bg-gray-700 rounded-lg lg:rounded-full bg-search" />
          </div>
        </div>
      </Container>
    </nav>
  )
}
