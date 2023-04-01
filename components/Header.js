import Link from 'next/link'

const Header = () => {
  return (
    <div className='w-full flex justify-between py-12 px-32'>
      <p className='text-lg'>
        <Link href='/'>Insert logo here</Link>
      </p>
      <ul className='flex justify-between items-center text-md font-bold uppercase w-[50%]'>
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
    </div>
  )
}

export default Header
