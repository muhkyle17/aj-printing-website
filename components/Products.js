import Link from 'next/link'

const Products = () => {
  return (
    <div className='h-full flex flex-col gap-10 md:gap-20 items-center container mx-auto mb-[100px]'>
      <div className='flex flex-col items-center md:items-baseline'>
        <p className='text-5xl md:text-6xl text-primary opacity-80'>Discover</p>
        <p className='text-5xl md:text-6xl md:pl-40 text-[#43759b]'>Our</p>
        <p className='text-5xl md:text-8xl md:pl-60 text-[#265D6A]'>Products</p>
      </div>
      <div className='flex flex-col text-center'>
        <div className='text-3xl w-[42rem] text-primary border-b-2 border-t-2 border-gray-300 py-10'>
          <Link href='/' className='hover:text-hoverPrimary transition-all duration-300'>
            Roll to Roll Labels
          </Link>
        </div>
        <div className='text-3xl w-[42rem] text-primary border-b-2 border-gray-300 py-10'>
          <Link href='/' className='hover:text-hoverPrimary transition-all duration-300'>
            Sheeted Labels
          </Link>
        </div>
        <div className='text-3xl w-[42rem] text-primary border-b-2 border-gray-300 py-10'>
          <Link href='/' className='hover:text-hoverPrimary transition-all duration-300'>
            In Mould Labels
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Products
