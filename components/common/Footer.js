import Link from 'next/link'
import Image from 'next/image'
import MailSVG from '../../public/Mail.svg'

const Footer = () => {
  return (
    <div className='w-full bg-primary mt-24 pt-14 pb-[1px] hidden md:block'>
      <div className='flex flex-row justify-between md:gap-16 px-32 mx-auto container mb-20 text-primaryBackground bg-primary'>
        <div className='flex flex-col gap-2 w-1/2 md:w-2/3'>
          <h3 className='text-xl md:text-3xl'>North Graphic Supplies</h3>
          <p className='text-md'>Printing company based in Davao, Philippines</p>
          <p className='text-sm'>
            Export Labels Cmpd., Rasay Ext., Brgy. Daliao, Toril, Davao City, Philippines
          </p>
        </div>
        <div className='flex flex-col lg:flex-row gap-5 lg:gap-32 justify-around w-1/2 md:w-2/3'>
          <div className='flex flex-col gap-5'>
            <h3 className='text-2xl mb-2 opacity-60'>Services</h3>
            <Link href='/company' className='hover:text-hoverPrimary w-fit'>
              Company
            </Link>
            <Link href='/products' className='hover:text-hoverPrimary w-fit'>
              Products
            </Link>
            <Link href='/markets' className='hover:text-hoverPrimary  w-fit'>
              Markets
            </Link>
          </div>
          <div className='flex flex-col gap-5'>
            <h3 className='text-2xl mb-2 opacity-60'>Contact</h3>
            <a
              href='mailto:sales@northgraphicsupplies@gmail.com'
              className='flex flex-col lg:flex-row gap-2'>
              <svg
                id='fico'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-mail'>
                <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
                <polyline points='22,6 12,13 2,6' />
              </svg>
              <span className='text-xs lg:text-base'>sales@northgraphicsupplies.com</span>
            </a>
            <p className='flex gap-1'>
              <svg
                id='fico'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-phone'>
                <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
              </svg>
              +63 82 392 8776
            </p>
            <a
              href='https://www.facebook.com/NorthGraphicPrinting/'
              target='_blank'
              className='border border-white w-fit p-1.5 rounded-full'
              rel='noreferrer'>
              <svg
                id='fico'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-facebook'>
                <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
