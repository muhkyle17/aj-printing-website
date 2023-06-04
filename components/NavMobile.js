import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const NavMobile = ({ bg }) => {
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

  return (
    <nav className='relative lg:hidden block'>
      <div onClick={() => setIsOpen(true)} className='cursor-pointer text-white'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`w-8 h-8 ${bg ? 'text-white' : 'text-primary'}`}
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'>
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
            className='w-9 h-9 text-white'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </div>
        <li className='mb-8'>
          <Link href={'/'} className='text-xl cursor-pointer capitalize text-white'>
            Home
          </Link>
        </li>
        <li className='mb-8'>
          <Link href={'/company'} className='text-xl cursor-pointer capitalize text-white'>
            Company
          </Link>
        </li>
        <li className='mb-8'>
          <Link href={'/product'} className='text-xl cursor-pointer capitalize text-white'>
            Products
          </Link>
        </li>
        <li className='mb-8'>
          <Link href={'/market'} className='text-xl cursor-pointer capitalize text-white'>
            Market
          </Link>
        </li>
        <li className='mb-8'>
          <Link href={'/contact'} className='text-xl cursor-pointer capitalize text-white'>
            Contact
          </Link>
        </li>
      </motion.ul>
    </nav>
  )
}

export default NavMobile
