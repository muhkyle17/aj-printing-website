import Image from 'next/image'

const About = ({ header, description1, description2, description3, image, height }) => {
  return (
    <div className='container mx-auto mt-20 flex flex-col md:flex-row justify-center gap-10 mb-16'>
      <div className='w-full md:w-1/3 text-primary flex flex-col gap-4'>
        <h2 className='text-xl'>{header}</h2>
        <p className='tracking-wide'>{description1}</p>
        <p className='tracking-wide'>{description2}</p>
        <p className='tracking-wide'>{description3}</p>
      </div>
      <Image
        src={image}
        alt='Product Type Image'
        className={`max-w-[30rem] rounded-lg w-auto ${height}`}
      />
    </div>
  )
}

export default About
