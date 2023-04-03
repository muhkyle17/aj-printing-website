import Link from 'next/link'

const Nav = () => {
  return (
    <ul className='flex justify-between items-center text-base font-bold uppercase md:w-[60%] lg:w-[40%]'>
      <li>
        <Link href='/'>Work</Link>
      </li>
      <li>
        <Link href='/'>Services</Link>
      </li>
      <li>
        <Link href='/'>Solutions</Link>
      </li>
      <li>
        <Link href='/'>Company</Link>
      </li>
      <li>
        <Link href='/'>Contact</Link>
      </li>
    </ul>
  )
}

export default Nav
