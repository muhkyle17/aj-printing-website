import Link from 'next/link'

const Nav = () => {
  const baseStyles = 'hover:text-primary transition-all duration-300'

  return (
    <ul className='hidden lg:flex justify-between items-center text-base font-bold uppercase md:w-[50%] xl:w-[40%]'>
      <li className={`${baseStyles}`}>
        <Link href='/'>Work</Link>
      </li>
      <li className={`${baseStyles}`}>
        <Link href='/'>Services</Link>
      </li>
      <li className={`${baseStyles}`}>
        <Link href='/'>Solutions</Link>
      </li>
      <li className={`${baseStyles}`}>
        <Link href='/'>Company</Link>
      </li>
      <li className={`${baseStyles}`}>
        <Link href='/'>Contact</Link>
      </li>
    </ul>
  )
}

export default Nav
