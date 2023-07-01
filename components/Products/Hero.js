const Hero = () => {
  return (
    <div>
      <div className='relative mt-[7.5rem]'>
        <div
          style={{ backgroundImage: `url('/roll-to-roll-hero.jpeg')` }}
          className='w-[100vw] h-[60vh] mt-[7.5rem] bg-cover bg-no-repeat bg-center filter brightness-50 flex items-center justify-center'
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          className='flex flex-col gap-5'>
          <h2 className='text-7xl text-primaryBackground opacity-100 text-center w-[70vw]'>
            Roll to Roll Labels
          </h2>
          <p className='text-center text-3xl text-primaryBackground leading-10'>
            Roll to roll labels by NGS will print out high quality printing labels for various
            applications such as product packaging, shipping labels, barcodes, and promotional
            stickers.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
