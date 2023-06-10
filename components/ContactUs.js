const ContactUs = () => {
  return (
    <div className='container mx-auto w-7/12'>
      <h3 className='text-3xl text-primary mb-3'>{`We'd love to help`}</h3>
      <h3 className='text2xl text-primary mb-8'>{`Reach out and we'll get in touch within 24 hours`}</h3>
      {/* <form action='https://formsubmit.co/kylereyes_09@yahoo.com' method='POST'> */}
      <form
        action='https://formsubmit.co/reyesmikyle17@gmail.com'
        method='POST'
        className='flex flex-col gap-7'>
        <div className='flex flex-row gap-10'>
          <label
            htmlFor='firstName'
            className='w-full flex flex-col gap-1 text-primary font-medium'>
            First Name
            <input
              type='text'
              name='firstName'
              placeholder='John'
              className='w-full rounded-xl py-2 px-3 border-2 border-gray-200 font-normal focus:outline-none'
              required
            />
          </label>
          <label htmlFor='lastName' className='w-full flex flex-col gap-1 text-primary font-medium'>
            Last Name
            <input
              type='text'
              name='lastName'
              placeholder='Doe'
              className='w-full rounded-xl py-2 px-3 border-2 border-gray-200 font-normal focus:outline-none'
              required
            />
          </label>
        </div>
        <div className='flex flex-row gap-10'>
          <label htmlFor='email' className='w-full flex flex-col gap-1 text-primary font-medium'>
            Email Address
            <input
              type='email'
              name='email'
              placeholder='example@gmail.com'
              className='w-full rounded-xl py-2 px-3 border-2 border-gray-200 font-normal focus:outline-none'
              required
            />
          </label>
          <label htmlFor='company' className='w-full flex flex-col gap-1 text-primary font-medium'>
            Company Name
            <input
              type='text'
              name='company'
              placeholder='Company Name'
              className='w-full rounded-xl py-2 px-3 border-2 border-gray-200 font-normal focus:outline-none'
              required
            />
          </label>
        </div>
        <label htmlFor='message' className='flex flex-col gap-1 text-primary font-medium'>
          Message
          <textarea
            type='text'
            name='message'
            rows='4'
            cols='50'
            className='w-full rounded-xl py-2 px-3 border-2 border-gray-200 font-normal focus:outline-none'
            placeholder='Leave us a message...'
          />
        </label>
        <button
          type='submit'
          className='bg-primary border-2 border-primary rounded-xl py-2 font-medium text-white hover:bg-primaryBackground hover:text-primary transition-all duration-300'>
          Send Message
        </button>
        <input type='hidden' name='_captcha' value='false' />
      </form>
    </div>
  )
}

export default ContactUs
