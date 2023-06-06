const ContactUs = () => {
  return (
    <div>
      {/* <form action='https://formsubmit.co/kylereyes_09@yahoo.com' method='POST'> */}
      <form
        action='https://formsubmit.co/reyesmikyle17@gmail.com'
        method='POST'
        className='container mx-auto w-7/12 flex flex-col gap-10'>
        <div className='flex flex-row gap-16'>
          <label htmlFor='firstName' className='w-full flex flex-col gap-1'>
            First Name
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              className='w-full rounded-xl py-2 px-3 border-2 border-gray-200'
              required
            />
          </label>
          <label htmlFor='lastName' className='w-full flex flex-col gap-1'>
            Last Name
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              className='w-full rounded-xl py-2 px-3 border-2 border-gray-200'
              required
            />
          </label>
        </div>
        <div className='flex flex-row gap-16'>
          <label htmlFor='email' className='w-full flex flex-col gap-1'>
            Email Address
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              className='w-full rounded-xl py-2 px-3 border-2 border-gray-200'
              required
            />
          </label>
          <label htmlFor='company' className='w-full flex flex-col gap-1'>
            Company Name
            <input
              type='text'
              name='company'
              placeholder='Company Name'
              className='w-full rounded-xl py-2 px-3 border-2 border-gray-200'
              required
            />
          </label>
        </div>
        <label htmlFor='message' className='flex flex-col gap-1'>
          Message
          <textarea
            type='text'
            name='message'
            rows='4'
            cols='50'
            className='w-full rounded-xl py-2 px-3 border-2 border-gray-200'
            placeholder='Leave us a message...'
          />
        </label>
        <button type='submit'>Send</button>
        <input type='hidden' name='_captcha' value='false' />
      </form>
    </div>
  )
}

export default ContactUs
