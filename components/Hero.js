import Image from 'next/image'

import HeroImage from '../public/hero-printing.jpeg'

const Hero = () => {
  return (
    <section className='h-[100vh] flex items-center py-32 lg:py-0 overflow-hidden relative'>
      <div className='lg:absolute z-10 px-24 lg:bottom-[17rem] lg:right-[22rem] flex flex-col gap-2'>
        <p className='text-4xl md:text-6xl xl:text-7xl'>Intuitive design.</p>
        <p className='text-4xl md:text-6xl xl:text-7xl font-extrabold'>Engineering Power.</p>
        <p className='text-md md:text-lg xl:text-xl mt-5'>
          We design & build extraordinary websites and mobile apps of all sizes.
        </p>
      </div>
      <div
        className='fixed w-full lg:w-[800px] h-[67%] rounded-sm bottom-20 right-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url('/hero-printing.jpeg')`,
        }}
      />
    </section>
  )
}

export default Hero
