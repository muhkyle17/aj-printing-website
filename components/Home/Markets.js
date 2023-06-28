import Link from 'next/link'

const Markets = () => {
  return (
    <div className='h-full flex flex-col gap-10 md:gap-20 items-center container mx-auto mb-[100px]'>
      <div className='flex flex-col items-center md:items-baseline'>
        <p className='text-5xl md:text-6xl text-primary opacity-80'>Explore</p>
        <p className='text-5xl md:text-6xl md:pl-48 text-[#43759b]'>Our</p>
        <p className='text-5xl md:text-8xl md:pl-60 text-[#265D6A]'>Markets</p>
      </div>
      <div className='flex flex-col text-center'>
        <div className='text-2xl w-[50vw] max-w-[60vw] text-primary border-b-2 border-t-2 border-gray-300 py-10'>
          <Link href='/' className='hover:text-hoverPrimary transition-all duration-300'>
            B&F
          </Link>
        </div>
        <div className='text-2xl w-[50vw] max-w-[60vw] text-primary border-b-2 border-gray-300 py-10'>
          <Link href='/' className='hover:text-hoverPrimary transition-all duration-300'>
            Healthcare
          </Link>
        </div>
        <div className='text-2xl w-[50vw] max-w-[60vw] text-primary border-b-2 border-gray-300 py-10'>
          <Link href='/' className='hover:text-hoverPrimary transition-all duration-300'>
            Promotions
          </Link>
        </div>
        <div className='text-2xl w-[50vw] max-w-[60vw] text-primary border-b-2 border-gray-300 py-10'>
          <Link href='/' className='hover:text-hoverPrimary transition-all duration-300'>
            Barcodes
          </Link>
        </div>
        <div className='text-2xl w-[50vw] max-w-[60vw] text-primary border-b-2 border-gray-300 py-10'>
          <Link href='/' className='hover:text-hoverPrimary transition-all duration-300'>
            Chemicals
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Markets
