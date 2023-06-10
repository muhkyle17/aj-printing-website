const Footer = () => {
  return (
    <div className='w-full bg-primary pt-14 pb-[1px]'>
      <div className='flex flex-row justify-between px-32 mx-auto container mb-20 text-primaryBackground bg-primary'>
        <div className='flex flex-col gap-2 w-2/3'>
          <h3 className='text-3xl'>North Graphic Supplies</h3>
          <p className='text-sm'>Printing company based in Davao, Philippines</p>
        </div>
        <div className='flex gap-32 justify-around w-2/3'>
          <div className='flex flex-col gap-5'>
            <h3 className='text-2xl'>Services</h3>
            <p>Company</p>
            <p>Products</p>
            <p>Market</p>
          </div>
          <div className='flex flex-col gap-5'>
            <h3 className='text-2xl'>Contact</h3>
            <p>Email</p>
            <p>Phone Number</p>
            <p>Socials</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
