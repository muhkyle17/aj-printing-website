import Image from 'next/image'

import HeroImage from '../public/hero-printing.jpeg'

const Hero = () => {
  return (
    <section className='h-[100vh] flex items-center lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden relative'>
      <div className='h-[80%] container mx-auto flex items-end'>
        <div className='z-10'>
          <p className='text-5xl'>Intuitive design.</p>
          <p className='text-5xl'>Engineering Power</p>
          <p className='text-5xl'>
            We design & build extraordinary websites and mobile apps of all sizes.
          </p>
        </div>
        <div className='absolute right-0'>
          <Image
            src={HeroImage}
            alt='Hero Image'
            width={1050}
            height='auto'
            className='rounded-md'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
