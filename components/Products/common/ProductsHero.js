const ProductsHero = ({ backgroundImage, title, description }) => {
  return (
    <div>
      <div className='relative mt-[7.5rem]'>
        <div
          style={{ backgroundImage: `url('${backgroundImage}')` }}
          className='w-[100vw] h-[60vh] mt-[7.5rem] bg-cover bg-no-repeat bg-center filter brightness-50 flex items-center justify-center'
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          className='flex flex-col items-center justify-center gap-5 mx-auto container'>
          <h2 className='text-5xl sm:text-7xl text-primaryBackground opacity-100 text-center w-[70vw]'>
            {title}
          </h2>
          <p className='text-center text-xl sm:text-3xl text-primaryBackground leading-10'>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductsHero
