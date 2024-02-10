const ContactUs = ({ contactPage }) => {
  return (
    <section
      className={`flex items-center pt-32 lg:py-0 overflow-hidden relative ${
        contactPage && 'mt-[10rem]'
      }`}>
      <div className='container mx-auto w-7/12 mb-20 md:mb-0'>
        <h3 className='text-xl sm:text-3xl text-primary mb-3'>{`We'd love to help`}</h3>
        <h3 className='text-lg sm:text2xl text-primary mb-8'>{`Reach out and we'll get in touch within 24 hours`}</h3>
        {/* <form action='https://formsubmit.co/kylereyes_09@yahoo.com' method='POST'> */}
        <form
          action='https://formsubmit.co/reyesmikyle17@gmail.com'
          method='POST'
          className='flex flex-col gap-7'>
          <input
            type='text'
            name='firstName'
            placeholder='Your first name'
            className='w-full py-2 bg-transparent border-b border-primary font-normal text-xl placeholder:text-gray-500 focus:outline-none'
            required
          />

          <input
            type='text'
            name='lastName'
            placeholder='Your last name'
            className='w-full py-2 bg-transparent border-b border-primary font-normal text-xl placeholder:text-gray-500 focus:outline-none'
            required
          />

          <input
            type='email'
            name='email'
            placeholder='Email address'
            className='w-full py-2 bg-transparent border-b border-primary font-normal text-xl placeholder:text-gray-500 focus:outline-none'
            required
          />
          <input
            type='text'
            name='company'
            placeholder='Company Name'
            className='w-full py-2 bg-transparent border-b border-primary font-normal text-xl placeholder:text-gray-500 focus:outline-none'
            required
          />

          <textarea
            type='text'
            name='message'
            rows='4'
            cols='50'
            className='w-full py-2 bg-transparent border-b border-primary font-normal text-xl placeholder:text-gray-500 focus:outline-none'
            placeholder='Leave us a message...'
          />

          <button
            type='submit'
            className='bg-primary border-2 border-primary rounded-xl py-2 font-medium text-white hover:bg-primaryBackground hover:text-primary transition-all duration-300'>
            Send Message
          </button>
          <input type='hidden' name='_captcha' value='false' />
        </form>
      </div>
    </section>
  )
}

export default ContactUs
