import Link from 'next/link'

const Nav = () => {
  const baseStyles = 'hover:text-black transition-all duration-300'

  return (
    <ul className='hidden lg:flex justify-between items-center text-base font-bold uppercase md:w-[50%] xl:w-[40%]'>
      <li className={`${baseStyles}`}>
        <Link href='/work'>Work</Link>
      </li>
      <li className={`${baseStyles}`}>
        <Link href='/services'>Services</Link>
      </li>
      <li className={`${baseStyles}`}>
        <Link href='/solutions'>Solutions</Link>
      </li>
      <li className={`${baseStyles}`}>
        <Link href='/company'>Company</Link>
      </li>
      <li className={`${baseStyles}`}>
        <Link href='/contact'>Contact</Link>
      </li>
    </ul>
  )
}

export default Nav
