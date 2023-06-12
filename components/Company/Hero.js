import Image from 'next/image'
import companyHeroImage from '../../public/hero-company-image.jpeg'

const Hero = () => {
  return (
    <>
      <div className='h-screen flex items-center justify-center gap-10 mx-auto container'>
        <Image src={companyHeroImage} alt='Hero Image' className='w-auto rounded-3xl h-[70vh]' />
        <div className='flex flex-col gap-5 text-primary text-right'>
          <h2 className='text-7xl font-bold'>{`What we're about.`}</h2>
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
