import { useState } from 'react'
import { XIcon } from '@heroicons/react/outline'
import { MenuAlt3Icon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 250,
      transition: {
        type: 'spring',
        stiffness: '150',
        damping: '50',
      },
    },
  }

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  }

  const navigation = [
    {
      name: 'work',
      href: 'work',
    },
    {
      name: 'services',
      href: 'services',
    },
    {
      name: 'solutions',
      href: 'solutions',
    },
    {
      name: 'company',
      href: 'company',
    },
    {
      name: 'contact',
      href: 'contact',
    },
  ]

  return (
    <nav className='relative lg:hidden block'>
      <div onClick={() => setIsOpen(true)} className='cursor-pointer text-white'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-8 h-8'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          class='w-6 h-6'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </div>

      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className='w-4 h-4 rounded-full bg-primary fixed top-0 right-0'></motion.div>

      <motion.ul
        variants={ulVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : ''}
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}>
        <div onClick={() => setIsOpen(false)} className='cursor-pointer absolute top-8 right-8'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </div>
        {navigation.map((item, index) => {
          return (
            <li key={index} className='mb-8'>
              <Link href={`/${item.href}`} className='text-xl cursor-pointer capitalize'>
                {item.name}
              </Link>
            </li>
          )
        })}
      </motion.ul>
    </nav>
  )
}

export default NavMobile
