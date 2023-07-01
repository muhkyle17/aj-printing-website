import Image from 'next/image'

const About = ({ header, description, image }) => {
  return (
    <div className='container mx-auto mt-20 flex flex-row justify-center gap-10'>
      <div className='w-1/3 text-primary'>
        <h2 className='text-xl'>{header}</h2>
        <p>{description}</p>
      </div>
      <Image src={image} alt='Product Type Image' className={`w-1/3 ${'max-h-[17rem]'}`} />
    </div>
  )
}

export default About
