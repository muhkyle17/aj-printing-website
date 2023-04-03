import Link from 'next/link'
import { useState } from 'react'

import Nav from '../Nav'

const Header = () => {
  const [bg, setBg] = useState(false)

  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full z-50 transition-all duration-300 py-8// px-10 md:px-7 lg:px-0`}>
      <div className='flex items-center justify-between text-white transition-all duration-300 container mx-auto'>
        <h1 className='name text-5xl hover:text-primary transition-all duration-300'>
          <Link href='/'>Insert logo here</Link>
        </h1>
        <Nav />
      </div>
    </header>
  )
}

export default Header
