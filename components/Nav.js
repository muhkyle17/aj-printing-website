import Link from 'next/link'
import { useState } from 'react'

const Nav = () => {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false)
  const [showMarketsDropdown, setShowMarketsDropdown] = useState(false)

  const baseStyles = 'hover:text-black transition-all duration-300'

  return (
    <ul className='hidden lg:flex justify-between items-center text-base font-bold uppercase md:w-[50%] xl:w-[40%]'>
      <li className={`${baseStyles}`}>
        <Link href='/'>Home</Link>
      </li>
      <li className={`${baseStyles}`}>
        <Link href='/company'>Company</Link>
      </li>
      <li className={`${baseStyles} relative`}>
        <Link
          href='/products'
          className='dropdown-hover'
          onMouseEnter={() => setShowProductsDropdown(true)}
          onMouseLeave={() => setShowProductsDropdown(false)}>
          Products
        </Link>
        {showProductsDropdown && (
          <div className='absolute flex flex-col'>
            <Link href='/'>Roll to roll labels</Link>
            <Link href='/'>Sheeted Labels</Link>
            <Link href='/'>In Mould Labels</Link>
          </div>
        )}
      </li>
      <li className={`${baseStyles} relative`}>
        <Link
          href='/markets'
          className='dropdown-hover'
          onMouseEnter={() => setShowMarketsDropdown(true)}
          onMouseLeave={() => setShowMarketsDropdown(false)}>
          Market
        </Link>
        {showMarketsDropdown && (
          <div className='flex flex-col absolute'>
            <Link href='/'>B&F</Link>
            <Link href='/'>Healthcare</Link>
            <Link href='/'>Promotions</Link>
            <Link href='/'>Barcodes</Link>
            <Link href='/'>Chemicals</Link>
          </div>
        )}
      </li>
      <li className={`${baseStyles}`}>
        <Link href='/contact'>Contact</Link>
      </li>
    </ul>
  )
}

export default Nav
