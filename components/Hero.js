import Image from 'next/image'

import HeroImage from '../public/hero-printing.jpeg'

const Hero = () => {
  return (
    <section className='h-[100vh] flex items-center lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden relative'>
      <div className='xl:absolute z-10 px-24 xl:bottom-[15rem] right-[10rem] xl:right-[30rem] flex flex-col gap-2'>
        <p className='text-2xl md:text-5xl xl:text-7xl'>Intuitive design.</p>
        <p className='text-2xl md:text-5xl xl:text-7xl font-extrabold'>Engineering Power.</p>
        <p className='text-xl md:text-md xl:text-xl mt-5'>
          We design & build extraordinary websites and mobile apps of all sizes.
        </p>
      </div>
      <div
        className='fixed w-full lg:w-[900px] h-[67%] rounded-sm bottom-20 right-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url('/hero-printing.jpeg')`,
        }}
      />
    </section>
  )
}

export default Hero
