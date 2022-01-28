import React from 'react'
import Navbar from '@components/navbar'
import Footer from '@components/footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-gray-600 to-gray-900">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
