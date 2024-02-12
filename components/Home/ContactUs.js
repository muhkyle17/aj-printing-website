const ContactUs = ({ contactPage }) => {
  return (
    <section
      className={`container mx-auto flex flex-wrap lg:flex-nowrap items-center justify-between gap-10 lg:gap-20 w-full pt-32 lg:py-0 overflow-hidden relative ${
        contactPage && 'mt-[10rem]'
      }`}>
      <div className='flex flex-col items-start justify-center lg:w-1/2 gap-8 lg:gap-16'>
        <h3 className='text-6xl sm:text-7xl tracking-wide font-semibold text-primary'>{`Contact Us`}</h3>
        <h3 className='text-lg sm:text-lg tracking-wide text-primary'>
          <span className='font-semibold text-xl'>
            We&lsquo;re here to deliver the print revolution.
          </span>
          <br />
          Reach out, let us know what you need. We&lsquo;ll get in touch within 24 hours.
        </h3>
        <div>
          <p className='text-primary text-lg'>+63 82 392 8776</p>
          <p className='text-primary text-sm sm:text-lg break-normal'>
            sales@northgraphicsupplies.com
          </p>
        </div>
      </div>

      <div className='hidden lg:block h-[35rem] border-r-2 border-primary' />

      <div className='mb-20 w-full md:mb-0 lg:w-1/2'>
        <form
          action='https://formsubmit.co/sales@northgraphicsupplies@gmail.com'
          method='POST'
          className='flex flex-col gap-7'>
          {/* <form
          action='https://formsubmit.co/reyesmikyle17@gmail.com'
          method='POST'
          className='flex flex-col gap-7'> */}
          <input
            type='text'
            name='firstName'
            placeholder='Your first name'
            className='w-full py-2 bg-transparent border-b border-primary font-normal text-xl text-primary placeholder:text-gray-500 focus:outline-none'
            required
          />

          <input
            type='text'
            name='lastName'
            placeholder='Your last name'
            className='w-full py-2 bg-transparent border-b border-primary font-normal text-xl text-primary placeholder:text-gray-500 focus:outline-none'
            required
          />

          <input
            type='email'
            name='email'
            placeholder='Email address'
            className='w-full py-2 bg-transparent border-b border-primary font-normal text-xl text-primary placeholder:text-gray-500 focus:outline-none'
            required
          />
          <input
            type='text'
            name='company'
            placeholder='Company Name'
            className='w-full py-2 bg-transparent border-b border-primary font-normal text-xl text-primary placeholder:text-gray-500 focus:outline-none'
            required
          />

          <textarea
            type='text'
            name='message'
            rows='4'
            cols='50'
            className='w-full py-2 bg-transparent border-b border-primary font-normal text-xl text-primary placeholder:text-gray-500 focus:outline-none'
            placeholder='Leave us a message...'
          />

          <button
            type='submit'
            className='bg-primary border-2 border-primary rounded-full py-3 px-5 w-fit font-medium text-white hover:bg-primaryBackground hover:text-primary transition-all duration-300'>
            Send Message
          </button>
          <input type='hidden' name='_captcha' value='false' />
        </form>
      </div>
    </section>
  )
}

export default ContactUs
