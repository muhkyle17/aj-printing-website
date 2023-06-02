import Link from 'next/link'
import { useState, useEffect } from 'react'

import Nav from '../Nav'
import NavMobile from '../NavMobile'

const Header = () => {
  const [bg, setBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })

  return (
    <header
      className={`${
        bg ? 'bg-primary h-20' : 'h-32'
      } flex items-center fixed top-0 w-full z-50 transition-all duration-300 px-10 md:px-7 lg:px-0`}>
      <div
        className={`flex items-center gap-10 justify-between ${
          bg ? 'text-white' : 'text-primary'
        } transition-all duration-300 container mx-auto`}>
        <h1 className='name hidden sm:block text-4xl font-medium hover:text-black transition-all duration-300'>
          <Link href='/'>North Graphic Supplies</Link>
        </h1>
        <h1 className='name block sm:hidden text-3xl hover:text-black transition-all duration-300'>
          <Link href='/'>NGS</Link>
        </h1>
        <Nav />
        <NavMobile />
      </div>
    </header>
  )
}

export default Header
