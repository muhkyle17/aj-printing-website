const Hero = () => {
  return (
    <section className='h-[100vh] flex items-center py-32 lg:py-0 overflow-hidden relative'>
      <div className='lg:absolute z-10 px-24 container w-full sm:w-auto lg:bottom-[17rem] lg:right-[30rem] 2xl:right-[40vw] flex flex-col gap-2 text-primary text-center md:text-left text-2xl sm:text-4xl md:text-6xl xl:text-7xl'>
        <span>Printing Power</span>
        <span className='font-extrabold sm:leading-[4.4rem]'>High Quality Labels</span>
        <span className='text-md md:text-lg xl:text-xl mt-5'>For Your Brand Needs.</span>
      </div>
      <div
        className='w-full lg:w-[800px] xl:w-[50%] h-[70vh] rounded-md opacity-50 xl:opacity-80 absolute right-[-3px] bg-cover bg-no-repeat bg-fixed bg-right'
        style={{
          backgroundImage: `url('/hero-printing.jpeg')`,
        }}
      />
    </section>
  )
}

export default Hero
