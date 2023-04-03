import Link from 'next/link'
import { useState } from 'react'

import Nav from '../Nav'

const Header = () => {
  const [bg, setBg] = useState(false)

  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } items-center fixed top-0 w-full z-10 transition-all duration-300 py-12 px-10 md:px-7 lg:px-0`}>
      <div className='flex justify-between text-white transition-all duration-300 container mx-auto'>
        <p className='text-lg'>
          <Link href='/'>Insert logo here</Link>
        </p>
        <Nav />
      </div>
    </header>
  )
}

export default Header
