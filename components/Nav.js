import Link from 'next/link'

const Nav = () => {
  const baseStyles = 'hover:text-black transition-all duration-300'

  return (
    <ul className='hidden lg:flex justify-between items-center text-base font-bold uppercase md:w-[50%] xl:w-[40%]'>
      <li className={`${baseStyles}`}>
        <Link href='/'>Home</Link>
      </li>
      <li className={`${baseStyles}`}>
        <Link href='/company'>Company</Link>
      </li>
      <li className={`${baseStyles}`}>
        <Link href='/products'>Products</Link>
      </li>
      <li className={`${baseStyles}`}>
        <Link href='/markets'>Market</Link>
      </li>
      <li className={`${baseStyles}`}>
        <Link href='/contact'>Contact</Link>
      </li>
    </ul>
  )
}

export default Nav
