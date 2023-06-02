import Image from 'next/image'
import printingImage from '../public/printing-image.jpeg'
import printingImage2 from '../public/print-image-2.jpeg'

const CompanyPhilosophy = () => {
  return (
    <div className='h-[100vh] flex flex-col gap-20 items-center container mx-auto'>
      <div className='flex flex-col'>
        <p className='text-5xl text-primary opacity-80'>Our</p>
        <p className='text-8xl pl-10 mb-5 text-[#43759b]'>Company</p>
        <p className='text-7xl pl-60 text-[#264D6A]'>Values</p>
      </div>
      <div className='flex items-center gap-3 w-full mx-28'>
        <p className='text-base mr-10 text-primary opacity-80 leading-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, officiis nostrum
          voluptatum iste quas mollitia explicabo nisi eveniet perferendis, cumque et ipsum
          consectetur laborum nulla facilis quam magnam nam placeat possimus saepe earum!
        </p>
        <Image src={printingImage} alt='Print image' className='w-4/6 rounded-[50px] h-[25rem]' />
        <Image src={printingImage2} alt='Print image' className='w-2/6 rounded-[50px] h-[25rem]' />
      </div>
    </div>
  )
}

export default CompanyPhilosophy
