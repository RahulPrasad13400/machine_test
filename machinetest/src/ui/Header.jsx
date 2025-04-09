import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800'>
    <div className='container mx-auto px-4 py-3'>
        <Link to="/">
        <div className='flex flex-wrap justify-between items-center py-6 font-black tracking-widest'>
            Machine Test
        </div>
        </Link>
    </div>
    </header>
  )
}
