const CompanyPhilosophy = () => {
  return (
    <div className='h-[100vh] flex flex-col gap-20 items-center container mx-auto'>
      <div className='flex flex-col'>
        <p className='text-5xl text-primary opacity-80'>Our</p>
        <p className='text-8xl pl-10 mb-5 text-[#43759b]'>Company</p>
        <p className='text-7xl pl-60 text-[#264D6A]'>Values</p>
      </div>
      <div className='flex items-center gap-5 container mx-auto'>
        <p className='grow w-5/12 text-md text-primary opacity-80 leading-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, officiis nostrum
          voluptatum iste quas mollitia explicabo nisi eveniet perferendis, cumque et ipsum
          consectetur laborum nulla facilis quam magnam nam placeat possimus saepe earum! Eaque
          natus cum iusto aut facere maxime?
        </p>
        <div className='bg-blue-800 w-4/6 rounded-[50px] h-[25rem]' />
        <div className='bg-blue-800 w-2/6 rounded-[50px] h-[25rem]' />
      </div>
    </div>
  )
}

export default CompanyPhilosophy
