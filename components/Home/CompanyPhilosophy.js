import Image from 'next/image'
import printingImage from '../../public/printing-image.jpeg'
import printingImage2 from '../../public/print-image-2.jpeg'

const CompanyPhilosophy = () => {
  return (
    <div className='h-full flex flex-col gap-10 md:gap-20 items-center container mx-auto mb-[100px]'>
      <div className='flex flex-col items-center md:items-baseline'>
        <p className='text-6xl md:text-5xl text-primary opacity-80'>Our</p>
        <p className='text-6xl sm:text-8xl md:pl-10 md:mb-5 text-[#43759b]'>Company</p>
        <p className='text-6xl sm:text-7xl md:pl-60 text-[#264D6A]'>Values</p>
      </div>
      <div className='flex xl:flex-row flex-col items-center gap-5 w-full xl:mx-28'>
        <h2 className='text-xl font-medium lg:px-20 xl:px-0 w-3/4 xl:w-1/4 text-primary opacity-80 leading-8'>
          At North Graphic Supplies, we are committed to excellence in every product, embracing new
          technologies, practicing sustainability, prioritizing customer needs, and conducting our
          business with honesty and transparency.
        </h2>
        <div className='flex flex-wrap flex-col justify-center lg:flex-row lg:items-center w-3/4 mx-auto xl:flex-nowrap gap-5'>
          <Image
            src={printingImage}
            alt='Print image'
            className='w-auto rounded-[50px] h-auto md:h-[25rem]'
          />
          <Image
            src={printingImage2}
            alt='Print image'
            className='w-auto rounded-[50px] self-center h-auto md:h-[25rem]'
          />
        </div>
      </div>
    </div>
  )
}

export default CompanyPhilosophy
