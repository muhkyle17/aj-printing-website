import Image from 'next/image'
import companyHeroImage from '../../public/hero-company-image.jpeg'

const Hero = () => {
  return (
    <>
      <div className='h-screen mt-[150px] md:mt-0 flex flex-wrap-reverse md:flex-nowrap items-center justify-center md:gap-10 mx-auto container'>
        <Image
          src={companyHeroImage}
          alt='Hero Image'
          className='w-auto rounded-3xl max-h-[70vh] self-end sm:self-center'
        />
        <div className='flex flex-col gap-5 text-primary text-center md:text-right'>
          <h2 className='text-4xl sm:text-7xl font-bold'>{`What we're about.`}</h2>
          <h3 className='text-md'>
            Powerful printing solutions driven by a talented team of workers, businessmen and <br />
            printers located in the Philippines.
          </h3>
        </div>
      </div>
    </>
  )
}

export default Hero
