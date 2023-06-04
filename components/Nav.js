import Link from 'next/link'
import { useState } from 'react'

const Nav = () => {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false)
  const [showMarketsDropdown, setShowMarketsDropdown] = useState(false)

  const baseStyles = 'hover:text-hoverPrimary transition-all duration-300'
  const baseDropdownStyles =
    'flex flex-col absolute bg-[#efeee5] w-max shadow-[4px_20px_10px_0_rgba(0,0,0,0.3)] rounded-md'
  const baseSubDropdownStyles =
    'text-primary hover:bg-primary hover:text-white py-4 px-5 transition-all duration-300'

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
          {showProductsDropdown && (
            <div className={`${baseDropdownStyles}`}>
              <Link className={`${baseSubDropdownStyles}`} href='/'>
                Roll to roll labels
              </Link>
              <Link className={`${baseSubDropdownStyles}`} href='/'>
                Sheeted Labels
              </Link>
              <Link className={`${baseSubDropdownStyles} rounded-b-md`} href='/'>
                In Mould Labels
              </Link>
            </div>
          )}
        </Link>
      </li>
      <li className={`${baseStyles} relative`}>
        <Link
          href='/markets'
          className='dropdown-hover'
          onMouseEnter={() => setShowMarketsDropdown(true)}
          onMouseLeave={() => setShowMarketsDropdown(false)}>
          Market
          {showMarketsDropdown && (
            <div className={`${baseDropdownStyles}`}>
              <Link className={`${baseSubDropdownStyles}`} href='/'>
                B&F
              </Link>
              <Link className={`${baseSubDropdownStyles}`} href='/'>
                Healthcare
              </Link>
              <Link className={`${baseSubDropdownStyles}`} href='/'>
                Promotions
              </Link>
              <Link className={`${baseSubDropdownStyles}`} href='/'>
                Barcodes
              </Link>
              <Link className={`${baseSubDropdownStyles} rounded-b-md`} href='/'>
                Chemicals
              </Link>
            </div>
          )}
        </Link>
      </li>
      <li className={`${baseStyles}`}>
        <Link href='/contact'>Contact</Link>
      </li>
    </ul>
  )
}

export default Nav
